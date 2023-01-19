package main

import "fmt"

func main() {
	nums := []int{2, 3, -2, 4}
	fmt.Printf("%d", maxProduct(nums)) // should be 6
}

func maxProduct(nums []int) int {
	res := nums[0]
	max := res
	min := res

	for num := range nums {
		if num > 0 {
			max = Max(max, max*num)
			min = Min(min, min*num)
		} else {
			tmp := max
			max = Max(tmp, min*num)
			min = Min(num, tmp*num)
		}
		res = Max(res, max)
	}
	return res
}

// Max returns the larger of x or y.
func Max(x, y int) int {
	if x < y {
		return y
	}
	return x
}

// Min returns the smaller of x or y.
func Min(x, y int) int {
	if x > y {
		return y
	}
	return x
}

// impl Solution {
//     pub fn max_product(nums: Vec<i32>) -> i32 {
//         let mut res = nums[0];
//         let mut max = res;
//         let mut min = res;

//         for &num in nums[1..].into_iter() {
//             if num > 0 {
//                 max = num.max(max * num);
//                 min = num.min(min * num);
//             } else {
//                 let tmp = max;
//                 max = num.max(min * num);
//                 min = num.min(tmp * num);
//             }
//             res = res.max(max);
//         }
//         res
//     }
// }
