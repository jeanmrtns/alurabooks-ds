import { css, styled } from "styled-components"

interface StyledButtonProps {
  variant: 'primary' | 'secondary'
}

export const StyledButton = styled.button<StyledButtonProps>`
  border: 2px solid transparent;
  cursor: pointer;
  font-weight: bold;
  color: white;
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
  transition: background-color 0.2s ease-in-out;

  ${({ variant }) => variant === 'primary' && css`
      background-color: #007bff;

      &:hover {
        background-color: #0069d9;
      }
    `
  };

  ${({ variant }) => variant === 'secondary' && css`
        background-color: #6c757d;
        border-color: #6c757d;

        &:hover {
          background-color: #5a6268;
        }
    `
  };

  &:disabled {
    background-color: #6c757d;
    opacity: 0.65;
    cursor: not-allowed;
  }
  
`