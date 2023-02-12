import React from 'react';
import { useSelector } from 'react-redux';

import { getContacts } from 'redux/selectors';

import { useFilteredContacts } from 'components/hooks/useFileredContacts';
import { message } from 'components/settings';
import { Box } from 'components/Box';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Notification from 'components/Notification';

import { AppStyled, AppTitleStyled } from './App.styled';

export const App = () => {
  const { contacts } = useSelector(getContacts);
  const filteredContacts = useFilteredContacts();

  const { isEmptyBook, noMatches } = message;

  const isPhonebookEmpty = contacts.length === 0;
  const isFilteredContactsEmpty = filteredContacts.length === 0;

  //=========== render ==============================================

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      fontSize="l"
      color="primary"
    >
      <AppTitleStyled>My phonebook</AppTitleStyled>

      <AppStyled>
        <Section title="Contacts editor">
          <ContactForm />
        </Section>

        <Section title="Contacts">
          {isPhonebookEmpty ? (
            <Notification message={isEmptyBook} />
          ) : (
            <>
              <Filter />

              {isFilteredContactsEmpty ? (
                <Notification message={noMatches} />
              ) : (
                <ContactList />
              )}
            </>
          )}
        </Section>
      </AppStyled>
    </Box>
  );
};
