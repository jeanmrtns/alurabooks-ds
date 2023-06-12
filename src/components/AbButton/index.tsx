import React, { ButtonHTMLAttributes } from "react"
import { StyledButton } from "./styles"

interface AbButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary'
}

export function AbButton({ children, variant, ...props }: AbButtonProps) {
  return (
    <StyledButton variant={variant} {...props}>{children}</StyledButton>
  )
}