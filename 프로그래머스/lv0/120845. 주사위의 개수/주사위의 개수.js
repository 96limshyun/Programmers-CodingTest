function solution(box, n) {
    let w = parseInt(box[0] / n);
    let d = parseInt(box[1] / n);
    let h = parseInt(box[2] / n);
    return w * d * h;
}