import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItems } from "redux/store";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { getContacts } from "redux/selectors";

export function ContactForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number': 
                setNumber(value);
                break;
            
            default:
                return;
        }
    }

    const contacts = useSelector(getContacts);  

    const handleSubmit = e => {
        e.preventDefault();

        const namesArray = contacts.map(contact => contact.nameValue);
        console.log(namesArray);

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

    }


    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                <p>Name</p>
                <input
                
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
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
                    value={number}
                    onChange={handleChange}
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