"use client";

import { Suspense, useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "./ThemeProvider";

function OrbitingItem({
  geometry,
  color,
  metalness = 0.8,
  roughness = 0.2,
  orbitRadius,
  speed,
  initialAngle = 0,
  yOffset = 0,
}: {
  geometry: React.ReactNode;
  color: string;
  metalness?: number;
  roughness?: number;
  orbitRadius: number;
  speed: number;
  initialAngle?: number;
  yOffset?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime() * speed + initialAngle;
    meshRef.current.position.x = Math.cos(t) * orbitRadius;
    meshRef.current.position.z = Math.sin(t) * orbitRadius;
    meshRef.current.position.y = yOffset + Math.sin(t * 2) * 0.18;
    meshRef.current.rotation.x += 0.015;
    meshRef.current.rotation.y += 0.02;
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      {geometry}
      <meshStandardMaterial
        color={color}
        metalness={metalness}
        roughness={roughness}
        emissive={color}
        emissiveIntensity={0.15}
      />
    </mesh>
  );
}

function NotionMonolith({ isDark }: { isDark: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  const mainColor = isDark ? "#262626" : "#f4f3ef";
  const edgeColor = isDark ? "#529cca" : "#2383e2";
  const accentPurple = isDark ? "#b99de0" : "#6940a5";
  const accentGreen = isDark ? "#6ec07e" : "#2b593f";
  const accentOrange = isDark ? "#e8995a" : "#d9730d";

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    // Gentle natural rotation + mouse tilt follow
    groupRef.current.rotation.y += delta * 0.15;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      state.pointer.y * 0.2,
      0.05
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      groupRef.current.rotation.y + state.pointer.x * 0.01,
      0.05
    );
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
  });

  return (
    <group ref={groupRef}>
      {/* Central Notion Monolith / Document Slab */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.5, 2.0, 0.35]} />
        <meshStandardMaterial
          color={mainColor}
          metalness={isDark ? 0.3 : 0.1}
          roughness={isDark ? 0.4 : 0.6}
        />
      </mesh>

      {/* Glass Top Layer representing Notion's layered UI */}
      <mesh position={[0, 0, 0.2]}>
        <boxGeometry args={[1.35, 1.85, 0.06]} />
        <MeshTransmissionMaterial
          thickness={0.2}
          roughness={0.12}
          transmission={0.9}
          ior={1.3}
          chromaticAberration={0.03}
          color={isDark ? "#3f3f3f" : "#ffffff"}
        />
      </mesh>

      {/* Orbiting Tech Tokens */}
      {/* React Token (Blue Ring) */}
      <OrbitingItem
        geometry={<torusGeometry args={[0.3, 0.06, 16, 48]} />}
        color={edgeColor}
        orbitRadius={1.8}
        speed={0.65}
        initialAngle={0}
        yOffset={0.2}
      />

      {/* TypeScript Token (Purple Octahedron) */}
      <OrbitingItem
        geometry={<octahedronGeometry args={[0.22, 0]} />}
        color={accentPurple}
        orbitRadius={1.9}
        speed={-0.5}
        initialAngle={Math.PI / 2}
        yOffset={-0.4}
      />

      {/* Next.js Token (Emerald Sphere) */}
      <OrbitingItem
        geometry={<sphereGeometry args={[0.18, 32, 32]} />}
        color={accentGreen}
        orbitRadius={1.6}
        speed={0.8}
        initialAngle={Math.PI}
        yOffset={0.5}
      />

      {/* 3D Web Token (Orange Icosahedron) */}
      <OrbitingItem
        geometry={<icosahedronGeometry args={[0.2, 0]} />}
        color={accentOrange}
        orbitRadius={2.0}
        speed={-0.7}
        initialAngle={(3 * Math.PI) / 2}
        yOffset={-0.2}
      />
    </group>
  );
}

function SceneLights({ isDark }: { isDark: boolean }) {
  return (
    <>
      <ambientLight intensity={isDark ? 0.6 : 0.9} />
      <directionalLight position={[4, 5, 4]} intensity={isDark ? 1.4 : 1.6} castShadow />
      <pointLight
        position={[-3, -2, 2]}
        intensity={isDark ? 5 : 3}
        color={isDark ? "#b99de0" : "#6940a5"}
      />
      <pointLight
        position={[3, 2, -2]}
        intensity={isDark ? 5 : 3}
        color={isDark ? "#529cca" : "#2383e2"}
      />
    </>
  );
}

function FallbackCard() {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      <div className="notion-card flex h-48 w-48 flex-col items-center justify-center rounded-2xl p-4 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
          💻
        </div>
        <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted">
          Notion 3D Engine
        </p>
        <p className="mt-1 text-xs text-muted">React · Next.js · Three.js</p>
      </div>
    </div>
  );
}

export default function NotionScene3D() {
  const { theme } = useTheme();
  const [webglSupported, setWebglSupported] = useState(true);
  const isDark = theme === "dark";

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setWebglSupported(Boolean(gl));
    } catch {
      setWebglSupported(false);
    }
  }, []);

  const dpr = useMemo<[number, number]>(() => [1, 1.75], []);

  if (!webglSupported) {
    return <FallbackCard />;
  }

  return (
    <div className="relative h-full w-full select-none cursor-grab active:cursor-grabbing">
      <Canvas
        dpr={dpr}
        camera={{ position: [0, 0, 5.2], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <SceneLights isDark={isDark} />
          <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
            <NotionMonolith isDark={isDark} />
          </Float>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 1.7}
            minPolarAngle={Math.PI / 2.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
