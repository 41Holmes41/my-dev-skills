const skills = [
    {skill: 'CSS'},
    {skill: 'C++'},
    {skill: 'Water Boiling'},
    {skill: 'Jetpacks'},
  ];
  
  module.exports = {
    getOne,
    getAll,
    create,
    deleteOne,
    update,
  };
  
  function getOne(id){
    return skills[id];
  }
  
  function getAll(){
    return skills;
  }
  
  function create(skill){
    skills.push(skill);
  }
  
  function deleteOne(id){
    skills.splice(id,1);
  }
  
  function update(id, skill) {
  skills[id] = skill;
  }