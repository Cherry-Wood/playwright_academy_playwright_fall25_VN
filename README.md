# playwright_academy_playwright_fall25_VN

fifka_playwright_academy

playwright.yml run: npx playwright test first.spec.ts

// "resolveJsonModule": true

// * Ternární operátor:
const isValid: boolean = true;
let testTernary;

testTernary = isValid ? "True ternání operátor" : "False ternární operátor";

// ? Stejný zápis jako ternární operátor:
if (isValid) {
  testTernary = "True ternání operátor";
} else {
  testTernary = "False ternární operátor";
}

console.log(testTernary);
