let emni:any
emni = 'Next lvl go';
// any type er akta variable declear kora hoise. amra variable e string dilew eta string type hisebe thakse na any type er jonne. ejonno amra jehtu jansi j string eta ai type assertion korsi 'as type' dia.

// 2 Vabe lekha jai 
(emni as string).length;
<string>emni.length; // 2 tai same jinish 2 vabe lekha jai

function kgToGram(param: string | number): string | number | undefined{
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `the converted result is : ${value} gram`
    }
    if (typeof param === "number") {
        const value = (param) * 1000;
        return `the converted result is : ${value} gram`
    }
}

const reslutToBeNumber=kgToGram(1000)as number
const reslutToBeString = <string>kgToGram("1000")

type CustomErrorType = {
    message:string
}
try { } catch (err) {
    console.log((err as CustomErrorType).message)
}