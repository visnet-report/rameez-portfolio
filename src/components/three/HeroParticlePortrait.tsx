"use client";

import Image from "next/image";
import { Canvas, useFrame } from "@react-three/fiber";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

type ParticleData = {
  positions: Float32Array;
  scatter: Float32Array;
  colors: Float32Array;
  seeds: Float32Array;
};

function seededRandom(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function buildParticleData(image: HTMLImageElement): ParticleData {
  const width = 220;
  const cropHeight = Math.round(image.naturalHeight * 0.76);
  const height = Math.round(width * (cropHeight / image.naturalWidth));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) throw new Error("Unable to prepare the hero particle portrait.");

  context.clearRect(0, 0, width, height);
  context.drawImage(image, 0, 0, image.naturalWidth, cropHeight, 0, 0, width, height);
  const pixels = context.getImageData(0, 0, width, height).data;
  const candidates: Array<{ x: number; y: number; luminance: number; alpha: number }> = [];

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const offset = (y * width + x) * 4;
      const alpha = pixels[offset + 3];
      if (alpha < 30) continue;
      const luminance = pixels[offset] * 0.2126 + pixels[offset + 1] * 0.7152 + pixels[offset + 2] * 0.0722;
      const lightness = luminance / 255;
      const headBias = y < height * 0.42 ? 1.28 : 1;
      const density = Math.min(0.92, (0.035 + Math.pow(lightness, 0.82) * 0.72) * headBias);
      if (seededRandom(y * width + x + 701) < density) {
        candidates.push({ x, y, luminance, alpha });
      }
    }
  }

  const maximumPoints = 6200;
  const step = Math.max(1, Math.ceil(candidates.length / maximumPoints));
  const selected = candidates.filter((_, index) => index % step === 0);
  const positions = new Float32Array(selected.length * 3);
  const scatter = new Float32Array(selected.length * 3);
  const colors = new Float32Array(selected.length * 3);
  const seeds = new Float32Array(selected.length);
  const indigo = new THREE.Color("#2b1f4f");
  const aqua = new THREE.Color("#4ceee8");
  const color = new THREE.Color();
  const figureHeight = 6.25;
  const figureWidth = figureHeight * (width / height);

  selected.forEach((point, index) => {
    const seed = seededRandom(index + 1);
    const seedTwo = seededRandom(index + 59);
    const seedThree = seededRandom(index + 307);
    const i3 = index * 3;
    positions[i3] = (point.x / width - 0.5) * figureWidth + (seed - 0.5) * 0.018;
    positions[i3 + 1] = (0.5 - point.y / height) * figureHeight + (seedTwo - 0.5) * 0.018;
    const lightness = point.luminance / 255;
    positions[i3 + 2] = (lightness - 0.16) * 1.3 + (seedThree - 0.5) * 0.22;

    const angle = seed * Math.PI * 2;
    const radius = 0.75 + seedTwo * 3.5;
    scatter[i3] = Math.cos(angle) * radius;
    scatter[i3 + 1] = 1.1 + seedThree * 5.8;
    scatter[i3 + 2] = (seedTwo - 0.5) * 4.4;

    color.copy(indigo).lerp(aqua, Math.min(0.38, 0.035 + lightness * 0.32 + seed * 0.025));
    colors[i3] = color.r;
    colors[i3 + 1] = color.g;
    colors[i3 + 2] = color.b;
    seeds[index] = seed * 0.82 + (point.alpha / 255) * 0.18;
  });

  return { positions, scatter, colors, seeds };
}

const vertexShader = `
  attribute vec3 aScatter;
  attribute float aSeed;
  attribute vec3 aColor;
  uniform float uTime;
  uniform float uProgress;
  uniform float uPixelRatio;
  uniform float uIntro;
  uniform vec2 uPointer;
  varying vec3 vColor;
  varying float vOpacity;

  void main() {
    float progress = smoothstep(0.0, 1.0, uProgress);
    float wave = sin(uTime * (0.65 + aSeed) + aSeed * 42.0);
    vec3 transformed = position;
    transformed.xy += vec2(wave, cos(uTime * 0.7 + aSeed * 31.0)) * 0.012 * (1.0 - progress);

    float headWeight = smoothstep(0.35, 2.8, position.y);
    float yaw = uPointer.x * mix(0.07, 0.31, headWeight);
    float pitch = -uPointer.y * mix(0.025, 0.105, headWeight);
    float cy = cos(yaw);
    float sy = sin(yaw);
    float cp = cos(pitch);
    float sp = sin(pitch);
    vec3 turned = transformed;
    turned.x = transformed.x * cy + transformed.z * sy;
    turned.z = -transformed.x * sy + transformed.z * cy;
    transformed.y = turned.y * cp - turned.z * sp;
    transformed.z = turned.y * sp + turned.z * cp;
    transformed.x = turned.x;

    vec2 pointerTarget = vec2(uPointer.x * 1.55, -uPointer.y * 2.15);
    vec2 pointerDelta = transformed.xy - pointerTarget;
    float pointerDistance = length(pointerDelta);
    float pointerInfluence = exp(-pointerDistance * pointerDistance * 1.15) * (1.0 - progress);
    transformed.xy += normalize(pointerDelta + vec2(0.0001)) * pointerInfluence * 0.085;
    transformed.z += pointerInfluence * 0.48;
    transformed += aScatter * pow(progress, 1.32);
    transformed.y += progress * progress * (0.65 + aSeed * 1.8);

    vec4 modelPosition = modelMatrix * vec4(transformed, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    gl_Position = projectionMatrix * viewPosition;
    gl_PointSize = (1.15 + aSeed * 1.65) * uPixelRatio * uIntro * (1.0 - progress * 0.5);
    gl_PointSize *= 7.5 / max(1.0, -viewPosition.z);
    vColor = aColor;
    vOpacity = uIntro * (1.0 - smoothstep(0.48, 1.0, progress));
  }
`;

const fragmentShader = `
  varying vec3 vColor;
  varying float vOpacity;

  void main() {
    vec2 point = gl_PointCoord - vec2(0.5);
    float distanceToCenter = length(point);
    if (distanceToCenter > 0.5) discard;
    float softEdge = 1.0 - smoothstep(0.3, 0.5, distanceToCenter);
    gl_FragColor = vec4(vColor, softEdge * vOpacity);
  }
`;

function ParticleFigure({ data, onReady }: { data: ParticleData; onReady: () => void }) {
  const group = useRef<THREE.Group>(null);
  const material = useRef<THREE.ShaderMaterial>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const elapsed = useRef(0);

  const geometry = useMemo(() => {
    const buffer = new THREE.BufferGeometry();
    buffer.setAttribute("position", new THREE.BufferAttribute(data.positions, 3));
    buffer.setAttribute("aScatter", new THREE.BufferAttribute(data.scatter, 3));
    buffer.setAttribute("aColor", new THREE.BufferAttribute(data.colors, 3));
    buffer.setAttribute("aSeed", new THREE.BufferAttribute(data.seeds, 1));
    buffer.computeBoundingSphere();
    return buffer;
  }, [data]);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uProgress: { value: 0 },
    uPixelRatio: { value: typeof window === "undefined" ? 1 : Math.min(window.devicePixelRatio, 1.75) },
    uIntro: { value: 0 },
    uPointer: { value: new THREE.Vector2(0, 0) },
  }), []);

  useEffect(() => {
    const updatePointer = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.current.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", updatePointer, { passive: true });
    onReady();
    return () => {
      window.removeEventListener("pointermove", updatePointer);
      geometry.dispose();
    };
  }, [geometry, onReady]);

  useFrame((_, delta) => {
    if (!group.current || !material.current) return;
    elapsed.current += delta;
    const hero = document.querySelector<HTMLElement>("#hero");
    const scrollRange = Math.max(1, (hero?.offsetHeight ?? window.innerHeight) - window.innerHeight);
    const rawProgress = THREE.MathUtils.clamp(window.scrollY / scrollRange, 0, 1);
    const dispersion = THREE.MathUtils.smoothstep(rawProgress, 0.035, 0.62);

    material.current.uniforms.uTime.value = elapsed.current;
    material.current.uniforms.uProgress.value = THREE.MathUtils.lerp(
      material.current.uniforms.uProgress.value,
      dispersion,
      0.08,
    );
    material.current.uniforms.uIntro.value = THREE.MathUtils.lerp(
      material.current.uniforms.uIntro.value,
      1,
      0.075,
    );
    material.current.uniforms.uPointer.value.x = THREE.MathUtils.lerp(
      material.current.uniforms.uPointer.value.x,
      pointer.current.x,
      0.055,
    );
    material.current.uniforms.uPointer.value.y = THREE.MathUtils.lerp(
      material.current.uniforms.uPointer.value.y,
      pointer.current.y,
      0.055,
    );
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, pointer.current.x * 0.045, 0.04);
  });

  return (
    <group ref={group} position={[0, -0.08, 0]}>
      <points geometry={geometry} frustumCulled={false}>
        <shaderMaterial
          ref={material}
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          transparent
          depthWrite={false}
        />
      </points>
    </group>
  );
}

function ParticleCanvas({ src, onReady }: { src: string; onReady: () => void }) {
  const [data, setData] = useState<ParticleData | null>(null);

  useEffect(() => {
    let cancelled = false;
    const image = new window.Image();
    image.decoding = "async";
    image.onload = () => {
      if (!cancelled) setData(buildParticleData(image));
    };
    image.src = src;
    return () => { cancelled = true; };
  }, [src]);

  if (!data) return null;
  return <ParticleFigure data={data} onReady={onReady} />;
}

export function HeroParticlePortrait({ src }: { src: string }) {
  const [ready, setReady] = useState(false);
  const handleReady = useCallback(() => setReady(true), []);

  return (
    <div className="hero-particle-portrait" data-ready={ready ? "true" : "false"}>
      <Image
        className="hero-particle-fallback"
        src={src}
        alt="Editorial silhouette representing Rameez Majeed"
        fill
        priority
        sizes="(max-width: 700px) 110vw, 68vw"
      />
      <div className="hero-particle-canvas" aria-hidden="true">
        <Canvas
          camera={{ position: [0, 0, 8.2], fov: 43 }}
          dpr={[1, 1.75]}
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        >
          <ParticleCanvas src={src} onReady={handleReady} />
        </Canvas>
      </div>
    </div>
  );
}
