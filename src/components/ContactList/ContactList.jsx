import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/itemsSlice';
import ContactItem from '../ContactItem';
import { ContactsList } from './ContactList.styled';
import { resetFilter } from 'redux/contacts/filterSlice';
import { useGetFilteredContacts } from 'hooks/useGetFilteredContacts';
import { getFilterValue } from 'redux/contacts/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);

  const filteredContacts = useGetFilteredContacts();

  const clearFilter = () => {
    const emptyFilteredContacts =
      filteredContacts.length - 1 === 0 && filterValue !== '';

    if (emptyFilteredContacts) {
      dispatch(resetFilter());
    }
  };

  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={() => {
            dispatch(deleteContact(id));
            clearFilter();
          }}
        />
      ))}
    </ContactsList>
  );
};

export default ContactList;
