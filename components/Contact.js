import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";

function Contact() {
    const { register, handleSubmit } = useForm();
    const onSubmit = formdata => {
        window.location.href = `mailto:sujananand0@gmail.com?subject=${formdata.subject}&body= Hi, my name is ${formdata.name} ,${formdata.message} (${formdata.email})`;
    }
  return (
    <div className='h-screen overflow-x-hidden flex relative flex-col max-w-md mx-auto text-center md:text-left md:text-row  justify-evenly items-center'>
            <h3 className='absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl'>Contact</h3>
            <div className='flex flex-col space-y-7 mt-24'>
                <h4 className='text-xl text-center'>We have have Got just what you need!</h4>
                <div className='space-y-4'>
                    <div className='flex items-center space-x-3 justify-center'>
                        <PhoneIcon className='h-6 w-6 animate-pulse' />
                        <p className='text-xl'>+91 9743248659 | +91 6364703667</p>
                    </div>


                    <div className='flex items-center space-x-3 justify-center'>
                        <EnvelopeIcon className='h-8 w-8 animate-pulse' />
                        <p className='text-xl'>poornimagroups1@gmail.com </p>
                    </div>

                    <div className='flex space-x-3 justify-center'>
                        <MapPinIcon className='h-8 w-8 animate-pulse' />
                        <p className='text-xl text-center w-60 md:w-full'>No 19 Chinnamma Layout, Cholanagar Hebbal Bangalore 560032</p>
                    </div>

                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-60 sm:w-full  mx-auto' action="">
                    <div className='space-y-2 flex flex-col md:flex '>
                        <input {...register("name")} placeholder='Name' className="contactInput" type="text" />
                        <input {...register("email")} placeholder='Email' className="contactInput" type="email" />
                    </div>
                    <input {...register("subject")} placeholder="Subject" className="contactInput" type="text" />
                    <textarea {...register("message")} placeholder='Message' className="contactInput" name="" id=""></textarea>
                    <button type='submit' className='bg-[#F7AB0A] px-4 py-3 rounded-sm font-bold text-black'>Submit</button>
                </form>
            </div>
        </div>
  )
}

export default Contact