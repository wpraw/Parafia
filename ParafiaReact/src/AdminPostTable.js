import { Component } from "react";
import './App.css';

export class AdminPostTable extends Component{
    constructor(props){
        super(props);
        this.state = { 
            posts: [],
            counter: 0,
        };
    }

    componentDidMount()
    {        
        var token = localStorage.getItem("token");
        fetch('https://localhost:7132/api/UserPost',{
            method:'GET',
            headers:{'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${token}`,
          }
        })
        .then(response=>response.json())
        .then(data=>{
            this.setState({posts:data});
        });
    }

    handleSubmit(Id){
        if (window.confirm("Czy napewno chcesz usunąć tego posta?")) {
            const token = localStorage.getItem('token');
            fetch('https://localhost:7132/api/Post/'+Id,{
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
        let posts = this.state.posts;
        var i=1;
        return(
            posts.slice(this.state.counter*10, this.state.counter*10+10).map(posts=>
                <tr key={posts.PostId}>
                    <td>{i++}</td>
                    <td>{posts.PostId}</td>
                    <td>{posts.Title}</td>
                    <td>{posts.Name}</td>
                    <td>{posts.Nazwisko}</td>
                    <td>{posts.DataDodania}</td>
                    <td><form onSubmit={()=>this.handleSubmit(posts.PostId)}><button type="submit"> Usuń </button></form></td>
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
                            <th>Post ID</th>
                            <th>Tytuł</th>
                            <th>Imię wstawiającego</th>
                            <th>Nazwisko wstawiającego</th>
                            <th>Data dodania</th>
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