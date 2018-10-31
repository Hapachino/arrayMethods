const arrMethods = require('./index');
const forEach = arrMethods.forEach;

describe('forEach method', () => {
  beforeEach(() => {
    testArr = [1, 2, 3];
    newArr = [];
    counter = 0;
  });

  test('Should pass array via first argument', () => {
    forEach(testArr, (item, index, array) => {
      expect(array).toEqual(testArr);
    });
  });

  test('Should iterate over each element once', () => {
    forEach(testArr, (item, index, array) => {
      counter++;
    });

    expect(counter).toBe(testArr.length);
  });

  test('Should call callback once for each element', () => {
    const makeCounter = () => {
      function count() {
        return count.counter++;
      }

      count.counter = 0;

      return count;
    }

    let count = makeCounter();

    forEach(testArr, count);

    expect(count()).toBe(testArr.length);
  });

  test('Callback first argument should equal item', () => {
    forEach(testArr, item => {
      newArr.push(item);
    })

    expect(3).toBe(testArr.length);
    
    for (let i = 0; i < testArr.length; i++) {
      expect(newArr[i]).toBe(testArr[i]);
    }

    // expect(newArr).toEqual(testArr);
  });

  test('Callback\'s second argument should equal index', () => {
    forEach(testArr, (item, index) => {
      newArr.push(index);
    })

    expect(newArr.length).toBe(testArr.length);

    for (let i = 0; i < testArr.length; i++) {
      expect(i).toBe(newArr[i]);
    }
  });

  test('Callback\'s third argument should equal array', () => {
    forEach(testArr, (item, index, array) => {
      newArr = array;
    })

    expect(newArr.length).toBe(testArr.length);

    for (let i = 0; i < testArr.length; i++) {
      expect(newArr[i]).toBe(testArr[i]);
    }
  });

  test('Should pass context via third argument', () => {
    forEach(testArr, function() {
      expect(this.key).toBe('value');
    }, { key: 'value' });
  });

  test('Item, index, array, and this should be optional', () => {
    let original = 0,
        test = 1;
    forEach(testArr, () => {
      original = test;
    });

    expect(original).toBe(test);
  });

  // test('Should return undefined', () => {
  //   throw new Error();
  // });

  // test('Should not mutate array', () => {
  //   throw new Error();
  // });

  // test('This inside callback should be undefined if not provided', () => {
  //   throw new Error();
  // });

  // test('This inside callback should be context if provided', () => {
  //   throw new Error();
  // });

  // test('Should not invoke callback for holes in array', () => {
  //   throw new Error();
  // });

  // test('Callback should not visit elements appended during function call', () => {
  //   throw new Error();
  // });

  // test('Should pass new item to callback if item is changed', () => {
  //   throw new Error();
  // });

  // test('Should not pass item to callback if deleted', () => {
  //   throw new Error();
  // });

  // test('Should skip next element, if current element is removed', () => {
  //   throw new Error();
  // });
});