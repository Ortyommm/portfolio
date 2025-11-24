import { ReactElement } from "react";

export interface WorkProject {
  src: string;
  alt: string;
  href?: string;
  description?: string | ReactElement;
  git?: string;
}
