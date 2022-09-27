import { useDispatch, useSelector } from "react-redux";
import { addItems } from "redux/store";
import { nanoid } from "nanoid";
import { getContacts } from "redux/selectors";

export function ContactForm() {
    const dispatch = useDispatch();

    const contacts = useSelector(getContacts);  

    const handleSubmit = e => {
        e.preventDefault();

        const namesArray = contacts.map(contact => contact.nameValue);
        console.log(namesArray);

        const form = e.target;

        const nameValue = e.target.elements.name.value;  
        const numberValue = e.target.elements.number.value;

        if (namesArray.includes(nameValue)) {
            return alert("Rosie Simpson is already in contacts");
        }

        dispatch(addItems({
            nameValue,
            numberValue,
            id: nanoid(),
        }));

        form.reset()

    }


    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                <p>Name</p>
                <input
                
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    
                    required
                />
            </label>
            <br />
            <label>
              <p>Number</p>
              <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
              />
            </label>
                <br />
            <button type="submit">Add contact</button>
        </form>
        );
    }