import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import img from './../../assets/images/img1.jpg'

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <aside>
                    {/* <img className='h-12 w-12 rounded-md' src={img} alt="Logo" /> */}
                    <p className='text-xl font-bold'>Mafizul Islam John</p>
                    <address>
                        29/22, Tajmohal Road, <br />
                        Block-C  Mohammadpur, <br />
                        Dhaka, Bangladesh
                    </address>
                </aside>
                <nav>
                    <header className="footer-title">Contact Me</header>
                    <div>
                        <p><b>Phone: </b><a href="tel:+8801912007697">+88 01912007697</a></p>
                        <p><b>Email: </b><a href="mailto:mafizul247@gmail.com">mafizul247@gmail.com</a></p>
                    </div>
                </nav>
                <nav>
                    <header className="footer-title">Find Me</header>
                    <div className="grid grid-flow-col gap-4">
                        <a href="#"><FaGithub className='h-6 w-6' /></a>
                        <a href="#"><FaLinkedin className='h-6 w-6' /></a>
                        <a href="#"><FaFacebook className='h-6 w-6' /></a>
                    </div>
                </nav>
            </footer>

            <div className='bg-gray-200 pt-4'>
                <p className='text-center text-gray-900'>Copyright &copy; {new Date().getFullYear()} All Rigth Reserved By <a href="#">Mafizul Islam</a></p>
            </div>
        </>
    );
};

export default Footer;