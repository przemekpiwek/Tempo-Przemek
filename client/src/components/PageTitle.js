import React from "react";
import styled from "styled-components";

const PageTitle = ({ content }) => {
  if (!content) return;
  return <Text>{content}</Text>;
};

const Text = styled.h1`
  color: var(--text);
  font-weight: 600;
`;

export default PageTitle;
