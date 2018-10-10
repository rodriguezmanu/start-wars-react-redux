import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEpisode } from '../../actions/movies.actions';
import AllList from '../../components/all-list/AllList';

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
          episode.payload && (
            <div className="App-header">
              <p>
                <b>Title: </b>
                {episode.payload.title}
              </p>
              <p>
                <b>Episode: </b>
                {episode.payload.episode_id}
              </p>
              <p>
                <b>Crawl: </b>
                {episode.payload.opening_crawl}
              </p>
              <p>
                <b>Director: </b>
                {episode.payload.director}
              </p>
              <p>
                <b>Producer: </b>
                {episode.payload.producer}
              </p>
              <p>
                <b>Release Date: </b>
                {episode.payload.release_date}
              </p>
              <AllList title="Characters" data={episode.payload.allCharacters} />
              <AllList title="Species" data={episode.payload.allSpecies} />
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
