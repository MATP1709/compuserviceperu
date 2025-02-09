import "../styles/header.css"
import { UserIcon, ShoppingCartIcon } from "./Icons"
export const Header = () =>{
    return(
        <header>
            <div className="ctn-header">
                <h1>COMPU SERVICE PERÚ</h1>
                <div className="header-busqueda">
                    <input type="text" placeholder="buscar" />
                </div>
                <div className="header-enlaces">
                    <UserIcon/>
                    <ShoppingCartIcon/>
                </div>
            </div>
        </header>
    )
} 