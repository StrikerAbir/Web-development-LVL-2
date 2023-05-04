

const makePromise = ():Promise<string> => {     // string type er promise return 
   return new Promise<string>((resolve, reject) =>{
        const data: string = 'data is fetched';
        if (data) {
            resolve(data)
        } else {
            reject('failed to fetch data');
        }
    })
}

const getPromiseData = async ():Promise<string> => {
    const data = await makePromise()
    return data
}

// promise type by default any thake. cz jkono dhoroner data ashte pare.

// json place holder example
interface Itodo{        // jehetu akta data ansi tai just interface declear kore dialm emni te any type theke.
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const getTodo = async ():Promise<Itodo>=>{        
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    return data
}

const getTodoData = async ():Promise<void> => {
    const result = await getTodo();
    console.log(result);
}

getTodoData();