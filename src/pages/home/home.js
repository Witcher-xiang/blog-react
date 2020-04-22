import React,{lazy} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './header/Header'
import Opacity from './opacity/Opacity'
import Content from './content/Content'
import 'antd/dist/antd.css';
import Bottom from './bottom/Bottom'

function Home() {
    return (
        <div>
            <Header/>
            <Opacity/>
            <Content/>
            <Bottom/>
        </div>
    );
}

export default Home;
