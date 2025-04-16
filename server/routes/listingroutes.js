const express = require('express');
// const { products } = require('../data/products');
const Product = require('../models/products');

// const products = [
//     {
//       "title": "Apple iPhone 14",
//       "brand": "Apple",
//       "description": "iPhone 14 with 128GB storage and A15 Bionic chip.",
//       "category": "Electronics",
//       "subCategory": "Mobile Phones",
//       "price": 79999,
//       "discount": 10,
//       "stock": 50,
//       "sku": "APL-IP14-128GB-BLK1",
//       "images": [
//         { "url": "https://m.media-amazon.com/images/I/61cwywLZR-L._AC_UY327_FMwebp_QL65_.jpg", "alt": "iPhone 14 front and back" }
//       ],
//       "specifications": {
//         "Color": "Black",
//         "Storage": "128GB",
//         "Chip": "A15 Bionic"
//       },
//       "ratings": { "average": 4.5, "count": 3456 },
//       "reviews": [],
//       "seller": "660000000000000000000001",
//       "isAvailable": true
//     },
//     {
//       "title": "Samsung Galaxy S23",
//       "brand": "Samsung",
//       "description": "Samsung Galaxy S23 with 256GB and Snapdragon 8 Gen 2.",
//       "category": "Electronics",
//       "subCategory": "Mobile Phones",
//       "price": 74999,
//       "discount": 15,
//       "stock": 70,
//       "sku": "SAM-GS23-256GB-WHT1",
//       "images": [
//         { "url": "https://m.media-amazon.com/images/I/61RZDb2mQxL._AC_UY327_FMwebp_QL65_.jpg", "alt": "Samsung Galaxy S23 white" }
//       ],
//       "specifications": {
//         "Color": "White",
//         "Storage": "256GB",
//         "Processor": "Snapdragon 8 Gen 2"
//       },
//       "ratings": { "average": 4.6, "count": 2789 },
//       "reviews": [],
//       "seller": "660000000000000000000002",
//       "isAvailable": true
//     },
//     {
//       "title": "Sony WH-1000XM5",
//       "brand": "Sony",
//       "description": "Noise cancelling over-ear headphones with 30-hour battery life.",
//       "category": "Electronics",
//       "subCategory": "Headphones",
//       "price": 29999,
//       "discount": 20,
//       "stock": 40,
//       "sku": "SNY-WH1000XM5-BLK1",
//       "images": [
//         { "url": "https://m.media-amazon.com/images/I/61Dbl0rP28L._AC_UY327_FMwebp_QL65_.jpg", "alt": "Sony WH-1000XM5 black" }
//       ],
//       "specifications": {
//         "Color": "Black",
//         "Type": "Over-Ear",
//         "Battery": "30 Hours"
//       },
//       "ratings": { "average": 4.8, "count": 5821 },
//       "reviews": [],
//       "seller": "660000000000000000000003",
//       "isAvailable": true
//     },
//     {
//       "title": "HP Pavilion 14",
//       "brand": "HP",
//       "description": "HP Pavilion 14-inch laptop with Intel i5 and 16GB RAM.",
//       "category": "Computers",
//       "subCategory": "Laptops",
//       "price": 58999,
//       "discount": 12,
//       "stock": 30,
//       "sku": "HP-PAV14-I5-16GB1",
//       "images": [
//         { "url": "https://m.media-amazon.com/images/I/81aJh5N2Z2L._AC_UY327_FMwebp_QL65_.jpg", "alt": "HP Pavilion 14 laptop" }
//       ],
//       "specifications": {
//         "Processor": "Intel Core i5",
//         "RAM": "16GB",
//         "Storage": "512GB SSD"
//       },
//       "ratings": { "average": 4.3, "count": 1152 },
//       "reviews": [],
//       "seller": "660000000000000000000004",
//       "isAvailable": true
//     },
//     {
//       "title": "Nike Revolution 6",
//       "brand": "Nike",
//       "description": "Running shoes for men with breathable mesh.",
//       "category": "Fashion",
//       "subCategory": "Shoes",
//       "price": 3999,
//       "discount": 10,
//       "stock": 200,
//       "sku": "NKE-REV6-M-BLU1",
//       "images": [
//         { "url": "https://m.media-amazon.com/images/I/81AW6xjYp8L._AC_UL480_FMwebp_QL65_.jpg", "alt": "Nike Revolution 6 blue" }
//       ],
//       "specifications": {
//         "Color": "Blue",
//         "Type": "Running",
//         "Material": "Mesh"
//       },
//       "ratings": { "average": 4.4, "count": 1321 },
//       "reviews": [],
//       "seller": "660000000000000000000005",
//       "isAvailable": true
//     },
//     {
//       "title": "Logitech MX Master 3S",
//       "brand": "Logitech",
//       "description": "Advanced wireless mouse with silent click and ergonomic design.",
//       "category": "Computers",
//       "subCategory": "Accessories",
//       "price": 8499,
//       "discount": 5,
//       "stock": 100,
//       "sku": "LOG-MX3S-WLS-GRY1",
//       "images": [
//         { "url": "https://m.media-amazon.com/images/I/61LtuGzXeaL._AC_UY327_FMwebp_QL65_.jpg", "alt": "Logitech MX Master 3S" }
//       ],
//       "specifications": {
//         "Connectivity": "Wireless",
//         "Color": "Graphite",
//         "Battery": "70 Days"
//       },
//       "ratings": { "average": 4.7, "count": 1784 },
//       "reviews": [],
//       "seller": "660000000000000000000006",
//       "isAvailable": true
//     },
//     {
//       "title": "Canon EOS 1500D",
//       "brand": "Canon",
//       "description": "DSLR Camera with 24.1MP and 18-55mm lens.",
//       "category": "Electronics",
//       "subCategory": "Cameras",
//       "price": 42999,
//       "discount": 10,
//       "stock": 20,
//       "sku": "CAN-EOS1500D-18-55",
//       "images": [
//         { "url": "https://m.media-amazon.com/images/I/914hFeTU2-L._AC_UY327_FMwebp_QL65_.jpg", "alt": "Canon EOS 1500D with lens" }
//       ],
//       "specifications": {
//         "Resolution": "24.1MP",
//         "Lens": "18-55mm",
//         "Type": "DSLR"
//       },
//       "ratings": { "average": 4.5, "count": 894 },
//       "reviews": [],
//       "seller": "660000000000000000000007",
//       "isAvailable": true
//     },
//     {
//       "title": "boAt Rockerz 450",
//       "brand": "boAt",
//       "description": "Bluetooth On-Ear Headphones with 40mm drivers.",
//       "category": "Electronics",
//       "subCategory": "Headphones",
//       "price": 1499,
//       "discount": 25,
//       "stock": 150,
//       "sku": "BOAT-ROCK450-BLU1",
//       "images": [
//         { "url": "https://m.media-amazon.com/images/I/61u48FEs6AL._AC_UY327_FMwebp_QL65_.jpg", "alt": "boAt Rockerz 450 blue" }
//       ],
//       "specifications": {
//         "Driver": "40mm",
//         "Battery": "15 Hours",
//         "Color": "Blue"
//       },
//       "ratings": { "average": 4.2, "count": 2094 },
//       "reviews": [],
//       "seller": "660000000000000000000008",
//       "isAvailable": true
//     },
//     {
//       "title": "ASUS TUF Gaming F15",
//       "brand": "ASUS",
//       "description": "Gaming laptop with i5-11400H and RTX 3050.",
//       "category": "Computers",
//       "subCategory": "Laptops",
//       "price": 74999,
//       "discount": 10,
//       "stock": 25,
//       "sku": "ASUS-TUF-F15-RTX3050",
//       "images": [
//         { "url": "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_FMwebp_QL65_.jpg", "alt": "ASUS TUF Gaming F15" }
//       ],
//       "specifications": {
//         "Processor": "Intel i5-11400H",
//         "GPU": "NVIDIA RTX 3050",
//         "RAM": "16GB"
//       },
//       "ratings": { "average": 4.6, "count": 1179 },
//       "reviews": [],
//       "seller": "660000000000000000000009",
//       "isAvailable": true
//     },
//     {
//       "title": "Samsung 55\" 4K Smart TV",
//       "brand": "Samsung",
//       "description": "55-inch 4K UHD Smart LED TV with Alexa built-in.",
//       "category": "Electronics",
//       "subCategory": "Televisions",
//       "price": 52999,
//       "discount": 18,
//       "stock": 35,
//       "sku": "SAM-TV-55INCH-4K1",
//       "images": [
//         { "url": "https://m.media-amazon.com/images/I/71w4kYZ7YKL._AC_UY327_FMwebp_QL65_.jpg", "alt": "Samsung 55-inch Smart TV" }
//       ],
//       "specifications": {
//         "Size": "55 inch",
//         "Resolution": "4K",
//         "Smart TV": "Yes"
//       },
//       "ratings": { "average": 4.4, "count": 948 },
//       "reviews": [],
//       "seller": "660000000000000000000010",
//       "isAvailable": true
//     }
//   ]
  
  


const router = express.Router();

// router.get('/', async(req, res) => {
//     try{
//         await Product.deleteMany({});

//         await Product.insertMany(products);
//         res.json({"msg":"products inserted"});

//     }
//     catch(e){
//         console.log('error', e);
        
//     }
// });

router.get('/', async(req, res) => {
    try{

        const all = await Product.find({})
        res.json(all)
        
    }
    catch(e){
        console.log('error', e);
        
    }
});

router.get('/:id',async(req,res)=>{
    try {
        const {id} = await req.params;
    const product = await Product.findById(id);

    res.json(product)
    } catch (error) {
        console.log("error in finding by id ", error);
        
    }
    
})

module.exports = router;



