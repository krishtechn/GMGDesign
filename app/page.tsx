"use client"
import React, { useState } from 'react'
import 'swiper/css';import Loadingscreen from './Loadingscreen';

const page = () => {
  return (
  <>
    {/* <ManageVehicles /> */}
    <Loadingscreen loading={true} animationduration={"1"} animationdelay={"5s"}/>
  </>
  )
}

export default page