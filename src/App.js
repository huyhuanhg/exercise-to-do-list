import {useState} from "react";
import {Router, Switch, Route} from "react-router-dom";

import ToDoPage from "./pages/ToDo";
import ToDoDetailPage from "./pages/ToDoDeatail";

import history from './utils/history';

import "antd/dist/antd.css";

function App() {
    const [formType, setFormType] = useState('');

    return (
        <Router history={history}>
            <Switch>

                <Route exact path="/" render={routeProps => {
                    return <ToDoPage {...routeProps} formType={formType} setFormType={setFormType}/>
                }
                }/>

                <Route exact path="/detail/:id" render={routeProps => {
                    return <ToDoDetailPage {...routeProps} setFormType={setFormType} formType={formType}/>
                }
                }/>

                <Route render={() => {
                    return (<h2>404 Not Found</h2>);
                }}/>
            </Switch>
        </Router>
    );
}

export default App;
