import React from 'react'
import Carousel from './Carousel'

import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'; 
import CarouselButton from './CarouselButton';

configure({ adapter: new Adapter() });

describe('Carousel', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Carousel />)
    })
    it('renders a div', () => {
        expect(wrapper.type()).toBe('div')
    })
    it('has an initial slideIndex of 0', () => {
        expect(wrapper.state('slideIndex')).toBe(0)
    })
    it('renders a Carousel button labeled "Prev"', () => {
        expect(
            wrapper
            .find(CarouselButton)
            .at(0)
            .prop('children')
        ).toBe('Prev')
    })
    it('renders a CarouselButton labeled "Next', () => {
        expect(
            wrapper
            .find(CarouselButton)
            .at(1)
            .prop('children')
        ).toBe('Next')
    })
    it('decrement slideIndex when the prev button is clicked', () => {
        wrapper.setState({ slideIndex: 1})
        wrapper.find('[data-action="prev"]').simulate('click')
        expect(wrapper.state('slideIndex')).toBe(0)
    })
    it('increment slideIndex when the next button is clicked', () => {
        wrapper.setState({ slideIndex: 1})
        wrapper.find('[data-action="next"]').simulate('click')
        expect(wrapper.state('slideIndex')).toBe(2)
    })
})