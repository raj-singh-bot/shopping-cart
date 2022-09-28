import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../actions'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {addToCart} from '../actions/index'

const Products = () => {
    const products = useSelector((state) => state.products.products);
    const alldata = products.map((item) => {
        return (
            <div className="col-lg-3 col-md-4 my-3" key={item.id}>
            <Card >
            <Card.Img variant="top" src={item.image} className="img-fluid" style={{height: '250px'}}/>
            <Card.Body>
                <Card.Title className="title">{item.title}</Card.Title>
                <Card.Text className='desc'>{item.description}</Card.Text>
                <Card.Text>{item.price}$</Card.Text>
                <Button variant="primary" onClick={() => dispatch(addToCart(item))} >Add to cart</Button>
            </Card.Body>
        </Card>
        </div>
        )
    })
    const dispatch = useDispatch();
    
    const fetchData = async()  => {
        const response = await axios.get('https://fakestoreapi.com/products');
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchData();
    },[])
    console.log(products);

  return (
    <div className="container my-2">
        <div className="row">
        {alldata}
        </div>
    </div>
  )
}

export default Products