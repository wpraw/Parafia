import { Component } from "react";
import { generateUUID } from "./generateGUID";
import './App.css';

export class AdminAddUser extends Component{

    submitUser(event){
        event.preventDefault();
        var UserId = generateUUID();
        var token = localStorage.getItem("token");
        fetch('https://localhost:7132/api/User',{
            method:'POST',
            mode: 'cors',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body:JSON.stringify({
                UserId: UserId,
                Username: event.target.Username.value,
                Password: event.target.Password.value,
                Name: event.target.Name.value,
                Surname: event.target.Surname.value,
                NumberPhone: event.target.Phone.value,
                isDeleted: 0
            })
        })
        .then(res=>res.json())
        .then(()=>{ 
            alert("Dodano nowego administratora");
            window.location.reload();
        })
        .catch(()=>{
            alert("Nie dodano nowego Administratora Panie, wystąpił błąd");
        });
    }

    render(){
        return(
            <div className="admin-add-post-panel">
                <h3>Dodawanie nowego Administratora</h3>
                <form onSubmit={this.submitUser}>

                    <input
                        placeholder="Nazwa użytkownika"
                        type="text"
                        required
                        class="admin-add-input-user"
                        name="Username"
                    >
                    </input>

                    <br/>

                    <input
                        placeholder="Hasło"
                        type="password"
                        required
                        class="admin-add-input-user"
                        name="Password"
                    >
                    </input>

                    <br/>

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
                        placeholder="Telefon"
                        type="phone"
                        required
                        class="admin-add-input-user"
                        name="Phone"
                    >
                    </input>

                    <br/>

                    <button className="admin-add-user-button" 
                        variant="primary" 
                        type="submit"
                    >
                        Dodaj użytkownika
                    </button>
                </form>
            </div>
        );
    }
}