import { Box, Text, Center, Link } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { FaLinkedin, FaDribbbleSquare, FaBehanceSquare } from 'react-icons/fa'
import borderblack from '../public/mediablack.svg'
import bordergray from '../public/mediagray.svg'
import dribble from '../public/dribble 1.svg'
import linkedIn from '../public/linkedin 1.svg'
import resume from '../public/Group 5456.svg'
import media from '../public/Group 5366.svg'

const Media = () => {
  return (
    <div id='media'>
        <Box  px={{sm:'50', base:'4'}} py={{sm:'10'}}>
            <Box mt={{sm:'20'}}>
                <Box pos={'relative'}>
                <Center><Text fontWeight={{sm:'semibold'}} fontSize={{sm:'3xl'}}><Image src={media} alt='media'/></Text></Center>
                {/* <Box pos={'absolute'} right={'36rem'} display={'flex'} mt={'-1'}>
                    <Box ><Image src={borderblack} alt='black'/></Box>
                    <Box ml={{sm:'-55px'}}><Image src={bordergray} alt='black'/></Box>
                </Box> */}
                </Box>
            </Box>
            <Box mt={{sm:'5'}}>
                <Box><Text fontWeight={{sm:'semibold'}} fontSize={{sm:'xl'}}>Find me on;</Text></Box>
            </Box>
            <Box display={{sm:'flex'}} my={{sm:'4'}} justifyContent={'space-between'}>
                <Box bg={'#7C7BF8'} p={'2px'} borderRadius={'8px'} w={'32%'} display={{sm:'flex'}} gap={5}>
                   <Box w={'40%'} borderRadius={'6px'} py={'4.5px'} px={'20px'} display={{sm:'flex'}} bg={'white'} gap={4} alignItems={'center'}>
                        <Text fontWeight={'semibold'}>LinkedIn</Text>
                        <Box><Image src={linkedIn} alt ='linkedIn' /></Box>
                   </Box>
                   <Link href='https://www.linkedin.com/in/nicole-eferigho-4024b91b2/' my={'3'} color={'white'}>Nicolelinkedin.view</Link>
                </Box>

                <Box bg={'#7C7BF8'} p={'2px'} borderRadius={'8px'} w={'32%'} display={{sm:'flex'}} gap={5}>
                   <Box w={'40%'} borderRadius={'6px'} py={'-3px'} px={'20px'} display={{sm:'flex'}} bg={'white'} gap={4} alignItems={'center'}>
                        <Text fontWeight={'semibold'}>Dribble</Text>
                        <Box><Image src={dribble} alt ='dribble' /></Box>
                   </Box>
                   <Link my={'3'} color={'white'}>Nicoledribbble.view</Link>
                </Box>

                <Box bg={'#7C7BF8'} p={'2px'} borderRadius={'8px'} w={'32%'} display={{sm:'flex'}} gap={5}>
                   <Box w={'40%'} borderRadius={'6px'} py={'7.5px'} px={'20px'} display={{sm:'flex'}} bg={'white'} gap={4} alignItems={'center'}>
                        <Text fontWeight={'semibold'}>Resume</Text>
                        <Box><Image src={resume} alt ='resume' /></Box>
                   </Box>
                   <Link href='https://us.docs.wps.com/l/sIM-ws7ci7ZuUnAY' my={'3'} color={'white'}>Nicoleresume.pdfview</Link>
                </Box>
            </Box>
        </Box>
    </div>
  )
}

export default Media