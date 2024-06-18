import React, { useEffect, useContext } from 'react'
import { UserDataContext } from '../../../Layout/UserLayout'



const SelectService = ({ selectedService, setSelectedService, selectedSubService, setSelectedSubService, subServices, setSubServices }) => {
    
    const services = {
  'General Care': ['Wound dressing', 'Injections', 'Health monitoring'],
  'Specialized Care': ['Diabetes management', 'Cardiac care', 'Respiratory care'],
  'Home Care': ['Meal preparation', 'Medication management', 'Personal hygiene care'],
  'Pediatric Care': ['Newborn care', 'Child health check', 'Vaccination'],
  'Elderly Care': ['Dementia care', 'Mobility assistance', 'Companionship']
};
  

    
  useEffect(() => {
    if (selectedService && services[selectedService]) {
      setSubServices(services[selectedService]);
      setSelectedSubService("")
    } else {
      setSubServices([]);
    }
  }, [selectedService]);

  return (

            <div className="select-service w-full shadow-panelShadow rounded-20">
              <select className='w-[40%] py-2 px-2 rounded-tl-20 rounded-bl-20 text-sm text-darkGreen1 outline-none focus:ring-1 focus:ring-darkGreen4' value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
        <option className='' value="">Select a service</option>
        {Object.keys(services).map((service, index) => (
          <option key={index} value={service}>{service}</option>
        ))}
      </select>
      <select className='outline-none w-[60%] py-2 px-2 rounded-tr-20 rounded-br-20 text-sm text-darkGreen1 focus:ring-1 focus:ring-darkGreen4' value={selectedSubService} onChange={(e) => setSelectedSubService(e.target.value)}>
        <option value="">Select a sub-service</option>
        {subServices.map((subService, index) => (
          <option key={index} value={subService}>{subService}</option>
        ))}
        </select>  
      </div>
  )
}

export default SelectService
