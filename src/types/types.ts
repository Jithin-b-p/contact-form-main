import React from "react";

export type FieldSetPropsTypes = {
  legend: string;
  children: React.ReactNode;
};

export type FieldPropsTypes = {
  label?: string;
  htmlFor?: string;
  error?: string;
  children: React.ReactNode;
  row?: boolean;
};

export type StyledContainerProps = {
  row?: boolean;
};
