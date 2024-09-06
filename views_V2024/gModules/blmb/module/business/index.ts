import {Class} from '../core';
import {val, add, reload, render, del, alertCol} from '../public';
Class.prototype.add = add;
Class.prototype.alertCol = alertCol;
Class.prototype.del = del;
Class.prototype.reload = reload;
Class.prototype.render = render;
Class.prototype.val = val;
