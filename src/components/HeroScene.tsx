'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars, Torus, Box, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
  });
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1.8, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.45}
          speed={2.5}
          roughness={0.1}
          metalness={0.8}
          emissive="#4f46e5"
          emissiveIntensity={0.3}
        />
      </Sphere>
    </Float>
  );
}

function OrbitingRings() {
  const ring1 = useRef<THREE.Mesh>(null!);
  const ring2 = useRef<THREE.Mesh>(null!);
  const ring3 = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ring1.current.rotation.x = t * 0.4;
    ring1.current.rotation.z = t * 0.2;
    ring2.current.rotation.y = t * 0.3;
    ring2.current.rotation.x = Math.PI / 4 + t * 0.1;
    ring3.current.rotation.z = t * 0.5;
    ring3.current.rotation.y = Math.PI / 3 + t * 0.2;
  });

  const ringMat = (color: string) => (
    <meshStandardMaterial
      color={color}
      roughness={0.1}
      metalness={0.9}
      transparent
      opacity={0.7}
      emissive={color}
      emissiveIntensity={0.2}
    />
  );

  return (
    <>
      <Torus ref={ring1} args={[2.8, 0.04, 16, 100]}>
        {ringMat('#818cf8')}
      </Torus>
      <Torus ref={ring2} args={[3.4, 0.03, 16, 100]}>
        {ringMat('#06b6d4')}
      </Torus>
      <Torus ref={ring3} args={[4.0, 0.025, 16, 100]}>
        {ringMat('#8b5cf6')}
      </Torus>
    </>
  );
}

function FloatingCubes() {
  const positions: [number, number, number][] = useMemo(() => [
    [4, 2, -2], [-4, 1.5, -1], [3, -2, -3],
    [-3.5, -2, -2], [5, -1, 1], [-5, 0.5, 0],
  ], []);

  return (
    <>
      {positions.map((pos, i) => (
        <Float key={i} speed={1 + i * 0.3} rotationIntensity={1} floatIntensity={1.5}>
          <Icosahedron position={pos} args={[0.2 + (i % 3) * 0.1]}>
            <meshStandardMaterial
              color={i % 2 === 0 ? '#6366f1' : '#8b5cf6'}
              roughness={0.2}
              metalness={0.8}
              emissive={i % 2 === 0 ? '#4f46e5' : '#7c3aed'}
              emissiveIntensity={0.4}
              transparent
              opacity={0.8}
            />
          </Icosahedron>
        </Float>
      ))}
    </>
  );
}

function ParticleField() {
  const count = 200;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5;
    }
    return arr;
  }, []);

  const meshRef = useRef<THREE.Points>(null!);
  useFrame((state) => {
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#818cf8" transparent opacity={0.6} />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#818cf8" />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#06b6d4" />
      <pointLight position={[0, 0, 5]} intensity={0.5} color="#8b5cf6" />
      <Stars radius={80} depth={50} count={3000} factor={4} fade speed={0.5} />
      <AnimatedSphere />
      <OrbitingRings />
      <FloatingCubes />
      <ParticleField />
    </Canvas>
  );
}
