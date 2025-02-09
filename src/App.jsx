import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products.jsx";
import './style.css'
import { useState } from "react";
import { Header } from "./components/Header.jsx";
import { Filters } from "./components/Filters.jsx";
import { Footer } from "./components/Footer.jsx";

function useFilters(){
    
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })

    //FILTRO PARA JUNIORS
    const filterProducts = (products) => {
        return products.filter(product => {
            return(
                    product.price >=  filters.minPrice && (
                    filters.category == 'all' ||
                    product.category == filters.category
                )
            )
        })
    }
    return {filterProducts, setFilters}
}

function App(){
    const [products] = useState(initialProducts)
    const {filterProducts, setFilters} = useFilters()
    const filteredProducts = filterProducts(products)
    return(
        <>
        <div className="ctnCuerpo">
            <div className="cuerpo">
                <Header/>
                <Filters changeFilters={setFilters}/>
                <Products products={filteredProducts}/>
            </div>
            <Footer/>
        </div>
        </>
    )
}
export default App;