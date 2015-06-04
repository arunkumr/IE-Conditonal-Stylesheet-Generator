var $inputCSS=$("#input");
var $outputCSS=$("#output");
var $process=$("#Process");

 //Regex Functions
 
    var readRegEx = function (str, re) {
        var resp = str.match(re);
        null !== resp && resp.shift();
        return resp;
    };

    var parseMQs = function (str) {
        return readRegEx(str, /(@media.(?!print)[^{]+\{[\s\S]+?}\s*})/g);
    };
    
    
    
    
    $process.click(function(){
     var mediaQueries = parseMQs($inputCSS.val());
     $outputCSS.val($(mediaQueries).join(" "))
     
    });
