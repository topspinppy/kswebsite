import React, { Component, Fragment, Children } from 'react'

import {
  Container,
  Collapse,
  Navbar as DefaultNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem as DefaultNavItem,
  NavLink,
} from 'reactstrap'

import * as Scroll from 'react-scroll'
import styled from 'styled-components'
import kslogo from '../../images/ks_logo.svg'

const DefaultLink = Scroll.Link

const NavBrand = styled(NavbarBrand)`
  color: #69302c;
`

const Link = styled(DefaultLink)`
  cursor: pointer;
  font-size: 19px;
`
const NavItem = styled(DefaultNavItem)`
  @media (max-width: 768px) {
    padding: 0.7em 0;
    width: 100%;
    text-align: center;
  }
`
const Navbar = styled(DefaultNavbar)`
  padding: 1em;
  background-color: #ff7c00;
  transition: 0.5s;
`

const Img = styled.img`
  height: 60px;
`

export default class NavBar extends Component {
  state = {
    isOpen: false,
    color: 'transparent',
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  // toggleNavbar() {
  //   this.setState({
  //     collapsed: !this.state.collapsed,
  //   })
  // }
  componentDidMount = () => {
    document && document.addEventListener("scroll", (e) => {
      if (window && window.scrollY > 30) {
        this.setState({
          color: "#ff7c00"
        })
      } else {
        this.setState({
          color: "transparent"
        })
      }
    }, true)
  }

  render() {
    const { children } = this.props
    return (
      <Navbar color={this.state.color} expand="md" className="sticky-top" light>
        <Container>
          <NavBrand href="#home">
            <Img src={kslogo} />
          </NavBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {children || (
              <Fragment>
                <Nav className="mr-auto ml-auto" navbar>
                  <NavItem>
                    <Link className="px-3" to="what" smooth>
                      คืออะไร ?
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link className="px-3" to="when" smooth>
                      จัดที่ไหน ?
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link className="px-3" to="interest" smooth>
                      สนใจจังเลย
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link className="px-3" to="interest" smooth>
                      ผู้สนับสนุน
                    </Link>
                  </NavItem>
                </Nav>
              </Fragment>
            )}
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}
