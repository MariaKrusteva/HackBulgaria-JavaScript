"use strict";

function Panda(name, sex) {
  if(!(this instanceof Panda)){
    return new Panda(name,sex);
  }

  if(["male", "female"].indexOf(sex) === -1){
    sex = "female";
  }

  this.name = name;
  this.sex = sex;
  this.weight = 20;
}

Panda.prototype.toString = function() {
  return this.name + " is a " + this.sex + " panda which weights " + this.weight + " kg";
};

Panda.prototype.isMale = function() {
  return this.sex === "male";
}

Panda.prototype.isFemale = function() {
  return this.sex === "female";
}

Panda.prototype.eat = function(bamboo) {
  this.weight += bamboo/2;
  if(this.weight >= 80 && this.name.slice(0,4) != "Lazy"){
    this.name = "Lazy Panda " + this.name;
  }
}

Panda.prototype.mate = function(anotherPanda) {
  var
    chance = parseInt(Math.random() * 10),
    name = null,
    sex = null,
    motherName = null,
    fatherName = null;

  if((this.sex === "male" && anotherPanda.sex != "female") ||
     (this.sex === "female" && anotherPanda.sex != "male")){
    throw {
      name: "CannotMatePandas",
      message: "cannotMatePandas"
    }
  }

  if(this.sex === "male"){
    fatherName = this.name;
    motherName = anotherPanda.name;
  }
  else{
    fatherName = anotherPanda.name;
    motherName = this.name;
  }

  if(chance < 6){
    sex = "male";
    name = fatherName + " " + motherName;
  }
  else{
    sex = "female";
    name = motherName + " " + fatherName;
  }

  return new Panda(name, sex);
}

/*babyGender = ["female", "male"][getRandomInt(0, 2)];
babyName = {
  "female": motherName + " " + fatherName,
  "male": fatherName + " " + motherName
}[babyGender];*/
