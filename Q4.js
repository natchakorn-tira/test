
console.log(sellAndBuyStock([1,2,3,4,5]));

function sellAndBuyStock(input_price){
    let range_date = []
    let max = 0
    for (let index = 0 ; index < input_price.length-1 ; index ++ ){
        for(let index_two = index + 1 ; index_two < input_price.length ; index_two++ ){
            let sold = input_price[index_two] - input_price[index]
            let list_max = checkNext(input_price,index_two+1)
            let total_sold = parseInt(sold) + parseInt(list_max.sold_price)
            //for Explanation range_date[0] is first to buy and range_date[1] is second to buy but range_date[1]
            if(total_sold > max){
                max = total_sold;
                range_date = [
                    { 
                        buy_index: index,
                        sold_index:index_two,
                        sold_price:sold,
                    },
                    { 
                        buy_index: list_max.buy_index,
                        sold_index:list_max.sold_index,
                        sold_price:list_max.sold_price,
                    },
                ]
            }                                                                                                                                                                                                                                                                                  
        }
    } 
    console.log(range_date);
    return max
}

function checkNext(input_price,get_index){
    let max = {
        buy_index: 0,
        sold_index:0,
        sold_price:0,
    }
    let count = 0
    for (let index = get_index + 1 ; index <= input_price.length ; index ++){
        let sold = parseInt(input_price[index]) - parseInt(input_price[get_index])
        if(get_index + 1 <= input_price.length && (sold >= max.sold_price || count ===0 )){
            max = {
                buy_index: get_index,
                sold_index: index,
                sold_price: sold,
            }
        }       
        count++                                                                                                                                                                                                                     
    }
    return max
}