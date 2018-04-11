
window.plugins.speechRecognition.isRecognitionAvailable(
  Function successCallback, Function errorCallback)


  let options = {
  language:"fr-FR",
  matches:1,
  prompt:"",      // Android only
  showPopup:true,  // Android only
  showPartial:false // iOS only


successCallback: function(matches){
  console.log(matches);
}


window.plugins.speechRecognition.startListening(
  Function successCallback, Function errorCallback, Object options)


//Only IOS
  window.plugins.speechRecognition.stopListening(
  Function successCallback, Function errorCallback)


  window.plugins.speechRecognition.getSupportedLanguages(
    Function successCallback, Function errorCallback)


    // getSupportedLanguages result on Android:

let supportedLanguagesAndroid =
  ["af-ZA", "id-ID", "ms-MY", "ca-ES", "cs-CZ", "da-DK", "de-DE", "en-AU", "en-CA",
  "en-001", "en-IN", "en-IE", "en-NZ", "en-PH", "en-ZA", "en-GB", "en-US", "es-AR",
  "es-BO", "es-CL", "es-CO", "es-CR", "es-EC", "es-US", "es-SV", "es-ES", "es-GT",
  "es-HN", "es-MX", "es-NI", "es-PA", "es-PY", "es-PE", "es-PR", "es-DO", "es-UY",
  "es-VE", "eu-ES", "fil-PH", "fr-FR", "gl-ES", "hr-HR", "zu-ZA", "is-IS", "it-IT",
  "lt-LT", "hu-HU", "nl-NL", "nb-NO", "pl-PL", "pt-BR", "pt-PT", "ro-RO", "sl-SI",
  "sk-SK", "fi-FI", "sv-SE", "vi-VN", "tr-TR", "el-GR", "bg-BG", "ru-RU", "sr-RS",
  "uk-UA", "he-IL", "ar-IL", "ar-JO", "ar-AE", "ar-BH", "ar-DZ", "ar-SA", "ar-KW",
  "ar-MA", "ar-TN", "ar-OM", "ar-PS", "ar-QA", "ar-LB", "ar-EG", "fa-IR", "hi-IN",
  "th-TH", "ko-KR", "cmn-Hans-CN", "cmn-Hans-HK", "cmn-Hant-TW", "yue-Hant-HK",
  "ja-JP"];


// getSupportedLanguages result on iOS:

let supportedLanguagesIOS =
  ["nl-NL","es-MX","zh-TW","fr-FR","it-IT","vi-VN","en-ZA","ca-ES","es-CL","ko-KR",
  "ro-RO","fr-CH","en-PH","en-CA","en-SG","en-IN","en-NZ","it-CH","fr-CA","da-DK",
  "de-AT","pt-BR","yue-CN","zh-CN","sv-SE","es-ES","ar-SA","hu-HU","fr-BE","en-GB",
  "ja-JP","zh-HK","fi-FI","tr-TR","nb-NO","en-ID","en-SA","pl-PL","id-ID","ms-MY",
  "el-GR","cs-CZ","hr-HR","en-AE","he-IL","ru-RU","de-CH","en-AU","de-DE","nl-BE",
  "th-TH","pt-PT","sk-SK","en-US","en-IE","es-CO","uk-UA","es-US"];
}

  window.plugins.speechRecognition.hasPermission(
  Function successCallback, Function errorCallback)


window.plugins.speechRecognition.requestPermission(
  Function successCallback, Function errorCallback)
