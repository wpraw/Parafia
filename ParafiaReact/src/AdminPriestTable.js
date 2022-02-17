import { Component } from "react";
import './App.css';

export class AdminPriestTable extends Component{
    constructor(props){
        super(props);
        this.state = { 
            priests: [],
            counter: 0,
        };
    }

    componentDidMount()
    {        
        var token = localStorage.getItem("token");
        fetch('https://localhost:7132/api/UserPriest',{
            method:'GET',
            headers:{'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${token}`,
          }
        })
        .then(response=>response.json())
        .then(data=>{
            this.setState({priests:data});
        });
    }

    handleSubmit(Id){
        if (window.confirm("Czy napewno chcesz usunąć tego księdza?")) {
            const token = localStorage.getItem('token');
            fetch('https://localhost:7132/api/UserPriest/'+Id,{
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
        let priests = this.state.priests;
        var i=1;
        return(
            priests.slice(this.state.counter*10, this.state.counter*10+10).map(priests=>
                <tr key={priests.PriestId}>
                    <td>{i++}</td>
                    <td>{priests.PriestId}</td>
                    <td>{priests.Degree}</td>
                    <td>{priests.Name}</td>
                    <td>{priests.Surname}</td>
                    <td><form onSubmit={()=>this.handleSubmit(priests.PriestId)}><button type="submit"> Usuń </button></form></td>
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
                            <th>Priest ID</th>
                            <th>Degree</th>
                            <th>Imię</th>
                            <th>Nazwisko</th>
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