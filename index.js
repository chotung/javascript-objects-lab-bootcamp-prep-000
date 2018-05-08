var recipes = {};

function updateObjectWithKeyAndValue(object, key, value)  {
  object[key] = value;
  Object.assign({}, object, {key:'prop2'}, {value: 2});
  return object;
}
