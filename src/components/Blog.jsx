import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-5xl font-bold text-center bg-gradient-to-r from-purple-500 to-pink-500 h-48 flex items-center justify-center'>Blog</h2>
            <div className='my-5'>
                <h3 className='text-lg font-medium'>1. When should we use context API?</h3>
                <p className='text-slate-600'>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
            </div>
            <div className='my-5'>
                <h3 className='text-lg font-medium'>2. What is a custom hook?</h3>
                <p className='text-slate-600'>Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app.</p>
            </div>
            <div className='my-5'>
                <h3 className='text-lg font-medium'>3. What is useRef?</h3>
                <p className='text-slate-600'>A hook is a special function which enables one use state and other React features without writing ES6 class components which are generally considered difficult to understand, use and master.
                    useRef hook is part of the React Hooks API. It is a function which takes a maximum of one argument and returns an Object. The returned object has a property called current whose value is the argument passed to useRef. If you invoke it without an argument, the returned object's current property is set to undefined. The code below illustrates how to invoke the useRef hook in functional components.</p>
            </div>
            <div className='my-5'>
                <h3 className='text-lg font-medium'>4. What is useMemo?</h3>
                <p className='text-slate-600'>React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.</p>
            </div>
        </div>
    );
};

export default Blog;