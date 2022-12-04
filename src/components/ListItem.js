import React from 'react';

const ListItem = (props) => {
    const { itemName, itemCat } = props;
    return (
        <div className='border border-3  my-6 bg-white rounded-md shadow-md shadow-black'>
            <div className='flex justify-between'>
                <div className='border-2 text-center bg-gray-800 rounded-md p-3'>
                    <h1 className="text-xl text-white font-bold">
                        Item Name
                    </h1>
                    <h5 className="text-xl">
                        {itemName}
                    </h5>
                </div>
                <div className='border-2 text-center bg-gray-800 rounded-md p-3'>
                    <h1 className="text-xl text-white font-bold">
                        Item Category
                    </h1>
                    <h5 className="text-xl">
                        {itemCat}
                    </h5>
                </div>
            </div>

        </div>
    );
};

export default ListItem;