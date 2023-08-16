"use client"
import React from 'react';
import CustomTabView from './CustomTabView';
import { tabs } from '../ViewTricketsdata';

const CustomTabViews = () => {
  return (
    <div className="app p-4 bg-white ">
      <h1 className="mb-4 text-[14px] text-[#6941c6] font-600">Tab view</h1>
      <CustomTabView tabs={tabs} />
    </div>
  );
};


export default CustomTabViews;
