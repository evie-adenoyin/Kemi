import React from 'react'
import { 
    Box,
    Text,
    Link,
    Heading
 } from '@chakra-ui/react'
 import Image from 'next/image'
 import Phone from '../public/Phone.svg'
 import { motion } from "framer-motion"
 import { FaMapMarker } from 'react-icons/fa'
 import ImageHeader from "../public/App mockup.svg"
 import marker from '../public/Vector.svg'

const Header = () => {
  return (
    <div  id='home'>
        <Box px={{sm:'65px', base:'4'}} display={{sm:'flex'}} justifyContent={'space-between'} mt={{sm:'15rem'}}>
            <Box mt={{sm:'14rem'}}>
                <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                    <Box pos={{sm:'relative'}}>
                        <Box pos={{sm:'absolute'}} zIndex={'1'} top={{sm:'-12'}} left={'-8'}>
                        <svg width="97" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle opacity="0.25" cx="50" cy="50" r="50" fill="#D1C4D7"/>
                        </svg>
                        </Box>
                        
                        <Heading fontSize={{sm:'45px'}} fontWeight={{sm:'semibold'}}>Hello There<span>!</span></Heading>
                        <Text fontWeight={'normal'} pl={{sm:'5'}} w={{sm:'73%'}} fontSize={{sm:'24px'}} my={{sm:'6'}}>My name is <span>Nicole Runo</span> and I am a <span>UI/UX </span> 
                         designer passionate about creating a well structured user experience, and business growth.</Text>
                    </Box>
                </motion.div>
                <Box>
                    <Box  display={{sm:'flex'}} pos={{sm:'relative'}} mt={'10'}>
                        <Box gap={3} borderRadius={{sm:'10px'}} bg={'#B7B7FF'} py={{sm:'10px'}} px={{sm:'24px'}} display={{sm:'flex'}} justifyContent={'space-between'} pos={{sm:'relative'}} zIndex={{sm:'2'}}>
                            <Box mt={{sm:'1'}}><Image src={marker} alt='market' /></Box>
                            <Box><Text>Lagos, Nigeria</Text></Box>
                        </Box>
                        <Box borderRadius={{sm:'10px'}} bg={'#F3F3F3'} py={{sm:'10px'}} pl={{sm:'30px'}} pr={{sm:'20px'}} display={{sm:'flex'}} pos={{sm:'relative'}} zIndex={{sm:'1'}} left={{sm:'-22px'}}>
                            <Box><Text color={'#00000066'}>Open to relocate</Text></Box>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Text fontWeight={'semibold'} my={'8'}>Ps; I’m excited to have you here..</Text>
                </Box>
            </Box>

            <Box pos={'relative'} mt={{sm:'8rem'}}>
               <Box>
                    <Box pos={'absolute'} zIndex={'1'}>
                    <motion.div animate={{ x: -140 }} transition={{ duration: 1 }}>
                        <svg width="149" height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.28" cx="74.5" cy="74.5" r="74.5" fill="#D9D9D9"/>
                        </svg>
                    </motion.div>
                    </Box>
                    <Box pr={{sm:'28'}} pos={'relative'} zIndex={'2'}> <Image src={ImageHeader} alt='logo' width={480}/></Box>
                    <Box pos={'absolute'} top={{sm:'16rem'}} right={{sm:'9rem'}} zIndex={'1'}>
                    <motion.div animate={{ x: 180 }} transition={{ duration: 1 }}>
                        <svg width="149" height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.28" cx="74.5" cy="74.5" r="74.5" fill="#B7B7FF"/>
                        </svg>
                    </motion.div>
                    </Box>
                
               </Box>
            </Box>
            
        </Box>
    </div>
  )
}

export default Header
