import { createSelector } from '@reduxjs/toolkit';

export const selectorFilterValue = state => state.filter;

export const selectorContacts = state => state.contacts.items;

export const selectorIsLoading = state => state.contacts.isLoading;

export const selectorError = state => state.contacts.error;

export const selectorFilteredContacts = createSelector(
  [selectorFilterValue, selectorContacts],
  (filterValue, contacts) => {
    const normalizeFilter = filterValue.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  }
);
