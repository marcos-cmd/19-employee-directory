import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import API from '../utils/API';

const sortModel = [
    {
        field: 'id',
        sort: 'asc',
    },
];

const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "avatar", headerName: "Avatar", width: 100,
        renderCell: (params) => (
            <img src={params.value} alt="avatar" />
        )
    },
    { field: "name", headerName: "Name", width: 170 },
    { field: "gender", headerName: "Gender", width: 110 },
    { field: "phone", headerName: "Phone", width: 140 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "dob", headerName: "Date of Birth", width: 180 },
    { field: "address", headerName: "Address", width: 370 },
];

export const EmployeeGrid = () => {
    const [employees, setEmployees] = useState([])
    const getEmployees = async () => {
        const response = await API.get("/?results=100&seed=employee&nat=us");
        const newArr = []
        let employeeId = response.data.results.length
        response.data.results.forEach(({ name, picture, gender, phone, email, dob, location }) => {
            newArr.push({
                id: employeeId--,
                avatar: picture.thumbnail,
                name: `${name.first} ${name.last}`,
                gender,
                phone,
                email,
                dob: dob.date.replace(/T.*/, ''),
                address: `${location.street.number} ${location.street.name}, ${location.city}, ${location.state} ${location.postcode}`
            })
        });
        setEmployees(newArr)
    }

    useEffect(() => {
        getEmployees();
    }, [])

    return (
        <div style={{ height: "100vh", width: '100%' }}>
            <DataGrid sortModel={sortModel} rows={employees} columns={columns} />
        </div>
    );
}
