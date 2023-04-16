import React from 'react'
import {motion} from 'framer-motion'
import { styles } from '../style'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'


const WorkCard = ({index,name,description,image, source_code_link}) => {
  return(
    <div className=" xs:w-[500px] w-full" >
      <motion.div variants={fadeIn("right", "spring", 0.5*index, 0.75)} 
      className='w-full p-[1px] rounded-[20px] shadow-card'
      >
        <div options = {{max:45, scale:1, speed:450}} className="
         bg-tertiary rounded-[20px] py-5 px-12 min-h-[300px] flex justify-evenly items-start flex-col
        ">
          <div className="basis-1 w-full">

          <img src={image} alt={name} className="rounded-[10px] bg-white w-full"></img>
          </div>
          <h2 className='text-[24px] text-white mb-2 mt-1  font-bold'>{name}</h2>
          <p className="text-[16px] basis-2">{description}</p>
          <a href={source_code_link} className='text-secondary font-medium underline mt-1'>{source_code_link}</a>
        </div>
      </motion.div>
      
    </div>
  )
}



const Works = () => {
  return (
    <>
      <motion.div variants={textVariant(2)}>
        <p className={styles.sectionSubText}> My works</p>
        <h2 className={styles.sectionHeadText}> Projects</h2>

      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} 
      className='mt=4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        These are some of the cool projects i have made using different technologies

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {
          projects.map((project, index)=>(
            <WorkCard key={project.name} index={index} {...project}/>
          ))

        }
      </div>


    </>
  )
}

export default SectionWrapper(Works, "")