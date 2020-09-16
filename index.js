var katzDeli = []
var name

  function takeANumber(katzDeli, name) {
   katzDeli.push(name)
   return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
  }

  function nowServing(katzDeli) {
    if (katzDeli.length > 0) {
      return `Currently serving ${katzDeli.shift()}.`
    } else {
      return `There is nobody waiting to be served!`
    }
  }

function currentLine(katzDeli) {
  if (katzDeli.length > 0) {
      return `The line is currently: ${katzDeli.indexOf(0)}. ${katzDeli[0]}, `
        }
      }
  } else {
    return 'The line is currently empty.'
  }
}
