"use client";

import { Suspense, useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshDistortMaterial,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "./ThemeProvider";

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

function CoreObject({ reduced }: { reduced: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const { theme } = useTheme();
  const accent = theme === "dark" ? "#5b8cff" : "#2f6bff";
  const accent2 = theme === "dark" ? "#a06bff" : "#7c4dff";

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    if (!reduced) {
      groupRef.current.rotation.y += delta * 0.18 + state.pointer.x * 0.01;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        state.pointer.y * 0.25,
        0.04
      );
    }
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.12;
  });

  return (
    <group ref={groupRef}>
      <mesh castShadow receiveShadow>
        <icosahedronGeometry args={[1.35, 4]} />
        <MeshTransmissionMaterial
          thickness={0.6}
          roughness={0.08}
          transmission={1}
          ior={1.25}
          chromaticAberration={0.04}
          backside
          color={accent}
        />
      </mesh>
      <mesh position={[1.9, -0.6, -0.8]} scale={0.42}>
        <torusGeometry args={[1, 0.35, 32, 64]} />
        <MeshDistortMaterial
          color={accent2}
          metalness={0.85}
          roughness={0.2}
          distort={0.25}
          speed={reduced ? 0 : 1.4}
        />
      </mesh>
      <mesh position={[-1.7, 0.9, -0.5]} scale={0.26}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={accent}
          metalness={0.9}
          roughness={0.15}
          emissive={accent}
          emissiveIntensity={0.25}
        />
      </mesh>
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 4, 4]} intensity={1.2} castShadow />
      <pointLight position={[-3, -2, 2]} intensity={6} color="#7c4dff" />
      <pointLight position={[3, 2, -2]} intensity={6} color="#2f6bff" />
    </>
  );
}

function FallbackVisual() {
  return (
    <div
      aria-hidden
      className="relative flex h-full w-full items-center justify-center"
    >
      <div className="glow-blue glow-violet h-56 w-56 rounded-full bg-gradient-to-br from-accent-blue/40 to-accent-violet/40 blur-2xl sm:h-72 sm:w-72" />
      <div className="glass absolute h-40 w-40 rotate-12 rounded-3xl sm:h-56 sm:w-56" />
    </div>
  );
}

export default function HeroScene() {
  const reduced = useReducedMotion();
  const [webglOk, setWebglOk] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setWebglOk(Boolean(gl));
    } catch {
      setWebglOk(false);
    }
  }, []);

  const dpr = useMemo<[number, number]>(() => [1, 1.8], []);

  if (!webglOk) {
    return <FallbackVisual />;
  }

  return (
    <div className="h-full w-full">
      <Canvas
        dpr={dpr}
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Lights />
          <Float
            speed={reduced ? 0 : 1.2}
            rotationIntensity={reduced ? 0 : 0.4}
            floatIntensity={reduced ? 0 : 0.6}
          >
            <CoreObject reduced={reduced} />
          </Float>
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
