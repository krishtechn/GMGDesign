import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { HiOutlineHome } from 'react-icons/hi';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import ViewTrickets from '@/app/ViewTrickets/page';
import TripCard from '../../components/ManageBooking/TripCard'
import { Fromlocation, Tolocation, totalHour } from '../../components/ViewTricketsdata';
import BookingDetails from '../BookingDetails/BookingDetails';

const BottomSheetItems = () => {
    let items = ["Home", "Dashboard", "Booking", "Profile"];


    const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);
    const [selectedSection, setSelectedSection] = useState('Home');


    const handleSectionChange = (section?: any) => {
        setSelectedSection(section);
    };

    return (
        <div className={`bottom-sheet ${isBottomSheetOpen ? 'open' : ''}`}>
            <div className="content">
    

                {selectedSection === 'Home' && <>
                <TripCard fromlocation={Fromlocation} tolocation={Tolocation} totalHour={totalHour} />
                    <TripCard fromlocation={Fromlocation} tolocation={Tolocation} totalHour={totalHour} />
                </>}
                {selectedSection === 'Dashboard' && <div>Dashboard page</div>}
                {selectedSection === 'Booking' && <div><ViewTrickets /></div>}
                {selectedSection === 'Profile' && <div><BookingDetails /></div>} 
         
            </div>
            <div className="bottom-navigation section-buttons absolute left-0 right-0 bottom-0 w-full bg-white text-center text-black h-[74px] flex justify-between items-center rounded-tl-20 rounded-tr-20">
                {items.map((items?: any, index?: number) => {
                    return <div onClick={() => handleSectionChange(items)} className='cursor-pointer py-3 px-5 justify-center items-center flex flex-col before:bg-indigo-700'>
                        <div className={`${items == selectedSection ? "text-[#6941c6] font-semibold" : "text-[#98a2b3]"} w-[24px] h-[24px]`}>
                            {items == "Home" && <HiOutlineHome />}
                            {items == "Dashboard" && <MdOutlineDashboardCustomize />}
                            {items == "Booking" && <BsFillCartCheckFill />}
                            {items == "Profile" && <CgProfile />}
                        </div>
                        <p className={`${items == selectedSection ? "text-[#6941c6] font-bold" : "text-[#98a2b3]"} text-[12px] font-400 text-center`}>{items}</p>
                    </div>
                })}
            </div >
        </div >
    )
}

export default BottomSheetItems