fn main() {
    println!("Hello, world!");

    let x = 5;
    let x_ptr: *const i32 = &x;

    if x_ptr.is_null() {
        println!("The pointer is null :( ");
    } else {
        println!("The value of x is {}", unsafe { *x_ptr });
    }

    let mut vec = Vec::new();
    vec.push(1);
    vec.push(2);

    let vec_ptr = &vec[0];

    vec.clear();

    println!("{}", unsafe { *vec_ptr }); // this causes a segmentation fault
}
