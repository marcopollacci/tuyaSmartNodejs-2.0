/* eslint-disable prettier/prettier */
let nodeEnv = process.env.NODE_ENV;

if (typeof nodeEnv === 'undefined') {
    nodeEnv = 'unknown';
}

let version = '0.0.1';

switch (nodeEnv) {
    case 'production': version = '1.0.0';  break;
}

export const VERSION_APPLICATION = version;
