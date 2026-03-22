---
description: Automatic git commit and push workflow
---

When the user asks to "push", "push it", or push their code to a GitHub repository, you MUST ALWAYS perform the following steps sequentially block rather than just executing a bare `git push`.

1. Run `git add .` to stage all current modifications in the workspace.
2. Formulate a descriptive, professional commit message based on the recent conversation context and the changes you have implemented.
3. Run `git commit -m "[Your generated commit message here]"`.
4. Run `git push origin main` (or the default branch Name) to push the local modifications securely to the remote.

// turbo-all
These commands should generally be bundled together, e.g. `git add . ; git commit -m "update" ; git push origin main`.
