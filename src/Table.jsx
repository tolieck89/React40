import React, { useState, useEffect } from 'react';
import CreateRow from './Actions/CreateRow.jsx' 
import "./Table.css"
import CustomModal from './Actions/CustomModal';

import { BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom';

function Table() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setPeople(data);
      } catch (error) {
        console.error('Smth went wrong: ', error);
      }
    }
    fetchData();
    console.log(people);
  }, []);
  
  const updatePerson = (index, updatedPerson) => {
    setPeople([...people, addPerson]);
  };

  const [isModalOpen, setIsModalOpen] = useState(false); 
  
  const addPerson = (addPerson) => {
    const newPeople = people;
    newPeople.push(addPerson);
    newPeople[people.length-1].id = newPeople.length;
    setPeople(newPeople); 
    console.log(people);
  }
  
  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };
  const handleOk = async (form) => {
    try {
      const values = await form.validateFields(); 
      console.log(values);
   addPerson(values);

      
      setIsModalOpen(false);
    } catch (error) {
      console.log('Smth went wrong: ', error);
    }
  };

  return (
    <>          

    <div className="tableContainer">
    <button type="button"
     onClick={handleEdit}>
      Add new entry
      </button>
      <div className="rowTable" data-id="0">
        <div className="username">Username</div>
        <div className="name">Name</div>
        <div className="phone">Phone number</div>
        <div className="actions">Actions</div>
      </div>

      {people.map((person, index) => (
        <CreateRow key={person.id} person={person} index={index} onUpdate={updatePerson} />
      ))}
    </div>
    <CustomModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleClose}
        title={"Add new entry"}
        initialValues={false}
       />

    </>
  );
}

export default Table;