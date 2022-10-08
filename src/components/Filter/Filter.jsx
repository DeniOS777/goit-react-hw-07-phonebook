import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineSearch } from 'react-icons/ai';
import { changeFilter } from 'redux/filter/filterSlice';
import {
  selectorFilteredContacts,
  selectorFilterValue,
} from 'redux/contacts/contactsSelectors';
import {
  Container,
  Wrapper,
  FilterLabel,
  InputSearch,
  CountDescription,
  Count,
  Text,
} from './Filter.styled';
import { Box } from 'components/Box';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectorFilterValue);
  const filteredContacts = useSelector(selectorFilteredContacts);
  const countFilteredContacts = filteredContacts.length;

  return (
    <Container>
      <Box>
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
      </Box>

      <CountDescription>
        <Text>Find</Text>
        <Count>{countFilteredContacts}</Count>
      </CountDescription>
    </Container>
  );
};

export default Filter;
