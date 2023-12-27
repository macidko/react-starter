import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import axios from "axios";

export default function Homepage() {
	// http isteği

	const [products, setProducts] = useState([])

	useEffect(() => {
		// gelen veriyi json olarak console'a yazdır.

		// fetch("https://dummyjson.com/products")
		// 	.then(response => response.json())
		// 	.then(json => console.log(json))
		// 	.catch(err => console.log(err));

		//awaitFetch();
	}, []);


	return (
		<div>
			<Link to={"/products"}>
			
				Ürünler Sayfası
		
			</Link>
		</div>
	);
}