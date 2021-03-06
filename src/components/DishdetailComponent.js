
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

 import React from 'react';



       





// export default DishDetail;
function RenderDish({dish}) {
    if (dish != null) {
        return (
            <div className="col-12 col-md-12 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle> {dish.name} </CardTitle>
                        <CardText> {dish.description} </CardText>
                    </CardBody>
                </Card>
            </div>    
        );
    } else {
        return (
            <div></div>
        );
    }
}

// function RenderComments(props){}
function RenderComments({comments}) {
    if (comments != null) {
        const cmnts = comments.map((commnts) => {
            return (
                <ul key={commnts.id} className="list-unstyled">
                    <li>
                        <p> {commnts.comment} </p>
                        <p> -- {commnts.author},
                            &nbsp;
                            {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: '2-digit'
                            }).format(new Date(Date.parse(commnts.date)))}
                        </p>
                    </li>
                </ul>
            );
        });

        return (
            <div className="col-12 col-md-12 m-1">
                <h4> Comments </h4>
                {cmnts}
            </div>
        );  
    // if comments is empty     
    } else {
        return (
            <div></div>
        );
    }
}

const DishDetail = (props) => {
    if (props.dish != null) {
      
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12 col-md-5">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                </div>
            </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default DishDetail;