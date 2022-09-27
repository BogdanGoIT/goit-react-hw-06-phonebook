// глупый компонент который просто рендерит

import { useSelector,  useDispatch } from "react-redux"
import { getContacts, getFilter } from "redux/selectors";
import { deleteItems } from "redux/store";

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filterName = useSelector(getFilter);
    // console.log(filterName);

    const getFilterdContacts = () => {
        const normalizedFilter = filterName.toLowerCase();

        return contacts.filter(contact => 
        contact.nameValue.toLowerCase().includes(normalizedFilter),
        );

    }

    const filteredContacts = getFilterdContacts();

    return (
        // console.log(contacts)
        <ul>
            {filteredContacts && filteredContacts.map(({ nameValue, numberValue, id }) =>
                <li key={id}>{nameValue} {numberValue}
                    <button type="button" onClick={() => dispatch(deleteItems(id))}>Удалить</button>
                </li>)}
        </ul>
    )
}