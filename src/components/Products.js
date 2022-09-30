import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../actions'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {addToCart} from '../actions/index'
import { Formik, Field, Form } from 'formik';

const Products = () => {
    const [addBtn, setAddBtn] = useState();
    const products = useSelector((state) => state.products.products);
    const [category, setCategory]= useState(products);
    const [priceFilter, setPriceFilter] = useState(true);
    const dispatch = useDispatch();
    
    const fetchData = async()  => {
        const response = await axios.get('https://fakestoreapi.com/products');
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchData();
    },[])

    useEffect(() => {
      console.log(category)
    },[category, products])
    
    const priceSort = (arg) => {
      arg === 'asc' ? setPriceFilter(true) : setPriceFilter(false);
    }
  return (
    <div className="container my-2">
        <Formik
      initialValues={{
        categories: [],
      }}
      onSubmit={ (values) => {
        if(values.categories.length > 0){
        if (values) {  
          const data = products.filter((data) => values.categories.includes(data.category)).map(filteredName => {
            return filteredName
          })
          setCategory(data);
        } else {
          const data2 = products.filter((data) => values.categories.includes(data.category)).map(filteredName => {
            return !filteredName;  
          })
  
          setCategory(data2)
        }
      }
      else{
        setCategory(products)
      }
        console.log(values)
        // console.log(data)
      }}
    >
      {({ values }) => (
        <Form>
          <div role="group" aria-labelledby="checkbox-group" className='singleFilter-option'>
              <h5>Category</h5>
              <label>
                <Field type="checkbox" name="categories" value="men's clothing" />
                  Men's Clothing
              </label>
              <label>
                <Field type="checkbox" name="categories" value="women's clothing" />
                Women's Clothing
              </label>
              <label>
                <Field type="checkbox" name="categories" value="electronics" />
                Electronics
              </label>
              <label>
                <Field type="checkbox" name="categories" value="jewelery" />
                Jewelery
              </label>
          </div>
          
          <button type="submit">Apply filter</button>
        </Form>
      )}
    </Formik>
        <h5>Sort</h5>
        <button onClick={() => priceSort('asc')}>Price Low-High</button>
        <button onClick={() =>priceSort('desc')}>Price High-Low</button>
        <div className="row">
        {category.sort((a, b) => priceFilter === true? a.price - b.price : b.price - a.price).map((item,index) => {
        return (
            <div className="col-lg-3 col-md-4 my-3" key={item.id}>
            <Card >
            <Card.Img variant="top" src={item.image} className="img-fluid" style={{height: '250px'}}/>
            <Card.Body>
                <Card.Title className="title">{item.title}</Card.Title>
                <Card.Text className='desc'>{item.description}</Card.Text>
                <Card.Text>{item.price}$</Card.Text>
                <Button variant="primary" onClick={() => {dispatch(addToCart(item)); setAddBtn(index)}} disabled={addBtn === index}>{addBtn === index? 'Added to cart' : 'Add to cart'}</Button>
            </Card.Body>
        </Card>
        </div>
        )
    })}
        </div>
    </div>
  )
}

export default Products