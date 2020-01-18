import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header/Header';
import Home from '../../screens/home/Home';
import Typography from '@material-ui/core/Typography';
import language from '../../common/language';
import location from '../../common/location';
import showDate from '../../common/showDate';
import showTime from '../../common/showTime';
import { Card, CardContent } from '@material-ui/core';
import './BookShow.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

class BookShow extends Component {
    constructor() {
        super();
        this.state = {
            location: "",
            date: "",
            language: "",
            time: "",
            unitPrice: 500,
            tickets: 0,
            availableTickets: 20
        }
    }

    locationChangeHandler = (event) => {
        this.setState({ location: event.target.value });
    }

    dateChangeHandler = (event) => {
        this.setState({ date: event.target.value });
    }
    languageChangeHandler = (event) => {
        this.setState({ language: event.target.value });
    }
    timeChangeHandler = (event) => {
        this.setState({ time: event.target.value });
    }

    backToHomeHandler = () => {
        ReactDOM.render(<Home />, document.getElementById('root'));
    }

    ticketChangeHandler = (event) => {
        this.setState({ tickets: event.target.value });
    }
    render() {
        return (<div>
            <Header />
            <div className="bookShow">
                <Typography className="back" onClick={this.backToHomeHandler}>
                    &#60; Back To Home
                    </Typography>
            </div>
            <Card className="cardStyle">
                <CardContent>
                    <Typography variant="headline" component="h2">
                        BOOK SHOW
                    </Typography>
                    <FormControl required className="formControl">
                        <InputLabel htmlFor="location">Location</InputLabel>
                        <Select id="location" value={this.state.location} onChange={this.locationChangeHandler}>
                            {location.map(loc => (
                                <MenuItem key={"loc " + loc.id} value={loc.location}>
                                    <ListItemText primary={loc.location}></ListItemText>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <br /><br />
                    <FormControl required className="formControl">
                        <InputLabel htmlFor="language">Language</InputLabel>
                        <Select id="language" value={this.state.language} onChange={this.languageChangeHandler}>
                            {language.map(lan => (
                                <MenuItem key={"lan " + lan.id} value={lan.language}>
                                    <ListItemText primary={lan.language}></ListItemText>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <br /><br />
                    <FormControl required className="formControl">
                        <InputLabel htmlFor="date">Date</InputLabel>
                        <Select id="date" value={this.state.date} onChange={this.dateChangeHandler}>
                            {showDate.map(dt => (
                                <MenuItem key={"date " + dt.id} value={dt.showDate}>
                                    <ListItemText primary={dt.showDate}></ListItemText>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <br /><br />
                    <FormControl required className="formControl">
                        <InputLabel htmlFor="time">Time</InputLabel>
                        <Select id="time" value={this.state.time} onChange={this.timeChangeHandler}>
                            {showTime.map(tm => (
                                <MenuItem key={"time " + tm.id} value={tm.showTime}>
                                    <ListItemText primary={tm.showTime}></ListItemText>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <br /><br />
                    <FormControl required className="formControl">
                        <InputLabel htmlFor="tickets">Tickets: ({this.state.availableTickets} Available)</InputLabel>
                        <Input id="tickets" value={this.state.tickets !== 0 ?this.state.tickets : "" } onChange={this.ticketChangeHandler}></Input>
                    </FormControl><br/><br/>                    
                    <Typography>
                        Unit Price : {this.state.unitPrice}
                    </Typography><br/>
                    <Typography>
                        Total Price : {this.state.unitPrice * this.state.tickets}
                    </Typography><br/><br/>
                    <Button variant="contained" color="primary">
                        Book Show
                    </Button>
                </CardContent>
            </Card>
        </div>)
    }
}

export default BookShow;