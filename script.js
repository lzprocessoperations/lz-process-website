const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


/* =========================
   MOBILE NAVIGATION
========================= */

if (menuButton && navigation) {

    menuButton.addEventListener(
        "click",
        function () {

            navigation.classList.toggle("open");

            menuButton.classList.toggle("open");


            const menuIsOpen =
                navigation.classList.contains("open");


            menuButton.setAttribute(
                "aria-expanded",
                menuIsOpen
            );


            menuButton.setAttribute(
                "aria-label",
                menuIsOpen
                    ? "Close navigation"
                    : "Open navigation"
            );

        }
    );


    const navigationLinks =
        navigation.querySelectorAll("a");


    navigationLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    closeNavigation();

                }
            );

        }
    );

}



/* =========================
   CLOSE NAVIGATION
========================= */

function closeNavigation() {

    if (!navigation || !menuButton) {

        return;

    }


    navigation.classList.remove("open");

    menuButton.classList.remove("open");


    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );


    menuButton.setAttribute(
        "aria-label",
        "Open navigation"
    );

}



/* =========================
   ESC KEY
========================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeNavigation();

        }

    }
);



/* =========================
   WINDOW RESIZE
========================= */

window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth > 760) {

            closeNavigation();

        }

    }
);



/* =========================
   FOOTER YEAR
========================= */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}