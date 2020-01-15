import React, { Component } from 'react';
import './Home.css';
import ReactDOM from 'react-dom';
import Header from '../../common/header/Header';
import Details from '../details/Details';
import { withStyles } from '@material-ui/core/styles';
import moviesData from '../../common/movieData';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import genres from './../../common/genres';
import artists from './../../common/artists';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#ff9999',
        padding: '8px',
        fontSize: '1rem'
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    },
    gridListMain: {
        transform: 'translateZ(0)',
        cursor: 'pointer'
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240
    },
    title: {
        color: theme.palette.primary.light,
    }
});

class Home extends Component {

    constructor() {
        super();
        this.state = {
            movieName: "",
            genres: [],
            artists: []
        };
    }

    movieNameChangeHandler = event => {
        this.setState({ movieName: event.target.value });
    };

    genreChangeHAndler = event => {
        this.setState({ genres: event.target.value });
        console.log(this.state.genres);
    };

    artistChangeHandler = event => {
        this.setState({ artists: event.target.value });
        console.log(this.state.artists);
    };

    tileClickHandler = (movieId) => {
        ReactDOM.render(<Details movieId={movieId}/>, document.getElementById('root'));

    } 

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header />
                <div className={classes.upcomingMoviesHeading}>
                    <b>Upcoming Movies</b>
                </div>
                <GridList cols={5} className={classes.gridListUpcomingMovies}>
                    {moviesData.map(movie => (
                        <GridListTile key={movie.id}>
                            <img src={movie.poster_url} alt={movie.title} className="movie-poster"></img>
                            <GridListTileBar title={movie.title}>
                            </GridListTileBar>
                        </GridListTile>
                    ))}
                </GridList>
                <div className="flex-container">
                    <div className="left">
                        <GridList cellHeight={350} cols={4} className={classes.gridListMain}>
                            {moviesData.map(movie => (
                                <GridListTile className="released-movie-grid-item" key={"grid" + movie.id} onClick={() => this.tileClickHandler(movie.id)}>
                                    <img src={movie.poster_url} className="movie-poster" alt={movie.title} />
                                    <GridListTileBar
                                        title={movie.title}
                                        subtitle={<span>Release Date: {new Date(movie.release_date).toDateString()}</span>}
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                    <div className="right">
                        <Card>
                            <CardContent>
                                <FormControl className={classes.formControl}>
                                    <Typography className={classes.title}>
                                        FIND MOVIES BY:
                                    </Typography>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="movieName">Movie Name</InputLabel>
                                    <Input id="movieName" onChange={this.movieNameChangeHandler}></Input>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="genreName">Genre</InputLabel>
                                    <Select
                                        multiple
                                        input={<Input id="genreName" />}
                                        renderValue={selected => selected.join(',')}
                                        value={this.state.genres}
                                        onChange={this.genreChangeHAndler}>
                                        <MenuItem value="0">None</MenuItem>
                                        {
                                            genres.map(genre => (
                                                <MenuItem key={genre.id} value={genre.name}>
                                                    <Checkbox checked={this.state.genres.indexOf(genre.name) > -1}></Checkbox>
                                                    <ListItemText primary={genre.name}></ListItemText>
                                                </MenuItem>
                                            ))
                                        }

                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="atristName">Artist</InputLabel>
                                    <Select
                                        multiple
                                        input={<Input id="atristName" />}
                                        renderValue={selected => selected.join(',')}
                                        value={this.state.artists}
                                        onChange={this.artistChangeHandler}>
                                        <MenuItem value="0">None</MenuItem>
                                        {
                                            artists.map(artist => (
                                                <MenuItem key={artist.id} value={artist.first_name + artist.last_name}>
                                                    <Checkbox checked={this.state.artists.indexOf(artist.first_name + artist.last_name) > -1}></Checkbox>
                                                    <ListItemText primary={artist.first_name + artist.last_name}></ListItemText>
                                                </MenuItem>
                                            ))
                                        }

                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <TextField
                                        id="releaseStartDate"
                                        label="Release Date Start"
                                        type="date"
                                        defaultValue=""
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <TextField
                                        id="releaseEndDate"
                                        label="Release Date End"
                                        type="date"
                                        defaultValue=""
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <Button variant="contained" color="primary">APPLY</Button>
                                </FormControl>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        )

    }
}


export default withStyles(styles)(Home);