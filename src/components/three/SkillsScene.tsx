"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
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

  return (
    <group ref={group}>
      <Float speed={1.15} rotationIntensity={0.18} floatIntensity={0.2}>
        <mesh>
          <sphereGeometry args={[1.52, 32, 20]} />
          <meshBasicMaterial color="#8055FF" wireframe transparent opacity={0.82} />
        </mesh>
        <mesh scale={0.98}>
          <sphereGeometry args={[1.48, 32, 20]} />
          <meshStandardMaterial color="#2B1F4F" transparent opacity={0.34} roughness={0.22} metalness={0.3} />
        </mesh>
        {[0, 1, 2].map((ring) => (
          <mesh key={ring} rotation={[Math.PI / 2 + ring * 0.35, ring * 0.4, ring * 0.7]}>
            <torusGeometry args={[2.05 + ring * 0.22, 0.012, 8, 140]} />
            <meshBasicMaterial color={ring === 1 ? "#4CEEE8" : "#8055FF"} transparent opacity={0.46} />
          </mesh>
        ))}
      </Float>
      {[
        [-2.15, 0.25, 0.3], [2.2, -0.3, -0.15], [0.65, 1.25, 1.25], [-0.45, -1.15, -1.1],
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
    <Canvas camera={{ position: [0, 0, 6.8], fov: 42 }} dpr={[1, 1.6]} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[3, 4, 5]} intensity={2.4} color="#C2FFFD" />
      <pointLight position={[-3, -2, 3]} intensity={2.2} color="#8055FF" />
      <OrbitSystem />
    </Canvas>
  );
}
