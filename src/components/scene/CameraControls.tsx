import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export const CameraControls = () => {
    const { camera, gl } = useThree()

    useEffect(() => {
        const controls = new OrbitControls(camera, gl.domElement)

        controls.rotateSpeed = 0.2
        controls.minDistance = 800
        controls.maxDistance = 1000
        controls.maxPolarAngle = 1.4
        controls.minPolarAngle = 0.5
        return () => {
            controls.dispose()
        }
    }, [camera, gl])
    return null
}
