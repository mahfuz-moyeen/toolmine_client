import React from 'react';
import TypeAnimation from 'react-type-animation';
import portfolioBg from '../../../image/portfolio.gif'
import cv from '../../../cv/Mahfuz_Zahan_Moyeen.pdf';
import about from '../../../image/about-images.png'
import { Progress } from 'react-daisyui';
import project01 from '../../../image/project01.png'
import project02 from '../../../image/project02.png'
import project03 from '../../../image/project03.png'


const MyPortfolio = () => {


    return (
        <div className='bg-black pb-10'>
            <div class="hero min-h-screen bg-neutral" style={{ background: `url(${portfolioBg})`, backgroundSize: 'cover' }}>
                <div class="hero-content">
                    <div class="max-w-lg">
                        <h1 class="text-5xl font-bold text-gray-200">

                            Hello,
                            <br />
                            I'm Mahfuz <span className='text-primary'>Moyeen</span>

                        </h1>
                        <p class="py-6 text-2xl text-gray-400">
                            <TypeAnimation
                                cursor={true}
                                sequence={[
                                    "Fullstack Web Developer",
                                    2000,
                                    "Front-end Developer",
                                    2000,
                                    "UI & UX Designer",
                                    2000
                                ]}
                                wrapper="a"
                                repeat={1}
                            />
                        </p>
                        <p className='text-gray-500'>As a full-stack web developer, I am passionate about working for a software company where I can harness my talents in web design, front-end, back-end, UI and UX design web development to provide excellent customer service.</p>
                        <a href={cv} className=' text-primary border-b-2 border-primary p-2 my-5'>Get Resume</a>
                    </div>
                </div>
            </div>

            <div>
                <div class="card rounded-none lg:card-side bg-black shadow-xl">
                    <figure className='w-3/6'><img src={about} alt="Album" /></figure>
                    <div class="card-body p-10">
                        <h2 class="card-title text-gray-300 text-3xl py-5">My Info</h2>
                        <hr />
                        <p className='text-lg text-gray-400'>
                            I'm Mahfuz Zahan Moyeen.
                            <br />
                            My Email : mahfuzmoyeen01@gmail.com
                            <br />
                            Address: Rajshahi, Bangladesh
                            <br />
                            <div className='py-5 flex flex-row gap-4'>
                                <a href="https://www.linkedin.com/in/mahfuz-moyeen/">
                                    <svg className='w-12 h-12 fill-indigo-500 hover:fill-primary' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                                </a>
                                <a href="https://github.com/mahfuz-moyeen">
                                    <svg className='w-12 h-12 fill-indigo-500 hover:fill-primary' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                                </a>
                            </div>
                            <span class="card-title text-gray-300 text-3xl py-5">Education</span>
                            <hr />
                            B.sc ( 2021-Present )
                            <br />
                            Electrical and Electronic Engineering (EEE)
                            <br />
                            Green University of Bangladesh, Dhaka, Bangladesh
                            <br /><br />
                            Diploma in Engineering ( 2016 - 2019 )
                            <br />
                            Electronics Engineering
                            <br />
                            Rajshahi Polytechnic Institute, Rajshahi,Bangladesh

                        </p>
                    </div>
                </div>
            </div>
            <div className='w-11/12 mx-auto'>
                <h1 className='text-3xl text-gray-300 my-10'>My Skills</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <div class="card w-full mx-auto bg-accent shadow-xl">
                        <div class="card-body text-gray-300">
                            <h2 class="card-title mx-auto mb-3">Front-End</h2>
                            <p className='flex p-1 justify-evenly items-center'>
                                <span className='text-lg'>React.js </span>
                                <Progress className="progress progress-info bg-slate-600 w-56" value={85} max={100} />
                            </p>
                            <p className='flex p-1 justify-evenly items-center'>
                                <span className='text-lg'>Tailwind</span>
                                <Progress className="progress progress-info bg-slate-600 w-56" value={93} max={100} />
                            </p>
                            <p className='flex p-1 justify-evenly items-center'>
                                <span className='text-lg'>Bootstrap</span>
                                <Progress className="progress progress-info bg-slate-600 w-56" value={90} max={100} />
                            </p>
                            <p className='flex p-1 justify-evenly items-center'>
                                <span className='text-lg'>JavaScript</span>
                                <Progress className="progress progress-info bg-slate-600 w-56" value={85} max={100} />
                            </p>
                            <p className='flex p-1 justify-evenly items-center'>
                                <span className='text-lg'>HTML5</span>
                                <Progress className="progress progress-info bg-slate-600 w-56" value={95} max={100} />
                            </p>
                            <p className='flex p-1 justify-evenly items-center'>
                                <span className='text-lg'>CSS3</span>
                                <Progress className="progress progress-info bg-slate-600 w-56" value={90} max={100} />
                            </p>


                        </div>
                    </div>

                    <div class="card w-full mx-auto bg-accent shadow-xl">
                        <div class="card-body text-gray-300">
                            <h2 class="card-title mx-auto mb-3">Back-End</h2>
                            <p className='flex p-1 justify-evenly items-center'>
                                <span className='text-lg'>Node.js</span>
                                <Progress className="progress progress-info bg-slate-600 w-56" value={80} max={100} />
                            </p>
                            <p className='flex p-1 justify-evenly items-center'>
                                <span className='text-lg'>Express.js</span>
                                <Progress className="progress progress-info bg-slate-600 w-56" value={72} max={100} />
                            </p>
                            <p className='flex p-1 justify-evenly items-center'>
                                <span className='text-lg'>MongoDB</span>
                                <Progress className="progress progress-info bg-slate-600 w-56" value={75} max={100} />
                            </p>
                            <p className='flex p-1 justify-evenly items-center'>
                                <span className='text-lg'>JWT </span>
                                <Progress className="progress progress-info bg-slate-600 w-56" value={70} max={100} />
                            </p>

                        </div>
                    </div>
                    <div class="card w-full mx-auto bg-accent shadow-xl">
                        <div class="card-body text-gray-300">
                            <h2 class="card-title mx-auto mb-3">Other</h2>
                            <p className='text-lg'>
                                DaisyUI, Flowbite, AOS, React Router, React Hook form, React Query,
                                Swiper.js, Material UI, stripe,js, React-Toastify
                            </p>
                        </div>
                    </div>
                    <div class="card w-full mx-auto bg-accent shadow-xl">
                        <div class="card-body text-gray-300">
                            <h2 class="card-title mx-auto mb-3">Tools</h2>
                            <p className='text-lg'>
                                VS Code, Chrome Dev-tool, Github, Codepen, Terminal, Photoshop, Illustrator, Figma
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-11/12 mx-auto'>
                <h1 className='text-3xl text-gray-300 my-10'>My Project</h1>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>

                    <div class="card w-96 bg-accent text-gray-300 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={project01} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center">
                            <h2 class="card-title">Dronezia</h2>
                            <span className='badge badge-outline'>Fullstack</span>
                            <p className='text-left'>It is a warhouse website. <br />
                                <ul className='list-disc'>
                                    <li>User can see all product</li>
                                    <li>User can update product stock quantity (increase/decrease),Name,price etc</li>
                                    <li>Add new product delete his product to server</li>
                                </ul>
                            </p>
                            <div class="card-actions flex-col">
                                <p>Use: react.js React Router,DaisyUI, Node.js, Mongodb, Html5,css3</p>
                                <a href="https://dronezia.web.app/" class="btn btn-primary">Live Site</a>
                            </div>
                        </div>
                    </div>

                    <div class="card w-96 bg-accent text-gray-300 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={project02} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Tesla-m3</h2>
                            <span className='badge badge-outline'>front-end</span>
                            <p className='text-left'>It is a Reviews website.<br />
                                <ul className='list-disc'>
                                    <li>User can product Reviews</li>
                                    <li>user can user Dashboard some chart</li>
                                </ul>

                            </p>
                            <div class="card-actions flex-col">
                                <p>Use: react.js React Router, Html5,css3</p>
                                <a href="https://tesla-m3.netlify.app/" class="btn btn-primary">Live Site</a>
                            </div>
                        </div>
                    </div>
                    <div class="card w-96 bg-accent text-gray-300 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={project03} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Mr time watch shop</h2>
                            <span className='badge badge-outline'>Js,htlm,css</span>
                            <p className='text-left'>a Random chooses product website.<br />
                                <ul className='list-disc'>
                                    <li>User can chooses 4 product</li>
                                    <li>user can tap choose 1 for me then user got e random product</li>
                                </ul>
                            </p>
                            <div class="card-actions flex-col">
                                <p>use: js, ES6, html5, css3</p>
                                <a href="https://mr-time-watch-shop.netlify.app/" class="btn btn-primary">Live Site</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default MyPortfolio;