"use client"
import React, { useState } from 'react'
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


type Inputs = {
    title: string
    desc: string
}

const schema = yup.object().shape({
    title: yup.string().required('Name most be required'),
    desc: yup.string().required('Write a comment here'),
});

const ManagePolicies = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });


    let [data, setdata] = useState({
        title: "",
        desc: ""
    });


    const onSubmit = (data?: any) => {
        setdata({ title: data.title, desc: data.desc });
    };

    return (
        <div className='w-full bg-[#F2F4F7] h-screen'>
            <div className='flex justify-center items-center flex-col'>
                <h1 className='font-600 text-[16px] text-[#344054] mt-[20px]'>ManagePolicies</h1>
                <form className='mt-3' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col'>
                        <h1 className='font-semibold text-[14px] text-[#344054] mb-[10px]'>Title</h1>

                        <Controller
                            name="title"
                            control={control}
                            render={({ field }) => <input {...field}
                                placeholder="e.g. age restrictions"
                                className='w-full rounded-[8px] py-[13px] px-[14px] border border-[1px] shadow border-[#d0d5dd] text-[16px]' />}
                        />
                        {errors.title && <span className='font-bold text-red-600'>{errors.title.message}</span>}
                        {/* <input placeholder="e.g. age restrictions" {...register("title")} className='w-full rounded-[8px] py-[13px] px-[14px] border border-[1px] shadow border-[#d0d5dd] text-[16px]'/> */}
                    </div>

                    <div className='mt-[20px] flex flex-col'>
                        <h1 className='font-semibold text-[14px] text-[#344054] my-[10px]'>Description</h1>
                        {/* <input placeholder={"Enter a description..."} {...register("desc", { required: true })} className='w-[361px] rounded-[8px] px-[14px] pb-[200px] pt-[5px] border border-[1px] text-[16px] shadow border-[#d0d5dd]'/> */}

                        <Controller
                            name="desc"
                            control={control}
                            render={({ field }) => <input {...field}
                                placeholder="Enter a description..."
                                className='w-[361px] rounded-[8px] px-[14px] pb-[200px] pt-[5px] border border-[1px] text-[16px] shadow border-[#d0d5dd]' />}
                        />
                        {errors.desc && <span className='font-bold text-red-600'>{errors.desc.message}</span>}

                    </div>
                    <p className='w-[300px]'>{data.title} {data.desc}</p>
                    {/* errors will return when field validation fails  */}
                    <button className='py-[12px] px-[20px] w-[361px] mx-auto bg-[#7f56d9] absolute bottom-[20px] left-[10px] right-[10px] text-white rounded-[8px] border border-[1px] border-[#7f56d9]'>Save</button>
                </form>
            </div>
        </div>
    )
}

export default ManagePolicies