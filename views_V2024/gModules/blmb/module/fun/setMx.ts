import type {BlmbMxCol} from 'GMBlmb';
import {alertCol} from '../public/alertCol';

export function setMx(cols: BlmbMxCol[]) {
  return cols.forEach((col, xh) => {
    alertCol(col, xh, false);
  });
}
