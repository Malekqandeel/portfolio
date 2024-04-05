import React from 'react'
import { styles } from '../style'
import Computers from './canvas/Computers'
import { design } from '../assets'
import {motion} from 'framer-motion'



const Hero = () => {
  return (
    <section className=' relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center
         mt-5'>
          <div className='w-5 h-5  rounded-full bg-[#915eff]'/>
        <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div className='w-full '>
        <h1 className={`${styles.heroHeadText} text-white`}> Hi, I'm <span className='text-[#915eff]'>MALEK</span></h1>
        <p className={`${styles.heroSubText } mt-2 text-white-180`}>
          Full-Stack Developer <br className='sm:block hidden'/>
          Client Side & Server Side
        </p>
        </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href='#about'>
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2">
              <motion.dev 
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration:1.5,
                repeat:Infinity,
                repeatType:'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div> 
      </div>

      <div className='overflow-hidden xl:flex-1 xl:h-auto md:h-[550px] h-auto mr-4' >
        <img  className="rounded-full opacity-25" src={design} alt='pic'/>
        </div>
      

    </section>
  )
}

export default Hero