const getAverage = (numsArray : number[]) : number => (
    numsArray.reduce((sum, item) => sum + item, 0) / numsArray.length)

const getAmountOfPositive = (numsArray : number[]) : number => (
    numsArray.filter(value => value > 0).length)

const sortList = (numsArray : number[]) : number[] => (
    numsArray.sort((a, b) => (a - b)))