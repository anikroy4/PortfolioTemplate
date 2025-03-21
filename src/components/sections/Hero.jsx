import React from 'react'
import Container from '../layers/Container'
import Image from '../layers/Image'

const Hero = () => {
  return (
    <section className='bg-[#F9FAFC]'>
        <Container className="flex justify-between pt-[74px]">
            <div className="left">
                <h3 className='text-[#222] text-lg font-bold leading-[26px]
                tracking-[2px] font-Way uppercase mt-[103px]'>Hello i’m <span className='text-[#F05D7B]'>Visual Designer</span></h3>
                <h2 className='w-[471px] text-[#222] text-7xl font-bold font-Way leading-[72px] mt-5 mb-[30px]'>
                    William Andersons
                </h2>
                <p className='w-[471px] font-Way font-normal text-[#838383] text-base leading-[26px] tracking-[0.2px] mb-[50px]'>
                    My ultimate motto is to fulfill the demand of the buyers by making them satisfied with proper file delivery in time and without delay.
                </p>
            </div>
            <div className="right">
                <Image src="/Pink_Oval.png"/>
            </div>
        </Container>
    </section>
  )
}

export default Hero