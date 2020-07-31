if (true) {
  if (serviceWorker in navigator) {
    navigator.serviceWorker
      .register("service-worker.js")
      .then((result) => console["log"]("service worker registered"))
      .catch((error) =>
        console.log("service worker not registered - there is an error.", error)
      );
  }
  $(document).ready(function () {
    setTimeout(() => {
      if (_0x4461("0x8") !== _0x4461("0x8")) {
        $(".goTop.button").removeClass("show");
      } else {
        $("#loader").fadeToggle(250);
      }
    }, 700);
  });
  $('a[href="#"]').click(function (e) {
    e.preventDefault();
  });
  $(".goTop").click(function (e) {
    e.preventDefault();
    $("html, body")[_0x4461("0x8a")](
      {
        scrollTop: 0x0,
      },
      "slow"
    );
  });

  function goDownButton() {
    var _0x16c434 = $(this).scrollTop();
    if (_0x16c434 > 0x15e) {
      if (_0x4461("0xc2") !== _0x4461("0x6")) {
        $(_0x4461("0x3b")).addClass("show");
      } else {
        var _0x1e3c5c = "#" + target;
        $(".toast-box").removeClass("show");
        setTimeout(() => {
          $(_0x1e3c5c).addClass("show");
        }, 0x64);
        if (time) {
          time = time + 0x64;
          setTimeout(() => {
            $(".toast-box").removeClass("show");
          }, time);
        }
      }
    } else {
      if (_0x4461("0x67") !== _0x4461("0x48")) {
        $(_0x4461("0x3b"))["removeClass"]("show");
      } else {
        $('[data-toggle="tooltip"]').tooltip();
      }
    }
  }
  goDownButton();
  $(window).scroll(function () {
    goDownButton();
  });
  $(_0x4461("0x3a")).click(function () {
    window.history["go"](-0x1);
  });
  $(_0x4461("0xc3")).click(function () {
    $(this)["parent"](".adbox").addClass("hide");
  });
  var osDetection = navigator.userAgent || navigator.vendor || window.opera;
  var windowsPhoneDetection = /windows phone/i.test(osDetection);
  var androidDetection = /android/i["test"](osDetection);
  var iosDetection =
    /iPad|iPhone|iPod/.test(osDetection) && !window[_0x4461("0x3c")];
  if (windowsPhoneDetection) {
    $(_0x4461("0x8b")).addClass(_0x4461("0x89"));
    $(_0x4461("0x7b")).addClass(_0x4461("0x89"));
  } else if (androidDetection) {
    $(".android-detection").addClass(_0x4461("0x89"));
    $(".mobile-detection").addClass(_0x4461("0x89"));
  } else if (iosDetection) {
    $(_0x4461("0x36")).addClass(_0x4461("0x89"));
    $(_0x4461("0x7b")).addClass(_0x4461("0x89"));
  } else {
    $(_0x4461("0x3f")).addClass("is-active");
  }
  $(function () {
    $('[data-toggle="tooltip"]')["tooltip"]();
  });
  $(".clear-input").click(function () {
    $(this).parent(_0x4461("0x60")).find(_0x4461("0x7d"))["focus"]();
    $(this).parent(_0x4461("0x60")).find(_0x4461("0x7d")).val("");
    $(this).parent(_0x4461("0x60")).removeClass("not-empty");
  });
  $(".form-group .form-control")
    .focus(function () {
      $(this).parent(_0x4461("0x60")).addClass("active");
    })
    .blur(function () {
      $(this).parent(_0x4461("0x60"))["removeClass"]("active");
    });
  $(_0x4461("0x25")).keyup(function () {
    var _0x165a37 = $(this).val()["length"];
    if (_0x165a37 > 0x0) {
      if (_0x4461("0x4f") === _0x4461("0x4f")) {
        $(this).parent(".input-wrapper").addClass(_0x4461("0x14"));
      } else {
        var _0x4c4a99 = $(this)["scrollTop"]();
        if (_0x4c4a99 > 0x14) {
          $(_0x4461("0x17")).addClass(_0x4461("0x89"));
        } else {
          $(_0x4461("0x17")).removeClass(_0x4461("0x89"));
        }
      }
    } else {
      if (_0x4461("0xbd") !== "MmLnB") {
        goDownButton();
      } else {
        $(this).parent(".input-wrapper").removeClass(_0x4461("0x14"));
      }
    }
  });
  $(_0x4461("0x75"))["click"](function () {
    var _0x150ec6 = $("#search")["hasClass"]("show");
    if (_0x150ec6) {
      if (_0x4461("0x4e") !== _0x4461("0x4e")) {
        var _0x2bdb96 = $(this).val().length;
        if (_0x2bdb96 > 0x0) {
          $(this).parent(_0x4461("0x60")).addClass(_0x4461("0x14"));
        } else {
          $(this).parent(_0x4461("0x60"))["removeClass"](_0x4461("0x14"));
        }
      } else {
        $(_0x4461("0x8c"))["removeClass"]("show");
      }
    } else {
      if ("rgJvO" === _0x4461("0x40")) {
        $(this).parent(_0x4461("0x60"))["removeClass"](_0x4461("0x1e"));
      } else {
        $("#search").addClass("show");
        $("#search .form-control")["focus"]();
      }
    }
  });
  $(_0x4461("0x13")).owlCarousel({
    loop: !![],
    margin: 0x0,
    nav: ![],
    items: 0x1,
    dots: ![],
  });
  $(".carousel-single").owlCarousel({
    stagePadding: 0x1e,
    loop: !![],
    margin: 0x10,
    nav: ![],
    dots: ![],
    responsiveClass: !![],
    responsive: {
      0: {
        items: 0x1,
      },
      768: {
        items: 0x3,
      },
    },
  });
  $(".carousel-multiple").owlCarousel({
    stagePadding: 0x20,
    loop: !![],
    margin: 0x10,
    nav: ![],
    items: 0x2,
    dots: ![],
    responsiveClass: !![],
    responsive: {
      0: {
        items: 0x2,
      },
      768: {
        items: 0x4,
      },
    },
  });
  $(_0x4461("0x73")).owlCarousel({
    stagePadding: 0x20,
    loop: !![],
    margin: 0x10,
    nav: ![],
    items: 0x5,
    dots: ![],
    responsiveClass: !![],
    responsive: {
      0: {
        items: 0x5,
      },
      768: {
        items: 0x8,
      },
    },
  });
  $(".carousel-slider").owlCarousel({
    loop: !![],
    margin: 0x8,
    nav: ![],
    items: 0x1,
    dots: !![],
  });

  function notification(_0x3933ce, _0x5610b8) {
    var _0x3112e7 = "#" + _0x3933ce;
    $(_0x4461("0xb9")).removeClass("show");
    setTimeout(() => {
      $(_0x3112e7).addClass("show");
    }, 0x12c);
    if (_0x5610b8) {
      if (_0x4461("0x1a") === _0x4461("0x19")) {
        $(_0x4461("0x8c")).removeClass("show");
      } else {
        _0x5610b8 = _0x5610b8 + 0x12c;
        setTimeout(() => {
          if (_0x4461("0x7c") !== _0x4461("0x26")) {
            $(_0x4461("0xb9")).removeClass("show");
          } else {
            var _0x3045f2 = $(this),
              _0x2a336b = _0x3045f2.next(_0x4461("0x9d")),
              _0x47e980 = _0x2a336b.find(_0x4461("0x55")),
              _0x22559a = _0x47e980.text();
            _0x3045f2["on"](_0x4461("0x22"), function (_0x59ef01) {
              var _0x5f41d9 = _0x3045f2
                  .val()
                  [_0x4461("0x9f")]("\\")
                  [_0x4461("0x4c")](),
                _0x2e2f5c = URL.createObjectURL(_0x59ef01.target.files[0x0]);
              if (_0x5f41d9) {
                _0x2a336b
                  .addClass("file-uploaded")
                  .css("background-image", _0x4461("0x97") + _0x2e2f5c + ")");
                _0x47e980.text(_0x5f41d9);
              } else {
                _0x2a336b.removeClass("file-uploaded");
                _0x47e980.text(_0x22559a);
              }
            });
          }
        }, _0x5610b8);
      }
    }
  }
  $(_0x4461("0x6f")).click(function (event) {
    event.preventDefault();
    $(".notification-box.show").removeClass("show");
  });
  $(_0x4461("0x0")).click(function () {
    $(_0x4461("0x1b")).removeClass("show");
  });

  function toastbox(_0x1ce63a, _0x5d268d) {
    var _0x1e7ae4 = "#" + _0x1ce63a;
    $(".toast-box").removeClass("show");
    setTimeout(() => {
      $(_0x1e7ae4).addClass("show");
    }, 0x64);
    if (_0x5d268d) {
      if (_0x4461("0x2a") !== _0x4461("0x2a")) {
        toastbox("online-toast", 0xbb8);
      } else {
        _0x5d268d = _0x5d268d + 0x64;
        setTimeout(() => {
          if (_0x4461("0x5b") !== _0x4461("0x5b")) {
            e.preventDefault();
          } else {
            $(".toast-box").removeClass("show");
          }
        }, _0x5d268d);
      }
    }
  }
  $(".toast-box .close-button").click(function (e) {
    e.preventDefault();
    $(_0x4461("0x7e"))["removeClass"]("show");
  });
  $(".toast-box.tap-to-close").click(function () {
    $(this)["removeClass"]("show");
  });

  function animatedHeader() {
    var _0x2a7b00 = $(this)["scrollTop"]();
    if (_0x2a7b00 > 0x14) {
      if ("vqOaI" !== _0x4461("0xc1")) {
        $("#ios-add-to-home-screen").model();
      } else {
        $(_0x4461("0x17")).addClass(_0x4461("0x89"));
      }
    } else {
      if ("oTGCe" !== "YLsOG") {
        $(_0x4461("0x17"))["removeClass"]("is-active");
      } else {
        var _0x188588 = "#" + target;
        $(_0x4461("0xb9")).removeClass("show");
        setTimeout(() => {
          $(_0x188588).addClass("show");
        }, 0x12c);
        if (time) {
          time = time + 0x12c;
          setTimeout(() => {
            $(_0x4461("0xb9")).removeClass("show");
          }, time);
        }
      }
    }
  }
  animatedHeader();
  $(window).scroll(function () {
    animatedHeader();
  });
  var OnlineText = _0x4461("0x47");
  var OfflineText = _0x4461("0x12");

  function onlineModeToast() {
    $(_0x4461("0x9")).append(
      _0x4461("0x90") + _0x4461("0xb8") + OnlineText + _0x4461("0xc0")
    );
    setTimeout(() => {
      if ("pWpth" === _0x4461("0xb")) {
        toastbox("online-toast", 0xbb8);
      } else {
        $(_0x4461("0x64")).attr(_0x4461("0xa0"), ![]);
      }
    }, 0x1f4);
  }

  function offlineModeToast() {
    $(_0x4461("0x9")).append(
      "<div id='offline-toast' class='toast-box bg-danger toast-top tap-to-close'>" +
        _0x4461("0xb8") +
        OfflineText +
        _0x4461("0xc0")
    );
    setTimeout(() => {
      if (_0x4461("0x18") === _0x4461("0xbb")) {
        $(_0x4461("0x9a")).removeClass("show");
      } else {
        toastbox("offline-toast");
      }
    }, 0x1f4);
  }

  function onlineMode() {
    if ($(_0x4461("0x68")).hasClass("show")) {
      if (_0x4461("0x2b") === _0x4461("0x2b")) {
        $(_0x4461("0x68"))["removeClass"]("show");
      } else {
        $(a).addClass("show");
      }
    }
    if ($(_0x4461("0x9a")).length > 0x0) {
      if (_0x4461("0x6e") === _0x4461("0xb4")) {
        event["preventDefault"]();
        $(_0x4461("0x7e")).removeClass("show");
      } else {
        $(_0x4461("0x9a")).addClass("show");
        setTimeout(() => {
          $(_0x4461("0x9a")).removeClass("show");
        }, 0xbb8);
      }
    } else {
      if (_0x4461("0x38") !== _0x4461("0x38")) {
        $(this).parent(_0x4461("0x60")).addClass(_0x4461("0x1e"));
      } else {
        onlineModeToast();
      }
    }
    $(".toast-box.tap-to-close").click(function () {
      if ("TPHwZ" === "TPHwZ") {
        $(this).removeClass("show");
      } else {
        $(this)
          ["parent"](".multi-level")
          .parent("ul")
          ["children"]("li")
          .children("ul")
          .slideUp(0xfa);
        $(this).next("ul").slideToggle(0xfa);
        $(this)
          .parent(".multi-level")
          .parent("ul")
          .children(".multi-level")
          .removeClass(_0x4461("0x1e"));
        $(this).parent(".multi-level").addClass(_0x4461("0x1e"));
      }
    });
  }

  function offlineMode() {
    if ($(_0x4461("0x9a")).hasClass("show")) {
      if (_0x4461("0x46") === _0x4461("0x5c")) {
        setTimeout(() => {
          $(_0x4461("0xa8"))["modal"]();
        }, time);
      } else {
        $(_0x4461("0x9a")).removeClass("show");
      }
    }
    if ($(_0x4461("0x68")).length > 0x0) {
      if (_0x4461("0x3e") !== _0x4461("0x3e")) {
        setTimeout(() => {
          $(_0x4461("0x94")).model();
        }, time);
      } else {
        $(_0x4461("0x68")).addClass("show");
      }
    } else {
      if (_0x4461("0x92") !== _0x4461("0xa6")) {
        offlineModeToast();
      } else {
        $(_0x4461("0x17")).addClass(_0x4461("0x89"));
      }
    }
    $(".toast-box.tap-to-close").click(function () {
      $(this).removeClass("show");
    });
  }
  window[_0x4461("0xb3")](_0x4461("0xad"), onlineMode);
  window[_0x4461("0xb3")](_0x4461("0x10"), offlineMode);
  $(_0x4461("0x30"))[_0x4461("0x9b")](function () {
    var _0x1fc183 = $(this),
      _0x3aadbb = _0x1fc183["next"](_0x4461("0x9d")),
      _0x2c5ce4 = _0x3aadbb.find("span"),
      _0x5844a2 = _0x2c5ce4.text();
    _0x1fc183["on"](_0x4461("0x22"), function (_0x5b9f65) {
      if (_0x4461("0x95") === _0x4461("0x2d")) {
        window.history["go"](-0x1);
      } else {
        var _0x1d1c88 = _0x1fc183
            .val()
            [_0x4461("0x9f")]("\\")
            [_0x4461("0x4c")](),
          _0x4b3d3b = URL.createObjectURL(_0x5b9f65.target.files[0x0]);
        if (_0x1d1c88) {
          if (_0x4461("0xbc") === "YeRuz") {
            _0x3aadbb
              .addClass("file-uploaded")
              ["css"]("background-image", "url(" + _0x4b3d3b + ")");
            _0x2c5ce4["text"](_0x1d1c88);
          } else {
            $(".dark-mode-switch").attr(_0x4461("0xa0"), !![]);
            if ($("body").hasClass(_0x4461("0xa4"))) {
            } else {
              $(_0x4461("0x9")).addClass("dark-mode-active");
            }
          }
        } else {
          if (_0x4461("0x2c") === _0x4461("0x2c")) {
            _0x3aadbb.removeClass("file-uploaded");
            _0x2c5ce4.text(_0x5844a2);
          } else {
            $(_0x4461("0x36")).addClass(_0x4461("0x89"));
            $(_0x4461("0x7b")).addClass(_0x4461("0x89"));
          }
        }
      }
    });
  });
  $(".multi-level > a.item").click(function () {
    if ($(this).parent(".multi-level").hasClass("active")) {
      if ("vJAHz" !== "NAPhg") {
        $(this)["next"]("ul").slideToggle(0xfa);
        $(this).parent(".multi-level").removeClass(_0x4461("0x1e"));
      } else {
        $(_0x4461("0xb9")).removeClass("show");
      }
    } else {
      $(this)
        .parent(".multi-level")
        .parent("ul")
        ["children"]("li")
        .children("ul")
        ["slideUp"](0xfa);
      $(this).next("ul").slideToggle(0xfa);
      $(this)
        .parent(".multi-level")
        .parent("ul")
        ["children"](".multi-level")
        ["removeClass"]("active");
      $(this).parent(".multi-level").addClass(_0x4461("0x1e"));
    }
  });

  function AddtoHome(_0x1a4b7b, _0x5e36ec) {
    if (_0x5e36ec) {
      if (_0x4461("0x62") !== _0x4461("0x62")) {
        $(_0x4461("0x8d")).addClass("is-active");
        $(".mobile-detection").addClass(_0x4461("0x89"));
      } else {
        var _0x3d8357 = localStorage[_0x4461("0x61")](_0x4461("0x7a"));
        if (_0x3d8357 === "1" || _0x3d8357 === 0x1) {
        } else {
          if (_0x4461("0x59") !== _0x4461("0x59")) {
            event.preventDefault();
            $("html, body").animate(
              {
                scrollTop: 0x0,
              },
              "slow"
            );
          } else {
            localStorage.setItem(_0x4461("0x7a"), 0x1);
            window[_0x4461("0xb3")]("load", () => {
              if (_0x4461("0x57") === _0x4461("0x35")) {
                $(this)["parent"](".adbox").addClass("hide");
              } else {
                if (navigator[_0x4461("0x81")]) {
                } else if (matchMedia(_0x4461("0x50"))[_0x4461("0x34")]) {
                } else {
                  if (_0x4461("0x52") !== "ddVrw") {
                    if (androidDetection) {
                      if (_0x4461("0x4a") !== _0x4461("0x43")) {
                        setTimeout(() => {
                          if (_0x4461("0x99") !== "UBlZi") {
                            $(_0x4461("0xa8")).model();
                          } else {
                            $("#android-add-to-home-screen").model();
                          }
                        }, _0x1a4b7b);
                      } else {
                        _0x1a4b7b = _0x1a4b7b + 0x12c;
                        setTimeout(() => {
                          $(_0x4461("0xb9")).removeClass("show");
                        }, _0x1a4b7b);
                      }
                    }
                    if (iosDetection) {
                      if (_0x4461("0x8e") !== _0x4461("0x72")) {
                        setTimeout(() => {
                          if ("oZIxN" !== "oZIxN") {
                            $(this).next("ul").slideToggle(0xfa);
                            $(this)
                              .parent(".multi-level")
                              .removeClass(_0x4461("0x1e"));
                          } else {
                            $("#ios-add-to-home-screen").model();
                          }
                        }, _0x1a4b7b);
                      } else {
                        toi();
                      }
                    }
                  } else {
                    onlineModeToast();
                  }
                }
              }
            });
          }
        }
      }
    } else {
      if ("tmbbh" === _0x4461("0x78")) {
        window[_0x4461("0xb3")](_0x4461("0x44"), () => {
          if ("XRYCX" === "otLWF") {
            $(this).parent(".input-wrapper")["find"](_0x4461("0x7d")).focus();
            $(this)["parent"](_0x4461("0x60")).find(_0x4461("0x7d"))["val"]("");
            $(this).parent(_0x4461("0x60")).removeClass("not-empty");
          } else {
            if (navigator[_0x4461("0x81")]) {
            } else if (matchMedia(_0x4461("0x50"))[_0x4461("0x34")]) {
            } else {
              if ("sGaiZ" === _0x4461("0xa")) {
                toastbox("offline-toast");
              } else {
                if (androidDetection) {
                  if (_0x4461("0x1d") === _0x4461("0x27")) {
                    event.preventDefault();
                    $(".notification-box.show")["removeClass"]("show");
                  } else {
                    setTimeout(() => {
                      $(_0x4461("0xa8"))["modal"]();
                    }, _0x1a4b7b);
                  }
                }
                if (iosDetection) {
                  if (_0x4461("0xaa") !== _0x4461("0x96")) {
                    setTimeout(() => {
                      if (_0x4461("0x79") !== _0x4461("0x93")) {
                        $(_0x4461("0x94")).model();
                      } else {
                        $(_0x4461("0x17")).removeClass(_0x4461("0x89"));
                      }
                    }, _0x1a4b7b);
                  } else {
                    $("body").append(
                      _0x4461("0xa1") +
                        "<div class='in'><div class='text'>" +
                        OfflineText +
                        _0x4461("0xc0")
                    );
                    setTimeout(() => {
                      toastbox("offline-toast");
                    }, 0x1f4);
                  }
                }
              }
            }
          }
        });
      } else {
        setTimeout(() => {
          $("#android-add-to-home-screen")["modal"]();
        }, _0x1a4b7b);
      }
    }
  }
  var checkDarkModeStatus = localStorage[_0x4461("0x61")](_0x4461("0x28"));
  if (checkDarkModeStatus === 0x1 || checkDarkModeStatus === "1") {
    $(_0x4461("0x64")).attr(_0x4461("0xa0"), !![]);
    if ($(_0x4461("0x9")).hasClass(_0x4461("0xa4"))) {
    } else {
      $(_0x4461("0x9")).addClass(_0x4461("0xa4"));
    }
  } else {
    $(_0x4461("0x64")).attr(_0x4461("0xa0"), ![]);
  }
  $(_0x4461("0x64"))[_0x4461("0x22")](function () {
    $(_0x4461("0x64"))["trigger"](_0x4461("0x64"));
    var _0x464345 = localStorage["getItem"]("MobilekitDarkModeActive");
    if (_0x464345 === 0x1 || _0x464345 === "1") {
      if (_0x4461("0x24") !== _0x4461("0x24")) {
        $(_0x4461("0x9"))["append"](
          _0x4461("0x90") + _0x4461("0xb8") + OnlineText + _0x4461("0xc0")
        );
        setTimeout(() => {
          toastbox(_0x4461("0x51"), 0xbb8);
        }, 0x1f4);
      } else {
        if ($("body").hasClass("dark-mode-active")) {
          if (_0x4461("0xa9") !== _0x4461("0x42")) {
            $(_0x4461("0x9")).removeClass(_0x4461("0xa4"));
          } else {
            $(_0x4461("0x64"))[_0x4461("0x6c")](".dark-mode-switch");
            var _0x3f7048 = localStorage[_0x4461("0x61")](_0x4461("0x28"));
            if (_0x3f7048 === 0x1 || _0x3f7048 === "1") {
              if ($(_0x4461("0x9")).hasClass(_0x4461("0xa4"))) {
                $(_0x4461("0x9"))["removeClass"](_0x4461("0xa4"));
              }
              localStorage["setItem"](_0x4461("0x28"), "0");
              $(".dark-mode-switch").attr(_0x4461("0xa0"), ![]);
            } else {
              $(_0x4461("0x9")).addClass("dark-mode-active");
              $(_0x4461("0x64"))["attr"]("checked", !![]);
              localStorage.setItem(_0x4461("0x28"), "1");
            }
          }
        }
        localStorage.setItem(_0x4461("0x28"), "0");
        $(_0x4461("0x64")).attr(_0x4461("0xa0"), ![]);
      }
    } else {
      if (_0x4461("0x7") !== _0x4461("0x87")) {
        $("body").addClass(_0x4461("0xa4"));
        $(_0x4461("0x64")).attr(_0x4461("0xa0"), !![]);
        localStorage.setItem(_0x4461("0x28"), "1");
      } else {
        $(_0x4461("0x1c"))[_0x4461("0x41")](0xfa);
      }
    }
  });
  var dmswitch = $(_0x4461("0x64"));
  dmswitch["on"](_0x4461("0x22"), function () {
    dmswitch[_0x4461("0xb0")]("checked", this[_0x4461("0xa0")]);
  });
}
