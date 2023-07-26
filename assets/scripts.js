"use strict";

const isMobile = window.matchMedia("(max-width: 767px)").matches;

window.addEventListener("load", initMap);

function initMap() {
  const batumi = {
    lat: 41.69736371539678,
    lng: isMobile ? 42.05 : 42.16411372292937,
  };

  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: isMobile ? 9 : 10,
    center: batumi,
    streetViewControl: true,
    fullscreenControl: true,
    zoomControl: true,
    mapTypeControl: true,
    gestureHandling: isMobile ? "cooperative" : "auto",
  });

  let currentInfoWindow = null;

  function addMarker({ lat, lng, letter, title, subtitle, link, image }) {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: map,
      icon: {
        url:
          letter === "T" || letter === "W"
            ? `https://s1.infoajara.com/images/anbanitour/${letter}_pin-normal.svg`
            : `https://anbanitour.ge/assets/img/letters/${letter}_pin-normal.svg`,
        scaledSize: new google.maps.Size(36, 36),
      },
    });

    const contentString = `
    <div class="center">
      <img width="100%" height="130px" src="${image}" alt="${title}" style="border-radius: 6px">
      <h3>
        ${title}
        <span class="subtitle">${subtitle}</span>
      </h3>
      ${link ? `<a class="link" href="${link}" target="_blank">ნახვა</a>` : ""}
    </div>
  `;

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    marker.addListener("click", () => {
      if (currentInfoWindow) {
        currentInfoWindow.close();
      }

      infowindow.open(map, marker);

      currentInfoWindow = infowindow;
    });
  }

  const markers = [
    {
      id: 1,
      lat: 41.6562587,
      lng: 41.64067,
      title: "ა",
      subtitle: "ნბანის კოშკი",
      text: "ა",
      letter: "a",
      link: null,
      image:
        "https://anbanitour.ge/_cdn/2210/00/95/f518e60f7c71464db6c1758040537ee2/a.png",
    },
    {
      id: 2,
      lat: 41.695768,
      lng: 41.712146,
      title: "ბ",
      subtitle: "ოტანიკური ბაღი",
      text: "ბ",
      letter: "b",
      link: "http://bbg.ge/ge/home",
      image:
        "https://anbanitour.ge/_cdn/2210/00/97/b33e2e324e4040a39fdcc4966889c6f1/b.png",
    },
    {
      id: 3,
      lat: 41.57317,
      lng: 41.573216,
      title: "გ",
      subtitle: "ონიოს ციხე",
      text: "გ",
      letter: "g",
      link: "https://visitajara.com/sights/189",
      image:
        "https://anbanitour.ge/_cdn/2210/00/99/c9ce6aea060241b1bd84d0ce286ad528/g.png",
    },
    {
      id: 4,
      lat: 41.6466546,
      lng: 42.1072594,
      title: "დ",
      subtitle: "ანდალოს ხიდი",
      text: "დ",
      letter: "d",
      link: "https://visitajara.com/sights/25",
      image:
        "https://anbanitour.ge/_cdn/2210/01/01/11e42b80ddbb449c911093c48002e2e1/d.png",
    },
    {
      id: 5,
      lat: 41.65112,
      lng: 41.636191,
      title: "ე",
      subtitle: "ვროპის მოედანი",
      text: "ე",
      letter: "e",
      link: null,
      image:
        "https://anbanitour.ge/_cdn/2210/01/03/ee71cddbf94144138c0928f7f73b1cee/e.png",
    },
    {
      id: 6,
      lat: 41.647591,
      lng: 41.620594,
      title: "ვ",
      subtitle: "ელობილიკი",
      text: "ვ",
      letter: "v",
      link: null,
      image:
        "https://anbanitour.ge/_cdn/2210/01/05/640cee69e42847818c52b6ebe5c05d46/v.png",
    },
    {
      id: 7,
      lat: 41.65642,
      lng: 41.633144,
      title: "ზ",
      subtitle: "ღვა",
      text: "ზ",
      letter: "z",
      link: null,
      image:
        "https://anbanitour.ge/_cdn/2210/01/07/d58f14c03c8840a6b1d26f4df8522f0f/z.png",
    },
    {
      id: 8,
      lat: 41.6268891,
      lng: 42.3125161,
      title: "თ",
      subtitle: "აგო",
      text: "თ",
      letter: "T",
      link: "https://visitajara.com/routes/8",
      image:
        "https://anbanitour.ge/_cdn/2210/01/09/ac01fca3423b4267ac2b327b8bc88b21/t.png",
    },
    {
      id: 9,
      lat: 41.797924,
      lng: 41.786068,
      title: "ი",
      subtitle: "ახნი",
      text: "ი",
      letter: "i",
      link: null,
      image:
        "https://anbanitour.ge/_cdn/2210/01/11/eb8e29ab62974ddab494850138fc0aec/i.png",
    },
    {
      id: 10,
      lat: 41.545749,
      lng: 41.561787,
      title: "კ",
      subtitle: "ვარიათი",
      text: "კ",
      letter: "k",
      link: null,
      image:
        "https://anbanitour.ge/_cdn/2210/01/13/392cccc2584248c5899aacb453b7c2c5/k.png",
    },
    {
      id: 11,
      lat: 41.521867,
      lng: 41.549204,
      title: "ლ",
      subtitle: "აზური მუზეუმი",
      text: "ლ",
      letter: "l",
      link: null,
      image:
        "https://anbanitour.ge/_cdn/2210/01/63/68e7ce357ddb43dca6b9daa87066e759/artboard-7.png",
    },
    {
      id: 12,
      lat: 41.48929,
      lng: 41.858906,
      title: "მ",
      subtitle: "აჭახელა",
      text: "მ",
      letter: "m",
      link: "https://infoajara.com/u/9886689",
      image:
        "https://anbanitour.ge/_cdn/2210/01/17/bda0c84290174e229cf12517464b00bd/m.png",
    },
    {
      id: 13,
      lat: 41.661698,
      lng: 41.680265,
      title: "ნ",
      subtitle: "ობელები",
      text: "ნ",
      letter: "n",
      link: "https://visitajara.com/sights/6",
      image:
        "https://anbanitour.ge/_cdn/2210/01/61/19b97c7bec7047cbb87876db963918b5/n.png",
    },
    {
      id: 14,
      lat: 41.8562561,
      lng: 41.9275329,
      title: "ო",
      subtitle: "და",
      text: "ო",
      letter: "o",
      link: "https://www.facebook.com/visitbatumi/posts/4410646149009465/",
      image:
        "https://anbanitour.ge/_cdn/2210/01/19/5285ef17297949af9d60b01f1ff3ad29/o.png",
    },
    {
      id: 15,
      lat: 41.768576,
      lng: 41.753206,
      title: "პ",
      subtitle: "ეტრა",
      text: "პ",
      letter: "p",
      link: "https://visitajara.com/sights/45",
      image:
        "https://anbanitour.ge/_cdn/2210/01/21/8075f55610a44b1084da573f487ed83c/p.png",
    },
    {
      id: 16,
      lat: 41.863688,
      lng: 41.789911,
      title: "ჟ",
      subtitle: "ანგბადი",
      text: "ჟ",
      letter: "zh",
      link: null,
      image:
        "https://anbanitour.ge/_cdn/2210/01/23/c2ea5b1dd8d34ec69ff0c440b1c86efe/j.png",
    },
    {
      id: 17,
      lat: 41.650014,
      lng: 41.625316,
      title: "რ",
      subtitle: "ვაფეხა",
      text: "რ",
      letter: "r",
      link: null,
      image:
        "https://anbanitour.ge/_cdn/2210/01/25/249393ab502c471bbb49d9af4bb60317/r.png",
    },
    {
      id: 18,
      lat: 41.58457,
      lng: 42.329392,
      title: "ს",
      subtitle: "ხალთა",
      text: "ს",
      letter: "s",
      link: "https://infoajara.com/u/7291734",
      image:
        "https://anbanitour.ge/_cdn/2210/01/27/e9687119463b4acaa4442f3636890e14/s.png",
    },
    {
      id: 19,
      lat: 41.770887,
      lng: 42.090285,
      title: "ტ",
      subtitle: "ბიყელი",
      text: "ტ",
      letter: "t",
      link: "https://visitajara.com/sights/188",
      image:
        "https://anbanitour.ge/_cdn/2210/01/29/da64825e25874b1c922ab23ae61b1147/t.png",
    },
    {
      id: 20,
      lat: 41.636654,
      lng: 41.618648,
      title: "ღ",
      subtitle: "ამის ბათუმი",
      text: "ღ",
      letter: "gh",
      link: null,
      image:
        "https://anbanitour.ge/_cdn/2210/01/37/e75b582d999c4f6993d20c315478bcf3/g.png",
    },
    {
      id: 21,
      lat: 41.696954,
      lng: 42.310812,
      title: "უ",
      subtitle: "ჩხო",
      text: "უ",
      letter: "u",
      link: "https://visitajara.com/routes/16",
      image:
        "https://anbanitour.ge/_cdn/2210/01/31/9e811c48968d445584e26676c23ad1ce/u.png",
    },
    {
      id: 22,
      lat: 41.68447,
      lng: 41.729928,
      title: "ფ",
      subtitle: "რინველებზე დაკვირვება",
      text: "ფ",
      letter: "f",
      link: "https://visitajara.com/routes/15",
      image:
        "https://anbanitour.ge/_cdn/2210/01/33/834d9fd888654eaab059c081b6674a81/p.png",
    },
    {
      id: 23,
      lat: 41.8471496,
      lng: 41.7777128,
      title: "ქ",
      subtitle: "ობულეთი",
      text: "ქ",
      letter: "q",
      link: "https://tinyurl.com/52y96yza",
      image:
        "https://anbanitour.ge/_cdn/2210/01/35/63083b485457467fa1f1eabe8ce573f2/q.png",
    },
    {
      id: 24,
      lat: 41.64938,
      lng: 41.64485,
      title: "ყ",
      subtitle: "ავა ბათუმში",
      text: "ყ",
      letter: "y",
      link: null,
      image:
        "https://anbanitour.ge/_cdn/2210/01/39/853f758d95f44a029f2e9965f9c1e26f/k.png",
    },
    {
      id: 25,
      lat: 41.655928,
      lng: 41.6414262,
      title: "შ",
      subtitle: "უქურა",
      text: "შ",
      letter: "sh",
      link: null,
      image:
        "https://anbanitour.ge/_cdn/2210/01/45/107b09e0de414d2aa236975890fd1b5e/sh.png",
    },
    {
      id: 26,
      lat: 41.759875,
      lng: 41.746332,
      title: "ც",
      subtitle: "იხისძირი",
      text: "ც",
      letter: "c",
      link: "https://tinyurl.com/mvw2xh4j",
      image:
        "https://anbanitour.ge/_cdn/2210/01/47/e812a53a707b42838dd451fe52f9fbe4/ts.png",
    },
    {
      id: 27,
      lat: 41.651531,
      lng: 41.638223,
      title: "ძ",
      subtitle: "ველი ბათუმი",
      text: "ძ",
      letter: "dz",
      link: null,
      image:
        "https://anbanitour.ge/_cdn/2210/01/49/95a498823b2140e6859fa4d73785ad69/dz.png",
    },
    {
      id: 28,
      lat: 41.680043,
      lng: 41.860286,
      title: "წ",
      subtitle: "ვიმა",
      text: "წ",
      letter: "ts",
      link: "https://tinyurl.com/muc8vnx4",
      image:
        "https://anbanitour.ge/_cdn/2210/01/51/4353e3c8e2c94ab5886d90744a085ea4/ts.png",
    },
    {
      id: 29,
      lat: 41.47672,
      lng: 42.469798,
      title: "ჩ",
      subtitle: "ირუხი",
      text: "ჩ",
      letter: "ch",
      link: "https://visitajara.com/alpine-ajara/2",
      image:
        "https://anbanitour.ge/_cdn/2210/01/43/5695dcf4f52f4aea854da2d90696523e/ch.png",
    },
    {
      id: 30,
      lat: 41.705598,
      lng: 42.17965,
      title: "ჭ",
      subtitle: "ვანა",
      text: "ჭ",
      letter: "W",
      link: "https://tinyurl.com/477fhd4t",
      image:
        "https://anbanitour.ge/_cdn/2210/01/53/53dd826e3a6f4d96b679289b0bed6244/ch.png",
    },
    {
      id: 31,
      lat: 41.541672,
      lng: 42.565229,
      title: "ხ",
      subtitle: "იხანი",
      text: "ხ",
      letter: "kh",
      link: "https://visitajara.com/sights/111",
      image:
        "https://anbanitour.ge/_cdn/2210/01/55/64467cdebd9044b08713c0d6751ebb8a/kh.png",
    },
    {
      id: 32,
      lat: 41.569776,
      lng: 41.979913,
      title: "ჯ",
      subtitle: "არა",
      text: "ჯ",
      letter: "j",
      link: "https://infoajara.com/u/3845019",
      image:
        "https://anbanitour.ge/_cdn/2210/01/57/61c8e663faff48a197620752c3215720/jara.png",
    },
    {
      id: 33,
      lat: 41.625699,
      lng: 41.656162,
      title: "ჰ",
      subtitle: "ორიზონტი",
      text: "ჰ",
      letter: "h",
      link: null,
      image:
        "https://anbanitour.ge/_cdn/2210/01/59/23ebaef11cfc41ca8cf2e9d2dcc45f57/h.png",
    },
  ];
  markers.forEach(addMarker);
}
