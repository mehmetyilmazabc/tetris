let center_value=31;
var tip = []
var old_tip = []
var ground = [581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600];
primary();
var myVar = setInterval(progress, 500);

function land_control(){
    for (z=0;z<4;z++){
        for (x=0;x<ground.length;x++){
            if ((tip[z]+20)==ground[x]){
                    return "landed";
                }
            }
        }
}

//İLERLEME 
function progress(){
    old_tip[0]=tip[0];
    old_tip[1]=tip[1];
    old_tip[2]=tip[2];
    old_tip[3]=tip[3];
    center_value=center_value+20;
    paint();
    if (land_control()=="landed")
    {
        console.log("landed");
        for (g=0;g<4;g++){
            d=0;
            for (x=0;x<ground.length;x++){
                if (ground[x]==tip[g]){
                    d++;
                }
            }
            console.log(d);  
            if (d==0){
                ground.push(tip[g]);
            }
        }
        console.log(ground);
        center_value=31;
        primary()
    }
}

// İLK COMPONENT RASTGELE SEÇİM.
function primary(){
    tur=Math.floor(Math.random() * 9)+1;
    
}
//COMPONENT BOYAMA (İLK VE SONRAKİLER).........
function paint () {
if (tur== 1){
tip[0] = center_value-1; tip[1] = center_value; tip[2] = center_value+1; tip[3] = center_value+2;
}else if (tur== 2){
tip[0] = center_value-20; tip[1] = center_value; tip[2] = center_value+20; tip[3] = center_value+40;
}else if (tur== 3){
tip[0] = center_value-21; tip[1] = center_value-20; tip[2] = center_value; tip[3] = center_value+1;
}else if (tur== 4){
tip[0] = center_value-19; tip[1] = center_value+1; tip[2] = center_value; tip[3] = center_value+20;
}else if (tur== 5){
tip[0] = center_value-1; tip[1] = center_value; tip[2] = center_value+1; tip[3] = center_value+21;
}else if (tur== 6){
tip[0] = center_value-20; tip[1] = center_value; tip[2] = center_value+20; tip[3] = center_value+19;
}else if (tur== 7){
tip[0] = center_value-21; tip[1] = center_value-1; tip[2] = center_value; tip[3] = center_value+1;
}else if (tur== 8){
tip[0] = center_value-19; tip[1] = center_value-20; tip[2] = center_value; tip[3] = center_value+20;
}else if (tur== 9){
tip[0] = center_value-20; tip[1] = center_value-19; tip[2] = center_value; tip[3] = center_value+1;
}
    document.getElementById('resim'+old_tip[0]).src="beyazkare.gif";
    document.getElementById('resim'+old_tip[1]).src="beyazkare.gif";
    document.getElementById('resim'+old_tip[2]).src="beyazkare.gif";
    document.getElementById('resim'+old_tip[3]).src="beyazkare.gif";

    document.getElementById('resim'+tip[0]).src="siyahkare.gif";
    document.getElementById('resim'+tip[1]).src="siyahkare.gif";
    document.getElementById('resim'+tip[2]).src="siyahkare.gif";
    document.getElementById('resim'+tip[3]).src="siyahkare.gif";
    for (x=0;x<ground.length;x++){
        document.getElementById('resim'+ground[x]).src="siyahkare.gif"; 
    }

}

//YONETİM ALANI SAG SOL CHANGE
document.addEventListener("keydown", function(event) {
    //console.log(event.which);
    if(event.keyCode == 37) {
        function sol_control(){
            v=0;
            for (z=0;z<4;z++){
                p=(tip[z]%20);
                console.log(p);
                if(p!==1){
                    v++;  
                    console.log(v);           
                }
            }
            if (v>3){
                return "tamam";  
            }
        }
        if (sol_control()=="tamam"){
        center_value--;
        }
    }
    else if(event.keyCode == 39) {
        function sag_control(){
            l=0;
            for (z=0;z<4;z++){
                p=(tip[z]%20);
                console.log(p);
                if(p!==0){
                    l++;  
                    console.log(l);           
                }
            }
            if (v>3){
                return "tamam";  
            }
        }
        if (sag_control()=="tamam"){
        center_value++;
        }
    }
    else if(event.keyCode == 32) {
        if (tur== 1){tur=2;}
        else if (tur== 2){tur=1;}
        else if (tur== 3){tur=4;}
        else if (tur== 4){tur=3;}
        else if (tur== 5){tur=6;}
        else if (tur== 6){tur=7;}
        else if (tur== 7){tur=8;}
        else if (tur== 8){tur=5;}
    }
  });