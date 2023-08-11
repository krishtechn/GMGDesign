"use client"
import React, { useState } from 'react';
import TabViewContent from './TabViewContent';
import { tabs } from '../ViewTricketsdata';

const CustomTabView = ({ tabs }: any) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index?: any) => {
        setActiveTab(index);
    };

    return (
        <div className="custom-tab-view border p-4">
            <div className="flex">
                {tabs.map((tab?: any, index?: number) => (<button key={index} className={`px-4 py-2 ${index === activeTab ? 'border-y-2 border-[#6941c6] border-t-0 text-[14px] text-[#6941c6] font-600' : 'text-[#98a2b3]'}`} onClick={() => handleTabClick(index)}>{tab.label}</button>))}
            </div>
            <div className="mt-4">
                <h2>{tabs[activeTab].label}</h2>
                <h1>{tabs[activeTab].label == "Boarding" ? <TabViewContent items={tabs} id={0} /> : tabs[activeTab].label == "Drop" ? <TabViewContent items={tabs} id={1} /> : tabs[activeTab].label == "Break" ? <TabViewContent items={tabs} id={2} /> : <TabViewContent items={tabs} id={2} />}</h1>
            </div>
        </div >
    );
};

export default CustomTabView;
