import { Class } from "../core";
import { getCol, init, instruction, rxReview, tip } from "../public";

Class.prototype.init = init
Class.prototype.instruction = instruction
Class.prototype.rxReview = rxReview
Class.prototype.tip = tip
Class.prototype.getCol = getCol
Class.prototype.dealAjaxData = GLOBAL$AJAX$.dealAjaxData
Class.prototype.checkAuth = GLOBAL$AJAX$.magicCheckAuth