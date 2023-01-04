use std::collections::HashMap;

fn main() {
    println!("Hello, worldz!");

    let abcab: &str = "abcab";
    let abab: &str = "abab";
    let aabbbc: &str = "aabbbc";
    let aabbdbc: &str = "aabbdbc";

    println!("{}", non_repeating(abcab)); // should return 'c'
    println!("{}", non_repeating(abab)); // should return " "
    println!("{}", non_repeating(aabbbc)); // should return 'c'
    println!("{}", non_repeating(aabbdbc)); // should return 'd'
}

fn non_repeating(s: &str) -> char {
    let mut m: HashMap<char, i32> = HashMap::new();
    for c in s.chars() {
        let count = m.entry(c).or_insert(0);
        *count += 1;
    }
    for c in s.chars() {
        if m[&c] == 1 {
            return c;
        }
    }
    return ' ';
}
