//Brute-Force Approach

const solution2 = function (nums = [3, 0, 1]) {
    let sortedNums = nums.sort();
    let range = nums.length;
    let missing;
    for (let i = 0; i <= range; i++) {
        if (i != sortedNums[i]) {
            missing = i;
            return missing;
        }
    }
};
