import {
  Box,
  Text
} from '@chakra-ui/react'
import Header from '../components/header'
import Design from '../components/design'
import CaseStudy from '../components/casestudy'
import Footer from '../components/footer'
import Media from '../components/media'

export default function Home() {
  return (
    <div>
      <Box>
        <Header />
        <Design />
        <CaseStudy />
        <Media />
        <Footer />
      </Box>
    </div>
  )
}
