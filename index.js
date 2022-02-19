function calculator(str = '') {
  const roman = {
    I: 1,
    II: 2,
    III: 3,
    IV: 4,
    V: 5,
    VI: 6,
    VII: 7,
    VIII: 8,
    IX: 9,
    X: 10,
  }

  const arr = str.trim().split(' ')
  if (isNaN(arr[0]) !== isNaN(arr[2])) throw new Error('Error')
  if (arr.length !== 3) throw new Error('Error')
  if (isNaN(arr[0])) {
    ;[arr[0], arr[2]].forEach(item => {
      const check = item in roman
      if (!check) throw new Error('Error')
    })
  }
  const a = arr[0] in roman ? roman[arr[0]] : parseInt(arr[0], 10)
  const b = arr[2] in roman ? roman[arr[2]] : parseInt(arr[2], 10)
  const operator = arr[1]

  if (a < 1 || a > 10 || b < 1 || b > 10) throw new Error('Error')

  const checkOperators = ['+', '-', '*', '/'].includes(operator)
  if (!checkOperators) throw new Error('Error')

  switch (operator) {
    case '+':
      const plus = a + b
      return showRoman(plus)
    case '-':
      const minus = a - b
      return showRoman(minus)

    case '*':
      const multiply = a * b
      return showRoman(multiply)

    case '/':
      const divide = a / b
      return showRoman(divide)
  }

  function showRoman(res) {
    res = parseInt(res)
    if (res <= 0) {
      return roman[arr[0]] ? '' : res.toString()
    }
    return roman[arr[0]] ? convert(res).toString() : res.toString()
  }

  function convert(num) {
    const c = [
      ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
      ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
      ['', 'C'],
    ]

    return c[2][Math.floor((num / 100) % 10)] + c[1][Math.floor((num / 10) % 10)] + c[0][Math.floor(num % 10)]
  }
}

console.log(calculator('X + IX'))
