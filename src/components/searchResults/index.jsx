import { useEffect } from 'react';
import { connect } from 'react-redux';
import actions from "../../redux/action";
import Results from './results';

const mapStateToProps = ({search: { results = [] }}) => {
  return {
    resultsLoaded: results.length > 0
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCharacters: () => dispatch(actions.getCharacters()),
  };
};

const SearchResults = props => {
  useEffect(() => {
    if(props.resultsLoaded === false) {
      props.getCharacters();
    }
  }, [props.resultsLoaded]);

  return props.resultsLoaded ?
    <Results /> :
    <h2>Loading...</h2>
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
