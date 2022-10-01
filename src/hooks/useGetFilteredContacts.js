import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/contacts/contactsSelectors';

export const useGetFilteredContacts = () => {
  const filterValue = useSelector(getFilterValue);
  const contacts = useSelector(getContacts);
  const normalizeFilter = filterValue.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter)
  );
};
