import React from 'react';

const Footer = () => {
    return (
        <div className='items-center p-4 bg-neutral text-neutral-content'>
            <p className='text-center'><small>Copyright &copy; {new Date().getFullYear()} All Rigth Reserved By Mafizul Islam</small></p>
        </div>
    );
};

export default Footer;