import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { selectorContacts } from 'redux/contacts/contactsSelectors';
import { addContact } from 'redux/contacts/contactsOperations';
import { Loader } from 'components/Loader';
import { Form, Label, Input, AddContact } from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);

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
        throw new Error('This field doesn`t exist');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsAdding(true);
    const normalizeFindDuplicateContacts = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (normalizeFindDuplicateContacts) {
      resetForm();
      setIsAdding(false);
      return alreadyHasContactNotification(name);
    }

    dispatch(addContact({ name, phone })).then(res => {
      if (res.meta.requestStatus === 'fulfilled') {
        successfullyAddedContactNotification(name);
        setIsAdding(false);
      }
    });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  function successfullyAddedContactNotification(name) {
    return toast.success(`The contact with name "${name}" added successfully`);
  }

  function alreadyHasContactNotification(name) {
    return toast.info(`The contact with name "${name}" is already in contacts`);
  }

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
      <AddContact type="submit" disabled={isAdding}>
        {isAdding ? <Loader height="18" /> : 'Add contact'}
      </AddContact>
    </Form>
  );
};

export default ContactForm;
