import PropTypes from 'prop-types';
import { ContactsItem, ContactName, ContactDelete } from './ContactItem.styled';
import { VscTrash } from 'react-icons/vsc';

const ContactItem = ({ name, phone, onDeleteContact }) => {
  return (
    <ContactsItem>
      <ContactName>
        {name}: <a href="tel:">{phone}</a>
      </ContactName>
      <ContactDelete onClick={onDeleteContact} type="button">
        <VscTrash />
      </ContactDelete>
    </ContactsItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
