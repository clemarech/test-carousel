import React, { PureComponent } from 'react'
import CarouselButton from './CarouselButton'

//purecomponent = don't need to be re-rendered unless its props or state change
class Carousel extends PureComponent {
    state = {
        slideIndex: 0,
    }

    prevActionClick = () => {
        this.setState({slideIndex: this.state.slideIndex -1})  
    }
    nextActionClick = () =>{
        this.setState({slideIndex: this.state.slideIndex + 1})  
    }
    render() {
        return (
            <div>
                <p>{this.state.slideIndex}</p>
                <CarouselButton data-action="prev" onClick={this.prevActionClick}>Prev</CarouselButton>
                <CarouselButton data-action="next" onClick={this.nextActionClick}>Next</CarouselButton>
            </div>
        )
    }
}

export default Carousel
