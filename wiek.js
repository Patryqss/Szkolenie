function mojWiek()
{
    let dzisiaj = new Date();
    let sekunda = 7;
    let minuta = 30;
    let godzina = 15;
    let dzien = 14;
    let miesiac = 7;
    let rok = 1997;

    if (dzisiaj.getSeconds()<sekunda) {
        sekunda = 60+(dzisiaj.getSeconds()-sekunda);
        minuta++;
    } else {
        sekunda = dzisiaj.getSeconds()-sekunda;
    }
    if (dzisiaj.getMinutes()<minuta) {
        minuta = 60+(dzisiaj.getMinutes()-minuta);
        godzina++;
    } else {
        minuta = dzisiaj.getMinutes()-minuta;
    }
    if (dzisiaj.getHours()<godzina) {
        godzina = 24+(dzisiaj.getHours()-godzina);
        dzien++;
    } else {
        godzina = dzisiaj.getHours()-godzina;
    }
    if (dzisiaj.getDate()<dzien) {
        if (dzisiaj.getMonth()+1==1 || dzisiaj.getMonth()+1==3 || dzisiaj.getMonth()+1==5 || dzisiaj.getMonth()+1==7 || dzisiaj.getMonth()+1==8 || dzisiaj.getMonth()+1==10 || dzisiaj.getMonth()+1==12) {
            dzien = 31+(dzisiaj.getDate()-dzien);
            miesiac++;
        } else if (dzisiaj.getMonth()+1==4 || dzisiaj.getMonth()+1==6 || dzisiaj.getMonth()+1==9 || dzisiaj.getMonth()+1==11) {
            dzien = 30+(dzisiaj.getDate()-dzien);
            miesiac++;
        } else {
            dzien = 28+(dzisiaj.getDate()-dzien);
            miesiac++;
        }
    } else {
        dzien = dzisiaj.getDate()-dzien;
    }
    if (dzisiaj.getMonth()+1<miesiac) {
        miesiac = 12+(dzisiaj.getMonth()+1-miesiac);
        rok++;
    } else {
        miesiac = dzisiaj.getMonth()+1-miesiac;
    }
    rok = dzisiaj.getFullYear()-rok;

    if (godzina<10) godzina = "0"+godzina;
    if (minuta<10) minuta = "0"+minuta;
    if (sekunda<10) sekunda = "0"+sekunda;
        
    document.getElementById("zegar").innerHTML = " "+rok+" lat "+miesiac+" miesięcy "+dzien+" dni | "+godzina+":"+minuta+":"+sekunda;
        
    setTimeout("mojWiek()",1000);
}