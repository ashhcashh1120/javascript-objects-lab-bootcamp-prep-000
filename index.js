
var recipes ={

}
function updateObjectWithKeyAndValue(object, key, value){
  const newRecipes = Object.assign({}, object, key, value )
}
// update the object with key an value & return orginal key value
//pairs and then the new key value.
function  updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object ,{[key]: value})
}
