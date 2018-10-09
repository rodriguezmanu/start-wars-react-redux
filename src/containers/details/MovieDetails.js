import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEpisode } from '../../actions/movies.actions';

class MovieDetails extends Component {
  static propTypes = {
    episode: PropTypes.shape({}).isRequired,
    getEpisode: PropTypes.func.isRequired,
    match: PropTypes.shape({}).isRequired,
  };

  componentDidMount() {
    const { getEpisode, match } = this.props;

    getEpisode(match.params.id);
  }

  render() {
    const { episode } = this.props;

    return (
      <div>
        {!episode.isFetching &&
          episode.data && (
            <div className="App-header">
              <p>
                <b>Title: </b>
                {episode.data.title}
              </p>
              <p>
                <b>Episode: </b>
                {episode.data.episode_id}
              </p>
              <p>
                <b>Crawl: </b>
                {episode.data.opening_crawl}
              </p>
              <p>
                <b>Director: </b>
                {episode.data.director}
              </p>
              <p>
                <b>Producer: </b>
                {episode.data.producer}
              </p>
              <p>
                <b>Release Date: </b>
                {episode.data.release_date}
              </p>
            </div>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  episode: state.episode,
});

const mapDispatchToProps = {
  getEpisode,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails);
