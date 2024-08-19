import React, { act, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import '../styles/RaceResult.css'

// material ui imports
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function RaceResult() {
  const { eventID } = useParams();
  const location = useLocation();
  const {endDate, time} = location.state || {} // passed in date and start time

  const [data, setData] = useState(null);
  const [activeNavIndex, setNavIndex] = useState(99);
  const [displayedRaceInfo, setDisplayedRaceInfo] = useState(null);
  const [showInfo, setShowInfo] = useState(true)

  const raceEntries=[];

  console.log(eventID);

  const url = `https://f1-motorsport-data.p.rapidapi.com/race-report?eventId=${eventID}`;
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
            setData(result)
        } catch (error) {
            console.error(error);
        }

    }
    getAPI();
}, [])

console.log(data)

    function StyleRaceInfo() {
      if (data) {
        const positions = data.report.positions;

        const navItems = [];

        positions.forEach((entry, index) => {
          navItems.push(entry.titleTab)
          const raceData = {
            raceType: entry.titleTab ?? 'Undefined Race Type', 
            drivers: entry.positions.map(innerEntry => ({
              name: innerEntry.athleteInfo?.displayName ?? 'Unknown name',
              team: innerEntry.athleteInfo?.team ?? 'Unknown team',
              flag: innerEntry.athleteInfo?.flag?.href ?? 'Unknown Flag',
              headshot: innerEntry.athleteInfo?.headshot?.href ?? 'Unknown headshot',
              position: innerEntry.order ?? 'Unknown order',
              totalTime: innerEntry.stateInfo?.totalTime ?? 'No Time Set',
              pitStops: innerEntry.stateInfo?.pitsTaken ?? '0',
              lapsCompleted: innerEntry.stateInfo?.lapsCompleted ?? 'Unknown Laps Completed',
              completed: innerEntry.stateInfo?.completed ?? 'Unknown completed value',
              behindTime: innerEntry.stateInfo?.behindTime ?? innerEntry.stateInfo.totalTime
            }))
          };
          raceEntries.push(raceData);
        });

        console.log(raceEntries)

        console.log(positions)
    return (
    <>
    <div className='race-result-container'>
      {showInfo && <h1 className='gp-header'>{data.report.racestrip.name}</h1>}

    <div className='race-nav'>
            <nav>
              <ul>
              <div className='race-nav-inner'>
              <li key={99}
              className={99 === activeNavIndex ? 'active' : ''}
              onClick={() => handleInfoNavClick('Info', 99)}
              >Info</li>
              {navItems.map((entry, index) => (
                <li key={index} 
                    className={index === activeNavIndex ? 'active' : ''}
                    onClick={() => handleNavChange(entry, index)}>
                    {entry}
                </li>
              ))}
              </div>
              </ul>

            </nav>
          </div>

    
    
      
      {(displayedRaceInfo && !showInfo) && <div className='displayed-race-info-positions-container'>

        
          <h1 className='race-type-header'>{displayedRaceInfo.raceType}</h1>
          <h1 className='finishing-positions-header'>Finishing Positions</h1>
          
          <div className='positions-container'>
          
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{
            '& td, & th': {
                fontFamily: 'F1-bold',
                fontSize: '20px'
              }
              }}>
            <TableCell align="center" width="16%">Position</TableCell>
            <TableCell align="center" width="16%">Driver</TableCell>
            <TableCell align="center" width="16%">Team</TableCell>
            <TableCell align="center" width="16%">Time &nbsp;(hr/min/s/ms)</TableCell>
            <TableCell align="center" width="16%">Nation</TableCell>
            <TableCell align="center" width="16%">Pitstops</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedRaceInfo.drivers.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } ,
              '& td, & th': {
                fontFamily: 'F1-regular'
              }
            }}
            >
              <TableCell component="th" scope="row" align='center' width="16%" 
              className={row.position === 1 ? 'winner-position' : row.position === 2 ? 'second-place' : row.position === 3 ? 'third-place' : ''}>
                {row.position}
              </TableCell>
              <TableCell align="center" width="16%">{row.name}</TableCell>
              <TableCell align="center" width="16%">{row.team}</TableCell>
              <TableCell align="center" width="16%">{displayedRaceInfo.raceType === "Qualifying" && row.position === 1 ? row.totalTime : displayedRaceInfo.raceType === "Sprint Shootout" ? row.totalTime : row.position === 1 ? row.totalTime :
                                                    !row.completed ? "DNF" :
                                                    row.behindTime || row.totalTime}</TableCell>
              <TableCell align="center" width="16%"><img src={row.flag} className='row-flag'></img></TableCell>
              <TableCell align="center" width="16%">{row.pitStops}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          
          
          
          
  {console.log(displayedRaceInfo)}




      </div>
        
          
        
      </div>}

      

        

      {showInfo && <div className='info-container'>
        

      {showInfo && <div className='location-info'>
        <h3><span>City:</span> {data.report.eventInfo.venue.address.city}</h3>
        <h3><span>Country:</span> {data.report.eventInfo.venue.address.country}</h3>
        {/* <h3> {data.report.racestrip.name}</h3> */}
        <img className='country-flag' src={data.report.eventInfo.venue.countryFlag.href}></img>
        <h3><span>Race Day:</span> {endDate} </h3>
        <h3><span>Start Time:</span> {time} UTC</h3>
      </div> }

      <div className='circuit-info-img'>
      <img src={data.report.eventInfo.venue.circuit.diagrams[2].href} className='circuit-info-img'></img>
      {(data.report?.eventInfo?.venue?.circuit?.fastestLapDriver && showInfo) &&
          <h3><span>Fastest Lap Time Record:</span> {data.report.eventInfo.venue.circuit.fastestLapDriver.fastestLapTime} &nbsp;
          ({data.report.eventInfo.venue.circuit.fastestLapDriver.fastestLapYear})</h3>}
          
          {(data.report?.eventInfo?.venue?.circuit?.fastestLapDriver && showInfo) &&
          <div className='record-holder'>
           <h3><span>Record Holder:</span> {data.report.eventInfo.venue.circuit.fastestLapDriver.fullName}</h3>
           <img src={data.report.eventInfo.venue.circuit.fastestLapDriver.flag.href} className='record-holder-img'></img>
          </div>}
      </div>

      {showInfo && <div className='circuit-info'>
          
          <h3><span>Circuit Name:</span> {data.report.eventInfo.venue.circuit.fullName}</h3>
          <h3><span>Lap Length:</span> {data.report.eventInfo.venue.circuit.length}</h3>
          <h3><span>Race Type:</span> {data.report.eventInfo.venue.circuit.type}</h3>
          <h3><span>Established:</span> {data.report.eventInfo.venue.circuit.established}</h3>
          <h3><span>Direction:</span> {data.report.eventInfo.venue.circuit.direction}</h3>
          <h3><span># of Laps:</span> {data.report.eventInfo.venue.circuit.laps}</h3>
          <h3><span># of Turns:</span> {data.report.eventInfo.venue.circuit.turns}</h3> 
          

        
        

      
      </div> }

      

      
      {/* {(data.report?.eventInfo?.venue?.circuit?.fastestLapDriver && showInfo) && 
      <div className='fastest-info'>
        <h3>Fastest Lap Time Record: {data.report.eventInfo.venue.circuit.fastestLapDriver.fastestLapTime} &nbsp;
        ({data.report.eventInfo.venue.circuit.fastestLapDriver.fastestLapYear})</h3>

          <div className='record-holder'>
           <h3>Record Holder: {data.report.eventInfo.venue.circuit.fastestLapDriver.fullName}</h3>
           <img src={data.report.eventInfo.venue.circuit.fastestLapDriver.flag.href} className='record-holder-img'></img>
          </div>
        


      </div>} */}


      </div>}


</div>



    


  </>
  )
    } else {
      return <h1 className='loading-header'>LOADING...</h1>
    }

  }
  
  function handleNavChange(entry, index) {
      setNavIndex(index);
      setShowInfo(false);
      const foundRaceInfo = raceEntries.find(race => race.raceType === entry)
      setDisplayedRaceInfo(foundRaceInfo || null)
  }

  function handleInfoNavClick(entry, index) {
      setNavIndex(index);
      setShowInfo(true);
  }
  


  return (
   <>
      <StyleRaceInfo />
   </>
  )
}

export default RaceResult
