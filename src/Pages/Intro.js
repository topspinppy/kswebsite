import React, { Component } from 'react'
import styled from 'styled-components'
import { Container, Row, Col, Button, CardGroup, Card, CardBody, CardTitle, CardText, CardImg, CardSubtitle } from 'reactstrap'
import logo from '../ks_logo.svg'
import slogan from '../slogan.svg'
import points from '../down-arrow.svg'
import rocket from '../rocket.svg'
import '../css/animate.css'
import { Link, Element } from 'react-scroll'
import Typist from 'react-typist'
const Box = styled.div`
  font-family: 'Kanit', sans-serif;
  .Sectionone {
    height:100vh;
    background: -webkit-linear-gradient(top, rgba(255,0,132,1) 0%, rgba(255,140,0,1) 100%);
    .logo {
      width:170px;
      bottom:5px;
      margin-top:64px;
      max-width: 100%;
    }
    .slogan {
      width:182vh;
      margin-top:30px;
      max-width: 100%;
      height: auto;
    }
    .points {
      width:31px;
    }
  }
  .Sectiontwo {
    padding:80px 0;
    height:100vh;
    background: #ff8b00;
    .text-header-center{
      text-align: center!important;
    }
  }
  .Sectiontwos {
    padding:80px 0;
    display: block;
    box-sizing: inherit;
    height:100vh;
    background: #ff8b00;
    padding-top: 4%;
    padding-bottom: 4%;
    .info {
      text-indent: 1em;
      font-size: 18px;
    }
    .header {
      font-size: 304%;
      opacity: 0.9;
      line-height: 30pt;
      text-shadow: 0.1em 0.1em #afafaf;
    }
    .Rocket {
      font-size: 20rem;
      margin-left: 20%;
      margin-top: -10%;
    }
    .rocket-fluid {
      max-width: 100%;
      height: auto;
    }
  }
  .Sectionthree {
    padding:80px 0;
    height:80vh;
    background: #ff8b00;
    display: block;
    box-sizing: inherit;
    .wrapper {
      margin: 0 auto;
      width: 90%;
      .title {
        width: 100%;
        margin: 0 auto;
        position: relative;
        z-index: 9;
        text-align: center;
        margin-bottom: 30px;
      }
      .img-icon {
        max-width: 50%;
        height: auto;
      }
    }
  }
  .Sectionfour {
    padding: 30px 0 10px;
    height:20vh;
    background: #fc6400;
    display: block;
    box-sizing: inherit;
  }

}`
class Intro extends Component {
  render () {
    return (
      <Box>
        <div className='Sectionone'>
          <Container>
            <Row>
              <Col>
                <img src={logo} className='logo animated pulse' alt='logo' />
              </Col>
            </Row>
            <Row>
              <Col>
                <img src={slogan} className='slogan animated infinite pulse' alt='logo' />
              </Col>
            </Row>
            <Link activeClass='active' to='test1' spy={true} smooth={true} offset={-1} duration={500} onSetActive={this.handleSetActive}>
              <center><img src={points} className='points animated infinite pulse' alt='logo' /></center>
            </Link>
          </Container>
        </div>
        <Element name='test1' className='Sectiontwo'>
          <Container>
            <Row>
              <Col xs='12'>
                <h2 className='text-header-center'>ชุมนุม KnowledgeSharing<br /><b> แห่งภาควิชาเทคโนโลยีสารสนเทศ </b></h2>
                <h4>
                  <br />
                  <center>
                    <h1><img src='https://image.flaticon.com/icons/svg/206/206058.svg' width='40px' /></h1>
                  </center>
                  <center>
                    <h2>Let's Begin Your Passion For Professional in IT <br /> Start Here : )</h2>
                  </center>
                  <center>
                    <h1><img src='https://image.flaticon.com/icons/svg/206/206059.svg' width='40px' /></h1>
                  </center>
                </h4>
                <Link activeClass='active' to='test2' spy={true} smooth={true} offset={-1} duration={500} onSetActive={this.handleSetActive}>
                  <center><img src={points} className='points animated infinite pulse' alt='logo' width='10px' /></center>
                </Link>
              </Col>
            </Row>
          </Container>
        </Element>
        <Element name='test2' className='Sectiontwos'>
          <Container>
            <Row>
              <Col md={{ size: 6 }}>
                <div className='header'>WHAT IS <br />KS SPACE ?</div>
                <div className='info'>
                  <br />
                  <p>
                    ยินดีต้อนรับเข้าสู่ 'KS Space' ชุมนุม KnowledgeSharing เป็นพื้นที่ที่จะเปิดให้ทุกคนที่อยู่ใน IT พระนครเหนือ มาโลดแล่น โลดโผน อยู่ในพื้นที่แห่งการสร้างสรรค์                                                                        
                  </p>
                  <p>
                    พื้นที่ที่ไม่มีคนเก่งและไม่เก่ง เพราะเราเชื่อว่าทุกคนสามารถแบ่งปันกันได้ ตีเหล็กยังต้องตีให้ร้อน แต่ถ้าเราใช้ความรู้ร้อนๆของเราออกมาทำสิ่งดีๆ ก็จะพัฒนาโลกใบนี้ได้
                  </p>
                  <p>
                    เราอยากให้คุณใช้พื้นที่ตรงนี้ ร่วมกันพัฒนาตัวเองและผู้อื่น สร้างสรรค์ความสามารถ พัฒนาความสัมพันธ์และความร่วมมือระหว่างกัน เพื่อก้าวสู่โลกอนาคตอย่างสดใสและไปด้วยกัน                                                                          
                  </p>
                  <p>
                    จรวดลำน้อย ถ้าตอนนี้เรามาสร้างมันด้วยกัน ในอนาคตก็จะกลายเป็นจรวดที่ยิ่งใหญ่ได้
                  </p>
                </div>
              </Col>
              <Col md={{ size: 6 }} xs='auto' >
                <img src={rocket} className='rocket-fluid' />
              </Col>
            </Row>
            <Link activeClass='active' to='test3' spy={true} smooth={true} offset={-1} duration={500} onSetActive={this.handleSetActive}>
              <center><img src={points} className='points animated infinite pulse' alt='logo' width='10px' /></center>
            </Link>
          </Container>
        </Element>
        <Element name='test3' className='Sectionthree'>
          <Container>
            <div className='wrapper'>
              <div className='title'>
                <h3>
                  - สาขาที่น่าสนใจ -
                </h3>
              </div>
              <Row>
                <div className='col-md-3'>
                  <img className='img-icon' src='https://image.flaticon.com/icons/svg/423/423092.svg' alt='Cinque Terre' max-width='100%' height='auto' />
                </div>
                <div className='col-md-3'>
                  <img className='img-icon' src='https://image.flaticon.com/icons/svg/201/201577.svg' alt='Cinque Terre' max-width='100%' height='auto' />
                </div>
                <div className='col-md-3'>
                  <img className='img-icon' src='https://image.flaticon.com/icons/svg/148/148797.svg' alt='Cinque Terre' max-width='100%' height='auto' />
                </div>
                <div className='col-md-3'>
                  <img className='img-icon' src='https://image.flaticon.com/icons/svg/235/235183.svg' alt='Cinque Terre' max-width='100%' height='auto' />
                </div>
              </Row>
            </div>
          </Container>
        </Element>
        <div className='Sectionfour'>
          <Container>
            <Row>
              <Col>
                <h4>
                  Made With <i className='fab fa-react' /> x KnowledgeSharing
                </h4>
              </Col>
            </Row>
            <hr style={{margin: '0'}} />
            <Row>
              <Col>
                Department of Information Technology, KMUTNB
              </Col>
            </Row>
          </Container>
        </div>
      </Box>
    )
  }
}

export default Intro
