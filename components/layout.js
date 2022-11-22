import React from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from './navbar'

const Layout = ({children}) => {
  return (
    <Box  px={{sm:'50', base:'4'}} pb={'100px'}>
        <Navbar />
        {children}
    </Box>
  )
}

export default Layout
