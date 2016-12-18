/**
 * Created by moritakenji on 2016/12/08.
 */


window.onload= function(){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    var firstScript = document.getElementsByTagName( 'script' )[ 0 ];
    firstScript.parentNode.insertBefore( script, firstScript );
    console.log("fa");
}
