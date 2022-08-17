/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 * 检查是否是原型对象 也就是 prototype 
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  console.log(value,proto);
  return value === proto;
}
console.log(
isPrototype(Object.prototype),
// isPrototype(Array),
// isPrototype({}),
// isPrototype(Object.create(null)),
// {}.constructor,
((typeof Object && Object.prototype) || Object.prototype) === Object.prototype
);

module.exports = isPrototype;
