import React, { useState } from 'react';
import { Modal } from 'antd';
import CustomModal from './CustomModal';
import Deletion from "./Deletion";

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

    return (
    <>

      <div className="rowTable" data-id={index + 1}>
        <div className="username">{person.username}</div>
        <div className="name">{person.name}</div>
        <div className="phone">{person.phone}</div>
        <div className="actions">
          <button type="button" onClick={Deletion}>Delete</button>
          <button type="button" onClick={handleEdit}>Edit</button>
        </div>
      </div>

      <CustomModal
        isModalOpen={isModalOpen}
        handleOk={handleOk} 
        handleCancel={handleClose}
        title={"Edit existing row"}
        initialValues={person}

    />
    </>
  );
};

export default CreateRow;
