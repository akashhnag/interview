// 1️⃣ Simple Invocation
function simpleInvocation() {
    console.log(this);
}
simpleInvocation(); // Window Object or global object in case of nodejs.

// 2️⃣ Method Invocation
const methodInvocation = {
  method() {
      console.log(this);
  }
};
methodInvocation.method(); 
// logs methodInvocation object
// 3️⃣ Indirect Invocation
const context = { aVal: 'A', bVal: 'B' };
function indirectInvocation() {
    console.log(this);
}
indirectInvocation.call(context);  // logs { aVal: 'A' }
indirectInvocation.apply(context); // logs { bVal: 'A' }
// 4️⃣ Constructor Invocation
function constructorInvocation() {
    console.log(this);
}
new constructorInvocation(); 
// logs an instance of constructorInvocation