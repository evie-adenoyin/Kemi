import React from 'react'
import { 
    Box,
    Text,
    Link,
    Heading,
    Center,
 } from '@chakra-ui/react'
 import ScrollIntoView from 'react-scroll-into-view'
 import Image from 'next/image'
 import case1 from '../public/Group 5360.svg'
 import case2 from '../public/Group 5361.svg'
 import case3 from '../public/Group 5362.svg'
 import borderblack from '../public/casestudyblack.svg'
import bordergray from '../public/casestudygray.svg'

const CaseStudy = () => {
  return (
    <div id='casestudy'>
        <Box pt={{sm:'10'}}>
            <Box mt={{sm:'20'}}>
                <Box>
                <Center><Text fontWeight={{sm:'semibold'}} fontSize={{sm:'4xl'}}>Case Study</Text></Center>
                <Box pos={'absolute'} right={'39.2rem'} display={'flex'} mt={'-1'}>
                    <Box ><Image src={borderblack} alt='black'/></Box>
                    <Box ml={{sm:'-55px'}}><Image src={bordergray} alt='black'/></Box>
                </Box>
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
