import moment from "moment";
import React, { useState } from "react";

const Final = () => {
    const [date, setDate] = useState('')
    const dateFormat = 'MM-DD-YYYY';
    const toDateFormat = moment(new Date(date)).format(dateFormat);


    const validateDate = moment(toDateFormat, dateFormat, true).isValid();
    return (
        <div className="min-h-screen flex justify-center items-center">
            <input type="text" placeholder="MM-DD-YYYY" className="input input-bordered w-full max-w-xs bg-white text-black" onChange={(e) => setDate(e.target.value)} />
            <div>
                {
                    validateDate ? <p className="text-green-300">Correct format</p> : <p className="text-red-500">Wrong format</p>
                }
            </div>
        </div>
    );
}

export default Final