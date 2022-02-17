import './App.css';
import crosslogo from './img/crosslogo.png';

function changePage(event){
    switch(event){
        case "news":
            localStorage.setItem("page", "/aktualnosci");
            break;
        case "hours":
            localStorage.setItem("page", "/godziny");
            break;
        case "workers":
            localStorage.setItem("page", "/ksieza");
            break;
        case "contact":
            localStorage.setItem("page", "/kontakt");
            break;
        default:
            localStorage.setItem("page", "/");
            break;
    }
    window.location.reload();
}

export function Header(){
    var value = "/";
    console.log(localStorage.getItem("page"));
    return(
        <div id="header" className="header">
            <div className="picture">
                <img className="picture-cross" src={crosslogo}/>
                <div className="text-title">
                    <p className="text-title">
                        Poznańska Parafia <br/>
                        im. św. Wojciecha
                    </p>
                </div>
            </div>

            <div className="menu-bar">
                <div 
                    id="button-menu-bar-1" 
                    onClick={()=>changePage(value = "news")} 
                    className="button-menu-bar">
                    Aktualności i ogłoszenia
                </div>
                <div 
                    id="button-menu-bar-2" 
                    onClick={()=>changePage(value = "hours")} 
                    className="button-menu-bar">
                    Godziny mszy
                </div>
                <div 
                    id="button-menu-bar-3" 
                    onClick={()=>changePage(value = "workers")} 
                    className="button-menu-bar">
                    Nasi księża
                </div>
                <div 
                    id="button-menu-bar-4" 
                    onClick={()=>changePage(value = "contact")} 
                    className="button-menu-bar">
                    Kontakt
                </div>
            </div>
        </div>
    )
}