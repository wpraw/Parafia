import { Component } from "react";
import { generateUUID } from "./generateGUID";
import './App.css';

export class AdminAddPriest extends Component{

    submitPriest(event){
        event.preventDefault();
        var PriestId = generateUUID();
        var token = localStorage.getItem("token");
        fetch('https://localhost:7132/api/UserPriest',{
            method:'POST',
            mode: 'cors',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body:JSON.stringify({
                PriestId: PriestId,
                Name: event.target.Name.value,
                Surname: event.target.Surname.value,
                Degree: event.target.Degree.value
            })
        })
        .then(res=>res.json())
        .then(()=>{ 
            alert("Dodano nowego księdza");
            window.location.reload();
        })
        .catch(()=>{
            alert("Nie dodano nowego księdza Panie, wystąpił błąd");
        });
    }

    render(){
        return(
            <div className="admin-add-post-panel">
                <h3>Dodawanie nowego Księdza</h3>
                <form onSubmit={this.submitPriest}>
                    <input
                        placeholder="Imie"
                        type="text"
                        required
                        class="admin-add-input-user"
                        name="Name"
                    >
                    </input>

                    <br/>

                    <input
                        placeholder="Nazwisko"
                        type="text"
                        required
                        class="admin-add-input-user"
                        name="Surname"
                    >
                    </input>

                    <br/>

                    <input
                        placeholder="Stopień"
                        type="phone"
                        required
                        class="admin-add-input-user"
                        name="Degree"
                    >
                    </input>

                    <br/>

                    <button className="admin-add-user-button" 
                        variant="primary" 
                        type="submit"
                    >
                        Dodaj Księdza
                    </button>
                </form>
            </div>
        );
    }
}