```sh
git clone git@github.com:eb-gustavo/react-workshop.git
cd 03-email-list-detail-fetch
npm install
npm start
```

for this exercise we're going to get the emails from a server, so in another terminal run:
```sh
cd ../api-server
npm start
```
[api-server docs](api-server)

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
