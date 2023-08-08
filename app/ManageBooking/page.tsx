import React from 'react'
import TripCard from '../components/ManageBooking/TripCard'
import { Fromlocation,Tolocation,totalHour} from '../components/ViewTricketsdata';


const ManageBooking = () => {
  return (
    <div className='bg-[#F2F4F7] w-full flex flex-col justify-center items-center'>
     <TripCard fromlocation={Fromlocation} tolocation={Tolocation} totalHour={totalHour}/>
     <TripCard fromlocation={Fromlocation} tolocation={Tolocation} totalHour={totalHour}/>
     <TripCard fromlocation={Fromlocation} tolocation={Tolocation} totalHour={totalHour}/>
     <TripCard fromlocation={Fromlocation} tolocation={Tolocation} totalHour={totalHour}/>
    </div>
  )
}

export default ManageBooking