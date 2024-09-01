function solution(sides) {
  let answer = [];
  const [a, b] = sides.sort((a, b) => a - b);
  for (i = b + 1 - a; i <= b; i++) {
    answer.push(i);
  }
  for (i = b + 1; i < a + b; i++) {
    answer.push(i);
  }
  answer = [...new Set(answer)];

  return answer.length
}