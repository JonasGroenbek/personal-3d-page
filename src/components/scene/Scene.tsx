import { Canvas, ThreeEvent, useFrame, MeshProps, useThree, GroupProps } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import * as three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FlyControls, useGLTF, OrthographicCamera } from '@react-three/drei'
import { Camera } from './Camera'
import useSpline from '@splinetool/r3f-spline'

export const Scene = () => {
    return (
        <Canvas camera={{ fov: 75, near: 0.1, far: 25, position: [7, 5, 1.5] }}>
            <Camera />
            <color attach="background" args={['#dasd2a']} />
            <ambientLight />
            <gridHelper />
            <pointLight position={[10, 10, 10]} />
            <Box position={[0, 1, 0]} />
            <Circle position={[-2, 3, 1]} />
            <Car />
            <Face />
        </Canvas>
    )
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

function Face(props: GroupProps) {
    const { nodes, materials } = useSpline(
        'https://prod.spline.design/Wod4puHP1DHHfiBe/scene.splinecode'
    )
    return (
        <>
            <group {...props} dispose={null} position={[2, 2, 2]} scale={0.01}>
                <mesh
                    name="Cube 6"
                    geometry={nodes['Cube 6'].geometry}
                    material={materials['Hair color']}
                    castShadow
                    receiveShadow
                    position={[17.45, -1.29, -3.75]}
                    rotation={[0, Math.PI / 2, 0]}
                />
                <mesh
                    name="Cube 5"
                    geometry={nodes['Cube 5'].geometry}
                    material={materials['Hair color']}
                    castShadow
                    receiveShadow
                    position={[-52.9, 13.02, -6.54]}
                    rotation={[2.98, -1.52, 2.98]}
                />
                <mesh
                    name="Cube 4"
                    geometry={nodes['Cube 4'].geometry}
                    material={materials['Darker skin']}
                    castShadow
                    receiveShadow
                    position={[69.87, -11.01, 19.29]}
                />
                <mesh
                    name="Cube 3"
                    geometry={nodes['Cube 3'].geometry}
                    material={materials['Darker skin']}
                    castShadow
                    receiveShadow
                    position={[-70.13, -14.01, 19.29]}
                />
                <mesh
                    name="Torus 3"
                    geometry={nodes['Torus 3'].geometry}
                    material={materials['Hair color']}
                    castShadow
                    receiveShadow
                    position={[-26.13, -1.01, 62.92]}
                    rotation={[0, 0, -0.37]}
                />
                <mesh
                    name="Torus 2"
                    geometry={nodes['Torus 2'].geometry}
                    material={materials['Hair color']}
                    castShadow
                    receiveShadow
                    position={[24.31, -0.88, 62.92]}
                    rotation={[0, 0, -0.54]}
                />
                <mesh
                    name="Torus"
                    geometry={nodes.Torus.geometry}
                    material={materials.Lips}
                    castShadow
                    receiveShadow
                    position={[0.79, -43.95, 57.62]}
                    rotation={[0.08, 0.05, 2.11]}
                />
                <mesh
                    name="Nose"
                    geometry={nodes.Nose.geometry}
                    material={materials['Face skin']}
                    castShadow
                    receiveShadow
                    position={[0.83, -29.27, 61.32]}
                />
                <mesh
                    name="Cube 2"
                    geometry={nodes['Cube 2'].geometry}
                    material={materials['Cube 2 Material']}
                    castShadow
                    receiveShadow
                    position={[23.83, -7.27, 61.32]}
                />
                <mesh
                    name="Cube 21"
                    geometry={nodes['Cube 21'].geometry}
                    material={materials['Cube 21 Material']}
                    castShadow
                    receiveShadow
                    position={[-26.17, -7.27, 61.32]}
                />
                <mesh
                    name="Cube"
                    geometry={nodes.Cube.geometry}
                    material={materials['Face skin']}
                    castShadow
                    receiveShadow
                />
            </group>
        </>
    )
}

useGLTF.preload('/models/face/ansigt.gltf')
useGLTF.preload('/models/car/scene.gltf')
