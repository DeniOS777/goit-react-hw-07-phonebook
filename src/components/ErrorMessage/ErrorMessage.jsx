import { useSelector } from 'react-redux';
import { selectorError } from 'redux/contacts/contactsSelectors';
import { Error } from './ErrorMessage.styled';

export const ErrorMessage = () => {
  const error = useSelector(selectorError);
  return <Error>{error} </Error>;
};
