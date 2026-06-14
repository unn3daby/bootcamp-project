"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.externalApi = externalApi;
function externalApi(path, opts) {
    var _a;
    if (opts === void 0) { opts = {}; }
    var config = useRuntimeConfig();
    return $fetch(path, __assign(__assign({ baseURL: config.apiBaseUrl, timeout: 45000, retry: 1, retryDelay: 500 }, opts), { headers: __assign({ 'x-api-key': config.apiKey }, ((_a = opts.headers) !== null && _a !== void 0 ? _a : {})), onResponseError: function (_a) {
            var response = _a.response;
            throw createError({
                statusCode: response.status,
                data: normalizeError(response.status, response._data),
            });
        } }));
}
