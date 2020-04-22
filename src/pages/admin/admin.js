import React, { Component ,Suspense, lazy} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Category  = lazy(()=> import('../category/category'));
const Home = lazy(() => import('../home/home'));

class Admin extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Suspense fallback={<div>正在加载...</div>}>

                        <Switch>
                            <Route path="/category" component={Category}/>
                            <Route path="/" component={Home}/>
                        </Switch>
                    </Suspense>
                </div>
            </Router>
        );
    }
}

export default Admin;
