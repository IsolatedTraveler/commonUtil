import { useModule } from "../../var/use";

export function getModule(name) {
  return name ? useModule[name] : useModule
}