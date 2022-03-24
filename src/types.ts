import { ReactElement } from "react";

export type Languages = "en" | "ru";

export interface IProject {
  src: string;
  alt: string;
  href?: string;
  description?: string | ReactElement;
  git?: string;
}
