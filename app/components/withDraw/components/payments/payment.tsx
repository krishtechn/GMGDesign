"use client"
import React, { useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import RadioButton from './RadioButton'
import { LuPhoneCall } from 'react-icons/lu';

const SignupSchema = yup.object().shape({
    number: yup.number().required(),
    amount: yup.number().required(),
});

const payment = () => {
    let PaymentOptions = ["Eswea", "Khalti", "Bank Account"]

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
        <div className='w-full shadow-xl mt-[20px] bg-base-white border-[1px] py-[20px] px-[15px] border-[#eeeeee] rounded-[14px]'>
            <p className='font-400 text-[16px] leading-[24px] text-[#8f8f8f]'>Please select your desired wallet and amount and procced to payment page.</p>
            <RadioButton options={PaymentOptions} />

            <form onSubmit={handleSubmit(onSubmit)} method='' className='mt-[30px]'>

                <div className='flex flex-col mb-[10px]'>
                    <label className='font-500 text-[14px] text-secondary-700'>Phone Number</label>
                    <div className='flex items-center w-full pt-[13px] pr-[6px] pb-[13px] pl-[6px] gap-[8px] rounded-[3px] border-b-[1px] border-indigo-100'>
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
                        <LuPhoneCall color='#667085' width={"20px"} height={"20px"} />
                    </div>
                    {errors.number && <p className='font-300 text-[14px] text-error-600 mb-[10px]'>Number must be required.</p>}
                </div>

                <div className='flex flex-col mb-[10px]'>
                    <label className='font-500 text-[14px] text-secondary-700'>Amount</label>
                    <div className='flex items-center w-full pt-[13px] pr-[6px] pb-[13px] pl-[6px] gap-[8px] rounded-[3px] border-b-[1px] border-indigo-100'>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <input
                                    placeholder="Amount"
                                    onBlur={onBlur}
                                    className='w-full font-medium text-[14px] outline-none border-none'
                                    onChange={onChange}
                                    value={value}
                                />
                            )}
                            name="amount"
                        />
                    </div>
                    {errors.amount && <p className='font-300 text-[14px] text-error-600 mb-[10px]'>Amount Must be required.</p>}
                </div>


                <div className='flex justify-between items-center mt-[20px]'>
                    <p className='font-semibold ml-[10px] text-[14px] leading-[20px] text-grayBlue-900'>Rs 500</p>
                    <p className='font-semibold ml-[10px] text-[14px] leading-[20px] text-grayBlue-900'>Rs 10,00</p>
                    <p className='font-semibold ml-[10px] text-[14px] leading-[20px] text-grayBlue-900'>Rs 15,00</p>
                    <p className='font-semibold ml-[10px] text-[14px] leading-[20px] text-grayBlue-900'>Rs 20,00</p>
                </div>

                <button type='submit' className='w-full mt-[20px] py-[16px] px-[28px] rounded-[12px] bg-primary border-[1px] border-primary-600 text-[18px] text-base-white'>Continue</button>
            </form>


        </div>
    )
}

export default payment