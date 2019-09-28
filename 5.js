function countChar(str,key){
  let a = str.split('').filter(b=> b===key)
  let len = a.length
  if(len ===0) return 'Not found!';
  return len;
}
countChar('arkademy', 'a')