import { ResponseModel } from "./ResponseModel";
import { todo } from "./todo";

export interface TodoResponseModel extends ResponseModel{
  data:todo[]
}
