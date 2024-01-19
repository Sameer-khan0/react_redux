// const obj = {
//     "name": "khan",
//     "age": 18,
//     "alive": true,
//     "hobby": "coding",
//     "detail": function() {
//         return `My name is ${this.name} and I am ${this.age} years old. My hobby is ${this.hobby} and I am ${this.alive ? 'alive' : 'not alive'}.`;
//     }
// };

// console.log(obj.detail());
// console.log(obj['name'])
// console.log(obj.age)
// function exampleFunction() {
//     console.log(this);
//   }
  
//   const obj = {
//     method: function() {
//       console.log(this);
//     }
//   };
  
//   exampleFunction() // Global object (window in a browser)
// //   obj.method();      // The object 'obj'
  

// const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     console.log(a)
//   }


//   const lines2 = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];


//   const line3=[...lines,...lines2]
//   console.log(line3)

function sum(...num){
    return num.reduce((a,b)=> a + b)
}

console.log(sum(2,3,4,5,54,53,32,2,2,3,4,5,54,53,32,2,2,3,4,5,54,53,32,2,2,3,4,5,54,53,32,2,13131))