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
    //4- do Array.join("") the converted array, and return the resulted string


    //1- 
    let num = document.getElementById("textInput").value;
    let arr = num.split("");

    //2-
    let index = 0;
    while (index < arr.length) {
        //we'll delete any zero located on the left side
        if (arr[index] == 0) {
            arr.splice(index, 1);
            //we told it to delete one item starting from the item in the index 'index'
        }
        else {
            //since this item is a number greater than 0, lets stop checking
            break;
        }
    }
    //

    //3- How to start converting?
    //a- create 'propertiesMidArr' and fill it will digits from 'arr' preceeded by an underscore '_' and accompagnied with its position in the number entered by user
    //b- create 'propertiesArr' from 'propertiesMidArr', they are the same but 'propertiesArr' contains zeros on the right of each item, based on the 'position value' it is accompanied with
    //c- create 'finalPropertiesArr' from 'propertiesArr', 'propertiesArr' is an array of arrays, but 'finalPropertiesArr' will be an array of all elements of 'propertiesArr'
    //d- create 'rmanArr' from 'finalPropertiesArr' and 'number' object





    //3-a-
    //125 --> [["_1", 3], ["_1", "_1", 2], ["_5", 1]]
    //the args of map() below are: 'item' which is an element of 'arr', and 'index' which is the index of 'item' in 'arr'
    let propertiesMidArr = arr.map((item, index) => numberToProperties(item, arr.length-index));    
    console.log("propertiesMidArr:");
    console.log(propertiesMidArr);



    //3-b-
    //propertiesMidArr --> propertiesArr
    //[["_1", 3], ["_1", "_1", 2], ["_5", 1]] --> [["_100"], ["_10", "_10"], ["_5"]]
    let propertiesArr = [];
    for(let i=0; i<propertiesMidArr.length; i++){
        let numberOfZeros = propertiesMidArr[i][propertiesMidArr[i].length-1];
        let zeros = "";
        for(let l=1; l<numberOfZeros; l++){
            zeros = zeros+"0";
        }
        let props=[];
        for(let j=0; j<propertiesMidArr[i].length; j++){
            if(typeof propertiesMidArr[i][j] == "number"){
                //so this item is last item that contain the position of the digit, don't do anything
            }
            else{
                //lets add the zeors to the right of the prop and push it
                props.push(propertiesMidArr[i][j] + zeros);
            }            
        }
        propertiesArr.push(props);
    }
    console.log("propertiesArr:");
    console.log(propertiesArr);


    
}

function numberToProperties(digit, digitPositon) {
    //this function will convert item (which is a number in string format) into array of 'number' object properties a-like
    //example
    //1 --> [_1]
    //2 --> [_1, _1]
    //3 --> [_1, _1, _1]
    //4 --> [_1, _5]
    //5 --> [_5]
    //6 --> [_5, _1]
    //7 --> [_5, _1, _1]
    //8 --> [_5, _1, _1, _1]
    //9 --> [_1, _10]
    //0 -> ignored
    let n = parseInt(digit);
    switch (n) {
        case 0:
            return [];
            break;
        case 1:
            return ["_1", digitPositon];
            break;
        case 2:
            return ["_1", "_1", digitPositon];
            break;
        case 3:
            return ["_1", "_1", "_1", digitPositon];
            break;
        case 4:
            return ["_1", "_5", digitPositon];
            break;
        case 5:
            return ["_5", digitPositon];
            break;
        case 6:
            return ["_5", "_1", digitPositon];
            break;
        case 7:
            return ["_5", "_1", "_1", digitPositon];
            break;
        case 8:
            return ["_5", "_1", "_1", "_1", digitPositon];
            break;
        case 9:
            return ["_1", "_10", digitPositon];
            break;
        default:
            break;
    }
}
//convertToRoman(36);