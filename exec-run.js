const subprocess = require('child_process')

subprocess.exec('yarn serve').stdout.pipe(process.stdout)