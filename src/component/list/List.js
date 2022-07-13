import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button  } from 'reactstrap';

function List({ data, id }) {
    return (
        <div className='d-flex flex-wrap'>
            {
                data.map((d,i) => {
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
                                <Button className='btn-danger' onClick={() => {id(d.id)}}>
                                    Button
                                </Button>
                            </CardBody>
                        </Card>
                    )
                })
            }
        </div>
    );
}

export default List;