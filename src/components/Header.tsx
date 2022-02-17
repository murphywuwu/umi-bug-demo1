import styled from 'styled-components';
import { Container } from '@/components/index';
// import Container from './Container';

console.log('Container', Container);
interface Props {
  children: JSX.Element;
}

const StyledContainer = styled(Container)`
  font-size: 20px;
`;

function Header(props: Props) {
  return <StyledContainer>{props.children}</StyledContainer>;
}

export { Header };
