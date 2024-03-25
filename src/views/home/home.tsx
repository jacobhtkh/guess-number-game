import * as React from 'react';

export const HomeView: React.FunctionComponent = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='max-w-md border border-solid rounded-md border-sky-600 shadow-md shadow-sky-600'>
        <div className='px-6 py-4 text-center'>
          <h2 className=' mb-3 text-xl font-semibold tracking-tight text-sky-600'>
            Guess My Number!
          </h2>
          <h4 className='mb-2 text-sky-900'>
            Think of a number between 1 and 10,000.
          </h4>
          <p className='mb-5'>
            Click the button below to get the computer to start guessing what it
            is.
          </p>
          <button
            className='px-4 py-2 text-sm shadow bg-sky-100 shadow-sky-600 text-sky-700 
      hover:bg-sky-600 hover:text-sky-100 rounded-md'
          >
            Start guessing
          </button>
        </div>
      </div>
    </div>
  );
};