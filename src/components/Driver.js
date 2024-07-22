import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom';
import Typography from '@mui/material/Typography';
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
import Bearman from '../images/bearman.png'
import Gasly from '../images/gasly.png'
import Mag from '../images/Mag.png'
import Albon from '../images/Albon.png'
import Ocon from '../images/ocon.png'
import Zhou from '../images/zhou.png'
import Sargeant from '../images/sargeant.png'
import Bottas from '../images/Bottas.png'
import { Link } from 'react-router-dom';

import '../styles/Driver.css'
import { containerClasses } from '@mui/material';


function Driver({driverId, driverBorder, flag, logo, raceNumber}) {

    const [data, setData] = useState([])
    const [showStats, setShowStats] = useState(false)
    var driverIMG;
    var name;
    
    switch (driverId) {
        case 4665:
            console.log("MAX")
            driverIMG = Max
            name ="Max Verstappen"
            break;
        case 5579: 
            console.log("LANDO")
            driverIMG = Lando
            name ="Lando Norris"
            break;
        case 5498:
            console.log("LECLERC")
            driverIMG = Leclerc
            name ="Charles Leclerc"
            break;
        case 4686:
            console.log("SAINZ")
            driverIMG = Sainz
            name = "Carlos Sainz"
            break;
        case 5752:
            console.log("PIASTRI")
            driverIMG = Piastri
            name = "Oscar Piastri"
            break;
        case 4472: 
            console.log("PEREZ")
            driverIMG = Perez
            name = "Sergio Perez"
            break;
        case 5503:
            console.log("RUSSEL")
            driverIMG = Russel
            name = "George Russel"
            break;
        case 868:
            console.log("HAMILTON")
            driverIMG = Hamilton
            name = "Lewis Hamilton"
            break;
        case 348:
            console.log("ALONSO")
            driverIMG = Alonso
            name = "Fernando Alonso"
            break;
        case 4775:
            console.log("STROLL")
            driverIMG = Stroll
            name = "Lance Stroll"
            break;
        case 4396:
            console.log("HULK")
            driverIMG = Hulk
            name = "Nico Hülkenberg"
            break;
        case 5652:
            console.log("YUKI")
            driverIMG = Yuki
            name = "Yuki Tsunoda"
            break;
        case 4510:
            console.log("RIC")
            driverIMG = Ric
            name = "Daniel Ricciardo"
            break;
        case 5789:
            console.log("Bearman")
            driverIMG = Bearman
            name = "Oliver Bearman"
            break;
        case 5501:
            console.log("GASLY")
            driverIMG = Gasly
            name = "Pierre Gasly"
            break;
        case 4623:
            console.log("K-MAG")
            driverIMG = Mag
            name = "Kevin Magnussen"
            break;
        case 5592:
            console.log("ALBON")
            driverIMG = Albon
            name = "Alex Albon"
            break;
        case 4678:
            console.log("OCON")
            driverIMG = Ocon
            name = "Esteban Ocon"
            break;
        case 5682:
            console.log("ZHOU")
            driverIMG = Zhou
            name = "Zhou Guanyu"
            break;
        case 5745:
            console.log("SARGEANT")
            driverIMG = Sargeant
            name = "Logan Sargeant"
            break;
        case 4520:
            console.log("BOTTAS")
            driverIMG = Bottas
            name = "Valtteri Bottas"
            break;
    }

    //         const url = `https://f1-motorsport-data.p.rapidapi.com/stats?driverId=${driverId}`;
    //         const options = {
    //         method: 'GET',
    //         headers: {
    //             'x-rapidapi-key': 'a1ac7dbe9bmsh47512af3179ad70p1f25adjsn0d37243aa5dc',
    //             'x-rapidapi-host': 'f1-motorsport-data.p.rapidapi.com'
    //         }
    // };

            
    // useEffect(() => {
    //     const getAPI = async () => 
    //     {
    //         try {
    //             const response =  await fetch(url, options);
    //             const result =  await response.json();
    //             const array = [];
    //             for (var i = 0; i < result.length; i++) {
    //                 const { avgFinish, avgStart, poles, year, starts, top5, top10, rank, wins, points } = result[i];
    //                 const driver = {
    //                     avgFinish: avgFinish,
    //                     avgStart: avgStart,
    //                     points: points,
    //                     poles: poles,
    //                     rank: rank,
    //                     starts: starts,
    //                     top5: top5,
    //                     top10: top10,
    //                     wins: wins,
    //                     year: year
    //                 };
    //                 array.push(driver)
                    
    //             }
                
    //             setData(array)
    //         } catch (error) {
    //             console.error(error);
    //         }

    //     }
    //     getAPI();
    // }, [])

console.log(data)

    function calculateDriverStats(whichStat) {
        var stat = 0;
        if (whichStat === 'year' && data.length > 0) {
            return data[0][whichStat]
        }
        
        if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
            stat = data[i][whichStat] + stat

        }
    }
    
        return stat;
    }

    function styleDriverCard() {

        

        if (!showStats) {
         return (
        
        // return if showStats is false
        <div className={`card-container ${driverBorder} flip`} onClick={() => setShowStats(true)}>

        {/* <Link to={`/driver-stats/${driverId}`}
        state={{ driverName: name, driverImg: driverIMG , Flag: flag, Logo: logo, DriverBorder: driverBorder, raceNumber: raceNumber}} className='driver-name'> */}
        <b className='driver-name'>{name}</b>
        {/* </Link> */}

        <img src={flag} alt='driver flag' className='driver-flag' onClick={(e) => e.stopPropagation()}></img>
        <img src={logo} alt='team-logo' className='team-logo' onClick={(e) => e.stopPropagation()}></img>
        
        {/* <Link to={`/driver-stats/${driverId}`}
        state={{ driverName: name, driverImg: driverIMG, Flag: flag, Logo: logo, DriverBorder: driverBorder, raceNumber: raceNumber}}> */}
        <img className='driver-img' src = {driverIMG} alt='Driver Photo'></img>
        {/* </Link> */}




        </div>

        )
         }

         if (showStats) {

            return (
            <div className={`card-container ${driverBorder}`} onClick={() => setShowStats(false)}>

                <b className='driver-name'>{name}</b>
            
                <img src={flag} alt='driver flag' className='driver-flag' onClick={(e) => e.stopPropagation()}></img>
                <img src={logo} alt='team-logo' className='team-logo' onClick={(e) => e.stopPropagation()}></img>
            
                <div className='show-driver-stats' onClick={() => setShowStats(false)}> 
                <b>Wins 🏆: {calculateDriverStats('wins')} </b>
                <b>Poles 🏁: {calculateDriverStats('poles')} </b>
                <b>Starts 🏎️: {calculateDriverStats('starts')} </b>
                <b>Top 5 🔝5️⃣: {calculateDriverStats('top5')} </b>
                <b>Top 10 🔝🔟: {calculateDriverStats('top10')} </b>
                <b>First Year in F1 🗓️: {calculateDriverStats('year')} </b>
                </div>

                
                <img src={raceNumber} className='race-number'></img>



            </div>
            )
         }


    }
          

        
return (
   <>
    {styleDriverCard()}
   </>

    )
}

export default Driver