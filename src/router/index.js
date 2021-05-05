import Vue from 'vue';
import Router from 'vue-router';
import AllProducts from '../components/AllProducts';
import AllSmartphones from '../components/AllSmartphones';
import AllNotebooks from '../components/AllNotebooks';
import Product from '../components/Product';
import CartCheckout from '../components/CartCheckout';
import SnackBar from '../components/SnackBar';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'All Products',
      component: AllProducts,
    },
    {
      path: '/smartphones',
      name: 'Smartphones',
      component: AllSmartphones,
    },
    {
      path: '/notebooks',
      name: 'Notebooks',
      component: AllNotebooks,
    },
    {
      path: '/product-details',
      name: 'Product',
      component: Product,
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: CartCheckout,
    },
    {
      path: '/snackbar',
      name: 'SnackBar',
      component: SnackBar,
    },
  ],
});
