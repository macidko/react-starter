import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
  //benim route içerisinde kullandığım parametreleri getiriyor.
  let { id } = useParams();
  const [product, setProduct] = useState({})
  // const [images, setImages] = useState([])

  useEffect(() => {
    axiosGet();
  }, [])

  const axiosGet = async () => {
    let response = await axios.get(`https://dummyjson.com/products/${id}`);
    setProduct(response.data);
    // console.log(response.data.images);
  };

  return (
    <div className="container mt-0 mt-md-5">
      {/* {
            Object.values(images).map((image, index) => (
              <div key={index} className={`carousel-item ${index === 1 ? 'active' : ''}`}>
                <img src={`https://i.dummyjson.com/data/products/${id}/${index + 1}.jpg`} className="d-block w-100" alt="..." />
              </div>
            ))
              } */}

      {/* <img src={`https://i.dummyjson.com/data/products/${id}/3.jpg`} className="card-img-top" alt="..." /> */}
      <div className="row">
        {/* <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://img.freepik.com/premium-photo/landscape-high-icy-mountains-near-lake-digital-art-generative-ai_665346-37252.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://img.freepik.com/premium-photo/mountain-landscape-sunset-with-reflection-sun-s-rays-nearby-body-water-adding-stunning-unique-perspective-generative-ai-illustration_13364-262.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1698969600&semt=ais" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> */}
        <div className="card" style={{ marginRight: 18 + 'em' }}>
          <div className="card-body">
            <h5 className="card-title">{product.brand}</h5>
            <p className="card-text">{product.category}</p>
            <p className="card-text">{product.description}</p>
            <p className="card-text">{product.price} TL</p>
            <a href="#" className="btn btn-primary">Satın Al</a>
          </div>
        </div>
      </div>
    </div>
  )
}
