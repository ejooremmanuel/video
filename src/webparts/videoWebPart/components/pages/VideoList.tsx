import React, { FC, useState } from "react";
import { useGetVideosList } from "../hooks";
import styled from "styled-components";

import { WebPartContext } from "@microsoft/sp-webpart-base";
import { PageContext } from "@microsoft/sp-page-context";

type Props = {
  context: WebPartContext;
  pageContext: PageContext;
};

//performing a check

export const VideoList: FC<Props> = ({ context, pageContext }) => {
  const [current, setCurrent] = useState(0);
  const { data, isLoading } = useGetVideosList();

  const handleNext = () => {
    if (current + 1 === data.length) return;
    console.log("here...");

    setCurrent(current + 1);
  };
  const handlePrev = () => {
    if (current === 0) return;
    setCurrent(current - 1);
  };

  return (
    <section>
      {(() => {
        if (isLoading) {
          return <>loading...</>;
        }
        if (data.length) {
          return (
            <div>
              <StyledList>
                <StyledButton onClick={handlePrev}>Prev</StyledButton>
                <video src={data[current]?.VideoLink} controls></video>
                <StyledButton onClick={handleNext}>Next</StyledButton>
              </StyledList>
            </div>
          );
        }

        return <>No video yet</>;
      })()}
    </section>
  );
};

const StyledList = styled.div`
  margin: 10px auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const StyledButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
`;
