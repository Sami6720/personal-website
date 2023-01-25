import { Stars } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import React from 'react'
import Box from './Box';
import Sphere from './Sphere'
import Torus from './Torus'



function Scene() {

    const {

        camera, // Default camera

      } = useThree();
    
    var lastTop=0;

    function moveCamera() {

        var top=document.body.getBoundingClientRect().top;

        if (top==0){
            camera.position.z =lastTop * 0.01;
            // console.log(lastTop)
            // console.log(top)
        }else{
            camera.position.z =top * 0.01;
        }
         lastTop=top;

     }
     
     document.body.onscroll = moveCamera;
  return (
    <mesh>
    {/* <gridHelper args={[400,100]}></gridHelper> */}
    <Sphere></Sphere>
    <Torus></Torus>
    <Stars radius={3} depth={200} count={2000}></Stars>
    {/* <Box></Box> */}
    </mesh>
  )
}

export default Scene