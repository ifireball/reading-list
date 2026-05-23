/**
 * Sanitizes a URL to prevent XSS attacks.
 * It only allows safe protocols (http, https, mailto, tel) or relative paths.
 *
 * @param {any} url - The URL to sanitize.
 * @returns {string} - The sanitized URL or 'about:blank' if unsafe.
 */
export function sanitizeUrl(url) {
    if (url === null || url === undefined) return '';

    const sanitized = String(url).trim();

    if (sanitized === '') return '';

    // Allow relative paths, anchors, and query-only URLs
    if (
        sanitized.startsWith('/') ||
        sanitized.startsWith('./') ||
        sanitized.startsWith('../') ||
        sanitized.startsWith('#') ||
        sanitized.startsWith('?')
    ) {
        return sanitized;
    }

    // Allow safe protocols
    const safeProtocolPattern = /^(https?|mailto|tel):/i;
    if (safeProtocolPattern.test(sanitized)) {
        return sanitized;
    }

    // Default to about:blank for potentially dangerous schemes (like javascript:)
    return 'about:blank';
}
