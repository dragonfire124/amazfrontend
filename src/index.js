import './style.css'
import HomeScreen from './screens/HomeScreen.js';
import productScreen from "./screens/productScreen.js"
import { hideLoading, parseRequestUrl, showLoading } from "./utils.js"
import Error404Screen from "./screens/Error404Screen.js"
import cartScreen from './screens/cartScreen.js';
import signinScreen from './screens/signingScreen.js';
import Header from './components/header.js';
import registerScreen from './screens/registerScreen.js';
import profileScreen from './screens/profileScreen.js';
import shippingScreen from './screens/shippingScreen.js';
import paymentScreen from './screens/paymentScreen.js';
import placeOrderScreen from './screens/placeOrderScreen.js';
import orderScreen from './screens/orderScreen.js';
import dashBoardScreen from './screens/dashBoardScreen.js';
import productlistScreen from './screens/productListScreen.js';
import productEditScreen from './screens/productEditScreen.js';
import orderListScreen from './screens/orderListScreen.js';


const routes = {
    '/': HomeScreen,
    '/product/:id/edit': productEditScreen,
    '/product/:id': productScreen,
    '/order/:id': orderScreen,
    '/orderlist': orderListScreen,
    '/cart/:id': cartScreen, 
    '/cart': cartScreen, 
    '/signin': signinScreen,
    '/register':registerScreen,
    '/profile':profileScreen,
    '/shipping':shippingScreen,
    '/payment': paymentScreen,
    '/placeorder': placeOrderScreen,
    '/dashboard': dashBoardScreen,
    '/productlist': productlistScreen,
};

async function router() {
    showLoading();
    const request = parseRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}` : '/') +
        (request.id ? '/:id' : '') +
        (request.verb ? `/${request.verb}` : '');
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
    const header = document.getElementById('header-container');
    header.innerHTML = await Header.render();
    await Header.after_render();
    const main = document.getElementById('main-container');
    main.innerHTML = await screen.render();
    if (screen.after_render)await screen.after_render();
    hideLoading();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
