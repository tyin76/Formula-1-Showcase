import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom';
import Typography from '@mui/material/Typography';
  

function Driver({driverId}) {

    const [data, setData] = useState(null)

    switch (driverId) {
        case 4665:
            console.log("MAX")
            break;
        case 5579: 
            console.log("LANDO")
            break;
        case 5498:
            console.log("LECLERC")
            break;
        case 4686:
            console.log("SAINZ")
            break;
        case 5752:
            console.log("PIASTRI")
            break;
        case 4472: 
            console.log("PEREZ")
            break;
        case 5503:
            console.log("RUSSEL")
            break;
        case 868:
            console.log("HAMILTON")
            break;
        case 348:
            console.log("ALONSO")
            break;
        case 4775:
            console.log("STROLL")
            break;
        case 4396:
            console.log("HULK")
            break;
        case 5652:
            console.log("YUKI")
            break;
        case 4510:
            console.log("RIC")
            break;
        case 5789:
            console.log("Bearman")
            break;
        case 5501:
            console.log("GASLY")
            break;
        case 4623:
            console.log("K-MAG")
            break;
        case 5592:
            console.log("ALBON")
            break;
        case 4678:
            console.log("OCON")
            break;
        case 5682:
            console.log("ZHOU")
            break;
        case 5745:
            console.log("SARGEANT")
            break;
        case 4520:
            console.log("BOTTAS")
            break;
    }

    const url = `https://f1-motorsport-data.p.rapidapi.com/stats?driverId=${driverId}`;
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
            for (var i = 0; i < result.length; i++) {
                const { avgFinish, avgStart, poles, year, starts, top5, top10, rank, wins, points } = result[i];
                const driver = {
                    avgFinish: avgFinish,
                    avgStart: avgStart,
                    points: points,
                    poles: poles,
                    rank: rank,
                    starts: starts,
                    top5: top5,
                    top10: top10,
                    wins: wins,
                    year: year
                  };
                  array.push(driver)
            }

            setData(array)
        } catch (error) {
            console.error(error);
        }

     }
     getAPI();
}, [])

var text = "LOADING..."

console.log(data)
if (data) {
    text = data[0].year;
}

        
          

        
return (
   <>
    <Typography>
       {text}
    </Typography>
   </>

    )
}

export default Driver