import React from 'react';
import github from './../../assets/icons/github.png'
import linkedin from './../../assets/icons/linkedin.png'
import facebook from './../../assets/icons/facebook.png'
import email from './../../assets/icons/red-email.jpg'
import phone from './../../assets/icons/phone.png'
import whatsApp from './../../assets/icons/WhatsApp_icon.png.webp'

const Social = () => {
    return (
        <div className='mt-4 flex gap-4'>
            <a href="https://github.com/mafizul247"><img className='h-12 w-12 border-2 border-gray-700 p-2 rounded-full hover:bg-yellow-500 hover:border-yellow-600' src={github} alt='Github' /></a>
            <a href="https://www.linkedin.com/in/mafizul-islam-john-24721b145/"><img className='h-12 w-12 border-2 border-gray-700 p-2 rounded-full hover:bg-yellow-500 hover:border-yellow-600' src={linkedin} alt='LinkeDin' /></a>
            <a href="https://www.facebook.com/mafizul.islam.john/"><img className='h-12 w-12 border-2 border-gray-700 p-2 rounded-full hover:bg-yellow-500 hover:border-yellow-600' src={facebook} alt='Facebook' /></a>
            <a href="mailto:mafizul247@gmail.com"><img className='h-12 w-12 border-2 border-gray-700 p-2 rounded-full hover:bg-yellow-500 hover:border-yellow-600' src={email} alt='Email' /></a>
            <a href="tel:+8801912007697"><img className='h-12 w-12 border-2 border-gray-700 p-2 rounded-full hover:bg-yellow-500 hover:border-yellow-600' src={phone} alt='Phone' /></a>
            <a href="https://wa.me/+8801711337820"><img className='h-12 w-12 border-2 border-gray-700 p-2 rounded-full hover:bg-yellow-500 hover:border-yellow-600' src={whatsApp} alt='Phone' /></a>
        </div>
    );
};

export default Social;