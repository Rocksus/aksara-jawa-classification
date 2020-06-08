import React from 'react'
import p5 from 'p5'
import sendData from './Client'
import Label from './Label'

class Sketch extends React.Component {
    constructor(props) {
        super(props)
        //p5 instance mode requires a reference on the DOM to mount the sketch
        //So we use react's createRef function to give p5 a reference
        this.renderRef = React.createRef()
        this.resetRef = React.createRef()
        this.classifyRef = React.createRef()
        this.labelRef = React.createRef()
    }
    
    // This uses p5's instance mode for sketch creation and namespacing
    Sketch = (p) => {
        p.setup = () => {
            let canvas = p.createCanvas(224,224)
            canvas.id('DrawCanvas')
            p.background(255)
        }

        p.draw = () => {
            p.fill(0)
            p.strokeWeight(4)

            if (p.mouseIsPressed) {
                p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
            }
            if (this.resetRef.current.value === "true") {
                p.resetCanvas()
                this.resetRef.current.value = false
            }
        }

        p.resetCanvas = () => {
            p.background(255)
        }
    }

    classifyImage() {
        var c=document.getElementById("DrawCanvas");
        sendData(c, this.labelRef.current);
    }

    resetCanvas() {
        this.resetRef.current.value = true
        this.labelRef.current.changeState(0, "")
    }

    componentDidMount() {
        //We create a new p5 object on component mount, feed it
        this.myP5 = new p5(this.Sketch, this.renderRef.current)
    }

    render() {
        return (
            //This div will contain our p5 sketch
            <div>
                <Label ref={this.labelRef}></Label>
                
      <p className="Sketch-description">try drawing here and then clicking classify!</p>
            <div className="Sketch">
                <div ref={this.renderRef}>
                </div>
                    <button ref={this.classifyRef} onClick={this.classifyImage.bind(this)}>Classify</button>
                    <button ref={this.resetRef} onClick={this.resetCanvas.bind(this)}>Reset</button>
            </div>
            </div>
        )
    }
}

export default Sketch;