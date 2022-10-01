import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getContacts } from 'redux/contacts/contactsSelectors';
import { addContact } from 'redux/contacts/contactsOperations';
import { Form, Label, Input, AddContact } from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const inputNameId = nanoid();
  const inputNumberId = nanoid();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        throw new Error('This of field doesn`t exist');
    }
  };

  const normalizeFindDuplicateContacts = contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );

  const handleSubmit = e => {
    e.preventDefault();

    if (normalizeFindDuplicateContacts) {
      resetForm();
      return toast.info(`${name} is already in contacts`);
    }
    dispatch(addContact({ name, phone }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label htmlFor={inputNameId}>Name</Label>
      <Input
        id={inputNameId}
        placeholder="Enter contact..."
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor={inputNumberId}>Number</Label>
      <Input
        id={inputNumberId}
        placeholder="Enter number..."
        type="tel"
        name="phone"
        value={phone}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <AddContact type="submit">Add contact</AddContact>
    </Form>
  );
};

export default ContactForm;
