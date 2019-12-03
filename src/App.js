import React, { Component } from 'react'

import Header from './components/header/header'
import './App.css'
import "babel-polyfill"

import logoSoloJuandis from './assets/images/logo-white.svg'
import logoJuandis from './assets/images/logo-txt-white.svg'
import photoRiseUp from './assets/images/photos/riseup-green-leaf-11.jpg'

import mockupNoBlur from './assets/images/mockup-1.png'
import mockupBlurOne from './assets/images/mockup-blur-1.png'
import mockupBlurTwo from './assets/images/mockup-blur-2.png'

import Typed from 'typed.js';

import Parallax from 'react-springy-parallax'

class App extends Component {
  render() {
    return (
      <Parallax ref="parallax" pages={3} className="juandis">
        <Parallax.Layer
        speed={0.5}
        >
          <Header />
          <div className="initialSection">
            <div className="titleLanding">
              <h1>I create tools, experiences and solutions with value through design.</h1>
              <a>
                <span>ICON</span>
              </a>
            </div>
            <div className="mockupsBanner">
              <Parallax.Layer speed={0.7}>
                <img src={mockupBlurTwo} alt="Image Mocku" />
              </Parallax.Layer>

              <Parallax.Layer speed={1}>
                <img src={mockupNoBlur} alt="Image Mocku" />
              </Parallax.Layer>

              <Parallax.Layer speed={0.3}>
                <img src={mockupBlurOne} alt="Image Mocku" />
              </Parallax.Layer>
            </div>
          </div>
        </Parallax.Layer>

          <div className="photosSection">
            <div className="titleLanding" style={{background: `url(${photoRiseUp}) no-repeat center center`, backgroundSize: 'cover'}}>
            <div className="mockupsBanner">
            <h3>i love <TypedReactDemo strings={['photography', 'coding', 'to learn', 'design', 'write', 'problems', 'challenges']} /></h3>
            <img src={logoSoloJuandis} alt="Logo Juandis" />
            </div>
            </div>
          </div>
  
          <div className="meSection">
            <div className="titleLanding">
              <img src="" alt="" />
            </div>
            <div className="mockupsBanner">
              <p>I’m an interaction designer working on software and digital solutions, based on user experience at Angular Diseño más Interacción, Cali, CO.<br/>
              He tenido la oportunidad de trabajar de la mano de diseñadores y desarrolladores, gestionando proyectos de software, productos y soluciones digitales para pequeñas y grandes proyectos.</p>
            </div>
          </div>        

        <footer>
          <div>

          </div>
          <div>
            <a><img src={logoJuandis} alt="Logo Juan David"/></a>
            <div>
              <p>@ 2019</p>
              <a href="mailto:hello@juandis.design">hello@juandis.design</a>
              <p>Colombia</p>
            </div>
          </div>
        </footer>
  
      </Parallax>
    );
  }
}

class TypedReactDemo extends React.Component {
  componentDidMount() {
      // If you want to pass more options as props, simply add
      // your desired props to this destructuring assignment.
      const { strings } = this.props;
      // You can pass other options here, such as typing speed, back speed, etc.
      const options = {
          strings: strings,
          typeSpeed: 50,
          backSpeed: 50,
          loop: true,
      };
      // this.el refers to the <span> in the render() method
      this.typed = new Typed(this.el, options);
  }
  componentWillUnmount() {
      // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
      this.typed.destroy();
  }
  render() {
      return (
          <div className="wrap">
              <div className="type-wrap">
                  <span
                      style={{ whiteSpace: 'pre' }}
                      ref={(el) => { this.el = el; }}
                  />
              </div>
          </div>
      );
  }
}


export default App;
