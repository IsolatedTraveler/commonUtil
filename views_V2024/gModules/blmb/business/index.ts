import {Class} from '../core';
import {render, val, add, alertCol, del, keys, reload} from '../public';
Class.prototype.add = add;
Class.prototype.alertCol = alertCol;
Class.prototype.del = del;
Class.prototype.keys = keys;
Class.prototype.reload = reload;
Class.prototype.render = render;
Class.prototype.val = val;
