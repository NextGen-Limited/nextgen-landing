'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { IcosahedronMesh } from './hero-icosahedron'
import { TorusMesh } from './hero-torus'
import { ParticleField } from './hero-particles'

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <IcosahedronMesh />
      <TorusMesh />
      <ParticleField />
    </>
  )
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10 opacity-70">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
