import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

function Contacts() {
    const [contacts, setContacts] = useState([]);
    let id = 1;

    const addContact = (name, phone) => {
        if (contacts.length > 0) {
            id = contacts[contacts.length-1].id + 1;
        }
        const contact = {
            id: id,
            name: name,
            phone: phone,
        };
        setContacts([...contacts, contact]);
    };
    return (
        <div>
            <h1>Contacts List App</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index) => {
                        return (
                            <List
                                name={contact.name}
                                key={index}
                                id={contact.id}
                                phone={contact.phone}
                            />
                        );
                    })}
                </tbody>
            </table>
            <Form addContact={addContact} />
        </div>
    );
}

export default Contacts;
