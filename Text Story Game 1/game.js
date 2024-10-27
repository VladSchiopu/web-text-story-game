window.onload = function() {


    var iui;
    var juj;
    var iuii=4;
    
    
    function font(){
        
        var fontt = document.getElementById("play")
        fontt.style.fontSize = fontt.clientHeight+"px";
        
    }
    
    
    
    
    function sortend(iii,jjj,iuiu){
        
        
         var leftt = document.getElementById("e"+iii)
        leftt.style.left = 40+(iuiu)*60 + "px";
        
        var lefttt = document.getElementById("he"+iii)
        lefttt.style.left = 40+(iuiu)*60 + "px";
        
        
        var topp = document.getElementById("e"+iii)
        topp.style.top = 130+jjj*60 + "px";
        
        var toppp = document.getElementById("he"+iii)
        toppp.style.top = 130+jjj*60 + "px";
        
     
    }
    
    
    
    
    
    for(iui=1; iui<=18; iui++)
    {
        
        juj=Math.floor((iui-1)/5);
        
        iuii=(iui-1)%5;
        
        
        sortend (iui,juj,iuii);
        sortend (iui+18,juj,iuii);
        
    }
    
    
    for(iui=37; iui<=40; iui++)
    {
        
        juj=Math.floor((iui-37)/5);
        
        iuii=(iui-37)%5;
        
        
        sortend (iui,juj,iuii);
        
    }
    
    
    for(iui=41; iui<=48; iui++)
    {
        
        juj=Math.floor((iui-41)/5);
        
        iuii=(iui-41)%5;
        
        
        sortend (iui,juj,iuii);
        
    }
    
    
    
    
    
    }
    var x = "play"
    function play(){
        var play = document.getElementById("play")
        play.style.visibility = "hidden";
        var ends = document.getElementById("ends")
        ends.style.visibility = "hidden";
        var d = document.getElementById("start")
        d.style.visibility = "visible";
        
        var bak = document.getElementById("bak")
        bak.style.visibility = "visible";
        
        var menu = document.getElementById("menu")
        menu.style.visibility = "visible";
        
    }
    
    
    
    var noww=0;
    var thenn=0;
    
    
    
    
    function bad2n(){
    
        var accb1 = document.getElementById("accb1")
        accb1.style.visibility = "hidden"
        var accb2 = document.getElementById("accb2")
        accb2.style.visibility = "visible";
    
    }
    
    
    function bad1p(){
    
        var accb1 = document.getElementById("accb1")
        accb1.style.visibility = "visible"
        var accb2 = document.getElementById("accb2")
        accb2.style.visibility = "hidden";
    
    }
    
    
    function decentn(){
    
        var accb2 = document.getElementById("accb2")
        accb2.style.visibility = "hidden"
        var accd = document.getElementById("accd")
        accd.style.visibility = "visible";
    
    }
    
    
    function bad2p(){
    
        var accb2 = document.getElementById("accb2")
        accb2.style.visibility = "visible"
        var accd = document.getElementById("accd")
        accd.style.visibility = "hidden";
    
    }
    
    
    
    
    
    function goodn(){
    
        var accd = document.getElementById("accd")
        accd.style.visibility = "hidden"
        var accg = document.getElementById("accg")
        accg.style.visibility = "visible";
    
    }
    
    function decentp(){
    
        var accd = document.getElementById("accd")
        accd.style.visibility = "visible"
        var accg = document.getElementById("accg")
        accg.style.visibility = "hidden";
    
    }
    
    
    
    
    
    
    function layer(now,then){
    var now = document.getElementById(now)
     now.style.visibility = "hidden";
     noww=now;
       var then = document.getElementById(then)
        then.style.visibility = "visible";  
        thenn=then;  
    }
    
    
    function bak(){
       if(noww!=0)
       {
     noww.style.visibility = "visible";
     thenn.style.visibility = "hidden"; 
     }   
    }
    
    
    function menu(){
       if(noww==0)
       {
     var play = document.getElementById("play")
        play.style.visibility = "visible";
        
        var ends = document.getElementById("ends")
        ends.style.visibility = "visible";
     
     
     var bak = document.getElementById("bak")
        bak.style.visibility = "hidden";
        
        var menu = document.getElementById("menu")
        menu.style.visibility = "hidden";
        
        var start = document.getElementById("start")
        start.style.visibility = "hidden";
     
     }
     
     else{
         
         var play = document.getElementById("play")
        play.style.visibility = "visible";
        
        var ends = document.getElementById("ends")
        ends.style.visibility = "visible";
     
     
     var bak = document.getElementById("bak")
        bak.style.visibility = "hidden";
        
        var menu = document.getElementById("menu")
        menu.style.visibility = "hidden";
        
        thenn.style.visibility = "hidden";
         
         noww.style.visibility = "hidden";
         
        noww=0;
        thenn=0;
     }
     
     
     
    }
    
    
    
    
    function ma(){
    
    thenn.style.visibility = "hidden";
         
         noww.style.visibility = "hidden";
         
    var d = document.getElementById("start")
      d.style.visibility = "visible";
      
      noww=0;
      thenn=0;
    }
    
    
    
    function endings(){
        var sett = document.getElementById("sett")
        sett.style.visibility = "hidden"
        var play = document.getElementById("play")
        play.style.visibility = "hidden";
        var ends = document.getElementById("ends")
        ends.style.visibility = "hidden";
        var acc = document.getElementById("acc")
        acc.style.visibility = "visible";
        
        var accb1 = document.getElementById("accb1")
        accb1.style.visibility = "visible";
        
        
        
    }
    
    
    
    function back(){
          var sett = document.getElementById("sett")
        sett.style.visibility = "visible"
            var play = document.getElementById("play")
        play.style.visibility = "visible";
        var ends = document.getElementById("ends")
        ends.style.visibility = "visible";
        var acc = document.getElementById("acc")
        acc.style.visibility = "hidden";
        
        var accb2 = document.getElementById("accb2")
        accb2.style.visibility = "hidden";
        
        var accb1 = document.getElementById("accb1")
        accb1.style.visibility = "hidden";
        
        var accd = document.getElementById("accd")
        accd.style.visibility = "hidden";
        
        var accg = document.getElementById("accg")
        accg.style.visibility = "hidden";
        
        
    }
    
    
    
    function showend2(backgr,end){
        var de = document.getElementById(end)
        de.style.visibility = "visible";
        
        var ede = document.getElementById("e"+end)
        ede.style.visibility = "visible";
        
        var backgr = document.getElementById(backgr)
        backgr.style.opacity = "0.5";
        
    }
    
    
    
    function showend(backgr,end,he){ 
        var de = document.getElementById(end)
        de.style.visibility = "visible";
        
        var ede = document.getElementById("e"+end)
        ede.style.visibility = "visible";
        
        var backgr = document.getElementById(backgr)
        backgr.style.opacity = "0.5";
        
        var bak = document.getElementById("bak")
        bak.style.opacity = "0.5";
        
        var sett = document.getElementById("sett")
        sett.style.opacity = "0.5";
        
        var menu = document.getElementById("menu")
        menu.style.opacity = "0.5";
        
        var hehe = document.getElementById("e"+he)
        hehe.style.zIndex = "3";
        
    }
    
    
    
    function disend(backgr,end){ 
        var de = document.getElementById(end)
        de.style.visibility = "hidden";
        
        var ede = document.getElementById("e"+end)
        ede.style.visibility = "hidden";
        
        var backgr = document.getElementById(backgr)
        backgr.style.opacity = "1";
        
        var bak = document.getElementById("bak")
        bak.style.opacity = "1";
        
        var sett = document.getElementById("sett")
        sett.style.opacity = "1";
        
        var acc = document.getElementById("acc")
        acc.style.opacity = "1";
        
        
        var menu = document.getElementById("menu")
        menu.style.opacity = "1";
        
    }
    
    
    
    
    
    function sett(){
      document.getElementById("settings")
        settings.style.visibility = "visible";
    }   
    
    
    function oks(){
      document.getElementById("settings")
        settings.style.visibility = "hidden";
    }
    
    
    function rom(){
        var rom = document.getElementById("rom")
        rom.style.backgroundImage = "-webkit-linear-gradient(bottom,rgb(0,100,0), rgb(0,150,0))";
        var eng = document.getElementById("eng")
        eng.style.backgroundImage = "-webkit-linear-gradient(bottom,lightgray,lightgray)";
        
        var play = document.getElementById("play")
        play.innerHTML="Joacă"
        var ends = document.getElementById("ends")
        ends.innerHTML="Finaluri"
        var sett = document.getElementById("sett")
        sett.innerHTML="Setări"
        var stitle = document.getElementById("stitle")
        stitle.innerHTML="Setări"
        var lang = document.getElementById("lang")
        lang.innerHTML="Limbă:"
       colnames = ["Verde","Roșu","Galben","Portocaliu","Albastru","Gri"];
       var color= document.getElementById("color")
       color.innerHTML= colnames[num]
       var cf= document.getElementById("cf")
       cf.innerHTML= "Culoare de fundal:"
    }
    
    
    
    
    function eng(){
        var eng = document.getElementById("eng")
       eng.style.backgroundImage = "-webkit-linear-gradient(bottom,rgb(0,100,0), rgb(0,150,0))";
        var rom = document.getElementById("rom")
        rom.style.backgroundImage  = "-webkit-linear-gradient(bottom,lightgray, lightgray)";
        
        var play = document.getElementById("play")
        play.innerHTML="Play"
        var ends = document.getElementById("ends")
        ends.innerHTML="Endings"
        var sett = document.getElementById("sett")
        sett.innerHTML="Settings"
        var stitle = document.getElementById("stitle")
        stitle.innerHTML="Settings"
        var lang = document.getElementById("lang")
        lang.innerHTML="Language:"
        colnames = ["Green","Red","Yellow","Orange","Blue","Gray"];
       var color= document.getElementById("color")
       color.innerHTML= colnames[num]
       var cf= document.getElementById("cf")
       cf.innerHTML= "Background Color:"
    }
    
    
    
    
    var colors = ["lightgreen","rgb(255,150,150)","rgb(255,255,150)","orange","rgb(10,240,255)","rgb(210,210,210)"];
    
    
    
    var colnames = ["Green","Red","Yellow","Orange","Blue","Gray"]
    var num = 0;
    function next(){
        var body = document.getElementById("body")
        num++;
        if(num >= colors.length) {
            num = 0;
        }
        body.style.backgroundColor = colors[num];
        var settings = document.getElementById("settings")
        settings.style.backgroundColor = colors[num];
        var color = document.getElementById("color")
        color.innerHTML = colnames[num];
    }
    function prev() {
        var body = document.getElementById('body');
        num--;
        if(num < 0) {
            num = colors.length-1;
        }
        body.style.backgroundColor = colors[num];
        var settings = document.getElementById("settings")
        settings.style.backgroundColor = colors[num];
        var color = document.getElementById("color")
        color.innerHTML = colnames[num];
    }