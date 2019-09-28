function thirdHighest(arr){
  if(!Array.isArray(arr)) return 'Parameter should be an array!';

  if(arr.length<3) return 'Minimal array length is 3';

  let a = arr.filter(b => typeof b === 'number').sort((x,y)=> x-y)
  
  return a[a.length-3]
}