function removeElement(nums, val) {
  let count = 0;
  for (let i in nums) {
    if (nums[i] !== val) {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
}
