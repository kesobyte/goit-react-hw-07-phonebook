// import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';

export const Filter = () => {
  //Filtering
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <p className={css.label}>Find Contacts by Name</p>
      <input
        className={css.searchBox}
        type="text"
        name="filter"
        placeholder="Search by name"
        value={filter}
        onChange={handleFilterChange}
      />
    </>
  );
};

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   setFilter: PropTypes.func.isRequired,
// };
