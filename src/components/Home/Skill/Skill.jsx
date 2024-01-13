import React from 'react';
import htmlLogo from './../../../assets/icons/html-icon.webp'
import cssLogo from './../../../assets/icons/css.jpg'
import bootstrapLogo from './../../../assets/icons/bootstrap-5-logo-icon.webp'
import taildwindLogo from './../../../assets/icons/tailwind-css.jpg'
import javascriptLogo from './../../../assets/icons/javascript.webp'
import reactLogo from './../../../assets/icons/react.png'
import daisyuiLogo from './../../../assets/icons/daisyui.png'
import firebaseLogo from './../../../assets/icons/firebase.png'
import emailJsLogo from './../../../assets/icons/email-js.png'
import rechartLogo from './../../../assets/icons/recharts.png'
import transtacLogo from './../../../assets/icons/Tanstack.png'
import expressJsLogo from './../../../assets/icons/express-js.png'
import nodeJsLogo from './../../../assets/icons/node-js.png'
import mongoDBLogo from './../../../assets/icons/MongoDB_Logo.svg.png'
import restAPILogo from './../../../assets/icons/restAPI.png'
import jwtLogo from './../../../assets/icons/jwt.png'
import axiosLogo from './../../../assets/icons/axios.png'
import stripeLogo from './../../../assets/icons/stripe.png'
import sqlServerLogo from './../../../assets/icons/sql-server.png'
import mySqlLogo from './../../../assets/icons/Mysql_logo.png'
import gitHubLogo from './../../../assets/icons/github.png'
import figmaLogo from './../../../assets/icons/figma.png'
import netlifyLogo from './../../../assets/icons/netlify.png'
import vercelLogo from './../../../assets/icons/vercel.png'
import npmLogo from './../../../assets/icons/Npm-logo.svg.png'
import vsCodeLogo from './../../../assets/icons/Visual_Studio_Code.png'
import devToolsLogo from './../../../assets/icons/window-dev-tools.svg'
import gitBashLogo from './../../../assets/icons/GitBashLogo.jpg'
import postManLogo from './../../../assets/icons/Postman.png'
import thunderClientLogo from './../../../assets/icons/thunder.png'

const Skill = () => {
    return (
        <div id='skill' className='mx-4 md:mx-16 bg-slate-50 shadow-lg px-4 py-12 md:p-12 '>
            <h2 className='text-3xl font-bold text-gray-800 text-center mb-12'>Skill</h2>
            {/* FrontEnd  */}
            <div className='mb-8'>
                <h3 className='text-2xl font-bold my-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600'>Frontend:</h3>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4'>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={htmlLogo} alt="HTML" />
                        <h3 className='text-xl font-bold text-gray-700'>HTML</h3>
                    </div>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={cssLogo} alt="CSS" />
                        <h3 className='text-xl font-bold text-gray-700'>CSS</h3>
                    </div>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={bootstrapLogo} alt="Bootstrap" />
                        <h3 className='text-xl font-bold text-gray-700'>Bootstrap</h3>
                    </div>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={taildwindLogo} alt="Taildwind CSS" />
                        <h3 className='text-xl font-bold text-gray-700'>Tailwind</h3>
                    </div>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={javascriptLogo} alt="JavaScript" />
                        <h3 className='text-xl font-bold text-gray-700'>JavaScript</h3>
                    </div>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={reactLogo} alt="React JS" />
                        <h3 className='text-xl font-bold text-gray-700'>React JS</h3>
                    </div>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={daisyuiLogo} alt="Daisy UI" />
                    </div>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={firebaseLogo} alt="Firebase" />
                    </div>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={emailJsLogo} alt="Email JS" />
                        <h3 className='text-xl font-bold text-gray-700'>Email JS</h3>
                    </div>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={rechartLogo} alt="Rechart" />
                    </div>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <h3 className='text-xl font-bold text-gray-700'>Context API</h3>
                    </div>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={transtacLogo} alt="TransTack" />
                    </div>
                </div>
            </div>
            {/* BackEnd  */}
            <div className='mb-8'>
                <h3 className='text-2xl font-bold my-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600'>Backend:</h3>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4'>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={expressJsLogo} alt="Express JS" />
                        <h3 className='text-xl font-bold text-gray-700'>Express</h3>
                    </div>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={nodeJsLogo} alt="Node JS" />
                    </div>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={mongoDBLogo} alt="MongoDB" />
                        {/* <h3 className='text-xl font-bold text-gray-700'>MongoDB</h3> */}
                    </div>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={restAPILogo} alt="Rest API" />
                        <h3 className='text-xl font-bold text-gray-700'>Rest API</h3>
                    </div>
                </div>
            </div>
            {/* Familiar  */}
            <div className='mb-8'>
                <h3 className='text-2xl font-bold my-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600'>Familiar:</h3>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4'>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={jwtLogo} alt="JWT JS" />
                        <h3 className='text-xl font-bold text-gray-700'>JWT</h3>
                    </div>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={axiosLogo} alt="Axios" />
                    </div>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={stripeLogo} alt="Stripe" />
                    </div>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={sqlServerLogo} alt="SQL Server" />
                    </div>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={mySqlLogo} alt="My SQL" />
                    </div>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={gitHubLogo} alt="GitHub" />
                        <h3 className='text-xl font-bold text-gray-700'>GitHub</h3>
                    </div>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={figmaLogo} alt="Figma" />
                        <h3 className='text-xl font-bold text-gray-700'>Figma</h3>
                    </div>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={netlifyLogo} alt="Netlify" />
                    </div>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={vercelLogo} alt="Vercel" />
                        <h3 className='text-xl font-bold text-gray-700'>Vercel</h3>
                    </div>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={npmLogo} alt="NPM" />
                        {/* <h3 className='text-xl font-bold text-gray-700'>NPM</h3> */}
                    </div>
                </div>
            </div>
            {/* Tools  */}
            <div className='mb-8'>
                <h3 className='text-2xl font-bold my-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600'>Tools:</h3>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4'>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={vsCodeLogo} alt="VS Code" />
                        <h3 className='text-xl font-bold text-gray-700'>VS Code</h3>
                    </div>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={devToolsLogo} alt="Dev Tool" />
                        <h3 className='text-xl font-bold text-gray-700'>Dev Tool</h3>
                    </div>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={gitBashLogo} alt="Git Bash" />
                        <h3 className='text-xl font-bold text-gray-700'>Bash</h3>
                    </div>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={postManLogo} alt="Postman" />
                        {/* <h3 className='text-xl font-bold text-gray-700'>Git Bash</h3> */}
                    </div>
                    <div className='flex justify-center items-center gap-2 border-2 border-orange-600 p-4 rounded-md '>
                        <img className='h-10' src={thunderClientLogo} alt="Thunder Client" />
                        <h3 className='text-xl font-bold text-gray-700'>Thunder</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;