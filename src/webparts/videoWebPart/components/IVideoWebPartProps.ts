import { WebPartContext } from "@microsoft/sp-webpart-base";
import { PageContext } from "@microsoft/sp-page-context";
export interface IVideoWebPartProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  context: WebPartContext;
  pageContext: PageContext;
}
