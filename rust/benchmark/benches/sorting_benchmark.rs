use benchmark::sort_arr;
use criterion::{black_box, criterion_group, criterion_main, Criterion};

fn sort_arr_benchmark(c: &mut Criterion) {
    let mut arr = black_box([9, 5, 1, -3, 5, 6, 0]);

    c.bench_function("sorting algorithim", |b| b.iter(|| sort_arr(&mut arr)));
}

criterion_group!(benches, sort_arr_benchmark);
criterion_main!(benches);
