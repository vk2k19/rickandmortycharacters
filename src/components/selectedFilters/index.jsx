import { connect } from 'react-redux';
import Tag from '../core/tag';

import actions from "../../redux/action";

const mapStateToProps = ({ search: { filters = [], name = ''}}) => {
  return {
    name,
    selectedFilters: filters
      .flatMap(filter => filter.items)
      .filter(item => item.selected)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSearchString: () => dispatch(actions.updateSearchString('')),
    updateFilters: payload => dispatch(actions.updateFilters(payload)),
  };
};


const SelectedFilter = ({ selectedFilters, name, updateFilters, updateSearchString }) =>  {
  const hasFilter = selectedFilters.length > 0 || name !== '';

  return <div className="row">
    <div className="col-md-12 selected-filters">
        <h2>Selected Filters</h2>
        <div className="selecte-filter-lists">
          {selectedFilters
            .map(item => <Tag
              key={item.id}
              label={item.label}
              onClick={ (evt) => updateFilters(item)}
              id={item.id}
              category={item.category}
             />
           )}
           {name &&
             <Tag
              id={name}
              label={name}
              onClick={updateSearchString}
              category={'name'}
             />
           }
           { !hasFilter &&
              <p>No Filters applied</p>
           }
        </div>
      </div>
    </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedFilter);
