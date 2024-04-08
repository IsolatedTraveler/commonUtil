import { Class } from "../core";
import { exportInventoryDetails, importInventoryDetails, addInventoryRecord, closePdtj, submitPdtj } from "../public";

Class.prototype.addInventoryRecord = addInventoryRecord
Class.prototype.closePdtj = closePdtj
Class.prototype.exportInventoryDetails = exportInventoryDetails
Class.prototype.importInventoryDetails = importInventoryDetails
Class.prototype.submitPdtj = submitPdtj
Class.prototype.commonQueryAsyncHttppost_callback = GLOBAL$AJAX$.commonQueryAsyncHttppost_callback
Class.prototype.dealAjaxData = GLOBAL$AJAX$.dealAjaxData