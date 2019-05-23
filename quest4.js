var priceOfProduct = [70,69,87,1];
var i,j;

// for(i=0;i<priceOfProduct.length;i++){

//     if(priceOfProduct[i]>priceOfProduct[i+1]){

// for(j=1;j<priceOfProduct.length-1;j++){

//     if(priceOfProduct[j]>priceOfProduct[j+1]){

// console.log("Sorting is High to Low");
//     }
    
//     else{
//         console.log("Sorting is not High to Low2");
//         break;
//     }
// }
//  }

//     else{
//        console.log("Sorting is not High to Low1");
//         break;
//     }
// }

for(i=0;i<priceOfProduct.length;i++){
    for(j=i+1;j<priceOfProduct.length;j++){
        if(priceOfProduct[i]>priceOfProduct[j]){
            console.log("Sorting is high to low");
        }
            else{
                console.log("Sorting is not high to low");
                break;
            }
        }
        break;
    }
