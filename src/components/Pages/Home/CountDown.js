import React, { useEffect, useState } from 'react';
import { Countdown } from 'react-daisyui';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const CountDown = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [value, setValue] = useState(20)
    const [min, setMin] = useState(2);
    const [hour, setHour] = useState(10);
    const [day, setDay] = useState(3);

    useEffect(() => {
        const timer = setTimeout(() => {
            setValue((v) => (v <= 0 ? value : v - 1))
        }, 1000)

        return () => {
            clearTimeout(timer)
        }
    }, [value])

    if (value === 0) {
        setMin(min - 1)
        setValue(60)
    }

    if (min === 0) {
        setHour(hour - 1)
        setMin(60)
    }

    if (hour === 0) {
        setDay(day - 1)
        setHour(24)
    }


    const onSubmit = async data => {
        fetch('https://toolmine-app.herokuapp.com/subscribe', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Subscribe done, Then our offer is open we will message your email')
                reset();
            })

    }

    return (
        <div className='w-11/12 mx-auto my-20 bg-white py-3 rounded-br-3xl rounded-tl-3xl'>
            <h1 className='text-center my-5 text-3xl'>Our new products <span className='text-primary'>coming soon</span></h1>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center pb-5">

                <span className="countdown hidden">
                    <span style={{ value: value }}></span>
                </span>

                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <Countdown className="font-mono text-5xl" value={day} />
                    days
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <Countdown className="font-mono text-5xl" value={hour} />
                    hours
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <Countdown className="font-mono text-5xl" value={min} />
                    min
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <Countdown className="font-mono text-5xl" value={value} />
                    sec
                </div>
            </div>
            <form className='w-10/12 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control mb-5">
                    <div className="input-group justify-center">
                        <input type="email" placeholder='Your Email' className="border-2 border-primary p-2 max-w-sm lg:w-8/12 text-black"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'email is Required'
                                }
                            })} />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                        <button type='submit' className="btn btn-primary">
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CountDown;