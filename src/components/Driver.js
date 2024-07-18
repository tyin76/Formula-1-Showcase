import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom';

function Driver() {

    const url = 'https://f1-motorsport-data.p.rapidapi.com/stats?driverId=5579';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a1ac7dbe9bmsh47512af3179ad70p1f25adjsn0d37243aa5dc',
            'x-rapidapi-host': 'f1-motorsport-data.p.rapidapi.com'
        }
};

  

   async function getAPI() {
            try {
                const response =  await fetch(url, options);
                const result =  await response.json();
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        }

        useEffect(() => {
            getAPI();
        }, [])
    

return (
    
   <>
    {/* <button onClick={getAPI}>Fetch</button> */}
   
   
   </>

    )
}

export default Driver
