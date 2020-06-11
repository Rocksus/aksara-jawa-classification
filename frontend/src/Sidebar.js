import React from 'react'
import arrow from './arrow.png'

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            show:false
        }
    }

    render() {
        let transformStyle = {
            transform: (this.state.show ?`translate3d(0px, 0px, 0px)`: `translate3d(calc(100% - 60px), 0px, 0px)`)
        };
        let buttonStyle = {
            transform: (this.state.show ? `rotate(180deg) translate(-5px, 0)`:`rotate(0deg)`)
        }
        return (
            <div className="Sidebar" style={transformStyle}>
                <div className="Sidebar-clicker" >
                    <div className="Sidebar-circle" onClick={() => {this.setState({show: !this.state.show});}}>
                        <img className="arrow-btn" src={arrow}  style={buttonStyle} alt="btn"></img>
                    </div>
                </div>
                <div className="Sidebar-content">
                    <h1>Examples</h1>
                </div>
            </div>
        )
    }
}

export default Sidebar;