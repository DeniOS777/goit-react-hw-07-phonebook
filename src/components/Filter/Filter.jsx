import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineSearch } from 'react-icons/ai';
import { changeFilter } from 'redux/filter/filterSlice';
import { selectorFilterValue } from 'redux/contacts/contactsSelectors';
import { Container, Wrapper, FilterLabel, InputSearch } from './Filter.styled';

const Filter = () => {
  const filterValue = useSelector(selectorFilterValue);
  const dispatch = useDispatch();

  return (
    <Container>
      <FilterLabel>Find contacts by name:</FilterLabel>
      <Wrapper>
        <InputSearch
          autoComplete="off"
          type="text"
          name="filter"
          placeholder="Search contacts..."
          value={filterValue}
          onChange={e => dispatch(changeFilter(e.target.value.trimStart()))}
        />
        <AiOutlineSearch size="20" />
      </Wrapper>
    </Container>
  );
};

export default Filter;
