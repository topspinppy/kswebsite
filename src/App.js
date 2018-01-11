import React, { Component } from 'react'
import styled from 'styled-components'
import { Container, Row, Col  } from 'reactstrap'
import logo from './ks_logo.svg'
import slogan from './slogan.svg'
import './css/animate.css';
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
  }
  .Sectiontwo {
    height:100vh;
    background: #ff8b00;
  }
  .Sectionthree {
    height:80vh;
    background: #ff8b00;
  }
  .Sectionfour {
    height:20vh;
    background: #fc6400;
  }
}`
class App extends Component {
  render() {
    return (
      <Box>
        <div className='Sectionone'>
          <Container>
            <Row>
              <Col>
                <img src={logo} className='logo' alt='logo' />
              </Col>
            </Row>
            <Row>
              <Col>
                <img src={slogan} className='slogan' alt='logo' />
              </Col>
            </Row>
          </Container>
        </div>
        <div className='Sectiontwo'>
          <h1>
            <center>ชุมนุม KnowledgeSharing <br /><b> แห่งภาควิชาเทคโนโลยีสารสนเทศ </b></center>
          </h1>
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
          <center>

          </center>
        </div>
        <div className='Sectionthree'>
          <Container>
            <Row>
              <Col>
                  <Row>
                      <img style={{margin: 'auto auto'}} src='https://image.flaticon.com/icons/svg/423/423092.svg' class='img-responsive' alt='Cinque Terre' width='70%' />
                  </Row>
                  <Row>
                    <h4 style={{margin:'10px'}}>
                      <center>Data Science & Developer</center>
                    </h4>
                  </Row>
                  {/* <center>
                    <img style={{margin:'10px'}} src='https://image.flaticon.com/icons/svg/423/423092.svg' class='img-responsive' alt='Cinque Terre' width='70%' />
                  </center>
                  <h4  style={{margin:'10px'}}>
                      <center>Data Science & Developer</center>
                  </h4>
                  <h6 style={{margin:'10px'}}>
                      <center>จำนวนผู้สมัคร : xx คน</center>
                  </h6>
                  <center>
                    <button type='button' class='btn btn-danger' disabled>
                      สมัครเลย !
                    </button>
                  </center> */}
              </Col>
              <Col>
                  <center>
                    <img src='https://image.flaticon.com/icons/svg/201/201577.svg' width='70%' /><br />
                  </center>
                  <h4 style={{margin:'10px'}}>
                      <center>Design &<br /> Multimedia</center>
                  </h4>

                  <h6 style={{margin:'10px'}}>
                      <center>จำนวนผู้สมัคร : xx คน</center>
                  </h6>
                  <center><button  type='button' class='btn btn-light'>สมัครเลย !</button></center>
              </Col>
              <Col>
                  <center>
                    <img style={{margin:'10px'}} data-scroll='toggle(.scaleUpIn, .scaleUpOut)' src='https://image.flaticon.com/icons/svg/148/148797.svg' class='img-responsive' alt='Cinque Terre' width='70%' />
                    <br />
                  </center>
                  <h4 style={{margin:'10px'}}>
                      <center>Network & Infrastructure</center>
                  </h4>
                  <h6 style={{margin:'10px'}}>
                      <center>จำนวนผู้สมัคร : xx คน</center>
                  </h6>
                  <center>
                    <button type='button' class='btn btn-success'>สมัครเลย !</button>
                  </center>
              </Col>
              <Col>
                  <center>
                    <img style={{margin:'10px'}} src='https://image.flaticon.com/icons/svg/235/235183.svg' class='img-responsive' alt='Cinque Terre' width='70%' />
                    <br />
                  </center>
                  <h4 style={{margin:'10px'}}>
                      <center>Business Technology</center>
                  </h4>
                  <h6 style={{margin:'10px'}}>
                      <center>จำนวนผู้สมัคร : xx คน</center>
                  </h6>
                  <center><button type='button' class='btn btn-primary'>สมัครเลย !</button></center>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='Sectionfour'>
          
        </div>
      </Box>
    );
  }
}

export default App