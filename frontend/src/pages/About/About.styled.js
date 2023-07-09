import styled, { css } from "styled-components";
import { typeScale } from "../../utils";

const breakpoint = {
  mobile: "720px",
};

const mediaQuery = (key) => (...styles) => css`
  @media (max-width: ${breakpoint[key]}) {
    ${css(...styles)};
  }
`;

export const Educations = styled.section`
  grid-column: 2/7;
  display: flex;
  gap: 0.75rem;
  align-self: start;
  padding-top: 1rem;
`;

export const Text = styled.aside`
  grid-column: 2/7;
  width: 100%;

  ${mediaQuery("mobile")`
    grid-column: 1 / 7;
    padding-inline: 1rem;
  `}
`;

export const SkillsWrapper = styled.aside`
  grid-column: 7/ 13;
  width: 100%;

  ${mediaQuery("mobile")`
    grid-column: 1 / 7;
  `}
`;
