var priceOfProduct = [39,12,33,10];
var i;

for(i=0;i<priceOfProduct.length;i++){
    if(priceOfProduct[i]>priceOfProduct[i+1]&& priceOfProduct[i]>priceOfProduct[i+2]){
console.log("Sorting is High to Low");
 }
    else{
        console.log("Sorting is not High to Low");
    }
}


