import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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

  // getIdFromUrl = url => url.replace(/\D/g, '');

  render() {
    const { movies } = this.props;

    return (
      <div className="App">
        {!movies.isFetching &&
          movies.payload && (
            <div className="App-header">
              {movies.payload.results.map(item => (
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
                    <Link className="btn btn-primary" to={`/${item.episode_id}`}>
                      Go to Details
                    </Link>
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
