import { useRef, type ComponentRef, type ReactNode } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  ContactShadows,
  Environment,
  Float,
  Lightformer,
  MeshDistortMaterial,
  RoundedBox,
} from '@react-three/drei'

const CLAY_COLORS = ['#ff7a59', '#b7a4ff', '#9bd17a', '#ffc857', '#f3ece4']

type DistortMaterial = ComponentRef<typeof MeshDistortMaterial>

// The lump of clay: follows the pointer, wobbles on hover, squishes and
// changes color on click.
function Clay() {
  const mesh = useRef<THREE.Mesh>(null!)
  const material = useRef<DistortMaterial>(null!)
  const hovered = useRef(false)
  const poke = useRef(0)
  const colorIndex = useRef(0)
  const targetColor = useRef(new THREE.Color(CLAY_COLORS[0]))

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    mesh.current.rotation.z += delta * 0.15

    poke.current = THREE.MathUtils.damp(poke.current, 0, 2.5, delta)
    const squash = poke.current * Math.sin(t * 20) * 0.14
    mesh.current.scale.set(1 + squash, 1 - squash, 1 + squash)

    material.current.distort = THREE.MathUtils.damp(
      material.current.distort,
      hovered.current ? 0.55 : 0.3,
      4,
      delta,
    )
    material.current.color.lerp(targetColor.current, 1 - Math.exp(-5 * delta))
  })

  return (
    <mesh
      ref={mesh}
      onPointerOver={() => {
        hovered.current = true
        document.body.style.cursor = 'pointer'
      }}
      onPointerOut={() => {
        hovered.current = false
        document.body.style.cursor = ''
      }}
      onClick={() => {
        colorIndex.current = (colorIndex.current + 1) % CLAY_COLORS.length
        targetColor.current.set(CLAY_COLORS[colorIndex.current])
        poke.current = 1
      }}
    >
      <icosahedronGeometry args={[1.45, 64]} />
      <MeshDistortMaterial
        ref={material}
        color={CLAY_COLORS[0]}
        roughness={0.5}
        metalness={0.05}
        clearcoat={0.25}
        clearcoatRoughness={0.6}
        distort={0.3}
        speed={1.6}
      />
    </mesh>
  )
}

function Satellite({ position, speed = 1.5, children }: { position: [number, number, number]; speed?: number; children: ReactNode }) {
  return (
    <Float position={position} speed={speed} rotationIntensity={1.4} floatIntensity={1.6}>
      {children}
    </Float>
  )
}

// Tilts the whole sculpture toward the pointer and places it beside the
// headline on wide screens, above it on narrow ones.
function Rig({ children }: { children: ReactNode }) {
  const group = useRef<THREE.Group>(null!)
  const { viewport } = useThree()
  const wide = viewport.aspect > 1.1
  // Shrink with the viewport so the satellites stay on screen on phones.
  const scale = wide ? Math.min(1, viewport.width / 9) : viewport.width / 7.5

  useFrame((state, delta) => {
    const { pointer } = state
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, pointer.x * 0.5, 3, delta)
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -pointer.y * 0.35, 3, delta)
  })

  return (
    <group
      ref={group}
      position={wide ? [viewport.width * 0.2, 0, 0] : [0, viewport.height * 0.24, 0]}
      scale={scale}
    >
      {children}
    </group>
  )
}

export default function Scene() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 7], fov: 38 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 5, 4]} intensity={1.6} />

      <Rig>
        <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
          <Clay />
        </Float>

        <Satellite position={[-2.3, 1.4, -0.6]} speed={1.8}>
          <mesh>
            <torusGeometry args={[0.38, 0.16, 32, 64]} />
            <meshStandardMaterial color="#b7a4ff" roughness={0.55} />
          </mesh>
        </Satellite>
        <Satellite position={[2.2, -1.3, 0.4]} speed={1.4}>
          <RoundedBox args={[0.6, 0.6, 0.6]} radius={0.14} smoothness={6}>
            <meshStandardMaterial color="#f3ece4" roughness={0.6} />
          </RoundedBox>
        </Satellite>
        <Satellite position={[1.9, 1.7, -1]} speed={2.2}>
          <mesh>
            <sphereGeometry args={[0.24, 32, 32]} />
            <meshStandardMaterial color="#ffc857" roughness={0.5} />
          </mesh>
        </Satellite>
        <Satellite position={[-1.9, -1.6, 0.6]} speed={1.6}>
          <mesh>
            <icosahedronGeometry args={[0.32, 0]} />
            <meshStandardMaterial color="#9bd17a" roughness={0.6} flatShading />
          </mesh>
        </Satellite>

        <ContactShadows position={[0, -2.3, 0]} opacity={0.45} scale={9} blur={2.6} far={4} color="#000000" />
      </Rig>

      {/* Studio lighting built from light panels, so no HDR file has to download. */}
      <Environment resolution={256}>
        <Lightformer intensity={2} position={[0, 5, -6]} scale={[10, 5, 1]} />
        <Lightformer intensity={1.6} color="#ffd9c7" position={[-5, 1, 1]} rotation-y={Math.PI / 2} scale={[3, 8, 1]} />
        <Lightformer intensity={1.2} color="#b7a4ff" position={[5, -1, 1]} rotation-y={-Math.PI / 2} scale={[3, 8, 1]} />
      </Environment>
    </Canvas>
  )
}
