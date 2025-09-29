import React from 'react'

function Product(props) {
    return (
        <div className='product'>
            <p>Nombre: {props.name}</p>
            {props.discount ?
                (
                    <div>
                        <p className='original-price'>Precio original: {props.price}</p>
                        <p className='discounted-price'>Precio con descuento: {(props.price - (props.price*(props.discount/100)))}</p>
                        <p className='discount-badge'>Descuento: {props.discount + "%"}</p>
                    </div>
                )
                :
                (
                    <div>
                        <p>Precio: {props.price}</p>
                    </div>
                )

            }
            <p className='category'>Categoria: {props.category}</p>
        </div>
    )
}

export default Product
