var recipes = {};

function updateObjectWithKeyAndValue(object, key, value)  {
  object[key] = value;
  Object.assign({}, object, key, value: 2);
  return object;
}
