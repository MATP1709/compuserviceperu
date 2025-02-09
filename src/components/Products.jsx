import '../styles/products.css'

export const Products=({products}) => {
    return(
        <div className='products'>
            <ul>
                {products.map(product=>(
                    <li className='product-item' key={product.id}>
                        <img className='product-item-img' src={product.images} alt={product.title}/>
                        <div className='product-item-txt'>
                            <p className='productTitle'>{product.title}</p>
                            <p className='productPrice'>$ {product.price}</p>
                        </div>
                        <button className='product-item-btn'>Agregar al Carrito</button>
                   </li>
                ))}
            </ul>
        </div>
    )
}