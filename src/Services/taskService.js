import { httpAxios } from "@/helper/httpHelper";
import { Task } from "@/models/tasks";
import { responseCookiesToRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export async function addTask(task){
  const result = await httpAxios.post("/api/tasks",task).then((response)=>response.data)
  return result;
}