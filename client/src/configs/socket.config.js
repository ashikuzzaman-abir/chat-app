import config from "./main.config";
import socket from 'socket.io-client';

export default socket(config.wsURL);