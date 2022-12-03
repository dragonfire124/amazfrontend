import { getProducts } from '../api.js';
import rating from '../components/rating.js';

const HomeScreen ={
    render: async()=>{
        const products = await getProducts()
        
        return `
        <ul class="products">
        ${products.map(product => `
        <li>
                <div class="product">
                <a href="/#/product/${product._id}">
                    <img src="${product.image}" alt="${product.name}"/>
                </a>
            
                 <div class="product-name">
                <a href="/#/product/1">
                    ${product.name}
                </a>
                <div class="product-rating">
                ${rating.render({value:product.rating, text: `${product.numReviews}   reviews`,
                })}
                </div>
                </div>
                <div class="product-brand">
                ${product.brand}
                </div>
                <div class="product-price">
                $${product.price}
                </div>
                </div>
        </li>
        `).join('\n')}
        `
    }
}

export default HomeScreen