```
git clone git@github.com:eb-gustavo/react-workshop.git
cp -R 04-email-list-detail-flux my_env
cd my_env/04-email-list-detail-flux/
npm install
npm start
```

but this time will be with [flux](https://facebook.github.io/flux/)

screen should look like:
```
------------------------------------
| search                           |
------------------------------------
| show unread | show deleted       |
------------------------------------
| mark as read | mark as deleted   |
------------------------------------
| selected | from | subject | date |
------------------------------------
|    []    | aaaa | aaaaaaaa | aaa |
------------------------------------
|    []    | ssss | ssssssss | sss |
------------------------------------
|    []    | dddd | dddddddd | ddd |
------------------------------------
|                            close |
| email content here               |
------------------------------------
```
