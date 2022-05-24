package com.kuansam.practice_login

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import com.kuansam.practice_login.databinding.ActivityRegisteractivityBinding

class registeractivity : AppCompatActivity() {

    private lateinit var binding: ActivityRegisteractivityBinding
    private var register_password = ""
    private var register_username = ""



    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityRegisteractivityBinding.inflate(layoutInflater)
        setContentView(binding.root)

        SocketHandler.setSocket()
        val mSocket = SocketHandler.getSocket()
        mSocket.connect()
        //kotlin edittext有內建的gettext、settext text().tostring、settext()

        binding.registerbutton.setOnClickListener{
            mSocket.emit("getusername",binding.inputusername.text.toString())
            mSocket.emit("getpassword",binding.inputpassword.text.toString())
            //test 傳送單個資料到 node.js
        }



        Gologin()

    }
    private fun Gologin(){
        binding.gotologin.setOnClickListener{
            finish()
        }
    }



}