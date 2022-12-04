import React, { Fragment } from 'react';
import Button from './Button';
import styles from './ErrorModal.module.css';
import { createPortal } from 'react-dom';

const ModalBackDrop = ({ setErrors }) => {
    return <div className=' fixed top-0 left-0 w-full z-10 h-screen bg-[rgba(0,0,0,0.75)]' onClick={() => setErrors(undefined)} />
};

const ModalOverlay = ({ errors, setErrors }) => {
    return <div className={`fixed h-60 top-32 left-[25%] w-2/4 z-50 overflow-hidden  flex flex-col justify-around bg-gray-700 p-8 rounded-md shadow-lg shadow-black ${styles.errorModal__transition}`}>
        <header>
            <h2 className='text-3xl text-error'>{errors.title}!</h2>
        </header>
        <div>
            <p className='text-white'>{errors.message}</p>
        </div>
        <footer className='flex justify-end'>
            <Button onClick={() => setErrors(undefined)} className='btn'>Okay</Button>
        </footer>
    </div>
}

const ErrorModal = ({ setErrors, errors }) => {

    return (
        <Fragment>
            {createPortal(<ModalBackDrop setErrors={setErrors} />, document.getElementById('modal-backdrop-root'))}

            {createPortal(<ModalOverlay setErrors={setErrors} errors={errors} />, document.getElementById('modal-overlay-root'))}
        </Fragment>
    );
};

export default ErrorModal;