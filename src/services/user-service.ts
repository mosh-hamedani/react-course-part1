import create from "./http-service";

export interface User {
  id: number;
  name: string;
}

export default create('/users');
