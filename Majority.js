// Boyer-Moore algorithm for O(1) space
function majorityElement(nums) {
    let result = 0;
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            result = num;
        }
        count += num === result ? 1 : -1;
    }

    return result;
}

// O(n) time and space solution
function majorityElement(nums) {
    const count = {};
    let result = 0;
    let maxCount = 0;

    for (const num of nums) {
        count[num] = 1 + (count[num] || 0);
        if (count[num] > maxCount) {
            result = num;
        }
        maxCount = Math.max(maxCount, count[num]);
    }

    return result;
}
