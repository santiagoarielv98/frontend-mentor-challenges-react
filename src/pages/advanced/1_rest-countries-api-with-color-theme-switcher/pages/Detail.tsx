import React from "react";
import { useParams } from "react-router-dom";

export interface DetailProps {}

export const Detail: React.FC<DetailProps> = () => {
  const { name } = useParams();

  return <div>{name}</div>;
};

export default Detail;
