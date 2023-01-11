use array2d::{Array2D, Error};

fn main() {
    println!("Hello, world!");

    let mut bombs1 = vec![vec![0, 2], vec![2, 0]];
    let from_bombs1 = Array2D::from_rows(&bombs1);

    let mut bombs2 = vec![vec![0, 0], vec![0, 1], vec![1, 2]];
    let from_bombs2 = Array2D::from_rows(&bombs2);

    let mut bombs3 = vec![vec![1, 1], vec![1, 2], vec![2, 2], vec![4, 3]];
    let from_bombs3 = Array2D::from_rows(&bombs3);

    println!("{:?}", mineSweeper(from_bombs1, 5, 5));
    // Err(println!("incorrect"));

    //int[][] bombs1 = {{0, 2}, {2, 0}};
    //int[][] bombs2 = {{0, 0}, {0, 1}, {1, 2}};
    //int[][] bombs3 = {{1, 1}, {1, 2}, {2, 2}, {4, 3}};
}

fn mineSweeper(a: Vec<Vec<i32>>, b: i32, c: i32) -> Result<Array2D<i32>, array2d::Error> {
    let mut f = vec![vec![b], vec![c]];
    let mut field = Array2D::from_rows(&f)?;
    for bomb in a.into_iter() {
        let rowIdx = bomb[0];
        let colIdx = bomb[1];
        field[(rowIdx as usize, colIdx as usize)] = -1;
        let mut d = rowIdx - 1;
        let mut e = colIdx - 1;
        let rowIdx2 = rowIdx + 2;
        let colIdx2 = colIdx + 2;
        for i in d..rowIdx2 {
            for j in e..colIdx2 {
                if 0 <= i && i < b && 0 <= j && j < c && field[(i as usize, j as usize)] != -1 {
                    field[(i as usize, j as usize)] += 1;
                }
            }
        }
    }
    return Ok(field);
}
