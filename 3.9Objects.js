function Person(firstName,lastName,age,skills,dateOfbirth,address,married,profession)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.skills = skills;
    this.dateOfbirth = dateOfbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;
}
Akshay = new Person("Akshay","Kumar",99,['java','c#'],"01/01/1969",{city:"Bangalore",pincode:67856},"false","AnalystA4");
Twinkle = new Person("Twinkle",55,["html","css"],"05/06/1975","false","JrAnalyst");


var Twinkle = Object.create(Akshay); //inheriting the common properties/storing Akshay object in Twinkle
print = function()
{
    console.log(Akshay);
    console.log(Twinkle.lastName);
    console.log(Twinkle.address);
    console.log(Aarav.lastName);
    console.log(Aarav.skills);
    console.log(Aarav.address);
    console.log(Aarav.firstName);
}();