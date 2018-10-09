import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { getMovies } from '../../actions/movies.actions';

class App extends Component {
  static propTypes = {
    movies: PropTypes.shape({}).isRequired,
    getMovies: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getMovies } = this.props;

    getMovies();
  }

  render() {
    const { movies } = this.props;

    return (
      <div className="App">
        {!movies.isFetching &&
          movies.data && (
            <div className="App-header">
              {movies.data.results.map(item => (
                <div key={item.episode_id}>
                  <li>
                    <p>
                      <b>title: </b>
                      {item.title}
                    </p>
                    <p>
                      <b>release date: </b>
                      {item.release_date}
                    </p>
                    <p>
                      <b>episode: </b>
                      {item.episode_id}
                    </p>
                  </li>
                  <div>
                    <NavLink className="btn btn-primary" to={`/${item.episode_id}`}>
                      go to movie
                    </NavLink>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
});

const mapDispatchToProps = {
  getMovies,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
