import { addRow } from "../fun/prop/addRow";
import { delRow } from "../fun/prop/delRow";
import { getData } from "../fun/prop/getData";
import { getRowData } from "../fun/prop/getRowData";
import { selectedTr } from "../fun/prop/selectedTr";
import { updateRow } from "../fun/prop/updateRow";
import { reload } from "../fun/reload/index";
Class.prototype.getRowData = getRowData
Class.prototype.selectedTr = selectedTr
Class.prototype.getData = getData
Class.prototype.addRow = addRow
Class.prototype.updateRow = updateRow
Class.prototype.delRow = delRow
Class.prototype.reload = reload