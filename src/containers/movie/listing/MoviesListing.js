import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Table, Button, Spin, Alert } from 'antd';
import { getMovies } from '../../../actions/movies.actions';

class MoviesListing extends Component {
  state = {
    sortedInfo: null,
  };

  static propTypes = {
    movies: PropTypes.shape({}).isRequired,
    getMovies: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getMovies } = this.props;

    getMovies();
  }

  /**
   * Handler change
   */
  handleChange = (pagination, filters, sorter) => {
    this.setState({
      sortedInfo: sorter,
    });
  };

  render() {
    const { movies } = this.props;
    let { sortedInfo } = this.state;
    sortedInfo = sortedInfo || {};

    const columns = [
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'Release Date',
        dataIndex: 'release_date',
        key: 'release_date',
        sorter: (a, b) => new Date(b.release_date) - new Date(a.release_date),
        sortOrder: sortedInfo.columnKey === 'release_date' && sortedInfo.order,
      },
      {
        title: 'Episode',
        dataIndex: 'episode_id',
        key: 'episode_id',
        sorter: (a, b) => a.episode_id - b.episode_id,
        sortOrder: sortedInfo.columnKey === 'episode_id' && sortedInfo.order,
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <Button>
              <Link to={`/${record.url.replace(/\D/g, '')}`}>Go to Details</Link>
            </Button>
          </span>
        ),
      },
    ];

    return (
      <div>
        {!movies.isFetching &&
          movies.payload && (
            <Table
              columns={columns}
              dataSource={movies.payload.results}
              pagination={false}
              onChange={this.handleChange}
              rowKey="episode_id"
            />
          )}
        {movies.isFetching && <Spin size="large" />}
        {!movies.isFetching &&
          movies.error && (
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
  movies: state.movies,
});

const mapDispatchToProps = {
  getMovies,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesListing);
