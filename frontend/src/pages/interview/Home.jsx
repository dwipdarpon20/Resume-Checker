import Hero from "../../components/Hero"
import Navbar from "../../components/Navbar"
import ReportBuilder from "../../components/ReportBuilder"
import { Features , HowItWorks , Stats, Testimonials, FAQ, FinalCTA, Footer} from "../../components/AllSections"
const Home = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <ReportBuilder/>
      <Features/>
      <HowItWorks/>
      <Stats/>
      <Testimonials/>
      <FAQ/>
      <FinalCTA/>
      <Footer/>
    </main>
  )
}

export default Home