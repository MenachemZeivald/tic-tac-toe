import React from "react";
import styled from "styled-components";
import DefaultStyle from "../DefaultStyle";

export default function Language({ language, setLanguage }) {
  return (
    <>
      <LngBtn
        lang={language}
        onClick={() => {
          language === "en" ? setLanguage("he") : setLanguage("en");
        }}
      >
        <span lang="he"> עברית </span>English
      </LngBtn>
      <LngIcon
        translate="no"
        className="material-symbols-outlined"
        onClick={() => {
          language === "en" ? setLanguage("he") : setLanguage("en");
        }}
      >
        language
      </LngIcon>
    </>
  );
}

const LngBtn = styled(DefaultStyle)`
  font-size: x-large;
  width: fit-content;
  padding: 0.2em;
  padding-bottom: 0.3em;
  position: relative;
  @media (max-device-width: 800px) {
    display: none;
  }
  & > span {
    padding: 0.1em;
    margin-right: 0.6em;
    font-size: 105%;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 7px;
    left: ${({ lang }) => (lang === "he" ? "4px" : "90px")};
    width: ${({ lang }) => (lang === "he" ? "70px" : "80px")};
    transition: all 0.3s;
    height: 3px;
    background-color: var(--Dblue);
  }
`;
const LngIcon = styled(DefaultStyle)`
  width: 50px;
  aspect-ratio: 1;
  @media (min-device-width: 800px) {
    display: none;
  }
`;
