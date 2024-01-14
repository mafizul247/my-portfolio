import React, { useRef } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneSquareAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import github from './../../../assets/icons/github.png'
import linkedin from './../../../assets/icons/linkedin.png'
import facebook from './../../../assets/icons/facebook.png'
import email from './../../../assets/icons/red-email.jpg'
import phone from './../../../assets/icons/phone.png'
import whatsApp from './../../../assets/icons/WhatsApp_icon.png.webp'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contact' className='mx-4 md:mx-16 bg-slate-100 shadow-lg px-4 py-12 md:p-12'>
            <h2 className='text-3xl font-bold text-gray-800 text-center mb-12'>Contact</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] bg-gray-700 text-white p-4 md:p-8 rounded-md'>
                <div>
                    <h2 className='text-3xl font-semibold mb-4'>Send Message Me</h2>
                    <div>
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered input-primary w-full mb-4" required />
                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered input-primary w-full mb-4" required />
                            <input type="text" name='phone' placeholder="Your Phone" className="input input-bordered input-primary w-full mb-4" required />
                            <input type="text" name='subject' placeholder="Subject" className="input input-bordered input-primary w-full mb-4" required />
                            <textarea name='message' className="textarea textarea-primary w-full mb-4" placeholder="Details Message" required></textarea>
                            <div className='text-center'>
                                <input className='btn' type="submit" value="Send Message" />
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <h2 className='text-3xl font-semibold mb-4'>Get in Touch</h2>
                    <div>
                        <p className='mb-3'>I'm a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest! if you're looking for a developer to add to your team, I'd love to hear from you</p>
                        <div className='space-y-2'>
                            <div className='flex items-center gap-2'>
                                <FaMapMarkerAlt className='text-2xl' />
                                <address>
                                    29/22, Tajmohal Road, <br />
                                    Block-C  Mohammadpur, <br />
                                    Dhaka, Bangladesh
                                </address>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FaEnvelope className='text-2xl' />
                                <a href="tel:+8801912007697">+88 01912007697</a>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FaPhoneSquareAlt className='text-2xl' />
                                <a href="mailto:mafizul247@gmail.com">mafizul247@gmail.com</a>
                            </div>
                        </div>
                        <div className='mt-6 flex gap-4'>
                            <a href="https://github.com/mafizul247"><img className='h-12 w-12 border-2 border-gray-100 p-2 rounded-full hover:bg-yellow-500 hover:border-yellow-600' src={github} alt='Github' /></a>
                            <a href="https://www.linkedin.com/in/mafizul-islam-john-24721b145/"><img className='h-12 w-12 border-2 border-gray-100 p-2 rounded-full hover:bg-yellow-500 hover:border-yellow-600' src={linkedin} alt='LinkeDin' /></a>
                            <a href="https://www.facebook.com/mafizul.islam.john/"><img className='h-12 w-12 border-2 border-gray-100 p-2 rounded-full hover:bg-yellow-500 hover:border-yellow-600' src={facebook} alt='Facebook' /></a>
                            <a href="mailto:mafizul247@gmail.com"><img className='h-12 w-12 border-2 border-gray-100 p-2 rounded-full hover:bg-yellow-500 hover:border-yellow-600' src={email} alt='Email' /></a>
                            <a href="tel:+8801912007697"><img className='h-12 w-12 border-2 border-gray-100 p-2 rounded-full hover:bg-yellow-500 hover:border-yellow-600' src={phone} alt='Phone' /></a>
                            <a href="https://wa.me/+8801711337820"><img className='h-12 w-12 border-2 border-gray-100 p-2 rounded-full hover:bg-yellow-500 hover:border-yellow-600' src={whatsApp} alt='Phone' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;