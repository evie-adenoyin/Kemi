import {
  Box,
  Text
} from '@chakra-ui/react'
import Header from '../components/header'
import Design from '../components/design'
import CaseStudy from '../components/casestudy'

export default function Home() {
  return (
    <div>
      <Box>
        <Header />
        <Design />
        <CaseStudy />
      </Box>
    </div>
  )
}
