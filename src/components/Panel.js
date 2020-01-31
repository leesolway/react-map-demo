import React from 'react';
import styled from 'styled-components';

const PanelWrapper = styled.div`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  overflow: auto;
`;

const InnerWrapper = styled.div`
  flex: 1;
  margin: 8px;
`;

const Panel = ({ children }) => {
  return (
    <PanelWrapper>
      <InnerWrapper>{children}</InnerWrapper>
    </PanelWrapper>
  );
};

export default Panel;
