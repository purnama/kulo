var supportedLanguage = ['ID', 'EN', 'DE'];

var WORDS_ID = {
    "languageText": 'Indonesia',
    'flagIconStyle': 'flag-icon flag-icon-id',
    "inputVoucherCode": "Masukkan Kode Voucher",
    "activateInternet": "Aktivkan Internet",
    "internetAlreadyActive": "Internet sudah aktiv",
    "ifNothingHappen": "Jika tidak terjadi apa-apa, silahkan klik",
    "clickHere": "disini",
    "welcome": "Selamat datang",
    "trialUser": "pengguna percobaan!",
    "logOff": "Keluar",
    "justLoggedOut": "Anda baru saja keluar",
    "username" : "Name Pengguna",
    "timeLeft" : "Sisa Waktu",
    "logIn": "Masuk",
    "experiencedError": "Kami baru saja mengalami kesalahan",
};

var WORDS_EN = {
    "languageText": 'English',
    'flagIconStyle': 'flag-icon flag-icon-en',
    "inputVoucherCode": "Input Voucher Code",
    "activateInternet": "Activate Internet",
    "internetAlreadyActive": "Internet already active",
    "ifNothingHappen": "If nothing happens, please click",
    "clickHere": "here",
    "welcome": "Welcome",
    "trialUser": "test user!",
    "logOff": "Log Off",
    "justLoggedOut": "You have just logged out",
    "username" : "Username",
    "timeLeft" : "Time Left",
    "logIn": "Log In",
    "experiencedError": "We just experienced an error",
};

var WORDS_DE = {
    "languageText": 'Deutsch',
    'flagIconStyle': 'flag-icon flag-icon-de',
    "inputVoucherCode": "Gutscheincode Eingeben",
    "activateInternet": "Internet Aktivieren",
    "internetAlreadyActive": "Internet bereits aktiv",
    "ifNothingHappen": "Wenn nichts passiert, klicken sie bitte",
    "clickHere": "hier",
    "welcome": "Wilkommen",
    "trialUser": "Testbenutzer!",
    "logOff": "Abmelden",
    "justLoggedOut": "Sie haben sich soeben abgemeldet",
    "username" : "Benutzername",
    "timeLeft" : "Rest Zeit",
    "logIn": "Anmelden",
    "experiencedError": "Wir haben gerade einen Fehler erlebt",
};


function changeLang(lang) {
    var userLang = typeof lang === 'string' ? lang.toUpperCase() : navigator.language.toUpperCase() || navigator.userLanguage.toUpperCase();
    if (userLang.indexOf('-') !== -1) {
        userLang = userLang.split('-')[0];
    }
    supportedLanguage.forEach(element => $('#listLang' + element).attr('class', 'nav-item'))
    langStr = supportedLanguage.find(element => element === userLang) == null ? 'EN' : userLang;
    langObj = window['WORDS_' + langStr];
    $('#languageText').text(langObj.languageText);
    $('#flagIconStyle').attr('class', langObj.flagIconStyle);
    $('#inputVoucherCode').attr('placeholder', langObj.inputVoucherCode);
    $('#activateInternet').text(langObj.activateInternet);
    $('#listLang' + userLang).attr('class', 'nav-item active');
    $('#internetAlreadyActive').text(langObj.internetAlreadyActive);
    $('#ifNothingHappen').text(langObj.ifNothingHappen);
    $('#clickHere').text(langObj.clickHere);
    $('#welcome').text(langObj.welcome);
    $('#trialUser').text(langObj.trialUser);
    $('#logOff').attr('value', langObj.logOff);
    $('#justLoggedOut').text(langObj.justLoggedOut);
    $('#username').text(langObj.username);
    $('#timeLeft').text(langObj.timeLeft);
    $('#logIn').attr('value', langObj.logIn);
    $('#experiencedError').text(langObj.experiencedError);
}

function changeLangNav(lang) {
    changeLang(lang);
    if ($('.navbar-toggler').css('display') != 'none') {
        $('.navbar-toggler').click();
    }
}