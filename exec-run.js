const subprocess = require('child_process')

const process = subprocess.exec('yarn serve');
process.stdout.pipe(process.stdout)

setTimeout(() => {
  console.log('killing process')
  process.kill()
}, 3000);