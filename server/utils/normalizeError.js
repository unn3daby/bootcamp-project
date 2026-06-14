"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeError = normalizeError;
function isZodIssue(value) {
    if (!value || typeof value !== 'object')
        return false;
    var v = value;
    if (typeof v.code !== 'string')
        return false;
    if (typeof v.message !== 'string')
        return false;
    if (!Array.isArray(v.path))
        return false;
    return v.path.every(function (p) { return typeof p === 'string' || typeof p === 'number'; });
}
function safeParseJson(text) {
    try {
        return JSON.parse(text);
    }
    catch (_a) {
        return undefined;
    }
}
function extractMessage(body) {
    if (body && typeof body === 'object') {
        var candidate = body.message;
        if (typeof candidate === 'string')
            return candidate;
    }
    return 'Unknown error';
}
function normalizeError(status, body) {
    var message = extractMessage(body);
    if (status >= 500) {
        var parsed = safeParseJson(message);
        var isZodResponse = Array.isArray(parsed) && parsed.length > 0 && parsed.every(isZodIssue);
        if (isZodResponse) {
            return { code: 'validation', message: 'Validation failed', details: parsed };
        }
        return { code: 'server', message: message };
    }
    if (status === 401 || status === 403)
        return { code: 'forbidden', message: message };
    if (status === 404)
        return { code: 'not_found', message: message };
    return { code: 'unknown', message: message };
}
