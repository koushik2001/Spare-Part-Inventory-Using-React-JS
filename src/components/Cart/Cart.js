import React, { Component } from 'react';

import Title from '../Title';

import CartColumns from './CartColumns';

import Emptycart from './EmptyCart';

import {ProductConsumer} from '../../context';

import CartList from './CartList';

import CartTotal from './CartTotal';
class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value =>{
                        const {cart} = value;
                        if(cart.length>0){
                            return(
                                <React.Fragment>
                                    <br>
                                    </br>
                                    <Title name="Your Cart" title="Cart"/>
                                    <br>
                
                                    </br>
                                    <CartColumns/>
                                    <CartList value = {value}/>
                                    <CartTotal value={value} history={this.props.history}/>
                                </React.Fragment>
                            );
                        } else{
                            return(
                                <Emptycart/>
                            );
                        }
                    }}
                </ProductConsumer>
            </section>
        );
    }
}

export default Cart;