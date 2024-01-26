var singleNumber = function(nums) {
    let result = 0; // xor with zero. zero does not change xor result.
    
    for (const number of nums) {
        result = number ^ result; // xor with number
    }
    
    return result;
};