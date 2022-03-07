set -x PATH /opt/homebrew/bin $HOME/.pyenv/shims $HOME/nodenv/shims $HOME/.cargo/bin $HOME/.rbenv/shims (ruby -e 'print Gem.user_dir')/bin $GOPATH/bin $HOME/Library/Android/sdk/platform-tools $HOME/Library/Android/sdk/emulator $PATH
status --is-interactive; and source (nodenv init -|psub)

bind \cr peco_select_history # Bind for peco history to Ctrl+r