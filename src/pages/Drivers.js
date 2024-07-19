import React from 'react'
import Driver from '../components/Driver'
import '../styles/Drivers.css'
import DutchFlag from '../images/dutch flag.avif'
import UKFlag from '../images/uk flag.avif'
import MonacoFlag from '../images/monaco flag.avif'
import SpainFlag from '../images/spain flag.avif'
import AusFlag from '../images/aus flag.avif'
import MexicoFlag from '../images/mexico flag.avif'
import CanadaFlag from '../images/canada flag.avif'
import GermanyFlag from '../images/germany flag.avif'
import JapanFlag from '../images/japan flag.avif'
import FranceFlag from '../images/france flag.avif'
import DenmarkFlag from '../images/denmark flag.avif'
import ThaiFlag from '../images/thai flag.avif'
import ChinaFlag from '../images/china flag.avif'
import USAFlag from '../images/usa flag.avif'
import FinlandFlag from '../images/finland flag.avif'
import RedBullLogo from '../images/red bull logo.png'


function Drivers() {
  return (
    <>
    <div className="driver-page-container">
      <div className='driver-gallery'>
        <Driver driverId={4665} driverBorder='red-bull' flag={DutchFlag} logo={RedBullLogo}></Driver>
        <Driver driverId={5579} driverBorder='mclaren' flag={UKFlag}></Driver>
        <Driver driverId={5498} driverBorder='ferrari' flag={MonacoFlag}></Driver>
        <Driver driverId={4686} driverBorder='ferrari' flag={SpainFlag}></Driver>
        <Driver driverId={5752} driverBorder='mclaren' flag={AusFlag}></Driver>
        <Driver driverId={4472} driverBorder='red-bull' flag={MexicoFlag}></Driver>
        <Driver driverId={5503} driverBorder='mercedes' flag={UKFlag}></Driver>
        <Driver driverId={868} driverBorder='mercedes' flag={UKFlag}></Driver>
        <Driver driverId={348} driverBorder='aston' flag={SpainFlag}></Driver>
        <Driver driverId={4775} driverBorder='aston' flag={CanadaFlag}></Driver>
        <Driver driverId={4396} driverBorder='haas' flag={GermanyFlag}></Driver>
        <Driver driverId={5652} driverBorder='rb' flag={JapanFlag}></Driver>
        <Driver driverId={4510} driverBorder='rb' flag={AusFlag}></Driver>
        <Driver driverId={5501} driverBorder='alpine' flag={FranceFlag}></Driver>
        <Driver driverId={4623} driverBorder='haas' flag={DenmarkFlag}></Driver>
        <Driver driverId={5592} driverBorder='williams' flag={ThaiFlag}></Driver>
        <Driver driverId={4678} driverBorder='alpine' flag={FranceFlag}></Driver>
        <Driver driverId={5682} driverBorder='kick' flag={ChinaFlag}></Driver>
        <Driver driverId={5745} driverBorder='williams' flag={USAFlag}></Driver>
        <Driver driverId={4520} driverBorder='kick' flag={FinlandFlag}></Driver>



      </div>
    </div>
    
    
    </>

    
  )
}

export default Drivers
