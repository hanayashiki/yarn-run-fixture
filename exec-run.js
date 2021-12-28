const subprocess = require('child_process')

const p = subprocess.exec('yarn serve');
p.stdout.pipe(process.stdout)

setTimeout(() => {
  console.log('killing process')
  p.kill()
}, 5000);