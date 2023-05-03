"use client"

import {motion} from 'framer-motion'



async function Catalogo() {



  return (
    <div className='pt-14 font-montserrat relative overflow-hidden min-h-screen'>

      <motion.div
      transition={{
        duration:0.3
      }}
      initial={{
        translateX:"14rem",
        rotate:100,
        y:-1000
      }}
      animate={{
        y:0
      }}
      
      className='
      absolute -z-10 bg-primary-0 h-[1124px] w-[1166.06px] 
      rotate-[100deg] -translate-y-52'
      >

      </motion.div >
      
      <h1 className='font-semibold text-primary-0 pt-10 pb-5 px-2 text-xl'>
        ¿QUE ESTAS BUSCANDO?
      </h1>

      {/* INDICE */}
      <div className='px-0.5 text-white flex gap-4 flex-wrap'>
        <button className='bg-white text-primary-0 border border-primary-0 py-1 rounded-full w-44
        focus:bg-primary-0 focus:text-white duration-300 focus:border-white'>
          SUBLIMADORAS
        </button>

        <button className='bg-white text-primary-0 border border-primary-0 py-1 rounded-full w-44
        focus:bg-primary-0 focus:text-white duration-300 focus:border-white'>
          DTF
        </button>

        <button className='bg-white text-primary-0 border border-primary-0 py-1 rounded-full w-44
        focus:bg-primary-0 focus:text-white duration-300 focus:border-white'>
          ECOSOLVENTES
        </button>
      </div>

      <div className=' pt-10'>
        
        
      </div>

      </div>
  )
}

export default Catalogo
