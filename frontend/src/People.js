import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function People() {
    const [people, morePeople] = React.useState([]);

    React.useEffect(() => {
        data();
    }, [])

    const data = () => {
        axios.get("/api/aboutus")
            .then((response) => {
                const allData = response.data;
                morePeople(allData);
            })
            .catch(err => console.log(err));
    }

    console.log(people);

    return (
        people.map((person, index) => {
            console.log(person);
            return (
                <figure className="container rounded-lg w-56 bg-sky-50 text-center hover:shadow-lg">
                    <img className="h-32 mx-auto rounded-full" src={person.photo} alt="" srcset="" />
                    <h1 className="pt-2 text-lg font-medium text-sky-500">{person.name}</h1>
                    <p className="text-sm p-1">{person.content}</p>
                    <button className=" hover:text-gray-600" type="button">
                        <a href={"mailto:" + person.email}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </button>
                </figure>
            );
        })
    );
}

export default People