/* const person: {
  name: string;
  age: number;
}*/
const person = {
  name: "SeYoung",
  age: 26,
  hobbies: ["Sports", "Cooking"],
};

let favoriteActivities: string[]; // 문자열만 담는 배열로 타입을 지정
favoriteActivities = ["Sports"]; // 'Sports' => 배열이 아니어서 error, ['Sports' , 1] => 배열에 숫자가 있어서 error

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby); // Sports  Cooking 출력
  console.log(hobby.toUpperCase()); //SPORTS  COOKING 출력
  // console.log(hobby.map())// error => 문자열은 맵돌릴 수 없어서
}
