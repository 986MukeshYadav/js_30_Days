function memoize(fn) {
    let cache = {};
  
    return function(...args) {
      let key = JSON.stringify(args);
      if (cache[key]) {
        return cache[key];
      } else {
        let result = fn(...args);
        cache[key] = result;
        return result;
      }
    };
  }
  
  // Example usage:
  const slowFunction = num => {
    console.log('Processing...');
    return num * 2;
  };
  
  const memoizedFunction = memoize(slowFunction);
  console.log(memoizedFunction(5)); // Logs: Processing... 10
  console.log(memoizedFunction(5)); // Logs: 10 (from cache)
  