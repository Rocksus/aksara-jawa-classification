import React from 'react'

class Label extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            classID: -1,
            className:""
        }
    }

    getClassified = () => {
        if(this.state.classID===-1) {
            return ""
        }
        return `./classification/${this.state.className}.png`
    }

    changeState = (id, name) => {
        this.setState({
            classID: id,
            className: name
        })
    }

    render() {
        const imgUrl = this.getClassified();
        return (
            <div className="Label">
                <img src={imgUrl} alt={this.state.className}></img>
                <p>{this.state.className}</p>
            </div>
        )
    }
}

export default Label;