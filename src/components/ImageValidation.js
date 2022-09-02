import React, { useState } from 'react';

const ImageValidation = () => {
    const [error, setError] = useState(() => null)
    const handleImageSubmit = e => {
        e.preventDefault();
        const image = e.target.image.value;
        if (!image) {
            setError('image is required');
            return false;
        } else {
            setError(null)
        }
        if (!image.match(/\.(jpg|jpeg|png|gif)$/)) {
            setError('select valid image.');
            return false;
        } else {
            setError(null)
        }

    }


    return (
        <div className="min-h-screen flex justify-center items-center">

            <form onSubmit={handleImageSubmit}>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload file</label>
                <input name='image' className="block w-full  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />

                {
                    error && <p className='text-error'>{error}</p>
                }

                <button type='submit' className="btn btn-sm px-4 my-5 block mx-auto">Submit</button>
            </form>


        </div>
    );
};

export default ImageValidation;