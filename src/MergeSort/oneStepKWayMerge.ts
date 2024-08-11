import { twoWayMerge } from "./twoWayMerge"

export const oneStepKWayMerge = (listOfLists: Array<number[]>) => {
    if (listOfLists.length <= 1){
        return listOfLists
    }
    const returnListOfLists = []
    let k = listOfLists.length
    for (let index = 0; index < k - 1; index++) {
        if( index < k -1){
            returnListOfLists.push(twoWayMerge(listOfLists[index], listOfLists[index+1]))
        }
        else {
            returnListOfLists.push(listOfLists[k-1])
        }
    }
    return listOfLists
}

export const kWayMerge = (listOfLists: Array<number[]>)  => {
    const k = listOfLists.length
    if (k === 1){
        return listOfLists[0]
    }
    else {
        const newListOfLists = oneStepKWayMerge(listOfLists)
        return kWayMerge(newListOfLists)
    }
}