import React from 'react'
import TripCard from '../components/ManageBooking/TripCard'
import { Fromlocation,Tolocation,totalHour} from '../components/ViewTricketsdata';


const ManageBooking = () => {
  return (
    <div className='bg-secondary-100 w-full flex flex-col justify-center h-screen items-center'>
     <TripCard fromlocation={Fromlocation} tolocation={Tolocation} totalHour={totalHour}/>
    </div>
  )
}

export default ManageBooking