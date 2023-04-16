import React from 'react'
import {motion} from 'framer-motion'
import { styles } from '../style'
import {fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import Mineimg from '../assets/mine.jpeg'


const MeCard = ()=>{
    return(
        <div className="xs:w-[350px] w-full mt-3">
            <motion.div
            variants={fadeIn("right","spring",1,0.75)} className='w-full p-[1px] rounded-20px shadow-card'
            >
                <div
                 options = {{max:45, scale:1, speed:450}} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[500px] 
                 flex justify-evenly items-center flex-col "
                >
                    <img src = {Mineimg} alt='my image' className='w-34 h-34 rounded-full '/>
                    <h3 className='text-[20px] text-secondary font-extrabold'>JOSEPH PAULY</h3>
                    <p className='text-[16px] text-secondary font-semibold'> GECT S4|CSE </p>
                </div>
            </motion.div>


        </div>
    )
}

const Mine = () => {
  return (
    <>
    <motion.div variants={textVariant(2)}>
        <p className={styles.sectionSubText}>Something about ME</p>
        <h3 className={styles.sectionHeadText}>ME</h3>

    </motion.div>
    <div className='w-full justify-center items-center flex'>

    <MeCard />
    </div>
    </>
  )
}

export default SectionWrapper(Mine," ")