userPath = ""

echo "Enter the path to Discord on your computer [press Enter to use default path]:"
read userPath

if [userPath != ""]:
  exports.getAppDir = userPath
else:
  const PATHS = {
    stable: '/Applications/Discord.app/Contents/Resources/app',
    ptb: '/Applications/Discord PTB.app/Contents/Resources/app',
    canary: '/Applications/Discord Canary.app/Contents/Resources/app',
    dev: '/Applications/Discord Development.app/Contents/Resources/app'
  };

  exports.getAppDir = async (platform) => PATHS[platform];
fi
