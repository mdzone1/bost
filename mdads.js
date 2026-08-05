// mdads.js - Modora Official Ads Manager
// Simpan file ini di ROOT direktori website (misal: htdocs/mdads.js)

function renderModoraAd(adId) {
    switch(adId) {
        case 1:
            // --- Iklan 1 - Script Head ---
            document.write('<script src="https://pl29813317.effectivecpmnetwork.com/fc/85/a9/fc85a9cf086af486989e7c514fbc5be3.js"></script>');
            break;
            
        case 2:
            // --- Iklan 2 - ukuran 320x50 ---
            document.write('<script> atOptions = { "key" : "14d32d8d83c01a033a17bf2bd163190e", "format" : "iframe", "height" : 50, "width" : 320, "params" : {} }; </script>');
            document.write('<script src="https://www.highperformanceformat.com/14d32d8d83c01a033a17bf2bd163190e/invoke.js"></script>');
            break;
            
        case 3:
            // --- Iklan 3 - ukuran 468x60 ---
            document.write('<script> atOptions = { "key" : "9573ef29e09e033e1fd179bbe8714e7b", "format" : "iframe", "height" : 60, "width" : 468, "params" : {} }; </script>');
            document.write('<script src="https://www.highperformanceformat.com/9573ef29e09e033e1fd179bbe8714e7b/invoke.js"></script>');
            break;
            
        case 4:
            // --- Iklan 4 - ukuran 728x90 ---
            document.write('<script> atOptions = { "key" : "08b0a7033befa7908dba35e5ff5927d6", "format" : "iframe", "height" : 90, "width" : 728, "params" : {} }; </script>');
            document.write('<script src="https://www.highperformanceformat.com/08b0a7033befa7908dba35e5ff5927d6/invoke.js"></script>');
            break;
            
        case 5:
            // --- Iklan 5 - Native Async ---
            document.write('<script async="async" data-cfasync="false" src="https://pl29813318.effectivecpmnetwork.com/2342c2b783611b943f9500c62b052ef7/invoke.js"></script>');
            document.write('<div id="container-2342c2b783611b943f9500c62b052ef7"></div>');
            break;
            
        case 6:
            // --- Iklan 6 - ukuran 300x250 ---
            document.write('<script> atOptions = { "key" : "9c5c51c02580a0a4fce46ac76f23b2b4", "format" : "iframe", "height" : 250, "width" : 300, "params" : {} }; </script>');
            document.write('<script src="https://www.highperformanceformat.com/9c5c51c02580a0a4fce46ac76f23b2b4/invoke.js"></script>');
            break;
            
        case 7:
            // --- Iklan 7 - Script Body ---
            document.write('<script src="https://pl29813319.effectivecpmnetwork.com/18/0b/c2/180bc2769b4d3473a369e5bc011e956d.js"></script>');
            break;
    }
}