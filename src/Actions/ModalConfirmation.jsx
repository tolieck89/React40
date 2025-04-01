import React from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import Deletion from "./Deletion"
const { confirm } = Modal;


const showDeleteConfirm = (evetargetdiv) => {
    console.log("Функція викликається! (тіпа дебаг))");
  confirm({
    title: 'Are you sure delete this account?',
    icon: <ExclamationCircleFilled />,
    content: 'Be careful. U won\'t be able to restore it.',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
        Deletion(evetargetdiv);
      console.log('Запис успішно видалено. ');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};



export default showDeleteConfirm;