"use client"
import React, { useState } from 'react'

const Selectseat = () => {
    let data = [
        "M-ticket Supported",
        "M-ticket Supported",
        "CCTV",
        "Emergency Contact Number",
        "Charging Point",
        "No blankets/linens"
    ]

    const [visible,setVisible] = useState(3);
    const itemstoshow = data.slice(0,visible);
    const [loading,setLoading] = useState(false);
    const loadMore = () => {
        setLoading(true);
        setTimeout(()=>{
            setVisible(visible + 3); // Increase the number of visible items
            setLoading(false);
        },3000)
      };


  return (
    <div>
      {itemstoshow.map(item => (
        <div>{item}</div>
      ))}
      {visible < data.length && (
        <button onClick={loadMore}>Load More</button>
      )}

        {/* {loading == true?<h1>loading</h1>: ""} */}
        {loading ? (
        <p>Loading...</p>
      ) : (
        visible < data.length && (
          <button onClick={loadMore}>Load More</button>
        )
      )}

    </div>
    
    
  )
}

export default Selectseat