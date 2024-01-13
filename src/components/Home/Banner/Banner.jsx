import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa'

import resume from './../../../assets/resume/CV_of_Mafizul_Islam_John.pdf'
import image from './../../../assets/images/john4.png'
import github from './../../../assets/icons/github.png'
import linkedin from './../../../assets/icons/linkedin.png'
import facebook from './../../../assets/icons/facebook.png'
import email from './../../../assets/icons/red-email.jpg'
import phone from './../../../assets/icons/phone.png'

const Banner = () => {

    return (
        <div id='home' className='pt-32 py-12 mx-4 md:mx-16 grid gric-cols-1 md:grid-cols-2 gap-12 items-center bg-slate-100 px-4 md:px-12 shadow-lg'>
            <div className='text-gray-800'>
                <h1 className='text-5xl font-bold'>Hi, I'm </h1>
                <h1 className='text-6xl font-bold my-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 '>Mafizul Islam John</h1>
                <h1 className='text-3xl text-red-500 font-bold my-3'>I am Front-End Developer</h1>
                <p className='text-xl font-semibold text-justify'>Self-taught programmer with proficiency in the MERN stack, solid understanding of HTM5, JavaScript, React Js and CSS, Bootstrap Tailwind. Committed to continuous learning and staying updated with industry trends. Skilled in creating responsive user interfaces and building RESTful APIs.</p>
                <div className='flex gap-4 mt-4'>
                    <button className="btn btn-success" ><a className='flex gap-2' href={resume} download>Download Resume <FaDownload /></a></button>
                    <button className="btn btn-outline btn-success">Contact Me</button>
                </div>
                <div className='mt-4 flex gap-4'>
                    <a href=""><img className='h-12 w-12 border-2 border-gray-700 p-2 rounded-full hover:bg-yellow-500 hover:border-yellow-600' src={github} alt='Github' /></a>
                    <a href=""><img className='h-12 w-12 border-2 border-gray-700 p-2 rounded-full hover:bg-yellow-500 hover:border-yellow-600' src={linkedin} alt='LinkeDin' /></a>
                    <a href=""><img className='h-12 w-12 border-2 border-gray-700 p-2 rounded-full hover:bg-yellow-500 hover:border-yellow-600' src={facebook} alt='Facebook' /></a>
                    <a href=""><img className='h-12 w-12 border-2 border-gray-700 p-2 rounded-full hover:bg-yellow-500 hover:border-yellow-600' src={email} alt='Email' /></a>
                    <a href=""><img className='h-12 w-12 border-2 border-gray-700 p-2 rounded-full hover:bg-yellow-500 hover:border-yellow-600' src={phone} alt='Phone' /></a>
                </div>
            </div>
            <div >
                <img className='lg:w-3/4 md:mx-auto rounded-full' src={image} alt="John" />
            </div>
        </div>
    );
};

export default Banner;