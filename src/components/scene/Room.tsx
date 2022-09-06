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
                <group name="Big plant" position={[-46.9, 78.93, -57.44]} scale={1.34}>
                    <group name="Leafs" position={[2.86, 17.71, 3.01]}>
                        <mesh
                            name="Cube 31"
                            geometry={nodes['Cube 31'].geometry}
                            material={materials.Green}
                            castShadow
                            receiveShadow
                            position={[-10.58, 2.64, -10.73]}
                            rotation={[-Math.PI / 2, 0, -1.75]}
                            scale={[1, 1, 1.48]}
                        />
                        <mesh
                            name="Cube 30"
                            geometry={nodes['Cube 30'].geometry}
                            material={materials.Green}
                            castShadow
                            receiveShadow
                            position={[-2.69, 1.26, -6.42]}
                            rotation={[-Math.PI / 2, 0, -2.88]}
                            scale={[1, 1, 1.27]}
                        />
                        <mesh
                            name="Cube 29"
                            geometry={nodes['Cube 29'].geometry}
                            material={materials.Green}
                            castShadow
                            receiveShadow
                            position={[12.49, 2.64, -6.75]}
                            rotation={[-Math.PI / 2, 0, 2.71]}
                            scale={[1, 1, 1.48]}
                        />
                        <mesh
                            name="Cube 28"
                            geometry={nodes['Cube 28'].geometry}
                            material={materials.Green}
                            castShadow
                            receiveShadow
                            position={[-8.43, -8.63, -0.02]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 6]}
                        />
                        <mesh
                            name="Cube 27"
                            geometry={nodes['Cube 27'].geometry}
                            material={materials.Green}
                            castShadow
                            receiveShadow
                            position={[-2.04, 2.64, 0.61]}
                            rotation={[-Math.PI / 2, 0, 1.31]}
                            scale={[1, 1, 1.48]}
                        />
                        <mesh
                            name="Cube 26"
                            geometry={nodes['Cube 26'].geometry}
                            material={materials.Green}
                            castShadow
                            receiveShadow
                            position={[5.48, -7.63, 2.62]}
                            rotation={[-Math.PI / 2, 0, 1.31]}
                        />
                        <mesh
                            name="Cube 25"
                            geometry={nodes['Cube 25'].geometry}
                            material={materials.Green}
                            castShadow
                            receiveShadow
                            position={[-4.52, -8.63, 8.62]}
                            rotation={[-Math.PI / 2, 0, 0]}
                        />
                    </group>
                    <mesh
                        name="Cube 24"
                        geometry={nodes['Cube 24'].geometry}
                        material={materials.Yellow}
                        castShadow
                        receiveShadow
                        position={[0, -36.49, 0]}
                    />
                </group>
                <group
                    name="Guitar"
                    position={[-37.02, 82.28, -413.61]}
                    rotation={[-Math.PI / 2, 0.26, Math.PI / 2]}
                >
                    <group name="Guitar head" position={[-0.21, 2.97, 32.72]}>
                        <mesh
                            name="Cube 32"
                            geometry={nodes['Cube 32'].geometry}
                            material={materials.Blue}
                            castShadow
                            receiveShadow
                            position={[-7.71, -0.09, 34.63]}
                            rotation={[-1.59, 0, Math.PI / 2]}
                            scale={[1, 1.6, 2]}
                        />
                        <mesh
                            name="Cube 311"
                            geometry={nodes['Cube 311'].geometry}
                            material={materials.Blue}
                            castShadow
                            receiveShadow
                            position={[-7.71, 0.15, 47.94]}
                            rotation={[-1.59, 0, Math.PI / 2]}
                            scale={[1, 1.6, 2]}
                        />
                        <mesh
                            name="Cube 312"
                            geometry={nodes['Cube 312'].geometry}
                            material={materials.Blue}
                            castShadow
                            receiveShadow
                            position={[-8, 0.03, 41.45]}
                            rotation={[-1.59, 0, Math.PI / 2]}
                            scale={[1, 1.6, 2]}
                        />
                        <mesh
                            name="Cube 301"
                            geometry={nodes['Cube 301'].geometry}
                            material={materials.Blue}
                            castShadow
                            receiveShadow
                            position={[7.63, 0.15, 47.94]}
                            rotation={[-1.59, 0, Math.PI / 2]}
                            scale={[1, 1.6, 2]}
                        />
                        <mesh
                            name="Cube 291"
                            geometry={nodes['Cube 291'].geometry}
                            material={materials.Blue}
                            castShadow
                            receiveShadow
                            position={[7.63, -0.08, 34.88]}
                            rotation={[-1.59, 0, Math.PI / 2]}
                            scale={[1, 1.6, 2]}
                        />
                        <mesh
                            name="Cube 281"
                            geometry={nodes['Cube 281'].geometry}
                            material={materials.Blue}
                            castShadow
                            receiveShadow
                            position={[8, 0.03, 41.45]}
                            rotation={[-1.59, 0, Math.PI / 2]}
                            scale={[1, 1.6, 2]}
                        />
                        <mesh
                            name="Cube 271"
                            geometry={nodes['Cube 271'].geometry}
                            material={materials.Red}
                            castShadow
                            receiveShadow
                            position={[-0.04, 0.03, 41.45]}
                            rotation={[-1.59, 0, -Math.PI]}
                            scale={[0.95, 5.7, 0.11]}
                        />
                        <mesh
                            name="Cube 261"
                            geometry={nodes['Cube 261'].geometry}
                            material={materials.Blue}
                            castShadow
                            receiveShadow
                            position={[-0.04, -0.86, -9.86]}
                            rotation={[-1.59, 0, -Math.PI]}
                            scale={[0.95, 27.72, 0.11]}
                        />
                    </group>
                    <group name="Guitar body" position={[0, -2.97, -39.08]}>
                        <mesh
                            name="Cube 251"
                            geometry={nodes['Cube 251'].geometry}
                            material={materials.Yellow}
                            castShadow
                            receiveShadow
                            position={[-0.25, 4.09, 5.21]}
                            rotation={[-1.59, 0, -Math.PI]}
                            scale={[1.26, 2.26, 0.15]}
                        />
                        <mesh
                            name="Cube 241"
                            geometry={nodes['Cube 241'].geometry}
                            material={materials.Yellow}
                            castShadow
                            receiveShadow
                            position={[-0.25, 4.29, 16.96]}
                            rotation={[-1.59, 0, -Math.PI]}
                            scale={[1.26, 2.26, 0.15]}
                        />
                        <mesh
                            name="Shape"
                            geometry={nodes.Shape.geometry}
                            material={materials.Red}
                            castShadow
                            receiveShadow
                            position={[-23.98, 5.08, 52.9]}
                            rotation={[1.55, 0, 0]}
                        />
                    </group>
                </group>
                <mesh
                    name="Cube 23"
                    geometry={nodes['Cube 23'].geometry}
                    material={materials.Green}
                    castShadow
                    receiveShadow
                    position={[-279.43, 417.91, -2.11]}
                    rotation={[0, 0, -0.77]}
                    scale={[0.42, 0.15, 0.06]}
                />
                <mesh
                    name="Cube 22"
                    geometry={nodes['Cube 22'].geometry}
                    material={materials.Green}
                    castShadow
                    receiveShadow
                    position={[-262.53, 401.62, -2]}
                    rotation={[0, 0, -0.77]}
                    scale={[1.22, 0.15, 0.06]}
                />
                <mesh
                    name="Cube 21"
                    geometry={nodes['Cube 21'].geometry}
                    material={materials.Green}
                    castShadow
                    receiveShadow
                    position={[-241.15, 394.12, -2]}
                    rotation={[0, 0, 0.61]}
                    scale={[0.72, 0.15, 0.06]}
                />
                <mesh
                    name="Cube 20"
                    geometry={nodes['Cube 20'].geometry}
                    material={materials.Green}
                    castShadow
                    receiveShadow
                    position={[-226.07, 393.44, -2]}
                    rotation={[0, 0, -0.78]}
                    scale={[0.72, 0.15, 0.06]}
                />
                <mesh
                    name="Cube 19"
                    geometry={nodes['Cube 19'].geometry}
                    material={materials.Green}
                    castShadow
                    receiveShadow
                    position={[-207.49, 386.64, -2]}
                    rotation={[0, 0, 0.07]}
                    scale={[0.72, 0.15, 0.06]}
                />
                <mesh
                    name="Cube 18"
                    geometry={nodes['Cube 18'].geometry}
                    material={materials.Green}
                    castShadow
                    receiveShadow
                    position={[-192, 383.07, -2]}
                    rotation={[0, 0, -0.75]}
                    scale={[0.49, 0.15, 0.06]}
                />
                <mesh
                    name="Cube 17"
                    geometry={nodes['Cube 17'].geometry}
                    material={materials.Green}
                    castShadow
                    receiveShadow
                    position={[-184.71, 380.62, -2]}
                    rotation={[0, 0, 0.5]}
                    scale={[0.34, 0.15, 0.06]}
                />
                <mesh
                    name="Cube 16"
                    geometry={nodes['Cube 16'].geometry}
                    material={materials.Green}
                    castShadow
                    receiveShadow
                    position={[-169.77, 372.75, -2]}
                    rotation={[0, 0, -0.71]}
                    scale={[1, 0.15, 0.06]}
                />
                <mesh
                    name="Cube 15"
                    geometry={nodes['Cube 15'].geometry}
                    material={materials.Green}
                    castShadow
                    receiveShadow
                    position={[-149.05, 348.48, -2]}
                    rotation={[0, 0, -1.03]}
                    scale={[1, 0.15, 0.06]}
                />
                <mesh
                    name="Cube 14"
                    geometry={nodes['Cube 14'].geometry}
                    material={materials.Blue}
                    castShadow
                    receiveShadow
                    position={[-221, 390.74, -1.73]}
                    rotation={[Math.PI, 0, -Math.PI / 2]}
                    scale={[-1, 1, 0.01]}
                />
                <mesh
                    name="Cube 13"
                    geometry={nodes['Cube 13'].geometry}
                    material={materials.Blue}
                    castShadow
                    receiveShadow
                    position={[-5.82, 330.82, -321.56]}
                    rotation={[Math.PI, -Math.PI / 2, 0]}
                    scale={[-1, 1, 0.02]}
                />
                <mesh
                    name="Cube 12"
                    geometry={nodes['Cube 12'].geometry}
                    material={materials.Blue}
                    castShadow
                    receiveShadow
                    position={[-220.74, 393.06, -3.76]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[1, 1, 0.57]}
                />
                <mesh
                    name="Cube 11"
                    geometry={nodes['Cube 11'].geometry}
                    material={materials.Green}
                    castShadow
                    receiveShadow
                    position={[-5.23, 354, -109.29]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[1, 0.65, 1]}
                />
                <mesh
                    name="Cube 10"
                    geometry={nodes['Cube 10'].geometry}
                    material={materials.Yellow}
                    castShadow
                    receiveShadow
                    position={[-5.23, 328.67, -325]}
                    rotation={[Math.PI, -Math.PI / 2, 0]}
                    scale={[1.6, 1.28, 1.28]}
                />
                <group name="Books" position={[21.21, 170.2, -21.62]}>
                    <mesh
                        name="Cube 131"
                        geometry={nodes['Cube 131'].geometry}
                        material={materials.Red}
                        castShadow
                        receiveShadow
                        position={[10.2, -2.43, 4.27]}
                        rotation={[-Math.PI / 2, -0.38, -Math.PI]}
                        scale={[-0.21, 1, 0.73]}
                    />
                    <mesh
                        name="Cube 121"
                        geometry={nodes['Cube 121'].geometry}
                        material={materials.Red}
                        castShadow
                        receiveShadow
                        position={[-0.68, -0.51, -4.27]}
                        rotation={[-Math.PI / 2, -0.31, -Math.PI]}
                        scale={[-0.21, 1, 0.85]}
                    />
                    <mesh
                        name="Cube 111"
                        geometry={nodes['Cube 111'].geometry}
                        material={materials.Red}
                        castShadow
                        receiveShadow
                        position={[-13.39, 0.93, -4.27]}
                        rotation={[-Math.PI / 2, -0.12, -Math.PI]}
                        scale={[-0.21, 1, 0.85]}
                    />
                </group>
                <mesh
                    name="Cylinder"
                    geometry={nodes.Cylinder.geometry}
                    material={materials.Yellow}
                    castShadow
                    receiveShadow
                    position={[348.2, 0.07, -165.5]}
                    rotation={[Math.PI, 0, -Math.PI]}
                />
                <group name="Plant" position={[-364.93, 261.8, -42.35]}>
                    <group name="Leafs1" position={[0, 3.97, 0]}>
                        <mesh
                            name="Cube 201"
                            geometry={nodes['Cube 201'].geometry}
                            material={materials['Cube 201 Material']}
                            castShadow
                            receiveShadow
                            position={[-0.94, 0, -0.33]}
                            rotation={[-Math.PI / 2, 0, -2.37]}
                            scale={[1, 1, 3.44]}
                        />
                        <mesh
                            name="Cube 191"
                            geometry={nodes['Cube 191'].geometry}
                            material={materials['Cube 191 Material']}
                            castShadow
                            receiveShadow
                            position={[1.61, -1.54, -2.63]}
                            rotation={[-Math.PI / 2, 0, 2.31]}
                            scale={[1, 1, 3.44]}
                        />
                        <mesh
                            name="Cube 181"
                            geometry={nodes['Cube 181'].geometry}
                            material={materials['Cube 181 Material']}
                            castShadow
                            receiveShadow
                            position={[1.82, -0.54, 2.07]}
                            rotation={[-Math.PI / 2, 0, 0.09]}
                            scale={[1, 1, 3.44]}
                        />
                    </group>
                    <mesh
                        name="Cylinder1"
                        geometry={nodes.Cylinder1.geometry}
                        material={materials['Mid blue']}
                        castShadow
                        receiveShadow
                        position={[0.71, -8.92, 0.19]}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                </group>
                <mesh
                    name="Mouse"
                    geometry={nodes.Mouse.geometry}
                    material={materials.Yellow}
                    castShadow
                    receiveShadow
                    position={[-320.62, 243.85, -139.9]}
                    rotation={[-Math.PI, 1.35, -Math.PI]}
                    scale={[0.24, 0.97, 0.28]}
                />
                <mesh
                    name="Keyboard"
                    geometry={nodes.Keyboard.geometry}
                    material={materials.Yellow}
                    castShadow
                    receiveShadow
                    position={[-253.08, 242.65, -141.79]}
                    rotation={[0, -0.22, 0]}
                    scale={[0.74, 1, 0.61]}
                />
                <group name="Screen" position={[-268.54, 277.99, -36.98]}>
                    <mesh
                        name="Cube 171"
                        geometry={nodes['Cube 171'].geometry}
                        material={materials.Yellow}
                        castShadow
                        receiveShadow
                        position={[-0.01, 9.09, -0.48]}
                        rotation={[-Math.PI, 0, -Math.PI]}
                        scale={[-1, 18.74, 0.2]}
                    />
                    <mesh
                        name="Cube 132"
                        geometry={nodes['Cube 132'].geometry}
                        material={materials.Red}
                        castShadow
                        receiveShadow
                        position={[0, 8.73, 0]}
                        rotation={[-Math.PI, 0, -Math.PI]}
                        scale={[-1, 18.74, 0.2]}
                    />
                    <mesh
                        name="Cube 122"
                        geometry={nodes['Cube 122'].geometry}
                        material={materials.Red}
                        castShadow
                        receiveShadow
                        position={[0, -25.12, 0]}
                        scale={[-0.11, 6.21, 0.18]}
                    />
                    <mesh
                        name="Cube 112"
                        geometry={nodes['Cube 112'].geometry}
                        material={materials.Red}
                        castShadow
                        receiveShadow
                        position={[0, -35.34, 0]}
                    />
                </group>
                <group name="Computer" position={[-147.81, 269.63, -64.43]}>
                    <mesh
                        name="Cube 133"
                        geometry={nodes['Cube 133'].geometry}
                        material={materials.Red}
                        castShadow
                        receiveShadow
                        position={[-2.04, -23.93, -4.77]}
                        rotation={[0, 0.47, 0]}
                        scale={[0.56, 1.3, 0.56]}
                    />
                    <mesh
                        name="Cube 182"
                        geometry={nodes['Cube 182'].geometry}
                        material={materials.Yellow}
                        castShadow
                        receiveShadow
                        position={[9.36, 1.72, 19.31]}
                        rotation={[1.81, -0.11, -0.47]}
                        scale={[0.56, 0.1, 0.61]}
                    />
                    <mesh
                        name="Cube 123"
                        geometry={nodes['Cube 123'].geometry}
                        material={materials.Red}
                        castShadow
                        receiveShadow
                        position={[9.41, 1.49, 19.12]}
                        rotation={[1.81, -0.11, -0.47]}
                        scale={[0.56, 0.57, 0.61]}
                    />
                </group>
                <group name="Standing desk" position={[-252.2, 122.7, -90.49]}>
                    <mesh
                        name="Cube 101"
                        geometry={nodes['Cube 101'].geometry}
                        material={materials.Blue}
                        castShadow
                        receiveShadow
                        position={[-153.19, -0.18, -80.43]}
                        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                        scale={[1.62, 1, 2.26]}
                    />
                    <mesh
                        name="Cube 102"
                        geometry={nodes['Cube 102'].geometry}
                        material={materials.Blue}
                        castShadow
                        receiveShadow
                        position={[152.59, -0.18, -80.43]}
                        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                        scale={[1.62, 1, 2.26]}
                    />
                    <mesh
                        name="Cube 103"
                        geometry={nodes['Cube 103'].geometry}
                        material={materials.Blue}
                        castShadow
                        receiveShadow
                        position={[-153.19, -0.18, 79.79]}
                        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                        scale={[1.62, 1, 2.26]}
                    />
                    <mesh
                        name="Cube 104"
                        geometry={nodes['Cube 104'].geometry}
                        material={materials.Blue}
                        castShadow
                        receiveShadow
                        position={[152.59, -0.18, 79.79]}
                        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                        scale={[1.62, 1, 2.26]}
                    />
                    <mesh
                        name="Cube 105"
                        geometry={nodes['Cube 105'].geometry}
                        material={materials.Blue}
                        castShadow
                        receiveShadow
                        position={[0, 115.72, 0]}
                        rotation={[0, 0, Math.PI / 2]}
                        scale={[0.45, 1, 1.62]}
                    />
                </group>
                <mesh
                    name="Sphere"
                    geometry={nodes.Sphere.geometry}
                    material={materials.Green}
                    castShadow
                    receiveShadow
                    position={[-369.74, 47.01, -62.55]}
                />
                <mesh
                    name="Cube 9"
                    geometry={nodes['Cube 9'].geometry}
                    material={materials.Blue}
                    castShadow
                    receiveShadow
                    position={[-6.62, 352.5, 265.34]}
                    rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                    scale={[1, 1, 0.26]}
                />
                <group name="Small chair" position={[150.06, 47.87, -102.92]}>
                    <mesh
                        name="Cube 124"
                        geometry={nodes['Cube 124'].geometry}
                        material={materials['Chair wood']}
                        castShadow
                        receiveShadow
                        position={[-25.92, -4.3, -27.42]}
                        rotation={[1.66, -0.09, 0]}
                        scale={[-1, 1, 9.37]}
                    />
                    <mesh
                        name="Cube 125"
                        geometry={nodes['Cube 125'].geometry}
                        material={materials['Chair wood']}
                        castShadow
                        receiveShadow
                        position={[26.57, -4.3, -27.42]}
                        rotation={[1.66, 0.09, -0.01]}
                        scale={[-1, 1, 9.37]}
                    />
                    <mesh
                        name="Cube 113"
                        geometry={nodes['Cube 113'].geometry}
                        material={materials['Chair wood']}
                        castShadow
                        receiveShadow
                        position={[-25.92, -4.3, 25.19]}
                        rotation={[1.48, -0.09, 0]}
                        scale={[-1, 1, 9.37]}
                    />
                    <mesh
                        name="Cube 106"
                        geometry={nodes['Cube 106'].geometry}
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
                <group name="Small desk" position={[58.26, 76.28, -167.35]}>
                    <mesh
                        name="Cube 8"
                        geometry={nodes['Cube 8'].geometry}
                        material={materials['Chair wood']}
                        castShadow
                        receiveShadow
                        position={[-49.63, -7.3, 153.19]}
                        rotation={[-Math.PI / 2, 0, -Math.PI]}
                        scale={[1, 1, 1.33]}
                    />
                    <mesh
                        name="Cube 81"
                        geometry={nodes['Cube 81'].geometry}
                        material={materials['Chair wood']}
                        castShadow
                        receiveShadow
                        position={[-49.63, -7.3, -152.59]}
                        rotation={[-Math.PI / 2, 0, -Math.PI]}
                        scale={[1, 1, 1.33]}
                    />
                    <mesh
                        name="Cube 7"
                        geometry={nodes['Cube 7'].geometry}
                        material={materials['Chair wood']}
                        castShadow
                        receiveShadow
                        position={[49.24, -7.3, 153.19]}
                        rotation={[-Math.PI / 2, 0, -Math.PI]}
                        scale={[1, 1, 1.33]}
                    />
                    <mesh
                        name="Cube 6"
                        geometry={nodes['Cube 6'].geometry}
                        material={materials['Chair wood']}
                        castShadow
                        receiveShadow
                        position={[49.24, -7.3, -152.59]}
                        rotation={[-Math.PI / 2, 0, -Math.PI]}
                        scale={[1, 1, 1.33]}
                    />
                    <mesh
                        name="Cube 5"
                        geometry={nodes['Cube 5'].geometry}
                        material={materials['Chair wood']}
                        castShadow
                        receiveShadow
                        position={[0, 70.29, 0]}
                        rotation={[Math.PI / 2, Math.PI / 2, 0]}
                        scale={[0.75, 1, 1]}
                    />
                </group>
                <group name="Walls" position={[-1, 250.5, 0]}>
                    <mesh
                        name="Cube 3"
                        geometry={nodes['Cube 3'].geometry}
                        material={materials['Mid blue']}
                        castShadow
                        receiveShadow
                        position={[0, 0.5, 0]}
                        rotation={[Math.PI, 0, Math.PI / 2]}
                    />
                    <mesh
                        name="Cube 2"
                        geometry={nodes['Cube 2'].geometry}
                        material={materials['Mid blue']}
                        castShadow
                        receiveShadow
                        position={[1, -0.5, 0]}
                        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                    />
                </group>
                <mesh
                    name="Cube"
                    geometry={nodes.Cube.geometry}
                    material={materials['Dark blue']}
                    castShadow
                    receiveShadow
                    rotation={[Math.PI / 2, 0, 0]}
                />
            </group>
        </>
    )
}
