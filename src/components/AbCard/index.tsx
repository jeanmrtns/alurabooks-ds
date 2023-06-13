import React, { ReactNode } from "react";
import { Container } from "./styles";

interface AbCardProps {
  children: ReactNode
}

export function AbCard({ children }: AbCardProps) {
  return <Container>{children}</Container>
}