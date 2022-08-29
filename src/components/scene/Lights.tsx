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
                ref={() => ref}
                castShadow
                intensity={0.2}
                position={[-3, 5, 3]}
            />
            <pointLight name="Point Light 3" castShadow intensity={0.2} position={[-3, 5, -3]} />
            <pointLight name="Point Light 2" castShadow intensity={0.2} position={[3, 5, -3]} />
            <pointLight name="Point Light" castShadow intensity={0.2} position={[3, 5, 3]} />
        </>
    )
}
