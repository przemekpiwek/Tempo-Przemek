import React from "react";
import styled from "styled-components";
import CircleLoader from "react-spinners/ClipLoader";
import { COLORS } from "../styles/GlobalStyles";

const Loader = () => {
  return (
    <LoaderWrapper>
      <CircleLoader data-test-id="loader" size={150} color={COLORS.accent} />
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: var(--background);
`;

export default Loader;
