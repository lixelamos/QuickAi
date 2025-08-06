import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AiTools from '../components/AiTools'
import Testimonials from '../components/Testimonials'
import Plan from '../components/Plan'
import Footer from '../components/Footer'
import { Sidebar } from 'lucide-react'
import CreationItem from '../components/CreationItem'
const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <AiTools/>
    <Testimonials/>
    <Plan/>
    <Footer/>
    <Sidebar/>
    <CreationItem
      item={{
        prompt: "Example prompt",
        type: "text",
        content: "Example content",
        created_at: new Date().toISOString()
      }}
    />
    </>
  )
}

export default Home;