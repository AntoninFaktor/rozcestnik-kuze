/* "<a href=''><h3></h3><img src='' loading='lazy'></a>" */

let linkArr = ["<a href='https://www.faktor-leather.cz'><h3>Faktor Leather</h3><img src='img/faktor_leather.jpg' loading='lazy'></a>",
                "<a href='https://www.instagram.com/panek.leather.goods/'><h3>PÁNEK LEATHER GOODS</h3><img src='img/panek_leather_goods.jpg' loading='lazy'></a>",
              "<a href='https://www.dkkd.cz'><h3>Tomsu & Knedla Leatherworks</h3><img src='img/tomsu&knedla.jpg' loading='lazy'></a>",
              "<a href='https://www.instagram.com/olda_podracky/'><h3>Olda Podracký</h3><img src='img/olda_podracky.jpg' loading='lazy'></a>",
              "<a href='https://www.instagram.com/dubenpetr/'><h3>Petr Duben - Made In Prague</h3><img src='img/petr_duben.jpg' loading='lazy'></a>",
              "<a href='https://www.instagram.com/janskola.handcraftedleather/'><h3>Jan Skola - Tabor</h3><img src='img/jan_skola.jpg' loading='lazy'></a>",
              "<a href='https://www.instagram.com/joryleatherworking/'><h3>joryleatherworking</h3><img src='img/joryleatherworking.jpg' loading='lazy'></a>",
              "<a href='http://www.fi-ji.cz'><h3>FI-JI</h3><img src='img/fi-ji.jpg' loading='lazy'></a>",
              "<a href='https://www.leatherjan.cz'><h3>LeatherJan.cz</h3><img src='img/leatherjan.cz.jpg' loading='lazy'></a>",
              "<a href='https://www.krojzl.com'><h3>Krojzl Bespoke Shoemaker</h3><img src='img/krojzl.jpg' loading='lazy'></a>",
              "<a href='https://www.auraoriginal.cz'><h3>AURA original</h3><img src='img/aura_original.jpg' loading='lazy'></a>",
              "<a href='https://ogarbags.cz'><h3>Ogarbags CZ</h3><img src='img/ogar.jpg' loading='lazy'></a>",
              "<a href='https://www.venavalnoha.cz'><h3>vena valnoha</h3><img src='img/vena_valnoha.jpg' loading='lazy'></a>",
              "<a href='https://www.stepanjirka.cz'><h3>Štěpán Jirka</h3><img src='img/stepan_jirka.jpg' loading='lazy'></a>",
              "<a href='https://www.tomaslinger.cz'><h3>Tomas Linger</h3><img src='img/tomas_linger.jpg' loading='lazy'></a>",
              "<a href='http://www.sima-prague.com/en/'><h3>Sima Prague</h3><img src='img/sima_prague.jpg' loading='lazy'></a>",
              "<a href='https://www.zkuze.cz'><h3>Petr Dudek</h3><img src='img/petr_dudek.jpg' loading='lazy'></a>",
              "<a href='https://www.pavelhlavka.cz'><h3>Pavel Hlavka</h3><img src='img/pavel_hlavka.jpg' loading='lazy'></a>",
              "<a href='https://www.instagram.com/saddlery_martin_povr/'><h3>Martin Povr</h3><img src='img/martin_povr.jpg' loading='lazy'></a>",
              "<a href='https://www.brasnarstvitatiana.cz'><h3>Brašnářství Tatiana</h3><img src='img/brasnarstvi_tatiana.jpg' loading='lazy'></a>",
              "<a href='https://www.kmsaddlery.cz'><h3>K.M. Saddlary</h3><img src='img/km_saddlary.jpg' loading='lazy'></a>",
              "<a href='https://vyrobazkuze.alexar.cz'><h3>Výroba z kůže Alexar</h3><img src='img/vyroba_z_kuze_alexar.jpg' loading='lazy'></a>",
              "<a href='https://www.horakuze.cz'><h3>Ateliér Horakůže</h3><img src='img/atelier_horakuze.jpg' loading='lazy'></a>",
              "<a href='https://www.instagram.com/kozenevyrobkyvozniak/'><h3>Kožené výrobky Martin Vozniak</h3><img src='img/kozene-vyrobky-martin-vozniak.jpg' loading='lazy'></a>",
              "<a href='https://www.instagram.com/tore.atelier/'><h3>TORE</h3><img src='img/tore.jpg' loading='lazy'></a>",
              "<a href='https://www.firmy.cz/detail/631735-roman-tlusty-kozedelstvi-mastodont-praha-nusle.html'><h3>Roman Tlustý - kožedělství Mastodont</h3><img src='img/roman_tlusty-kozedelstvi_mastodont.jpg' loading='lazy'></a>",
              "<a href='https://www.clavisoffice.cz'><h3>Calvis Office</h3><img src='img/calvis_office.jpg' loading='lazy'></a>",
              "<a href='https://www.instagram.com/ameliae_kabelky'><h3>Amelia E. | česká značka kabelek</h3><img src='img/ameliae_kabelky.jpg' loading='lazy'></a>",
              "<a href='https://www.benhrubes.cz'><h3>Ben Hrubes</h3><img src='img/ben_hrubes.jpg' loading='lazy'></a>",
              "<a href='https://www.lawart.cz'><h3>Lawart ❖ obuvnický salon</h3><img src='img/lawart.jpg' loading='lazy'></a>",
              "<a href='https://www.kozedelnik.cz/'><h3>KOŽEDĚLNÍK JAN PLANIČKA</h3><img src='img/kozedelnik_jan_planicka.jpg' loading='lazy'></a>",
              "<a href='https://www.jerva.cz'><h3>Jerva</h3><img src='img/jerva.jpg' loading='lazy'></a>",
              "<a href='https://www.bag4you.cz/kontakty'><h3>bag4you.cz</h3><img src='img/bag4you.jpg' loading='lazy'></a>",
              "<a href='https://mrkevleather.cz'><h3>mrkevleather.cz</h3><img src='img/mrkevleather.cz.jpg' loading='lazy'></a>",
              "<a href='https://www.svecmichal.cz'><h3>Michal Švec</h3><img src='img/michal_svec.jpg' loading='lazy'></a>",
              "<a href='https://www.ondruskovic.com/'><h3>Ondruškovic</h3><img src='img/ondruskovic.jpg' loading='lazy'></a>",
              "<a href='https://www.facebag.cz'><h3>Facebag</h3><img src='img/facebag.jpg' loading='lazy'></a>",
              "<a href='https://www.hemrlik.design'><h3>Hemrlík Design</h3><img src='img/hemrlik.jpg' loading='lazy'></a>",
              "<a href='https://www.radu.cz'><h3>RaduAtelier</h3><img src='img/radu_atelier.jpg' loading='lazy'></a>",
              "<a href='https://www.taufercustomsewing.cz'><h3>Taufer</h3><img src='img/taufer.jpg' loading='lazy'></a>",
              "<a href='https://www.montmat.cz/'><h3>MontMat</h3><img src='img/montmat.jpg' loading='lazy'></a>",
              "<a href='https://www.poctivyopasek.cz'><h3>poctivyopasek</h3><img src='img/poctivyopasek.jpg' loading='lazy'></a>",
              "<a href='http://www.brasnarstvi-valesova.cz/index.php/home'><h3>Brašnářství Valešová</h3><img src='img/brasnarstvi_valesova.jpg' loading='lazy'></a>",
              "<a href='https://halflung.cz'><h3>Halflung - Výrobky z kůže</h3><img src='img/halflung_leather.jpg' loading='lazy'></a>",
              "<a href='http://www.sedlarstvi-brasnarstvi.cz/index.html'><h3>Sedlářství a brašnářství Haki</h3><img src='img/sedlarstvi_brasnarstvi_haki.jpg' loading='lazy'></a>",
              "<a href='https://www.spurny.net'><h3>Sedlářství Spurný</h3><img src='img/sedlarstvi_spurny.jpg' loading='lazy'></a>",
              "<a href='https://www.dobraczech.cz'><h3>Výrobky z kůže - Dobra</h3><img src='img/dobra.jpg' loading='lazy'></a>",
              "<a href='https://www.instagram.com/alistaireshop/'><h3>alistaireshop</h3><img src='img/alistaireshop.jpg' loading='lazy'></a>",
              "<a href='https://www.beliere.cz/'><h3>Béliere</h3><img src='img/beliere.jpg' loading='lazy'></a>",
              "<a href='https://www.bacuta.net'><h3>bačuta</h3><img src='img/bacuta.jpg' loading='lazy'></a>",
              "<a href='https://www.elcalvera.com'><h3>El Calvera</h3><img src='img/manufaktura_el_calvera.jpg' loading='lazy'></a>"
            ]

function shuffle(array) {
  let currentIndex = array.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  }

let container = document.getElementById("container")
shuffle(linkArr)
container.innerHTML = linkArr.join("")
