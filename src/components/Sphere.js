import { useTexture } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber';
import React, { useRef } from 'react'
import { TextureLoader } from 'three';



function Sphere() {

// const colorMap = useLoader(TextureLoader, 'moon.jpg')

const meshRefSphere=useRef();

useFrame( //Hook provided by React-three fiber
    ()=>{
    
        if (!meshRefSphere.current){
            return
        }

        meshRefSphere.current.rotation.x+=0.01;
        meshRefSphere.current.rotation.y+=0.005;
        // meshRefSphere.current.rotation.z+=0.01

    }
);



const props = useTexture({
  map: 'moon.jpg',
  normalMap: 'normal.jpg',
})

return (
    <mesh ref={meshRefSphere} position={[-10,0,30]}>
        <sphereBufferGeometry attach={"geometry"} args={[3, 32, 32]}></sphereBufferGeometry>
        <meshStandardMaterial {...props}></meshStandardMaterial>
        
    </mesh>
  )
}

export default Sphere