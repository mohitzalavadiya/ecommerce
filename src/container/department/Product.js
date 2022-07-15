import React, { useState } from 'react';


const orgData = [
    {
        id: 101,
        name: "Men's T-shirt",
        Img: "./images/p1.png",
        quantity: 25,
        price: "$75",
        expiry: 2022
    },
    {
        id: 102,
        name: "Men's shirt",
        Img: "./images/p2.png",
        quantity: 90,
        price: "$80",
        expiry: 2021
    },
    {
        id: 103,
        name: "Women's Dress",
        Img: "./images/p3.png",
        quantity: 85,
        price: "$59",
        expiry: 2025
    },
    {
        id: 104,
        name: "fashion-wear",
        Img: "./images/p4.png",
        quantity: 50,
        price: "$99",
        expiry: 2023
    },
    {
        id: 105,
        name: "Women's T-shirt",
        Img: "./images/p5.png",
        quantity: 63,
        price: "$58",
        expiry: 2021
    },
    {
        id: 105,

        name: "party-wear",
        Img: "./images/p6.png",
        quantity: 63,
        price: "$78",
        expiry: 2021
    },
    {
        id: 105,
        name: "denim shirt",
        Img: "./images/p7.png",
        quantity: 63,
        price: "$96",
        expiry: 2021
    },
    {
        id: 105,
        name: "fashion wear",
        Img: "./images/p8.png",
        quantity: 63,
        price: "$75",
        expiry: 2021
    },
     {
        id: 105,
        name: "traditional wear",
        Img: "./images/p9.png",
        quantity: 63,
        price: "$84",
        expiry: 2021
    },
    {
        id: 105,
        name: "traditional wear",
        Img: "./images/p10.png",
        quantity: 63,
        price: "$94",
        expiry: 2021
    },
    {
        id: 105,
        name: "traditional wear",
        Img: "./images/p11.png",
        quantity: 63,
        price: "$84",
        expiry: 2021
    },
    {
        id: 105,
        name: "traditional wear",
        Img: "./images/p12.png",
        quantity: 63,
        price: "$73",
        expiry: 2021
    },

]



function Product(props) {
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

    return (
        <div>
            <section className="inner_page_head">
                <div className="container_fuild">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="full">
                                <h3>Product Grid</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end inner page section */}
            {/* product section */}
            <section className="product_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            Our <span>products</span>
                        </h2>
                    </div>
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
                    <div className="row">
                        {
                            pdata.map((p) => {
                                return(
                                    <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="box">
                                <div className="option_container">
                                    <div className="options">
                                        <a href className="option1">
                                            Men's Shirt
                                        </a>
                                        <a href className="option2">
                                            Buy Now
                                        </a>
                                    </div>
                                </div>
                                <div className="img-box">
                                <img src={p.Img}  />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        {p.name}
                                    </h5>
                                    <h6>
                                       {p.price}
                                    </h6>
                                </div>
                            </div>
                        </div>
                                )
                            })
                        }
                        
                        
                    </div>
                    <div className="btn-box">
                        <a href>
                            View All products
                        </a>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Product;