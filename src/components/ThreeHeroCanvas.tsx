import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

export const ThreeHeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene & Camera setup
    const scene = new THREE.Scene();
    // Transparent scene background so section's solid #F5F5F5 shows cleanly
    scene.background = null;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    // Clear existing canvas children
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 2. Main 3D Software Interface Mockup (Clean & High Tech)
    const modelGroup = new THREE.Group();

    // Main Browser / App Window Frame
    const screenWidth = 4.2;
    const screenHeight = 5.2;
    const screenGeo = new THREE.PlaneGeometry(screenWidth, screenHeight);
    const screenMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    modelGroup.add(screenMesh);

    // Outer Border Wireframe
    const borderEdges = new THREE.EdgesGeometry(screenGeo);
    const borderMat = new THREE.LineBasicMaterial({ color: 0x0a0a0a, transparent: true, opacity: 0.75 });
    const borderLine = new THREE.LineSegments(borderEdges, borderMat);
    modelGroup.add(borderLine);

    // Window Header Bar
    const headerGeo = new THREE.BoxGeometry(screenWidth - 0.2, 0.35, 0.05);
    const headerMat = new THREE.MeshBasicMaterial({ color: 0x0a0a0a, transparent: true, opacity: 0.8 });
    const headerMesh = new THREE.Mesh(headerGeo, headerMat);
    headerMesh.position.set(0, screenHeight / 2 - 0.35, 0.05);
    modelGroup.add(headerMesh);

    // Window Window Action Dots (3 small circles)
    for (let i = 0; i < 3; i++) {
      const dotGeo = new THREE.CircleGeometry(0.05, 12);
      const dotMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 });
      const dot = new THREE.Mesh(dotGeo, dotMat);
      dot.position.set(-screenWidth / 2 + 0.35 + i * 0.18, screenHeight / 2 - 0.35, 0.08);
      modelGroup.add(dot);
    }

    // Floating Metric Cards (Structured Layout)
    const cardData = [
      { x: -0.9, y: 1.2, w: 1.8, h: 1.1, titleOpacity: 0.7 },
      { x: 0.9, y: 1.2, w: 1.8, h: 1.1, titleOpacity: 0.7 },
      { x: 0, y: -0.2, w: 3.6, h: 1.3, titleOpacity: 0.6 },
      { x: -0.9, y: -1.6, w: 1.8, h: 0.9, titleOpacity: 0.65 },
      { x: 0.9, y: -1.6, w: 1.8, h: 0.9, titleOpacity: 0.65 },
    ];

    cardData.forEach(cd => {
      const cardGeo = new THREE.BoxGeometry(cd.w, cd.h, 0.08);
      const cardMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 });
      const card = new THREE.Mesh(cardGeo, cardMat);
      card.position.set(cd.x, cd.y, 0.1);
      modelGroup.add(card);

      const cardEdges = new THREE.EdgesGeometry(cardGeo);
      const cardLine = new THREE.LineSegments(cardEdges, new THREE.LineBasicMaterial({ color: 0x0a0a0a, transparent: true, opacity: cd.titleOpacity }));
      cardLine.position.set(cd.x, cd.y, 0.1);
      modelGroup.add(cardLine);
    });

    // 3. Subtle Floor Perspective Grid
    const gridHelper = new THREE.GridHelper(16, 16, 0x0a0a0a, 0x1a1a1a);
    gridHelper.position.set(0, -3.2, 0);
    if (Array.isArray(gridHelper.material)) {
      gridHelper.material.forEach(m => {
        m.transparent = true;
        m.opacity = 0.15;
      });
    } else {
      gridHelper.material.transparent = true;
      gridHelper.material.opacity = 0.15;
    }
    scene.add(gridHelper);

    // 4. Subtle Orbital Nodes (Only 8 clean nodes floating near the mockup)
    const orbitalGroup = new THREE.Group();
    const nodeCount = 8;
    const nodeData: { mesh: THREE.Mesh; angle: number; speed: number; radius: number; yOffset: number }[] = [];

    const nodeGeo = new THREE.BoxGeometry(0.12, 0.12, 0.12);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x0a0a0a, transparent: true, opacity: 0.35 });

    for (let i = 0; i < nodeCount; i++) {
      const mesh = new THREE.Mesh(nodeGeo, nodeMat);
      const angle = (i / nodeCount) * Math.PI * 2;
      const speed = 0.003 + (i % 2) * 0.002;
      const radius = 2.8 + (i % 3) * 0.4;
      const yOffset = (i % 2 === 0 ? 1 : -1) * (0.5 + i * 0.2);

      mesh.position.set(Math.cos(angle) * radius, yOffset, Math.sin(angle) * radius);
      orbitalGroup.add(mesh);
      nodeData.push({ mesh, angle, speed, radius, yOffset });
    }
    modelGroup.add(orbitalGroup);

    // Initial Positioning logic based on screen width
    const updatePositionAndScale = () => {
      const currentW = window.innerWidth;
      if (currentW < 640) {
        // Mobile: Position small below text or keep low opacity
        modelGroup.position.set(0, -2.8, -2);
        modelGroup.scale.set(0.5, 0.5, 0.5);
      } else if (currentW < 1024) {
        // Tablet: Push slightly to the right, scale down
        modelGroup.position.set(2.2, -0.2, 0);
        modelGroup.scale.set(0.65, 0.65, 0.65);
      } else {
        // Desktop: pushed further right so it doesn't overlap the (narrower) text column
        modelGroup.position.set(5.6, 0, 0);
        modelGroup.scale.set(0.85, 0.85, 0.85);
      }
    };

    updatePositionAndScale();
    scene.add(modelGroup);

    // 5. Mouse Interactivity (Subtle Tilt)
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) - 0.5;
      mouseY = (event.clientY / window.innerHeight) - 0.5;
    };

    if (!prefersReducedMotion) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // 6. Animation loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!prefersReducedMotion) {
        const elapsedTime = clock.getElapsedTime();

        // Smooth mouse tilt
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        modelGroup.rotation.y = targetX * 0.4 + Math.sin(elapsedTime * 0.8) * 0.05;
        modelGroup.rotation.x = -targetY * 0.3 + Math.cos(elapsedTime * 0.6) * 0.03;

        // Animate floating orbital nodes
        nodeData.forEach(item => {
          item.angle += item.speed;
          item.mesh.position.x = Math.cos(item.angle) * item.radius;
          item.mesh.position.z = Math.sin(item.angle) * item.radius;
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    // 7. Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth || window.innerWidth;
      const newHeight = containerRef.current.clientHeight || window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
      updatePositionAndScale();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};

