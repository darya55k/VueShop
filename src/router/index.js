import { createWebHistory, createRouter } from "vue-router";

import MainPage from '../pages/MainPage'
import ProductPage from '../pages/ProductPage'
//import AllProductsPage from '../components/AllProductsPage'
import ProductsLayout from '../pages/ProductsLayout'
import CartLayout from '../pages/CartLayout'
import AllCatalogPage from '../components/AllCatalogPage'



const routes = [
    {
        path: '/',
        name: 'main',
        component: MainPage,
    },
    {
        path: '/products',
        name: 'productsLayout',
        component: ProductsLayout,
        children: [
            /*  {
                 path: '',
                 name: 'main',
                 component: MainPage
             }, */
            {
                path: ':id',
                name: 'productPage',
                component: ProductPage,
            },
            {
                path: "/cart",
                name: 'productCart',
                component: CartLayout,
            },
            {
                path: '/catalog',
                name: 'AllCatalogPage',
                component: AllCatalogPage,

            }
        ]
    },

]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;