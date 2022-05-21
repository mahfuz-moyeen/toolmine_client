import React, { useEffect, useState } from 'react';
import { Countdown } from 'react-daisyui';


const CountDown = () => {
    const [value, setValue] = useState(60)

    useEffect(() => {
        const timer = setTimeout(() => {
            setValue((v) => (v <= 0 ? value : v - 1))
        }, 1000)

        return () => {
            clearTimeout(timer)
        }
    }, [value])

    return (
        <div className='w-11/12 mx-auto my-10 bg-white py-3 rounded-br-3xl rounded-tl-3xl'>
            <h1 className='text-center my-5 text-3xl'>Our new products <span className='text-primary'>coming soon</span></h1>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center pb-5">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <Countdown className="font-mono text-5xl" value={15} />
                    days
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <Countdown className="font-mono text-5xl" value={10} />
                    hours
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <Countdown className="font-mono text-5xl" value={24} />
                    min
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <Countdown className="font-mono text-5xl" value={value} />
                    sec
                </div>
            </div>
            <div className="form-control mb-5">
                <div className="input-group justify-center">
                    <input type="text" placeholder='Your Email' className="border-2 p-2 max-w-sm lg:w-8/12 text-black" />
                    <button className="btn btn-primary">
                        Subscribe Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CountDown;