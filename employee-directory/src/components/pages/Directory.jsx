import React from 'react';
import { EmployeeGrid } from "../EmployeeGrid";
import { MDBContainer, MDBRow, MDBCol, MDBTypography, MDBCard } from "mdbreact";


const DirectoryPage = () => {
    return (
        <MDBContainer fluid>
            <MDBRow>
                <MDBCol className="pt-5 pb-5" style={{ color: "#00796b", backgroundColor: "f7f6f0" }}>
                    <MDBTypography tag='h1' variant="h3" className="pt-5 pb-4" >Employee Directory</MDBTypography>
                    <MDBCard className="p-3 mb-3" style={{ color: "#00796b", backgroundColor: "f7f6f0", boxShadow: "none", border: "1px solid #004c40" }}>
                        <EmployeeGrid />
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default DirectoryPage;
