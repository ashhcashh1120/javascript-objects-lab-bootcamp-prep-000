
var recipes ={}

// update the object with key an value & return orginal key value
//pairs and then the new key value.
function  updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object ,{[key]: value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key,
 value){
   object[key] = value
   return object
 }
