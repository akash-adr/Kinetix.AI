'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface KineticSphere3DProps {
  className?: string;
  theme?: 'lime' | 'magenta' | 'multi';
  speed?: number;
}

export function KineticSphere3D({
  className = '',
  theme = 'multi',
  speed = 1,
}: KineticSphere3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Dimensions
    const width = currentMount.clientWidth || 500;
    const height = currentMount.clientHeight || 500;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    currentMount.appendChild(renderer.domElement);

    // Primary Wireframe Icosahedron Core
    const coreGeometry = new THREE.IcosahedronGeometry(1.35, 3);
    const coreOriginalPositions = coreGeometry.attributes.position.clone();

    // Wireframe material with glowing neon
    const primaryColor =
      theme === 'lime' ? 0xccff00 : theme === 'magenta' ? 0xff007f : 0xccff00;
    const secondaryColor =
      theme === 'magenta' ? 0x00f0ff : 0xff007f;

    const coreMaterial = new THREE.MeshBasicMaterial({
      color: primaryColor,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });

    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(coreMesh);

    // Inner glowing solid low-poly nucleus
    const nucleusGeometry = new THREE.OctahedronGeometry(0.75, 1);
    const nucleusMaterial = new THREE.MeshBasicMaterial({
      color: secondaryColor,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const nucleusMesh = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    scene.add(nucleusMesh);

    // Outer Swarming Particle Cloud
    const particleCount = 750;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(primaryColor);
    const c2 = new THREE.Color(secondaryColor);
    const c3 = new THREE.Color(0x00f0ff);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.6 + Math.random() * 1.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const chosenColor = Math.random() > 0.6 ? c1 : Math.random() > 0.3 ? c2 : c3;
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // Dynamic Ring Accents (Orbital Gyro Rings)
    const ringGeometry = new THREE.TorusGeometry(2.1, 0.012, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.4,
    });
    const ringMesh1 = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh1.rotation.x = Math.PI / 3;
    scene.add(ringMesh1);

    const ringMesh2 = new THREE.Mesh(ringGeometry, ringMaterial.clone());
    (ringMesh2.material as THREE.MeshBasicMaterial).color.setHex(0xff007f);
    ringMesh2.rotation.y = Math.PI / 2.5;
    scene.add(ringMesh2);

    // Mouse listener for parallax
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseRef.current.targetX = (e.clientX / innerWidth - 0.5) * 2;
      mouseRef.current.targetY = -(e.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!currentMount) return;
      const w = currentMount.clientWidth;
      const h = currentMount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime() * speed;

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Kinetic Vertex Distortion on Core
      const posAttribute = coreGeometry.attributes.position;
      const origPositions = coreOriginalPositions.array;

      for (let i = 0; i < posAttribute.count; i++) {
        const ox = origPositions[i * 3];
        const oy = origPositions[i * 3 + 1];
        const oz = origPositions[i * 3 + 2];

        // Complex sinusoidal displacement
        const wave =
          Math.sin(ox * 2 + elapsedTime * 1.8) *
          Math.cos(oy * 2 + elapsedTime * 1.5) *
          0.12;

        posAttribute.setXYZ(i, ox + ox * wave, oy + oy * wave, oz + oz * wave);
      }
      posAttribute.needsUpdate = true;

      // Rotations
      coreMesh.rotation.y = elapsedTime * 0.25 + mouseRef.current.x * 0.4;
      coreMesh.rotation.x = elapsedTime * 0.18 + mouseRef.current.y * 0.4;

      nucleusMesh.rotation.y = -elapsedTime * 0.4;
      nucleusMesh.rotation.z = elapsedTime * 0.3;

      particleSystem.rotation.y = elapsedTime * 0.12 + mouseRef.current.x * 0.3;
      particleSystem.rotation.x = -elapsedTime * 0.08 + mouseRef.current.y * 0.3;

      ringMesh1.rotation.z = elapsedTime * 0.2;
      ringMesh2.rotation.z = -elapsedTime * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);

      coreGeometry.dispose();
      coreMaterial.dispose();
      nucleusGeometry.dispose();
      nucleusMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      renderer.dispose();

      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, [theme, speed]);

  return (
    <div
      ref={mountRef}
      className={`relative h-full w-full select-none pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
