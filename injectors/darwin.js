let userPath = ""

let rl = readline.createInterface(process.stdin, process.stdout)
rl.question("Enter the path to Discord on your computer [press Enter to use default path]:", (userPath) => { rl.close() })

if (userPath != "") {
  const PATHS = {
    stable: userPath,
    ptb: userPath,
    canary: userPath,
    dev: userPath
  }
  
  exports.getAppDir = async (platform) => PATHS[platform]
} else {
  const PATHS = {
    stable: '/Applications/Discord.app/Contents/Resources/app',
    ptb: '/Applications/Discord PTB.app/Contents/Resources/app',
    canary: '/Applications/Discord Canary.app/Contents/Resources/app',
    dev: '/Applications/Discord Development.app/Contents/Resources/app'
  };

  exports.getAppDir = async (platform) => PATHS[platform];
}
