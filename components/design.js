import React from 'react'
import { 
    Box,
    Text,
    Link,
    Heading,
    Center
 } from '@chakra-ui/react'
 import ScrollIntoView from 'react-scroll-into-view'

const Design = () => {
  return (
    <div id='design'>
       <Box my={{sm:'3'}}>

        <Box>
        <Center><Text fontWeight={{sm:'semibold'}} fontSize={{sm:'4xl'}}>DESIGN</Text></Center>
        <Center><Text fontSize={{sm:'md'}} my={{sm:'5'}}>Below are screens from projects i designed using figma. So explore, 
        get inspired and communicate you thought with me..</Text></Center>
        </Box>

        <Box mb={'200px'}>
            <Box display={{sm:'flex'}} justifyContent={'center'} >
                <Box mx={{sm:'30px'}}  px={{sm:'40px'}} py={{sm:'8px'}} borderRadius={{sm:'5px'}} bg={'#F9F9F9'} border={'1px'} borderColor={'#DCE5E8'}><Text>Login page</Text></Box>
                <Box mx={{sm:'30px'}}  px={{sm:'40px'}} py={{sm:'8px'}} borderRadius={{sm:'5px'}} bg={'#F9F9F9'} border={'1px'} borderColor={'#DCE5E8'}><Text>Sign up page</Text></Box>
                <Box mx={{sm:'30px'}}  px={{sm:'40px'}} py={{sm:'8px'}} borderRadius={{sm:'5px'}} bg={'#F9F9F9'} border={'1px'} borderColor={'#DCE5E8'}><Text>Landing page</Text></Box>
                <Box mx={{sm:'30px'}}  px={{sm:'40px'}} py={{sm:'8px'}} borderRadius={{sm:'5px'}} bg={'#F9F9F9'} border={'1px'} borderColor={'#DCE5E8'}><Text>Dashboards</Text></Box>
                <Box mx={{sm:'30px'}}  px={{sm:'40px'}} py={{sm:'8px'}} borderRadius={{sm:'5px'}} bg={'#F9F9F9'} border={'1px'} borderColor={'#DCE5E8'}><Text>Mobile UI</Text></Box>
            </Box>
            <Box display={{sm:'flex'}} justifyContent={'center'} my={{sm:'30px'}}>
                <Box mx={{sm:'30px'}}  px={{sm:'40px'}} py={{sm:'8px'}} borderRadius={{sm:'5px'}} bg={'#F9F9F9'} border={'1px'} borderColor={'#DCE5E8'}><Text>Transaction table</Text></Box>
                <Box mx={{sm:'30px'}}  px={{sm:'40px'}} py={{sm:'8px'}} borderRadius={{sm:'5px'}} bg={'#F9F9F9'} border={'1px'} borderColor={'#DCE5E8'}><Text>Human resource</Text></Box>
                <Box mx={{sm:'30px'}}  px={{sm:'40px'}} py={{sm:'8px'}} borderRadius={{sm:'5px'}} bg={'#F9F9F9'} border={'1px'} borderColor={'#DCE5E8'}><Text>Wallet</Text></Box>
                <Box mx={{sm:'30px'}}  px={{sm:'40px'}} py={{sm:'8px'}} borderRadius={{sm:'5px'}} bg={'#F9F9F9'} border={'1px'} borderColor={'#DCE5E8'}><Text>E-commerce</Text></Box>
                {/* <Box mx={{sm:'30px'}}  px={{sm:'40px'}} py={{sm:'8px'}} borderRadius={{sm:'5px'}} bg={'#F9F9F9'} border={'1px'} borderColor={'#DCE5E8'}><Text>Mobile UI</Text></Box> */}
            </Box>
            <Box display={{sm:'flex'}} justifyContent={'center'}>
                <Box mx={{sm:'30px'}}  px={{sm:'40px'}} py={{sm:'8px'}} borderRadius={{sm:'5px'}} bg={'#F9F9F9'} border={'1px'} borderColor={'#DCE5E8'}><Text>Payroll</Text></Box>
                <Box mx={{sm:'30px'}}  px={{sm:'40px'}} py={{sm:'8px'}} borderRadius={{sm:'5px'}} bg={'#F9F9F9'} border={'1px'} borderColor={'#DCE5E8'}><Text>Time Attendance</Text></Box>
            </Box>
        </Box>
       </Box>

       <Box display={'flex'} justifyContent={"center"}>
       <ScrollIntoView selector="#home" ><Link borderRadius={'10px'} mb={'50px'} mt={'100px'} mx={'8'} fontWeight={'normal'} bg={'#7C7BF8'} p={'10px'}>Click Test Scroll effect back to top!</Link></ScrollIntoView>
       </Box>
    </div>
  )
}

export default Design
