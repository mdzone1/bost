// mdads.js - Modora Official Ads Manager
// Simpan file ini di ROOT direktori website (misal: htdocs/mdads.js)

function renderModoraAd(adId) {
    switch(adId) {
        case 1:
            // --- Iklan 1 - Script Head ---
            document.write('<script src="https://pl30702113.effectivecpmnetwork.com/9b/ab/4f/9bab4f86931e83dd73eaf8dc617a31e6.js"></script>');
            break;
            
        case 2:
            // --- Iklan 2 - ukuran 320x50 ---
            document.write('<script> atOptions = { "key" : "8b132f917044a8032ab603abc47e0157", "format" : "iframe", "height" : 50, "width" : 320, "params" : {} }; </script>');
            document.write('<script src="https://www.highperformanceformat.com/8b132f917044a8032ab603abc47e0157/invoke.js"></script>');
            break;
            
        case 3:
            // --- Iklan 3 - ukuran 468x60 ---
            document.write('<script> atOptions = { "key" : "70ba4b281483ea65b6b77689bff3b57e", "format" : "iframe", "height" : 60, "width" : 468, "params" : {} }; </script>');
            document.write('<script src="https://www.highperformanceformat.com/70ba4b281483ea65b6b77689bff3b57e/invoke.js"></script>');
            break;
            
        case 4:
            // --- Iklan 4 - ukuran 728x90 ---
            document.write('<script> atOptions = { "key" : "cd922dc43bc8b7311af29e1bdfcc2e20", "format" : "iframe", "height" : 90, "width" : 728, "params" : {} }; </script>');
            document.write('<script src="https://www.highperformanceformat.com/cd922dc43bc8b7311af29e1bdfcc2e20/invoke.js"></script>');
            break;
            
        case 5:
            // --- Iklan 5 - Native Async ---
            document.write('<script async="async" data-cfasync="false" src="https://pl30702115.effectivecpmnetwork.com/86289b9f3a486e66076d6a366512f6cc/invoke.js"></script>');
            document.write('<div id="container-86289b9f3a486e66076d6a366512f6cc"></div>');
            break;
            
        case 6:
            // --- Iklan 6 - ukuran 300x250 ---
            document.write('<script> atOptions = { "key" : "f2304d8a26b50bf93635dc8d48aa5c1d", "format" : "iframe", "height" : 250, "width" : 300, "params" : {} }; </script>');
            document.write('<script src="https://www.highperformanceformat.com/f2304d8a26b50bf93635dc8d48aa5c1d/invoke.js"></script>');
            break;
            
        case 7:
            // --- Iklan 7 - Script Body ---
            document.write('<script src="https://pl30702114.effectivecpmnetwork.com/87/96/9f/87969fc9d30f01c70719994efc24cf4c.js"></script>');
            break;
    }
}
