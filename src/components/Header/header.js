import React from 'react';
import './header.css';
import {MenuIcon} from 'react-simple-sidenav';
// import logo from '../../assets/logo.png';


class Header extends React.Component {
     constructor() {
          super();
          this.state = {
               showNav: false 
          }
        }


    render() {
        return (
        <div class="header">
         <div class="header-left">
             <div class="nav"> 
             <MenuIcon onClick={() => this.setState({showNav: true})}/>
              </div>
             <a href="#default" class="companylogo">CompanyLogo</a>
        </div>
         <div class="header-right">
              <a class="active" href="#home">Home</a>
              <a href="#contact">Contact</a>
              <a href="#about">About</a>
         </div>
          
          </div>
        
         
          
        )}
}
export default Header;