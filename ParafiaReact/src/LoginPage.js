import { Component } from "react";
import { Navigate } from "react-router-dom";
import crosslogo from './img/crosslogo.png';

export class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state = { 
            opennedPage: null,
            change: false,
            redirect: localStorage.getItem('redirect'),
            token: localStorage.getItem('token'),
            UserId: localStorage.getItem('UserId')
        }
        this.ChangeState = this.ChangeState.bind(this);
        this.LoginSubmit = this.LoginSubmit.bind(this);
    }
    ChangeState(){
        this.setState({ 
            change: true, 
            redirect: "/admin-panel" 
        });
    }

    LoginSubmit(user)
    {
        fetch('https://localhost:7132/api/Authentication',{
            method:'POST',
            mode: 'cors',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                username:user.target.username.value,
                password:user.target.password.value,
            })
        })
        .then(res=>res.json())
        .then((result)=>{ 
            this.state.token = result;
            if(this.state.token === "errorLogin")
                   alert("Wprowadź poprawny login lub hasło")
            else
            {
                localStorage.setItem('token', this.state.token);
                fetch('https://localhost:7132/api/Authentication/'+user.target.username.value,{
                    method:'GET',
                    mode: 'cors',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json',
                        'Authorization': `Bearer ${this.state.token}`
                    },
                })
                .then(res=>res.json())
                .then((result)=>{ 
                    var user = result;
                    user.map(usr=>{
                        localStorage.setItem('UserId', usr.UserId);
                        this.state.UserId=usr.UserId;
                    })
                        this.ChangeState();
                })
                this.ChangeState();
            }
        })
    }
    
    render(){
        if (this.state.change === true || localStorage.getItem('token') != null) {
            localStorage.setItem('redirect', '/admin-panel');
            return <Navigate to={this.state.redirect} />
        }
        else 
        {
            return(
                <>
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
                </div>
                <div id="loginContent" className="loginContent">
                    <div id="background-logpage">
                    <div class="shape-logpage"></div>
                    <div class="shape-logpage"></div>
                    <form class="form-logpage" onSubmit={this.LoginSubmit}>
                        <h3>Logowanie do panelu administratora</h3>

                        <label for="username">Nazwa użytkownika</label>
                        <input type="text" placeholder="Nazwa użytkownika" id="username"></input>

                        <label for="password">Hasło</label>
                        <input type="password" placeholder="Hasło" id="password"></input>

                        <button class="button-logpage">Zaloguj</button>

                    </form>
                </div>
                </div>
                </>
            );
        }
    }
}