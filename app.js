//************************************* Roman Numeral Converter
/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

/*
Examples:
1: I
3: III,
4: IV, (5-1)
5: V,
8: VIII,(5+3)
9: IX,(10-1)
10: X,
30: XXX,(10*3)
40: XL,(50-10)
50: L,
80: LXXX,(50+30)
90: XC,(100-10)
100: C,
300: CCC,(100*3)
400: CD,(500-100)
500: D,
800: DCCC,(500+300)
900: CM,(1000-100)
1000: M
*/
//'number' object contains numbers and their roman corresondings,
//note that property in a js object doesnt accept a number as property name so I
//so I added an underscore in the begining
var number = {
    _1: "I",
    _5: "V",
    _10: "X",
    _50: "L",
    _100: "C",
    _500: "D",
    _1000: "M"
};
function convertToRoman() {    
    //How?
    //1- get number & convert it to array of digits
    //2- delete any '0' digits in the begining of the array, bcuz it has no value
    //3- convert the digits in the array to roman starting from the right side, and using 'number' object
    //4- Array.join("") the converted array, and return the resulted string


    //1- 
    let num = document.getElementById("textInput").value;
    let arr = num.split("");
    
    //2-
    let index=0;
    while(index<arr.length){
        //we'll delete any zero located on the left side
        if(arr[index]==0){
            arr.splice(index,1);
            //we told it to delete one item starting from the item in the index 'index'
        }
        else{
            //since this item is a number greater than 0, lets stop checking
            break;
        }
    }
    //
    
    //3- How to start converting?
    //a- create propertiesArr and fill it will digits from 'arr' preceeded by an underscore '_'
    //b- create 'romanArr', and fill it with values of 'number' object properties corresponding to each item in 'arr'
    
    //3-a-
    let propertiesArr = arr.map(item => "_"+item);
    

    let str="";
    document.getElementById("result").innerText = arr;
    return num;
}

//convertToRoman(36);