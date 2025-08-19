"use client"

import { Suspense, useRef, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment, Float, Text } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type * as THREE from "three"

function NeonBox(props: any) {
  const meshRef = useRef<THREE.Mesh>(null)

  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#b000ff"
        emissive="#b000ff"
        emissiveIntensity={0.5}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  )
}

function NeonSphere(props: any) {
  const meshRef = useRef<THREE.Mesh>(null)

  return (
    <mesh {...props} ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#00e5ff"
        emissive="#00e5ff"
        emissiveIntensity={0.5}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  )
}

function NeonTorus(props: any) {
  const meshRef = useRef<THREE.Mesh>(null)

  return (
    <mesh {...props} ref={meshRef}>
      <torusGeometry args={[1, 0.4, 16, 32]} />
      <meshStandardMaterial
        color="#ff00ff"
        emissive="#ff00ff"
        emissiveIntensity={0.5}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  )
}

function CodeText(props: any) {
  return (
    <Text fontSize={0.5} color="#00e5ff" anchorX="center" anchorY="middle" {...props}>
      {props.children}
    </Text>
  )
}

function Model3D({ activeModel }: { activeModel: string }) {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={1} />
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      <Suspense fallback={null}>
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          {activeModel === "box" && <NeonBox position={[0, 0, 0]} />}
          {activeModel === "sphere" && <NeonSphere position={[0, 0, 0]} />}
          {activeModel === "torus" && <NeonTorus position={[0, 0, 0]} />}
        </Float>

        {activeModel === "box" && <CodeText position={[0, -2, 0]}>{"const Box = () => <box />"}</CodeText>}

        {activeModel === "sphere" && <CodeText position={[0, -2, 0]}>{"const Sphere = () => <sphere />"}</CodeText>}

        {activeModel === "torus" && <CodeText position={[0, -2, 0]}>{"const Torus = () => <torus />"}</CodeText>}

        <Environment preset="night" />
      </Suspense>
    </Canvas>
  )
}

export default function ThreeDShowcase() {
  const [activeModel, setActiveModel] = useState("box")

  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Interactive</span>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            <span className="gradient-text">3D Showcase</span>
          </h2>
          <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore interactive 3D models showcasing my creative coding skills with Three.js and WebGL.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card className="neon-box overflow-hidden">
              <CardContent className="p-0">
                <div className="h-[400px] w-full md:h-[500px]">
                  <Model3D activeModel={activeModel} />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-4">
            <Card className="neon-box">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold">3D Models</h3>
                <div className="flex flex-col gap-2">
                  <Button
                    variant={activeModel === "box" ? "default" : "outline"}
                    onClick={() => setActiveModel("box")}
                    className="justify-start border-primary/50 hover:bg-primary/20"
                  >
                    Neon Box
                  </Button>
                  <Button
                    variant={activeModel === "sphere" ? "default" : "outline"}
                    onClick={() => setActiveModel("sphere")}
                    className="justify-start border-primary/50 hover:bg-primary/20"
                  >
                    Neon Sphere
                  </Button>
                  <Button
                    variant={activeModel === "torus" ? "default" : "outline"}
                    onClick={() => setActiveModel("torus")}
                    className="justify-start border-primary/50 hover:bg-primary/20"
                  >
                    Neon Torus
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="neon-box">
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold">WebGL Skills</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  I create immersive 3D experiences for the web using Three.js, React Three Fiber, and WebGL.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Three.js</span>
                    <div className="h-2 w-24 rounded-full bg-muted">
                      <div className="h-full w-[90%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">React Three Fiber</span>
                    <div className="h-2 w-24 rounded-full bg-muted">
                      <div className="h-full w-[85%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">WebGL</span>
                    <div className="h-2 w-24 rounded-full bg-muted">
                      <div className="h-full w-[80%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

