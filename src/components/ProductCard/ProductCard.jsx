import React from 'react'

export default function ProductCard(props) {
    return (
        <div className='product-card'>
            <img src="https://m.media-amazon.com/images/I/817xnvwK0PL._AC_UF1000,1000_QL80_.jpg" />
            <p>{props.name}</p>
            <p>{props.price}</p>
        </div>
    )
}
