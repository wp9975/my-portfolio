import React from 'react'
import BgAnimating from './background/BgAnimating'
import LandingContent from './subcomponents/LandingContent'

type Props = {}

const LandingSection = (props: Props) => {
  return (
    <div className='z-10 h-screen'>
        <div className='flex justify-center w-full'><LandingContent/></div>
        
        <BgAnimating/>
        
    </div>
  )
}

export default LandingSection