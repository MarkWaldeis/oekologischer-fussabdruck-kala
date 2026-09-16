import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface CartoonGlobeProps {
  score?: number;
  interactive?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export const CartoonGlobe3D: React.FC<CartoonGlobeProps> = ({
  score: _score = 5,
  interactive = true,
  size = 'md',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 4.8;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Group for entire globe
    const earthGroup = new THREE.Group();
    scene.add(earthGroup);

    // 1. Procedural Cartoon Earth Texture
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Ocean background
      const oceanGrad = ctx.createLinearGradient(0, 0, 0, 512);
      oceanGrad.addColorStop(0, '#38bdf8');
      oceanGrad.addColorStop(0.5, '#0284c7');
      oceanGrad.addColorStop(1, '#0369a1');
      ctx.fillStyle = oceanGrad;
      ctx.fillRect(0, 0, 1024, 512);

      // Cute waves / subtle ocean highlights
      ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
      for (let i = 0; i < 40; i++) {
        const x = (i * 27) % 1024;
        const y = 80 + ((i * 37) % 360);
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw stylized continents
      ctx.fillStyle = '#22c55e'; // Fresh grass green
      ctx.strokeStyle = '#15803d';
      ctx.lineWidth = 4;

      function drawBlob(x: number, y: number, w: number, h: number) {
        if (!ctx) return;
        ctx.beginPath();
        ctx.ellipse(x, y, w, h, Math.PI / 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }

      // Europe & Asia
      drawBlob(540, 180, 160, 85);
      drawBlob(720, 210, 140, 95);
      drawBlob(620, 240, 80, 60);

      // Africa
      drawBlob(510, 290, 85, 110);

      // Americas
      drawBlob(240, 180, 105, 80);
      drawBlob(290, 320, 80, 120);

      // Australia
      drawBlob(820, 360, 65, 50);

      // Polar caps (White)
      ctx.fillStyle = '#f8fafc';
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 3;
      drawBlob(512, 25, 480, 35);
      drawBlob(512, 490, 420, 35);

      // Cute details: little forest dots and trees on continents
      ctx.fillStyle = '#166534';
      const treeSpots = [
        [500, 170], [550, 160], [600, 190], [700, 200], [220, 170], [250, 190], [280, 310], [520, 280]
      ];
      treeSpots.forEach(([tx, ty]) => {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(tx, ty, 8, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    const earthTexture = new THREE.CanvasTexture(canvas);
    earthTexture.wrapS = THREE.RepeatWrapping;
    earthTexture.wrapT = THREE.ClampToEdgeWrapping;

    // Earth Sphere
    const earthGeo = new THREE.SphereGeometry(1.5, 48, 48);
    const earthMat = new THREE.MeshToonMaterial({
      map: earthTexture,
      bumpScale: 0.05,
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    earthGroup.add(earthMesh);

    // Cartoon Outline (Backside inverted sphere for classic cel-look)
    const outlineGeo = new THREE.SphereGeometry(1.53, 32, 32);
    const outlineMat = new THREE.MeshBasicMaterial({
      color: 0x0f172a,
      side: THREE.BackSide,
    });
    const outlineMesh = new THREE.Mesh(outlineGeo, outlineMat);
    earthGroup.add(outlineMesh);

    // Atmosphere Glow Shell
    const atmoGeo = new THREE.SphereGeometry(1.65, 32, 32);
    const atmoMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide,
    });
    const atmoMesh = new THREE.Mesh(atmoGeo, atmoMat);
    earthGroup.add(atmoMesh);

    // 2. Cute Puffy 3D Cartoon Clouds orbiting Earth
    const cloudGroup = new THREE.Group();
    earthGroup.add(cloudGroup);

    const cloudMaterial = new THREE.MeshToonMaterial({
      color: 0xffffff,
    });

    function createPuffyCloud() {
      const puff = new THREE.Group();
      const numPuffs = 4;
      for (let i = 0; i < numPuffs; i++) {
        const puffGeo = new THREE.SphereGeometry(0.12 + Math.random() * 0.08, 12, 12);
        const puffMesh = new THREE.Mesh(puffGeo, cloudMaterial);
        puffMesh.position.set(
          (i - numPuffs / 2) * 0.14,
          (Math.random() - 0.5) * 0.08,
          (Math.random() - 0.5) * 0.08
        );
        puff.add(puffMesh);
      }
      return puff;
    }

    const cloudCount = 6;
    const clouds: THREE.Group[] = [];
    for (let i = 0; i < cloudCount; i++) {
      const c = createPuffyCloud();
      const phi = (i / cloudCount) * Math.PI * 2;
      const theta = 0.5 + (i % 3) * 0.6;
      const radius = 1.85;

      c.position.set(
        radius * Math.sin(theta) * Math.cos(phi),
        radius * Math.cos(theta),
        radius * Math.sin(theta) * Math.sin(phi)
      );
      c.lookAt(0, 0, 0);
      c.rotateY(Math.PI / 2);
      cloudGroup.add(c);
      clouds.push(c);
    }

    // 3. Cute Sprout / Plant on North Pole
    const sproutGroup = new THREE.Group();
    sproutGroup.position.set(0, 1.55, 0);

    const stemGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.25, 8);
    const stemMat = new THREE.MeshToonMaterial({ color: 0x15803d });
    const stem = new THREE.Mesh(stemGeo, stemMat);
    stem.position.y = 0.12;
    sproutGroup.add(stem);

    const leafGeo = new THREE.SphereGeometry(0.12, 8, 8);
    leafGeo.scale(1.8, 0.4, 0.8);
    const leafMat = new THREE.MeshToonMaterial({ color: 0x4ade80 });
    const leaf1 = new THREE.Mesh(leafGeo, leafMat);
    leaf1.position.set(0.12, 0.24, 0);
    leaf1.rotation.z = 0.4;
    sproutGroup.add(leaf1);

    const leaf2 = new THREE.Mesh(leafGeo, leafMat);
    leaf2.position.set(-0.12, 0.24, 0);
    leaf2.rotation.z = -0.4;
    sproutGroup.add(leaf2);

    earthGroup.add(sproutGroup);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfffbeb, 1.4);
    dirLight.position.set(5, 6, 4);
    scene.add(dirLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.6);
    rimLight.position.set(-5, -3, -3);
    scene.add(rimLight);

    // 5. Interaction (Drag to rotate)
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onPointerDown = (e: PointerEvent) => {
      if (!interactive) return;
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging || !interactive) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      earthGroup.rotation.y += deltaX * 0.008;
      earthGroup.rotation.x += deltaY * 0.006;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // 6. Animation Loop
    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (!isDragging) {
        earthGroup.rotation.y += delta * 0.25;
      }
      cloudGroup.rotation.y += delta * 0.12;

      // Gentle bobbing effect for the sprout
      const time = clock.getElapsedTime();
      sproutGroup.rotation.z = Math.sin(time * 2) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    // Resize listener
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || 300;
      const newH = container.clientHeight || 300;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      dom.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      renderer.dispose();
      if (container.contains(dom)) {
        container.removeChild(dom);
      }
    };
  }, [interactive]);

  const sizeClasses = {
    sm: 'w-36 h-36',
    md: 'w-56 h-56 md:w-64 md:h-64',
    lg: 'w-72 h-72 md:w-80 md:h-80',
    hero: 'w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96',
  };

  return (
    <div className={`relative flex items-center justify-center select-none ${sizeClasses[size]}`}>
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      {interactive && (
        <div className="absolute -bottom-2 bg-white/90 backdrop-blur-sm border-2 border-slate-900 px-3 py-0.5 rounded-full text-xs font-bold text-slate-700 shadow-sm pointer-events-none flex items-center gap-1">
          <span>🌍</span> Dreh mich!
        </div>
      )}
    </div>
  );
};
