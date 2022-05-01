import { useState } from "react";
import { fetchData1 } from "../utils";

export const DataLoader: React.VFC = () => {
  const [data, setData] = useState<string | null>(null);

  if(data === null) {
    throw fetchData1().then(setData);
  }

  return <div>Data is {data}</div>
}