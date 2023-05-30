import Class from "../core";
import { getPrint, print, printConfig, printSetHtml, setPrint } from "../public/fun/print";

Class.prototype.setPrint = setPrint
Class.prototype.getPrint = getPrint
Class.prototype.printSetHtml = printSetHtml
Class.prototype.print = print
Class.prototype.printConfig = printConfig