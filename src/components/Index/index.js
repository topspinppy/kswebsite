import React, { Fragment } from 'react'
import Navbar from '../core/Navbar'
import Header from './Header'
import About from './About'
import WhatSection from './WhatSection'
import Location from './Location'
const index = () => (
  <Fragment>
    <Navbar />
    <section id="home" name="home">
      <Header />
    </section>
    <section id="what" name="what">
      <WhatSection />
    </section>
    <section id="what" name="what">
      <About />
    </section>
    <section id="where" name="where">
      <Location />
    </section>
  </Fragment>
)

export default index
