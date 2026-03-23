"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function Door({ onEnter }: { onEnter: () => void }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  return (
    <mesh
      ref={meshRef}
      position={[0, 0, -5]} // at end of cave
      onClick={onEnter}
    >
      <boxGeometry args={[1, 2, 0.2]} />
      <meshStandardMaterial color="#00aaff" />
    </mesh>
  );
}

function CameraMover({ targetZ, onDone }: { targetZ: number; onDone: () => void }) {
  const { camera } = useThree();
  useFrame(() => {
    camera.position.z = THREE.MathUtils.damp(
      camera.position.z,
      targetZ,
      3,
      0.05
    );
    if (Math.abs(camera.position.z - targetZ) < 0.01) {
      onDone();
    }
  });
  return null;
}

export function CaveScene({
  stage,
  setStage,
}: {
  stage: string;
  setStage: (s: string) => void;
}) {
  const [moving, setMoving] = useState(false);

  const handleEnterDoor = () => {
    setMoving(true);
  };

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <color attach="background" args={["black"]} />

      <ambientLight intensity={0.4} />
      <pointLight position={[0, 2, 2]} intensity={1.2} />

      {/* Simple cave: cylinder around the camera */}
      <mesh rotation={[0, 0, 0]}>
        <cylinderGeometry args={[4, 4, 12, 32, 1, true]} />
        <meshStandardMaterial color="#111122" side={THREE.BackSide} />
      </mesh>

      <Door onEnter={handleEnterDoor} />

      {moving && (
        <CameraMover
          targetZ={-4} // move “through” the door
          onDone={() => {
            setMoving(false);
            setStage("reveal");
          }}
        />
      )}

      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  );
}
