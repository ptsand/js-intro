 /* 1) Create an object with four different properties, with values of your own choice (ex: name, birthday, hobby, email).
Use a for-in loop (as sketched below) to demonstrate that we can iterate over the properties in an object.
for(prop in myObj){
  console.log(prop,myObj[prop])
}
Use the delete keyword to demonstrate we can delete existing properties from an object
(delete a property, and iterate over the properties again) 
Add a new property to your object to demonstrate that we can add new properties to existing objects
*/

let myProfile = {name: 'Bo', hobby: '', email: ''}
myProfile.newAttribute = 'newValue'
myProfile.hobby = 'to play'
myProfile.email = 'test@mail.dk'

for(prop in myProfile){
    console.log(prop+': ',myProfile[prop])
}