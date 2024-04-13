import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--var-gray-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-gray-100);
`;

export default function Header() {
  return <StyledHeader>Header</StyledHeader>;
}
