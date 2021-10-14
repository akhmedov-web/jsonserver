let person={
   name:"shohbaxt",
   age:"15",
   jobs:"developer",
   hobbies:{
       hobbyOne:"listening to music",
       hobbyTwo:"coding",
       hobbyThree:"watching football"
   }                      
};
const jsonFile=JSON.stringify(person);
const obj=JSON.parse(jsonFile);
obj.nick='pro';
console.log(jsonFile);
console.log(obj);