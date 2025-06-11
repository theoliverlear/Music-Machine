module.exports = {
    verbose: true,
    testEnvironment: "node",
    silent: false,
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    roots: ["<rootDir>/src"],
};
