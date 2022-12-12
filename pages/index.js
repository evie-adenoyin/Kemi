import {
  Box,
  Text
} from '@chakra-ui/react'
import Header from '../components/header'
import Design from '../components/design'
import CaseStudy from '../components/casestudy'
import Footer from '../components/footer'
import Media from '../components/media'
import About from '../components/about'


export default function Home() {
  return (
    <div>
      <Box>
        <Header />
        <Design />
        <CaseStudy />
        <About />
        <Media />
        <Footer />
      </Box>
    </div>
  )
}
