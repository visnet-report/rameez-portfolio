"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Float, RoundedBox } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function InterfaceStack() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.pointer.x * 0.16 - 0.18, 0.04);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -state.pointer.y * 0.1 + 0.08, 0.04);
  });
  return (
    <Float speed={1.4} rotationIntensity={0.18} floatIntensity={0.45}>
      <group ref={group} rotation={[0.08, -0.18, -0.035]}>
        <RoundedBox args={[3.4, 2.25, 0.12]} radius={0.12} smoothness={4} position={[0, 0, 0]}>
          <meshStandardMaterial color="#f0efe9" roughness={0.72} metalness={0.05} />
          <Edges color="#171915" />
        </RoundedBox>
        <mesh position={[-1.15, 0.73, 0.07]}>
          <circleGeometry args={[0.065, 24]} />
          <meshBasicMaterial color="#ff5a36" />
        </mesh>
        <mesh position={[-0.95, 0.73, 0.07]}>
          <circleGeometry args={[0.065, 24]} />
          <meshBasicMaterial color="#d7fa59" />
        </mesh>
        {[0.35, 0.05, -0.25, -0.55].map((y, index) => (
          <mesh key={y} position={[-0.62 + index * 0.09, y, 0.075]}>
            <boxGeometry args={[1.6 - index * 0.19, 0.08, 0.025]} />
            <meshBasicMaterial color={index === 0 ? "#171915" : "#7c7e77"} />
          </mesh>
        ))}
        <RoundedBox args={[1.1, 1.32, 0.1]} radius={0.08} smoothness={3} position={[1.63, -0.42, 0.42]} rotation={[0, -0.08, 0.04]}>
          <meshStandardMaterial color="#d7fa59" roughness={0.65} />
          <Edges color="#171915" />
        </RoundedBox>
        <mesh position={[1.63, -0.25, 0.49]}>
          <torusGeometry args={[0.28, 0.075, 16, 40, Math.PI * 1.45]} />
          <meshBasicMaterial color="#171915" />
        </mesh>
        <RoundedBox args={[1.42, 0.74, 0.09]} radius={0.08} smoothness={3} position={[-1.45, -1.05, 0.48]} rotation={[0.03, 0.06, -0.07]}>
          <meshStandardMaterial color="#ff5a36" roughness={0.72} />
          <Edges color="#171915" />
        </RoundedBox>
      </group>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 43 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={2.1} />
      <directionalLight position={[4, 6, 5]} intensity={2.8} />
      <InterfaceStack />
    </Canvas>
  );
}
