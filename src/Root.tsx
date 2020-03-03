import * as React from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import App from './App';
import Edit from './components/Edit'
import Form from './components/Form'

export interface IRootProps {
}

export interface IRootState {
}

export default class Root extends React.Component<IRootProps, IRootState> {
    constructor(props: IRootProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <Router>
                <div>
                    <AppNavigation />
                    <br></br>
                    <Switch>
                        <Route path="/" exact component={App} />
                        {/* <Route path="/create" exact component={Form} /> */}
                        <Route path="/edit/:id" component={Edit} />
                    </Switch>   
                </div>
            </Router>
        );
    }
}
const AppNavigation =()=>
    <div className="navi">
      <NavLink to="/" exact activeClassName="active">Topics</NavLink> 
      {/* <NavLink to="/create" exact activeClassName="active">Create</NavLink>  */}

    </div>
