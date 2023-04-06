import { data } from "../../var/index";
import { getTrIndex } from "../other/getElem";

export function getRowData(i) {
 return getTrIndex(i).then((index) => {
    return {index, data: JSON.parse(JSON.stringify(data[index]))}
 })  
}