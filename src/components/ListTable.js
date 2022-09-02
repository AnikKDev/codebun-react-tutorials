import React from 'react';

const ListTable = () => {
    const listTable = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Dalton' },
        { id: 3, name: 'Nedved' },
        { id: 4, name: 'Meisa' },
        { id: 5, name: 'Abidal' },
        { id: 6, name: 'Terry' },
        { id: 7, name: 'Yaya' },
        { id: 8, name: 'Carlos' },
        { id: 9, name: 'Johansson' },
    ]
    return (
        <div className='w-1/2 my-16 mx-auto'>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead className='text-center'>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {/* <!-- row 1 --> */}
                        {
                            listTable.map(data =>
                                <tr>
                                    <th>{data.id}</th>
                                    <td>{data.name}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListTable;