import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';

class Header extends Component{
    constructor(){
        super();
        this.state = {
            modalIsOpen:false
        };
    }
    modelOpenHandler = () => {
        this.setState({modalIsOpen:true});
    }

    modalCloseHandler = () => {
        this.setState({modalIsOpen:false});
    }
    render(){
        return(
            <div>
                <header className="header-div">
                    <img src={logo} alt="logo" className='app-logo'/>
                    <Button className='loginButton' variant="contained" color="default" onClick={this.modelOpenHandler}>Login</Button>
                </header>
                <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login" onRequestClose={this.modalCloseHandler} ></Modal>
            </div>
        );          
        }
    }


export default Header;