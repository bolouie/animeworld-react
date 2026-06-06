import { useState } from 'react'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Packages from "./components/Packages.jsx";

function App() {
  const [isWizardOpen, setIsWizardOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState(null)
  return (
    <>
      <Navbar />
      <Hero />
      <Packages />
    </>

  )
}

export default App