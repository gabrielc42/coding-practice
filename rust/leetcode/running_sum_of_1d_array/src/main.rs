// no.1480

impl Solution {
    pub fn running_sum(nums: Vec<i32>) -> Vec<i32> {
        let mut sum = 0;
        nums.iter()
            .map(|i| {
                sum += i;
                sum
            })
            .collect()
    }
}

fn main() {
    let nums: Vec<i32> = [1, 2, 3, 4].to_vec(); // [1,2,3,4]
    println!("{}", running_sum(nums));

    let nums: Vec<i32> = [1, 1, 1, 1, 1].to_vec(); // [1,2,3,4,5]
    println!("{}", running_sum(nums));

    let nums: Vec<i32> = [3, 1, 2, 10, 1].to_vec(); // [3,4,6,16,17]
    println!("{}", running_sum(nums));
}
