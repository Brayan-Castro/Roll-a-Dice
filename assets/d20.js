function Dados() {
    /* Seu merda*/
    var a = document.getElementById("tpDado").value;
    var c = document.getElementById("result");

    var c2 = document.getElementById("result2");
    var c3 = document.getElementById("result3");
    var c4 = document.getElementById("result4");
    var c5 = document.getElementById("result5");
    var c6 = document.getElementById("result6");
    var c7 = document.getElementById("result7");
    var c8 = document.getElementById("result8");
    var c9 = document.getElementById("result9");
    var c10 = document.getElementById("result10");
    
    var d = document.getElementById("profVL").value;
    var e = document.getElementById("name").value;
    var g = document.getElementById("qntDado").value;

    var h = document.getElementById("rsTotal");

    var f = parseFloat(d);

    if (a == "d4" && g == "1") {
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

        var nerd = random(1, 5);

        var final = nerd + f

        var man = `Dado rolado: D4, ${nerd} + ${f} = ${final}`

        var rsfinal = nerd + (f * 1);
        var rollfinal = nerd
        var proftotal = f * 1;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        h.innerHTML = total
    }else if (a == "d4" && g == "2"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;

        var nerd = random(1, 5);
        var nerd2 = random2(1, 5);

        var final = nerd + f
        var final2 = nerd2 + f

        var man = `Dado rolado: D4, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D4, ${nerd2} + ${f} = ${final2}`

        var rsfinal = nerd + nerd2 + (f * 2);
        var rollfinal = nerd + nerd2
        var proftotal = f * 2;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        h.innerHTML = total
    }else if (a == "d4" && g == "3"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        

        var nerd = random(1, 5);
        var nerd2 = random2(1, 5);
        var nerd3 = random3(1, 5);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f

        var man = `Dado rolado: D4, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D4, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D4, ${nerd3} + ${f} = ${final3}`

        var rsfinal = nerd + nerd2 + nerd3 + (f * 3);
        var rollfinal = nerd + nerd2 + nerd3
        var proftotal = f * 3;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c3.innerHTML = man3
        h.innerHTML = total
    }else if (a == "d4" && g == "4"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        

        var nerd = random(1, 5);
        var nerd2 = random2(1, 5);
        var nerd3 = random3(1, 5);
        var nerd4 = random4(1, 5);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f

        var man = `Dado rolado: D4, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D4, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D4, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D4, ${nerd4} + ${f} = ${final4}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + (f * 4);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4
        var proftotal = f * 4;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        h.innerHTML = total
    }else if (a == "d4" && g == "5"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        

        var nerd = random(1, 5);
        var nerd2 = random2(1, 5);
        var nerd3 = random3(1, 5);
        var nerd4 = random4(1, 5);
        var nerd5 = random5(1, 5);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f

        var man = `Dado rolado: D4, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D4, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D4, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D4, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D4, ${nerd5} + ${f} = ${final5}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + (f * 5);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5
        var proftotal = f * 5;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        h.innerHTML = total
    }else if (a == "d4" && g == "6"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;

        var nerd = random(1, 5);
        var nerd2 = random2(1, 5);
        var nerd3 = random3(1, 5);
        var nerd4 = random4(1, 5);
        var nerd5 = random5(1, 5);
        var nerd6 = random6(1, 5);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f

        var man = `Dado rolado: D4, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D4, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D4, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D4, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D4, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D4, ${nerd6} + ${f} = ${final6}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + (f * 6);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6
        var proftotal = f * 6;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        h.innerHTML = total
    }else if (a == "d4" && g == "7"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random7 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        
        var nerd = random(1, 5);
        var nerd2 = random2(1, 5);
        var nerd3 = random3(1, 5);
        var nerd4 = random4(1, 5);
        var nerd5 = random5(1, 5);
        var nerd6 = random6(1, 5);
        var nerd7 = random7(1, 5);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f
        var final7 = nerd7 + f

        var man = `Dado rolado: D4, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D4, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D4, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D4, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D4, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D4, ${nerd6} + ${f} = ${final6}`
        var man7 = `Dado rolado: D4, ${nerd7} + ${f} = ${final7}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + (f * 7);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7
        var proftotal = f * 7;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6}\n ${man7}\n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        c7.innerHTML = man7
        h.innerHTML = total
    }else if (a == "d4" && g == "8"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random7 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random8 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        
        var nerd = random(1, 5);
        var nerd2 = random2(1, 5);
        var nerd3 = random3(1, 5);
        var nerd4 = random4(1, 5);
        var nerd5 = random5(1, 5);
        var nerd6 = random6(1, 5);
        var nerd7 = random7(1, 5);
        var nerd8 = random8(1, 5);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f
        var final7 = nerd7 + f
        var final8 = nerd8 + f

        var man = `Dado rolado: D4, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D4, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D4, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D4, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D4, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D4, ${nerd6} + ${f} = ${final6}`
        var man7 = `Dado rolado: D4, ${nerd7} + ${f} = ${final7}`
        var man8 = `Dado rolado: D4, ${nerd8} + ${f} = ${final8}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + (f * 8);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8
        var proftotal = f * 8;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6}\n ${man7}\n ${man8}\n ${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        c7.innerHTML = man7
        c8.innerHTML = man8
        h.innerHTML = total
    }else if (a == "d4" && g == "9"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random7 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random8 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random9 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        
        var nerd = random(1, 5);
        var nerd2 = random2(1, 5);
        var nerd3 = random3(1, 5);
        var nerd4 = random4(1, 5);
        var nerd5 = random5(1, 5);
        var nerd6 = random6(1, 5);
        var nerd7 = random7(1, 5);
        var nerd8 = random8(1, 5);
        var nerd9 = random9(1, 5);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f
        var final7 = nerd7 + f
        var final8 = nerd8 + f
        var final9 = nerd9 + f

        var man = `Dado rolado: D4, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D4, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D4, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D4, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D4, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D4, ${nerd6} + ${f} = ${final6}`
        var man7 = `Dado rolado: D4, ${nerd7} + ${f} = ${final7}`
        var man8 = `Dado rolado: D4, ${nerd8} + ${f} = ${final8}`
        var man9 = `Dado rolado: D4, ${nerd9} + ${f} = ${final9}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + nerd9 + (f * 9);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + nerd9
        var proftotal = f * 9;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6}\n ${man7}\n ${man8}\n ${man9}\n ${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        c7.innerHTML = man7
        c8.innerHTML = man8
        c9.innerHTML = man9
        h.innerHTML = total
    }else if (a == "d4" && g == "10"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random7 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random8 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random9 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random10 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        
        var nerd = random(1, 5);
        var nerd2 = random2(1, 5);
        var nerd3 = random3(1, 5);
        var nerd4 = random4(1, 5);
        var nerd5 = random5(1, 5);
        var nerd6 = random6(1, 5);
        var nerd7 = random7(1, 5);
        var nerd8 = random8(1, 5);
        var nerd9 = random9(1, 5);
        var nerd10 = random10(1, 5);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f
        var final7 = nerd7 + f
        var final8 = nerd8 + f
        var final9 = nerd9 + f
        var final10 = nerd9 + f

        var man = `Dado rolado: D4, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D4, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D4, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D4, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D4, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D4, ${nerd6} + ${f} = ${final6}`
        var man7 = `Dado rolado: D4, ${nerd7} + ${f} = ${final7}`
        var man8 = `Dado rolado: D4, ${nerd8} + ${f} = ${final8}`
        var man9 = `Dado rolado: D4, ${nerd9} + ${f} = ${final9}`
        var man10 = `Dado rolado: D4, ${nerd10} + ${f} = ${final10}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + nerd9 + nerd10 + (f * 10);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + nerd9 + nerd10
        var proftotal = f * 10;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6} \n${man7} \n${man8} \n${man9} \n${man10} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        c7.innerHTML = man7
        c8.innerHTML = man8
        c9.innerHTML = man9
        c10.innerHTML = man10
        h.innerHTML = total
    }

    /* D6 */

    if (a == "d6" && g == "1") {
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

        var nerd = random(1, 7);

        var final = nerd + f

        var man = `Dado rolado: D6, ${nerd} + ${f} = ${final}`

        var rsfinal = nerd + (f * 1);
        var rollfinal = nerd
        var proftotal = f * 1;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        var man = `Dado rolado: D6, ${nerd} + ${f} = ${final}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        h.innerHTML = total
    }else if (a == "d6" && g == "2"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;

        var nerd = random(1, 7);
        var nerd2 = random2(1, 7);

        var final = nerd + f
        var final2 = nerd2 + f

        var man = `Dado rolado: D6, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D6, ${nerd2} + ${f} = ${final2}`

        var rsfinal = nerd + nerd2 + (f * 2);
        var rollfinal = nerd + nerd2
        var proftotal = f * 2;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        h.innerHTML = total
    }else if (a == "d6" && g == "3"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        

        var nerd = random(1, 7);
        var nerd2 = random2(1, 7);
        var nerd3 = random3(1, 7);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f

        var man = `Dado rolado: D6, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D6, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D6, ${nerd3} + ${f} = ${final3}`

        var rsfinal = nerd + nerd2 + nerd3 + (f * 3);
        var rollfinal = nerd + nerd2 + nerd3
        var proftotal = f * 3;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c3.innerHTML = man3
        h.innerHTML = total
    }else if (a == "d6" && g == "4"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        

        var nerd = random(1, 7);
        var nerd2 = random2(1, 7);
        var nerd3 = random3(1, 7);
        var nerd4 = random4(1, 7);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f

        var man = `Dado rolado: D6, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D6, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D6, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D6, ${nerd4} + ${f} = ${final4}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + (f * 4);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4
        var proftotal = f * 4;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        h.innerHTML = total
    }else if (a == "d6" && g == "5"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        

        var nerd = random(1, 7);
        var nerd2 = random2(1, 7);
        var nerd3 = random3(1, 7);
        var nerd4 = random4(1, 7);
        var nerd5 = random5(1, 7);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f

        var man = `Dado rolado: D6, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D6, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D6, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D6, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D6, ${nerd5} + ${f} = ${final5}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + (f * 5);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5
        var proftotal = f * 5;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        h.innerHTML = total
    }else if (a == "d6" && g == "6"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;

        var nerd = random(1, 7);
        var nerd2 = random2(1, 7);
        var nerd3 = random3(1, 7);
        var nerd4 = random4(1, 7);
        var nerd5 = random5(1, 7);
        var nerd6 = random6(1, 7);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f

        var man = `Dado rolado: D6, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D6, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D6, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D6, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D6, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D6, ${nerd6} + ${f} = ${final6}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + (f * 6);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6
        var proftotal = f * 6;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        h.innerHTML = total
    }else if (a == "d6" && g == "7"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random7 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        
        var nerd = random(1, 7);
        var nerd2 = random2(1, 7);
        var nerd3 = random3(1, 7);
        var nerd4 = random4(1, 7);
        var nerd5 = random5(1, 7);
        var nerd6 = random6(1, 7);
        var nerd7 = random7(1, 7);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f
        var final7 = nerd7 + f

        var man = `Dado rolado: D6, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D6, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D6, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D6, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D6, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D6, ${nerd6} + ${f} = ${final6}`
        var man7 = `Dado rolado: D6, ${nerd7} + ${f} = ${final7}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + (f * 7);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7
        var proftotal = f * 7;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6}\n ${man7}\n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        c7.innerHTML = man7
        h.innerHTML = total
    }else if (a == "d6" && g == "8"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random7 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random8 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        
        var nerd = random(1, 7);
        var nerd2 = random2(1, 7);
        var nerd3 = random3(1, 7);
        var nerd4 = random4(1, 7);
        var nerd5 = random5(1, 7);
        var nerd6 = random6(1, 7);
        var nerd7 = random7(1, 7);
        var nerd8 = random8(1, 7);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f
        var final7 = nerd7 + f
        var final8 = nerd8 + f

        var man = `Dado rolado: D6, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D6, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D6, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D6, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D6, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D6, ${nerd6} + ${f} = ${final6}`
        var man7 = `Dado rolado: D6, ${nerd7} + ${f} = ${final7}`
        var man8 = `Dado rolado: D6, ${nerd8} + ${f} = ${final8}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + (f * 8);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8
        var proftotal = f * 8;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6}\n ${man7}\n ${man8}\n ${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        c7.innerHTML = man7
        c8.innerHTML = man8
        h.innerHTML = total
    }else if (a == "d6" && g == "9"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random7 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random8 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random9 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        
        var nerd = random(1, 7);
        var nerd2 = random2(1, 7);
        var nerd3 = random3(1, 7);
        var nerd4 = random4(1, 7);
        var nerd5 = random5(1, 7);
        var nerd6 = random6(1, 7);
        var nerd7 = random7(1, 7);
        var nerd8 = random8(1, 7);
        var nerd9 = random9(1, 7);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f
        var final7 = nerd7 + f
        var final8 = nerd8 + f
        var final9 = nerd9 + f

        var man = `Dado rolado: D6, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D6, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D6, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D6, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D6, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D6, ${nerd6} + ${f} = ${final6}`
        var man7 = `Dado rolado: D6, ${nerd7} + ${f} = ${final7}`
        var man8 = `Dado rolado: D6, ${nerd8} + ${f} = ${final8}`
        var man9 = `Dado rolado: D6, ${nerd9} + ${f} = ${final9}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + nerd9 + (f * 9);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + nerd9
        var proftotal = f * 9;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6}\n ${man7}\n ${man8}\n ${man9}\n ${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        c7.innerHTML = man7
        c8.innerHTML = man8
        c9.innerHTML = man9
        h.innerHTML = total
    }else if (a == "d6" && g == "10"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random7 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random8 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random9 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random10 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        
        var nerd = random(1, 7);
        var nerd2 = random2(1, 7);
        var nerd3 = random3(1, 7);
        var nerd4 = random4(1, 7);
        var nerd5 = random5(1, 7);
        var nerd6 = random6(1, 7);
        var nerd7 = random7(1, 7);
        var nerd8 = random8(1, 7);
        var nerd9 = random9(1, 7);
        var nerd10 = random10(1, 7);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f
        var final7 = nerd7 + f
        var final8 = nerd8 + f
        var final9 = nerd9 + f
        var final10 = nerd9 + f

        var man = `Dado rolado: D6, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D6, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D6, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D6, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D6, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D6, ${nerd6} + ${f} = ${final6}`
        var man7 = `Dado rolado: D6, ${nerd7} + ${f} = ${final7}`
        var man8 = `Dado rolado: D6, ${nerd8} + ${f} = ${final8}`
        var man9 = `Dado rolado: D6, ${nerd9} + ${f} = ${final9}`
        var man10 = `Dado rolado: D6, ${nerd10} + ${f} = ${final10}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + nerd9 + nerd10 + (f * 10);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + nerd9 + nerd10
        var proftotal = f * 10;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6} \n${man7} \n${man8} \n${man9} \n${man10} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        c7.innerHTML = man7
        c8.innerHTML = man8
        c9.innerHTML = man9
        c10.innerHTML = man10
        h.innerHTML = total
    }
    if (a == "d8" && g == "1") {
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

        var nerd = random(1, 9);

        var final = nerd + f

        var man = `Dado rolado: D8, ${nerd} + ${f} = ${final}`

        var rsfinal = nerd + (f * 1);
        var rollfinal = nerd
        var proftotal = f * 1;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`
        var man = `Dado rolado: D8, ${nerd} + ${f} = ${final}`


        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        h.innerHTML = total
    }else if (a == "d8" && g == "2"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;

        var nerd = random(1, 9);
        var nerd2 = random2(1, 9);

        var final = nerd + f
        var final2 = nerd2 + f

        var man = `Dado rolado: D8, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D8, ${nerd2} + ${f} = ${final2}`

        var rsfinal = nerd + nerd2 + (f * 2);
        var rollfinal = nerd + nerd2
        var proftotal = f * 2;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        h.innerHTML = total
    }else if (a == "d8" && g == "3"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        

        var nerd = random(1, 9);
        var nerd2 = random2(1, 9);
        var nerd3 = random3(1, 9);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f

        var man = `Dado rolado: D8, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D8, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D8, ${nerd3} + ${f} = ${final3}`

        var rsfinal = nerd + nerd2 + nerd3 + (f * 3);
        var rollfinal = nerd + nerd2 + nerd3
        var proftotal = f * 3;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c3.innerHTML = man3
        h.innerHTML = total
    }else if (a == "d8" && g == "4"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        

        var nerd = random(1, 9);
        var nerd2 = random2(1, 9);
        var nerd3 = random3(1, 9);
        var nerd4 = random4(1, 9);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f

        var man = `Dado rolado: D8, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D8, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D8, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D8, ${nerd4} + ${f} = ${final4}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + (f * 4);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4
        var proftotal = f * 4;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        h.innerHTML = total
    }else if (a == "d8" && g == "5"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        

        var nerd = random(1, 9);
        var nerd2 = random2(1, 9);
        var nerd3 = random3(1, 9);
        var nerd4 = random4(1, 9);
        var nerd5 = random5(1, 9);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f

        var man = `Dado rolado: D8, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D8, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D8, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D8, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D8, ${nerd5} + ${f} = ${final5}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + (f * 5);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5
        var proftotal = f * 5;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        h.innerHTML = total
    }else if (a == "d8" && g == "6"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;

        var nerd = random(1, 9);
        var nerd2 = random2(1, 9);
        var nerd3 = random3(1, 9);
        var nerd4 = random4(1, 9);
        var nerd5 = random5(1, 9);
        var nerd6 = random6(1, 9);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f

        var man = `Dado rolado: D8, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D8, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D8, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D8, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D8, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D8, ${nerd6} + ${f} = ${final6}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + (f * 6);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6
        var proftotal = f * 6;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        h.innerHTML = total
    }else if (a == "d8" && g == "7"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random7 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        
        var nerd = random(1, 9);
        var nerd2 = random2(1, 9);
        var nerd3 = random3(1, 9);
        var nerd4 = random4(1, 9);
        var nerd5 = random5(1, 9);
        var nerd6 = random6(1, 9);
        var nerd7 = random7(1, 9);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f
        var final7 = nerd7 + f

        var man = `Dado rolado: D8, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D8, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D8, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D8, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D8, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D8, ${nerd6} + ${f} = ${final6}`
        var man7 = `Dado rolado: D8, ${nerd7} + ${f} = ${final7}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + (f * 7);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7
        var proftotal = f * 7;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6}\n ${man7}\n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        c7.innerHTML = man7
        h.innerHTML = total
    }else if (a == "d8" && g == "8"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random7 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random8 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        
        var nerd = random(1, 9);
        var nerd2 = random2(1, 9);
        var nerd3 = random3(1, 9);
        var nerd4 = random4(1, 9);
        var nerd5 = random5(1, 9);
        var nerd6 = random6(1, 9);
        var nerd7 = random7(1, 9);
        var nerd8 = random8(1, 9);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f
        var final7 = nerd7 + f
        var final8 = nerd8 + f

        var man = `Dado rolado: D8, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D8, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D8, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D8, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D8, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D8, ${nerd6} + ${f} = ${final6}`
        var man7 = `Dado rolado: D8, ${nerd7} + ${f} = ${final7}`
        var man8 = `Dado rolado: D8, ${nerd8} + ${f} = ${final8}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + (f * 8);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8
        var proftotal = f * 8;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6}\n ${man7}\n ${man8}\n ${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        c7.innerHTML = man7
        c8.innerHTML = man8
        h.innerHTML = total
    }else if (a == "d8" && g == "9"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random7 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random8 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random9 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        
        var nerd = random(1, 9);
        var nerd2 = random2(1, 9);
        var nerd3 = random3(1, 9);
        var nerd4 = random4(1, 9);
        var nerd5 = random5(1, 9);
        var nerd6 = random6(1, 9);
        var nerd7 = random7(1, 9);
        var nerd8 = random8(1, 9);
        var nerd9 = random9(1, 9);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f
        var final7 = nerd7 + f
        var final8 = nerd8 + f
        var final9 = nerd9 + f

        var man = `Dado rolado: D8, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D8, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D8, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D8, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D8, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D8, ${nerd6} + ${f} = ${final6}`
        var man7 = `Dado rolado: D8, ${nerd7} + ${f} = ${final7}`
        var man8 = `Dado rolado: D8, ${nerd8} + ${f} = ${final8}`
        var man9 = `Dado rolado: D8, ${nerd9} + ${f} = ${final9}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + nerd9 + (f * 9);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + nerd9
        var proftotal = f * 9;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6}\n ${man7}\n ${man8}\n ${man9}\n ${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        c7.innerHTML = man7
        c8.innerHTML = man8
        c9.innerHTML = man9
        h.innerHTML = total
    }else if (a == "d8" && g == "10"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random7 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random8 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random9 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random10 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        
        var nerd = random(1, 9);
        var nerd2 = random2(1, 9);
        var nerd3 = random3(1, 9);
        var nerd4 = random4(1, 9);
        var nerd5 = random5(1, 9);
        var nerd6 = random6(1, 9);
        var nerd7 = random7(1, 9);
        var nerd8 = random8(1, 9);
        var nerd9 = random9(1, 9);
        var nerd10 = random10(1, 9);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f
        var final7 = nerd7 + f
        var final8 = nerd8 + f
        var final9 = nerd9 + f
        var final10 = nerd9 + f

        var man = `Dado rolado: D8, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D8, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D8, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D8, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D8, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D8, ${nerd6} + ${f} = ${final6}`
        var man7 = `Dado rolado: D8, ${nerd7} + ${f} = ${final7}`
        var man8 = `Dado rolado: D8, ${nerd8} + ${f} = ${final8}`
        var man9 = `Dado rolado: D8, ${nerd9} + ${f} = ${final9}`
        var man10 = `Dado rolado: D8, ${nerd10} + ${f} = ${final10}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + nerd9 + nerd10 + (f * 10);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + nerd9 + nerd10
        var proftotal = f * 10;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6} \n${man7} \n${man8} \n${man9} \n${man10} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        c7.innerHTML = man7
        c8.innerHTML = man8
        c9.innerHTML = man9
        c10.innerHTML = man10
        h.innerHTML = total
    }
    if (a == "d10" && g == "1") {
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

        var nerd = random(1, 11);

        var final = nerd + f

        var man = `Dado rolado: D10, ${nerd} + ${f} = ${final}`

        var rsfinal = nerd + (f * 1);
        var rollfinal = nerd
        var proftotal = f * 1;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        var man = `Dado rolado: D10, ${nerd} + ${f} = ${final}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        h.innerHTML = total
    }else if (a == "d10" && g == "2"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;

        var nerd = random(1, 11);
        var nerd2 = random2(1, 11);

        var final = nerd + f
        var final2 = nerd2 + f

        var man = `Dado rolado: D10, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D10, ${nerd2} + ${f} = ${final2}`

        var rsfinal = nerd + nerd2 + (f * 2);
        var rollfinal = nerd + nerd2
        var proftotal = f * 2;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        h.innerHTML = total
    }else if (a == "d10" && g == "3"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        

        var nerd = random(1, 11);
        var nerd2 = random2(1, 11);
        var nerd3 = random3(1, 11);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f

        var man = `Dado rolado: D10, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D10, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D10, ${nerd3} + ${f} = ${final3}`

        var rsfinal = nerd + nerd2 + nerd3 + (f * 3);
        var rollfinal = nerd + nerd2 + nerd3
        var proftotal = f * 3;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c3.innerHTML = man3
        h.innerHTML = total
    }else if (a == "d10" && g == "4"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        

        var nerd = random(1, 11);
        var nerd2 = random2(1, 11);
        var nerd3 = random3(1, 11);
        var nerd4 = random4(1, 11);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f

        var man = `Dado rolado: D10, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D10, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D10, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D10, ${nerd4} + ${f} = ${final4}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + (f * 4);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4
        var proftotal = f * 4;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        h.innerHTML = total
    }else if (a == "d10" && g == "5"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        

        var nerd = random(1, 11);
        var nerd2 = random2(1, 11);
        var nerd3 = random3(1, 11);
        var nerd4 = random4(1, 11);
        var nerd5 = random5(1, 11);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f

        var man = `Dado rolado: D10, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D10, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D10, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D10, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D10, ${nerd5} + ${f} = ${final5}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + (f * 5);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5
        var proftotal = f * 5;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        h.innerHTML = total
    }else if (a == "d10" && g == "6"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;

        var nerd = random(1, 11);
        var nerd2 = random2(1, 11);
        var nerd3 = random3(1, 11);
        var nerd4 = random4(1, 11);
        var nerd5 = random5(1, 11);
        var nerd6 = random6(1, 11);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f

        var man = `Dado rolado: D10, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D10, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D10, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D10, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D10, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D10, ${nerd6} + ${f} = ${final6}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + (f * 6);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6
        var proftotal = f * 6;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        h.innerHTML = total
    }else if (a == "d10" && g == "7"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random7 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        
        var nerd = random(1, 11);
        var nerd2 = random2(1, 11);
        var nerd3 = random3(1, 11);
        var nerd4 = random4(1, 11);
        var nerd5 = random5(1, 11);
        var nerd6 = random6(1, 11);
        var nerd7 = random7(1, 11);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f
        var final7 = nerd7 + f

        var man = `Dado rolado: D10, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D10, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D10, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D10, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D10, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D10, ${nerd6} + ${f} = ${final6}`
        var man7 = `Dado rolado: D10, ${nerd7} + ${f} = ${final7}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + (f * 7);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7
        var proftotal = f * 7;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6}\n ${man7}\n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        c7.innerHTML = man7
        h.innerHTML = total
    }else if (a == "d10" && g == "8"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random7 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random8 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        
        var nerd = random(1, 11);
        var nerd2 = random2(1, 11);
        var nerd3 = random3(1, 11);
        var nerd4 = random4(1, 11);
        var nerd5 = random5(1, 11);
        var nerd6 = random6(1, 11);
        var nerd7 = random7(1, 11);
        var nerd8 = random8(1, 11);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f
        var final7 = nerd7 + f
        var final8 = nerd8 + f

        var man = `Dado rolado: D10, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D10, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D10, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D10, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D10, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D10, ${nerd6} + ${f} = ${final6}`
        var man7 = `Dado rolado: D10, ${nerd7} + ${f} = ${final7}`
        var man8 = `Dado rolado: D10, ${nerd8} + ${f} = ${final8}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + (f * 8);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8
        var proftotal = f * 8;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6}\n ${man7}\n ${man8}\n ${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        c7.innerHTML = man7
        c8.innerHTML = man8
        h.innerHTML = total
    }else if (a == "d10" && g == "9"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random7 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random8 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random9 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        
        var nerd = random(1, 11);
        var nerd2 = random2(1, 11);
        var nerd3 = random3(1, 11);
        var nerd4 = random4(1, 11);
        var nerd5 = random5(1, 11);
        var nerd6 = random6(1, 11);
        var nerd7 = random7(1, 11);
        var nerd8 = random8(1, 11);
        var nerd9 = random9(1, 11);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f
        var final7 = nerd7 + f
        var final8 = nerd8 + f
        var final9 = nerd9 + f

        var man = `Dado rolado: D10, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D10, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D10, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D10, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D10, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D10, ${nerd6} + ${f} = ${final6}`
        var man7 = `Dado rolado: D10, ${nerd7} + ${f} = ${final7}`
        var man8 = `Dado rolado: D10, ${nerd8} + ${f} = ${final8}`
        var man9 = `Dado rolado: D10, ${nerd9} + ${f} = ${final9}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + nerd9 + (f * 9);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + nerd9
        var proftotal = f * 9;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6}\n ${man7}\n ${man8}\n ${man9}\n ${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        c7.innerHTML = man7
        c8.innerHTML = man8
        c9.innerHTML = man9
        h.innerHTML = total
    }else if (a == "d10" && g == "10"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random7 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random8 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random9 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random10 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        
        var nerd = random(1, 11);
        var nerd2 = random2(1, 11);
        var nerd3 = random3(1, 11);
        var nerd4 = random4(1, 11);
        var nerd5 = random5(1, 11);
        var nerd6 = random6(1, 11);
        var nerd7 = random7(1, 11);
        var nerd8 = random8(1, 11);
        var nerd9 = random9(1, 11);
        var nerd10 = random10(1, 11);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f
        var final7 = nerd7 + f
        var final8 = nerd8 + f
        var final9 = nerd9 + f
        var final10 = nerd9 + f

        var man = `Dado rolado: D10, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D10, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D10, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D10, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D10, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D10, ${nerd6} + ${f} = ${final6}`
        var man7 = `Dado rolado: D10, ${nerd7} + ${f} = ${final7}`
        var man8 = `Dado rolado: D10, ${nerd8} + ${f} = ${final8}`
        var man9 = `Dado rolado: D10, ${nerd9} + ${f} = ${final9}`
        var man10 = `Dado rolado: D10, ${nerd10} + ${f} = ${final10}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + nerd9 + nerd10 + (f * 10);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + nerd9 + nerd10
        var proftotal = f * 10;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6} \n${man7} \n${man8} \n${man9} \n${man10} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        c7.innerHTML = man7
        c8.innerHTML = man8
        c9.innerHTML = man9
        c10.innerHTML = man10
        h.innerHTML = total
    }
    if (a == "d12" && g == "1") {
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

        var nerd = random(1, 13);

        var final = nerd + f

        var man = `Dado rolado: D12, ${nerd} + ${f} = ${final}`

        var rsfinal = nerd + (f * 1);
        var rollfinal = nerd
        var proftotal = f * 1;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`
        var man = `Dado rolado: D12, ${nerd} + ${f} = ${final}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        h.innerHTML = total
    }else if (a == "d12" && g == "2"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;

        var nerd = random(1, 13);
        var nerd2 = random2(1, 13);

        var final = nerd + f
        var final2 = nerd2 + f

        var man = `Dado rolado: D12, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D12, ${nerd2} + ${f} = ${final2}`

        var rsfinal = nerd + nerd2 + (f * 2);
        var rollfinal = nerd + nerd2
        var proftotal = f * 2;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        h.innerHTML = total
    }else if (a == "d12" && g == "3"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        

        var nerd = random(1, 13);
        var nerd2 = random2(1, 13);
        var nerd3 = random3(1, 13);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f

        var man = `Dado rolado: D12, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D12, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D12, ${nerd3} + ${f} = ${final3}`

        var rsfinal = nerd + nerd2 + nerd3 + (f * 3);
        var rollfinal = nerd + nerd2 + nerd3
        var proftotal = f * 3;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c3.innerHTML = man3
        h.innerHTML = total
    }else if (a == "d12" && g == "4"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        

        var nerd = random(1, 13);
        var nerd2 = random2(1, 13);
        var nerd3 = random3(1, 13);
        var nerd4 = random4(1, 13);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f

        var man = `Dado rolado: D12, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D12, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D12, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D12, ${nerd4} + ${f} = ${final4}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + (f * 4);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4
        var proftotal = f * 4;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        h.innerHTML = total
    }else if (a == "d12" && g == "5"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        

        var nerd = random(1, 13);
        var nerd2 = random2(1, 13);
        var nerd3 = random3(1, 13);
        var nerd4 = random4(1, 13);
        var nerd5 = random5(1, 13);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f

        var man = `Dado rolado: D12, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D12, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D12, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D12, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D12, ${nerd5} + ${f} = ${final5}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + (f * 5);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5
        var proftotal = f * 5;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        h.innerHTML = total
    }else if (a == "d12" && g == "6"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;

        var nerd = random(1, 13);
        var nerd2 = random2(1, 13);
        var nerd3 = random3(1, 13);
        var nerd4 = random4(1, 13);
        var nerd5 = random5(1, 13);
        var nerd6 = random6(1, 13);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f

        var man = `Dado rolado: D12, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D12, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D12, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D12, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D12, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D12, ${nerd6} + ${f} = ${final6}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + (f * 6);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6
        var proftotal = f * 6;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        h.innerHTML = total
    }else if (a == "d12" && g == "7"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random7 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        
        var nerd = random(1, 13);
        var nerd2 = random2(1, 13);
        var nerd3 = random3(1, 13);
        var nerd4 = random4(1, 13);
        var nerd5 = random5(1, 13);
        var nerd6 = random6(1, 13);
        var nerd7 = random7(1, 13);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f
        var final7 = nerd7 + f

        var man = `Dado rolado: D12, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D12, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D12, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D12, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D12, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D12, ${nerd6} + ${f} = ${final6}`
        var man7 = `Dado rolado: D12, ${nerd7} + ${f} = ${final7}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + (f * 7);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7
        var proftotal = f * 7;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6}\n ${man7}\n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        c7.innerHTML = man7
        h.innerHTML = total
    }else if (a == "d12" && g == "8"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random7 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random8 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        
        var nerd = random(1, 13);
        var nerd2 = random2(1, 13);
        var nerd3 = random3(1, 13);
        var nerd4 = random4(1, 13);
        var nerd5 = random5(1, 13);
        var nerd6 = random6(1, 13);
        var nerd7 = random7(1, 13);
        var nerd8 = random8(1, 13);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f
        var final7 = nerd7 + f
        var final8 = nerd8 + f

        var man = `Dado rolado: D12, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D12, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D12, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D12, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D12, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D12, ${nerd6} + ${f} = ${final6}`
        var man7 = `Dado rolado: D12, ${nerd7} + ${f} = ${final7}`
        var man8 = `Dado rolado: D12, ${nerd8} + ${f} = ${final8}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + (f * 8);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8
        var proftotal = f * 8;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6}\n ${man7}\n ${man8}\n ${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        c7.innerHTML = man7
        c8.innerHTML = man8
        h.innerHTML = total
    }else if (a == "d12" && g == "9"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random7 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random8 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random9 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        
        var nerd = random(1, 13);
        var nerd2 = random2(1, 13);
        var nerd3 = random3(1, 13);
        var nerd4 = random4(1, 13);
        var nerd5 = random5(1, 13);
        var nerd6 = random6(1, 13);
        var nerd7 = random7(1, 13);
        var nerd8 = random8(1, 13);
        var nerd9 = random9(1, 13);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f
        var final7 = nerd7 + f
        var final8 = nerd8 + f
        var final9 = nerd9 + f

        var man = `Dado rolado: D12, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D12, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D12, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D12, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D12, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D12, ${nerd6} + ${f} = ${final6}`
        var man7 = `Dado rolado: D12, ${nerd7} + ${f} = ${final7}`
        var man8 = `Dado rolado: D12, ${nerd8} + ${f} = ${final8}`
        var man9 = `Dado rolado: D12, ${nerd9} + ${f} = ${final9}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + nerd9 + (f * 9);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + nerd9
        var proftotal = f * 9;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6}\n ${man7}\n ${man8}\n ${man9}\n ${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        c7.innerHTML = man7
        c8.innerHTML = man8
        c9.innerHTML = man9
        h.innerHTML = total
    }else if (a == "d12" && g == "10"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random7 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random8 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random9 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random10 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        
        var nerd = random(1, 13);
        var nerd2 = random2(1, 13);
        var nerd3 = random3(1, 13);
        var nerd4 = random4(1, 13);
        var nerd5 = random5(1, 13);
        var nerd6 = random6(1, 13);
        var nerd7 = random7(1, 13);
        var nerd8 = random8(1, 13);
        var nerd9 = random9(1, 13);
        var nerd10 = random10(1, 13);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f
        var final7 = nerd7 + f
        var final8 = nerd8 + f
        var final9 = nerd9 + f
        var final10 = nerd9 + f

        var man = `Dado rolado: D12, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D12, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D12, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D12, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D12, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D12, ${nerd6} + ${f} = ${final6}`
        var man7 = `Dado rolado: D12, ${nerd7} + ${f} = ${final7}`
        var man8 = `Dado rolado: D12, ${nerd8} + ${f} = ${final8}`
        var man9 = `Dado rolado: D12, ${nerd9} + ${f} = ${final9}`
        var man10 = `Dado rolado: D12, ${nerd10} + ${f} = ${final10}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + nerd9 + nerd10 + (f * 10);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + nerd9 + nerd10
        var proftotal = f * 10;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6} \n${man7} \n${man8} \n${man9} \n${man10} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        c7.innerHTML = man7
        c8.innerHTML = man8
        c9.innerHTML = man9
        c10.innerHTML = man10
        h.innerHTML = total
    }
    if (a == "d20" && g == "1") {
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

        var nerd = random(1, 21);

        var final = nerd + f

        var man = `Dado rolado: D20, ${nerd} + ${f} = ${final}`

        var rsfinal = nerd + (f * 1);
        var rollfinal = nerd
        var proftotal = f * 1;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`
        var man = `Dado rolado: D20, ${nerd} + ${f} = ${final}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        h.innerHTML = total
    }else if (a == "d20" && g == "2"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;

        var nerd = random(1, 21);
        var nerd2 = random2(1, 21);

        var final = nerd + f

        var final2 = nerd2 + f

        var man = `Dado rolado: D20, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D20, ${nerd2} + ${f} = ${final2}`

        var rsfinal = nerd + nerd2 + (f * 2);
        var rollfinal = nerd + nerd2
        var proftotal = f * 2;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`
        var man = `Dado rolado: D100, ${nerd} + ${f} = ${final}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        h.innerHTML = total
    }else if (a == "d20" && g == "3"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        

        var nerd = random(1, 21);
        var nerd2 = random2(1, 21);
        var nerd3 = random3(1, 21);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f

        var man = `Dado rolado: D20, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D20, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D20, ${nerd3} + ${f} = ${final3}`

        var rsfinal = nerd + nerd2 + nerd3 + (f * 3);
        var rollfinal = nerd + nerd2 + nerd3
        var proftotal = f * 3;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c3.innerHTML = man3
        h.innerHTML = total
    }else if (a == "d20" && g == "4"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        

        var nerd = random(1, 21);
        var nerd2 = random2(1, 21);
        var nerd3 = random3(1, 21);
        var nerd4 = random4(1, 21);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f

        var man = `Dado rolado: D20, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D20, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D20, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D20, ${nerd4} + ${f} = ${final4}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + (f * 4);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4
        var proftotal = f * 4;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        h.innerHTML = total
    }else if (a == "d20" && g == "5"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        

        var nerd = random(1, 7);
        var nerd2 = random2(1, 7);
        var nerd3 = random3(1, 7);
        var nerd4 = random4(1, 7);
        var nerd5 = random5(1, 7);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f

        var man = `Dado rolado: D20, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D20, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D20, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D20, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D20, ${nerd5} + ${f} = ${final5}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + (f * 5);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5
        var proftotal = f * 5;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        h.innerHTML = total
    }else if (a == "d20" && g == "6"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;

        var nerd = random(1, 21);
        var nerd2 = random2(1, 21);
        var nerd3 = random3(1, 21);
        var nerd4 = random4(1, 21);
        var nerd5 = random5(1, 21);
        var nerd6 = random6(1, 21);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f

        var man = `Dado rolado: D20, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D20, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D20, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D20, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D20, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D20, ${nerd6} + ${f} = ${final6}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + (f * 6);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6
        var proftotal = f * 6;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        h.innerHTML = total
    }else if (a == "d20" && g == "7"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random7 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        
        var nerd = random(1, 21);
        var nerd2 = random2(1, 21);
        var nerd3 = random3(1, 21);
        var nerd4 = random4(1, 21);
        var nerd5 = random5(1, 21);
        var nerd6 = random6(1, 21);
        var nerd7 = random7(1, 21);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f
        var final7 = nerd7 + f

        var man = `Dado rolado: D20, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D20, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D20, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D20, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D20, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D20, ${nerd6} + ${f} = ${final6}`
        var man7 = `Dado rolado: D20, ${nerd7} + ${f} = ${final7}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + (f * 7);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7
        var proftotal = f * 7;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6}\n ${man7}\n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        c7.innerHTML = man7
        h.innerHTML = total
    }else if (a == "d20" && g == "8"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random7 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random8 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        
        var nerd = random(1, 21);
        var nerd2 = random2(1, 21);
        var nerd3 = random3(1, 21);
        var nerd4 = random4(1, 21);
        var nerd5 = random5(1, 21);
        var nerd6 = random6(1, 21);
        var nerd7 = random7(1, 21);
        var nerd8 = random8(1, 21);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f
        var final7 = nerd7 + f
        var final8 = nerd8 + f

        var man = `Dado rolado: D20, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D20, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D20, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D20, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D20, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D20, ${nerd6} + ${f} = ${final6}`
        var man7 = `Dado rolado: D20, ${nerd7} + ${f} = ${final7}`
        var man8 = `Dado rolado: D20, ${nerd8} + ${f} = ${final8}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + (f * 8);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8
        var proftotal = f * 8;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6}\n ${man7}\n ${man8}\n ${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        c7.innerHTML = man7
        c8.innerHTML = man8
        h.innerHTML = total
    }else if (a == "d20" && g == "9"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random7 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random8 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random9 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        
        var nerd = random(1, 21);
        var nerd2 = random2(1, 21);
        var nerd3 = random3(1, 21);
        var nerd4 = random4(1, 21);
        var nerd5 = random5(1, 21);
        var nerd6 = random6(1, 21);
        var nerd7 = random7(1, 21);
        var nerd8 = random8(1, 21);
        var nerd9 = random9(1, 21);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f
        var final7 = nerd7 + f
        var final8 = nerd8 + f
        var final9 = nerd9 + f

        var man = `Dado rolado: D20, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D20, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D20, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D20, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D20, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D20, ${nerd6} + ${f} = ${final6}`
        var man7 = `Dado rolado: D20, ${nerd7} + ${f} = ${final7}`
        var man8 = `Dado rolado: D20, ${nerd8} + ${f} = ${final8}`
        var man9 = `Dado rolado: D20, ${nerd9} + ${f} = ${final9}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + nerd9 + (f * 9);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + nerd9
        var proftotal = f * 9;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6}\n ${man7}\n ${man8}\n ${man9}\n ${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        c7.innerHTML = man7
        c8.innerHTML = man8
        c9.innerHTML = man9
        h.innerHTML = total
    }else if (a == "d20" && g == "10"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random7 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random8 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random9 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random10 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        
        var nerd = random(1, 21);
        var nerd2 = random2(1, 21);
        var nerd3 = random3(1, 21);
        var nerd4 = random4(1, 21);
        var nerd5 = random5(1, 21);
        var nerd6 = random6(1, 21);
        var nerd7 = random7(1, 21);
        var nerd8 = random8(1, 21);
        var nerd9 = random9(1, 21);
        var nerd10 = random10(1, 21);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f
        var final7 = nerd7 + f
        var final8 = nerd8 + f
        var final9 = nerd9 + f
        var final10 = nerd9 + f

        var man = `Dado rolado: D20, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D20, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D20, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D20, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D20, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D20, ${nerd6} + ${f} = ${final6}`
        var man7 = `Dado rolado: D20, ${nerd7} + ${f} = ${final7}`
        var man8 = `Dado rolado: D20, ${nerd8} + ${f} = ${final8}`
        var man9 = `Dado rolado: D20, ${nerd9} + ${f} = ${final9}`
        var man10 = `Dado rolado: D20, ${nerd10} + ${f} = ${final10}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + nerd9 + nerd10 + (f * 10);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + nerd9 + nerd10
        var proftotal = f * 10;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6} \n${man7} \n${man8} \n${man9} \n${man10} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        c7.innerHTML = man7
        c8.innerHTML = man8
        c9.innerHTML = man9
        c10.innerHTML = man10
        h.innerHTML = total
    }
    if (a == "d100" && g == "1") {
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

        var nerd = random(1, 101);

        var final = nerd + f

        var man = `Dado rolado: D100, ${nerd} + ${f} = ${final}`

        var rsfinal = nerd + (f * 1);
        var rollfinal = nerd
        var proftotal = f * 1;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        h.innerHTML = total
    }else if (a == "d100" && g == "2"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;

        var nerd = random(1, 101);
        var nerd2 = random2(1, 101);

        var final = nerd + f
        var final2 = nerd2 + f

        var man = `Dado rolado: D100, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D100, ${nerd2} + ${f} = ${final2}`

        var rsfinal = nerd + nerd2 + (f * 2);
        var rollfinal = nerd + nerd2
        var proftotal = f * 2;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        h.innerHTML = total
    }else if (a == "d100" && g == "3"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        

        var nerd = random(1, 101);
        var nerd2 = random2(1, 101);
        var nerd3 = random3(1, 101);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f

        var man = `Dado rolado: D100, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D100, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D100, ${nerd3} + ${f} = ${final3}`

        var rsfinal = nerd + nerd2 + nerd3 + (f * 3);
        var rollfinal = nerd + nerd2 + nerd3
        var proftotal = f * 3;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c3.innerHTML = man3
        h.innerHTML = total
    }else if (a == "d100" && g == "4"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        

        var nerd = random(1, 7101);
        var nerd2 = random2(1, 101);
        var nerd3 = random3(1, 101);
        var nerd4 = random4(1, 101);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f

        var man = `Dado rolado: D100, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D100, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D100, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D100, ${nerd4} + ${f} = ${final4}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + (f * 4);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4
        var proftotal = f * 4;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        h.innerHTML = total
    }else if (a == "d100" && g == "5"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        

        var nerd = random(1, 101);
        var nerd2 = random2(1, 101);
        var nerd3 = random3(1, 101);
        var nerd4 = random4(1, 101);
        var nerd5 = random5(1, 101);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f

        var man = `Dado rolado: D100, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D100, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D100, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D100, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D100, ${nerd5} + ${f} = ${final5}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + (f * 5);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5
        var proftotal = f * 5;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        h.innerHTML = total
    }else if (a == "d100" && g == "6"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;

        var nerd = random(1, 101);
        var nerd2 = random2(1, 101);
        var nerd3 = random3(1, 101);
        var nerd4 = random4(1, 101);
        var nerd5 = random5(1, 101);
        var nerd6 = random6(1, 101);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f

        var man = `Dado rolado: D100, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D100, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D100, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D100, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D100, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D100, ${nerd6} + ${f} = ${final6}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + (f * 6);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6
        var proftotal = f * 6;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        h.innerHTML = total
    }else if (a == "d100" && g == "7"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random7 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        
        var nerd = random(1, 101);
        var nerd2 = random2(1, 101);
        var nerd3 = random3(1, 101);
        var nerd4 = random4(1, 101);
        var nerd5 = random5(1, 101);
        var nerd6 = random6(1, 101);
        var nerd7 = random7(1, 101);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f
        var final7 = nerd7 + f

        var man = `Dado rolado: D100, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D100, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D100, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D100, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D100, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D100, ${nerd6} + ${f} = ${final6}`
        var man7 = `Dado rolado: D100, ${nerd7} + ${f} = ${final7}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + (f * 7);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7
        var proftotal = f * 7;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6}\n ${man7}\n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        c7.innerHTML = man7
        h.innerHTML = total
    }else if (a == "100" && g == "8"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random7 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random8 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        
        var nerd = random(1, 101);
        var nerd2 = random2(1, 101);
        var nerd3 = random3(1, 101);
        var nerd4 = random4(1, 101);
        var nerd5 = random5(1, 101);
        var nerd6 = random6(1, 101);
        var nerd7 = random7(1, 101);
        var nerd8 = random8(1, 101);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f
        var final7 = nerd7 + f
        var final8 = nerd8 + f

        var man = `Dado rolado: D100, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D100, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D100, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D100, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D100, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D100, ${nerd6} + ${f} = ${final6}`
        var man7 = `Dado rolado: D100, ${nerd7} + ${f} = ${final7}`
        var man8 = `Dado rolado: D100, ${nerd8} + ${f} = ${final8}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + (f * 8);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8
        var proftotal = f * 8;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6}\n ${man7}\n ${man8}\n ${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        c7.innerHTML = man7
        c8.innerHTML = man8
        h.innerHTML = total
    }else if (a == "d100" && g == "9"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random7 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random8 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random9 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        
        var nerd = random(1, 101);
        var nerd2 = random2(1, 101);
        var nerd3 = random3(1, 101);
        var nerd4 = random4(1, 101);
        var nerd5 = random5(1, 101);
        var nerd6 = random6(1, 101);
        var nerd7 = random7(1, 101);
        var nerd8 = random8(1, 101);
        var nerd9 = random9(1, 101);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f
        var final7 = nerd7 + f
        var final8 = nerd8 + f
        var final9 = nerd9 + f

        var man = `Dado rolado: D100, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D100, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D100, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D100, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D100, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D100, ${nerd6} + ${f} = ${final6}`
        var man7 = `Dado rolado: D100, ${nerd7} + ${f} = ${final7}`
        var man8 = `Dado rolado: D100, ${nerd8} + ${f} = ${final8}`
        var man9 = `Dado rolado: D100, ${nerd9} + ${f} = ${final9}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + nerd9 + (f * 9);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + nerd9
        var proftotal = f * 9;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6}\n ${man7}\n ${man8}\n ${man9}\n ${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        c7.innerHTML = man7
        c8.innerHTML = man8
        c9.innerHTML = man9
        h.innerHTML = total
    }else if (a == "d100" && g == "10"){
        let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random2 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random3 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random4 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random5 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random6 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random7 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random8 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random9 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        let random10 = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        
        var nerd = random(1, 101);
        var nerd2 = random2(1, 101);
        var nerd3 = random3(1, 101);
        var nerd4 = random4(1, 101);
        var nerd5 = random5(1, 101);
        var nerd6 = random6(1, 101);
        var nerd7 = random7(1, 101);
        var nerd8 = random8(1, 101);
        var nerd9 = random9(1, 101);
        var nerd10 = random10(1, 101);

        var final = nerd + f
        var final2 = nerd2 + f
        var final3 = nerd3 + f
        var final4 = nerd4 + f
        var final5 = nerd5 + f
        var final6 = nerd6 + f
        var final7 = nerd7 + f
        var final8 = nerd8 + f
        var final9 = nerd9 + f
        var final10 = nerd9 + f

        var man = `Dado rolado: D100, ${nerd} + ${f} = ${final}`
        var man2 = `Dado rolado: D100, ${nerd2} + ${f} = ${final2}`
        var man3 = `Dado rolado: D100, ${nerd3} + ${f} = ${final3}`
        var man4 = `Dado rolado: D100, ${nerd4} + ${f} = ${final4}`
        var man5 = `Dado rolado: D100, ${nerd5} + ${f} = ${final5}`
        var man6 = `Dado rolado: D100, ${nerd6} + ${f} = ${final6}`
        var man7 = `Dado rolado: D100, ${nerd7} + ${f} = ${final7}`
        var man8 = `Dado rolado: D100, ${nerd8} + ${f} = ${final8}`
        var man9 = `Dado rolado: D100, ${nerd9} + ${f} = ${final9}`
        var man10 = `Dado rolado: D100, ${nerd10} + ${f} = ${final10}`

        var rsfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + nerd9 + nerd10 + (f * 10);
        var rollfinal = nerd + nerd2 + nerd3 + nerd4 + nerd5 + nerd6 + nerd7 + nerd8 + nerd9 + nerd10
        var proftotal = f * 10;
        var total = `Resultado total: ${rollfinal} + ${proftotal} = ${rsfinal}`

        const request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/962922784282009680/_eYSTCScrHl93KamMsv8W9ye0tyotHJNqr9Tzp0BBYW8Zz1tX3BnuMamMUthjHaNeoZq")
        request.setRequestHeader('Content-type', 'application/json');

        let params = {
            username: e,
            avatar_url: "",
            content: `${man} \n${man2} \n${man3} \n${man4} \n${man5} \n${man6} \n${man7} \n${man8} \n${man9} \n${man10} \n${total}`
        }
        request.send(JSON.stringify(params))

        c.innerHTML = man
        c2.innerHTML = man2
        c3.innerHTML = man3
        c4.innerHTML = man4
        c5.innerHTML = man5
        c6.innerHTML = man6
        c7.innerHTML = man7
        c8.innerHTML = man8
        c9.innerHTML = man9
        c10.innerHTML = man10
        h.innerHTML = total
    }
}
