import AboutMe from '@/components/sections/About'
import HeroSection from '@/components/sections/HeroSection'
import Portfolio from '@/components/sections/Portfolio'
import SkillsSection from '@/components/sections/Skills'
import PortfolioStats from '@/components/sections/StatsSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection/>
      {/* <PortfolioStats/> */}
      <Portfolio/>
      <SkillsSection/>
      <AboutMe/>
    </div>
  )
}

export default page