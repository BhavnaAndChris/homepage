import { styled } from 'tsstyled';
import Copyright from '../atoms/Copyright';

export default styled('div', 'Footer').set(({ children }) => ({
  children: (
    <>
      {children}
      <Copyright>Chris Ackerman and Bhavna Soman</Copyright>
    </>
  ),
}))``;
