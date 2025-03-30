import { Form, Input, Modal } from "antd";
import { useEffect, useState } from "react";


const CustomModal = ({ isModalOpen, handleOk, handleCancel, title, initialValues }) => {
  const [form] = Form.useForm(); 

  useEffect(() => {
    if (isModalOpen) {
      form.setFieldsValue(initialValues || { name: "", username: "", phone: "" });
    }
  }, [isModalOpen, initialValues, form]);




  return (
    <Modal
      title={title}
      open={isModalOpen}
      onOk={() => handleOk(form)}
      onCancel={handleCancel}
    >
      <Form form={form} layout="vertical">
        <Form.Item name="name" label="Name" rules={[{ required: true, message: "Required" }]}>
          <Input />
        </Form.Item>
        <Form.Item name="username" label="Login" rules={[{ required: true, message: "Required" }]}>
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="Phone number" rules={[{ required: true, message: "Required" }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CustomModal;
