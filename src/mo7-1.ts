// 7-1 class and object

   class Animal{
    name: string;
    species: string;
    sound: string;

    constructor (name: string, species: string, sound: string){
        this.name = name;
        this.species = species;
        this.sound = sound;
    };


   };

   const dog = new Animal("dogi","dog","Ghew");

//    console.log(dog.name);

// =========== parameter porarties

class Animal2 {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}
}

const cat =  new Animal2("pussy", "parsian","meow");

console.log(cat);