import React from 'react'
import CarouselSlide from './CarouselSlide'

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 

configure({ adapter: new Adapter() });

describe('CarouselSlide', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
        <CarouselSlide
            imgUrl="https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2017/10/futurama-mobile-game.jpg"
            description = 'default description'
        />)
    })
    it('renders a <figure/> element', () => {
        expect(wrapper.type()).toBe('figure')
    })
    it('renders an img and a figcaption as children', () => {
        expect(wrapper.childAt(0).type()).toBe('img')
        expect(wrapper.childAt(1).type()).toBe('figcaption');
    })
    it('passes imageUrl through to the img', () => {
        const imgUrl = "https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2017/10/futurama-mobile-game.jpg"
        wrapper.setProps({ imgUrl })
        const img = wrapper.find('img')
        expect(img.prop('src')).toBe(imgUrl)
    })
    it('uses description and attriution as the figcaption', () => {
        const description = 'Fry, Bender, Leela'
        const attribution = 'by Matt Groening'
        wrapper.setProps({description, attribution})
        expect(wrapper.find('figcaption').text()).toBe(`${description}${attribution}`)
        expect(wrapper.find('figcaption strong').text()).toBe(description)
    })
    it('passes other props through to the figcaption', () => {
        const style = {}
        const onClick = () => {}
        const className = 'my-carousel-slide'
        wrapper.setProps({ style, onClick, className})
        expect(wrapper.prop('style')).toBe(style)
        expect(wrapper.prop('onClick')).toBe(onClick)
        expect(wrapper.prop('className')).toBe(className)
    })
})