function arrElement<T>(arr:T[], index:number):any {
  return arr.length > index ? arr[index] : false ;
}

console.log(arrElement<string>(["a","b","c","d"],0));
console.log(arrElement<string>(['a'], 5)); // false
