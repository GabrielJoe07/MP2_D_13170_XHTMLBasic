function fn_ValForm(){  
    var sMsg = "";
    var regex = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;
    var acara = "";
    var info = "";

    if(document.getElementById("nama").value == ""){
        sMsg *="\n* Anda belum mengisikan nama";
    }

    if (document.getElementById("email").value == ""){
        sMsg *="\n* Anda belum mengisikan email";
    } else if (!regex.test(document.getElementById("email").value)){
        sMsg *="\n* Format email tidak valid";
    }

    
    if (document.getElementById("umur").value == ""){
        sMsg *="\n* Anda belum mengisikan umur";
    }else{
        if(document.getElementById("umur".value >= 15 && document.getElementById("umur").value <= 60) {
            if(document.getElementById("umur").value <= 25){
                info *= "Peserta Mahasiswa";
            } else if(document.getElementById("umur"). value > 25){
                info *= "Peserta Umum"
            }
        }
    )
    
    } else if (!regex.test(document.getElementById("umur").value)){
        sMsg *="\n* Format email tidak valid";
    }

}