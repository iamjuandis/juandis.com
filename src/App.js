import React, { Component } from 'react'

import Header from './components/header/header'
import './App.css'
import "babel-polyfill"

import logoSoloJuandis from './assets/images/logo-white.svg'
import logoJuandis from './assets/images/logo-txt-white.svg'

import ARROW_RIGHT from './assets/icons/arrow_forward-24px.svg'
import ARROW_DOWN from './assets/icons/arrow_downward-24px.svg'

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
                urlImage: 'squarepin',
                short: 'Design to make real state accessible',
                description: 'I am still working on a real state platform and marketplace, based on democratic principles through security and usability.',
                roles: [
                    'Project Management', 'Product Design', 'UX Design', 'Frontend'
                ],
                country: 'mex',
                year: '2018 - 2019',
                where: 'Angular Diseño más Interacción',
                colors: {
                  first: '000A66',
                  second: '0032E3'
                },

                behance:'https://www.behance.net/gallery/88957659/SquarePin-Real-State-Platform'
            },
            {
                title: 'Frostbyte',
                urlImage: 'frostbyte',
                short: 'Design with analytics and IoT',
                description: 'I had the oportunity to understand the relationship between analytics, IoT and its own value through design, software and data.',
                roles: [
                    'Project Management', 'Product Design', 'Frontend'
                ],
                country: 'col',
                year: '2019',
                where: 'Angular Diseño más Interacción',
                colors: {
                  first: '192D6B',
                  second: '00C0A9'
                },

                behance:'https://www.behance.net/gallery/88959189/Frostbyte-Analytics-Platform',
            },
            {
                title: 'We Are Angular',
                urlImage: 'angular',
                short: 'A new beginnig to home',
                description: 'I had the responsibility to build, define and design a new retouch to We Are Angular brand image referring to internal and external organizational transformation.',
                roles: [
                    'Creative Design', 'Frontend'
                ],
                country: 'col',
                year: '2018',
                where: 'Angular Diseño más Interacción',
                colors: {
                  first: 'FFA800',
                  second: 'DE6B00'
                },

                behance:'https://www.behance.net/gallery/88961801/We-Are-Angular-Rebranding',
            },
            {
              title: 'Icesi University',
              urlImage: 'ebook',
              short: 'Design & learn with the accademy',
              description: "Manage the design and production of the eBook 'Desarrollando Competencias Empresariales' (Developing business skills) by the CDEE (Business Development Center) department of the Icesi University.",
              roles: [
                  'Project Managment', 'Creative Design', 'Audiovisual'
              ],
              country: 'col',
              year: '2018 - 2019',
              where: 'Angular Diseño más Interacción',
              colors: {
                first: '002F9E',
                second: 'FF9900'
              },

              behance:'https://www.behance.net/gallery/88961063/eBook-Desarrollando-Competencias-Empresariales',
          },
        ],
    }
}
  render() {
    return (
      <>
        <Header test={this.test} />
        <Parallax ref={ref => this.parallax = ref} pages={4} className="juandis" id="parall">
          <Parallax.Layer offset={0} speed={0.5} className="firstParallax prlx">
            <div className="initialSection">
              <div className="titleLanding">
                <h1>I create tools, experiences and solutions with value through design.</h1>
                <a onClick={() => this.parallax.scrollTo(1)} title="Go" className="goDown">
                  <img className="focusable" src={ARROW_DOWN} alt="Go"/>
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
          <Parallax.Layer offset={1} id="me">
            <div className="photosSection">
              <div className="titleLanding" style={{background: `url(${photoRiseUp}) no-repeat center center`, backgroundSize: 'cover'}}>
              <div className="footerBanner">
                <h3>i love <TypedReactDemo strings={['photography', 'coding', 'to learn', 'design', 'write', 'problems', 'challenges']} /></h3>
                <img src={logoSoloJuandis} alt="Logo Juandis" className="logo-big" />
              </div>
              </div>
            </div>
            </Parallax.Layer>

            <Parallax.Layer offset={2} className="toUp">
            <div className="meSection">
              <div className="titleLanding">
                <div className="meImg" style={{background:`url(${photoMe}) no-repeat center center`,backgroundSize:'cover'}}></div>
              </div>
              <div className="textMe">
                <p>I’m an interaction designer working on software and digital solutions, based on user experience design at Angular Diseño más Interacción, Cali, CO.<br/><br/>
                I have had the opportunity to work with designers and developers, managing software projects, products and digital solutions for small and large projects..</p>
              </div>
            </div>  
            </Parallax.Layer>

            <Parallax.Layer offset={3} className="toUp pr" id="work">
            <div className="projects">
              <div>
              <Carousel
              autoPlay={false}
              showThumbs={false}
              showArrows={true}
              transitionTime={1000}
              interval={10000}
              infiniteLoop={true}
              showStatus={false}
              showIndicators={false}>
                  {this.state.projects.map(item => (
                      <Project
                      key={item}
                      title={item.title}
                      description={item.description}
                      country={item.country}
                      roles={item.roles}
                      urlImage={item.urlImage}
                      where={item.where}
                      short={item.short}
                      year={item.year}
                      colors={item.colors}
                      behance={item.behance}/>
                  ))}
              </Carousel>
              </div>  
            </div>
            </Parallax.Layer>  

        <Parallax.Layer offset={4} className="last" id="contact">
          <footer>

            <div className="up">

              <div className="right">
                <p>Let's talk about us</p>
              </div>

              <div className="left">
                <p className="colorsLinks"><a href="">download</a> my cv<br/>
                email me <a href="mailto:hi@juandis.design">hi@juandis.design</a></p>
                <p className="externalLinks">
                  <a href="https://www.linkedin.com/in/juandis/" title="LinekdIn">linkedin</a>
                  <a href="https://www.behance.net/iamjuan" title="Behance">behance</a>
                  <a href="https://github.com/iamjuandis" title="GitHub">github</a>
                </p>
              </div>
            </div>

            <div className="down">
              <a href="https://juandis.design" className="logoL"><img src={logoJuandis} alt="Logo Juan David"/></a>
              <div className="infoFooter">
                <p>@ 2019</p>
                <a href="mailto:hi@juandis.design" title="Email me">hi@juandis.design</a>
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
          <span className="wrap">
              <span
                  style={{ whiteSpace: 'pre' }}
                  ref={(el) => { this.el = el; }}
              />
          </span>
      );
  }
}

class Project extends React.Component {
  render() {
      const {
        title = 'input',
        description = 'text',
        roles = [],
        short = '',
        urlImage = '',
        year = '',
        where = '',
        country = '',
        colors = {},
        behance = ''
      } = this.props;
      return (
          <div className="contentProject">
            <div className="infoProject">
                  <h4 style={{color: `#${colors.first}`}}>{short}</h4>
                  <p style={{color: `#${colors.second}`}} className="titlePr">{title}</p>
                  <p style={{color: `#${colors.first}`}}>{description}</p>
                  <p style={{color: `#${colors.first}`}} className="rolesPr">{roles.map(item => (
                      <span className={'technology icon ion'+item} key={item} title={item}>{item}</span>
                  ))}</p>
                  <p style={{color: `#${colors.first}`}}>at {where}</p>
              </div>

              <div className="imageContentProject">
                <p style={{color: `#${colors.first}`}}>{year}</p>
                <Parallax.Layer speed={0.7} offset={1}>
                <img src={`${process.env.PUBLIC_URL}/images/projects/${urlImage}.png`} alt={`Image ${title}`} />
                </Parallax.Layer>
                <a className="btnProject" href={behance} style={{background: `#${colors.first}`}} target="_blank">
                  <span>View more</span><img className="focusable" src={ARROW_RIGHT} alt="Go"/>
                </a>
                {/* <div className="imageProject" style={{background:'url(/assets/projects/'+urlImage+'/slider-mockup-'+urlImage+'.png) center center no-repeat',backgroundSize:'cover'}}></div> */}
              </div>
              
          </div>
      );
  }
}


export default App;
