
import { Theme } from "../types/theme";
import { ThemeWorkbench } from "../types/workbench";
import { getWorkbench as getEverforestWorkbench} from "./classic";
import { getWorkbench as getNewWorkbench} from "./modern";

export function getWorkbench(theme: Theme) {
  if (theme.workbench == ThemeWorkbench.MODERN) {
    return getNewWorkbench(theme);
  }
  return getEverforestWorkbench(theme);
}