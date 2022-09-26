// глупый компонент который просто рендерит

import { useSelector,  useDispatch } from "react-redux"
import { getContacts } from "redux/selectors";
import { deleteItems } from "redux/store";

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    
    return (
        // console.log(contacts)
        <ul>
            {contacts && contacts.map(({ nameValue, numberValue, id }) =>
                <li key={id}>{nameValue} {numberValue} <button type="button" onClick={()=> dispatch(deleteItems(id))}>Удалить</button> </li>)}
        </ul>
    )
}