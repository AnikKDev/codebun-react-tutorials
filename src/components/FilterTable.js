import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const FilterTable = () => {
    // store input data
    const [text, setText] = useState('')
    // console.log(text);
    const products = [
        { id: 1, brand: "Samsung", model: "a50", category: "Smartphone", availability: "Available" },
        { id: 2, brand: "Samsung", model: "s21", category: "Smartphone", availability: "Available" },
        { id: 3, brand: "Apple", model: "13pro", category: "Smartphone", availability: "Available" },
        { id: 4, brand: "Apple", model: "12pro", category: "Smartphone", availability: "Available" },
        { id: 5, brand: "Apple", model: "xe", category: "Smartphone", availability: "Available" },
        { id: 6, brand: "Redmi", model: "note 8 pro", category: "Smartphone", availability: "Available" },
        { id: 7, brand: "Redmi", model: "note8", category: "Smartphone", availability: "Available" },
        { id: 8, brand: "Oppo", model: "a21", category: "Smartphone", availability: "Available" },
        { id: 9, brand: "Oppo", model: "a22", category: "Smartphone", availability: "Available" },
        { id: 10, brand: "Oppo", model: "", category: "Smartphone", availability: "Available" },
        { id: 11, brand: "HP", model: "15-ay", category: "Laptop", availability: "Available" },
        { id: 12, brand: "HP", model: "pavilion", category: "Laptop", availability: "Available" },
        { id: 13, brand: "Dell", model: "aspirion", category: "Laptop", availability: "Available" },
        { id: 14, brand: "Acer", model: "nitro", category: "Laptop", availability: "Available" },
        { id: 15, brand: "Acer", model: "nitro", category: "Laptop", availability: "Available" },
    ];
    const filter = products.filter(product => product.brand.toLowerCase().includes(text.toLowerCase()))
    // console.log(filter)

    // store selection state variable
    const [select, setSelect] = useState('')

    const filteredProducts = products.filter(p => p.category === select)

    // console.log(filtered)
    return (
        <div className='w-4/5 mx-auto mt-16'>
            <div className='flex justify-between my-8'>
                <div>
                    <label htmlFor="">Search By Brand</label>
                    <input onChange={(e) => setText(e.target.value)} type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <label htmlFor="">Category</label>
                    <select onChange={e => setSelect(e.target.value)} class="select select-bordered w-full max-w-xs">
                        <option selected>All</option>
                        <option>Smartphone</option>
                        <option>Laptop</option>
                    </select>
                </div>
            </div>
            <div class="overflow-x-auto">
                <table class="table w-full text-center">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Category</th>
                            <th>Avaiability</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            select === "All" ?
                                products.map(product =>
                                    <tr>
                                        <th>{product.id}</th>
                                        <td>{product.brand}</td>
                                        <td>{product.model}</td>
                                        <td>{product.category}</td>
                                        <td>{product.availability}</td>
                                    </tr>
                                )
                                :
                                filteredProducts.map(product =>
                                    <tr>
                                        <th>{product.id}</th>
                                        <td>{product.brand}</td>
                                        <td>{product.model}</td>
                                        <td>{product.category}</td>
                                        <td>{product.availability}</td>
                                    </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FilterTable;