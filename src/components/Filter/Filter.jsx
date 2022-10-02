import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/filterSlice';
import { selectorFilterValue } from 'redux/contacts/contactsSelectors';
import { Container, FilterLabel, InputSearch } from './Filter.styled';

const Filter = () => {
  const filterValue = useSelector(selectorFilterValue);
  const dispatch = useDispatch();

  return (
    <Container>
      <FilterLabel>Find contacts by name:</FilterLabel>
      <InputSearch
        autoComplete="off"
        type="text"
        name="filter"
        placeholder="Search contacts..."
        value={filterValue}
        onChange={e => dispatch(changeFilter(e.target.value.trimStart()))}
      />
      🔎
    </Container>
  );
};

export default Filter;
