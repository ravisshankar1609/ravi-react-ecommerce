    import React, { Component } from 'react'
    import {Link} from 'react-router-dom';
    import logo from '../logo.svg';
    import {ButtonContainer}from './Button'
    import {NavWrapper} from './Button';
    import {FaAlignRight} from 'react-icons/fa'


    export default class Navbar extends Component {
        state={
            isOpen:false
        }
        handleToggle=()=>{
    this.setState({isOpen:!this.state.isOpen})
        }
    
        render() {
            return (
                <div>
                    <NavWrapper className="navbar navbar-expand-sm navbar-dark nav-custom px-sm-5">
                    <div className="nav-item-m-20">
                    <Link to="/">
                        <img src={logo} className="navbar-brand" alt="Ecommerce Store"/>
                    </Link>
                    </div>
                    <div className="nav-item-m-80">
                    <button className="nav-btn ml-auto" onClick={this.handleToggle}>
                    
                    <FaAlignRight className="nav-icon"/>
                </button>
                    </div>
                
                
                    <ul className={this.state.isOpen?" nav-links show-nav":" nav-links"}>
                        <li className="nav-item ">
                    <Link to="/" className="nav-link">
                        home
                        </Link>
                        </li>
                        <li className="nav-item ">
                    <Link to="/products" className="nav-link">
                        Products
                        </Link>
                        </li> 
                        <li className="nav-item ">
                        <Link to="cart" className="nav-link"> 
                        <ButtonContainer>
                            <span className="mr-2">
                            <i className="fas fa-cart-plus"/>
                            </span>my cart
                            </ButtonContainer>
                        </Link>
                        </li>
                        
                    </ul>
                
                    </NavWrapper>
                </div>
            )
        }
    }
