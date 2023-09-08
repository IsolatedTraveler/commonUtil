import { load } from "../../../global/layer/public/load";
import { readXlsx } from "../../../global/xlsx/public/xlsxTotable";
import Class from "../core";

Class.prototype.readXlsx = readXlsx
Class.prototype.load = load