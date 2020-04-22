import React, { Component,Fragment } from "react";
import './Bottom.css'

class Bottom extends Component {


    constructor(props) {
        super(props)
    }

    componentDidMount () {

    }

    render() {
        return (
            <Fragment >
                <div className="Bottom">
                    <p className="Bottom-text">底部测试栏</p>
                </div>
            </Fragment>
        );
    }
}

export default Bottom

