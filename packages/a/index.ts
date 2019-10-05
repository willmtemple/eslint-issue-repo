import { foo } from 'b';

function lintError() : String {
  return "A string:" + foo();
}

console.log(lintError());
