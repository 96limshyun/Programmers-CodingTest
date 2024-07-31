const solution = (s) => {
    return s.split(" ").map((cur) => cur.split("").reduce((acc, text, i) => i % 2 === 0 ? acc + text.toUpperCase() : acc + text.toLowerCase(), "")).join(" ");
}