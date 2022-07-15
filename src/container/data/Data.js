import React from 'react';
import List from '../../component/list/List';

function Data(props) {
    const orgData = [
        {        
        id: 101,        
        name: "Men's T-shirt",        
        quantity: 25,        
        price: 150,        
        expiry: 2022        
        },        
        {        
        id: 102,        
        name:"Men's shirt",        
        quantity: 90,        
        price: 550,        
        expiry: 2021        
        },        
        {        
        id: 103,        
        name:"Women's Dress",        
        quantity: 85,        
        price: 450,        
        expiry: 2025        
        },        
        {        
        id: 104,        
        name: "sunglass",        
        quantity: 50,        
        price: 600,
        expiry: 2023        
        },        
        {        
        id: 105,        
        name:"track",        
        quantity: 63,        
        price: 250,        
        expiry: 2021        
        },
        
        ]

       const clothdata = (id) => {
            alert(id)
        }
    return (
        <div>
            <List 
            data={orgData}
            id={clothdata}
            />
        </div>
    );
}

export default Data;