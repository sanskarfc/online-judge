const execShPromise = require("exec-sh").promise;

// run interactive bash shell -- here, i'm just trying out the execSh package
const run = async () => {
  let out;

  try {
    out = await execShPromise('ls -a', true);
  } catch (e) {
    console.log('Error: ', e);
    console.log('Stderr: ', e.stderr);
    console.log('Stdout: ', e.stdout);

    return e;
  }

  console.log('out: ', out.stdout, out.stderr);
}

run();
