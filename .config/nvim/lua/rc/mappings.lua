---------------------------------------------------------------------------------------------------+
-- Commands \ Modes | Normal | Insert | Command | Visual | Select | Operator | Terminal | Lang-Arg |
-- ================================================================================================+
-- map  / noremap   |    @   |   -    |    -    |   @    |   @    |    @     |    -     |    -     |
-- nmap / nnoremap  |    @   |   -    |    -    |   -    |   -    |    -     |    -     |    -     |
-- map! / noremap!  |    -   |   @    |    @    |   -    |   -    |    -     |    -     |    -     |
-- imap / inoremap  |    -   |   @    |    -    |   -    |   -    |    -     |    -     |    -     |
-- cmap / cnoremap  |    -   |   -    |    @    |   -    |   -    |    -     |    -     |    -     |
-- vmap / vnoremap  |    -   |   -    |    -    |   @    |   @    |    -     |    -     |    -     |
-- xmap / xnoremap  |    -   |   -    |    -    |   @    |   -    |    -     |    -     |    -     |
-- smap / snoremap  |    -   |   -    |    -    |   -    |   @    |    -     |    -     |    -     |
-- omap / onoremap  |    -   |   -    |    -    |   -    |   -    |    @     |    -     |    -     |
-- tmap / tnoremap  |    -   |   -    |    -    |   -    |   -    |    -     |    @     |    -     |
-- lmap / lnoremap  |    -   |   @    |    @    |   -    |   -    |    -     |    -     |    @     |
---------------------------------------------------------------------------------------------------+

-- variants
local g = vim.g
local map = vim.keymap.set
local o = vim.o
local api = vim.api

-- tab move
map("n", "<C-,>", ":tabnext<CR>", { noremap = true, silent = true })
map("n", "<C-.>", ":tabprevious<CR>", { noremap = true, silent = true })

-- terminal mode
map("t", "<Esc>", "<C-\\><C-n>", { noremap = true, silent = false })

-- sandwich & <spector>
map({ "n", "x" }, "s", "<Nop>", { noremap = true, silent = true })
map({ "n", "x" }, "S", "<Nop>", { noremap = true, silent = true })

-- [Copilot]
api.nvim_set_keymap("n", "[Copilot]", "<Nop>", { noremap = true, silent = true })
api.nvim_set_keymap("n", "<Leader>c", "[Copilot]", {})

--[git]
api.nvim_set_keymap("n", "<Leader>g", "[git]", {})

-- [FuzzyFinder]
map({ "n", "x" }, "z", "<Nop>", { noremap = true, silent = true })
api.nvim_set_keymap("n", "[FuzzyFinder]", "<Nop>", { noremap = true, silent = true })
api.nvim_set_keymap("v", "[FuzzyFinder]", "<Nop>", { noremap = true, silent = true })
api.nvim_set_keymap("n", "z", "[FuzzyFinder]", {})
api.nvim_set_keymap("v", "z", "[FuzzyFinder]", {})
api.nvim_set_keymap("n", "Z", "<Nop>", { noremap = true, silent = true })


---- remap
map("n", "gzz", "zz", { noremap = true, silent = true })
map("n", "gj", "j", { noremap = true, silent = true })
map("n", "gk", "k", { noremap = true, silent = true })
map("n", "X", "<Cmd>tabclose<CR>", { noremap = true, silent = true })

-- move cursor
vim.keymap.set({ "n", "x" }, "j", function()
	return vim.v.count > 0 and "j" or "gj"
end, { noremap = true, expr = true })
vim.keymap.set({ "n", "x" }, "k", function()
	return vim.v.count > 0 and "k" or "gk"
end, { noremap = true, expr = true })

-- ハイライトを消す
map("n", "gq", "<Cmd>nohlsearch<CR>", { noremap = true, silent = true })

-- yank
map("n", "d<Space>", "diw", { noremap = true, silent = true })
map("n", "c<Space>", "ciw", { noremap = true, silent = true })
map("n", "y<Space>", "yiw", { noremap = true, silent = true })

-- インクリメント設定
map({ "n", "x" }, "+", "<C-a>", { noremap = true, silent = true })
map({ "n", "x" }, "_", "<C-x>", { noremap = true, silent = true })

-- paste
map({ "n", "x" }, "p", "]p", { noremap = true, silent = true })
map({ "n", "x" }, "gp", "p", { noremap = true, silent = true })
map({ "n", "x" }, "gP", "P", { noremap = true, silent = true })
map({ "n", "x" }, "<LocalLeader>p", '"+p', { noremap = true, silent = true })
map({ "n", "x" }, "<LocalLeader>P", '"+P', { noremap = true, silent = true })
