import { Component } from "react";
import { generateUUID } from "./generateGUID";
import './App.css';

export class AdminAddPost extends Component{

    submitPost(event){
        event.preventDefault();
        var PostId = generateUUID();
        var token = localStorage.getItem("token");
        var UserId = localStorage.getItem('UserId');
        fetch('https://localhost:7132/api/Post',{
            method:'POST',
            mode: 'cors',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body:JSON.stringify({
                PostId: PostId, 
                UserId: UserId,
                Title: event.target.title.value,
                Contents: event.target.desc.value,
                isDeleted: 0
            })
        })
        .then(res=>res.json())
        .then(()=>{ 
            alert("Dodano nowe ogłoszenia parafialne");
            window.location.reload();
        })
        .catch(()=>{
            alert("Nie dodano twego ogłoszenia parafialnego Panie, wystąpił błąd");
        });
    }

    logOut(){
        localStorage.clear();
        window.location.reload();
    }

    render(){
        return(
            <div className="admin-add-post-panel">
                <h1 style={{color: "white"}}>Panel administracyjny</h1> 
                <a href="/log-in"> <button onClick={this.logOut}>Wyloguj</button> </a>
                <h3>Dodawanie ogłoszeń parafialnych</h3>
                <form onSubmit={this.submitPost}>
                    <input
                        placeholder="Dodaj tytuł mój Panie..."
                        type="text"
                        required
                        class="admin-post-input-title"
                        name="title"
                    >
                    </input>

                    <br/>

                    <textarea 
                        name="comment" 
                        placeholder="Dodaj treść swojego ogłoszenia parafialnego mój Panie..."
                        required
                        class="admin-post-input-desc"
                        name="desc"
                    >
                    </textarea>

                    <br/>

                    <button className="admin-add-post-button" 
                        variant="primary" 
                        type="submit"
                    >
                        Opublikuj
                    </button>
                </form>
            </div>
        );
    }
}