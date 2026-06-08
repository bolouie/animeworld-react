import { useState } from 'react'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Packages from "./components/Packages.jsx";
import WizardOverlay from "./components/WizardOverlay.jsx"
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [isWizardOpen, setIsWizardOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState(null)
  return (
    <>
      <Navbar />
      <Hero />
      <Packages
        setSelectedPackage={setSelectedPackage}
        setIsWizardOpen={setIsWizardOpen}
      />
      {isWizardOpen && (
        <WizardOverlay
          selectedPackage={selectedPackage}
          onClose={() => setIsWizardOpen(false)}
        />
      )}
      <About />
      <Contact />
      <Footer />
    </>



  )
}

export default App