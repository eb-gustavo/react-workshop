```sh
git clone git@github.com:eb-gustavo/react-workshop.git
cp -R 06-email-list-detail-redux my_env
cd my_env/06-email-list-detail-redux/
npm install
npm start
```

but this time will be with [redux](http://redux.js.org/) and [react-redux](http://redux.js.org/docs/basics/UsageWithReact.html)

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

[back](../)
