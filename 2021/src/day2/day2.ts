let steps: string[] = require('fs').readFileSync('src/day2/input', 'utf8').split('\n')

function part1() {
  let horizontal = 0;
  let depth = 0;

  steps.forEach((value: string) => {
    const splitValue = value.split(' ')
    if (splitValue[0] === 'down') return depth += Number(splitValue[1]);
    if (splitValue[0] === 'up') return depth -= Number(splitValue[1]);
    if (splitValue[0] == 'forward') return horizontal += Number(splitValue[1]);
  })

  console.log('\tpart 1:', horizontal * depth)
}

function part2() {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  steps.forEach((value: string, index: number) => {
    const splitValue = value.split(' ')
    if (splitValue[0] === 'down') return aim += Number(splitValue[1]);
    if (splitValue[0] === 'up') return aim -= Number(splitValue[1]);
    if (splitValue[0] == 'forward') {
      depth += Number(splitValue[1]) * aim
      return horizontal += Number(splitValue[1])
    };
  })

  console.log('\tpart 2:', horizontal * depth)
}

export default function day2() {
  console.log('RESULTS DAY 2')
  part1();
  part2();
}