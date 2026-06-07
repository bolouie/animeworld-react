import { useState } from 'react'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Packages from "./components/Packages.jsx";
import WizardOverlay from "./components/WizardOverlay.jsx"

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
    </>

  )
}

export default App