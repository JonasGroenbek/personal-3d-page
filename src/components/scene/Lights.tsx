import { useHelper } from '@react-three/drei'
import { useRef } from 'react'
import { PointLight } from 'three'

export const Lights = () => {
    const ref = useRef()
    const helper = useHelper(ref, PointLight)
    return (
        <>
            <pointLight
                name="Point Light 4"
                castShadow
                intensity={1}
                distance={2000}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-near={100}
                shadow-camera-far={100000}
                position={[-500, 500, 500]}
            />
            <pointLight
                name="Point Light 3"
                castShadow
                intensity={1}
                distance={2000}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-near={100}
                shadow-camera-far={100000}
                position={[-500, 500, -500]}
            />
            <pointLight
                name="Point Light 2"
                castShadow
                intensity={1}
                distance={2000}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-near={100}
                shadow-camera-far={100000}
                position={[500, 500, -500]}
            />
            <pointLight
                name="Point Light"
                castShadow
                intensity={1}
                distance={2000}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-near={100}
                shadow-camera-far={100000}
                position={[500, 500, 500]}
            />
        </>
    )
}
