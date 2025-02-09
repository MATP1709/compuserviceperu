import { useId, useState } from "react"
import "../styles/filters.css"
export const Filters = ({changeFilters}) =>{
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event)=>{
        setMinPrice(event.target.value)
        changeFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event)=>{
        changeFilters(prevState => ({
            ...prevState, 
            category: event.target.value
        }))
    }
    return(
        <div className="ctnFilters">
            <section className="filters">
                <div className="filtersPrice">
                    <label htmlFor={minPriceFilterId}>Precio apartir de:</label>
                    <input type="range" id={minPriceFilterId} min={0} max={1500} onChange={handleChangeMinPrice}/>
                    <span>$ {minPrice}</span>
                </div>
                <div className="filtersCategory">
                    <label htmlFor={categoryFilterId}>Categoria:</label>
                    <select id={categoryFilterId} onChange={handleChangeCategory}>
                        <option value="all">Todas</option>
                        <option value="laptops">Laptops</option>
                        <option value="smartphones">Celulares</option>
                    </select>
                </div>
            </section>
        </div>
    )
}