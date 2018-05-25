###############################################################
      NFC implementation using Electron and NFC-pcsc
###############################################################

::NPM Packages::

> nfc-pcsc
> electron
> electron-rebuild (for rebuilding nfc-pcsc with electron)
> windows-build-tools (https://www.npmjs.com/package/windows-build-tools)

::Setup process for windows after cloning git repo::

- 'npm install' to update and install all the libs
- install windows-build-tools by typing 'npm install -g windows-build-tools'
- rebuild nfc-pcsc for electron (https://github.com/electron/electron/blob/v0.37.2/docs/tutorial/using-native-node-modules.md#using-native-node-modules)
- npm start to run the app

***linux versions use lib-nfc for further details google it
