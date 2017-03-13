// @flow
/**
 * Created by Freax on 17-3-12.
 * @Blog http://www.myfreax.com/
 */
export  default (quantity,minChar = 5,maxChar = 10,fn) => {
  let randomArray = [];
  while (randomArray.length < quantity){
    let num = Math.ceil(Math.random()*minChar*(maxChar/minChar));
    if (num >= minChar) randomArray.push(fn(num));
  }
  return randomArray;
}


