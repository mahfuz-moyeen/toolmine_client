import React from 'react';
import logo from '../../../image/tool_logo.png'
const Footer = () => {
    return (
        <div className='mt-10'>
            <footer class="footer p-10 bg-accent text-base-100">
                <div>
                    <div className='flex items-center gap-1'>
                        <img src={logo} alt="toolmine logo" className='w-16 h-16' />
                        <h1 className='text-3xl'>TOOL<span className='text-primary'>MINE</span></h1>
                    </div>
                    <p>Toolmine Manufacturer Ltd.<br />123-D , Road-A, D-Block<br />Mirpur, Dhaka</p>
                </div>
                <div>
                    <span class="footer-title">Services</span>
                    <p class="link link-hover">Safety Solutions</p>
                    <p class="link link-hover">Tools Support</p>
                    <p class="link link-hover">Home Delivery</p>
                    <p class="link link-hover">Advertisement</p>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <p class="link link-hover">About us</p>
                    <p class="link link-hover">Contact</p>
                    <p class="link link-hover">Jobs</p>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <p class="link link-hover">Terms of use</p>
                    <p class="link link-hover">Privacy policy</p>
                    <p class="link link-hover">Cookie policy</p>
                </div>
            </footer>
            <footer class="footer footer-center p-4 bg-accent text-base-200">
                <div>
                    <p>Copyright © 2022 - All right reserved by Toolmine Manufacturer Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;