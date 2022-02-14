
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

function removeDuplicates(input_array) {
    if(input_array.length === 0){
        return 0
    }else{
        //assume item i <= item j
        let index = 0
        for (let next_index = 1 ; next_index < input_array.length ; next_index++) {
            if (input_array[index] !== input_array[next_index]) {
                index += 1
                input_array[index] = input_array[next_index]
            }
        }
        for (let next_duplicate = index+1 ; next_duplicate < input_array.length ; next_duplicate++){
            input_array[next_duplicate] = '_'
        }
        console.log('nums = [' + input_array +']');
        return index+1;
    }
}