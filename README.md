# 

## Perform Git commands

1. Perform git add to add latest files and folder by writing given command in terminal in git environment.

```bash
git add --a
```

Make sure terminal should have path as follows:
![Terminal](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/images/cd_clonedfolder_12.png)

2.Then perform `git commit` in the terminal. While performing `git commit`, terminal can show message to set up your `git config --global` for `user. name` and `user.email`. If yes, then you need to perform git config command as well for `user.name` and `user.email` as given.

```bash
git config --global user.email "you@example.com"
```

```bash
git config --global user.name "Your Name"
```
> Note: Replace data within qoutes with your own details.

Then perform commit command as given:

```bash
git commit -m "message"
```

3. Then perform `git push` just by writing given command in terminal.
```bash
git push origin
```

- After the push command, the system will prompt you to enter your username and password. Enter the username for your GitHub account and the password that you created in the first lab. After entering the credentials, all of your latest folders and files will be pushed to your GitHub repository.