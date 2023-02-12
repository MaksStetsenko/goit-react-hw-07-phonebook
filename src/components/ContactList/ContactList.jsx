import React from 'react';
import PropTypes from 'prop-types';

import Contact from 'components/Contact';

import { useFilteredContacts } from 'components/hooks/useFileredContacts';

const ContactList = () => {
  const filteredContacts = useFilteredContacts();

  return (
    <ul>
      {filteredContacts.map(({ id, name, phone }) => (
        <Contact key={id} contactId={id} name={name} phone={phone} />
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};
