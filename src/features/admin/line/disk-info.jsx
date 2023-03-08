import { useState, useEffect, useRef } from "react";
import { config } from "../../../common/utils";
import { io } from "socket.io-client";
const socket = io(config.socketPort);
export default function useDiskInfo() {
    const [disk, setDisk] = useState([]);
    useEffect(() => {
        const connected = () => {
            socket.emit('subs-disk-change');
            socket.on('on-disk-change', result => {
                setDisk(result.data || []);
                console.log("Disk Change => ", result.data);
            });
        };
        if (socket.connected) {
            connected();
        } else {
            socket.connect();
        }
        socket.on('connect', () => {
            connected();
        });
        return () => {
            socket.emit('unsubs-disk-change');
            socket.disconnect();
        };
    }, []);
    return { disk };
}