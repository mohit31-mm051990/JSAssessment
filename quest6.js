var array =[1,2,3,4,5];

array.push(6);
console.log(array);
array[0]=6*[array[0]];

array[1]=6*[array[1]];
array[2]=6*[array[2]];
array[3]=6*[array[3]];
array[4]=6*[array[4]];
array[5]=6*[array[5]];
array.push(48);

array.splice(2,1);

console.log(array);