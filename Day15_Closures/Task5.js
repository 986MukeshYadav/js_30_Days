function createFunctions() {
    let functions = [];
  
    for (let i = 0; i < 5; i++) {
      functions[i] = (function(index) {
        return function() {
          console.log(index);
        };
      })(i);
    }
  
    return functions;
  }
  
  const funcs = createFunctions();
  funcs[0](); // Logs: 0
  funcs[1](); // Logs: 1
  funcs[2](); // Logs: 2
  funcs[3](); // Logs: 3
  funcs[4](); // Logs: 4
  