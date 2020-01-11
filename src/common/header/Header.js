import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';

class Header extends Component{
    render(){
        return(
            <div className="header-div">
                <img src={logo} className='app-logo'/>
                <Button className='loginButton' variant="contained" color="default">Login</Button>
            </div>
        )
            
        }
    }


export default Header;