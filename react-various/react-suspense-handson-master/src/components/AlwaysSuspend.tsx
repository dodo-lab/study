import { sleep } from "../utils";

export const AlwaysSuspend: React.VFC = () => {
  console.log('AlwaysSuspend is rendered');
  throw sleep(1000);
}