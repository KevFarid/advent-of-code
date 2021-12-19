let input: number[] = require('fs').readFileSync('src/day1/input', 'utf8').split('\n');
input = input.map(Number);

function part1() {
  let inclement = 0;
  input.reduce((pre: number, cur: number) => {
    if (cur > pre) {
      inclement++;
    }
    return cur;
  })
  console.log('\tpart 1:', inclement);
}

function part2() {
  let inclement = 0;
  for(let i =3; i < input.length; i++) {
    if(input[i] > input[i - 3]){
      inclement++;
    }
  }

  console.log('\tpart 2:', inclement);
}

export default function day1() {
  console.log('RESULTS DAY 1')
  part1();
  part2();
}