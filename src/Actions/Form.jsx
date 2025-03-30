import React, { useState } from 'react';
import { Form, Input, Modal } from "antd";

const EditForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (values) => {
    setData((prevData) =>
        prevData.map((item) =>
            item.key === editingKey ? { ...item, username: values.username } : item
        )
    );
    setIsModalOpen(false);
};
    const handleOpen = (record) => {
      setCurrentUsername(record.username);
      record.setFieldsValue({ username: record.username });
      setIsModalOpen(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditForm;
