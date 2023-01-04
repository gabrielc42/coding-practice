fn main() {
    println!("Hello, worldz!");

    non_repeating("abcab"); // should return 'c'
    non_repeating("abab"); // should return None
    non_repeating("aabbbc"); // should return 'c'
    non_repeating("aabbdbc"); // should return 'd'
}

fn non_repeating(given_string: &mut str) -> char {
    let char_count = vec![];
    for c in given_string.chars() {
        if (char_count.contains(c)) {
            char_count[c] += 1;
        } else {
            char_count[c] = 1;
        }
    }
    for c in given_string.chars() {
        if char_count[c] == 1 {
            return c;
        }
    }
}
