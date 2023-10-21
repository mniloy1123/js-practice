 const num = 3;
 function multiplyBy2 (inputNumber) {
    const result = inputNumber*2;
    return result;
 }

 const output = multiplyBy2(num);
 const newOutput = multiplyBy2(10);

 /*
 Memory: 
    - num : 3
    - multiplyBy2 : function
    - output : first, unassigned (command). then, 6 after 
               result is calculated
    - newOut : unassigned, then 20

 output = multiplyBy2(3)

 Local Memory:
    - inputNumber : 3  (inputNumber is the parameter, 
                    3 is the argument)
    - result : 6

 return result --> finds result in the memory and ships it to the 
                  main memory (output)
                
  Local Memory:
    - inputNumber : 10  
    - result : 20
  
  return result;

  */

  function copyArrayAndMultiplyBy2(array) {
      const output = [];
      for (let i = 0; i < array.length; i++) {
         output.push(array[i] * 2);
      }
      return output;
  }

  const myArray = [1, 2, 3];
  const result = copyArrayAndMultiplyBy2(myArray);

  function copyArrayAndManipulate(array, instruction) {
      const output = [];
      for (let i = 0; i < array.length; i++) {
         output.push(instruction(array[i]))
      }
      return output;
  }

  function multiplyBy4 (input) {
      return input * 4;
  }

  const newResult = copyArrayAndManipulate([1, 2, 3], multiplyBy4);