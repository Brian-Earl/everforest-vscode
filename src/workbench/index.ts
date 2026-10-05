
import { Theme } from "../types/theme";
import { ThemeWorkbench } from "../types/workbench";
import { getWorkbench as getEverforestWorkbench} from "./everforest";
import { getWorkbench as getNewWorkbench} from "./new";

export function getWorkbench(theme: Theme) {
  if (theme.workbench == ThemeWorkbench.NEW) {
    return getNewWorkbench(theme);
  }
  return getEverforestWorkbench(theme);
}