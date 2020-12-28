import React from 'react'
import Hero from './Hero'
import Banner from './Banner'
import {Link} from 'react-router-dom';
import ProductList from './ProductList';
function Home() {
    return (
    <>
    <Hero>
        <Banner title="Ecommerce shop" subtitle="at one place">
        <Link to="/products" className="btn-primary">
            Our Products
        </Link>
        </Banner>
        
    </Hero>
    <ProductList/>
    </>)
}

export default Home
