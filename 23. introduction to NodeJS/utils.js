function multiply(a, b) {
    return a * b;
}

const log = {
    warning: (info) => {
        console.log("warning", info);
    },
    error: (info) => {
        console.log("error", info);
    },
};

const hello = "this is hello string";

module.exports = { multiply, log, hello };
