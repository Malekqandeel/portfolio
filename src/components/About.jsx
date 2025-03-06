import React from 'react'
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';

import { styles } from '../style';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

// eslint-disable-next-line react/prop-types
const ServiceCard = ({index,title,icon})=>{
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right","spring",0.5* index,0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div option={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} 
          className='w-16 h-16 object-contain'/>
          <h3 className='text-[#edb707] text-[20px] font-bold text-center'>
            {title}
          </h3>

        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        Introduction 
      </p>
      <h2 className={styles.sectionHeadText}>
        Qandeel
      </h2>
    </motion.div>
    <motion.p
    variants={fadeIn("","",0.1,1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      Results-driven Mid-Level Full-Stack Developer with a strong focus on optimizing website performance, improving development efficiency, and delivering scalable solutions. Proficient in MongoDB, React, and Node.js, with hands-on experience in building and maintaining robust web applications. Adept at collaborating with cross-functional teams, troubleshooting complex issues, and implementing best practices to enhance user experience. Passionate about writing clean, maintainable code and continuously improving development processes. Seeking opportunities to contribute my expertise in front-end and back-end development to drive innovation and business growth.

    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10 '>
      {services.map((service,index)=>(
        <ServiceCard key={service.title} index={index}{...service}/>
      ))}

    </div>
    </>
  )
}

export default SectionWrapper(About,"about")