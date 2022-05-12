package com.kuansam.practice_login

import io.socket.client.IO
import io.socket.client.Socket
import java.net.URISyntaxException

object SocketHandler {
    private lateinit var mSocket: Socket

    @Synchronized
    fun setSocket(){
        try {
            mSocket = IO.socket("http://10.0.2.2:3000")
        }catch (e:URISyntaxException){

        }
    }

    @Synchronized
    fun getSocket():Socket{
        return mSocket
    }
}