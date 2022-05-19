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

Person1 = new Person("Rahul","P",23,['python','c#'],"01/12/1998",{city:"Bangalore",pincode:560032},"false","AnalystA4");
Person2 = new Person("Peter","Paul",20,[".C","C++"],"02/12/1997",{city:"Bangalore",pincode:570766},"true","AnalystA10");

print=function()       //printing the object using Global print method.
{
    console.log(Person1);
    console.log(Person2);
}();//function call