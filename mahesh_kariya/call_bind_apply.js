const person={
    displayFullName:function(){
        console.log(`fullname:${this.firstname+' '+this.lastname}`);
    },
    displayDetails:function(city,state){
        console.log(`city:${city}`);
        console.log(`state:${state}`);
    }
}

const person1={
    firstname:'akash',
    lastname:'nag'
}

//person.displayFullName.call(person1)
//person.displayDetails.call(person1,'rourkela','odisha')
//person.displayDetails.apply(person1,['Rourkela','Odisha'])
const fullname=person.displayFullName.bind(person1);
const myDetails=person.displayDetails.bind(person1,['Rourkela','Odisha'])
//console.log(myDetails);
fullname()
myDetails()