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

const WhatContainer = styled(Container)``
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
                เป็นงานสัมมนา Open Session
                เปิดให้ผู้ที่สนใจแบ่งปันความรู้และประสบการณ์ดีๆ
                โดยการเสนอหัวข้อที่ต้องการพูดเป็นเรื่องอะไรก็ได้ ไม่จำกัดหัวข้อ
                ไม่จำเป็นต้องเป็นเรื่องเทคโนโลยี ก็พูดได้ไม่จำกัด
              </h3>
            </WhatCol>
          </Col>
        </Row>
      </Container>
    </WhatContainer>
  </Fragment>
)
export default WhatSection
