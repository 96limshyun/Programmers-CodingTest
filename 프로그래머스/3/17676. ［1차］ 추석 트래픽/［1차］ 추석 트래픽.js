function solution(lines) {
  var answer = 0;
  let times =[];

  lines.map(str => str.split(' ')).forEach(e =>{
    const hour = Number(e[1].split(':')[0]) * 3600 * 1000; 
    const minute = Number(e[1].split(':')[1]) * 60 * 1000;
    const second = Number(e[1].split(':')[2]) * 1000;     

    let end = hour + minute + second; 
    let pass = Number(e[2].slice(0,-1)) * 1000; 
    let start = end - pass +1;

    times.push(['START', start]);
    times.push(['END', end+1000]);

  });

  times.sort((a,b) => {
    return a[1] - b[1] < 0 ? -1 : 1;
  })
  
  let count = 0;
  times.forEach(e => {
    e[0] === 'START' ? count++ : (
      answer = answer > count ? answer : count,
      count--
    )
  })

  return answer;
}