fn main() {
    println!("Hello, world!");

    let array1: &mut [i8] = &mut [1, 2, 3, 4, 5, 6, 7];
    let array2a: &mut [i8] = &mut [4, 5, 6, 7, 8, 1, 2, 3];
    // isRotation(array1, array2a) should return false.
    println!("{}", is_rotation(array1, array2a));

    let array2b = &mut [4, 5, 6, 7, 1, 2, 3];
    // isRotation(array1, array2b) should return true.
    println!("{}", is_rotation(array1, array2b));

    let array2c = &mut [4, 5, 6, 9, 1, 2, 3];
    // isRotation(array1, array2c) should return false.
    println!("{}", is_rotation(array1, array2c));

    let array2d = &mut [4, 6, 5, 7, 1, 2, 3];
    // isRotation(array1, array2d) should return false.
    println!("{}", is_rotation(array1, array2d));

    let array2e = &mut [4, 5, 6, 7, 0, 2, 3];
    // isRotation(array1, array2e) should return false.
    println!("{}", is_rotation(array1, array2e));

    let array2f = &mut [1, 2, 3, 4, 5, 6, 7];
    println!("{}", is_rotation(array1, array2f));
    // true
}

fn is_rotation(list1: &mut [i8], list2: &mut [i8]) -> bool {
    if list1.len() != list2.len() {
        return false;
    }
    let key = list1[0];
    let mut key_loc: i8 = -1;
    for i in 0..list2.len() {
        if list2[i] == key {
            key_loc = i as i8;
            break;
        }
    }
    if key_loc == -1 {
        return false;
    }
    for i in 0..list1.len() {
        let j: usize = (key_loc as usize + i as usize) % list1.len() as usize;
        if list1[i] != list2[j] {
            return false;
        }
    }
    return true;
}
