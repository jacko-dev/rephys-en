var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
if( isMobile.iOS() ) 
alert('Some parts of Rephys might not be compatible with iOS.');
if( isMobile.Android() ) 
alert('Some parts of Rephys might not be compatible with Android.');
if( isMobile.BlackBerry() ) 
alert('Some parts of Rephys might not be compatible with BlackBerry.');
if( isMobile.Opera() ) 
alert('Some parts of Rephys might not be compatible with Opera Mini.');
if( isMobile.Windows() ) 
alert('Some parts of Rephys might not be compatible with Windows Mobile.');