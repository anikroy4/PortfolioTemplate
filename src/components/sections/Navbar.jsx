import React from 'react'
import Container from '../layers/Container'
import Image from '../layers/Image'
import List from '../layers/List'
import ListItem from '../layers/ListItem'

const Navbar = () => {
  return (
    <nav className='bg-[#F9FAFC]'>
      <Container className="flex justify-between items-center bg-[#F9FAFC] pt-[54px]">
        <div className='ml-4'>
              {/* <img src="/William.std.png" alt="" /> */}
              <Image  src="/William.std.png" alt="William.std.png"/>
        </div>
        <div className='mr-[9px]'>
            <List className='flex gap-x-[46px] font-Mon'>
              <ListItem className="text-[#838383] font-bold text-base  hover:text-[#8671FC] leading-normal " ListInnerItem="About Us"/>
              <ListItem className="text-[#838383] font-bold text-base  hover:text-[#8671FC] leading-normal" ListInnerItem="Services"/>
              <ListItem className="text-[#838383] font-bold text-base  hover:text-[#8671FC] leading-normal" ListInnerItem="Portfolio"/>
              <ListItem className="text-[#838383] font-bold text-base  hover:text-[#8671FC] leading-normal " ListInnerItem="Contact Us"/>
            </List>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar