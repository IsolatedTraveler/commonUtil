import { setPageTemp } from "../../util";
import { setUser, user } from "../var";

export function getUser() {
  setPageTemp(user, setUser)
}