const execSh = require("exec-sh");
const fs = require("fs");

// read test cases from file
const testCases = fs.readFileSync("testcase.txt", "utf8").trim().split("\n");

console.log(testCases); // test cases

// iterate through test cases
testCases.forEach((testCase) => {
    // compile and run the C++ program with the test case as input
    execSh(`g++-12 sample.cpp -o sample && echo ${testCase} | ./sample`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error}`);
        }
        console.log(`stdout: ${stdout}`);
    });
});

