import {useState} from 'react';
import { connect } from 'react-redux';
import FilterOptions from '../core/filterOptions';

import actions from "../../redux/action";

const mapStateToProps = state => {
  return {
    filters: state.search.filters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateFilters: payload => dispatch(actions.updateFilters(payload)),
  };
};

const Filter = props => {

  const [isHidden, setHidden] = useState(true)

  return <>
    <div className="filters">
      <div className="row">
        <h2 className="col-xs-10 col-md-12">Filters</h2>
        <button className="col-xs-2 hidden-md hidden-lg" onClick={() => setHidden(!isHidden)}>
          <img
          src={`/assets/images/svgs/${isHidden ? 'plus' : 'minus'}-circle-solid.svg`}
           alt={isHidden ? 'show filter options' : 'hide filter options'} />
        </button>
      </div>
      {props.filters.map(option =>
        <div className={isHidden ? 'hidden-xs' : ''}   key={option.id}>
          <FilterOptions
            title={option.label}
            items={option.items}
            name={option.id}
            onChange={props.updateFilters}
          />
         </div>
      )}
    </div>
    <style jsx> {
      ` .row {
        padding-bottom: 0;
      }
      button {
        margin-top: 22px;
        margin-bottom: 10px;
        background: none;
        border: none;
      }
      button  img {
        width: 23px;
      }
      `
    }
    </style>
  </>;
}


export default connect(mapStateToProps, mapDispatchToProps)(Filter);
