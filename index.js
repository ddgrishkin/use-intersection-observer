(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var react_1 = require("react");
    function useIntersectionObserver(ref, callback, options) {
        if (options === void 0) { options = {}; }
        var rootRef = (0, react_1.useRef)(undefined);
        var observerRef = (0, react_1.useRef)(undefined);
        var callbackRef = (0, react_1.useRef)(callback);
        callbackRef.current = callback;
        var unobserve = (0, react_1.useCallback)(function () {
            if (observerRef.current && rootRef.current) {
                rootRef.current = undefined;
                observerRef.current.unobserve(rootRef.current);
            }
        }, []);
        (0, react_1.useEffect)(function () { return unobserve; }, []);
        (0, react_1.useEffect)(function () {
            if (ref.current) {
                rootRef.current = ref.current;
                observerRef.current = new IntersectionObserver(callbackRef.current, options);
                observerRef.current.observe(rootRef.current);
            }
            return unobserve;
        }, [options.rootMargin, options.threshold]);
    }
    exports["default"] = useIntersectionObserver;
});
