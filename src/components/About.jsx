import React from 'react'
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';

import { styles } from '../style';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

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
      Highly motivated in optimizing website performance, reducing development time, and collaborating with cross-functional teams to achieve project goals. Skilled in MongoDB, React, and Node.js, with a strong commitment to
collaboration, troubleshooting, and delivering innovative solutions. To obtain a full-stack developer position
where I can leverage my expertise in front-end and back-end development, as well as my knowledge of database
management, to create innovative and efficient web applications that improve user experiences and drive
business growth.
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