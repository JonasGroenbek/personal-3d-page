import { Canvas, GroupProps } from '@react-three/fiber'
import { CameraControls } from './CameraControls'
import { Lights } from './Lights'
import { Room } from './Room'
import * as THREE from 'three'

export const Scene = () => {
    return (
        <Canvas
            gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
            shadows={true}
            camera={{
                fov: 75,
                near: 100,
                far: 100000,
                position: [700, 400, 700],
            }}
        >
            <CameraControls />
            <Lights />
            <Room />
        </Canvas>
    )
}
