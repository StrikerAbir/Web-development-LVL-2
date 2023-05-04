type Mandatory = { name: string; age: number; salry: number }

const additIn2 = <T extends Mandatory>(     // mandatory er moddhe t thakte hobe eta mean kore.
  myInfo: T
) => {
  const crsh = "okkkk";
  const newData = { ...myInfo, crsh };
  return newData;
};

type myInfoType = {
  name: string;
  age: number;
  salry: number;
};
const myInfo2: myInfoType = {
  name: "oko",
  age: 23,
  salry: 2342,
};
const result6 = additIn2<myInfoType>(myInfo2); // hisabe emn vabe object ta jawar kotha. kintu jodi
const result7 = additIn2({ name:'ok' }); // etaw kintu accept korse generic hoar karone. kintu eta to thik na. amra myInfo te khali name, age , salry ei property ase. only ei gulo accept korbo. se jonne amra ei generic constaint use korbo. upore function a extends kore kora hoise ota. tokhn eta error dekhabe


/// error issa kore kora