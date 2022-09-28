import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {AiFillDelete } from 'react-icons/ai';
import {removeFromCart,decrementQuantity, incrementQuantity} from '../actions/index'
 
const Cart = () => {
  const cartProducts = useSelector((state) => state.cartProducts);
  console.log(cartProducts)
  const dispatch = useDispatch();
  const totalQuantityAmount = (quantity,price) => {
    return  quantity * price
  }
  return (
    <div>
      <div className='col-lg-12'>
        <div className='row align-items-center text-center'>
          <div className='col-2'>
            <h5>Product</h5>
          </div>
          <div className='col-2'>
            <h5>Title</h5>
          </div>
          <div className='col-1'>
            <h5>Quantity</h5>
          </div>
          <div className='col-1'>
            <h5>Price</h5>
          </div>
          <div className='col-1'></div>
          <div className='col-1'>
            <h5>Total Price</h5>
          </div>
        </div>

      </div>
      {cartProducts.cart.map((item) => {
        // item.quantity=1;
        return(
            <div key={item.id}>
              <div className="col-lg-12" >
                <Card className='m-2'>
                <div className='row align-items-center m-2'>
                  <div className='col-lg-2 col-md-2 col-2 text-center'>
                    <Card.Img variant="top" src={item.image} className="img-fluid" style={{height: '80px', width: '80px'}}/>
                  </div>
                  <div className='col-lg-2 col-2'>
                    <Card.Title className="title">{item.title}</Card.Title>
                  </div>
                  <div className='col-1' style={{display: 'flex', alignItems: 'center'}}>
                    <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>  
                    <p style={{margin: '0 8px'}}>{item.quantity}</p>
                    <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                  </div>
                  <div className='col-1'>
                    <Card.Text>{item.price}$</Card.Text>
                  </div>
                <div className='col-1'>
                  <Button variant="default" onClick={() => dispatch(removeFromCart(item.id))}><AiFillDelete size={26} color='red'/></Button>
                </div>
                <div className='col-1'>
                  <Card.Text>{totalQuantityAmount(item.quantity,item.price)}$</Card.Text>
                </div>
                </div>
                </Card>
              </div>
            
            </div>
        )
      })
    }
    <div className='total'>
              <p>total amount</p>
              </div>
    </div>
  )
}

export default Cart