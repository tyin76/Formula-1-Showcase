import React from 'react'
import '../styles/Schedule.css'
import { useEffect, useState } from 'react';

// MUI imports
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { blue, green, pink, yellow, black, teal } from '@mui/material/colors';
import Badge from '@mui/material/Badge';



function Schedule() {

    

    const[data, setData] = useState(null)
    const[year, setYear] = useState(dayjs().year())
    const[raceDays, setRaceDays] = useState([])
    const[notFinishedRaceDays, setNotFinishedRaceDays] = useState([])
    const[otherInfo, setOtherInfo] = useState([])
    const[selectedRaceInfo, setSelectedRaceInfo] = useState(null)

    const url = `https://f1-motorsport-data.p.rapidapi.com/schedule?year=${year}`;
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

                const startDates = [];
                const notFinishedStartDates=[];
                const otherInfoTempArray = [];
            
                    for (const key in result) {
                    if (result.hasOwnProperty(key)) {
                        result[key].forEach(item => {
                        // pushing isRaceDays info
                        if (item.endDate && (item.completed === true) && item.gPrx && item.crct || item.winner || item.isPostponedOrCanceled) {
                            const isRaceDayInfo = {
                                endDateAndTime : item.endDate,
                                gPrx : item.gPrx,
                                crct : item.crct,
                                winner : item.winner,
                                isPostponedOrCanceled : item.isPostponedOrCanceled
                            }
                            startDates.push(isRaceDayInfo);
                        }
                        if (item.endDate && (item.completed === false) && item.gPrx && item.crct || item.winner || item.isPostponedOrCanceled) {
                            const isRaceDayButNotFinishedInfo = {
                                endDateAndTime : item.endDate,
                                gPrx : item.gPrx,
                                crct : item.crct,
                                winner : item.winner,
                                isPostponedOrCanceled : item.isPostponedOrCanceled
                            }
                            notFinishedStartDates.push(isRaceDayButNotFinishedInfo);
                        }

                        
                        });
                    }
                    }

                    // temp arrays
                    console.log(startDates) 
                    console.log(notFinishedStartDates)
                    console.log(otherInfoTempArray)

                    

                    

                    const raceDatesArray = startDates.map(startDate => {
                        const date = dayjs(startDate.endDateAndTime)
                        return {
                            endDate: date.format('YYYY-MM-DD'),
                            time: date.format('HH:mm'),
                            ...startDate
                            
                        }
                    })

                    const notFinishedRaceDatesArray = notFinishedStartDates.map(startDate => {
                        const date = dayjs(startDate.endDateAndTime)
                        return {
                            endDate: date.format('YYYY-MM-DD'),
                            time: date.format('HH:mm'),
                            ...startDate
                            
                        }
                    })
                    
                    // setting state variables
                    setRaceDays(raceDatesArray)
                    setNotFinishedRaceDays(notFinishedRaceDatesArray)
                    setOtherInfo(otherInfoTempArray)
                    
                    
                    
                
            } catch (error) {
                console.error(error);
            }

        }
        getAPI();
    }, [year])

    // console logging state variables
    console.log(raceDays)
    console.log(notFinishedRaceDays)
    console.log(otherInfo)

    console.log(raceDays.length)
    console.log(notFinishedRaceDays.length)

    

    const handleDateChange = (date) => {
            setYear(date.year())

            // check if clicked date has race
            const clickedDate = date.format('YYYY-MM-DD')
            const raceInfo = raceDays.find(race => race.endDate === clickedDate) || 
                         notFinishedRaceDays.find(race => race.endDate === clickedDate);
            setSelectedRaceInfo(raceInfo || null)
    }

    function RaceDayCustomize({day, outsideCurrentMonth, ...other}) {
        
        const isRaceDay = raceDays.some(raceDay => day.isSame(raceDay.endDate, 'day'))
        const isRaceDayButNotFinished = notFinishedRaceDays.some(notFinRaceDay => day.isSame(notFinRaceDay.endDate, 'day'))

        const showBadgeRaceDay = isRaceDay && !outsideCurrentMonth;
        const showCarNotDone = isRaceDayButNotFinished && !outsideCurrentMonth;
        return (

            <Badge 
            overlap='circular'
            badgeContent={showBadgeRaceDay ? '🏁' : showCarNotDone ? '🏎️' : undefined}
            sx={{
                '& .MuiBadge-badge': {
                fontSize: '1.3rem', // Adjust font size
                padding: '0.5rem',  // Adjust padding
            }
        }}
            >
            <PickersDay
                {...other}
                day={day}
                outsideCurrentMonth={outsideCurrentMonth}
                sx={{
                    backgroundColor: isRaceDay ? 'green' : isRaceDayButNotFinished ? '#ff4081' : 'transparent',
                    color: isRaceDay ? 'white' : isRaceDayButNotFinished ? 'white' : 'inherit',
                    '&:hover': {
                        outline: '2px solid grey',
                        backgroundColor: 'black'
                    },
                }}
            />
            </Badge>
        );
    }

    function CustomizeRaceInfo({raceInfo}) {
        if (!raceInfo) {
            return null;
        }
        
       return (
        <>
        <div className='race-info'>
        <h3>🏁 Grand Prix: {raceInfo.gPrx}</h3>
        <h3>🏎️ Circuit Name: {raceInfo.crct}</h3>
        {raceInfo.winner && <h3>🏆 Winner: {raceInfo.winner}</h3>}
        <h3>📅 Date: {raceInfo.endDate}</h3>
        <h3>⏰ Start Time: {raceInfo.time} UTC</h3>
        {raceInfo.isPostponedOrCanceled && <h3>⚠️ Status : Postponed or Cancelled</h3>}
        
        </div>
        </>
       )
    }

  return (
    <>

    <div className='schedule-container'>

        <div className='entire-calendar'>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar']}>
        <DateCalendar className='calendar'
            sx={{
                width: '80vw',
                color: 'white',
                '& .MuiPickersArrowSwitcher-button': {
                    color: 'white',
                    // backgroundColor: 'white',
                  },
                  '& .MuiDayCalendar-weekDayLabel': {
                    color: 'white',
                  },
                  '& .MuiPickersCalendarHeader-switchViewButton': {
                    color: 'white',
                  },
              }}
          referenceDate={dayjs()}
          views={['year', 'month', 'day']}
          onChange={handleDateChange}
          slots={{
            day: RaceDayCustomize,
        }}
        />
      </DemoContainer>
    </LocalizationProvider>
        </div>

        
        <p className='info-disclaimer'>*click on specific date for info</p>
        

        <CustomizeRaceInfo raceInfo={selectedRaceInfo} />

       
    </div>
    
    </>

  )
}

export default Schedule
