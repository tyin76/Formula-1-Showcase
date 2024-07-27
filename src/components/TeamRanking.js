import React, { useEffect, useState } from 'react'
import '../styles/TeamRanking.css'
import redbullcar from '../images/red bull car.avif'
import ferrariCar from '../images/ferrari car.avif'
import mclarenCar from '../images/mclaren car.avif'
import mercedesCar from '../images/mercedes car.avif'
import astonCar from '../images/aston car.avif'
import haasCar from '../images/haas car.avif'
import alpineCar from '../images/alpine car.avif'
import williamsCar from '../images/williams car.avif'
import kickCar from '../images/kick car.avif'
import vcarbCar from '../images/vcarb car.avif'

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


function TeamRanking() {

    const [data, setData] = useState([])

    const cars = {
        'Red Bull' : redbullcar,
        'Ferrari' : ferrariCar,
        'McLaren' : mclarenCar,
        'Mercedes' : mercedesCar,
        'Aston Martin' : astonCar,
        'Haas' : haasCar,
        'Alpine' : alpineCar,
        "Williams" : williamsCar,
        "Sauber" : kickCar,
        'RB' : vcarbCar
    }

    const teams = {
        'Red Bull' : 'red-bull',
        'Ferrari' : 'ferrari',
        'McLaren' : 'mclaren',
        'Mercedes' : 'mercedes',
        'Aston Martin' : 'aston',
        'Haas' : 'haas',
        'Alpine' : 'alpine',
        "Williams" : 'williams',
        "Sauber" : 'kick',
        'RB' : 'rb'
    }

    const teamLogos = {
        "Red Bull": RedBullLogo,
        "McLaren" : mclaren,
        "Ferrari" : ferrari,
        "Mercedes" : mercedes,
        "Aston Martin" : aston,
        "Haas" : haas,
        "RB" : vcarb,
        "Alpine" : alpine,
        "Williams" : williams,
        "Sauber" : kick,
    }


    const url = 'https://f1-motorsport-data.p.rapidapi.com/standings-controllers?year=2024';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a1ac7dbe9bmsh47512af3179ad70p1f25adjsn0d37243aa5dc',
            'x-rapidapi-host': 'f1-motorsport-data.p.rapidapi.com'
        }
    };

    useEffect(() => {
        const getAPI = async () => 
        {
            try {
                const response =  await fetch(url, options);
                const result =  await response.json();
                const array = [];
                const { standings } = result;
                    const standingObject = {
                        standing: standings
                    };
                    array.push(standingObject)
                    
                
                
                setData(array)
                
            } catch (error) {
                console.error(error);
            }

        }
        getAPI();
    }, [])

    function styleTeamRankings() {
        
        if (data.length > 0) {
            return (
                
            <div className='team-ranking-container'>
            {data[0].standing.entries.map((entry, index) => {

                const car = cars[entry.team.displayName] 
                const team = teams[entry.team.displayName]
                const logo = teamLogos[entry.team.displayName]

                let rankClass=''
                if (index + 1 === 1) rankClass='gold'
                if (index + 1 === 2) rankClass='silver'
                if (index + 1 === 3) rankClass='bronze'

                return (
                <div className={`team-card ${team}`}>
                <b className='team-name driver-name' id='team-specific'>{entry.team.displayName}</b>
                <b className='team-points driver-name' id='team-specific'>Points: {entry.stats[1].displayValue}</b>
                <img src={logo} alt='team-logo' className='team-logo'></img>
                <h2 className={`team-rank-number ${rankClass}`}>{index + 1}</h2>
                <img src={car} alt='team-car' className='team-car'></img>
                </div>

                )
        })}

            </div>
            
            )
        } else {
            return <h1 className='loading-text'>LOADING...</h1>
        }
    }

  return (
    <>
    {styleTeamRankings()}
    </>
  )
}

export default TeamRanking
