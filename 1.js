function bio(a,b,c,d,e,f,g,h){
  let user = {
    name: a,
    age: b,
    address: c,
    hobbies: d,
    is_maried: e,
    list_school: f,
    skill: g,
    interest_in_coding: h
  }
  return JSON.stringify(user)

}

bio("Fahmi Arief", 25, "Majalengka", ["Problem Solved","sleep", "movies"], false, [{name: "UPI", year_in: 2012, year_out: 2019, major: "Computer Science Education"}], [{skill_name: "Javascript", level: 'beginner'}, {skill_name: 'SQL', level: 'beginner'}, {skill_name: 'Node JS', level: 'beginner'}], true)