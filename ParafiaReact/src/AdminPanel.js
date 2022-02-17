import { Component, Fragment } from "react";
import { Navigate } from "react-router-dom";
import { AdminAddPost } from "./AdminAddPost";
import { AdminAddPriest } from "./AdminAddPriest";
import { AdminAddUser } from "./AdminAddUser";
import { AdminAdminTable } from "./AdminAdminTable";
import { AdminPostTable } from "./AdminPostTable";
import { AdminPriestTable } from "./AdminPriestTable";
import './App.css';

export class AdminPanel extends Component{
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
    }
    ChangeState(){
        this.setState({ 
            change: true, 
            redirect: "/log-in" 
        });
    }

    render(){
        console.log(localStorage.getItem('token'))
        console.log(localStorage.getItem('UserId'))
        if(localStorage.getItem('token') === undefined || localStorage.getItem('token') === null){
            localStorage.setItem('redirect', '/log-in');
            return <Navigate to={this.state.redirect} />
        }

        if(localStorage.getItem('token')  != null){
            return(
                <Fragment>
                    <div id="PanelBody">
                        <div className="Row">
                            <AdminAddPost/>
                            <AdminAddUser/>
                        </div>
                        <div className="Row">
                            <AdminAddPriest/>
                            <AdminPriestTable/>
                        </div>
                        <div className="Row">
                            <AdminAdminTable/>
                            <AdminPostTable/>
                        </div>
                    </div>
                </Fragment>
            );
        }
    }
}