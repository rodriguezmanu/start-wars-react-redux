import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Spin, Alert } from 'antd';
import { getEpisode } from '../../../actions/movies.actions';
import AllList from '../../../components/all-list/AllList';
import ItemList from '../../../components/item-list/ItemList';

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
        <h2>Characters</h2>
        <hr />
        {!episode.isFetching &&
          episode.payload && (
            <div>
              <ItemList name={episode.payload.title} title="Title" />
              <ItemList name={episode.payload.episode_id} title="Episode" />
              <ItemList name={episode.payload.opening_crawl} title="Crawl" />
              <ItemList name={episode.payload.director} title="Director" />
              <ItemList name={episode.payload.producer} title="Producer" />
              <ItemList name={episode.payload.release_date} title="Release Date" />
              <AllList title="Characters" isLink data={episode.payload.allCharacters} />
              <AllList title="Species" data={episode.payload.allSpecies} />
            </div>
          )}
        {episode.isFetching && <Spin size="large" />}
        {!episode.isFetching &&
          episode.error && (
            <Alert
              message="Error"
              description="Something was wrong with API, please Try again"
              type="error"
              showIcon
            />
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
