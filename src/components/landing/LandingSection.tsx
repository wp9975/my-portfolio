import React from 'react'
import BgAnimating from './background/BgAnimating'
import LandingContent from './subcomponents/LandingContent'
import { AnimatePresence } from 'framer-motion'

type Props = {}

const LandingSection = (props: Props) => {
  return (
    <div className='z-10 w-full h-screen overflow-x-hidden'>
    
      <AnimatePresence>
      <div className='flex justify-center w-full'>
        <LandingContent/>
        </div>
        </AnimatePresence>
        <BgAnimating/>
        
    </div>
  )
}

export default LandingSection