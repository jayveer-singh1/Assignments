import React, { useState } from 'react';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const categories = [
    { slug: "beauty", name: "Beauty" },
    { slug: "fragrances", name: "Fragrances" },
    { slug: "furniture", name: "Furniture" },
    { slug: "groceries", name: "Groceries" },
    { slug: "home-decoration", name: "Home Decoration" },
    { slug: "kitchen-accessories", name: "Kitchen Accessories" },
    { slug: "laptops", name: "Laptops" },
    { slug: "mens-shirts", name: "Mens Shirts" },
    { slug: "mens-shoes", name: "Mens Shoes" },
    { slug: "mens-watches", name: "Mens Watches" },
    { slug: "mobile-accessories", name: "Mobile Accessories" },
    { slug: "motorcycle", name: "Motorcycle" },
];

const placeholderImage = 'https://via.placeholder.com/150?text=';

function Categorieslist() {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    const fetchProducts = async (category) => {

        const url = category ? `https://dummyjson.com/products/category/${category}` : 'https://dummyjson.com/products';
        const response = await axios.get(url);
        setProducts(response.data.products.map(product => ({
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            image: `${placeholderImage}${(product.title)}`
        })));
        setSelectedCategory(category);

    };

    const categoryChange = (event) => {
        fetchProducts(event.target.value);
    };

    return (
        <>
            <select value={selectedCategory} onChange={categoryChange} style={{backgroundColor:'rgb(30, 170, 170)', borderRadius:'10px', padding:'5px'}}>
                <option value="">Select a category</option>
                {categories.map((category, index) => (
                    <option key={index} value={category.slug}>{category.name}</option>
                ))}
            </select>

            <div id="product-list" className="one">
                {products.map(product => (
                    <div key={product.id} className="product-item">
                        <div className="boxes">
                            <h3>{product.title}</h3>
                            <p><strong>Description:- </strong> {product.description}</p>
                            <p><strong>Price:- </strong> ${product.price}</p>
                            <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '10px' }} />
                            <DeleteButton/>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Categorieslist;
