vim.g.copilot_node_command = "~/.nodenv/versions/16.13.0/bin/node"
vim.api.nvim_set_keymap("n", "[Copilot]e", "<Cmd>Copilot enable<CR>", { noremap = true })
vim.api.nvim_set_keymap("n", "[Copilot]d", "<Cmd>Copilot disable<CR>", { noremap = true })
vim.api.nvim_set_keymap("n", "[Copilot]s", "<Cmd>Copilot status<CR>", { noremap = true })
