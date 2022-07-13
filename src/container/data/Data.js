import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button  } from 'reactstrap';

import List from '../../component/list/List';


const orgData = [
    {
        id: 101,
        name: "Men's T-shirt",
        Img: "./images/p1.png",
        quantity: 25,
        price: "$999",
        expiry: 2022
    },
    {
        id: 102,
        name: "Men's shirt",
        Img: "./images/p2.png",
        quantity: 90,
        price: "$699",
        expiry: 2021
    },
    {
        id: 103,
        name: "Women's Dress",
        Img: "./images/p12.png",
        quantity: 85,
        price: "$599",
        expiry: 2025
    },
    {
        id: 104,
        name: "fashion-wear",
        Img: "./images/p4.png",
        quantity: 50,
        price: "$299",
        expiry: 2023
    },
    {
        id: 105,
        name: "Women's T-shirt",
        Img: "./images/p5.png",
        quantity: 63,
        price: "$499",
        expiry: 2021
    },
    {
        id: 105,

        name: "party-wear",
        Img: "./images/p6.png",
        quantity: 63,
        price: "$499",
        expiry: 2021
    },
    {
        id: 105,
        name: "denim shirt",
        Img: "./images/p9.png",
        quantity: 63,
        price: "$499",
        expiry: 2021
    },
    {
        id: 105,
        name: "fashion wear",
        Img: "./images/p8.png",
        quantity: 63,
        price: "$499",
        expiry: 2021
    }, {
        id: 105,
        name: "traditional wear",
        Img: "./images/p6.png",
        quantity: 63,
        price: "$499",
        expiry: 2021
    },
]

function Data(props) {
    const [pdata, setPdata] = useState(orgData)
    
    
    

    const Sdata = (val) => {
       const searchdata =  orgData.filter((l) => (
            l.name.toLowerCase().includes(val.toLowerCase()) ||
            l.quantity.toString().includes(val) ||
            l.price.includes(val) ||
            l.expiry.toString().includes(val) ||
            l.id.toString().includes(val) 
         ))
         setPdata(searchdata);
    }
 
    //  const fdata = pdata.length > 0 ? pdata : orgData;
    return (
        <div>
            <input className='ms-4 rounded-1 p-2'
                    margin="dense"
                    placeholder='Search'
                    name="name"
                    label="Search"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => Sdata(e.target.value)}
                />
            <div className='d-flex flex-wrap'>
            {
               pdata.map((d,i) => {
                    return(
                        <Card key={i} className= "col-3 m-4"
                        >
                            <CardBody>
                                <CardTitle tag="h5" className='fw-bold fs-2' >
                                    {d.name}
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted fs-4"
                                    tag="h6"
                                >
                                    {d.quantity}
                                </CardSubtitle>
                                <CardText className='fs-5 w-75'>
                                    <img src={d.Img} className='img-fluid' />
                                </CardText>
                                <CardText className='fs-5'>
                                    {d.expiry}
                                </CardText>
                                <CardText className='fs-5'>
                                    {d.price}
                                </CardText>
                                <Button className='btn-danger' >
                                    Button
                                </Button>
                            </CardBody>
                        </Card>
                    )
                })
            }
        </div>
     </div>
    );
}

export default Data;