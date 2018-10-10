import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Spin, Alert, Button, Icon } from 'antd';
import { getCharacter } from '../../actions/movies.actions';
import ItemList from '../../components/item-list/ItemList';

class Characters extends Component {
  static propTypes = {
    character: PropTypes.shape({}).isRequired,
    getCharacter: PropTypes.func.isRequired,
    match: PropTypes.shape({}).isRequired,
    history: PropTypes.shape({}).isRequired,
  };

  componentDidMount() {
    const { getCharacter, match } = this.props;

    getCharacter(match.params.id);
  }

  /**
   * Redirect to previous page
   *
   */
  goBack = e => {
    const { history } = this.props;

    history.goBack();
  };

  render() {
    const { character } = this.props;

    return (
      <div>
        <h2>Characters</h2>
        <div>
          <Button type="primary" onClick={this.goBack}>
            <Icon type="left" />
            Go back
          </Button>
        </div>
        <hr />
        {!character.isFetching &&
          character.payload && (
            <div>
              <ItemList name={character.payload.name} title="Name" />
              <ItemList name={character.payload.height} title="Height" />
              <ItemList name={character.payload.mass} title="Mass" />
              <ItemList name={character.payload.hair_color} title="Hair color" />
              <ItemList name={character.payload.skin_color} title="Skin color" />
              <ItemList name={character.payload.eye_color} title="Eye color" />
              <ItemList name={character.payload.mass} title="Mass" />
              <ItemList name={character.payload.birth_year} title="Birth Year" />
              <ItemList name={character.payload.gender} title="Gender" />
            </div>
          )}
        {character.isFetching && <Spin size="large" />}
        {!character.isFetching &&
          character.error && (
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
  character: state.character,
});

const mapDispatchToProps = {
  getCharacter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Characters);
