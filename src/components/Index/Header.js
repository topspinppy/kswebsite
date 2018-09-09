import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'
import slogan from '../../images/slogan.svg'
import bg from '../../images/bg.jpg'
const Landing = styled.div`
  color: #69302c;
  font-weight: 500;
  height:90vh;
  @media (max-width: 768px) {
    margin-bottom: 5em;
  }
`

const Text = styled.h1`
  margin-bottom: 3%;
  margin-top: 10%;
  font-size: 77px;
  font-weight: bold;
  line-height: 1.35;
  color: black;
  @media (max-width: 768px) {
    font-size: 35px;
  }
`
const Story = styled.p`
  font-size: 35px;
  font-weight: 500;
  color: #69302c;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`
const Date = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #69302c;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`
const HeaderPage = () => (
  <Landing>
    <Container>
      <Row>
        <Col>
          <br />
          <br />
          <center>
            <Text className="animated  fadeInDown delay-400s" >"IT'S TIME TO SHARE YOUR KNOWLEDGE"</Text>
            <Story>ถึงของพวกเราแล้วที่จะมาล้อมวงเม้าท์ เล่าเรื่องเด็ดแล้ว ลุยยยยย :)</Story>
            <Date>15 ตุลาคม 2018 , Network LAB @IT-KMUTNB</Date>
          </center>
        </Col>
      </Row>
    </Container>
  </Landing>
)

export default HeaderPage
