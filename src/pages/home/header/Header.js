import React, { Component,Fragment } from "react";
import './Header.css'
import {Link} from "react-router-dom";



class Header extends Component {

    constructor(props) {
        super(props);
        this.state={
            status:false,
            screenWidth:document.documentElement.clientWidth,
        };
        /*右导航栏样式切换函数*/
        this.rightNavClicked=this.rightNavClicked.bind(this);
        this.setWidth=this.setWidth.bind(this)
    }


    componentDidMount () {
        let that=this;
        window.onresize=function () {
            console.log(document.documentElement.clientWidth)
            that.setState({
                screenWidth:document.documentElement.clientWidth
            })
        }

    }

    setWidth(){
        this.setState({
            screenWidth:document.documentElement.clientWidth
        })
    }

    rightNavClicked(){
        this.setState({
            status:!this.state.status
        })
    }

    /*点击首页导航栏时*/
    onClickHome(ref){

    }
    /*点击分类时*/
    onClickCategory(ref){

    }

    render(){
        if (this.state.screenWidth<890){
          return <Fragment>
              <div className="small-header">
                  <span onClick={this.rightNavClicked}
                        className="header-menu"
                  >
                    点击展开
                  </span>
              </div>
              {this.state.status?<div className="header-menu-clicked">
                  <Link  className="header-chunk-mobile"
                         to={{
                             pathname:"/",
                         }}
                  > 首页</Link>
                  <Link to={{
                      pathname:"/category",
                  }}  className="header-chunk-mobile">分类</Link>
                  <Link to={{
                      pathname:"/experience",
                  }}  className="header-chunk-mobile">历程</Link>
                  <Link to={{
                      pathname:"/myself",
                  }}  className="header-chunk-mobile">自己</Link>
              </div>:""}

          </Fragment>
        }
        return (
            <Fragment >
                <div className="header">
                  <Link
                      onClick={this.onClickHome.bind(this)}
                      to={{
                      pathname:"/",
                  }}  className="header-chunk">首页</Link>
                    <Link
                        onClick={this.onClickCategory.bind(this)}
                        to={{
                        pathname:"/category",
                    }}  className="header-chunk">分类</Link>
                    <Link to={{
                        pathname:"/experience",
                    }}  className="header-chunk">历程</Link>
                    <Link to={{
                        pathname:"/myself",
                    }}  className="header-chunk">关于我</Link>
                </div>
            </Fragment>
        );
    }
}

export default Header

