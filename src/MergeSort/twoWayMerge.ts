export const twoWayMerge = (list1: number[], list2: number[]) => {
    const n1 = list1.length;
    const n2 = list2.length;
    if (n1 === 0 ){
        return list2
    }
    else if (n2 === 0) {
        return list1
    }
    else {
        const newMergedList = []
        let i1 = 0
        let i2 = 0

        while (i1 < n1 ||  i2 < n2) {
            if(i1 < n2 && i2 < n2){
                if (list1[i1] <= list2[i2]) {
                    newMergedList.push(list1[i1])
                    i1 += 1
                }
                else if (list2[i2] < list1[i1]){
                    newMergedList.push(list2[i1])
                    i2 += 1
                }
            }
            else {
                if(i1 == n1){
                    newMergedList.push(list2[i2])
                    i2 += 1
                }
                else if (i2 == n2) {
                    newMergedList.push(list1[i1])
                    i1 += 1
                }
            }
        }
        return newMergedList
    }
}