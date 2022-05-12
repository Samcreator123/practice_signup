package com.kuansam.practice_login

import android.content.Intent
import android.os.Binder
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.PersistableBundle
import android.view.LayoutInflater
import android.widget.TextView
import com.kuansam.practice_login.databinding.ActivityLoginactivityBinding



class loginactivity : AppCompatActivity() {

    private lateinit var binding : ActivityLoginactivityBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityLoginactivityBinding.inflate(layoutInflater)
        setContentView(binding.root)
        binding.gotoregister.setOnClickListener{
            val intent = Intent(this,registeractivity::class.java)
            startActivity(intent)
        }
    }

}