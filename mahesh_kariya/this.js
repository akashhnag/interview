var name = "Suprabha"
let newObject = {
    name : "supi",
    arrowFunc: () => {
        console.log(this.name); 
    },
    regularFunc() {
        console.log(this.name); 
    }   
}

newObject.arrowFunc();
newObject.regularFunc();