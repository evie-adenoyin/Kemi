import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import about from '../public/Group 5401.svg'
import nicole from '../public/Rectangle 130.svg'

const About = () => {
  return (
    <div id='about'>
        <Box px={{sm:'50', base:'4'}} py={{sm:'10'}}>
            <Box pt={{sm:'32'}} id='design'>
            <Center><Text fontWeight={{sm:'semibold'}} fontSize={{sm:'4xl'}}><Image src={about} alt='media'/></Text></Center>
            </Box>
        <Box>
            <Box display={{sm:'flex'}} justifyContent={'center'}>
                <Box my={'16'}>
                <Box display={{sm:'flex'}} justifyContent={'center'}>
                <Image src={nicole} alt="nicole "/>
                </Box>
                <Box textAlign={'center'}>
                <Text fontWeight={'bold'} my={'5'}>Nicole Runo Eferigho</Text>
                <Text mt={'-4'}>Product Designer(UI/UX)/Content writer/Strategic Thinker </Text>
                </Box>
                </Box>
            </Box>

            <Box mt={'-10'} mb={'20'} px={{sm:'10'}}>
                <Text>
                I started my carrier as a UI/UX designer after completing the product design course at a tech school(Univelcity) in Lagos, Nigeria. I am a product designer with a love for powerful and elegant designs. I am always open to opportunities to positively impact people and the design world on a broad scale.I design both web and mobile applications for existing and new businesses. I also provide user research, user testing, and I carry out competitive analysis for new business. I am a strong and passionate creative thinker, a team worker, teacher and a learner. 
                </Text>
                <Text  mt={'6'}>
                Are you looking to achieve your desired product or grow your user journey in few clicks? then look no further, because I am definitely what your business needs. From product research to whiteboarding and brainstorming ideas with engineers, creating user journey map to low fidelity wire framing. I have a 3 years’ experience 
                as a UX researcher and UI designer. With my skills you wouldn’t need to break a bank to hire a content writer and strategic thinker. 
                </Text>
                <Text  mt={'6'}>
                My biggest flex is making a user journey as easy and quick as can be (make a payment in less than three clicks sounds great right?), Designing a product that satisfies the eyes and mind of a user. I for one enjoy product research, creating personas, stackholder meeting, mapping and assembling product design. 
                </Text>
                <Text  mt={'6'}>
                Feel free to send me a message for collaboration, freelance or full time.☺️
                </Text>

            </Box>
        </Box>
        </Box>
    </div>
  )
}

export default About