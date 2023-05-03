const users: {
  company: "ph doc"; //eta literal type. mane ekheane amra ph doc string dia rakhsi eta nijei akta type hoa gese. mane ekhane company te khali ph doc string e likhte hobe. onno kisu te ota hobe na.
  name: string;
  roll: number;
  age: number;
  isMarried: boolean;
  friend?: string; //optional chaining er moto. er mane holo friend thaktew pare naw pare.
} = {
  // company:"ph doc lol", // eta error dibe cz ph doc hobe only
  company: "ph doc",
  name: "john",
  roll: 12,
  age: 18,
  isMarried: false,
  friend: "ok",
};

// users.company='banbanpoo'
