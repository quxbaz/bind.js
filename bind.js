/*
  bind.js
*/

// function has(obj, key) {
//   return obj.hasOwnProperty(key);
// }

// function each(obj, fn, context) {
//   if (Array.isArray(obj)) {
//     for (var i=0; i < obj.length; i++)
//       fn.call(context, obj, i);
//   }
//   else {
//     for (var k in obj) {
//       if (obj.hasOwnProperty(k))
//         fn.call(context, obj[k], k);
//     }
//   }
// }

// function extend(a, b) {
//   if (typeof b != 'object')
//     return a;
//   each(b, function(val, key) {
//     a[key] = val;
//   });
//   return a;
// }

// function values(obj) {
//   var vals = [];
//   for (var k in obj) {
//     if (has(obj, k))
//       vals.push(obj[k]);
//   }
//   return vals;
// }

// function find(list, pred) {
//   for (var i=0; i < list.length; i++) {
//     if (pred(list[i]))
//       return list[i];
//   }
//   return undefined;
// }

module.exports = {
};
