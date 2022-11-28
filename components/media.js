import { Box, Text, Center } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { FaLinkedin, FaDribbbleSquare, FaBehanceSquare } from 'react-icons/fa'
import borderblack from '../public/mediablack.svg'
import bordergray from '../public/mediagray.svg'

const Media = () => {
  return (
    <div id='media'>
        <Box  px={{sm:'50', base:'4'}} py={{sm:'10'}}>
            <Box mt={{sm:'20'}}>
                <Box pos={'relative'}>
                <Center><Text fontWeight={{sm:'semibold'}} fontSize={{sm:'3xl'}}>Media</Text></Center>
                <Box pos={'absolute'} right={'36rem'} display={'flex'} mt={'-1'}>
                    <Box ><Image src={borderblack} alt='black'/></Box>
                    <Box ml={{sm:'-55px'}}><Image src={bordergray} alt='black'/></Box>
                </Box>
                </Box>
            </Box>
            <Box mt={{sm:'5'}}>
                <Box><Text fontWeight={{sm:'semibold'}} fontSize={{sm:'xl'}}>Find me on;</Text></Box>
            </Box>
            <Box display={{sm:'flex'}} my={{sm:'4'}} justifyContent={'space-between'}>
                <Box bg={'#7C7BF8'} p={'2px'} borderRadius={'8px'} w={'32%'}>
                   <Box w={'40%'} borderRadius={'6px'} py={'11px'} px={'20px'} display={{sm:'flex'}} bg={'white'} gap={4} alignItems={'center'}>
                        <Text fontWeight={'semibold'}>LinkedIn</Text>
                        <Box><FaLinkedin color='blue' size={'25px'}/></Box>
                   </Box>
                </Box>

                <Box bg={'#7C7BF8'} p={'2px'} borderRadius={'8px'} w={'32%'}>
                   <Box w={'40%'} borderRadius={'6px'} py={'11px'} px={'20px'} display={{sm:'flex'}} bg={'white'} gap={4} alignItems={'center'}>
                        <Text fontWeight={'semibold'}>Dribble</Text>
                        <Box><FaDribbbleSquare color='pink' size={'25px'}/></Box>
                   </Box>
                </Box>

                <Box bg={'#7C7BF8'} p={'2px'} borderRadius={'8px'} w={'32%'}>
                   <Box w={'40%'} borderRadius={'6px'} py={'11px'} px={'20px'} display={{sm:'flex'}} bg={'white'} gap={4} alignItems={'center'}>
                        <Text fontWeight={'semibold'}>Behance</Text>
                        <Box><FaBehanceSquare color='#7C7BF8' size={'25px'}/></Box>
                   </Box>
                </Box>
            </Box>
        </Box>
    </div>
  )
}

export default Media