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

function katzDeliList(katzDeli) {
    for (let i = 0; i < katzDeli.length; i++) {
      return `${katzDeli.indexOf(i+1)}.  ${katzDeli[i]}, `
    }
  }

function currentLine(katzDeli) {
  let katzDeliList = katzDeliList()
  if (katzDeli.length > 0) {
      return `The line is currently: ${katzDeliList}`
  } else {
    return 'The line is currently empty.'
  }
}
