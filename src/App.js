import React, { Component } from 'react'

import Header from './components/header/header'
import './App.css'
import "babel-polyfill"

import logoSoloJuandis from './assets/images/logo-white.svg'
import logoJuandis from './assets/images/logo-txt-white.svg'

import photoRiseUp from './assets/images/photos/riseup-green-leaf-11.jpg'
import photoMe from './assets/images/photos/foto1-portfolio-ed.jpg'

import mockupNoBlur from './assets/images/mockup-1.png'
import mockupBlurOne from './assets/images/mockup-blur-1.png'
import mockupBlurTwo from './assets/images/mockup-blur-2.png'

import Typed from 'typed.js';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Parallax from 'react-springy-parallax'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

        projects: [
            {
                title: 'SquarePin',
                urlImage: 'trenggo',
                short: 'Design to make real state accessible',
                description: 'I am still working on a real state platform and marketplace, based on democratic principles through security and usability.',
                roles: [
                    'Project Management', 'Product Design', 'UX Design', 'Frontend'
                ],
                country: 'mex',
                year: '2018 - 2019',
                where: 'Angular Diseño más Interacción'
            },
            {
                title: 'Frostbyte',
                urlImage: 'squarepin',
                short: 'Design with analytics and IoT',
                description: 'I had the oportunity to understand the relationship between analytics, IoT and its own value through design, software and data.',
                roles: [
                    'Project Management', 'Product Design', 'Frontend'
                ],
                country: 'col',
                year: '2019',
                where: 'Angular Diseño más Interacción'
            },
            {
                title: 'We Are Angular',
                urlImage: 'paco',
                description: 'I had the responsibility to build, define and design a new retouch to We Are Angular brand image haciendo referencia a la trannsformación organizacional interna y externa.',
                roles: [
                    'Creative Design', 'Frontend'
                ],
                country: 'col',
                year: '2018',
                where: 'Angular Diseño más Interacción'
            },
            {
              title: 'Icesi University',
              urlImage: 'paco',
              description: 'Gestionar el diseño y producción del eBook "Desarrollo Empresarial" del departamento CDEE, de la Universidad Icesi. Donde además participé en la producción audio visual de las introducciones de los capítlos.',
              roles: [
                  'Project Managment', 'Creative Design', 'Audiovisual'
              ],
              country: 'col',
              year: '2018 - 2019',
              where: 'Angular Diseño más Interacción'
          },
        ],
    }
}
  render() {
    return (
      <>
        <Header />
        <Parallax ref="parallax" pages={4} className="juandis">
          <Parallax.Layer offset={0} speed={0.5} className="firstParallax prlx">
            <div className="initialSection">
              <div className="titleLanding">
                <h1>I create tools, experiences and solutions with value through design.</h1>
                <a>
                  <span>ICON</span>
                </a>
              </div>
              <div className="mockupsBanner">
                <Parallax.Layer speed={0.7} className="img1">
                  <img src={mockupBlurTwo} alt="Image Mocku" />
                </Parallax.Layer>

                <Parallax.Layer speed={1} className="img2">
                  <img src={mockupNoBlur} alt="Image Mocku" />
                </Parallax.Layer>

                <Parallax.Layer speed={0.3} className="img3">
                  <img src={mockupBlurOne} alt="Image Mocku"/>
                </Parallax.Layer>
              </div>
            </div>
          </Parallax.Layer>
          <Parallax.Layer offset={1}>
            <div className="photosSection">
              <div className="titleLanding" style={{background: `url(${photoRiseUp}) no-repeat center center`, backgroundSize: 'cover'}}>
              <div className="footerBanner">
                <h3>i love <TypedReactDemo strings={['photography', 'coding', 'to learn', 'design', 'write', 'problems', 'challenges']} /></h3>
                <img src={logoSoloJuandis} alt="Logo Juandis" className="logo-big" />
              </div>
              </div>
            </div>
            </Parallax.Layer>

            <Parallax.Layer offset={2}>
            <div className="meSection">
              <div className="titleLanding">
                <img src={photoMe} alt="Juan David's Photo" className="profilePhoto" />
              </div>
              <div className="mockupsBanner">
                <p>I’m an interaction designer working on software and digital solutions, based on user experience at Angular Diseño más Interacción, Cali, CO.<br/>
                He tenido la oportunidad de trabajar de la mano de diseñadores y desarrolladores, gestionando proyectos de software, productos y soluciones digitales para pequeñas y grandes proyectos.</p>
              </div>
            </div>  
            </Parallax.Layer>

            <Parallax.Layer offset={3}>
            <div className="projects">
              <div>
              <Carousel showThumbs={false} showArrows={true}>
                  {this.state.projects.map(item => (
                      <Project key={item} title={item.title} description={item.description} country={item.country} roles={item.roles} urlImage={item.urlImage} where={item.where} short={item.short} year={item.year}/>
                  ))}
              </Carousel>
              </div>  
            </div>
            </Parallax.Layer>  

        <Parallax.Layer offset={4}>
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
          </Parallax.Layer>
    
        </Parallax>
      </>
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

class Project extends React.Component {
  render() {
      const { title = 'input', description = 'text', roles = [], short = '', urlImage = '', year = '', where = '', country = ''} = this.props;
      return (
          <div className="contentProject">
            <div className="infoProject">
                  <h4>{short}</h4>
                  <p>{title}</p>
                  <p>{description}</p>
                  <p>{roles.map(item => (
                      <span className={'technology icon ion'+item} key={item} title={item}>{item}</span>
                  ))}</p>
                  <p>at {where}</p>
              </div>

              <div className="imageContentProject">
                <p>{year}</p>
                <img src={`./assets/images/projects/${urlImage}.png`} alt={`Image ${title}`} />
                {/* <div className="imageProject" style={{background:'url(/assets/projects/'+urlImage+'/slider-mockup-'+urlImage+'.png) center center no-repeat',backgroundSize:'cover'}}></div> */}
              </div>
              
          </div>
      );
  }
}


export default App;
