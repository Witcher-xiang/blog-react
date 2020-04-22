import React, { Component,Fragment } from "react";
import './Opeacity.css'


class Opacity extends Component {


    constructor(props) {
        super(props)
    }

    componentDidMount () {

    }

    render() {
        return (
            <Fragment >
                <div className="Opacity">
                    <div className="Opacity-content">
                        <p className="Opacity-content-Name">Mr.Xiang</p>
                        <p className="Opacity-content-welcome">Welcome to my blog！</p>
                        <p className="Opacity-content-welcome">愿所有期待，都是久别重逢。</p>
                        <p >
                        </p>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Opacity

