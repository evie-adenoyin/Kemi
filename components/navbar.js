import React from 'react'
import { 
    Box,
    Text,
    Link
 } from '@chakra-ui/react'
 import ScrollIntoView from 'react-scroll-into-view'
 

const Navbar = () => {
  return (
    <div id='home'>
        <Box px={{sm:'50', base:'4'}} top={'-10'} display={{sm:'flex'}} justifyContent={'space-between'} py={{sm:'10'}}>
            <Box>
            <svg width="45" height="30" viewBox="0 0 45 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="15" fill="black"/>
                <circle cx="30" cy="15" r="15" fill="#7C7BF8"/>
            </svg>
            </Box>
            <Box>
                <Box display={'flex'}>
                    <ScrollIntoView selector="#home"><Link mx={'8'} fontWeight={'normal'}>Home</Link></ScrollIntoView>
                    <ScrollIntoView smooth={true} selector="#design"><Link mx={'8'} fontWeight={'normal'}>Design</Link></ScrollIntoView>
                    <ScrollIntoView selector="#casestudy"><Link mx={'8'} fontWeight={'normal'}>Case Study</Link></ScrollIntoView>
                    <ScrollIntoView selector="#about"><Link mx={'8'} fontWeight={'normal'}>About</Link></ScrollIntoView>
                    <ScrollIntoView selector="#media"><Link mx={'8'} fontWeight={'normal'}>Media</Link></ScrollIntoView>
                </Box>
            </Box>
            <Box>Say Hello</Box>
        </Box>
    </div>
  )
}

export default Navbar
