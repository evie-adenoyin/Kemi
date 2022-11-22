import {
  Box,
  Text
} from '@chakra-ui/react'
import Header from '../components/header'
import Design from '../components/design'

export default function Home() {
  return (
    <div>
      <Box>
        <Header />
        <Design />
      </Box>
    </div>
  )
}
