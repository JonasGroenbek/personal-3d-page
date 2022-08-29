import { Canvas, ThreeEvent, useFrame, MeshProps, useThree, GroupProps } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import * as three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import {
    FlyControls,
    useGLTF,
    OrthographicCamera,
    PerspectiveCamera,
    useHelper,
} from '@react-three/drei'
import { Camera } from './Camera'
import useSpline from '@splinetool/r3f-spline'
import { PointLight } from 'three'
import { Lights } from './Lights'

export const Scene = () => {
    return (
        <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [7, 7, 7] }}>
            <Camera />
            <Lights />
            <Room />
        </Canvas>
    )
}

const Room = (props: GroupProps) => {
    const { nodes, materials } = useSpline(
        'https://prod.spline.design/OEtNeVGd1dIudaoJ/scene.splinecode'
    )
    return (
        <>
            <color attach="background" args={['#e3eddb']} />
            <group {...props} dispose={null} scale={0.01}>
                <mesh
                    name="Cube 9"
                    geometry={nodes['Cube 9'].geometry}
                    material={materials['Cube 9 Material']}
                    castShadow
                    receiveShadow
                    position={[-6.62, 352.5, 265.34]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[1, 1, 0.26]}
                />
                <group name="Group" position={[150.06, 47.87, 146.31]}>
                    <mesh
                        name="Cube 12"
                        geometry={nodes['Cube 12'].geometry}
                        material={materials['Chair wood']}
                        castShadow
                        receiveShadow
                        position={[-25.92, -4.3, -27.42]}
                        rotation={[1.66, -0.09, 0]}
                        scale={[-1, 1, 9.37]}
                    />
                    <mesh
                        name="Cube 121"
                        geometry={nodes['Cube 121'].geometry}
                        material={materials['Chair wood']}
                        castShadow
                        receiveShadow
                        position={[26.57, -4.3, -27.42]}
                        rotation={[1.66, 0.09, -0.01]}
                        scale={[-1, 1, 9.37]}
                    />
                    <mesh
                        name="Cube 11"
                        geometry={nodes['Cube 11'].geometry}
                        material={materials['Chair wood']}
                        castShadow
                        receiveShadow
                        position={[-25.92, -4.3, 25.19]}
                        rotation={[1.48, -0.09, 0]}
                        scale={[-1, 1, 9.37]}
                    />
                    <mesh
                        name="Cube 10"
                        geometry={nodes['Cube 10'].geometry}
                        material={materials['Chair wood']}
                        castShadow
                        receiveShadow
                        position={[26.57, -4.3, 25.19]}
                        rotation={[1.48, 0.09, 0]}
                        scale={[-1, 1, 9.37]}
                    />
                    <mesh
                        name="Cube 91"
                        geometry={nodes['Cube 91'].geometry}
                        material={materials['Chair wood']}
                        castShadow
                        receiveShadow
                        position={[0, 41.53, 0]}
                        rotation={[-Math.PI / 2, 0, -Math.PI]}
                        scale={[1, 1, 0.14]}
                    />
                </group>
                <mesh
                    name="Cube 8"
                    geometry={nodes['Cube 8'].geometry}
                    material={materials['Cube 8 Material']}
                    castShadow
                    receiveShadow
                    position={[8.63, 96.78, -14.15]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                    scale={[1, 1, 1.77]}
                />
                <mesh
                    name="Cube 81"
                    geometry={nodes['Cube 81'].geometry}
                    material={materials['Cube 81 Material']}
                    castShadow
                    receiveShadow
                    position={[8.63, 96.78, -319.93]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                    scale={[1, 1, 1.77]}
                />
                <mesh
                    name="Cube 7"
                    geometry={nodes['Cube 7'].geometry}
                    material={materials['Cube 7 Material']}
                    castShadow
                    receiveShadow
                    position={[107.5, 96.78, -14.15]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                    scale={[1, 1, 1.77]}
                />
                <mesh
                    name="Cube 6"
                    geometry={nodes['Cube 6'].geometry}
                    material={materials['Cube 6 Material']}
                    castShadow
                    receiveShadow
                    position={[107.5, 96.78, -319.93]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                    scale={[1, 1, 1.77]}
                />
                <mesh
                    name="Cube 5"
                    geometry={nodes['Cube 5'].geometry}
                    material={materials['Cube 5 Material']}
                    castShadow
                    receiveShadow
                    position={[58.26, 200, -167.35]}
                    rotation={[Math.PI / 2, Math.PI / 2, 0]}
                />
                <mesh
                    name="Cube 4"
                    geometry={nodes['Cube 4'].geometry}
                    material={materials['Cube 4 Material']}
                    castShadow
                    receiveShadow
                    position={[530.77, 320.41, -242.04]}
                />
                <mesh
                    name="Cube 3"
                    geometry={nodes['Cube 3'].geometry}
                    material={materials['Cube 3 Material']}
                    castShadow
                    receiveShadow
                    position={[0, 250, 0]}
                    rotation={[Math.PI, 0, Math.PI / 2]}
                />
                <mesh
                    name="Cube 2"
                    geometry={nodes['Cube 2'].geometry}
                    material={materials['Cube 2 Material']}
                    castShadow
                    receiveShadow
                    position={[0, 250, 0]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                />
                <mesh
                    name="Cube"
                    geometry={nodes.Cube.geometry}
                    material={materials['Cube Material']}
                    castShadow
                    receiveShadow
                    position={[3, 0, -1]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
            </group>
        </>
    )
}
