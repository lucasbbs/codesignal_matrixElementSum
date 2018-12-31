// function matrixElementsSum(matrix) {
//     let totalPrice=0;
//     for (j=0; j<=matrix[0].length-1;j++){
//         for (i = 0; i<=matrix.length-1;i++){          
//             if(matrix[i][j]!=0){
//                 totalPrice+= matrix[i][j];
//             } else{
//                 break;
//             }
//         }
//     }
//     return totalPrice;
// }
function matrixElementsSum(matrix) {

let price = 0;
    let bannedIndex = [];
    for(i = 0; i < matrix.length; i++){
        for( j = 0; j < matrix[i].length; j++){
            console.log('i: '+i+' j: '+j+' bannedIndex: '+bannedIndex+'  matrix[i][j]: '+ matrix[i][j]);
            if(matrix[i][j] ===0){
                 bannedIndex.push(j);
                console.log('is banned');
                console.log(bannedIndex);
                
            }else if(bannedIndex.indexOf(j) === -1){
                     price += matrix[i][j];
                     }
           
        }
    }
    return price;
}
