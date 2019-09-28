function sortNumber(str){
  let a = str.split('').map(b=> parseInt(b))
  .filter(c=> c>=0)
  if(a.length === 0) return 'No number found in parameter!';
  return a.sort().join('')
}

sortNumber("48172a94")
sortNumber("abc")
