import logo from './logo.svg';
import './App.css';
import * as THREE from 'three';
import {  Scroll,OrbitControls, ScrollControls, Stars, useHelper, useScroll } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import Torus from './components/Torus';
import { MathUtils, PointLight, PointLightHelper } from 'three';
import { useEffect, useRef, useState } from 'react';
import Sphere from './components/Sphere';
import Main from './components/Main';
import Scene from './components/Scene';


function App() {


  useEffect(() => {
    document.title = 'Sami';
  }, []);

  return (
    
    <div className="App" >
      <Canvas camera={{ fov: 75, near: 0.1,  position: [0, 0, 10] }} className='canvas' style={{ height: "100%", width:"100%", position:'fixed', top:'0', left:'0'}}>
        <ambientLight intensity={0.5}/>
        <pointLight position={[5,5,5]}/>
          <OrbitControls></OrbitControls>
        <Scene></Scene>
      </Canvas>
      <Main className='main-comp'></Main>
    </div>
  );
}

export default App;