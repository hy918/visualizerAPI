import React from 'react';
import { Button, Modal } from 'antd';
import type { ModalProps } from 'antd';
import { CloseCircleFilled } from '@ant-design/icons';

import './index.less';

interface TipModalProps extends ModalProps {
  content: React.ReactNode;
}

const TipModal: React.FC<TipModalProps> = ({
  maskClosable = false, // 点击蒙层是否关闭
  destroyOnClose = true,
  focusTriggerAfterClose = false, // 关闭后取消聚焦
  title,
  content,
  okText,
  cancelText,
  onOk,
  onCancel,
  ...otherProps
}) => {

  // 确定按钮
  const handleOk = (e: any) => {
    onOk?.(e);
  };
  // 取消按钮
  const onCancal = (e: any) => {
    onCancel?.(e);
  };

  return (
    <Modal
      className="my-tip-modal"
      width={430}
      footer={null}
      maskClosable={maskClosable}
      destroyOnClose={destroyOnClose}
      focusTriggerAfterClose={focusTriggerAfterClose}
      onCancel={() => onCancal}
      {...otherProps}
    >
      <div>
        <div className="my-modal-title">
          <div className="icon-box">
            <CloseCircleFilled />
          </div>
          <div className="text-box">{title}</div>
        </div>
        <div className="my-modal-content">{content}</div>
        <div className="my-modal-footer">
          <Button className="cancel-btn" onClick={onCancel}>
            {cancelText || '取消'}
          </Button>
          <Button
            className="ok-btn"
            type="primary"
            onClick={handleOk}
          >
            {okText || '确定'}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
export default TipModal;
