import { Component } from "react";
import './App.css';

export class AdminAdminTable extends Component{
    constructor(props){
        super(props);
        this.state = { 
            admins: [],
            counter: 0,
        };
    }

    componentDidMount()
    {        
        var token = localStorage.getItem("token");
        fetch('https://localhost:7132/api/User',{
            method:'GET',
            headers:{'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${token}`,
          }
        })
        .then(response=>response.json())
        .then(data=>{
            this.setState({admins:data});
        });
    }

    handleSubmit(UserId){
        if (window.confirm("Czy napewno chcesz usunąć tego użytkownika?")) {
            const token = localStorage.getItem('token');
            fetch('https://localhost:7132/api/User/'+UserId,{
            method:'Delete',
            headers:{'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${token}`}
            })
            .then(()=>{ 
                alert("Usunięto");
                window.location.reload(true);
            })
        } 
        else {
            alert("Anulowano usuwanie");
        }
    }
    
    GetRow()
    {
        let admins = this.state.admins;
        var i=1;
        return(
            admins.slice(this.state.counter*10, this.state.counter*10+10).map(admins=>
                <tr key={admins.UserId}>
                    <td>{i++}</td>
                    <td>{admins.UserId}</td>
                    <td>{admins.Username}</td>
                    <td>{admins.Name}</td>
                    <td>{admins.Surname}</td>
                    <td>{admins.NumberPhone}</td>
                    <td><form onSubmit={()=>this.handleSubmit(admins.UserId)}><button type="submit"> Usuń </button></form></td>
                </tr>
        ))
    }

    increment() {
        this.setState((prevState) => {
            let prev = prevState.counter;
            prev = prev + 1;
            let indexprev = this.state.index - 10;
            return { counter: prev, index: indexprev };
        })
    }

    decrement() {
        this.setState((prevState) => {
            let prev = prevState.counter;
            prev = prev - 1;
            let indexprev = this.state.index - 10;
            return { counter: prev, index: indexprev };
        })
    }

    ButtonPagination = () => {
        if(this.state.counter === 0){
            return (
             <button
                 onClick={this.increment.bind(this)}>
                 Następna strona
             </button>
            )
        }
        else{
         return (
            <>
                <button
                    onClick={this.decrement.bind(this)}>
                    Poprzednia strona
                </button>
                <button
                    onClick={this.increment.bind(this)}>
                    Następna strona
                </button>
            </>
        )}
    }

    render(){
        return(
            <div className="admin-add-post-panel">
                <div>
                    <table style={{color: "black"}}>
                        <tr>
                            <th>LP</th>
                            <th>User ID</th>
                            <th>Nazwa użytkownika</th>
                            <th>Imię</th>
                            <th>Nazwisko</th>
                            <th>Telefon</th>
                            <th>Akcje</th>
                        </tr>
                       {this.GetRow()}
                    </table>
                       {this.ButtonPagination()}
                </div>
            </div>
        );
    }
}