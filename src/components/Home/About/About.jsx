import React from 'react';
import { FaDownload } from 'react-icons/fa';

import resume from './../../../assets/resume/CV_of_Mafizul_Islam_John.pdf'
import github from './../../../assets/icons/github.png'
import linkedin from './../../../assets/icons/linkedin.png'
import facebook from './../../../assets/icons/facebook.png'
import email from './../../../assets/icons/red-email.jpg'
import phone from './../../../assets/icons/phone.png'
import image from './../../../assets/images/john2.png'

const About = () => {
    return (
        <div id='about' className='mx-4 md:mx-16 bg-lime-50 shadow-lg px-4 py-12 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div className='hidden md:block'>
                <img className='rounded-full' src={image} alt="John" />
            </div>
            <div className='space-y-3'>
                <h2 className='text-3xl font-bold text-gray-800'>About Me</h2>
                <hr className='w-36 my-2 border-2 border-gray-600' />
                <h3 className='text-6xl font-bold'>I'm <br /> <span className='text-6xl font-bold my-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600'>Mafizul Islam John</span></h3>
                <p className='text-justify font-semibold text-xl'>As a skilled web developer, I specialize in creating stunning and functional websites. With expertise in HTML, CSS, and JavaScript, React, MongoDB, Node js, I design responsive and intuitive user interfaces. Committed to delivering high-quality code and ensuring seamless user experiences. Passionate about staying updated with the latest web development trends and constantly refining my skills to provide innovative solutions.</p>
                <div className='flex gap-4 mt-4'>
                    <button className="btn btn-success" ><a className='flex gap-2' href={resume} download>Download Resume <FaDownload /></a></button>
                    <button className="btn btn-outline btn-success">Projects</button>
                </div>
                <div className='mt-4 flex gap-4'>
                    <a href=""><img className='h-12 w-12 border-2 border-gray-700 p-2 rounded-full' src={github} alt='Github' /></a>
                    <a href=""><img className='h-12 w-12 border-2 border-gray-700 p-2 rounded-full' src={linkedin} alt='LinkeDin' /></a>
                    <a href=""><img className='h-12 w-12 border-2 border-gray-700 p-2 rounded-full' src={facebook} alt='Facebook' /></a>
                    <a href=""><img className='h-12 w-12 border-2 border-gray-700 p-2 rounded-full' src={email} alt='Email' /></a>
                    <a href=""><img className='h-12 w-12 border-2 border-gray-700 p-2 rounded-full' src={phone} alt='Phone' /></a>
                </div>
            </div>
        </div>
    );
};

export default About;