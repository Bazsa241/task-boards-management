import styled from "styled-components";

const StyledSmall = styled.small`
  color: red;
  font-weight: 700;
  visibility: ${({hide}) => hide ? 'visible' : 'hidden'};
`

export default StyledSmall