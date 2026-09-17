import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Sparkles } from "@react-three/drei";
import { Component, Suspense, useMemo, useRef, type ReactNode } from "react";
import * as THREE from "three";

const links: [number, number][] = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,3],[1,4],[2,5]];
const nodes: [number, number, number][] = [[-1.7,.5,.2],[-.7,1.65,-.2],[.8,1.35,.35],[1.75,.15,-.1],[.55,-1.35,.25],[-1.15,-1.25,-.3]];

function CoreScene({ compact = false }: { compact?: boolean }) {
  const group = useRef<THREE.Group>(null);
  const lineColor = new THREE.Color("#50ddff");
  const violet = new THREE.Color("#8d71ff");
  useFrame(({ pointer }, rawDelta) => {
    const delta = Math.min(rawDelta, .05);
    if (!group.current) return;
    group.current.rotation.y += delta * .12;
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, pointer.y * .12, 3, delta);
    group.current.rotation.z = THREE.MathUtils.damp(group.current.rotation.z, -pointer.x * .08, 3, delta);
  });
  const particles = compact ? 45 : 95;
  return <group ref={group}>
    <Float speed={1.2} rotationIntensity={.15} floatIntensity={.3}>
      <mesh><icosahedronGeometry args={[1.18, 3]} /><meshStandardMaterial color={"#0c1633"} emissive={"#1664ff"} emissiveIntensity={.32} metalness={.72} roughness={.22} wireframe /></mesh>
      <mesh><icosahedronGeometry args={[.73, 2]} /><meshPhysicalMaterial color={"#334cff"} emissive={"#00bce7"} emissiveIntensity={.7} transmission={.12} metalness={.55} roughness={.18} /></mesh>
      {nodes.map((p, i) => <mesh key={i} position={p}><sphereGeometry args={[.085, 16, 16]} /><meshBasicMaterial color={i % 2 ? violet : lineColor} /></mesh>)}
      {links.map(([a,b], i) => <Line key={i} points={[nodes[a], nodes[b]]} color={i % 2 ? violet : lineColor} lineWidth={.65} transparent opacity={.62} />)}
      <mesh rotation={[Math.PI/2.25, .2, .4]}><torusGeometry args={[1.82,.012,8,120]} /><meshBasicMaterial color={lineColor} transparent opacity={.65} /></mesh>
      <mesh rotation={[-.5,.4,Math.PI/2]}><torusGeometry args={[2.15,.008,8,120]} /><meshBasicMaterial color={violet} transparent opacity={.42} /></mesh>
    </Float>
    <Sparkles count={particles} scale={5.5} size={1.4} speed={.18} color={"#72e7ff"} opacity={.7} />
  </group>;
}

class WebGLErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? <div className="tech-core-fallback" aria-label="Abstract technology core"><span /><span /><span /></div> : this.props.children; }
}

export function TechCore({ compact = false }: { compact?: boolean }) {
  const dpr = useMemo(() => compact ? 1 : [1, 1.5] as [number, number], [compact]);
  return <WebGLErrorBoundary><Canvas dpr={dpr} camera={{ position: [0,0,6], fov: 42 }} gl={{ antialias: !compact, alpha: true, powerPreference: "high-performance" }} frameloop="always">
    <ambientLight intensity={.65} /><pointLight position={[4,3,5]} intensity={25} color="#3f88ff" /><pointLight position={[-4,-2,2]} intensity={18} color="#a35cff" />
    <Suspense fallback={null}><CoreScene compact={compact} /></Suspense>
  </Canvas></WebGLErrorBoundary>;
}
