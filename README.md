# TuyaSmartNodejs 2.0 based on Tuyapi ( https://codetheweb.github.io/tuyapi/index.html )
[![Build Status](https://travis-ci.org/marcopollacci/tuyaSmartNodejs-2.0.svg?branch=master)](https://travis-ci.org/marcopollacci/tuyaSmartNodejs-2.0)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/marcopollacci/tuyaSmartNodejs-2.0.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/marcopollacci/tuyaSmartNodejs-2.0/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/marcopollacci/tuyaSmartNodejs-2.0.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/marcopollacci/tuyaSmartNodejs-2.0/context:javascript)

Refactory of the tuyaSmartNodejs repository from express to nestjs for future implementations

## Information
The project born to have an http server to remotely manage the home automation sockets compatible with the Tuya and Smart Life apps.
Currently, single sockets and multiple sockets are managed and recently compatibility with Nooie bulbs and Lifx white bulb has also been implemented.

## Install
Just clone repository, run ```npm install```

## Build
run ```npm run build```

## Supported Device
- Bulb and Socker compatible with Tuya and SmartLife app
- Nooie Bulb
- Lifx Bulb (no color version)

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

- Turn On lifx bulb
```http
http://127.0.0.1:8081/lifx/bulb?light=<id_light>&state=ON
```

For each call, there are many options (especially for nooie bulbs).
The system exposes its api and all the options provided through the url ```http://127.0.0.1:8081/swagger``` which is available after the project has been started.
You can find project documentation schema here: https://marcopollacci.github.io/tuyaSmartNodejs-2.0/

## Pm2
Use Pm2 with ecosystem.config.js file include in this project!
