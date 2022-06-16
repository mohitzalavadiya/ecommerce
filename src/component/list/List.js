import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button  } from 'reactstrap';

function List({ data, id }) {
    return (
        <div>
            {
                data.map((d,i) => {
                    return(
                        <Card key={i}
                        >
                            <CardBody>
                                <CardTitle tag="h5">
                                    {d.name}
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    {d.quantity}
                                </CardSubtitle>
                                <CardText>
                                    {d.expiry}
                                </CardText>
                                <Button onClick={() => {id(d.id)}}>
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