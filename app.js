/* const person: {
  name: string;
  age: number;
}*/
var person = {
    name: "SeYoung",
    age: 26,
    hobbies: ["Sports", "Cooking"]
};
var favoriteActivities; // 문자열만 담는 배열로 타입을 지정
favoriteActivities = ["Sports"]; // 'Sports' => 배열이 아니어서 error, ['Sports' , 1] => 배열에 숫자가 있어서 error
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby); // Sports  Cooking 출력
    console.log(hobby.toUpperCase());
}
