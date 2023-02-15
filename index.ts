import axios from "axios";

// Type Properties List
let VarString: string = "John Doe";
let VarInt: number = 20;
let VarTuples: [string, boolean, number] = ["brown", true, 40];
let VarBool: boolean = true;
let VarObj: { name: string; age: number; isMarried: boolean } = {
  name: VarString,
  age: VarInt,
  isMarried: VarBool,
};
let VarArrString: Array<string> = ["John", "Doe"];
let VarArrInt: Array<number> = [2, 0];
let VarArrAny: Array<any> = ["John", 20];
let VarNull: null = null;
let VarUndefined: undefined = undefined;
let VarDate: Date = new Date();

// Log the variables
console.log(`String: ${VarString}`);
console.log(`Integer: ${VarInt}`);
console.log(`Tuples: ${VarTuples}`);
console.log(`Bool: ${VarBool}`);
console.log(`Object: ${VarObj}`);
console.log(`Array String: ${VarArrString}`);
console.log(`Array Integer: ${VarArrInt}`);
console.log(`Array Any: ${VarArrAny}`);
console.log(`Null: ${VarNull}`);
console.log(`Undefined: ${VarUndefined}`);
console.log(`Date: ${VarDate}`);

// Fetching Data From API Using Interface as A Reference for Data Structure
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    const todo = response.data as Todo;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    logTodo(id, title, completed);
  })
  .catch((err) => console.log(err));

// Void Function
const logTodo = (id: number, title: string, completed: boolean): void => {
  console.log(`
      The Todo with ID: ${id}
      Has a title: ${title}
      Is completed: ${completed}
    `);
};

// Return Function
const throwError = (message: string): string => {
  if (!message) throw new Error(message);
  return message;
};

// Class In Typescript
class Person {
  constructor(public name: string, public age: number, public country: string) {}
  greetings(): void {
    console.log(
      `Hi my name is ${this.name}, i'm ${this.age} and i'm from ${this.country}`
    );
  }
}

const person1 = new Person("Andy", 20, "Russia");
person1.greetings();