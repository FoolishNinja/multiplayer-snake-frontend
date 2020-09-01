import io from 'socket.io-client';

export default class SocketService {
    private socket: any;

    constructor() {
        this.socket = io('http://localhost');
        this.socket.on('connect', () => {
            console.log('Connected successfully');
        });
    }

    public emit(key: string, data: any, callback?: Function) {
        this.socket.emit(key, data, callback);
    }

    public on(key: string, callback: (value: any) => void) {
        this.socket.on(key, callback);
    }
}