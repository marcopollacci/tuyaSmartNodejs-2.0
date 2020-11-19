# TuyaSmartNodejs 2.0 based on Tuyapi ( https://codetheweb.github.io/tuyapi/index.html )
[![Total alerts](https://img.shields.io/lgtm/alerts/g/marcopollacci/tuyaSmartNodejs-2.0.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/marcopollacci/tuyaSmartNodejs-2.0/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/marcopollacci/tuyaSmartNodejs-2.0.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/marcopollacci/tuyaSmartNodejs-2.0/context:javascript)

Refactory of the tuyaSmartNodejs repository from express to nestjs for future implementations

## Information
The project born to have an http server to remotely manage the home automation sockets compatible with the Tuya and Smart Life apps.
Currently, single sockets and multiple sockets are managed and recently compatibility with Nooie bulbs has also been implemented.

## Install
Just clone repository, run ```npm install```

## Build
run ```npm run build```

## Call Example
In order to work, you need both the id and the key of the device.

- Turn On multiple socket 
```http
http://127.0.0.1:8081/tuya/multiple?id=<id_device>&key=<key_device>&use=accendi&subdevice=<id_sub_socket>
```
- Turn On single socket 
```http
http://127.0.0.1:8081/tuya/single?id=<id_device>&key=<key_device>&use=accendi
```

- Turn On nooie bulb
```http
http://127.0.0.1:8081/nooie?id=<id_device>&key=<key_device>&use=accendi
```

For each call, there are many options (especially for nooie bulbs).
The system exposes its api and all the options provided through the url ```http://127.0.0.1:8081/swagger``` which is available after the project has been started.


## Pm2
Use Pm2 with ecosystem.config.js file include in this project!