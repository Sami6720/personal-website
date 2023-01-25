import React from 'react'


function Box() {
  return (
    <mesh rotation={[90,0,20]} position={[-3,-3.1,-60]}>
        <boxBufferGeometry attach="geometry" args={[3,3,3]}/>
        <meshLambertMaterial attach="material" color=""/>
    </mesh>
  )
}

export default Box