import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import img from './../../assets/images/img1.jpg'

const Footer = () => {
    return (
        <>
            <div className='bg-gray-200 pt-4'>
                <p className='text-center text-gray-900'>Copyright &copy; {new Date().getFullYear()} All Rigth Reserved By <a href="#">Mafizul Islam</a></p>
            </div>
        </>
    );
};

export default Footer;