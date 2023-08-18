"use client"
import React from 'react'
import LocationDetails from '../ViewTrickets/LocationDetails';
import Buttons from './TripCardComponents/Buttons';
import TripButtonSection from './TripCardComponents/TripBottomSection';

const TripCard = (props?:any) => {
  let {fromlocation,tolocation,totalHour} = props;
  return (
    <div className='bg-secondary-100 w-scren h-[200px] py-4'>
    <div className='w-[377px] h-auto mx-auto relative top-[30px] bg-base-white p-4 rounded-[10px]'>
    <LocationDetails fromlocation={fromlocation} tolocation={tolocation} totalHour={totalHour} page="trip" colors={["#344054","#101828","#667085"]}/>
    <Buttons leftbtn="Refundable" rightbtn="Rs. 200"/>
    <TripButtonSection orgName="Nepal Yatayat" review="4.5" totalprice="RS 2000" price="Rs 1950" orgLocation="Kalanki - Hetauda - Janakpur" seatNo="10"/>
    </div>
    </div>
   )
}

export default TripCard