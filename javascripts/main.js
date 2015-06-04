var $inputCSS=$("#input");
var $outputCSS=$("#output");

 //Regex Functions
 
    var readRegEx = function (str, re) {
        var resp = str.match(re);
        null !== resp && resp.shift();
        return resp;
    };

    var parseMQs = function (str) {
        return readRegEx(str, /(@media.(?!print)[^{]+\{[\s\S]+?}\s*})/g);
    };
    
    var mediaQueries = parseMQs($inputCSS.value());
    $outputCSS.value($(mediaQueries).join(" "));
