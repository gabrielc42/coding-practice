#[derive(Debug)]
fn main() {
    let nums: Vec<i32> = [9, 6, 4, 2, 3, 5, 7, 0, 1].to_vec();
    
    println!("{}", missing_number(nums)); //8
    assert_eq!
}

pub fn missing_number(nums: Vec<i32>) -> i32 {
    let mut s1 = nums.len();
    let mut s2 = 0;
    for (i, v) in nums.iter().enumerate() {
        s1 += i;
        s2 += v;
    }
    s1 as i32 - s2
}
