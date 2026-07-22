"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function OrbitSystem() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.09;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, state.pointer.y * 0.11, 0.035);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, state.pointer.x * -0.08, 0.035);
  });

  const orbit = (radius: number, tilt: number) => Array.from({ length: 121 }, (_, index) => {
    const angle = (index / 120) * Math.PI * 2;
    return new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.38, Math.sin(angle) * tilt);
  });

  return (
    <group ref={group}>
      <Float speed={1.3} rotationIntensity={0.22} floatIntensity={0.28}>
        <mesh>
          <icosahedronGeometry args={[1.5, 3]} />
          <meshBasicMaterial color="#2B1F4F" wireframe transparent opacity={0.56} />
        </mesh>
        <mesh scale={0.72}>
          <icosahedronGeometry args={[1.5, 1]} />
          <meshBasicMaterial color="#4CEEE8" wireframe transparent opacity={0.65} />
        </mesh>
      </Float>
      <Line points={orbit(2.55, 0.82)} color="#2B1F4F" lineWidth={1} transparent opacity={0.34} />
      <Line points={orbit(2.12, -1.15)} color="#8055FF" lineWidth={1} transparent opacity={0.34} rotation={[0.5, 0.2, 1]} />
      {[
        [-2.25, 0.2, 0.35], [2.25, -0.35, -0.15], [0.7, 1.2, 1.3], [-0.4, -1.15, -1.2],
      ].map((position, index) => (
        <Float key={index} speed={1.5 + index * 0.15} floatIntensity={0.5}>
          <mesh position={position as [number, number, number]}>
            <sphereGeometry args={[index % 2 ? 0.14 : 0.19, 24, 24]} />
            <meshStandardMaterial color={index % 2 ? "#8055FF" : "#4CEEE8"} roughness={0.3} metalness={0.2} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export function SkillsScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6.4], fov: 43 }} dpr={[1, 1.6]} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={1.25} />
      <directionalLight position={[3, 4, 5]} intensity={2.2} color="#C2FFFD" />
      <OrbitSystem />
    </Canvas>
  );
}
