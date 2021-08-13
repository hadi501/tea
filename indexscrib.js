var id = ["021", "432", "555", "313", "777"];
var id_dummy = ["021", "432", "575", "323", "777"];

var items = [
    ["Rapat Khusus", "Abdul Kurniawan Putra S.E", "Ahmad Paris Nur Rozak M.Sc"],
    ["Rapat Umum", "Muhammad Fattah Masyhuri S.H", "Daniar Hanief S.Pd"],
    ["Rapat Komisi", "Febrian Miftah Ramdhani S.I", "Ilham Muhammad Raffi S.H"],
    ["Rapat Komisi", "Febrian Miftah Ramdhani S.I", "Ilham Muhammad Raffi S.H"],
    ["Rapat Komisi", "Febrian Miftah Ramdhani S.I", "Ilham Muhammad Raffi S.H"]
];


$(document).ready(function () {
    preloaderFadeOutTime = 1000;
    function hidePreloader() {
        var preloader = $('.pre-loader');
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});

var jumlahData = items.length;
for (i = 0; i < jumlahData; i++) { buat(i) }

function buat(i) {
    let content = '';

    content += `
                <div id="kartu" class="card w-75 kiri ${id[i]}">
                    <div class="card-body">
                        <table>
                            <tr>
                                <th><h4 class="card-title" id="judul">${items[i][0]}</h4></th>
                                <th></th>
                                <th class="nomer" id="id">${id[i]}</</th>
                            </tr>
                            <tr>
                                <th class="admin"><p class="card-text">Penyelenggara</p></th>
                                <td class="nama"><p class="card-text">: ${items[i][1]}</</p></td>
                            </tr>
                            <tr>
                                <th class="admin"><p class="card-text">Host</p></th>
                                <td class="nama"><p class="card-text">: ${items[i][2]}</</p></td>
                            </tr>
                            <tr>
                                <td colspan="3"><button class="btn button"
                                    onclick="window.location.href = 'keterangan.html' +
                                    '?subjek_rapat=' + '${items[i][0]}' + '&id=' + '${id[i]}' + '&penyelenggara=' + '${items[i][1]}' + '&host=' + '${items[i][2]}'
                                    ">Join</button></td>
                            </tr>
                        </table>
                    </div>
                </div>
            `
        if (i < id.length){
            $(".col-12").append(content);
        }
        if(i == id.length-1){
            $(".col-12").prepend(content);
        }
    }

var numItems = $('.card').length
for (let i = 0; i < numItems; i++) {
    window.addEventListener('load', function () {
        setTimeout(() => {
            baru();
        }, 200 * i)
    })
}

function baru(){
    var card = document.querySelector('.kiri');
        card.classList.add('in');
        card.classList.remove("kiri");
        card.classList.add("kanan");

        setTimeout(() => {
            card.classList.add("up");
        }, 450 * (i + 1))
}

setTimeout(() => {
    for (var i = 0; i < id.length; i++) {
        var banding = id[i].localeCompare(id_dummy[i]);

        if (banding !== 0) {
            var el = $('.kanan').closest(`.${id[i]}`);
            cuteHide(el);
            id[i] = id[i].toString().replace(id[i], id_dummy[i]);
            buat(i);
            setTimeout(() => {
                baru();
            }, 300 * i)
        }
    }
}, 3000)

function tambah(){
    id.push("074");
    items.push("Rapat Komisi", "Febrian Miftah Ramdhani S.I", "Ilham Muhammad Raffi S.H");
    for (var i = id.length-1; i < id.length; i++) {
        buat(i);
        setTimeout(() => {
            baru();
        }, 100 * i)
    }
}

console.log(id);
function fadeOutEffect() {
    var numItems = $('.card').length
    setInterval(function () {

        for (let i = 0; i < numItems; i++) {
            setTimeout(() => {
                const card = document.querySelector(".kanan");
                card.classList.remove("kanan");
                card.classList.remove("in");
                card.classList.remove("up");
                card.classList.add("out");
            }, 150 * i)
        }
    }, 100);


    setTimeout(() => {
        window.location.href = 'login.html'
    }, 500)

}

function cuteHide(el) {
    el.animate({ opacity: '0' }, 500, function () {
        el.animate({ height: '0px' }, 500, function () {
            el.remove();
        });
    });
}

$('.delete').on('click', function () {
    var el = $(this).closest('.kanan');
    cuteHide(el);
});