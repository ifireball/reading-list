import { describe, it, expect } from 'vitest';
import { sanitizeUrl } from './security.js';

describe('sanitizeUrl', () => {
    it('allows safe protocols', () => {
        expect(sanitizeUrl('https://example.com')).toBe('https://example.com');
        expect(sanitizeUrl('http://example.com')).toBe('http://example.com');
        expect(sanitizeUrl('mailto:user@example.com')).toBe('mailto:user@example.com');
        expect(sanitizeUrl('tel:+123456789')).toBe('tel:+123456789');
    });

    it('allows relative paths, anchors, and queries', () => {
        expect(sanitizeUrl('/local/path')).toBe('/local/path');
        expect(sanitizeUrl('./local/path')).toBe('./local/path');
        expect(sanitizeUrl('../local/path')).toBe('../local/path');
        expect(sanitizeUrl('#anchor')).toBe('#anchor');
        expect(sanitizeUrl('?query=1')).toBe('?query=1');
    });

    it('blocks dangerous schemes', () => {
        expect(sanitizeUrl('javascript:alert(1)')).toBe('about:blank');
        expect(sanitizeUrl('JAVASCRIPT:alert(1)')).toBe('about:blank');
        expect(sanitizeUrl('data:text/html,<html>')).toBe('about:blank');
        expect(sanitizeUrl('vbscript:msgbox("hello")')).toBe('about:blank');
    });

    it('handles whitespace', () => {
        expect(sanitizeUrl('   https://example.com   ')).toBe('https://example.com');
    });

    it('handles empty or null input', () => {
        expect(sanitizeUrl('')).toBe('');
        expect(sanitizeUrl(null)).toBe('');
        expect(sanitizeUrl(undefined)).toBe('');
    });

    it('handles non-string input gracefully', () => {
        expect(sanitizeUrl(123)).toBe('about:blank');
        expect(sanitizeUrl(true)).toBe('about:blank');
    });
});
