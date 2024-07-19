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
import mclaren from '../images/McLaren Logo.png'
import mercedes from '../images/mercedes.png'
import ferrari from '../images/ferrari.png'
import alpine from '../images/alpine.png'
import aston from '../images/Aston Martin Logo.png'
import haas from '../images/haas.png'
import kick from '../images/kick.png'
import williams from '../images/williams.png'
import vcarb from '../images/vcarb.png'



function Drivers() {
  return (
    <>
    <div className="driver-page-container">
      <div className='driver-gallery'>
        <Driver driverId={4665} driverBorder='red-bull' flag={DutchFlag} logo={RedBullLogo}></Driver>
        <Driver driverId={4472} driverBorder='red-bull' flag={MexicoFlag} logo={RedBullLogo}></Driver>
        <Driver driverId={5498} driverBorder='ferrari' flag={MonacoFlag} logo={ferrari}></Driver>
        <Driver driverId={4686} driverBorder='ferrari' flag={SpainFlag} logo={ferrari}></Driver>
        <Driver driverId={5579} driverBorder='mclaren' flag={UKFlag} logo={mclaren}></Driver>
        <Driver driverId={5752} driverBorder='mclaren' flag={AusFlag} logo={mclaren}></Driver>
        <Driver driverId={5503} driverBorder='mercedes' flag={UKFlag} logo={mercedes}></Driver>
        <Driver driverId={868} driverBorder='mercedes' flag={UKFlag} logo={mercedes}></Driver>
        <Driver driverId={348} driverBorder='aston' flag={SpainFlag} logo={aston}></Driver>
        <Driver driverId={4775} driverBorder='aston' flag={CanadaFlag} logo={aston}></Driver>
        <Driver driverId={5652} driverBorder='rb' flag={JapanFlag} logo={vcarb}></Driver>
        <Driver driverId={4510} driverBorder='rb' flag={AusFlag} logo={vcarb}></Driver>
        <Driver driverId={4396} driverBorder='haas' flag={GermanyFlag} logo={haas}></Driver>
        <Driver driverId={4623} driverBorder='haas' flag={DenmarkFlag} logo={haas}></Driver>
        <Driver driverId={5592} driverBorder='williams' flag={ThaiFlag} logo={williams}></Driver>
        <Driver driverId={5745} driverBorder='williams' flag={USAFlag} logo={williams}></Driver>
        <Driver driverId={4678} driverBorder='alpine' flag={FranceFlag} logo={alpine}></Driver>
        <Driver driverId={5501} driverBorder='alpine' flag={FranceFlag} logo={alpine}></Driver>
        <Driver driverId={5682} driverBorder='kick' flag={ChinaFlag} logo={kick}></Driver>
        <Driver driverId={4520} driverBorder='kick' flag={FinlandFlag} logo={kick}></Driver>

      </div>
    </div>
    
    
    </>

    
  )
}

export default Drivers
