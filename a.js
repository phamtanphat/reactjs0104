
// const teo = {
//     name : 'Nguyen Van Teo',
//     age : 20,
//     sayhello(){
//         console.log(`Xin chao ban ${this.name}`);
//     }
// }
// teo.address = "20"
// const ti = teo.sayhello;
// ti.bind({name : 'Teo'})();
// console.log(teo.address);
// function tinhcong(a , b = 5){
//     return a + b;
// }
// console.log(tinhcong(6));
const a = {name : 10 , age : 20};
const b = a;

console.log(a === b);