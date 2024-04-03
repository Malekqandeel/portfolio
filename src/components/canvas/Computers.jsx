import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'


import React from 'react';
import { design } from '../../assets';

const Background = ()=>{
  return (
    <mesh>
      <Sphere args={[1,100,300]} scale={2.4}>
      <MeshDistortMaterial
      color="#663b87"
      attach="material"
      distort={0.5}
      speed={2}
      />
      </Sphere>

    </mesh>
  )
}

const Computers = () => {
  return (
     <div className='flex justify-center items-center px-16'>
      <div className='relative w-full max-w-lg h-[450px]'>
      
      <Canvas className='absolute w-full h-[500px]'>
        <OrbitControls enableZoom={false}/>
        <directionalLight position={[3,2,1]}/>
        <Background />
        
      </Canvas>
      <img  className="absolute rounded-full top-0 -left-4 w-72 m-auto opacity-75 h-[350px] animate-[wiggle_1s_ease-in-out_infinite]" src={design} alt='pic'/>
      </div>
      </div>
    
  )
}

export default Computers