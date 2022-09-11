import React from 'react'
import About from '../components/HomePage/About';
import PrimaryComponent from '../components/HomePage/PrimaryComponent';
import Services from '../components/HomePage/Services';
import Projects from '../components/HomePage/Projects';
import Footer from '../components/HomePage/Footer';
import LineChart from '../components/Graphs/LineChart';
const HomePage = () => {
  return (
    <React.Fragment>
        <div className='bg-[#000]'>
        <PrimaryComponent />
        <Services />
        <About/>
        <Projects/> 
        <Footer/>
        <LineChart/>
        </div>
    </React.Fragment>
  )
}

export default HomePage