$((function () {
        $(".up").click((function () {
                $("html, body").animate({
                        scrollTop: 0
                }, 1e3)
        }))
}));
var $page = $("html, body");
$('a[href*="#"]').click((function () {
        return $page.animate({
                scrollTop: $($.attr(this, "href")).offset().top
        }, 700),
        !1
})),
$(document).ready((function () {
        $("#phone").mask("+7 (999) 999-99-99")
})),
$(document).ready((function () {
        $("#phone_nuz").mask("+7 (999) 999-99-99")
})),
$(document).ready((function () {
        $("#phone_num").mask("+7 (999) 999-99-99")
})),
$(document).ready((function () {
        $("#phone_design_lm").mask("+7 (999) 999-99-99")
})),
$(document).ready((function () {
        $("#phone_design").mask("+7 (999) 999-99-99")
})),
$(document).ready((function () {
        $("#phone_footer").mask("+7 (999) 999-99-99")
})),
$(document).ready((function () {
        $("#phone_dop").mask("+7 (999) 999-99-99")
})),
$(document).ready((function () {
        $("#phone_design_zakaz").mask("+7 (999) 999-99-99")
})),
$(document).ready((function () {
        $("#phone_zakaz_zvonok").mask("+7 (999) 999-99-99")
})),
$(document).ready((function () {
        $("#phone_design_mmmm").mask("+7 (999) 999-99-99")
})),
$((function () {
        $("#wraper_sectiom").twentytwenty({
                default_offset_pct: .5,
                orientation: "horizontal",
                before_label: "До",
                after_label: "После",
                no_overlay: !1,
                move_slider_on_hover: !1,
                move_with_handle_only: !0,
                click_to_move: !1
        })
})),
$((function () {
        var e = $(".pagin"),
                t = $(".wraper_slider");
        t.on("reInit afterChange", (function (t, n, o, l) {
                var c = (o || 0) + 1;
                e.text(c + "/" + n.slideCount)
        })),
        t.slick({
                dots: !0,
                infinite: !0,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: !0,
                autoplaySpeed: 2e3,
                prevArrow: '<img src=".//img/prev.svg" class="slick-my-prev slick-arrow-my">',
                nextArrow: '<img src=".//img/next.svg" class="slick-my-next slick-arrow-my">',
                responsive: [{
                        breakpoint: 780,
                        settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                        },
                        breakpoint: 580,
                        settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                        }
                }]
        })
})),
$((function () {
        document.querySelectorAll(".tabs__item_mebel").forEach((e = > e.addEventListener("click", (function (t) {
                t.preventDefault();
                const n = t.target.getAttribute("href").replace("#", "");
                document.querySelectorAll(".tabs__item_mebel").forEach((e = > e.classList.remove("tabs__item__active_mebel"))),
                document.querySelectorAll(".tabs__block_mebel").forEach((e = > e.classList.remove("tabs__block_mebel__active"))),
                e.classList.add("tabs__item__active_mebel"),
                document.getElementById(n).classList.add("tabs__block_mebel__active")
        })))),
        document.querySelector(".tabs__items_mebel").click()
})),
$((function () {
        document.querySelectorAll(".tabs__item_arenda").forEach((e = > e.addEventListener("click", (function (t) {
                t.preventDefault();
                const n = t.target.getAttribute("href").replace("#", "");
                document.querySelectorAll(".tabs__item_arenda").forEach((e = > e.classList.remove("tabs__item_arenda_active"))),
                document.querySelectorAll(".tabs__block_arenda").forEach((e = > e.classList.remove("tabs__block_arenda__active"))),
                e.classList.add("tabs__item_arenda_active"),
                document.getElementById(n).classList.add("tabs__block_arenda__active")
        })))),
        document.querySelector(".tabs__items_arenda").click()
})),
$((function () {
        $("[data-fancybox]").fancybox({
                touch: !1
        })
})),
$((function () {
        var e = document.getElementById("form11"),
                t = document.getElementById("form22"),
                n = document.getElementById("form33"),
                o = document.getElementById("next11"),
                l = document.getElementById("next22"),
                c = document.getElementById("next33"),
                a = document.getElementById("next44"),
                s = document.getElementById("yellow");
        e && (o.onclick = function () {
                e.style.left = "-200%",
                t.style.left = "0",
                s.style.width = "40%"
        }, l.onclick = function () {
                t.style.left = "-200%",
                n.style.left = "0",
                s.style.width = "60%"
        }, c.onclick = function () {
                n.style.left = "-200%",
                form44.style.left = "0",
                s.style.width = "80%"
        }, a.onclick = function () {
                form44.style.left = "-200%",
                e.style.left = "0",
                s.style.width = "20%"
        })
})),
$((function () {
        var e = document.getElementById("form1"),
                t = document.getElementById("form2"),
                n = document.getElementById("form3"),
                o = document.getElementById("yellow"),
                l = document.getElementById("next1"),
                c = document.getElementById("next2"),
                a = (document.getElementById("next3"), document.getElementById("next4"));
        e && (l.onclick = function () {
                e.style.left = "-200%",
                t.style.left = "0",
                o.style.width = "40%"
        }, c.onclick = function () {
                t.style.left = "-200%",
                n.style.left = "0",
                o.style.width = "60%"
        }, a.onclick = function () {
                form4.style.left = "-200%",
                e.style.left = "0",
                o.style.width = "20%"
        })
}));
var vibor_mebel = document.getElementsByClassName("vibor_mebel");
$((function () {
        document.querySelectorAll(".vibor_mebel").forEach((e = > e.addEventListener("click", (function (t) {
                t.preventDefault(),
                document.querySelectorAll(".vibor_mebel").forEach((e = > e.classList.remove("vibor_mebel_active"))),
                e.classList.add("vibor_mebel_active")
        })))),
        document.querySelector(".vibor_mebel").click()
})),
$("#hamburger").click((function () {
        $(".hamburglar").toggleClass("is-open"),
        $(".navigation").toggleClass("open"),
        $("body").toggleClass("no-scroll")
})),
$(".click_hr").click((function () {
        $(".hamburglar").toggleClass("is-open"),
        $(".navigation").toggleClass("open"),
        $("body").toggleClass("no-scroll")
})),
$(document).ready((function () {
        $("form").submit((function () {
                var e = $(this);
                return $.ajax({
                        type: "POST",
                        url: "mail.php",
                        data: e.serialize()
                }).done((function () {
                        "0px" == $("#form3").css("left") ? (form3.style.left = "-200%", form4.style.left = "0", progress_bar.style.width = "80%") : alert("Благодарим вас за заявку! Наши специалисты перезвонят вам в близжайшее время и ответят на все вопросы."),
                        setTimeout((function () {
                                e.trigger("reset")
                        }), 1e3)
                })),
                !1
        }))
}));