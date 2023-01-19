fn main() {
    let nums: Vec<i32> = [2, 3, -2, 4].to_vec();
    println!("{}", max_product(nums)); //6
}

pub fn max_product(nums: Vec<i32>) -> i32 {
    let mut res = nums[0];
    let mut max = res;
    let mut min = res;

    for &num in nums[1..].into_iter() {
        if num > 0 {
            max = num.max(max * num);
            min = num.min(min * num);
        } else {
            let tmp = max;
            max = num.max(min * num);
            min = num.min(tmp * num);
        }
        res = res.max(max);
    }
    res
}
