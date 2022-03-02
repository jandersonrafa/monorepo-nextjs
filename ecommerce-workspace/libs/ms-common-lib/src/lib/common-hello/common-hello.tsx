import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CommonHelloProps {}

const StyledCommonHello = styled.div`
  color: pink;
`;

export function CommonHello(props: CommonHelloProps) {
  return (
    <StyledCommonHello>
      <h1>Welcome to CommonHello 113!</h1>
    </StyledCommonHello>
  );
}

export default CommonHello;
