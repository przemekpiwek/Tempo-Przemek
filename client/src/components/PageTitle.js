import React from "react";
import styled from "styled-components";

const PageTitle = ({ content }) => {
  return !!content && <Text data-testid="pagetitle">{content}</Text>;
};

const Text = styled.h1`
  color: var(--text);
  font-weight: 600;
`;

export default PageTitle;
