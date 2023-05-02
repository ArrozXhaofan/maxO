"use client"

import {motion} from 'framer-motion'

function Card() {
  return (

    <motion.div
      >
        <p>MS 1300 EX1 - SUBLIMACIÓN</p>
        <button className='bg- bg-primary-0 rounded-full py-2 px-10 text-white'
        >VER MÁS</button>
    </motion.div>
  )
}

export default Card