import React from 'react'
import { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/DriverStats.css'

function DriverStats() {
    const [data, setData] = useState([])
    const { driverId } = useParams();
    const  location = useLocation();
    const { driverName, driverImg } = location.state || {}
    console.log(driverId)
    console.log(driverName)
    console.log(driverImg)
    


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
//                   };
//                   array.push(driver)
                  
//             }
            
//             setData(array)
//         } catch (error) {
//             console.error(error);
//         }

//      }
//      getAPI();
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

function styleDriverStats() {
    return (
        
        
        <div className='driver-stats-page-container'>
        <b className='name-header'>{driverName}</b>

        <img src={driverImg} alt='driver-photo' className='driver-photo'></img>
        

        <div className="driver-stats-page">
        <b>Wins: {calculateDriverStats('wins')} </b>
        <b>Poles: {calculateDriverStats('poles')} </b>
        <b>Starts: {calculateDriverStats('starts')} </b>
        <b>Top 5: {calculateDriverStats('top5')} </b>
        <b>Top 10: {calculateDriverStats('top10')} </b>
        <b>First Year in F1: {calculateDriverStats('year')} </b>
        </div>

        </div>
        
       
        
    )
}


  return (
    <>
    {styleDriverStats()}
    </>
  )
}

export default DriverStats
