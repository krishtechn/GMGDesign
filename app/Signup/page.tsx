"use client"
import React, { useState, useEffect } from 'react'
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineUser } from 'react-icons/ai';
import { LuPhoneCall } from 'react-icons/lu';
import { HiOutlineMail } from 'react-icons/hi';
import Sheet from 'react-modal-sheet';

const SignupSchema = yup.object().shape({
    fullName: yup.string().required(),
    number: yup.number().required(),
    email: yup.string().email().matches(/^(?!\@*,)/)
});

const signup = () => {
    const [isOpen, setOpen] = useState(false);

    let [data, setdata] = useState<any>();
    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(SignupSchema)
    });

    const onSubmit = (data?: any) => setdata(data);

    return (
        <div className='flex justify-center items-center flex-col'>
            {/* <style>
                {`
          body{
            background:black;
            color:white;
          }
      `}
            </style> */}
            <div className='w-[359px] border-[1px] border-[#eaecf0] rounded-[10px] p-[20px] my-[40px]'>
                <h1 className='font-semibold text-[#6941c6] text-[14px] mb-[20px]'>Personal</h1>

                <button onClick={() => setOpen(true)}>Open sheet</button>

                <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
                    <Sheet.Container>
                        <Sheet.Header>
                            <h1 className='font-semibold text-[#6941c6] text-[14px] mb-[20px]'>Personal</h1>
                        </Sheet.Header>
                        <Sheet.Content>
                            <Sheet.Scroller>
                                <p className='font-semibold text-[#6941c6] text-[14px] mb-[20px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus eum doloremque dignissimos sed. Deleniti ut, omnis ipsum tenetur sequi sed nulla enim dolores officiis, quasi rem quas. Adipisci obcaecati nulla voluptate ipsa! Dolorum consectetur perspiciatis vero libero rem ratione inventore provident exercitationem. Explicabo deleniti veniam, repellendus esse quas similique quae sed rem eius nihil tempore deserunt laboriosam repellat laborum dolor iure ea nam necessitatibus aperiam! Nihil, voluptate quas! Eos explicabo veniam, quos, assumenda reprehenderit cum exercitationem qui accusamus placeat dolore, repellat cumque? Fugit a soluta natus distinctio earum culpa sapiente, aspernatur architecto tenetur quod iste similique aliquam non corporis? Cum?</p>
                            </Sheet.Scroller>
                        </Sheet.Content>
                    </Sheet.Container>
                    <Sheet.Backdrop />
                </Sheet>

                <form onSubmit={handleSubmit(onSubmit)} method=''>

                    <div className='flex flex-col mb-[10px]'>
                        <label className='font-400 text-[12px] text-[#667085]'>Full Name</label>
                        <div className='flex items-center w-full pt-[13px] pr-[6px] pb-[13px] pl-[6px] gap-[8px] rounded-[3px] border-b-[1px] border-indigo-100'>
                            <AiOutlineUser color='#667085' width={"20px"} height={"20px"} />
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <input
                                        placeholder="Full Name"
                                        onBlur={onBlur}
                                        className='w-full font-medium text-[14px] outline-none border-none'
                                        onChange={onChange}
                                        value={value}
                                    />
                                )}
                                name="fullName"
                            />
                        </div>
                        {errors.fullName && <p className='font-300 text-[14px] text-red-600 mb-[10px]'>Name most be required.</p>}
                    </div>

                    <div className='flex flex-col mb-[10px]'>
                        <label className='font-400 text-[12px] text-[#667085]'>Number</label>
                        <div className='flex items-center w-full pt-[13px] pr-[6px] pb-[13px] pl-[6px] gap-[8px] rounded-[3px] border-b-[1px] border-indigo-100'>
                            <LuPhoneCall color='#667085' width={"20px"} height={"20px"} />
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <input
                                        placeholder="977-9871731313"
                                        onBlur={onBlur}
                                        onChange={onChange}
                                        className='w-full font-medium text-[14px] outline-none border-none'
                                        value={value}
                                    />
                                )}
                                name="number"
                            />
                        </div>
                        {errors.number && <p className='font-300 text-[14px] text-red-600 mb-[10px]'>Number must be required.</p>}
                    </div>

                    <div className='flex flex-col mb-[10px]'>
                        <label className='font-400 text-[12px] text-[#667085]'>Number</label>
                        <div className='flex items-center w-full pt-[13px] pr-[6px] pb-[13px] pl-[6px] gap-[8px] rounded-[3px] border-b-[1px] border-indigo-100'>
                            <HiOutlineMail color='#667085' width={"20px"} height={"20px"} />
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <input
                                        placeholder="riya@gmail.com"
                                        onBlur={onBlur}
                                        className='w-full font-medium text-[14px] outline-none border-none'
                                        onChange={onChange}
                                        value={value}
                                    />
                                )}
                                name="email"
                            />
                        </div>
                        {errors.email && <p className='font-300 text-[14px] text-red-600 mb-[10px]'>Email Must be required.</p>}
                    </div>

                    <button type='submit' className='w-full mt-[20px] py-[16px] px-[28px] rounded-[12px] bg-[#6941c6] border-[1px] border-[#7f56d9] text-[18px] text-[#fff]'>Submit</button>
                </form>

                <h1 className='font-semibold text-[#6941c6] text-[14px] mt-[20px]'>User Details</h1>
                {data && <>
                    <div className='my-[10px]'>
                        <label className='font-400 text-[12px] text-[#667085]'>Full Name</label>
                        <p className='font-300 text-[14px] text-black mb-[10px]'>{data.firstName}</p>
                    </div>

                    <div className='my-[10px]'>
                        <label className='font-400 text-[12px] text-[#667085]'>Number</label>
                        <p className='font-300 text-[14px] text-black mb-[10px]'>{data.number}</p>
                    </div>

                    <div className='my-[10px]'>
                        <label className='font-400 text-[12px] text-[#667085]'>Email</label>
                        <p className='font-300 text-[14px] text-black mb-[10px]'>{data.email}</p>
                    </div>
                </>}

            </div>

        </div>
    )
}

export default signup