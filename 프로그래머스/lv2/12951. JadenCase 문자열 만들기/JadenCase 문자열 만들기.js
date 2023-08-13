function solution(s) {
    return s.toLowerCase().split(" ").map((cur) => cur.charAt(0).toUpperCase()+cur.substring(1)).join(' ');
}