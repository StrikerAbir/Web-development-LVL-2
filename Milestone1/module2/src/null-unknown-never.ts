//* null type
const searchName = (value: string | null) => {
    if (value === null) {
        console.log('there is nothing to search');
    } else {
        console.log('searching');
        
    }
}

searchName('tishu')
searchName(null) // direct evabe null pathano jai na. jodi na union akare type null set kora na thake. tai upore union kore null type set kora hoise.

//* unknown
const getMyCarSpeed = (speed:unknown) => {
    if (typeof speed === 'number') {
        const convertedSpeed = (speed * 1000) / 3600
        console.log(`speed is ${convertedSpeed}`);
        
    }
    if (typeof speed === 'string') {
        const [value,unit] = speed.split(' ');
        const convertedSpeed = ( parseFloat(value)* 1000) / 3600;
        console.log(`speed is ${convertedSpeed}`);
    } else {
        console.log('wrong type')
    }
}
getMyCarSpeed(10)
getMyCarSpeed('10 km^-1')

//* never type

function throwError(msg:string):never {  // nerver dia set kora holo eta kono kisu return korbe na kokhno
    throw new Error(msg)
}
throwError('error hoise')