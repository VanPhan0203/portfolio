// This file has formatting issues that should be caught by the pre-commit hook
import { ref } from 'vue';

const testVar = ref('test');

export function testFunction() {
  console.log('This has wrong indentation');
  return testVar.value;
}
