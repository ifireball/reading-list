import { sanitizeUrl } from './security.js';

const testCases = [
    { input: 'https://example.com', expected: 'https://example.com', desc: 'Secure HTTP' },
    { input: 'http://example.com', expected: 'http://example.com', desc: 'Standard HTTP' },
    { input: 'mailto:user@example.com', expected: 'mailto:user@example.com', desc: 'Mailto scheme' },
    { input: 'tel:+123456789', expected: 'tel:+123456789', desc: 'Tel scheme' },
    { input: '/local/path', expected: '/local/path', desc: 'Absolute local path' },
    { input: './local/path', expected: './local/path', desc: 'Relative local path' },
    { input: '../local/path', expected: '../local/path', desc: 'Parent local path' },
    { input: 'javascript:alert(1)', expected: 'about:blank', desc: 'Javascript scheme' },
    { input: 'JAVASCRIPT:alert(1)', expected: 'about:blank', desc: 'Case-insensitive Javascript scheme' },
    { input: ' data:text/html,<html>', expected: 'about:blank', desc: 'Data scheme' },
    { input: 'vbscript:msgbox("hello")', expected: 'about:blank', desc: 'VBScript scheme' },
    { input: '   https://example.com   ', expected: 'https://example.com', desc: 'Trimmed whitespace' },
    { input: '', expected: '', desc: 'Empty string' },
    { input: null, expected: '', desc: 'Null input' },
];

let failed = 0;
testCases.forEach(({ input, expected, desc }) => {
    const result = sanitizeUrl(input);
    if (result === expected) {
        console.log(`✅ PASS: ${desc}`);
    } else {
        console.log(`❌ FAIL: ${desc} - Expected "${expected}", got "${result}"`);
        failed++;
    }
});

if (failed === 0) {
    console.log('\nAll tests passed!');
    process.exit(0);
} else {
    console.log(`\n${failed} tests failed.`);
    process.exit(1);
}
