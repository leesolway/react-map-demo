import React from 'react';
import styled from 'styled-components';

const ToastWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 8px;
  padding: 8px 16px;
  overflow: auto;
  background: #505050;
  margin: 0px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 1px 8px 0 rgba(0, 0, 0, 0.1);
  font-style: normal;
  color: #b7b7b6;

  position: absolute;
  top: 32px;
  right: 32px;
  z-index: 10;
`;

const Toast = ({ message }) => {
  return <ToastWrapper>{message}</ToastWrapper>;
};

export default Toast;
