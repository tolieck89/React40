import React, { useState } from 'react';
import { Modal } from 'antd';
import CustomModal from './CustomModal';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, NavLink} from 'react-router-dom';
import showDeleteConfirm from "./ModalConfirmation";


const CreateRow = ({ person, index, onUpdate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSave = (updatedPerson) => {
    onUpdate(index, updatedPerson);
  };

  const handleOk = async (form) => {
    try {
      const values = await form.validateFields(); 
      onUpdate(index, { ...person, ...values }); 
      setIsModalOpen(false); 
    } catch (error) {
      console.log("Smth went wrong: ", error);
    }
  };

  const handleDelete = (event) => {
    const targetDiv = event.target.closest("[data-id]"); 
    showDeleteConfirm(targetDiv);
  }    
    return (
    <>
      
      <div className="rowTable" data-id={index + 1}>
      <Link to={`/user/${person.id}`}>
      <div className="username">{person.username}</div>
      </Link> 
        <div className="name">{person.name}</div>
        {console.log(person)}
        <div className="phone">{person.phone}</div>
        <div className="actions">
          <button type="button" onClick={handleDelete}>Delete</button>
          <button type="button" onClick={handleEdit}>Edit</button>
        </div>
      </div>
      
      <CustomModal
        isModalOpen={isModalOpen}
        handleOk={handleOk} 
        handleCancel={handleClose}
        onSave={handleSave} 
      
        title={"Edit existing row"}
        initialValues={person}

    />
    </>
  );
};

export default CreateRow;
