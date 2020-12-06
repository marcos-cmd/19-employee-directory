import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import API from '../utils/API';

const sortModel = [
    {
        field: 'id',
        sort: 'asc',
    },
];

export const EmployeeGrid = (props) => {
    const [rows, setRows] = useState([]);
    const [employees, setEmployees] = useState([])
    const getEmployees = async () => {
        const response = await API.get("/?results=100&seed=employee&nat=us");
        const newArr = [];
        console.log(response.data.results);
        response.data.results.forEach(({ name, picture, gender, phone, email, dob, location }, index) => {
            newArr.push({
                id: index + 1,
                picture: <img src={picture.thumbnail} alt="profilepic" className="img-fluid z-depth-1" />,
                first: name.first,
                last: name.last,
                gender,
                phone,
                email,
                dob: dob.date.replace(/T.*/, ''),
                street: `${location.street.number} ${location.street.name}`,
                city: `${location.city}`,
                state: `${location.state}`,
                postcode: `${location.postcode}`
            })
        });
        setRows(newArr);
    }

    useEffect(() => {
        getEmployees()
    }, [])

    const datatable = {
        columns: [
            { field: 'id', label: 'ID', width: 75 },
            { field: 'picture', label: 'Picture', width: 75 },
            { field: 'first', label: 'First Name', width: 130 },
            { field: 'last', label: 'Last Name', width: 130 },
            { field: 'gender', label: 'Gender', width: 110 },
            { field: 'phone', label: 'Phone', width: 140 },
            { field: 'email', label: 'E-mail', width: 250 },
            { field: 'dob', label: 'Date of Birth', width: 140 },
            { field: 'street', label: 'Street', width: 190 },
            { field: 'city', label: 'City', width: 130 },
            { field: 'state', label: 'State', width: 140 },
            { field: 'postcode', label: 'Postal Code', width: 140 },
        ],
        rows: rows,
    };

    return (

        <MDBDataTable
            hover
            autoWidth
            striped
            bordered
            entriesOptions={[15, 30, 50, 100]}
            entries={15}
            pagesAmount={5}
            data={datatable}
        />)
}
