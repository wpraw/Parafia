import { Component, Fragment } from "react";

import { Header } from './Header';

import { Workers } from './Workers';
import { News } from './News';
import { Hours } from './Hours';
import { Contact } from './Contact';

export class Home extends Component{
    constructor(props){
        super(props);
        this.state = { 
            opennedPage: null,
            redirect: false,
        }
    }

    CheckOpennedPage(opennedPage){
        if(opennedPage === "/" 
        || opennedPage === null 
        || opennedPage === undefined
        || opennedPage === "/aktualnosci"){
            return(
                <News/>  
            );
        }
        if(opennedPage === "/godziny"){
            return(
                <Hours/>
            );
        }
        if(opennedPage === "/ksieza"){
            return(
                <Workers/>
            );
        }
        if(opennedPage === "/kontakt"){
            return(
                <Contact/>
            );
        }
    }

    render(){
        this.opennedPage = localStorage.getItem("page");
        var opennedPage = this.opennedPage;
        
        return(
            <Fragment>
                <Header/>
                <div className="background-cover-web">
                    {this.CheckOpennedPage(opennedPage)}
                </div>
            </Fragment>
        )
    }
}