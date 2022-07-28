function cachingDecoratorNew(func) {
  let cache = [];
  return function (...args) {
    let hash = args.join(',');
    let value = cache.value;
    const objectInCache = cache.find((item) => item.hash === hash);

    if (objectInCache === undefined) {
      cache.value = value = func.call(this, ...args);
      cache.push({hash, value});
      if (cache.length > 5) cache.shift();
      console.log('Вычисляем: ' + value);
      return 'Вычисляем: ' + value
    } else {
      console.log('Из кэша: ' + value);
      return 'Из кэша: ' + value;
    }
  }
}

const debounceDecoratorNew = (f, ms) => {
  let timerId;
  let firstRunFlag = true;
  
  f.count = 0;

  return function (...args) {
    if (firstRunFlag) {
      f.apply(this, args);
      firstRunFlag = false;
      f.count = 1;
      return;
    }

    clearTimeout(timerId);
    timerId = setTimeout(() => {
      f.apply(this, args);
      console.timeEnd("time"); //(2)
    }, ms);

    f.count++;
  }
}
  
console.time("time"); //(1)