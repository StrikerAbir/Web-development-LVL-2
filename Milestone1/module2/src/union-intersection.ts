//* union type

type NoobDev = {
    name:string
}
type JuniorDev = {
    name: string;
    experience: number;
    expertise: string;
}

const newDeveoloper: NoobDev | JuniorDev = {   // 2ta type ba tar beshi use hoi. mane hoi eta hobe na hoi ota. etai union (|) or use hoi
    name: "abir",
    expertise: 'js',
    experience:2
}


//* intersection type

type NDev = {
    name:string
}
type JDev =NDev & {         // & dia intersection kora holo. akhn NDev type er name property type JDev o use korte parbe.
    experience: number;
    expertise: string;
}

enum Level{     //enum type akta object format. default vabe value indexing 0,1,2 emn thake. seta amra change o korte pari = '' dia.. eneum use kora thik na. eta use korbo na tmn.
    junior='junior',
    mid='mid',
    senior='senior',
}

type NextLvlDEv = JDev & {
    leadExp: number;
    level: Level  // type ta enum type a nia jawa hoise
}

const newDeveoloper2: NDev | JDev = {   // 2ta type ba tar beshi use hoi. mane hoi eta hobe na hoi ota. etai union (|) or use hoi
    name: "abir",
    expertise: 'js',
    experience:2
}
const dev: NextLvlDEv = {  // sob property lagbe full fill korte na hole error hobe
    name: "next vai",
    experience: 3,
    expertise: 'ts',
    leadExp: 2,
    level:Level.junior     // Level type . dia use korte holo cz eta enum.
}