import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'

const HeadText = styled.h1`
  color: #69302c;
  font-size: 60px;
  text-align: center;
  text-shadow: 0.1em 0.1em #afafaf;
  span {
    color: #f8bc00;
  }
  @media (max-width: 768px) {
    font-size: 35px;
  }
`
const Description = styled.h4`
  text-indent: 1.5em;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`
const Tagline = styled.h1`
  font-size: 
  text-indent: 1.5em;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 20px
  }
`

const AboutContainer = styled(Container)`
  margin-bottom: 7em;
`
const About = () => (
  <Fragment>
    <AboutContainer>
      <br />
      <br />
      <HeadText>แล้วจัดที่ไหนนะ ?</HeadText>
      <Container>
        <br />
        <Description>
          <p>ห้องแขนงวิชาเทคโนโลยีระบบเครือข่าย</p>
        </Description>
        <Tagline>
          "เพราะเราอยากให้คุณ <u>พูด</u> "
        </Tagline>
      </Container>
    </AboutContainer>
  </Fragment>
)
export default About
