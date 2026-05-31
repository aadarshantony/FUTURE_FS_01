import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Stack from "./components/Stack"

const App = () => {
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-(--paper)">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
    </div>
  )
}

export default App