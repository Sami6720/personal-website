import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'
import { TorusGeometry } from 'three'

function Torus() {

    const meshRef=useRef();

    useFrame( //Hook provided by React-three fiber
        ()=>{
        
            if (!meshRef.current){
                return
            }

            meshRef.current.rotation.x+=0.01;
            meshRef.current.rotation.y+=0.005;
            meshRef.current.rotation.z+=0.01

        }
    );


  return (
    <mesh ref={meshRef} >
        <torusBufferGeometry attach="geometry" args={[16, 3, 16, 100]}></torusBufferGeometry>
        <meshLambertMaterial attach="material" color='orange'></meshLambertMaterial>
    </mesh>
  )
}

export default Torus