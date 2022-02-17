import { Component } from "react";
import { dateFun } from "./DateFunction";

export class News extends Component{
    constructor(props){
        super(props);
        this.state = { 
            posts: [],
            counter: 0
        };
    }

    componentDidMount()
    {
        fetch('https://localhost:7132/api/UserPost',{
            method:'GET',
            headers:{'Accept':'application/json',
            'Content-Type':'application/json'
          }
        })
        .then(response=>response.json())
        .then(data=>{
            this.setState({posts:data});
        });
    }

    renderPost(){
        let posts  = this.state.posts;
        
        return(
            posts.slice(this.state.counter*10, this.state.counter*10+10).map(pts=>
            <div className="single-post-container">
                <div className="single-post-container-title">
                    <h3>
                        {pts.Title}
                    </h3>
                    <h5 style={{marginTop: "-15px"}}>
                        {pts.Name} {pts.Nazwisko} | {dateFun(pts.DataDodania)}
                    </h5>
                </div>
                <div className="single-post-container-text">
                    <p>
                        {pts.Contents}
                    </p>
                </div>
            </div>
        ));
    }

    render(){
        return(
            <>
                <div className="container-news-subpage">
                    <div className="title-news-subpage">
                        <h1>Aktualności</h1>
                    </div><br/>
                </div> 
                <div className="container-news-subpage">
                    <div className="all-news-subpage">
                        {this.renderPost()}
                    </div>
                </div>

            </>
        );
    }
}