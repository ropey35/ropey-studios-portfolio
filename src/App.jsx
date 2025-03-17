import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Suspense } from 'react';

export default function App() {
  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={5000} factor={4} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          
          {/* Floating Navigation Icons */}
          <mesh position={[-2, 1, 0]}>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshStandardMaterial color="red" />
          </mesh>
          <mesh position={[0, 1, 0]}>
            <boxGeometry args={[0.4, 0.4, 0.4]} />
            <meshStandardMaterial color="blue" />
          </mesh>
          <mesh position={[2, 1, 0]}>
            <coneGeometry args={[0.4, 0.6, 32]} />
            <meshStandardMaterial color="green" />
          </mesh>

          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}
