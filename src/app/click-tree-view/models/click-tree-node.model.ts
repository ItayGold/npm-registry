import { ClickTristateCheckboxState } from '../../click-tristate-checkbox/enums';

export class ClickTreeNode {
  loweredLabel: string;
  label: string;
  isExpanded?: boolean;
  isVisible?: boolean;
  checkState?: ClickTristateCheckboxState;
  selectedAmount?: number;
  key: number;
  parentKey?: number;
  levelIndex?: number;
  highlightedLabel?: string;
}
