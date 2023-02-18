use std::rc::Rc;

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

    // this example seems deprecated?
    // let mut rc_vec = Rc::new(Vec::new());
    // rc_vec.push(1);
    // rc_vec.push(2);

    // let vec_ptr = &vec[0];

    // rc_vec.clear();

    // println!("{}", unsafe { *vec_ptr }); // will not cause segmentation fault

    // let life_vec = vec![1, 2, 3];
    // let vec_ptr: &'static i32 = &life_vec[0];

    // println!("{}", unsafe { *vec_ptr }); // safe
}
