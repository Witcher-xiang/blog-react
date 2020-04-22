import React, { Component,Fragment } from "react";

import './content.css';




class Content extends Component {


    constructor(props) {
        super(props)
    }

    componentDidMount () {

    }

    render() {
        return (
            <Fragment>
            <div className="content">
                <div className="box">
                    <div className="leftBox">
                        <span className="leftBox-title">Categories</span>
                        <ul className="leftBox-tags">
                            <li  className="leftBox-tags-li">React</li>
                            <li  className="leftBox-tags-li">React</li>
                            <li  className="leftBox-tags-li">React</li>
                            <li  className="leftBox-tags-li">React</li>
                        </ul>
                    </div>

                    <div className="rightBox">
                        <div className="rightBox-essay-single-head">
                            <span>#分类</span>
                        </div>
                            <div className="rightBox-essay-single">
                                <span>代码测试测试</span>
                                <span className="rightBox-essay-single-line"></span>
                                <span>2017.6.8</span>
                                    标签01
                                标签02
                            </div>
                        <div className="rightBox-essay-single">
                            <span>代码测试测试</span>
                            <span className="rightBox-essay-single-line"></span>
                            <span>2017.6.8</span>
                            标签01
                            标签02
                        </div>
                        <div className="rightBox-essay-single">
                            <span>代码测试测试</span>
                            <span className="rightBox-essay-single-line"></span>
                            <span>2017.6.8</span>
                            标签01
                            标签02
                        </div>
                    </div>
                </div>
            </div>
            </Fragment>
        );
    }
}

export default Content;

