function intReversal(int) {
    let newString = String(int);
    let newArray = newString.split("");
    console.log(newArray.reverse())
}
//Question 1

function palindromeChecker(string) {
    let temp = string.split('').reverse().join("");
    if (temp !== string) {
        return false
    }
    return true
}
//Question 2

function allPossibleCombinations(string) {
    let temp = [];
    let temp2 = "";
    let lenLength = Math.pow(2, string.length);
    for (let i = 0; i < lenLength; i++) {
        temp2 = "";
        for (let j = 0; j < string.length; j++) {
            if ((i & Math.pow(2, j))) {
                temp2 += string[j];
            }
        }
        if (temp2 !== "") {
            temp.push(temp2);
        }
    }

    return temp
}
//Question 3

function sortString(string) {
    return string.split('').sort().join('')
}
//Question 4

function capitilize(string) {
    let temp = string.split(' ')
    let temp2 = temp.map((key) => {
        let array = key.split('')
        array[0] = array[0].toUpperCase()
        return array.join('')
    })
    return temp2.join(' ')
}

//question 5

function findBiggestWord(string) {
    let temp = string.split(' ')
    temp = temp.sort((a, b) => b.length - a.length);
    return temp[0]
}
//question 6

function getVowels(str) {
    return str.match(/[AEUIOaeuio]/gm).length
}
//question 7

function checkPrime(num) {
    isPrime = true;
    if (num === 1) {
        return false;
    }
    if (num < 1) {
        return false;
    }
    if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        return isPrime
    }
}
//question 8

function getType(obj) {
    return typeof (obj)
}
//question 9

function matrixIdentity(col = 4, rows = 4) {
    let matrix = []
    for (let i = 0; i < col; i++) {
        if (!matrix[i]) {
            matrix[i] = []
        }
        for (let j = 0; j < rows; j++)
            if (j === i) {
                matrix[i][j] = 1;
            } else {
                matrix[i][j] = 0;
            }
    }
    return matrix
}
//question 10

function sortedSmallLarge(arry) {
    let data = arry.sort((a, b) => {
        return a - b
    })
    return [data[1], data[data.length - 2]]
}
  //question 11

  function perfectNumber(number){
    if(number === 1){
      return false;
    }
    let sum = 1;
    for(let i=2;i<number;i++){
      if(number%i===0){
        sum += i 
      }
    }
    return sum === number
  }
//question 12

function findFactors(number){
    let result =[]
    for(let i=1;i<=number;i++){
      if(number % i===0){
        result.push(i)
      }
    }
    return result
  }
  findFactors(1)
//question 13

function coinAmount(amount, coins=[25,10,5,2,1]){
    let temp = amount; 
    let result = []
      while(temp>0){
        let temp2 = coins.filter(coin=>coin<=temp);
        temp2.sort((a,b)=>{
          return b-a
        })
        if(temp===temp2[0]){
          result.push(temp2[0]);
          break;
        }
        temp -= temp2[0]
        result.push(temp2[0]);
      }
      return result
    }
//question 14
function getExponent(b,n){
    let result =b
    let base = b
    for(let i=1;i<n;i++){
        result *= base
      
    }
    console.log('base: ',b,'exponent: ', n)
    console.log('custome function',result)
    console.log('test', Math.pow(b,n))
  }
  //question 15
  function uniqueCharacters(string, test){
    let result = new Set(string);
    result = [...result].join('');
    return test===result
  }
  //question 16
  function characterCount(string){
    let obj={}
    let temp = [...string.trim()].filter(key=>key!==' ');
    temp.forEach((key)=>{
        if(obj[key]===undefined){
          obj[key] = 0
        }
        obj[key] +=1
    })
    console.log(obj)
  }
  //question 17
  function binarySearch(array, x,start, end){
    let mid = Math.floor((start+end)/2)
    console.log(mid)
    if(start>end)return false;
    if(array[mid]===x)return true;
    if(array[mid]>x){
      binarySearch(array,x,start,mid-1)
    }
    binarySearch(array,x,mid+1,end)
  }
  let test=[1, 3, 5, 7, 8, 9]
  if(binarySearch(test,6,0,test.length-1)){
    console.log('element has been found')
  }else{
    console.log('element not found')
  }
  //question 18
  function getBiggernumber(number, amount){
    let result =[]
    let temp = number
    for(let i=1; i<=amount;i++){
      temp++  
      result.push(temp)
    }  
    console.log(result)
  }
  //question 19
  function genID(length){
    let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result =[]
    for(let i=0;i<length;i++){
      result.push(char[Math.floor(Math.random()*char.length)])
    }
    result = result.join('')
    return result
  }
  //question 20
  function getSubsets(array,sub){
    let temp=array.reduce((prev,val)=>prev.concat(prev.map(prevs=>[val,...prevs])),[[]]);
    return temp.filter((val)=>{
      return val.length===sub
    })
    
  }
  //question 21
  function letterCounter(string,letter){
    return string.match(new RegExp(`${letter}`, "g")).length
  }
  //question 22
  function getFirstUnique(string){
    let temp = characterCount(string);
    for(let prop in temp){
      if(temp[prop]===1){
        return prop
      }
    }
  }
  //question 23
  function bubbleSort(array){
    let len = array.length
    for(let i=0; i<len;i++){
      for(let j=0; j<len;j++){
        if(array[j]<array[j+1]){
          let temp = array[j];
          array[j]= array[j+1];
          array[j+1]= temp
        }
      }
    }
    return array
  }
  //question 24
  function longestCountryName(array){
    array.sort((a,b)=>b.length-a.length)
    return array[0]
  }
  //question 25
  let LongestSubstring = function(string) {
    const len = string.length;
    if (len < 2) { return len; }
    let res = [];
    let tmp = [];
    [...string].forEach(x => {
      if (temp.includes(x)) {
        temp = [...temp.slice(temp.findIndex(y => y === x ) + 1)];
      }
      temp.push(x);    
      if (temp.length > res.length) { res = temp; }
    });
  return res;
};
//question 26

function longestPalindrome(string){
    let result =[]
    for(let i=0;i<string.length;i++){
      for(let j=0;j<string.length;j++){
        let temp = string.substring(i,j+1);
        if(palindromeChecker(temp)){
          result.push(temp)
        }
      }
    }
    result.sort((a,b)=>{
      return b.length-a.length
    })
    return result
  }
  //question 27

  function callback(x,y,cb){
    if(x>y){
     return cb(false,true)
    }
    return cb(true, false)
  }
  callback(3,2,(error,res)=>{
    if(error) {console.log(error)};
    if(res){console.log(res)}
  })
//question 28
function getName(fun){
    return fun.name
   }
   //question 29  