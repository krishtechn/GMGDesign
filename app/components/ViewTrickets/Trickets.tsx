"use client"
import React, { useState } from 'react';
import PassengerDetails from '../../components/ViewTrickets/PassengerDetails';
import LocationDetails from '../../components/ViewTrickets/LocationDetails';
import PaymentDetails from '../../components/ViewTrickets/PaymentDetails';
import BusCompany from '../../components/ViewTrickets/BusCompany';
import BrandDetails from '../../components/ViewTrickets/BrandDetails';
import { Fromlocation, Tolocation, passengerdetails, totalHour, payment, Buscompany, Brand } from '../../components/ViewTricketsdata';

const Trickets = () => {
    return (
        <div className='bg-secondary-100 w-full h-screen'>
            <div className='w-[353px] h-[505px] relative top-[30px] bg-base-white p-4 rounded-[10px] mx-auto my-0'>

                <PassengerDetails passengerdetails={passengerdetails} />

                <LocationDetails fromlocation={Fromlocation} tolocation={Tolocation} totalHour={totalHour} />

                <hr className='mt-5 text-md-r text-secondary-200'  />

                <BusCompany details={Buscompany} />

                <PaymentDetails payment={payment} />


                <BrandDetails brands={Brand} />


                <div className='w-full h-full flex justify-center mt-[30px]'>
                    <img src='https://cdn.pixabay.com/photo/2013/07/12/14/45/qr-code-148732_1280.png' className='w-[100px] h-[100px]' />
                </div>
            </div>
        </div>
    )
}

export default Trickets