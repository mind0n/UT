module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            { pattern: "src/test/test.ts" },
            { pattern: "src/app/**/*.+(ts|html)" },
            { pattern: "src/test/**/*.spec.ts" }
        ],
        exclude: [ 'src/app/main.ts' ],
        preprocessors: {
            "src/**/*.ts": ["karma-typescript"]
        },
        karmaTypescriptConfig: {
            tsconfig: "./tsconfig.json", // this will get rid of all compiler error messages
        },        
        reporters: ["progress", "karma-typescript"],
        browsers: ["Chrome"]
    });
};