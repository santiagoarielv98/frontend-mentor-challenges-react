import React from "react";
import { useLoaderData } from "react-router-dom";
import { Country } from "../types/countries";

export interface DetailProps {}

export const Detail: React.FC<DetailProps> = () => {
  const data = useLoaderData() as Country | undefined;

  return <div>{data?.name}</div>;
};

export default Detail;
