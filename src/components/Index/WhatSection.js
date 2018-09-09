import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'

const content = {
  header: 'What is KS Space?',
}

const Headers = styled.h1`
  color: #69302c;
  font-size: 60px;
  text-shadow: 0.1em 0.1em #afafaf;
  span {
    color: #f8bc00;
  }
  @media (max-width: 768px) {
    font-size: 35px;
  }
`

const WhatContainer = styled(Container)`
  background-color: #ff9d00;
`
const WhatCol = styled(Col)`
  @media (max-width: 1024px) {
    padding: 2.5em 2em !important;
  }
`

const WhatSection = () => (
  <Fragment>
    <WhatContainer fluid>
      <Container className="py-5">
        <Row>
          <Col className="text-center" xs={12} lg={{ size: 10, offset: 1 }}>
            <Headers>{content.header}</Headers>
            <WhatCol lg="12">
              <br />
              <h3>
                KS SPACE คือพื้นที่ที่จะให้ทุกคนมาตั้งวงรวมกันเม้าท์มอยหอยสังข์ อะไรก็ได้ 
                ซักอย่างนึง ไม่ว่าจะเป็นเรื่องที่เราสนใจ หรือเป็นเรื่องที่อยากระบาย เราเม้าท์ได้หมดทุกเรื่อง
                อย่าลืมเตรียมยาอมมานะ :P เดิ๋ยวคอจะอักเสบ เพราะเราจะเม้าท์หนักมากจริงๆ
              </h3>
            </WhatCol>
          </Col>
        </Row>
      </Container>
    </WhatContainer>
  </Fragment>
)
export default WhatSection
