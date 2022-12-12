import React from 'react'
import { 
    Box,
    Text,
    Link
 } from '@chakra-ui/react'
 import ScrollIntoView from 'react-scroll-into-view'
 import emoji from '../public/image 121.svg'
 import Image from 'next/image'
 

const Navbar = () => {
  return (
    <div>
        <Box pos={'fixed'} w={'100%'} top={'0'} bg={'white'} zIndex={5}>
        <Box px={{sm:'50', base:'4'}} display={{sm:'flex'}} justifyContent={'space-between'} py={{sm:'6'}}>
            <Box mt={{sm:'3'}}>
            <svg width="45" height="30" viewBox="0 0 45 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="15" fill="black"/>
                <circle cx="30" cy="15" r="15" fill="#7C7BF8"/>
            </svg>
            </Box>
            <Box mt={{sm:'3'}}>
                <Box display={'flex'}>
                    <ScrollIntoView selector="#home"><Link mx={'8'} fontWeight={'semibold'} fontSize={{sm:'large'}}>Home</Link></ScrollIntoView>
                    <ScrollIntoView smooth={true} selector="#design"><Link mx={'8'} fontWeight={'semibold'} fontSize={{sm:'large'}}>Design</Link></ScrollIntoView>
                    <ScrollIntoView selector="#casestudy"><Link mx={'8'} fontWeight={'semibold'} fontSize={{sm:'large'}}>Case Study</Link></ScrollIntoView>
                    <ScrollIntoView selector="#about"><Link mx={'8'} fontWeight={'semibold'} fontSize={{sm:'large'}}>About</Link></ScrollIntoView>
                    <ScrollIntoView selector="#media"><Link mx={'8'} fontWeight={'semibold'} fontSize={{sm:'large'}}>Media</Link></ScrollIntoView>
                </Box>
            </Box>
            <Box display={{sm:'flex'}} bg={'#7C7BF8'} py={'3'} color={'white'} px={{sm:'6'}} borderRadius={'8px'} gap={3}>
                <Link fontSize={{sm:'sm'}} >Say Hello!</Link>
                <Image src={emoji} alt='emoji'/>
            </Box>
        </Box>
        </Box>
    </div>
  )
}

export default Navbar
