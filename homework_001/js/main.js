const departments = [`main`, `accounting`, `it`, `fast_food`, `transport`, `servise`];

function createNewEmployer(firstName, secondName, age, gender, level, department, accesLevel, coment) 

    {
            this.firstName = firstName;
            this.secondName = secondName;
            this.age = age;
            this.gender = gender;
            this.level = level;
            this.department = department;
            this.coment = coment;

            this.showFullInfo = () => {
                return (`This employer is ${firstName} ${secondName}, ${age} years old.  
            level of quality is ${level}. Employer wokr in ${ departments[department]} department. 
            Comentary for employer: ${coment}`)};

            this.accesLevel = () => {
                let departmentsList = ``;
                accesLevel.forEach(element => {
                        departmentsList += departments[element];
                        departmentsList += `, `;
                        });

                return (`${this.firstName + ` ` + this.secondName} employer can acces to: ${departmentsList}`)};
    }

const Olexa = new createNewEmployer(`Olexa`, `Hristinson`, 39, `male`, `80`, 2, [0,1,2,3],`Conscientia mille testes`) 
const Olena = new createNewEmployer(`Olena`, `Colman`, 33, `female`, `63`, 1, [0,1,3],`Veni, vidi, vici`) 
const Stefanya = new createNewEmployer(`Stefanya`, `Petrenko`, 58, `female`, `120`, 1, [3,5],`Gloria vertutem tamquam umbra sequitur`) 

console.log(Olexa.firstName)
Olexa.firstName = `Svetlana`
console.log(Olexa.firstName)

Object.defineProperty(Olexa, `firstName`, {
    configurable: false,
    writable: false,
    
  });


Olexa.firstName = `Suzana`
Olexa.secondName = `Glorya`
console.log(Olexa.firstName)
console.log(Olexa.secondName)

class createNewClassEmployer{
        constructor (firstName, secondName, age, gender, level, department, accesLevel, coment) 

    {
            this.firstName = firstName;
            this.secondName = secondName;
            this.age = age;
            this.gender = gender;
            this.level = level;
            this.department = department;
            this.coment = coment;
    }

            showFullInfo () {
                return (`This employer is ${this.firstName} ${this.secondName}, ${this.age} years old.  
            level of quality is ${this.level}. Employer wokr in ${ departments[this.department]} department. 
            Comentary for employer: ${this.coment}`)};

            accesLevel () {
                let departmentsList = ``;
                accesLevel.forEach(element => {
                        departmentsList += departments[element];
                        departmentsList += `, `;
                        });

                return (`${this.firstName + ` ` + this.secondName} employer can acces to: ${departmentsList}`)};
    
    }    

const Iohan = new createNewClassEmployer(`Iohan`, `Bah`, 19, `male`, `45`, 3, [3],`To be or not to be`) 

console.log(Iohan.showFullInfo())
