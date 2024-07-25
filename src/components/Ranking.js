import React, { useState } from 'react'
import { useEffect } from 'react';
import '../styles/Ranking.css'
import Max from '../images/Max.png'
import Lando from '../images/Lando.png'
import Leclerc from '../images/Leclerc.png'
import Sainz from '../images/Sainz.png'
import Piastri from '../images/Piastri.png'
import Perez from '../images/Perez.png'
import Russel from '../images/Russel.png'
import Hamilton from '../images/Hamilton.png'
import Alonso from '../images/Alonso.png'
import Stroll from '../images/Stroll.png'
import Hulk from '../images/Hulk.png'
import Yuki from '../images/Yuki.png'
import Ric from '../images/Ric.png'
import Gasly from '../images/gasly.png'
import Mag from '../images/Mag.png'
import Albon from '../images/Albon.png'
import Ocon from '../images/ocon.png'
import Zhou from '../images/zhou.png'
import Sargeant from '../images/sargeant.png'
import Bottas from '../images/Bottas.png'

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
import { red } from '@mui/material/colors';


function Ranking() {

    const [data, setData] = useState([])


    const driverImages = {
        "Max Verstappen": Max,
        "Lando Norris" : Lando,
        "Charles Leclerc" : Leclerc,
        "Carlos Sainz" : Sainz,
        "Oscar Piastri" : Piastri,
        "Sergio Pérez" : Perez,
        "George Russell" : Russel,
        "Lewis Hamilton" : Hamilton,
        "Fernando Alonso" : Alonso,
        "Lance Stroll" : Stroll,
        "Nico Hülkenberg" : Hulk,
        "Yuki Tsunoda" : Yuki,
        "Daniel Ricciardo" : Ric,
        "Pierre Gasly" : Gasly,
        "Kevin Magnussen" : Mag,
        "Alexander Albon" : Albon,
        "Esteban Ocon" : Ocon,
        "Zhou Guanyu" : Zhou,
        "Logan Sargeant" : Sargeant,
        "Valtteri Bottas" : Bottas  
}

    const driverTeams  = {
        "Max Verstappen": "red-bull",
        "Lando Norris" : "mclaren",
        "Charles Leclerc" : "ferrari",
        "Carlos Sainz" : "ferrari",
        "Oscar Piastri" : "mclaren",
        "Sergio Pérez" : "red-bull",
        "George Russell" : "mercedes",
        "Lewis Hamilton" : "mercedes",
        "Fernando Alonso" : "aston",
        "Lance Stroll" : "aston",
        "Nico Hülkenberg" : "haas",
        "Yuki Tsunoda" : "rb",
        "Daniel Ricciardo" : "rb",
        "Pierre Gasly" : "alpine",
        "Kevin Magnussen" : "haas",
        "Alexander Albon" : "williams",
        "Esteban Ocon" : "alpine",
        "Zhou Guanyu" : "kick",
        "Logan Sargeant" : "williams",
        "Valtteri Bottas" : "kick" 

    }

    const driverFlags = {
        "Max Verstappen": DutchFlag,
        "Lando Norris" : UKFlag,
        "Charles Leclerc" : MonacoFlag,
        "Carlos Sainz" : SpainFlag,
        "Oscar Piastri" : AusFlag,
        "Sergio Pérez" : MexicoFlag,
        "George Russell" : UKFlag,
        "Lewis Hamilton" : UKFlag,
        "Fernando Alonso" : SpainFlag,
        "Lance Stroll" : CanadaFlag,
        "Nico Hülkenberg" : GermanyFlag,
        "Yuki Tsunoda" : JapanFlag,
        "Daniel Ricciardo" : AusFlag,
        "Pierre Gasly" : FranceFlag,
        "Kevin Magnussen" : DenmarkFlag,
        "Alexander Albon" : ThaiFlag,
        "Esteban Ocon" : FranceFlag,
        "Zhou Guanyu" : ChinaFlag,
        "Logan Sargeant" : USAFlag,
        "Valtteri Bottas" : FinlandFlag
    }

    const teamLogos = {
        "Max Verstappen": RedBullLogo,
        "Lando Norris" : mclaren,
        "Charles Leclerc" : ferrari,
        "Carlos Sainz" : ferrari,
        "Oscar Piastri" : mclaren,
        "Sergio Pérez" : RedBullLogo,
        "George Russell" : mercedes,
        "Lewis Hamilton" : mercedes,
        "Fernando Alonso" : aston,
        "Lance Stroll" : aston,
        "Nico Hülkenberg" : haas,
        "Yuki Tsunoda" : vcarb,
        "Daniel Ricciardo" : vcarb,
        "Pierre Gasly" : alpine,
        "Kevin Magnussen" : haas,
        "Alexander Albon" : williams,
        "Esteban Ocon" : alpine,
        "Zhou Guanyu" : kick,
        "Logan Sargeant" : williams,
        "Valtteri Bottas" : kick
    }

    const url = 'https://f1-motorsport-data.p.rapidapi.com/standings-drivers?year=2024';
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
                // console.log(array)
                // console.log(array[0].standing.entries) 
                // console.log(array[0].standing.entries[0].athlete.displayName) 
                
            } catch (error) {
                console.error(error);
            }

        }
        getAPI();
    }, [])
    
    if (data.length > 0) {
        console.log(data)
    }

    function styleDriverRankings() {

        if (data.length > 0) {
            return (
                <>
                    <div className='ranking-card-container'>
                        {data[0].standing.entries
                            .filter(entry => entry.athlete.displayName !== "Oliver Bearman")
                            .map((entry, index) => {
                                const driverName = entry.athlete.displayName;
                                const imageUrl = driverImages[driverName]; 
                                const driverTeam = driverTeams[driverName]
                                const driverFlag = driverFlags[driverName]
                                const driverTeamLogo = teamLogos[driverName]

                                let rankClass =''
                                if (index + 1 === 1) rankClass='gold'
                                if (index + 1 === 2) rankClass='silver'
                                if (index + 1 === 3) rankClass='bronze'
                                
                                return (
                                    <div className={`ranking-card ${driverTeam} ${rankClass}`} key={index}>
                                        <b className='driver-name'>{driverName}</b>
                                        <img src={driverFlag} alt='driver-flag' className='driver-flag'></img>
                                        <img src={driverTeamLogo} alt='driver-team-logo' className='team-logo'></img>
                                        <h1 className='rank-number'>{index + 1}</h1>
                                        <img src={imageUrl} alt={driverName} className='driver-photo'/>
                                        <h3 className='points'> Points: {entry.stats[1].displayValue}</h3>
                                        
                                    </div>
                                );
                            })}
                    </div>
                </>
            );
        } else {
            return <b>LOADING...</b>;
        }
    }



  return (
   <>
   
    {styleDriverRankings()}

   </>
  )
}

export default Ranking
