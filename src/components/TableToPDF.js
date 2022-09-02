import React from 'react';
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';


const TableToPDF = () => {
    const doc = new jsPDF();

    autoTable(doc, { html: '#table_with_data' })
    const downloadTable = () => {
        const doc = new jsPDF();

        autoTable(doc, { html: '#table_with_data' });
        doc.save('table.pdf')
    }
    return (
        <div className='w-2/3 mx-auto mt-16'>
            <button onClick={downloadTable} className='btn my-6'>Download Table</button>
            <div class="overflow-x-auto">
                <table class="table w-full" id='table_with_data'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>

                        <tr class="active">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>

                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableToPDF;