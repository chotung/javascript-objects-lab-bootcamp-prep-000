var recipes = {};

function updateObjectWithKeyAndValue(object, key, value)  {
  object[key] = value;
  Object.assign({key:2});
  return object;
}
