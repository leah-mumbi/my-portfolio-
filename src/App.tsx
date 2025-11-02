
import './App.css'
import { ThemeProvider } from './components/theme-provider'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <ThemeProvider defaultTheme="system">
      <Navbar />
      <main className='flex flex-col'>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
      </ThemeProvider>
  )
}

export default App
