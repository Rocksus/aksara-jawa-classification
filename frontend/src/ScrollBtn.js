import React from 'react'

const scrollToRef = () => window.scrollTo({top:window.innerHeight, behavior:'smooth'})   

class ScrollBtn extends React.Component {    
    render() {
        return (
            <div className="Scroll-button" onClick={scrollToRef}>
                <h2>Learn More</h2>
                <div className="Arrow-down" >
                    <img className="Arrow-btn" src="chevron-down-solid.svg" alt="learn more"></img>
                </div>
            </div>
        )
    }
}

export default ScrollBtn;