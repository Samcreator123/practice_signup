module.exports = {

    rgcheck: function(Account,Password){
        var Accheck = new RegExp('\w+@[a-zA-Z]+\.[a-zA-Z]+');
        var Pscheck = new RegExp('[a-zA-Z0-9]{8,15}');
        if(Accheck.test(Account)&&Pscheck.test(Password)){
            return true;
        }
        else{
            return false;
        }
    },

}