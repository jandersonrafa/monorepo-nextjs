import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MsCommonLibProps {}

const StyledMsCommonLib = styled.div`
  color: pink;
`;

export function MsCommonLib() {
  return (
    <StyledMsCommonLib>
      <h1>Welcome to MsCommonLib!</h1>
    </StyledMsCommonLib>
  );
}

export default MsCommonLib;


