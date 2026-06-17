import { useState } from 'react'
import ShippingStep from './ShippingStep'
import CustomerStep from './CustomerStep'
import ConfirmStep from './ConfirmStep'

function WizardOverlay({ selectedPackage, onClose }) {
    const [currentStep, setCurrentStep] = useState(0)
    const [name, setName] = useState('')
    const [region, setRegion] = useState(null)
    const [shippingAddress, setShippingAddress] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    return (
        <div className="flex items-center justify-center bg-anime-darken/95 h-screen w-screen fixed inset-0 z-50">
            {/* modal panel */}
            <div className="bg-anime-card rounded-2xl relative max-w-lg w-full p-6 md:p-8 flex flex-col justify-between space-y-6">
                {currentStep === 0 &&
                    <ShippingStep
                        region={region}
                        setRegion={setRegion}
                        setCurrentStep={setCurrentStep}
                    />}
                {currentStep === 1 &&
                    <CustomerStep
                        name={name}
                        setName={setName}
                        shippingAddress={shippingAddress}
                        setShippingAddress={setShippingAddress}
                        city={city}
                        setCity={setCity}
                        country={country}
                        setCountry={setCountry}
                        setCurrentStep={setCurrentStep}

                    />}
                {currentStep === 2 &&
                    <ConfirmStep
                        selectedPackage={selectedPackage}
                        name={name}
                        region={region}
                        shippingAddress={shippingAddress}
                        city={city}
                        country={country}
                        onClose={onClose}
                    />}

                <button aria-label="close modal"
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 rounded-full bg-anime-bg/80 border border-white/10 text-anime-peach hover:text-white hover:border-anime-orange/50 transition-colors cursor-pointer"
                >✕</button>
            </div>
        </div>
    )
}

export default WizardOverlay
