import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'
import slogan from '../../images/slogan.svg'
import bg from '../../images/bg.jpg'

const content = {
  concept: "It's Time To Share Your Idea",
  date: '31 มีนาคม 2562',
  at: 'ณ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ วิทยาเขตปราจีนบุรี',
}

const Landing = styled.div`
  color: #69302c;
  font-weight: 500;
  height: 88vh;
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
    font-size: 20px;
  }
`
const Concept = styled.h1`
  margin-bottom: 3%;
  margin-top: 1%;
  font-size: 33px;
  line-height: 1.35;
  color: black;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`
const At = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 0;
  color: #69302c;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`
const Date = styled.p`
  font-size: 36px;
  font-weight: 500px;
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
            <Text className="animated  fadeInDown delay-400s">
              KSSPACE MEETUP 2<sup>nd</sup> <br />
            </Text>
            <Concept>{content.concept}</Concept>
            <Date>{content.date}</Date>
            <At>
              ณ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ วิทยาเขตปราจีนบุรี
            </At>
          </center>
        </Col>
      </Row>
    </Container>
  </Landing>
)

export default HeaderPage
