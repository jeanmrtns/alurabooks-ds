import { styled } from "styled-components";

export const Container = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.625rem;
  padding: 1rem;
  max-width: 23.75rem;

  @media (min-width: 1140px) {
    max-width: 34.375rem;
    padding: 3rem 2rem 3rem 3rem;
  }

  @media (min-width: 725px) {
    max-width: 45.371rem;
    padding: 1.5rem;
  }
`