import { BottomContactWidget } from './components/layout/BottomContactWidget'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { Seo } from './components/Seo'
import { About } from './components/sections/About'
import { Benefits } from './components/sections/Benefits'
import { Contact } from './components/sections/Contact'
import { FAQ } from './components/sections/FAQ'
import { Gallery } from './components/sections/Gallery'
import { Hero } from './components/sections/Hero'
import { HowItWorks } from './components/sections/HowItWorks'
import { Pricelist } from './components/sections/Pricelist'
import { Services } from './components/sections/Services'

function App() {
  return (
    <>
      <Seo />
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <Pricelist />
        <HowItWorks />
        <About />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BottomContactWidget />
    </>
  )
}

export default App
