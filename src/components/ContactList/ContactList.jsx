import { ContactListItem } from 'components/ContactList/ContactListItem/ContactListItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from '../../redux/contacts/contactsSelector';
import { fetchContacts } from '../../redux/contacts/contactsOperation';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ul>
        {/* If loading and not error, show Loader */}
        {isLoading && !error && <Loader />}

        {/* If not loading, not error, and filtered contacts is empty, show warning */}
        {isLoading && !error && filteredContacts.length === 0 && (
          <p>The phonebook is empty. Please add a contact.</p>
        )}

        {/* If not loading, not error and have atleast 1 fitlered contact, show ContactListItem component */}
        {isLoading &&
          !error &&
          filteredContacts.length > 0 &&
          filteredContacts.map(filteredContact => (
            <ContactListItem
              key={filteredContact.id}
              filteredContact={filteredContact}
            />
          ))}
      </ul>
    </>
  );
};
