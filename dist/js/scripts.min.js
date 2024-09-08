function helloConsole() {
    var e = "Made with ❤️ by Demiweb", t = "> https://demiweb-studio.com.ua/", o = [`
 %c ${e} %c ${t} %c %c 

`, "border: 1px solid #000;color: #fff; background: #000; padding:5px 0;", "color: #fff; background: #ff5112; padding:5px 0;border: 1px solid #000;", "background: #fff; padding:5px 0;", "color: #b0976d; background: #fff; padding:5px 0;"];
    if (-1 != navigator.userAgent.indexOf("MSIE") || 1 == !!document.documentMode) window.console.log(e + " - " + t); else if (-1 != navigator.userAgent.indexOf("Chrome")) {
        for (var r = "%c", l = 0; l < 12; l++) r += " ";
        window.console.log.apply(console, o), window.console.log(r, "font: 56px/100% sans-serif; background-repeat: no-repeat; background-size: 100%; background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjUxIiBoZWlnaHQ9IjM3IiBmaWxsPSJub25lIj4NCiAgICA8cGF0aCBkPSJNMTUuNzczIDIzLjI1OGMuNjA0LjY2NiAxLjM5NS45OTkgMi4zNzQuOTk5Ljk3OCAwIDEuNzctLjMzMyAyLjM3My0xIC42MDQtLjY4Ny45MDYtMS43MDcuOTA2LTMuMDYgMC0xLjM1NC0uMzAyLTIuMzYzLS45MDYtMy4wMy0uNjAzLS42ODctMS4zOTUtMS4wMy0yLjM3My0xLjAzLS45NzkgMC0xLjc3LjM0My0yLjM3NCAxLjAzLS42MDQuNjY3LS45MDYgMS42NzYtLjkwNiAzLjAzIDAgMS4zNTMuMzAyIDIuMzczLjkwNiAzLjA2em0xLjI4IDUuNjg0Yy0yLjI0OCAwLTQuMDM5LS43NS01LjM3MS0yLjI0OS0xLjMxMi0xLjQ5OS0xLjk2OC0zLjY2NS0xLjk2OC02LjQ5NiAwLTIuODMyLjY1Ni00Ljk5NyAxLjk2OC02LjQ5NiAxLjMzMi0xLjUgMy4xMjMtMi4yNSA1LjM3Mi0yLjI1IDEuODExIDAgMy4yMTcuNjI1IDQuMjE2IDEuODc1aC4xNTZWNi43NjdoNS4xNTRWMjguNjNoLTQuNTNsLS40NjgtMS43MThoLS4xNTZjLTEuMTI0IDEuMzUzLTIuNTgyIDIuMDMtNC4zNzIgMi4wM3ptMjAuOTIzIDBjLTIuNzQ5IDAtNC44NzMtLjc1LTYuMzcyLTIuMjQ5LTEuNDc4LTEuNTItMi4yMTctMy42ODUtMi4yMTctNi40OTYgMC0yLjc3Ljc2LTQuOTE0IDIuMjgtNi40MzQgMS41Mi0xLjU0IDMuNjIzLTIuMzExIDYuMzA5LTIuMzExIDIuNTgxIDAgNC42MDEuODEyIDYuMDU5IDIuNDM2IDEuNDc4IDEuNjAzIDIuMjE3IDMuNjU0IDIuMjE3IDYuMTUzbC0uMTU2IDEuNzE3SDM0LjU0Yy40MTYgMS44NzQgMS41MSAyLjgxMSAzLjI4IDIuODExIDEuMjI4IDAgMi4xNzUtLjQxNiAyLjg0MS0xLjI0OWg1LjI3OWE3LjIxIDcuMjEgMCAwMS0uNzgxIDEuOTA1Yy0uMzU0LjU4My0uODMzIDEuMTc3LTEuNDM3IDEuNzgtLjU4My41ODMtMS4zNzQgMS4wNTItMi4zNzMgMS40MDYtMSAuMzU0LTIuMTI0LjUzLTMuMzczLjUzem0tMy40MzYtMTAuNjJoNi41NTljLS4xNjctLjY4Ni0uNTQyLTEuMjctMS4xMjUtMS43NDgtLjU2Mi0uNS0xLjI4LS43NS0yLjE1NS0uNzUtLjg5NSAwLTEuNjI0LjIzLTIuMTg2LjY4Ny0uNTYyLjQ1OS0uOTI2IDEuMDYyLTEuMDkzIDEuODEyek00OC44OTUgMjguNjNWMTEuNzY0aDQuNTI4bC40NjkgMS43MThoLjE1NmMuOTU4LTEuMzUzIDIuMjA3LTIuMDMgMy43NDgtMi4wMy43MjkgMCAxLjM4NC4xMTQgMS45NjcuMzQzLjYwNC4yMDkgMS4wNzMuNDggMS40MDYuODEyLjM1NC4zMzQuNjE0LjYxNS43OC44NDQuMTg4LjIyOS4zMTMuNDE2LjM3NS41NjJoLjE1N2MuMTA0LS4yMy4yOTEtLjUxLjU2Mi0uODQzLjI5MS0uMzM0LjgzMy0uNjk4IDEuNjI0LTEuMDk0Ljc5MS0uNDE2IDEuNjc2LS42MjQgMi42NTUtLjYyNCAxLjYyNCAwIDMuMDQuNTkzIDQuMjQ3IDEuNzggMS4yMjkgMS4xNjYgMS44NDMgMi44MSAxLjg0MyA0LjkzNXYxMC40NjJoLTUuMTU0di05LjUyNWMwLS45NzktLjIwOC0xLjcxOC0uNjI0LTIuMjE4LS40MTYtLjUtLjk5LS43NS0xLjcxOC0uNzUtLjY2NiAwLTEuMTk3LjI1LTEuNTkzLjc1LS4zOTUuNS0uNTkzIDEuMjQtLjU5MyAyLjIxOHY5LjUyNmgtNS4xNTN2LTkuNTI2YzAtLjk3OS0uMjA5LTEuNzE4LS42MjUtMi4yMTgtLjQxNi0uNS0uOTktLjc1LTEuNzE4LS43NS0uNjY2IDAtMS4xOTcuMjUtMS41OTMuNzUtLjM5NS41LS41OTMgMS4yNC0uNTkzIDIuMjE4djkuNTI2aC01LjE1M3ptMjcuNzg1IDBWMTEuNzY0aDUuMTU0VjI4LjYzSDc2LjY4em00LjY1NC0xOC44OTZjLS41Mi41Mi0xLjIxOC43OC0yLjA5My43OC0uODc0IDAtMS41NzItLjI2LTIuMDkyLS43OC0uNTItLjU0MS0uNzgxLTEuMjE4LS43ODEtMi4wMyAwLS44MTIuMjYtMS40NzguNzgtMS45OTkuNTIxLS41NDEgMS4yMTktLjgxMiAyLjA5My0uODEyLjg3NSAwIDEuNTcyLjI3IDIuMDkzLjgxMi41NDEuNTIuODEyIDEuMTg3LjgxMiAxLjk5OXMtLjI3IDEuNDg5LS44MTIgMi4wM3ptNi45MTQgMTguODk2TDgzLjcyIDExLjc2NGg1LjMxbDIuNDk4IDEwLjQ2MyAyLjY1NC0xMC40NjNoNC45OThsMi42NTQgMTAuNDYzIDIuNDk5LTEwLjQ2M2g1LjMwOWwtNC41MjggMTYuODY2aC01Ljc3OGwtMi42NTUtOS4zNy0yLjY1NSA5LjM3aC01Ljc3OHptMzAuNzY2LjMxMmMtMi43NDggMC00Ljg3Mi0uNzUtNi4zNzEtMi4yNDktMS40NzgtMS41Mi0yLjIxNy0zLjY4NS0yLjIxNy02LjQ5NiAwLTIuNzcuNzYtNC45MTQgMi4yOC02LjQzNCAxLjUyLTEuNTQgMy42MjItMi4zMTEgNi4zMDgtMi4zMTEgMi41ODIgMCA0LjYwMi44MTIgNi4wNTkgMi40MzYgMS40NzkgMS42MDMgMi4yMTggMy42NTQgMi4yMTggNi4xNTNsLS4xNTYgMS43MTdoLTExLjU1NmMuNDE2IDEuODc0IDEuNTA5IDIuODExIDMuMjc5IDIuODExIDEuMjI5IDAgMi4xNzYtLjQxNiAyLjg0Mi0xLjI0OWg1LjI3OWE3LjIyIDcuMjIgMCAwMS0uNzgxIDEuOTA1Yy0uMzU0LjU4My0uODMzIDEuMTc3LTEuNDM3IDEuNzgtLjU4My41ODMtMS4zNzQgMS4wNTItMi4zNzMgMS40MDYtMSAuMzU0LTIuMTI0LjUzLTMuMzc0LjUzem0tMy40MzUtMTAuNjJoNi41NTljLS4xNjctLjY4Ni0uNTQyLTEuMjctMS4xMjUtMS43NDgtLjU2Mi0uNS0xLjI4LS43NS0yLjE1NS0uNzUtLjg5NSAwLTEuNjI0LjIzLTIuMTg2LjY4Ny0uNTYyLjQ1OS0uOTI3IDEuMDYyLTEuMDkzIDEuODEyem0yMC41NyA0LjkzNmMuNjA0LjY2NiAxLjM5NS45OTkgMi4zNzMuOTk5Ljk3OSAwIDEuNzctLjMzMyAyLjM3NC0xIC42MDQtLjY4Ny45MDYtMS43MDcuOTA2LTMuMDYgMC0xLjM1NC0uMzAyLTIuMzYzLS45MDYtMy4wMy0uNjA0LS42ODctMS4zOTUtMS4wMy0yLjM3NC0xLjAzLS45NzggMC0xLjc2OS4zNDMtMi4zNzMgMS4wMy0uNjA0LjY2Ny0uOTA2IDEuNjc2LS45MDYgMy4wMyAwIDEuMzUzLjMwMiAyLjM3My45MDYgMy4wNnptMy40NjYgNS42ODRjLTEuNzkgMC0zLjI0OC0uNjc3LTQuMzcyLTIuMDNoLS4xNTZsLS40NjkgMS43MThoLTQuNTI4VjYuNzY3aDUuMTUzdjYuNTU5aC4xNTZjMS0xLjI1IDIuNDA1LTEuODc0IDQuMjE2LTEuODc0IDIuMjQ5IDAgNC4wMjkuNzUgNS4zNDEgMi4yNDggMS4zMzMgMS41IDEuOTk5IDMuNjY1IDEuOTk5IDYuNDk3cy0uNjY2IDQuOTk3LTEuOTk5IDYuNDk2Yy0xLjMxMiAxLjUtMy4wOTIgMi4yNDktNS4zNDEgMi4yNDl6bTE0LjAyLS45NjhjLS41NDEuNTQxLTEuMjA4LjgxMi0xLjk5OS44MTItLjc5MSAwLTEuNDU3LS4yNzEtMS45OTktLjgxMmEyLjc4NSAyLjc4NSAwIDAxLS44MTItMmMwLS43Ny4yNzEtMS40MjUuODEyLTEuOTY3YTIuNjY4IDIuNjY4IDAgMDExLjk5OS0uODQzYy43OTEgMCAxLjQ1OC4yODEgMS45OTkuODQzYTIuNjggMi42OCAwIDAxLjgxMiAxLjk2OGMwIC43Ny0uMjcxIDEuNDM2LS44MTIgMS45OTl6bTEwLjAzMy45NjhjLTEuMzc0IDAtMi41NzItLjE2Ny0zLjU5Mi0uNS0xLjAyLS4zNTQtMS44MTEtLjgzMy0yLjM3My0xLjQzNy0uNTYzLS42MDMtLjk4OS0xLjIyOC0xLjI4MS0xLjg3M2E2Ljk0NCA2Ljk0NCAwIDAxLS41NjItMi4xMjRoNS4zMDljLjA4NC40MTYuMzU0Ljc4LjgxMiAxLjA5My40NTguMzEyIDEuMDIxLjQ2OCAxLjY4Ny40NjggMS42NjYgMCAyLjQ5OC0uMzY0IDIuNDk4LTEuMDkzIDAtLjM1NC0uMjM5LS42MzUtLjcxOC0uODQzLS40NzktLjIwOC0xLjA4My0uMzQ0LTEuODExLS40MDZhMTUuMDU5IDE1LjA1OSAwIDAxLTIuMzEyLS40MDYgMTUuNDg3IDE1LjQ4NyAwIDAxLTIuMzQyLS43OGMtLjcwOC0uMzEzLTEuMzAxLS44MzQtMS43OC0xLjU2My0uNDc5LS43MjgtLjcxOC0xLjYzNC0uNzE4LTIuNzE3IDAtMS41NjEuNjM1LTIuODMxIDEuOTA1LTMuODEgMS4yNy0xIDMuMDI5LTEuNSA1LjI3OC0xLjUgMi40OTggMCA0LjM1Mi41NTMgNS41NTkgMS42NTYgMS4yMDggMS4wODMgMS45MDUgMi40MDUgMi4wOTMgMy45NjdoLTUuMzFjLS4wNDEtLjM1NC0uMjYtLjY0Ni0uNjU2LS44NzUtLjM3NC0uMjUtLjkzNy0uMzc1LTEuNjg2LS4zNzUtMS4yNDkgMC0xLjg3NC4zNjUtMS44NzQgMS4wOTMgMCAuMzM0LjIzOS41OTQuNzE4Ljc4MS40NzkuMTg4IDEuMDczLjMyMyAxLjc4MS40MDYuNzI4LjA2MyAxLjUwOS4yMDkgMi4zNDIuNDM4LjgzMy4yMDggMS42MDMuNDY4IDIuMzExLjc4LjcyOS4zMTMgMS4zMzMuODQ0IDEuODEyIDEuNTkzLjQ3OC43MjkuNzE4IDEuNjM1LjcxOCAyLjcxN2E0LjY3IDQuNjcgMCAwMS0uMzQ0IDEuNzhjLS4yMjkuNTYzLS42MTQgMS4xMjUtMS4xNTUgMS42ODctLjUyMS41NjItMS4zMjIgMS4wMS0yLjQwNSAxLjM0My0xLjA4My4zMzMtMi4zODQuNS0zLjkwNC41em0xNy40OTEtLjMxMmMtMS45OTkgMC0zLjQzNS0uNDE3LTQuMzEtMS4yNS0uODc0LS44NTQtMS4zMTItMi4xNTUtMS4zMTItMy45MDRWMTYuNDVoLTIuNjU0di00LjY4NWgyLjY1NGwuNzgxLTQuMzcyaDQuMzczdjQuMzcyaDMuOTA0djQuNjg1aC0zLjkwNHY2LjA5YzAgLjM5Ni4xMzUuNzI5LjQwNiAxIC4yNy4yNy42MDMuNDA2Ljk5OS40MDZoMi40OTl2NC42ODRoLTMuNDM2em0xMi4zMjMuMzEyYy0xLjY0NCAwLTMuMDUtLjU3My00LjIxNi0xLjcxOC0xLjE0NS0xLjE2Ni0xLjcxOC0yLjg4NC0xLjcxOC01LjE1M1YxMS43NjRoNS4xNTR2OS41MjZjMCAuOTM3LjIyOSAxLjY2Ni42ODcgMi4xODYuNDU4LjUyIDEuMTE0Ljc4MSAxLjk2Ny43ODEuNzkyIDAgMS40MjctLjI2IDEuOTA1LS43OC41LS41NDIuNzUtMS4yNy43NS0yLjE4N3YtOS41MjZoNS4xNTNWMjguNjNoLTQuNTI4bC0uNDY5LTEuNzE4aC0uMTU2Yy0xLjE4NyAxLjM1My0yLjY5NiAyLjAzLTQuNTI5IDIuMDN6bTE4LjQwNy01LjY4NGMuNjA0LjY2NiAxLjM5NS45OTkgMi4zNzQuOTk5Ljk3OCAwIDEuNzctLjMzMyAyLjM3My0xIC42MDQtLjY4Ny45MDYtMS43MDcuOTA2LTMuMDYgMC0xLjM1NC0uMzAyLTIuMzYzLS45MDYtMy4wMy0uNjAzLS42ODctMS4zOTUtMS4wMy0yLjM3My0xLjAzLS45NzkgMC0xLjc3LjM0My0yLjM3NCAxLjAzLS42MDQuNjY3LS45MDYgMS42NzYtLjkwNiAzLjAzIDAgMS4zNTMuMzAyIDIuMzczLjkwNiAzLjA2em0xLjI4MSA1LjY4NGMtMi4yNDkgMC00LjA0LS43NS01LjM3Mi0yLjI0OS0xLjMxMi0xLjQ5OS0xLjk2OC0zLjY2NS0xLjk2OC02LjQ5NiAwLTIuODMyLjY1Ni00Ljk5NyAxLjk2OC02LjQ5NiAxLjMzMi0xLjUgMy4xMjMtMi4yNSA1LjM3Mi0yLjI1IDEuODExIDAgMy4yMTcuNjI1IDQuMjE2IDEuODc1aC4xNTZWNi43NjdoNS4xNTNWMjguNjNoLTQuNTI4bC0uNDY5LTEuNzE4aC0uMTU2Yy0xLjEyNCAxLjM1My0yLjU4MiAyLjAzLTQuMzcyIDIuMDN6bTEzLjExNC0uMzEyVjExLjc2NGg1LjE1M1YyOC42M2gtNS4xNTN6bTQuNjUzLTE4Ljg5NmMtLjUyLjUyLTEuMjE4Ljc4LTIuMDkyLjc4LS44NzUgMC0xLjU3Mi0uMjYtMi4wOTMtLjc4LS41MjEtLjU0MS0uNzgxLTEuMjE4LS43ODEtMi4wMyAwLS44MTIuMjYtMS40NzguNzgxLTEuOTk5LjUyMS0uNTQxIDEuMjE4LS44MTIgMi4wOTMtLjgxMi44NzQgMCAxLjU3Mi4yNyAyLjA5Mi44MTIuNTQxLjUyLjgxMiAxLjE4Ny44MTIgMS45OTlzLS4yNzEgMS40ODktLjgxMiAyLjAzem0xNy44MTUgMTYuOTI4Yy0xLjQ3OSAxLjUyLTMuNTUgMi4yOC02LjIxNiAyLjI4LTIuNjY1IDAtNC43MzYtLjc2LTYuMjE1LTIuMjgtMS40NzgtMS41Mi0yLjIxNy0zLjY3NS0yLjIxNy02LjQ2NXMuNzM5LTQuOTQ1IDIuMjE3LTYuNDY1YzEuNDc5LTEuNTIgMy41NS0yLjI4IDYuMjE1LTIuMjggMi42NjYgMCA0LjczNy43NiA2LjIxNiAyLjI4IDEuNDc4IDEuNTIgMi4yMTcgMy42NzUgMi4yMTcgNi40NjVzLS43MzkgNC45NDUtMi4yMTcgNi40NjV6bS04LjU4OS0zLjQwNGMuNjA0LjY2NiAxLjM5NS45OTkgMi4zNzMuOTk5Ljk3OSAwIDEuNzctLjMzMyAyLjM3NC0xIC42MDQtLjY4Ny45MDYtMS43MDcuOTA2LTMuMDYgMC0xLjM1NC0uMzAyLTIuMzYzLS45MDYtMy4wMy0uNjA0LS42ODctMS4zOTUtMS4wMy0yLjM3NC0xLjAzLS45NzggMC0xLjc2OS4zNDMtMi4zNzMgMS4wMy0uNjA0LjY2Ny0uOTA2IDEuNjc2LS45MDYgMy4wMyAwIDEuMzUzLjMwMiAyLjM3My45MDYgMy4wNnoiDQogICAgICAgICAgZmlsbD0iIzAwMCI+PC9wYXRoPg0KPC9zdmc+);")
    } else {
        var o = `
%c${(r = "demiweb").split("").join("%c %c")}%c
`, c = [],
            i = ["font: 32px/1.5 Helvetica, Arial, sans-serif", "text-transform: uppercase", "color: #fff", "background-color: #ffd800", "padding: 4px 14px"].join(";");
        r.split("").forEach(() => {
            c.push(i), c.push("")
        }), window.console.log(e + " - " + t), window.console.log(o, ...c)
    }
}

helloConsole();


var allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        var observer = lozad(el);
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })

    })
}

allLozadImg();

$(window).scroll(function (e) {
    $el = $('.header');
    $el.toggleClass('header-fixed', $(this).scrollTop() > 50);

});
$('.hero').css('padding-top', $('header').outerHeight());

let hh = $('header').outerHeight();
document.body.style.setProperty('--headerheight', `${hh}px`);

//scroll

//rules open

$(".single-rule__head").click(function () {
    if ($(this).closest('.single-rule').hasClass('open')) {

    } else {
        $('.single-rule').each(function (index, block) {
            if (block === $(this).closest('.single-rule')) {

            } else {
                $(block).removeClass('open');
                $(block).find('.single-rule__text').slideUp();
            }
        });
        $(this).closest('.single-rule').addClass('open');
        $(this).closest('.single-rule').find('.single-rule__text').slideDown();
    }

});

//rules open

//input range control

const valueR = document.querySelector(".input-range output");
const inputR = document.querySelector(".input-range input");
const lineR = document.querySelector(".input-range .line");

let inputsRad = [...document.querySelectorAll('.single-radio input')];
const outSum = document.querySelector(".out-sum strong");
let percentsActive = Number(document.querySelector(".single-radio input:checked").closest('.single-radio').querySelector('.radio-bg').dataset.val);

let currentVal = inputR.value;
let minVal = inputR.min;
let maxVal = inputR.max;

function controlInputRange() {
    valueR.textContent = inputR.value;
    let calculatedNumb = inputR.value * (percentsActive / 100);
    outSum.textContent = calculatedNumb;


    var myRange = document.querySelector('#myRange');
    var myValue = document.querySelector('#myValue');
    var thumbWidth = 10;

    let val = inputR.value;
    let min = inputR.min ? inputR.min : 0;
    let max = inputR.max ? inputR.max : 100;
    let newVal = Number(((val - min) * 100) / (max - min));

    // Sorta magic numbers based on size of the native UI thumb
    lineR.style.setProperty('--ll', `calc(${newVal}% + (${8 - newVal * 0.15}px))`);

    inputsRad.forEach((inp) => {
        inp.addEventListener('change', () => {
            if (inp.checked) {
                percentsActive = Number(inp.closest('.single-radio').querySelector('.radio-bg').dataset.val);
                calculatedNumb = inputR.value * (percentsActive / 100);
                outSum.textContent = calculatedNumb;
            }
        })
    });

    inputR.addEventListener("input", (event) => {
        valueR.textContent = event.target.value;

        val = inputR.value;
        newVal = Number(((val - min) * 100) / (max - min));
        lineR.style.setProperty('--ll', `calc(${newVal}% + (${8 - newVal * 0.15}px))`);
        calculatedNumb = inputR.value * (percentsActive / 100);
        outSum.textContent = calculatedNumb;
    });
}

controlInputRange();


//input range control


var burger = [...document.querySelectorAll('.burger')];
var header = document.querySelector('.header');


function burgerControl() {
    if (burger.length) {
        burger.forEach((btn) => {

            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                header.classList.toggle('active');
                document.body.classList.toggle('no-scroll')

            })
        })
    }
}

burgerControl();


var mobile = $(window).width() < 768;
$('.faq-list .question').on('click', function () {
    var $this = $(this);
    var $item = $('.faq-list .item');
    if (!$this.parent().hasClass('open')) {
        $item.removeClass('open').find('.answer').slideUp(300);
        $this.parent().addClass('open').find('.answer').slideDown(300, function () {
            if (mobile)
                $('html, body').animate({
                    scrollTop: $this.offset().top - $('header').outerHeight()
                }, 500);
        });
    } else {
        $item.removeClass('open').find('.answer').slideUp(300);
    }
});


$('.vacancy-opener').on('click', function () {
    var $this = $(this);
    var $item = $('.vacancy__text');
    if (mobile) {
        if (!$this.parent().hasClass('open')) {
            $item.removeClass('open').find('.hidden-vac').slideUp(300);
            $this.parent().addClass('open').find('.hidden-vac').slideDown(300, function () {

            });
        } else {
            $item.removeClass('open').find('.hidden-vac').slideUp(300);
        }
    }
})
;
//scroll

//sliders
let headerFade = [...document.querySelectorAll('.header-top')];

function startHeaderSlider() {
    if (!headerFade.length) {

    } else {
        headerFade.forEach((sld) => {

            let desktopGap = 15;
            let desktopAmount = 5;

            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let pagin = sld.querySelector('.dots');


            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: true,
                grabCursor: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 600,
                effect: 'fade',

                followFinger: false,
                allowTouchMove: false,
                threshold: true,
                touchMoveStopPropagation: true,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,

                resistance: true,
                resistanceRatio: 0.3,
                cssMode: false,

                navigation: false,
                autoplay: {
                    delay: 3000,
                },
                spaceBetween: 15,
                pagination: false,


            });


        })


    }
}

startHeaderSlider();

let aboutSlider = [...document.querySelectorAll('.about-slider')];

function startAboutSlider() {
    if (!aboutSlider.length) {

    } else {
        aboutSlider.forEach((sld) => {
            let swiperAbout = '';
            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');

            swiperAbout = new Swiper(sldCont, {
                // Optional parameters

                loop: false,
                grabCursor: true,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 500,
                followFinger: false,
                allowTouchMove: false,
                threshold: true,
                touchMoveStopPropagation: false,
                touchStartPreventDefault: false,
                touchStartForcePreventDefault: false,
                touchReleaseOnEdges: true,
                centeredSlides: true,
                resistance: false,
                cssMode: false,
                initialSlide: 2,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },

                autoplay: false,
                spaceBetween: 0,
                pagination: false,
                breakpoints: {
                    768: {
                        cssMode: false,
                        grabCursor: false,
                        followFinger: false,
                        allowTouchMove: false,
                        initialSlide: 2,
                        spaceBetween: 0,
                        slidesPerView: 5,
                        centeredSlides: true,
                    }
                }


            });

            let dts = [...sld.querySelectorAll('.dt')];
            let tb = [...document.querySelectorAll('.about-tabs .single-about')];

            swiperAbout.on('realIndexChange', function () {
                dts.forEach((dt, k) => {
                    tb.forEach((bt) => {
                        bt.classList.remove('active');
                    });
                    tb[swiperAbout.realIndex].classList.add('active');
                })
            });

            dts.forEach((dt, k) => {
                dt.addEventListener('click', () => {
                    swiperAbout.slideTo(k);
                    tb.forEach((bt) => {
                        bt.classList.remove('active');
                    });
                    tb[k].classList.add('active');
                })
            })
        })


    }
}

startAboutSlider();


let homeProducts = [...document.querySelectorAll('.simple-type')];

function startProductsSlider() {
    if (!homeProducts.length) {

    } else {
        homeProducts.forEach((sld) => {

            let desktopGap = 15;
            let desktopAmount = 5;
            if (sld.classList.contains('simple-type--home')) {
                // console.log('aga');
                desktopGap = 34;
                desktopAmount = 4;
            }
            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let pagin = sld.querySelector('.dots');


            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: true,
                grabCursor: true,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 600,

                followFinger: true,
                allowTouchMove: true,
                threshold: true,
                touchMoveStopPropagation: true,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,

                resistance: true,
                resistanceRatio: 0.3,
                cssMode: false,

                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: false,
                spaceBetween: 15,
                pagination: false,
                breakpoints: {
                    768: {
                        slidesPerView: desktopAmount,
                        spaceBetween: desktopGap,
                    }
                }


            });


        })


    }
}

startProductsSlider();

let locationsSlider = [...document.querySelectorAll('.locations__slider')];

function startLocationsSlider() {
    if (!locationsSlider.length) {

    } else {
        locationsSlider.forEach((sld) => {

            let desktopGap = 30;
            let desktopAmount = 4;

            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let pagin = sld.querySelector('.dots');


            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: true,
                grabCursor: true,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 600,

                followFinger: true,
                allowTouchMove: true,
                threshold: true,
                touchMoveStopPropagation: true,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,

                resistance: true,
                resistanceRatio: 0.3,
                cssMode: false,

                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: false,
                spaceBetween: 15,
                pagination: false,
                breakpoints: {
                    768: {
                        slidesPerView: desktopAmount,
                        spaceBetween: desktopGap,
                    }
                }


            });


        })


    }
}

startLocationsSlider();


let productPageSlider = [...document.querySelectorAll('.product-page__images')];

function startProductPageSlider() {
    if (!productPageSlider.length) {

    } else {
        productPageSlider.forEach((sld) => {


            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let pagin = sld.querySelector('.dots');
            let classIs = 'solo-';
            let desktopGap = 6;
            let desktopAmount = 2;
            let cntr = true;
            let haveArrows = false;
            if ([...sld.querySelectorAll('.swiper-slide')].length > 1) {
                cntr = false;
                classIs = 'swiper-'
                haveArrows = {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                }
            }


            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: true,
                grabCursor: true,
                slidesPerView: desktopAmount,
                slidesPerGroup: 1,
                speed: 600,

                followFinger: true,
                allowTouchMove: true,
                threshold: true,
                touchMoveStopPropagation: true,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,
                containerModifierClass: classIs,
                resistance: true,
                resistanceRatio: 0.3,
                cssMode: false,

                navigation: haveArrows,
                centeredSlides: cntr,
                autoplay: false,
                spaceBetween: 1,
                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',
                    spaceBetween: 0,
                },
                breakpoints: {
                    767: {
                        spaceBetween: desktopGap,
                    }
                }


            });


        })


    }
}

startProductPageSlider();

//sliders


// slider

//locations video
$('.single-location video').controls = false;

$(document).ready(function () {
    $(".single-location").hover(function () {

        $(this).find('video')[0].play();
    }, function () {
        var el = $(this).find('video')[0];
        el.pause();
        el.currentTime = 0;
    });
});

//locations video

//marquee

let openSearch = [...document.querySelectorAll('.open-search > a')];

function controlSearch() {
    if (openSearch.length) {
        openSearch.forEach((btn) => {
            let searchBlock = document.querySelector('.header-search');
            let buttonClearSearch = searchBlock.querySelector('.clearsearch');

            buttonClearSearch.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                buttonClearSearch.closest('.searchform').querySelector('.input-search input').value = '';
            });
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                [...document.querySelectorAll('.control-item > a')].forEach((btn2) => {
                    if (btn2 !== btn) {
                        if (btn2.classList.contains('open')) {
                            btn2.click();
                        }

                    }
                });
                if (document.querySelector('.header-cart').classList.contains('open')) {
                    btn.closest('.open-search').classList.add('open');
                    searchBlock.classList.add('open');
                    document.querySelector('.header-cart').classList.remove('open');
                    document.querySelector('.open-cart').classList.remove('open');
                } else {
                    btn.closest('.open-search').classList.toggle('open');
                    if (document.body.classList.contains('no-scroll')) {
                        if (!btn.closest('.open-search').classList.contains('open')) {
                            document.body.classList.remove('no-scroll');
                        }
                    } else {
                        document.body.classList.toggle('no-scroll');
                    }
                    searchBlock.classList.toggle('open');
                    document.querySelector('.header-backplate').classList.toggle('open');

                }


            });


        });

    }
}

controlSearch();


let openCart = [...document.querySelectorAll('.open-cart > a')];

function controlCart() {
    if (openCart.length) {
        openCart.forEach((btn) => {
            let cartBlock = document.querySelector('.header-cart');

            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                [...document.querySelectorAll('.control-item > a')].forEach((btn2) => {
                    if (btn2 !== btn) {
                        if (btn2.classList.contains('open')) {
                            btn2.click();
                        }

                    }
                });
                if (document.querySelector('.header-search').classList.contains('open')) {
                    btn.closest('.open-cart').classList.add('open');
                    cartBlock.classList.add('open');
                    document.querySelector('.header-search').classList.remove('open');
                    document.querySelector('.open-search').classList.remove('open');
                } else {
                    btn.closest('.open-cart').classList.toggle('open');
                    if (document.body.classList.contains('no-scroll')) {
                        if (!btn.closest('.open-cart').classList.contains('open')) {
                            document.body.classList.remove('no-scroll');
                        }
                    } else {
                        document.body.classList.toggle('no-scroll');
                    }
                    cartBlock.classList.toggle('open');
                    document.querySelector('.header-backplate').classList.toggle('open');


                }

            });


        });

    }
}

controlCart();

function ifSortRadiosSelect() {
    let cs = [...document.querySelectorAll('.product-cart__left .form-part__radios:not(.woo-variation-items-wrapper) select')];
    let cs2 = [...document.querySelectorAll('.control select.pofw-option')];
    let cs3 = [...document.querySelectorAll('.gift-card__select-wrapper select')];
    if (cs) {
        cs.forEach((cs1) => {
            cs1.closest('.form-part__radios').classList.add('select-product');
        })

    }
    if (cs2) {
        cs2.forEach((cs22) => {
            cs22.closest('.control').classList.add('select-product');
        })
    }
    if (cs3) {
        cs3.forEach((cs33) => {
            cs33.closest('.gift-card__select-wrapper').classList.add('select-product');
        })
    }
}

ifSortRadiosSelect();
$('.select-product select').niceSelect();


let sortUlLi = [...document.querySelectorAll('.select-product ul li')];

function sortSelectClick() {
    if (!sortUlLi.length) {

    } else {
        sortUlLi.forEach((btn) => {
            btn.addEventListener('click', () => {
                let optValue = btn.dataset.value;
                let event2 = new Event('change');
                let event3 = new Event('click');
                let event4 = new Event('change');
                let suggestOpt = document.querySelector(`option[value='${optValue}']`);
                // btn.closest('.sort-selector').querySelector('select option[selected]').removeAttribute('selected');

                suggestOpt.selected = 'selected';
                suggestOpt.setAttribute('selected', 'selected');
                suggestOpt.click();
                btn.closest('.nice-select').querySelector('.current').click();
                // console.log(btn.closest('.filter-select').querySelector('select'));
                // console.log(suggestOpt);
                // $('select.sort-select').niceSelect();
            })
        });

        if (window.innerWidth < 768) {


            $('body').on('click', '.nice-select > span', function (e) {

                if (!$(this).closest('.nice-select').hasClass('open')) {
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $(this).offset().top - $('.header').height()
                    }, 300);
                }
            });
        }
    }
}

sortSelectClick();


// control menus

let menuSubChild = [...document.querySelectorAll('.header .menu-item-has-children > a')];
let footerSubChild = [...document.querySelectorAll('.footer-menu > span')];

function controlHeaderSub() {
    if (menuSubChild.length) {
        menuSubChild.forEach((btn) => {
            let tr = window.innerWidth - btn.getBoundingClientRect().right;
            btn.closest('.menu-item-has-children').style.setProperty('--pr', `${tr}px`);
            let arrowBlock = document.createElement('div');
            arrowBlock.classList.add('arrow-menu');

            arrowBlock.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                btn.classList.toggle('open');
            });
            btn.appendChild(arrowBlock);
        })
    }
    if (footerSubChild.length) {
        footerSubChild.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                btn.classList.toggle('open');
            })
        })
    }

}

controlHeaderSub();

// control menus

// controling catering tabs
function ifHaveShips(tabs, tracking, def, hd) {
    if (document.querySelector('.simple-type')) {
        const sections = document.querySelectorAll(".catalog-page__list .simple-type");
        const menuItems = tabs;
        let ind = 0;

        sections.forEach((sec, index) => {
            let top = window.scrollY;
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;
            if (top >= offset - 200 && top < offset + height - 200) {
                const target = tabs[index];
                ind = index;
                activeLink(target);
            } else {
            }
        });

        function onScroll2() {
            var scrollPos = $(document).scrollTop();

            window.onscroll = () => {
                sections.forEach((sec, index) => {
                    let top = window.scrollY;
                    let offset = sec.offsetTop;
                    let height = sec.offsetHeight;

                    if (top >= offset - 250 && top < offset + height - 250) {
                        const target = tabs[index];
                        ind = index;
                        activeLink(target);

                    } else {
                    }
                })
            };
            window.onload = () => {
                sections.forEach((sec, index) => {
                    let top = window.scrollY;
                    let offset = sec.offsetTop;
                    let height = sec.offsetHeight;
                    if (top >= offset - 200 && top < offset + height - 100) {
                        const target = tabs[index];
                        activeLink(target);

                    } else {
                    }
                })
            };
        }

        function activeLink(li) {
            tabs.forEach((item) => item.classList.remove('active'));

            if (li) {
                li.classList.add('active');
                let activeNumber = ind;
                let elementWidth = tabs[ind].offsetWidth;
                let elementX = tabs[ind].getBoundingClientRect().x;
                let windowWidth = document.body.clientWidth;
                let toRight = windowWidth - elementWidth - elementX - hd;
                tracking.style.setProperty('--rr', `${toRight}px`);
            }

        }


        onScroll2();
        $(document).on("scroll", onScroll2);


    }
}


let blockTabs = [...document.querySelectorAll('.catering-catalog__tabs')];

function controlCateringTabs() {
    if (blockTabs.length) {
        blockTabs.forEach((block) => {
            let activeNumber = 0;
            let spanMain = block.querySelector('.tab-select');
            let headTabs = Number(window.getComputedStyle(block.closest('.catering-catalog__head-tabs'), null).getPropertyValue('padding-right').replace('px', ''));
            // console.log(headTabs);
            let tabBtns = [...block.querySelectorAll('.tab-btn')];
            let tracking = block.querySelector('.tracking-el');
            let gapStyle = window.getComputedStyle(block.querySelector('ul')).getPropertyValue('gap');
            let defaultTrack = 0;
            tracking.style.setProperty('--rr', defaultTrack);

            tabBtns.forEach((tab, k) => {
                if (tab.classList.contains('active')) {
                    activeNumber = k;
                    let elementWidth = tab.offsetWidth;
                    console.log(elementWidth);
                    let elementX = tab.getBoundingClientRect().x;
                    console.log(elementX);

                    let windowWidth = document.body.clientWidth;
                    console.log(windowWidth);
                    console.log(headTabs);

                    let toRight = windowWidth - elementWidth - elementX - headTabs;
                    console.log(toRight);
                    tracking.style.setProperty('--rr', `${toRight}px`);

                }

                tab.addEventListener('click', (e) => {
                    console.log(tab.getBoundingClientRect().x);
                    let elementWidth = tab.offsetWidth;
                    let elementX = tab.getBoundingClientRect().x;
                    let windowWidth = document.body.clientWidth;
                    let toRight = windowWidth - elementWidth - elementX - headTabs;
                    if (!tab.closest('.catalog-page')) {
                        e.preventDefault();
                        e.stopPropagation();

                        if (tab.closest('.catering-tabs')) {
                            if (tab.closest('.sub_catering')) {
                                let link = tab.querySelector('a');
                                let href = link.getAttribute('href');
                                if (href) {
                                    window.location.href = href;
                                }

                            } else {
                                let lss = [...document.querySelectorAll('.single-list')];

                                tabBtns.forEach((btn2) => {
                                    btn2.classList.remove('active');
                                });
                                tab.classList.add('active');
                                document.body.classList.remove('no-scroll');
                                let inner = tab.innerHTML;
                                spanMain.classList.remove('open');
                                spanMain.innerHTML = inner;
                                let newPos = (k * Number(tab.offsetWidth)) + (k * Number(gapStyle.replace(/\D/g, '')));
                                tracking.style.setProperty('--rr', `${toRight}px`);

                                $([document.documentElement, document.body]).animate({
                                    scrollTop: $(lss[k]).offset().top - $('.header').height() - $('.catering-catalog__head-tabs').height()
                                }, 600);
                            }
                        } else {
                            if (tab.classList.contains('active')) {

                            } else {
                                tabBtns.forEach((btn2) => {
                                    btn2.classList.remove('active');
                                });
                                tab.classList.add('active');
                                document.body.classList.remove('no-scroll');
                                let inner = tab.innerHTML;
                                spanMain.classList.remove('open');
                                spanMain.innerHTML = inner;

                                let newPos = (k * Number(tab.offsetWidth)) + (k * Number(gapStyle.replace(/\D/g, '')));
                                tracking.style.setProperty('--rr', `${toRight}px`);
                                [...tab.closest('.owner-cat').querySelectorAll('.item-tab')].forEach((tab, m) => {
                                    if (m === k) {
                                        tab.classList.add('active');


                                    } else {
                                        tab.classList.remove('active');

                                    }
                                });

                            }
                        }

                    } else {
                        // console.log('tut');
                        if (!tab.closest('.catalog-page--inside')) {

                            let typesList = [...document.querySelectorAll('.catalog-page__list .simple-type')][k];
                            e.preventDefault();
                            e.stopPropagation();

                            tabBtns.forEach((btn2) => {
                                btn2.classList.remove('active');
                            });
                            tab.classList.add('active');
                            document.body.classList.remove('no-scroll');

                            tracking.style.setProperty('--rr', `${toRight}px`);

                            $([document.documentElement, document.body]).animate({
                                scrollTop: $(typesList).offset().top - $('header').outerHeight() - $('.catering-catalog__head-tabs').height()
                            }, 600);

                        } else {

                            tabBtns.forEach((btn2) => {
                                btn2.classList.remove('active');
                            });
                            tab.classList.add('active');
                            document.body.classList.remove('no-scroll');
                            let inner = tab.innerHTML;
                            spanMain.classList.remove('open');
                            spanMain.innerHTML = inner;

                            let newPos = (k * Number(tab.offsetWidth)) + (k * Number(gapStyle.replace(/\D/g, '')));
                            tracking.style.setProperty('--rr', `${toRight}px`);
                        }

                    }

                })
            });
            if (spanMain) {
                spanMain.addEventListener('click', () => {
                    spanMain.classList.toggle('open');
                    document.body.classList.toggle('no-scroll');
                    if (spanMain.classList.contains('open')) {
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $(spanMain).offset().top - $('.header').height()
                        }, 300);
                    }
                })
            }

            if (tracking.closest(".catalog-page:not(.catalog-page--inside)")) {
                ifHaveShips(tabBtns, tracking, defaultTrack, headTabs);
            }


        })
    }
}

controlCateringTabs();

// controling catering tabs
$('body').on('click', '.product-page__info-block > span', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('open');
});
// catalog view type

let typeViewBtns = [...document.querySelectorAll('.catalog-sorts .single-sort')];

function changeTypeView() {
    if (typeViewBtns.length) {
        typeViewBtns.forEach((btn, k) => {
            let cat = btn.closest('.catering-catalog__catalog').querySelector('.catering-catalog__list');
            btn.addEventListener('click', () => {
                if (!btn.classList.contains('active')) {
                    typeViewBtns.forEach((btn2) => {
                        btn2.classList.remove('active');
                    });
                    btn.classList.add('active');
                    if (k === 0) {
                        cat.classList.add('double');
                    } else {
                        cat.classList.remove('double');
                    }
                }
            })
        })
    }
}

changeTypeView();

// catalog view type
// plus minus


$('body').on('click', '.btn-mod', function (e) {
    e.preventDefault();
    e.stopPropagation();
    let data = $(this)[0].dataset.mod;
    $(`.modal-window[data-modal='${data}']`).addClass('visible');
    $('body').addClass('no-scroll');
});


$('body').on('click', '.modal-container .cls', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.modal-window').each(function (k) {
        $(this).removeClass('visible');
    });
    $('body').removeClass('no-scroll');
});

$('body').on('click', '.header-backplate', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.controlling-block').each(function (k) {
        $(this).removeClass('open');
    });
    $(this).removeClass('open');

    if ($('.header').hasClass('active')) {

    } else {
        $('body').removeClass('no-scroll');
    }
});
$('body').on('click', '.controlling-block .cls', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.controlling-block').each(function (k) {
        $(this).removeClass('open');
    });
    $('.header-backplate').removeClass('open');
    if ($('.header').hasClass('active')) {

    } else {
        $('body').removeClass('no-scroll');
    }
});
$('body').on('click', '.modal-window .backplate', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.modal-window').each(function (k) {
        $(this).removeClass('visible');
    });
    $('body').removeClass('no-scroll');
});


let btnMod = [...document.querySelectorAll('.btn-mod')];
let textMod = [...document.querySelectorAll('.play-btn')];
let modJobs = [...document.querySelectorAll('.mod-jobs')];
let modals = [...document.querySelectorAll('.modal-window')];
let closeModal = [...document.querySelectorAll('.modal-close')];
let clsSecModal = [...document.querySelectorAll('.modal-window .cls')];
let backplates = [...document.querySelectorAll('.backplate')];

function controlModal() {
    if (btnMod.length || textMod.length || modJobs.length) {
        btnMod.forEach((btn) => {
            let data = btn.dataset.mod;

            btn.addEventListener('click', (e) => {

                e.preventDefault();
                e.stopPropagation();


                if (window.innerWidth < 768) {
                    let lnk = document.querySelector('.modal-window--form');


                    $([document.documentElement, document.body]).animate({
                        scrollTop: $(lnk).offset().top
                    }, 600);
                } else {
                    modals.forEach((mod) => {
                        if (mod.dataset.modal === data) {
                            document.body.classList.add('no-scroll');
                            mod.classList.add('visible');

                        }
                    });
                }
            })
        });


        $('body').on('click', '.mod-jobs', function (e) {
            e.preventDefault();
            e.stopPropagation();

            let data = this.dataset.mod;

            modals.forEach((mod) => {
                if (mod.dataset.modal === data) {
                    document.body.classList.add('no-scroll');

                    mod.classList.add('visible');

                }
            })


        });


        backplates.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');
                if (btn.closest('.modal-window').classList.contains('modal-window--video')) {
                    btn.closest('.modal-window').querySelector('.video-container').innerHTML = '';
                }

            })
        });

        clsSecModal.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');

                if (btn.closest('.modal-window').classList.contains('modal-window--video')) {
                    btn.closest('.modal-window').querySelector('.video-container').innerHTML = '';
                }
            })
        });


    }
}

// controlModal();


//video controls

var player3;

function createVideo(videoBlockId, videoId, btn) {
    player3 = new YT.Player(videoBlockId, {
        videoId: videoId,
        playerVars: {
            // 'autoplay':1,
            'autohide': 1,
            'showinfo': 0,
            'rel': 0,
            'loop': 1,
            'playsinline': 1,
            'fs': 1,
            'allowsInlineMediaPlayback': true
        },
        events: {
            'onReady': function (e) {
                // e.target.mute();
                // if ($(window).width() > 991) {

                e.target.playVideo();

                // }
            },

        }
    });
}


let botSlides = [...document.querySelectorAll('.play-btn')];
var player2;

$('body').on('click', '.play-btn', function (e) {
    let btn = this;
    let type = btn.dataset.videoType;
    let id = btn.dataset.videoId;
    let modalVideo = $('.modal-window--video')[0];
    // console.log(modalVideo);
    let videoId = id;
    document.body.classList.add('no-scroll');
    modalVideo.classList.add('visible');

    if (type === 'vimeo') {
        player2 = new Vimeo.Player($('.modal-window--video .video-container').html(
            '<iframe class="video-iframe" allow="autoplay" src="https://player.vimeo.com/video/' +
            videoId +
            '?playsinline=1&autoplay=1&transparent=1&api=1">'
        ));
        player2.play();
        // btn.classList.add('pause');

    } else {
        if (type === 'video') {

            let videoBl = document.createElement('video');
            videoBl.src = id;
            videoBl.playsinline = true;
            videoBl.controls = true;
            modalVideo.querySelector('.video-container').append(videoBl);
            videoBl.play();
        } else {

            $('.modal-window--video .video-container').append('<div class="video-iframe" id="' + videoId + '"></div>');
            createVideo(videoId, videoId, btn);
        }
    }
});


$('body').on('click', '.btn-to', function (e) {
    e.preventDefault();
    e.stopPropagation();
    let lnk = this.closest('.page-section').nextElementSibling.querySelector('.scroll-cont');
    let paddingT = window.getComputedStyle(lnk).getPropertyValue('padding-top');
    // console.log(paddingT);
    paddingT = paddingT.substring(0, paddingT.length - 2);

    $([document.documentElement, document.body]).animate({
        scrollTop: $(lnk).offset().top - $('.header').outerHeight(true) + Number(paddingT)
    }, 600);

});
