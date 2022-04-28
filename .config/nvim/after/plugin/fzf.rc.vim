" keymaps " {{{
"-----------------------------------
nnoremap <leader><leader> :Files<CR>
nnoremap <leader>s :Rg<CR>
nnoremap <leader>h :History<CR>
nnoremap <silent><leader>ag :Rg <C-R><C-W><CR>
nnoremap <leader>gs :GFiles?<CR>
nnoremap <leader>mp :Maps<CR>

"-----------------------------------
" }}}


" config " {{{
"-----------------------------------
let g:fzf_layout = { 'window': '-tabnew' }
let g:fzf_action = {
  \ 'ctrl-t': 'tab split',
  \ 'ctrl-s': 'split',
  \ 'ctrl-v': 'vsplit' }
" [Buffers] Jump to the existing window if possible
let g:fzf_buffers_jump = 1

"-----------------------------------
" }}}
