const obj = [1,2,3,4,5,6]

console.log(obj.length)  // is prototype



const obj = Object.create ({

	key: {
		value: 123,
		enumerable: true,
		writable: false,
		configurable: true	    

	set() {},
	get() {
		console.log(`sdf sdf `)
		return
		    }    

	    }


},{})





///////////////////////////////////////////////////////////////////////////////////////////


const obj2 = Object.create({},
	{
  
  key:{
  	enumerable: true,
    configurable: true,
  	set(value) 
    	{
      this.value = value;
      console.log(this);
      
      }
      
      }
  
  })
  
  
  obj2.key = 3432;


///////////////////////////////////////////////////////////////////////////////////////////


class PersonClass 
		    {
		    constructor (name) 
		    {this.name = name}


		    test() {return this.name}

		    get age() {}
		    set age() {}

		    }




///////////////////////////////////////////////////////////////////////////////////////////









