import React, { useState } from 'react';

const Blog = () => {
    const [text, setText] = useState([]);
    const arr = [
        { name: 'apple', price: 20, description: 'good' },
        { name: 'mango', price: 20, description: 'good' },
        { name: 'banana', price: 20, description: 'good' },
        { name: 'orange', price: 20, description: 'good' },
        { name: 'berries', price: 20, description: 'good' },
        { name: 'Blueberries', price: 20, description: 'good' },
    ];

    const handleSearch = (e) => {
        const newArr = arr.filter((el) => el.name.includes(e.target.value));
        // console.log(newArr);
        setText(newArr)
    };

    return (
        <div>
            <h1 className='text-white text-center text-3xl font-semibold my-10'>
                <span className='p-1 border-b-2 border-primary'>Our <span className='text-primary'>Blogs</span></span>
            </h1>
            <div className='w-8/12 mx-auto mb-10'>
                <div tabIndex="0" className="my-3 collapse collapse-arrow border border-base-300 bg-white rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How will you improve the performance of a React Application?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Lazy loading has become one of the ways to optimize React applications to speed up the load time.<br></br>
                            react-lazyload (npm i react-lazyload)<br />
                            react-lazy-load-image-component(npm i --save <br />react-lazy-load-image-component)<br />
                            react-lazy-load(npm install --save react-lazy-load)<br />
                            uselazy(npm install uselazy)<br />
                            Optimizing responsive applications by lazy loading elements and images for efficiency is very important in today's development. These libraries make it easier than ever to speed up the performance of your feedback app and improve the overall user experience. Libraries such as Gatsby-Image and React-Lazyload are more suitable for lazy loading image gallery applications, and more suitable for other libraries such as eugenics elements, and for response projects.
                        </p>
                    </div>
                </div>

                <div tabIndex="0" className="my-3 collapse collapse-arrow border border-base-300 bg-white rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What are the different ways to manage a state in a React application?
                    </div>
                    <div className="collapse-content">
                        <p>Manage my React app :
                            Local state
                            Global states
                            <br /><br />

                            Local (UI) State - Local state is the data that we manage on one or the other component. Local states are often manipulated in response using the useState hook.
                            For example, to show or hide a model element, or to track form values ​​such as form submission, will require a local state when the form is inactive and the value of a form's inputs.
                            <br /><br />
                            Global (UI) State - The global state is the data that we manage across multiple elements. A global state is required when we want to receive and update data anywhere in our app, or at least in multiple elements.</p>
                    </div>
                </div>

                <div tabIndex="0" className="my-3 collapse collapse-arrow border border-base-300 bg-white rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How does prototypical inheritance work?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Prototype Inheritance is a feature of JavaScript that is used to add methods and features to objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, to get and set an [[prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set up using __proto__.
                        </p>
                    </div>
                </div>

                <div tabIndex="0" className="my-3 collapse collapse-arrow border border-base-300 bg-white rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                    </div>
                    <div className="collapse-content">
                        <p>if we update the hook value like this: product = [...]; then it will show us an error because we declare/ destructuring the hook as constant (const); but if we use it as let then it will run or set its value. there is an issue. if we don't use setProducts to update the state then the component will not re-render. setProducts is done the asynchronous task. then it will merge the new value and replace the old value then re-render that component</p>
                    </div>
                </div>



                <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-white rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                    </div>
                    <div className="collapse-content">
                        <pre>
                            {`
             const arr = [
                 { name: 'apple', price: 20,description:'good' },
                 { name: 'mango', price: 20, description:'good'},
                 { name: 'banana', price: 20, description:'good'},
                 { name: 'orange', price: 20, description:'good' },
                 { name: 'berries', price: 20, description:'good' },
                 { name: 'Blueberries', price: 20, description:'good'},
             ];
             
             export const Homepage = () => {
                 const handleSearch = (e) => {
                     const newArr = arr.filter((item) => item.name.includes(e.target.value));
             
                     console.log(newArr);
                 };
             
                 return <input type="text" onChange={handleSearch} />;
             };
             `}
                        </pre>
                        <label htmlFor="my-modal-3" className="btn modal-button">Try Code</label>
                    </div>
                </div>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <div className='text-center'>
                            <p>Example: apple, banana, mango, orange, berries, Blueberries</p>
                            Search:  <input className='input input-bordered bg-white ' placeholder='search name' type="text" onChange={handleSearch} />
                            {text?.map(t => <p>{t?.name}</p>)}
                        </div>
                    </div>
                </div>

                <div tabIndex="0" className="my-3 collapse collapse-arrow border border-base-300 bg-white rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is a unit test? Why should write unit tests?
                    </div>
                    <div className="collapse-content">
                        <p>Unit testing is a testing method that tests an individual software unit in isolation. This involves verifying the output of a function or component for a given input.
                            For React components, this may mean checking whether the element is rendering correctly for specific props.</p>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Blog;