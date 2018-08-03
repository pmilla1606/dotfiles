module.exports = {
  brew: [
    // http://www.lcdf.org/gifsicle/ (because I'm a gif junky)
    'gifsicle',
    // jq is a sort of JSON grep
    'jq',
    'reattach-to-user-namespace',
    // better/more recent version of screen
    'homebrew/dupes/screen',
    'tree',
    'watch',
    // Install wget with IRI support
    'wget --enable-iri'
  ],
  cask: [
    //'adium',
    //'amazon-cloud-drive',
    //'atom',
    // 'box-sync',
    //'comicbooklover',
    //'diffmerge',
    'docker', // docker for mac
    //'dropbox',
    //'evernote',
    'flux',
    'gpg-suite',
    //'ireadfast',
    'iterm2',
    'macbreakz',
    'signal',
    'sizeup',
    'slack',
    'the-unarchiver',
    'vlc',
    sublime-text
  ],
  gem: [
  ],
  npm: [
    'eslint',
    'instant-markdown-d',
    'npm-check-updates',
    'prettyjson',
    'trash',
    'vtop'
    // ,'yo'
  ]
};
