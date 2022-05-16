//Brute-Force Approach

const solution1 = function (nums = [2, 7, 11, 15], target = 9) {
    let arr = new Map();
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i];
        let num2 = target - num1;
        if (arr.has(num2)) {
            return [i, arr.get(num2)]
        }
        arr.set(num1, i)
    }
};