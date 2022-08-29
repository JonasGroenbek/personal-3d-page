import { GroupProps } from '@react-three/fiber'
import useSpline from '@splinetool/r3f-spline'

export const Room = (props: GroupProps) => {
    const { nodes, materials } = useSpline(
        'https://prod.spline.design/OEtNeVGd1dIudaoJ/scene.splinecode'
    )
    return (
        <>
            <color attach="background" args={['#d4e9f3']} />
            <group {...props} dispose={null}>
                <group name="Computer" position={[-147.81, 269.63, -64.43]}>
                    <mesh
                        name="Cube 13"
                        geometry={nodes['Cube 13'].geometry}
                        material={materials.Red}
                        castShadow
                        receiveShadow
                        position={[-2.04, -23.93, -4.77]}
                        rotation={[0, 0.47, 0]}
                        scale={[0.56, 1.3, 0.56]}
                    />
                    <mesh
                        name="Cube 12"
                        geometry={nodes['Cube 12'].geometry}
                        material={materials.Red}
                        castShadow
                        receiveShadow
                        position={[9.41, 1.49, 19.12]}
                        rotation={[1.81, -0.11, -0.47]}
                        scale={[0.56, 0.57, 0.61]}
                    />
                </group>
                <mesh
                    name="Cube 10"
                    geometry={nodes['Cube 10'].geometry}
                    material={materials.Blue}
                    castShadow
                    receiveShadow
                    position={[-405.39, 122.52, -170.92]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={[1.62, 1, 2.26]}
                />
                <mesh
                    name="Cube 101"
                    geometry={nodes['Cube 101'].geometry}
                    material={materials.Blue}
                    castShadow
                    receiveShadow
                    position={[-99.62, 122.52, -170.92]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={[1.62, 1, 2.26]}
                />
                <mesh
                    name="Cube 102"
                    geometry={nodes['Cube 102'].geometry}
                    material={materials.Blue}
                    castShadow
                    receiveShadow
                    position={[-405.39, 122.52, -10.7]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={[1.62, 1, 2.26]}
                />
                <mesh
                    name="Cube 103"
                    geometry={nodes['Cube 103'].geometry}
                    material={materials.Blue}
                    castShadow
                    receiveShadow
                    position={[-99.62, 122.52, -10.7]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    scale={[1.62, 1, 2.26]}
                />
                <mesh
                    name="Cube 104"
                    geometry={nodes['Cube 104'].geometry}
                    material={materials.Blue}
                    castShadow
                    receiveShadow
                    position={[-252.2, 238.42, -90.49]}
                    rotation={[0, 0, Math.PI / 2]}
                    scale={[0.45, 1, 1.62]}
                />
                <mesh
                    name="Sphere"
                    geometry={nodes.Sphere.geometry}
                    material={materials['Sphere Material']}
                    castShadow
                    receiveShadow
                    position={[-799, 104, 171.5]}
                />
                <mesh
                    name="Cube 9"
                    geometry={nodes['Cube 9'].geometry}
                    material={materials.Red}
                    castShadow
                    receiveShadow
                    position={[-6.62, 352.5, 265.34]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[1, 1, 0.26]}
                />
                <group name="Group" position={[150.06, 47.87, -102.92]}>
                    <mesh
                        name="Cube 121"
                        geometry={nodes['Cube 121'].geometry}
                        material={materials['Chair wood']}
                        castShadow
                        receiveShadow
                        position={[-25.92, -4.3, -27.42]}
                        rotation={[1.66, -0.09, 0]}
                        scale={[-1, 1, 9.37]}
                    />
                    <mesh
                        name="Cube 122"
                        geometry={nodes['Cube 122'].geometry}
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
                        name="Cube 105"
                        geometry={nodes['Cube 105'].geometry}
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
                    material={materials['Chair wood']}
                    castShadow
                    receiveShadow
                    position={[8.63, 68.98, -14.15]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                    scale={[1, 1, 1.33]}
                />
                <mesh
                    name="Cube 81"
                    geometry={nodes['Cube 81'].geometry}
                    material={materials['Chair wood']}
                    castShadow
                    receiveShadow
                    position={[8.63, 68.98, -319.93]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                    scale={[1, 1, 1.33]}
                />
                <mesh
                    name="Cube 7"
                    geometry={nodes['Cube 7'].geometry}
                    material={materials['Chair wood']}
                    castShadow
                    receiveShadow
                    position={[107.5, 68.98, -14.15]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                    scale={[1, 1, 1.33]}
                />
                <mesh
                    name="Cube 6"
                    geometry={nodes['Cube 6'].geometry}
                    material={materials['Chair wood']}
                    castShadow
                    receiveShadow
                    position={[107.5, 68.98, -319.93]}
                    rotation={[-Math.PI / 2, 0, -Math.PI]}
                    scale={[1, 1, 1.33]}
                />
                <mesh
                    name="Cube 5"
                    geometry={nodes['Cube 5'].geometry}
                    material={materials['Chair wood']}
                    castShadow
                    receiveShadow
                    position={[58.26, 146.57, -167.35]}
                    rotation={[Math.PI / 2, Math.PI / 2, 0]}
                    scale={[0.75, 1, 1]}
                />

                <mesh
                    name="Cube 3"
                    geometry={nodes['Cube 3'].geometry}
                    material={materials['Mid blue']}
                    castShadow
                    receiveShadow
                    position={[0, 250, 0]}
                    rotation={[Math.PI, 0, Math.PI / 2]}
                />
                <mesh
                    name="Cube 2"
                    geometry={nodes['Cube 2'].geometry}
                    material={materials['Mid blue']}
                    castShadow
                    receiveShadow
                    position={[0, 250, 0]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                />
                <mesh
                    name="Cube"
                    geometry={nodes.Cube.geometry}
                    material={materials['Dark blue']}
                    castShadow
                    receiveShadow
                    position={[3, 0, -1]}
                    rotation={[Math.PI / 2, 0, 0]}
                />
            </group>
        </>
    )
}
