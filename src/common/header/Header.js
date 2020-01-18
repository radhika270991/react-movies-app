import React, { Component } from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import BookShow from '../../screens/bookshow/BookShow';
import ReactDOM from 'react-dom';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const TabContainer = function (props) {
    return (
        <Typography component="div" style={{ padding: 0, textAlign: 'center' }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
};

class Header extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            value: 0,
            usernameRequired: "dispNone",
            passwordRequired: "dispNone",
            username: "",
            password: "",
            firstname: "",
            lastname: "",
            email: "",
            contactnumber: "",
            firstnameRequired: "dispNone",
            lastnameRequired: "dispNone",
            emailRequired: "dispNone",
            contactnumberRequired: "dispNone"
        };
    }

    modelOpenHandler = () => {
        this.setState({ modalIsOpen: true, usernameRequired: "dispNone", passwordRequired: "dispNone", firstnameRequired: "dispNone", lastnameRequired: "dispNone", emailRequired: "dispNone", contactnumberRequired: "dispNone", value: 0 });
    }

    modalCloseHandler = () => {
        this.setState({ modalIsOpen: false });
    }
    tabChangeHandler = (event, value) => {
        this.setState({ value });
    }

    loginClickHandler = () => {
        this.setState(this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" }));
        this.setState(this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" }));
    }

    registerClickHandler = () => {
        this.setState(this.state.firstname === "" ? this.setState({ firstnameRequired: "dispBlock" }) : this.setState({ firstnameRequired: "dispNone" }));
        this.setState(this.state.lastname === "" ? this.setState({ lastnameRequired: "dispBlock" }) : this.setState({ lastnameRequired: "dispNone" }));
        this.setState(this.state.email === "" ? this.setState({ emailRequired: "dispBlock" }) : this.setState({ emailRequired: "dispNone" }));
        this.setState(this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" }));
        this.setState(this.state.contactnumber === "" ? this.setState({ contactnumberRequired: "dispBlock" }) : this.setState({ contactnumberRequired: "dispNone" }));
    }

    inputusernameChangeHandler = (e) => {
        this.setState({ username: e.target.value })
    }

    inputpasswordChangeHandler = (e) => {
        this.setState({ password: e.target.value })
    }

    inputfirstnameChangeHandler = (e) => {
        this.setState({ firstname: e.target.value })
    }

    inputlastnameChangeHandler = (e) => {
        this.setState({ lastname: e.target.value })
    }
    inputemailChangeHandler = (e) => {
        this.setState({ email: e.target.value })
    }
    inputcontactnumberChangeHandler = (e) => {
        this.setState({ contactnumber: e.target.value })
    }

    bookShowHandler = (e) => {
        ReactDOM.render(<BookShow/>, document.getElementById('root'));

    }

    render() {
        return (
            <div>
                <header className="header-div">
                    <img src={logo} alt="logo" className='app-logo' />                    
                        <div className='loginButton'>
                            <Button variant="contained" color="default" onClick={this.modelOpenHandler}>Login</Button>
                        </div>
                    {this.props.showBookShowButton === "true" ?
                        <div className="bookshow-button">
                            <Button variant="contained" color="primary" onClick={this.bookShowHandler}>
                                Book Show
                            </Button>
                        </div>
                        : ""}
                </header>
                <Modal style={customStyles} ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="Login" onRequestClose={this.modalCloseHandler} >
                    <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>
                    {this.state.value === 0 &&
                        <TabContainer>
                            <FormControl required>
                                <InputLabel htmlFor="username"> Username </InputLabel>
                                <Input id="username" type="text" onChange={this.inputusernameChangeHandler} />
                                <FormHelperText className={this.state.usernameRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="password"> Password </InputLabel>
                                <Input id="password" type="password" onChange={this.inputpasswordChangeHandler} />
                                <FormHelperText className={this.state.passwordRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
                        </TabContainer>}
                    {this.state.value === 1 &&
                        <TabContainer>
                            <FormControl required>
                                <InputLabel htmlFor="firstname"> First Name </InputLabel>
                                <Input id="firstname" type="text" onChange={this.inputfirstnameChangeHandler} />
                                <FormHelperText className={this.state.firstnameRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="lastname"> Last Name </InputLabel>
                                <Input id="lastname" type="text" onChange={this.inputlastnameChangeHandler} />
                                <FormHelperText className={this.state.lastnameRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="email"> Email </InputLabel>
                                <Input id="email" type="email" onChange={this.inputemailChangeHandler} />
                                <FormHelperText className={this.state.emailRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="password"> Password </InputLabel>
                                <Input id="password" type="password" onChange={this.inputpasswordChangeHandler} />
                                <FormHelperText className={this.state.passwordRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="contactnumber"> Contact No. </InputLabel>
                                <Input id="contactnumber" type="text" onChange={this.inputcontactnumberChangeHandler} />
                                <FormHelperText className={this.state.contactnumberRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <Button variant="contained" color="primary" onClick={this.registerClickHandler}>REGISTER</Button>
                        </TabContainer>}
                </Modal>
            </div>
        );
    }
}


export default Header;