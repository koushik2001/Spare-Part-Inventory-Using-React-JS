import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {ButtonContainer} from './button';

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-lg navbar-dark bg-dark">
                {/* {
                    
                        https://www.iconfinder.com/icons/1243689/call_phone_icon
                        Creative Commons (Attribution 3.0 Unported);
                        https://www.iconfinder.com/Makoto_msk 

                } */}
                {/* <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand"/>
                </Link> */}
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-1">
                        <Link to="/" className="nav-link">
                            <img src="img/t1.png" height="20px"></img>
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-shopping-cart"/>
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
background: var(--mainDark) !important;
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.5rem;
    text-transform:capitalize ;
}


`;


export default Navbar;