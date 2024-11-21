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
import maxNumber from '../images/max number.png'
import perezNum from '../images/perez num.png'
import leclercNum from '../images/leclerc num.png'
import sainzNum from '../images/sainz num.png'
import landoNum from '../images/lando num.png'
import piastriNum from '../images/piastri num.png'
import russelNum from '../images/russel num.png'
import hamiltonNum from '../images/hamilton num.png'
import alonsoNum from '../images/alonso num.png'
import strollNum from '../images/stroll num.png'
import yukiNum from '../images/yuki num.png'
import ricNum from '../images/ric num.png'
import hulkNum from '../images/hulk num.png'
import magNum from '../images/mag num.png'
import albonNum from '../images/albon num.png'
import sargeantNum from '../images/sargeant num.png'
import oconNum from '../images/ocon num.png'
import gaslyNum from '../images/gasly num.png'
import zhouNum from '../images/zhou num.png'
import bottasNum from '../images/bottas num.png'


function Drivers() {
  return (
    <>
    <div className="driver-page-container">
      <b style={{ fontFamily: 'F1-Regular', padding: '10px'}}>**Click each driver card to turn it over and see their stats!</b>
      <div className='driver-gallery'>
        <Driver driverId={4665} driverBorder='red-bull' flag={DutchFlag} logo={RedBullLogo} raceNumber={maxNumber}></Driver>
        <Driver driverId={4472} driverBorder='red-bull' flag={MexicoFlag} logo={RedBullLogo} raceNumber={perezNum}></Driver>
        <Driver driverId={5498} driverBorder='ferrari' flag={MonacoFlag} logo={ferrari} raceNumber={leclercNum}></Driver>
        <Driver driverId={4686} driverBorder='ferrari' flag={SpainFlag} logo={ferrari} raceNumber={sainzNum}></Driver>
        <Driver driverId={5579} driverBorder='mclaren' flag={UKFlag} logo={mclaren} raceNumber={landoNum}></Driver>
        <Driver driverId={5752} driverBorder='mclaren' flag={AusFlag} logo={mclaren} raceNumber={piastriNum}></Driver>
        <Driver driverId={5503} driverBorder='mercedes' flag={UKFlag} logo={mercedes} raceNumber={russelNum}></Driver>
        <Driver driverId={868} driverBorder='mercedes' flag={UKFlag} logo={mercedes} raceNumber={hamiltonNum}></Driver>
        <Driver driverId={348} driverBorder='aston' flag={SpainFlag} logo={aston} raceNumber={alonsoNum}></Driver>
        <Driver driverId={4775} driverBorder='aston' flag={CanadaFlag} logo={aston} raceNumber={strollNum}></Driver>
        <Driver driverId={5652} driverBorder='rb' flag={JapanFlag} logo={vcarb} raceNumber={yukiNum}></Driver>
        <Driver driverId={4510} driverBorder='rb' flag={AusFlag} logo={vcarb} raceNumber={ricNum}></Driver>
        <Driver driverId={4396} driverBorder='haas' flag={GermanyFlag} logo={haas} raceNumber={hulkNum}></Driver>
        <Driver driverId={4623} driverBorder='haas' flag={DenmarkFlag} logo={haas} raceNumber={magNum}></Driver>
        <Driver driverId={5592} driverBorder='williams' flag={ThaiFlag} logo={williams} raceNumber={albonNum}></Driver>
        <Driver driverId={5745} driverBorder='williams' flag={USAFlag} logo={williams} raceNumber={sargeantNum}></Driver>
        <Driver driverId={4678} driverBorder='alpine' flag={FranceFlag} logo={alpine} raceNumber={oconNum}></Driver>
        <Driver driverId={5501} driverBorder='alpine' flag={FranceFlag} logo={alpine} raceNumber={gaslyNum}></Driver>
        <Driver driverId={5682} driverBorder='kick' flag={ChinaFlag} logo={kick} raceNumber={zhouNum}></Driver>
        <Driver driverId={4520} driverBorder='kick' flag={FinlandFlag} logo={kick} raceNumber={bottasNum}></Driver>

      </div>
    </div>
    
    
    </>

    
  )
}

export default Drivers
