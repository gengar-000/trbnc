var kucukharfler = new Array('a', 'b', 'c', 'ç', 'd', 'e', 'f', 'g', 'ğ', 'h', 'ı', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'ö', 'p', 'q', 'r', 's', 'ş', 't', 'u', 'ü', 'v', 'w', 'x', 'y', 'z');
var buyukharfler = new Array('A', 'B', 'C', 'D', 'Ç', 'E', 'F', 'G', 'Ğ', 'H', 'I', 'İ', 'J', 'K', 'L', 'M', 'N', 'O', 'Ö', 'P', 'Q', 'R', 'S', 'Ş', 'T', 'U', 'Ü', 'V', 'W', 'X', 'Y', 'Z');
var kucukharflerQ = new Array('q', 'w', 'e', 'r', 't', 'y', 'u', 'ı', 'o', 'p', 'ğ', 'ü', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ş', 'i', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'ö', 'ç');
var buyukharflerQ = new Array('Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'Ğ', 'Ü', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ş', 'İ', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Ö', 'Ç');

var imgID = "";
var userControlID = "";
var alfaKeyboardVisible = false;
var alfaKeyboardPositionSet = false;
var eventAktif = false;
var logindenmiGeldi = 0;

var MSIEX = false;
if (navigator.userAgent.indexOf('MSIE') >= 0 && navigator.userAgent.indexOf('Opera') < 0) MSIEX = true;

var l = 3;

(function ($) {

  var fieldSelection = {

    getSelection: function () {

      var e = this.jquery ? this[0] : this;

      return (

        /* mozilla / dom 3.0 */
        ('selectionStart' in e && function () {
          var l = e.selectionEnd - e.selectionStart;
          return {
            start: e.selectionStart,
            end: e.selectionEnd,
            length: l,
            text: e.value.substr(e.selectionStart, l)
          };
        }) ||

        /* exploder */
        (document.selection && function () {

          e.focus();

          var r = document.selection.createRange();
          if (r == null) {
            return {
              start: 0,
              end: e.value.length,
              length: 0
            }
          }

          var re = e.createTextRange();
          var rc = re.duplicate();
          re.moveToBookmark(r.getBookmark());
          rc.setEndPoint('EndToStart', re);

          return {
            start: rc.text.length,
            end: rc.text.length + r.text.length,
            length: r.text.length,
            text: r.text
          };
        }) ||

        /* browser not supported */
        function () {
          return {
            start: 0,
            end: e.value.length,
            length: 0
          };
        }

      )();

    },

    replaceSelection: function () {

      var e = this.jquery ? this[0] : this;
      var text = arguments[0] || '';

      return (

        /* browser not supported */
        function () {

          if (text == "") {
            //var str = e.val();
            //e.val( str.substring(0,str.length - 1 ) );

            var str = e.value;
            e.value = str.substring(0, str.length - 1);
          } else if (text == "TSil") {
            e.value = "";
          } else {
            var tmp = e.value;

            if (e.maxLength <= tmp.length) {
              e.focus();
            } else {
              e.value += text;
            }
          }

          return this;
        }

      )();

    }

  };

  jQuery.each(fieldSelection, function (i) {
    jQuery.fn[i] = this;
  });

})(jQuery);

function klavyeSayiOlustur(deger) {
  var nesneler = document.getElementsByName("sayilar");
  var sayilar = new Array(10);
  var i = 0;

  // duzenli gelsin
  if (deger == 1) {
    for (i = 0; i < 10; i++) {
      nesneler[i].value = i;
    }
  } else {
    while (i < 10) {
      var cik = false;
      while (!cik) {
        cik = true;
        var sayi = Math.floor(Math.random() * 10);
        for (var k = 0; k < i; k++) {
          if (sayi == sayilar[k]) cik = false;
        }

      }
      sayilar[i] = sayi;
      nesneler[i].value = sayi;
      i++;
    }
  }
}

function klavyeNumberOlustur(deger) {
  var nesneler = document.getElementsByName("number");
  var sayilar = new Array(10);
  var i = 0;

  // duzenli gelsin
  if (deger == 1) {
    for (i = 0; i < 10; i++) {
      nesneler[i].value = i;
    }
  } else {
    while (i < 10) {
      var cik = false;
      while (!cik) {
        cik = true;
        var number = Math.floor(Math.random() * 10);
        for (var k = 0; k < i; k++) {
          if (number == sayilar[k]) cik = false;
        }

      }
      sayilar[i] = number;
      nesneler[i].value = number;
      i++;
    }
  }
}

function klavyeHarfOlustur(deger) {
  var bh = document.getElementsByName("buyukharfler");
  var kh = document.getElementsByName("kucukharfler");
  var sayilar = new Array(32);
  var i = 0;

  if (deger == 1) // alfabetik gelsin
  {
    for (i = 0; i < 32; i++) {
      bh[i].value = buyukharfler[i];
      kh[i].value = kucukharfler[i];
    }
  } else if (deger == 2) // q klavye duzeni gelsin
  {
    for (i = 0; i < 32; i++) {
      bh[i].value = buyukharflerQ[i];
      kh[i].value = kucukharflerQ[i];
    }
  } else if (deger == 3) // f klavye duzeni gelsin
  {
    for (i = 0; i < 32; i++) {
      bh[i].value = buyukharflerF[i];
      kh[i].value = kucukharflerF[i];
    }
  } else {
    while (i < 32) {
      var cik = false;
      while (!cik) {
        cik = true;
        var sayi = Math.floor(Math.random() * 32);
        for (var k = 0; k < i; k++) {
          if (sayi == sayilar[k]) cik = false;
        }
      }
      sayilar[i] = sayi;
      bh[i].value = buyukharfler[sayi];
      kh[i].value = kucukharfler[sayi];
      i++;
    }
  }
}

function alfaKeyboardKontrol(ev) {
  if (alfaKeyboardVisible) {
    alfaKeyboardShow();
  }
}

$('.klavye_kapat').on('click', function () {
  $('.keyboardFull, .keyboardNumber').hide();
  alfaKeyboardPositionSet = true;
});

var input = '';
var keyboardFullCounter = 0;
var keyboardNumberCounter = 0;
$('.js-keyboard-toggle').on('click', function () {
  input = $(this).parent().find('input');
  var dataKeyboardBtn = input.attr("data-keyboard-btn");
  if (dataKeyboardBtn == "keyboardFull") {

    $('div[data-keyboard = keyboardFull]').show();
    $('div[data-keyboard = keyboardNumber]').hide();
    keyboardFullCounter = 1;
  } else {
    $('div[data-keyboard = keyboardNumber]').show();
    $('div[data-keyboard = keyboardFull]').hide();
    keyboardNumberCounter = 1;
  }

  var keyboardScrollTop = document.documentElement.scrollTop; 
  var offsetLeft = input.offset().left;
  var offsetTop = input.offset().top + 65 - keyboardScrollTop;

  $('.keyboardFull, .keyboardNumber').css({
    'margin-top': offsetTop + 'px',
    'margin-left': offsetLeft + 'px',
    'right': keyboardScrollTop + 'px',
    'bottom': '1px'
  })
});
$(".keyboardFull input").on("click", function () {
  if (isDoubleClicked($(this))) return;
  clickFunction($(this), input, 1)
});

$(".keyboardNumber input").on("click", function () {
  if (isDoubleClicked($(this))) return;
  clickFunction($(this), input, 2);
});

function isDoubleClicked(element) {
  //if already clicked return TRUE to indicate this click is not allowed
  if (element.data("isclicked")) return true;

  //mark as clicked for 1 second
  element.data("isclicked", true);
  setTimeout(function () {
      element.removeData("isclicked");
  }, 300);

  //return FALSE to indicate this click was allowed
  return false;
}

function alfaKeyBoardVisibilityTrue() {
  alfaKeyboardVisible = true;
}

function alfaKeyBoardVisibilityFalse() {
  alfaKeyboardVisible = false;
}

function getTopPosAlfaKeyboard(inputObj) {
  var returnValue = inputObj.offsetTop;
  while ((inputObj = inputObj.offsetParent) != null) {
    returnValue += (inputObj.offsetTop - inputObj.scrollTop);
  }
  return returnValue;
}

function getleftPosAlfaKeyboard(inputObj) {
  var returnValue = inputObj.offsetLeft;
  while ((inputObj = inputObj.offsetParent) != null) returnValue += inputObj.offsetLeft;
  return returnValue;
}

function setAlfaKeyboardPosition() {
  leftVal = "-115px";
  topVal = "50px";
  $('.keyboardFull, .keyboardNumber').show();
}


var shifton = false;
// toggles between the normal and the "SHIFT keys" on the keyboard
function onShift(e) {
  var i;
  if (e == 1) {
    for (i = 1; i < 3; i++) {
      var rowid = "#row" + i;
      $(rowid).hide();
      $(rowid + "_shift").show();
    }
  } else {
    for (i = 1; i < 3; i++) {
      var rowid = "#row" + i;
      $(rowid).show();
      $(rowid + "_shift").hide();
    }
  }
}

function clickFunction(e, input, keyboardType ) {
  var pwdID = input;

  if (e.attr('id')) {
    if (e.attr('id').indexOf("_backspace") >= 0 || e.attr('id').indexOf("_backspace2") >= 0) {
      pwdID.replaceSelection("", true);
      pwdID.focus();
    } else if (e.attr('id').indexOf("_backSpaceAll") >= 0) {
      pwdID.replaceSelection("TSil", true);
      pwdID.focus();
    } else if (e.attr('id').indexOf("_shiftB") >= 0) {
      controlID = e.attr('id').substr(0, e.attr('id').indexOf("_shiftB"));
      document.getElementById(controlID + "_shiftB").style.display = "none";
      document.getElementById(controlID + "_shiftK").style.display = "";

      if (shifton == false) {
        onShift(1);
        shifton = true;
      } else {
        onShift(0);
        shifton = false;
      }

      //$('#'+pwdID).focus();
    } else if (e.attr('id').indexOf("_shiftK") >= 0) {
      controlID = e.attr('id').substr(0, e.attr('id').indexOf("_shiftK"));
      document.getElementById(controlID + "_shiftB").style.display = "";
      document.getElementById(controlID + "_shiftK").style.display = "none";

      if (shifton == false) {
        onShift(1);
        shifton = true;
      } else {
        onShift(0);
        shifton = false;
      }

      //$('#'+pwdID).focus();
    } else if (e.attr('id').indexOf("_harfduzenle") >= 0) {
      controlID = e.attr('id').substr(0, e.attr('id').indexOf("_harfduzenle"));
      document.getElementById(controlID + "_harfduzenle").style.display = "none";
      document.getElementById(controlID + "_harfkaristir").style.display = "";

      //$('#'+pwdID).focus();

      klavyeHarfOlustur(1);
      klavyeSayiOlustur(1);
      klavyeNumberOlustur(1);
    } else if (e.attr('id').indexOf("_harfkaristir") >= 0) {
      controlID = e.attr('id').substr(0, e.attr('id').indexOf("_harfkaristir"));
      document.getElementById(controlID + "_harfduzenle").style.display = "";
      document.getElementById(controlID + "_harfkaristir").style.display = "none";
      //$('#'+pwdID).focus();

      klavyeHarfOlustur(0);
      klavyeSayiOlustur(0);
      klavyeNumberOlustur(0);
    } else if (e.attr('id').indexOf("_QKlavye") >= 0) {
      controlID = e.attr('id').substr(0, e.attr('id').indexOf("_QKlavye"));
      document.getElementById(controlID + "_QKlavye").style.display = "none";
      document.getElementById(controlID + "_alfabetik").style.display = "";

      //$('#'+pwdID).focus();

      klavyeHarfOlustur(2);
      //klavyeSayiOlustur(2);
      klavyeNumberOlustur(2);
    } else if (e.attr('id').indexOf("_alfabetik") >= 0) {
      controlID = e.attr('id').substr(0, e.attr('id').indexOf("_alfabetik"));
      document.getElementById(controlID + "_alfabetik").style.display = "none";
      document.getElementById(controlID + "_QKlavye").style.display = "";

      //$('#'+pwdID).focus();

      klavyeHarfOlustur(1);
      //klavyeSayiOlustur(1);
      klavyeNumberOlustur(1);
    } else if (e.attr('class').indexOf("KeypadText") >= 0) {
      return false;
    } else if ($(this).val() == "on") {

    }
  } else if (keyboardFullCounter == 1 && keyboardType == 1) {
    pwdID.val(function () {
      return (this.value.length < input[0].maxLength) ? this.value + e[0].defaultValue : this.value;
    });
    pwdID.focus();

    if (!(document.getElementById("chkSabit").checked)) {
      klavyeSayiOlustur(0);
      klavyeHarfOlustur(0);
    }
  } else if (keyboardNumberCounter == 1 && keyboardType == 2) {
    pwdID.val(function () {
      return (this.value.length < input[0].maxLength) ? this.value + e[0].defaultValue : this.value;
    });
    pwdID.focus();

    if (!(document.getElementById("chkSabit2").checked)) {
      klavyeNumberOlustur(0);
    }
  }
}

$(document).on('click', function (e) {
  if ($(e.target).closest(".keyboardFull, .keyboardNumber").length === 0 && $(e.target).closest(".js-keyboard-toggle").length === 0) {
    $(".keyboardFull, .keyboardNumber").hide();
  }
});