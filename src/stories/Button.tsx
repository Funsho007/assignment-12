
import styled from 'styled-components'


const StyledButton = styled.button<{ disabled: boolean }>`
  background-color: ${(props) => (props.disabled ? 'grey' : 'blue')};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  &:hover {
    background-color: ${props => props.disabled ? 'grey' : 'darkblue'};
  }
`;
function Button( ) {
    return <StyledButton disabled={false}>This my button</StyledButton>
}

export default Button;


