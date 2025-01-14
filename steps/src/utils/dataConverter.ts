import { TStepsItem } from "@/types";

const sortByDateDesc = (a: TStepsItem, b: TStepsItem) => {
    let res;
    if (a.date < b.date) {
        res = 1;
    } else if (a.date > b.date) {
        res = -1;
    } else {
        res = 0
    };
    return res;
}

const convertData = (data: TStepsItem[]) => {
    return [...data].sort(sortByDateDesc);
}

export { convertData };