import React, { Component,Fragment } from "react";
import './Content.css'
import {Link} from 'react-router-dom';
import Layout from './Layout'
class Content extends Component {


    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Fragment >
                <div className="Content">
                    <div className="topEssay">
                        <div className="topEssay-header">
                           这是我的测试文章

                        </div>

                        <div className="topEssay-time">
                            <span className="topEssay-creatTime"> 2019-12-6</span>
                            <span className="topEssay-modifyTime"> 2019-12-8</span>
                        </div>
                        <div className="topEssay-digest">
                            <p> 摘要测试哈哈哈哈哈哈哈</p>
                        </div>
                        <div>

                        </div>
                        <div className="essay-content">
                            <p>我去的地方是晴日与清风，离开的地方是微暖与将寒。离开的是你在的地方。
                                ——《七月初一， 你去的地方将是秋日和黄昏》
                            </p>
                            <p>
                                “唯一的遗憾是我们连一张合照都没有，就像从来没在我人生出现过一样。”
                                —— Dividing Line
                            </p>
                        </div>
                        <div className="essay-tags">

                        </div>
                        <div className="essay-readMoreContent">
                            <Link className="essay-readMore"
                                to={{
                                pathname:"/essay",
                            }}>
                                想要阅读全文
                            </Link>

                        </div>
                        <div className="essay-line"></div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default Content

