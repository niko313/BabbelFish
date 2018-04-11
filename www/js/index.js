var app = {
  // Application Constructor

  initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  onDeviceReady: function() {
    document.addEventListener("offline", this.onOffline, false);
    document.addEventListener("online", this.onOnline, false);
    $('#btnTraduc').hide();
    $('#btnRepeat').hide();

//******************Ecoute*************************//
    $('#bouton').click(function () {
      window.plugins.speechRecognition.hasPermission();
      window.plugins.speechRecognition.requestPermission();
      window.plugins.speechRecognition.startListening(function(result){
        // Show results in the console
        document.getElementById("texte").textContent=result;
        $('#btnTraduc').show();
        $('#btnRepeat').show();
      }, function(err){
        console.error(err);
      },{
        matches:1,
        language: "fr-FR",
        showPopup: true
      });
    });

//****************traduction*************************//
    $("#btnTraduc").click(function(){
      $('#texteTraduit').show();
      $('#btnRepeat').show();
      var url = "https://translation.googleapis.com/language/translate/v2?key=AIzaSyDqbgz0VXgDiJ-iSRE4HixTp_JjBlREDxk";
      url += "&source=" + $('#langSource').val();
      url += "&target=" + $("#langTarget").val();
      url += "&q=" + $('#texte').val();
      $.get(url, function (data, status) {
        $("#texteTraduit").val(data.data.translations[0].translatedText);
      });
    });

//*******************speak*************************//
    $('#btnRepeat').click(function(){
      var toRead = $("#texteTraduit").val();
      console.log(toRead);
      TTS
      .speak({
        text: toRead,
        locale: $('#langTarget').find(':selected').data('speak'),
        rate: 0.75
      });
    });
  },

//************test**network**offline************//
  onOffline: function() {
    $("#network").html("Non Connecté");
    $("#network").show();
  },

//************test**network**online************//
  onOnline: function() {
    $("#network").html("Connecté");
    setTimeout(function(){
      $('#network').delay(5000).fadeOut('slow');
    }, 5000);
  },

};

app.initialize();
