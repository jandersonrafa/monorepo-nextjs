import styled from 'styled-components';
import { CommonHello } from '@ecommerce-workspace/ms-common-lib';

/* eslint-disable-next-line */
export interface OrderRegisterProps {}

const StyledOrderRegister = styled.div`
  color: pink;
`;

export function OrderRegister(props: OrderRegisterProps) {
  return (
    <StyledOrderRegister>
      <h1>Welcome to OrderRegister!</h1>
      <CommonHello></CommonHello>
    </StyledOrderRegister>
  );
}

export default OrderRegister;
