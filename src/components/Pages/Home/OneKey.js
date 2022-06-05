import React from 'react';
import oneKeyLogo from '../../../image/onekeylogo.png'
import oneKeyBg from '../../../image/onekeybg.jpg'
const OneKey = () => {
    return (
        <div className='bg-white'>
            <div class="w-10/12 mx-auto p-5 flex flex-col lg:flex-row justify-center items-center">
                <div class="p-5">
                    <img className='w-48 py-3' src={oneKeyLogo} alt="" />
                    <p>Customize your tools & equipment by dialing in performance, track your items from anywhere, and manage inventory your way.</p>
                    <div class="py-5">
                        <button class="btn btn-primary">Learn More</button>
                    </div>
                </div>
                <div>
                <figure><img src={oneKeyBg} alt="oneKeyBg" /></figure>
                </div>
            </div>
        </div>
    );
};

export default OneKey;