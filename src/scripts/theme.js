import example from './components/example';
import * as cart from '@shopify/theme-cart';

example();
cart.getState().then(data=>{
    console.log(data);
});