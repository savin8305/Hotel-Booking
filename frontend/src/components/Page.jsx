import React from "react";
import styled from "styled-components";
import { Grid, PageHeader } from "./ui";

const StyledLayout = styled(Grid)`
  grid-template-rows: min-content auto;
  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(6, 1fr);
    padding-inline-start: 1rem;
    .bg-text {
      font-size: 5.5rem;
    }
  }
`;

export const Page = ({ children, header }) => {
  return (
    <StyledLayout id={`${header.toLowerCase()}-page`}>
      <>
        <PageHeader>{header.toUpperCase()}</PageHeader>
        {children}
      </>
    </StyledLayout>
  );
};
