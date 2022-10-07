import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { ContactsItem, ContactName, ContactDelete } from './ContactItem.styled';
import { VscTrash } from 'react-icons/vsc';
import { Loader } from 'components/Loader';

const ContactItem = ({ id, name, phone, clearFilter }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const dispatch = useDispatch();

  const handleDeletingContact = id => {
    setIsDeleting(true);
    dispatch(deleteContact(id)).then(res => {
      if (res.meta.requestStatus === 'fulfilled') clearFilter();
    });
  };

  return (
    <ContactsItem>
      <ContactName>
        {name}: <a href="tel:">{phone}</a>
      </ContactName>
      {isDeleting ? (
        <Loader height="35" />
      ) : (
        <ContactDelete onClick={() => handleDeletingContact(id)} type="button">
          <VscTrash />
        </ContactDelete>
      )}
    </ContactsItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  clearFilter: PropTypes.func.isRequired,
};

export default ContactItem;
