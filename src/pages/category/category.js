import React,{Component,Fragment} from 'react';
import Header from './header/header';
import Content from './content/content';
import './category.css'


class Category extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Fragment>
                <div className="mainContent">
                    <Header/>
                    <Content/>
                </div>
            </Fragment>
        );
    }
}

export default Category


