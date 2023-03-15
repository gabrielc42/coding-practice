fn main() {
    println!("Hello, world!");
}

use std::cell::RefCell;
use std::rc::Rc;
impl Solution {
    pub fn is_complete_tree(root: Option<Rc<RefCell<TreeNode>>>) -> bool {}
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn is_complete_tree_test(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
        assert_eq!(root = [1, 2, 3, 4, 5, 6]);
    }
}
