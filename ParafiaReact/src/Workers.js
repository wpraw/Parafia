import { Component } from "react";

export class Workers extends Component{
    constructor(props){
        super(props);
        this.state = { 
            priests: [],
            counter: 0
        };
    }

    componentDidMount()
    {
        this.GetPriests();
    }

    GetPriests()
    {
        fetch('https://localhost:7132/api/UserPriest',{
            method:'GET',
            headers:{'Accept':'application/json',
            'Content-Type':'application/json'
          }
        })
        .then(response=>response.json())
        .then(data=>{
            this.setState({priests:data});
        });
    }

    GetRow()
    {
        let priests = this.state.priests;
        var i=1;
        return(
            priests.slice(this.state.counter*10, this.state.counter*10+10).map(priests=>
                <tr key={priests.PriestId}>
                    <td>{i++}</td>
                    <td>{priests.Degree}</td>
                    <td>{priests.Name}</td>
                    <td>{priests.Surname}</td>
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
            <div className="container-workers-subpage">
                <div className="table-workers-subpage">
                    <table>
                        <tr>
                            <th>LP</th>
                            <th>Tytuł</th>
                            <th>Imię</th>
                            <th>Nazwisko</th>
                        </tr>
                       {this.GetRow()}
                    </table>
                       {this.ButtonPagination()}
                </div>
            </div>
        );
    }
}