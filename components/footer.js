import { Box, Link, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import footerlogo from '../public/Group 1.svg'
import ScrollIntoView from 'react-scroll-into-view'
import saly from '../public/Saly-22.svg'
import line from '../public/Line 1.svg'

const textdecoration = {textDecoration:'none'}

const Footer = () => {
  return (
    <div id='footer'>
        <Box bg={'red'}>
        <Box bg={'#7C7BF8'}   mb={{sm:'-110px'}} mt={{sm:'-0.02px'}}>
            <Box px={{sm:'50', base:'4'}} py={{sm:'10'}}>
               <Box>
                    <Box display={{sm:'flex'}} justifyContent={'space-between'}>
                        <Image src={footerlogo} alt='logo' />
                        <Box><Link fontSize={{sm:'sm'}} bg={'white'} py={'3'} color={'gray'} px={{sm:'6'}} borderRadius={'8px'}>Say Hello! &#128526;</Link></Box>
                    </Box>

                    <Box my={{sm:'10'}} display={{sm:'flex'}} justifyContent={'space-between'}>
                        <Box>
                            <Text color={'#5F08CD'} fontWeight={'semibold'} fontSize={{sm:'xl'}}>Contact Me</Text>
                            <Box color={'white'} lineHeight={'10'} mt={{sm:'5'}}>
                            <Text>08160304426</Text>
                            <Text>nicoleeferigho@gmail.com</Text>
                            </Box>
                        </Box>
                        <Box>
                        <Text color={'#5F08CD'} fontWeight={'semibold'} fontSize={{sm:'xl'}}>Portfolio Content</Text>
                            <Box >
                            <Box color={'white'} lineHeight={'10'} mt={{sm:'5'}}>
                                <ScrollIntoView selector="#home"><Link _hover={textdecoration}>Home</Link></ScrollIntoView>
                                <ScrollIntoView smooth={true} selector="#design"><Link _hover={textdecoration}>Design</Link></ScrollIntoView>
                                <ScrollIntoView selector="#casestudy"><Link _hover={textdecoration}>Case Study</Link></ScrollIntoView>
                                <><Link _hover={textdecoration}>About</Link></>
                                <ScrollIntoView selector="#media"><Link _hover={textdecoration}>Media</Link></ScrollIntoView>
                            </Box>
                            </Box>
                        </Box>
                        <Box>
                        <Text color={'#5F08CD'} fontWeight={'semibold'} fontSize={{sm:'xl'}}>Case Study</Text>
                            <Box >
                            <Box color={'white'} lineHeight={'10'} mt={{sm:'5'}}>
                                <ScrollIntoView selector="#desing"><Link _hover={textdecoration}>Gavasoft</Link></ScrollIntoView>
                                <ScrollIntoView smooth={true} selector="#design"><Link _hover={textdecoration}>Sunglo</Link></ScrollIntoView>
                                <ScrollIntoView selector="#desing"><Link _hover={textdecoration}>Magenta</Link></ScrollIntoView>
                                {/* <ScrollIntoView selector="#about"><Link _hover={textdecoration}>About</Link></ScrollIntoView>
                                <ScrollIntoView selector="#media"><Link _hover={textdecoration}>Media</Link></ScrollIntoView> */}
                            </Box>
                            </Box>
                        </Box>
                        <Box>
                        <Text color={'#5F08CD'} fontWeight={'semibold'} fontSize={{sm:'xl'}}>Soft Skill</Text>
                            <Box >
                            <Box color={'white'} lineHeight={'10'} mt={{sm:'5'}}>
                                <Text>Communication</Text>
                               <Text>Team player</Text>
                                <Text>Strategic thinker</Text>
                                <Text>Content writer</Text>
                                {/* <ScrollIntoView selector="#about"><Link _hover={textdecoration}>About</Link></ScrollIntoView>
                                <ScrollIntoView selector="#media"><Link _hover={textdecoration}>Media</Link></ScrollIntoView> */}
                            </Box>
                            </Box>
                        </Box>
                        
                        <Box mr={{sm:'-10'}} pt={{sm:'8'}}>
                                <Box pos={'relative'}><Image src={saly} alt="saly" /></Box>
                        </Box>
                    </Box>
                    
                    <Box display={{sm:'flex'}} justifyContent={'space-between'} mt={{sm:'-71px'}}>
                        <Box>
                            <Image src={line} alt='line' />
                        </Box>
                        <Box w={'15%'} textAlign={'center'} color={'white'}>
                            <Text mt={{sm:'-3'}}>Portfolio  2022</Text>
                        </Box>
                        <Box>
                            <Image src={line} alt='line' />
                        </Box>
                    </Box>
               </Box>
            </Box>
        </Box>
        </Box>
    </div>
  )
}

export default Footer