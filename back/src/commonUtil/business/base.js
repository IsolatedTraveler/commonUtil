/* eslint-disable no-undef */
import { Class } from "../core";
import { calc, debounce, throttle, toDecimalNumber, unique } from "../public/fun/base";
Class.prototype.unique = unique
Class.prototype.calc = calc
Class.prototype.toDecimalNumber = toDecimalNumber
Class.prototype.throttle = throttle
Class.prototype.debounce = debounce
Class.prototype.debounce1 = debounce1
Class.prototype.uuid = uuid
Class.prototype.name = 'commonUtil'