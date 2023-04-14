import * as React from "react";
import { IVideoWebPartProps } from "./IVideoWebPartProps";
import styled from "styled-components";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./react-query";
import { VideoList } from "./pages/VideoList";

export default class VideoWebPart extends React.Component<
  IVideoWebPartProps,
  {}
> {
  public render(): React.ReactElement<IVideoWebPartProps> {
    return (
      <QueryClientProvider client={queryClient}>
        <StyledSection>
          <VideoList
            context={this.props.context}
            pageContext={this.props.pageContext}
          />
        </StyledSection>
      </QueryClientProvider>
    );
  }
}

const StyledSection = styled.section`
  background: #ffffff;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  padding: 30px 30px 15px 30px;
`;
