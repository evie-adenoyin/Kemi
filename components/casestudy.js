import React from 'react'
import { 
    Box,
    Text,
    Link,
    Heading,
    Center
 } from '@chakra-ui/react'
 import ScrollIntoView from 'react-scroll-into-view'
 import Image from 'next/image'
 import case1 from '../public/Group 5360.png'
 import case2 from '../public/Group 5361.svg'
 import case3 from '../public/Group 5362.svg'

const CaseStudy = () => {
  return (
    <div id='casestudy'>
        <Box>
            <Box mt={{sm:'20'}}>
                <Box>
                <Center><Text fontWeight={{sm:'semibold'}} fontSize={{sm:'4xl'}}>Case Study</Text></Center>
                <Center><Text fontSize={{sm:'xl'}} my={{sm:'5'}}>Below are screens from projects I designed using figma. <span>So</span> explore, get inspired and communicate you thought with me..</Text></Center>
                </Box>
            </Box>

            <Box px={{sm:'50', base:'4'}} mt={'5'}>
                <Box display={{sm:'flex'}} justifyContent={'center'} gap={4}>
                    <Box><Image src={case1} alt = 'image'/></Box>
                    <Box><Image src={case2} alt = 'image'/></Box>
                    <Box><Image src={case3} alt = 'image'/></Box>
                </Box>
            </Box>
        </Box>
    </div>
  )
}

export default CaseStudy
