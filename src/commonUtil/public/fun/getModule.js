import { useModule } from "../../var/use";

export function getModule(name) {
  return useModule[name]
}