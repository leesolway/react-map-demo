import React from 'react';
import styled from 'styled-components';

const ToastWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 8px;
  padding: 0px 8px;
  overflow: auto;
  background: rgba(51, 51, 51, 0.9);
  margin: 0px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 1px 8px 0 rgba(0, 0, 0, 0.1);
  font-style: normal;
  font-size: 16px;
  color: #ffffff;
  height: 40px;

  position: absolute;
  top: 32px;
  right: 32px;
  z-index: 10;
`;

const Toast = ({ message }) => {
  return <ToastWrapper>{message}</ToastWrapper>;
};

export default Toast;
