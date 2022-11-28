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
 import sunglo from '../public/Screenshot (190) 1.svg'
 import gavasoft from '../public/Screenshot (192) 1.svg'
 import magenta from '../public/Screenshot (193) 1.svg'
 import sunglosignup from '../public/Screenshot (194) 1.svg'
 import sunglosuperadmin from '../public/Screenshot (201) 4.svg'
 import gavasoftemployeedashboard from '../public/Screenshot (206) 1.svg'
 import mobileschoolapp from '../public/Screenshot (198) 1.svg'
 import mobileecommerce from '../public/Screenshot (199) 1.svg'
 import financialtech from '../public/Screenshot (88) 1.svg'
 import sungloerrorpage from '../public/Screenshot (197) 1.svg'
 import magentaonboarding from '../public/Screenshot (196) 1.svg'
 import dashboard from '../public/Screenshot (201) 1.svg'
 import magentasuperadmin from '../public/Screenshot (223) 1.svg'
 import gavasoftemployeelist from '../public/Screenshot (220) 1.svg'
 import gavasoftperformancedashboard from '../public/Screenshot (219) 1.svg'
 import gavasoflandingpage from '../public/Screenshot (226) 1.svg'
 import ecommerce1 from '../public/Screenshot (228) 1.svg'
 import ecommerce2 from '../public/Screenshot (229) 1.svg'
 import ecommerce3 from '../public/IMG_0199 1.svg'
 import saly from '../public/Saly-5.svg'

const Design = () => {
  return (
    <div id=''>
        <Box pt={{sm:'20'}} id='design'>
       <Box my={{sm:'3'}} mt={{sm:'10'}}>

        <Box>
        <Center><Text fontWeight={{sm:'semibold'}} fontSize={{sm:'4xl'}}>DESIGN</Text></Center>
        <Center><Text fontSize={{sm:'xl'}} my={{sm:'5'}}>Below are screens from projects i designed using figma. So explore, 
        get inspired and communicate you thought with me..</Text></Center>
        </Box>

        <Box mb={'80px'}>
            <Box display={{sm:'flex'}} justifyContent={'center'} gap={10}>
                <Box px={{sm:'45px'}} py={{sm:'11px'}} borderRadius={{sm:'8px'}} bg={'#F9F9F9'} border={'1px'} borderColor={'#DCE5E8'}><Text fontSize={{sm:'xl'}}>Login page</Text></Box>
                <Box px={{sm:'45px'}} py={{sm:'11px'}} borderRadius={{sm:'8px'}} bg={'#F9F9F9'} border={'1px'} borderColor={'#DCE5E8'}><Text fontSize={{sm:'xl'}}>Sign up page</Text></Box>
                <Box px={{sm:'45px'}} py={{sm:'11px'}} borderRadius={{sm:'8px'}} bg={'#F9F9F9'} border={'1px'} borderColor={'#DCE5E8'}><Text fontSize={{sm:'xl'}}>Landing page</Text></Box>
                <Box px={{sm:'45px'}} py={{sm:'11px'}} borderRadius={{sm:'8px'}} bg={'#F9F9F9'} border={'1px'} borderColor={'#DCE5E8'}><Text fontSize={{sm:'xl'}}>Dashboards</Text></Box>
                <Box px={{sm:'45px'}} py={{sm:'11px'}} borderRadius={{sm:'8px'}} bg={'#F9F9F9'} border={'1px'} borderColor={'#DCE5E8'}><Text fontSize={{sm:'xl'}}>Mobile UI</Text></Box>
            </Box>
            <Box display={{sm:'flex'}} justifyContent={'center'} gap={10} my={{sm:'30px'}}>
                <Box px={{sm:'45px'}} py={{sm:'11px'}} borderRadius={{sm:'8px'}} bg={'#F9F9F9'} border={'1px'} borderColor={'#DCE5E8'}><Text fontSize={{sm:'xl'}}>Transaction table</Text></Box>
                <Box px={{sm:'45px'}} py={{sm:'11px'}} borderRadius={{sm:'8px'}} bg={'#F9F9F9'} border={'1px'} borderColor={'#DCE5E8'}><Text fontSize={{sm:'xl'}}>Human resource</Text></Box>
                <Box px={{sm:'45px'}} py={{sm:'11px'}} borderRadius={{sm:'8px'}} bg={'#F9F9F9'} border={'1px'} borderColor={'#DCE5E8'}><Text fontSize={{sm:'xl'}}>Wallet</Text></Box>
                <Box px={{sm:'45px'}} py={{sm:'11px'}} borderRadius={{sm:'8px'}} bg={'#F9F9F9'} border={'1px'} borderColor={'#DCE5E8'}><Text fontSize={{sm:'xl'}}>E-commerce</Text></Box>
                {/* <Box px={{sm:'45px'}} py={{sm:'11px'}} borderRadius={{sm:'8px'}} bg={'#F9F9F9'} border={'1px'} borderColor={'#DCE5E8'}><Text fontSize={{sm:'xl'}}>Mobile UI</Text></Box> */}
            </Box>
            <Box display={{sm:'flex'}} justifyContent={'center'} gap={10}>
                <Box px={{sm:'45px'}} py={{sm:'11px'}} borderRadius={{sm:'8px'}} bg={'#F9F9F9'} border={'1px'} borderColor={'#DCE5E8'}><Text fontSize={{sm:'xl'}}>Payroll</Text></Box>
                <Box px={{sm:'45px'}} py={{sm:'11px'}} borderRadius={{sm:'8px'}} bg={'#F9F9F9'} border={'1px'} borderColor={'#DCE5E8'}><Text fontSize={{sm:'xl'}}>Time Attendance</Text></Box>
            </Box>
        </Box>
       </Box>


        <Box className='designgroup' px={{sm:'54', base:'4'}} py={'0.5'}>

            <Box display={{sm:'flex'}} gap={10} my={{sm:'8'}}>
                <Box>
                    <Box><Image src={sunglo} alt='sunglo' /></Box>
                    <Box my={{sm:'3'}}><Text fontSize={{sm:'sm'}} fontWeight={{sm:'semibold'}}>Sunglo Sign in page, <span>April - August 2022</span></Text></Box>
                </Box>
                <Box>
                    <Box><Image src={gavasoft} alt='sunglo' /></Box>
                    <Box my={{sm:'3'}}><Text fontSize={{sm:'sm'}} fontWeight={{sm:'semibold'}}>Gavasoft Sign in page, <span>February 2021</span></Text></Box>
                </Box> 
            </Box>


            <Box display={{sm:'flex'}} gap={10} my={{sm:'8'}}>
                <Box>
                    <Box><Image src={magenta} alt='sunglo' /></Box>
                    <Box my={{sm:'3'}}><Text fontSize={{sm:'sm'}} fontWeight={{sm:'semibold'}}>Magenta Sign in page, <span>October 2022</span></Text></Box>
                </Box>
                <Box>
                    <Box><Image src={sunglosignup} alt='sunglo' /></Box>
                    <Box my={{sm:'3'}}><Text fontSize={{sm:'sm'}} fontWeight={{sm:'semibold'}}>Sunglo Sign up page, <span>April - August 2022</span></Text></Box>
                </Box> 
            </Box>


            <Box display={{sm:'flex'}} gap={10} my={{sm:'8'}}>
                <Box>
                    <Box><Image src={sunglosuperadmin} alt='sunglo' /></Box>
                    <Box my={{sm:'3'}}><Text fontSize={{sm:'sm'}} fontWeight={{sm:'semibold'}}>Sunglo Super admin dashboard, <span> April - August 2022</span></Text></Box>
                </Box>
                <Box>
                    <Box><Image src={gavasoftemployeedashboard} alt='sunglo' /></Box>
                    <Box my={{sm:'3'}}><Text fontSize={{sm:'sm'}} fontWeight={{sm:'semibold'}}>Gavasoft Employee dashboard,  <span>February 2021</span></Text></Box>
                </Box> 
            </Box>


            <Box display={{sm:'flex'}} gap={10} my={{sm:'8'}}>
                <Box>
                    <Box><Image src={mobileschoolapp} alt='sunglo' /></Box>
                    <Box my={{sm:'3'}}><Text fontSize={{sm:'sm'}} fontWeight={{sm:'semibold'}}>Mobile school app (track performance)</Text></Box>
                </Box>
                <Box>
                    <Box><Image src={mobileecommerce} alt='sunglo' /></Box>
                    <Box my={{sm:'3'}}><Text fontSize={{sm:'sm'}} fontWeight={{sm:'semibold'}}>Mobile E-commerce</Text></Box>
                </Box> 
            </Box>


            <Box display={{sm:'flex'}} justifyContent={'center'} my={{sm:'8'}}>
                <Box>
                    <Box><Image src={financialtech} alt='sunglo' /></Box>
                    <Box my={{sm:'3'}} textAlign={'center'}><Text fontSize={{sm:'sm'}} fontWeight={{sm:'semibold'}}>Financial Technology mobile app</Text></Box>
                </Box> 
            </Box>

            <Box display={{sm:'flex'}} gap={10} my={{sm:'8'}}>
                <Box>
                    <Box><Image src={sungloerrorpage} alt='sunglo' /></Box>
                    <Box my={{sm:'3'}}><Text fontSize={{sm:'sm'}} fontWeight={{sm:'semibold'}}>Sunglo Error page,  <span> April - August 2022</span></Text></Box>
                </Box>
                <Box>
                    <Box><Image src={magentaonboarding} alt='sunglo' /></Box>
                    <Box my={{sm:'3'}}><Text fontSize={{sm:'sm'}} fontWeight={{sm:'semibold'}}>Magenta Onboarding page,  <span>October 2022</span></Text></Box>
                </Box> 
            </Box>
           

            <Box display={{sm:'flex'}} gap={10} my={{sm:'8'}}>
                <Box>
                    <Box><Image src={dashboard} alt='sunglo' /></Box>
                    <Box my={{sm:'3'}}><Text fontSize={{sm:'sm'}} fontWeight={{sm:'semibold'}}>Dashboard UI</Text></Box>
                </Box>
                <Box>
                    <Box><Image src={sunglosuperadmin} alt='sunglo' /></Box>
                    <Box my={{sm:'3'}}><Text fontSize={{sm:'sm'}} fontWeight={{sm:'semibold'}}>Sunglo Super admin dashboard, <span> April - August 2022</span></Text></Box>
                </Box>
            </Box>

            <Box display={{sm:'flex'}} gap={10} my={{sm:'8'}}>
                <Box>
                    <Box><Image src={magentasuperadmin} alt='sunglo' /></Box>
                    <Box my={{sm:'3'}}><Text fontSize={{sm:'sm'}} fontWeight={{sm:'semibold'}}>Magenta super admin dashboard,  <span> October 2022</span></Text></Box>
                </Box>
                <Box>
                    <Box><Image src={gavasoftemployeelist} alt='sunglo' /></Box>
                    <Box my={{sm:'3'}}><Text fontSize={{sm:'sm'}} fontWeight={{sm:'semibold'}}>Gavasoft Employee list,  <span>February 2021</span></Text></Box>
                </Box> 
            </Box>


            <Box display={{sm:'flex'}} gap={10} my={{sm:'8'}}>
                <Box>
                    <Box><Image src={gavasoftperformancedashboard} alt='sunglo' /></Box>
                    <Box my={{sm:'3'}}><Text fontSize={{sm:'sm'}} fontWeight={{sm:'semibold'}}>Gavasoft Performance dashboard,  <span>February 2021</span></Text></Box>
                </Box>
                <Box>
                    <Box><Image src={gavasoflandingpage} alt='sunglo' /></Box>
                    <Box my={{sm:'3'}}><Text fontSize={{sm:'sm'}} fontWeight={{sm:'semibold'}}>Gavasoft Landing Page,  <span>February 2021</span></Text></Box>
                </Box> 
            </Box>


            <Box display={{sm:'flex'}} gap={10} my={{sm:'8'}}>
                <Box>
                    <Box><Image src={ecommerce3} alt='sunglo' /></Box>
                    <Box my={{sm:'3'}}><Text fontSize={{sm:'sm'}} fontWeight={{sm:'semibold'}}>E-commerce UI</Text></Box>
                </Box>
                <Box>
                   <Box>
                    <Box><Image src={ecommerce1} alt='sunglo' /></Box>
                    <Box my={{sm:'3'}}><Text fontSize={{sm:'sm'}} fontWeight={{sm:'semibold'}}>E-commerce UI</Text></Box>
                   </Box>
                   <Box my={{sm:'8'}}>
                    <Box><Image src={ecommerce2} alt='sunglo' /></Box>
                    <Box my={{sm:'3'}}><Text fontSize={{sm:'sm'}} fontWeight={{sm:'semibold'}}>Resturant E-commerce UI</Text></Box>
                   </Box>
                   <Box display={{sm:'flex'}} justifyContent={'end'} >
                    <Box bg={'#7C7BF8'} display={'flex'} h={'99px'} mt={'5'} borderRadius={'8px'} justifyContent={'center'}>
                        <Box pl={'4'} fontWeight={'normal'} mt={'4'}>
                            <Text color={'white'}>More </Text>
                            <Text color={'white'}>Designs</Text>
                            <Text color={'white'}>Coming soon</Text>
                        </Box>
                        <Box mt={'-10'}>
                            <Image src={saly} alt='saly' width={140}/>
                        </Box>
                    </Box>
                   </Box>
                </Box> 
            </Box>
           

        </Box>
        </Box>

       {/* <Box display={'flex'} justifyContent={"center"}>
       <ScrollIntoView smooth={true} selector="#home" ><Link borderRadius={'10px'} mb={'50px'} mt={'100px'} mx={'8'} fontWeight={'normal'} bg={'#7C7BF8'} p={'10px'}>Click Test Scroll effect back to top!</Link></ScrollIntoView>
       </Box> */}
    </div>
  )
}

export default Design
