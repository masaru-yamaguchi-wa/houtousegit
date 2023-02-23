export const command = [

    {
        "command": "git add",
        "target": ".",
        "option": "",
        "detail": "work treeからファイルをステージングすることが可能",
        "detail2": "git add <targetFile>"
    },
    {
        "command": "git commit -m",
        "target": "message",
        "option": "",
        "detail": "stageからlocal repoにあげることが可能。messageは必須",
        "detail2": "git commit -m <message>"
    },
    {
        "command": "git push",
        "target": "origin",
        "option": "main",
        "detail": "local repo から remote repo にあげることが可能",
        "detail2": "git push <targetBranch> <sender branch>"
    },
    {
        "command": "git pull",
        "target": "origin",
        "option": "main",
        "detail": "remote repo から local repo に引き抜くことが可能",
        "detail2": "git pull <targetBranch> <senderBranch>"
    },
    {
        "command": "git status",
        "target": "",
        "option": "",
        "detail": "work treeの状態を確認することが可能",
        "detail2": "git status"
    },
    {
        "command": "git branch",
        "target": "",
        "option": "",
        "detail": "branchの確認や生成が可能",
        "detail2": "git branch 確認 git branch <newBranch> 生成"
    },
    {
        "command": "git checkout",
        "target": "",
        "option": "",
        "detail": "branchの生成や移動が可能。移動する場合こちらを使う",
        "detail2": "git checkout -b <branchName> 生成と移動"
    },
    {
        "command": "git reset",
        "target": "commit",
        "option": "",
        "detail": "pushの取り消しが可能",
        "detail2": "git reset --head <commitID>"
    },
    {
        "command": "git revert",
        "target": "commit",
        "option": "",
        "detail": "commitの取り消しが可能",
        "detail2": "git revert <commitID>"
    },
    {
        "command": "git merge",
        "target": "branch",
        "option": "branch",
        "detail": "branch同士をマージする",
        "detail2": "git merge <baseBranch> <senderBranch>"
    },
]

