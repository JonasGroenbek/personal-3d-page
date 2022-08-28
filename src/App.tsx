import { Canvas, ThreeEvent, useFrame, MeshProps, useThree } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { Container } from './components/styled/Container'
import * as three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { useGLTF } from '@react-three/drei'

export const App = () => {
    return (
        <Container style={{ height: window.innerHeight, width: '100%' }}>
            <Canvas camera={{ fov: 75, near: 0.1, far: 25, position: [7, 5, 1.5] }}>
                <CameraController />
                <color attach="background" args={['#dasd2a']} />
                <ambientLight />
                <gridHelper />
                <pointLight position={[10, 10, 10]} />
                <Circle position={[-2.5, 3, 0]} />
                <Box position={[0, 1, 0]} />
                <Car />
            </Canvas>
        </Container>
    )
}

const CameraController = () => {
    const { camera, gl } = useThree()
    useEffect(() => {
        const controls = new OrbitControls(camera, gl.domElement)

        controls.minDistance = 3
        controls.maxDistance = 10
        controls.maxPolarAngle = 1.4
        controls.minPolarAngle = 0.5
        return () => {
            controls.dispose()
        }
    }, [camera, gl])
    return null
}

function Circle(props: MeshProps) {
    // This reference will give us direct access to the mesh
    const mesh = useRef(three.Mesh as any)
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        mesh.current.rotation.x += 0.01
    })

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={(event: ThreeEvent<MouseEvent>) => setActive(!active)}
            onPointerOver={(event: ThreeEvent<MouseEvent>) => setHover(true)}
            onPointerOut={(event: ThreeEvent<MouseEvent>) => setHover(false)}
        >
            <sphereGeometry />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

function Box(props: MeshProps) {
    // This reference will give us direct access to the mesh
    const mesh = useRef(three.Mesh as any)
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        // mesh.current.rotation.x += 0.01
    })

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={(event: ThreeEvent<MouseEvent>) => setActive(!active)}
            onPointerOver={(event: ThreeEvent<MouseEvent>) => setHover(true)}
            onPointerOut={(event: ThreeEvent<MouseEvent>) => setHover(false)}
        >
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

function Car() {
    const gltf = useGLTF('/models/car/scene.gltf')
    return (
        <group position={[13, 11, -5]}>
            <primitive object={gltf.scene} />
        </group>
    )
}

useGLTF.preload('/models/car/scene.gltf')
