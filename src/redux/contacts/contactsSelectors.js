import { createSelector } from '@reduxjs/toolkit';

export const selectorFilterValue = state => state.filter;

export const selectorContacts = state => state.contacts.items;

export const selectorFilteredContacts = createSelector(
  [selectorFilterValue, selectorContacts],
  (filterValue, contacts) => {
    const normalizeFilter = filterValue.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  }
);

// export const useGetFilteredContacts = () => {
//   const filterValue = useSelector(selectorFilterValue);
//   const contacts = useSelector(selectorContacts);
//   const normalizeFilter = filterValue.toLowerCase();

//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizeFilter)
//   );
// };
