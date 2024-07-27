function createCounter() {
    let count = 0;
  
    return {
      increment: function() {
        count++;
      },
      getCount: function() {
        return count;
      }
    };
  }
  
  const counter = createCounter();
  counter.increment();
  console.log(counter.getCount()); // Logs: 1
  counter.increment();
  console.log(counter.getCount()); // Logs: 2
  