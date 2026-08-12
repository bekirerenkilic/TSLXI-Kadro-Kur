// players.js
// Süper Lig takımları oyuncu verileri
// Takım ID aralıkları: Fenerbahçe 1xx, Galatasaray 2xx, Beşiktaş 3xx, Trabzonspor 4xx
// tags: 'yerli' | 'yabanci' | 'u23yabanci' + takım etiketi (fenerbahce/galatasaray/besiktas/trabzonspor)

// ==================== FENERBAHÇE ====================
const fenerbahcePlayers = [
    {
      id: 101,
      name: "Mason Greenwood",
      shortName: "M. GREENWOOD",
      number: 11,
      age: 24,
      country: "England",
      position: "SĞK",
      tags: ["yabanci", "fenerbahce"]
    },
    {
      id: 102,
      name: "Matteo Guendouzi",
      shortName: "M. GUENDOUZI",
      number: 6,
      age: 27,
      country: "France",
      position: "OS",
      tags: ["yabanci", "fenerbahce"]
    },
    {
      id: 103,
      name: "Kerem Aktürkoğlu",
      shortName: "K. AKTÜRKOĞLU",
      number: 9,
      age: 27,
      country: "Türkiye",
      position: "SLK",
      tags: ["yerli", "fenerbahce"]
    },
    {
      id: 104,
      name: "Jayden Oosterwolde",
      shortName: "J. OOSTERWOLDE",
      number: 24,
      age: 25,
      country: "Netherlands",
      position: "STP",
      tags: ["yabanci", "fenerbahce"]
    },
    {
      id: 105,
      name: "Dorgeles Nene",
      shortName: "D. NENE",
      number: 45,
      age: 23,
      country: "Mali",
      position: "SĞK",
      tags: ["u23yabanci", "fenerbahce"]
    },
    {
      id: 106,
      name: "Sidiki Cheriff",
      shortName: "S. CHERIFF",
      number: 26,
      age: 19,
      country: "France",
      position: "SNT",
      tags: ["u23yabanci", "fenerbahce"]
    },
    {
      id: 107,
      name: "Marco Asensio",
      shortName: "M. ASENSIO",
      number: 10,
      age: 30,
      country: "Spain",
      position: "OOS",
      tags: ["yabanci", "fenerbahce"]
    },
    {
      id: 108,
      name: "Nathan Ake",
      shortName: "N. AKE",
      number: 15,
      age: 31,
      country: "Netherlands",
      position: "STP",
      tags: ["yabanci", "fenerbahce"]
    },
    {
      id: 109,
      name: "Archie Brown",
      shortName: "A. BROWN",
      number: 3,
      age: 24,
      country: "England",
      position: "SLB",
      tags: ["u23yabanci", "fenerbahce"]
    },
    {
      id: 110,
      name: "Milan Skriniar",
      shortName: "M. SKRINIAR",
      number: 37,
      age: 31,
      country: "Slovakia",
      position: "STP",
      tags: ["yabanci", "fenerbahce"]
    },
    {
      id: 111,
      name: "Ederson",
      shortName: "EDERSON",
      number: 31,
      age: 32,
      country: "Brazil",
      position: "KL",
      tags: ["yabanci", "fenerbahce"]
    },
    {
      id: 112,
      name: "Sofyan Amrabat",
      shortName: "S. AMRABAT",
      number: null,
      age: 29,
      country: "Morocco",
      position: "DOS",
      tags: ["yabanci", "fenerbahce"]
    },
    {
      id: 113,
      name: "Talisca",
      shortName: "TALISCA",
      number: 94,
      age: 32,
      country: "Brazil",
      position: "SNT",
      tags: ["yabanci", "fenerbahce"]
    },
    {
      id: 114,
      name: "Mert Müldür",
      shortName: "M. MÜLDÜR",
      number: 18,
      age: 27,
      country: "Türkiye",
      position: "SĞB",
      tags: ["yerli", "fenerbahce"]
    },
    {
      id: 115,
      name: "Anthony Musaba",
      shortName: "A. MUSABA",
      number: 20,
      age: 25,
      country: "Netherlands",
      position: "SLK",
      tags: ["yabanci", "fenerbahce"]
    },
    {
      id: 116,
      name: "Oğuz Aydın",
      shortName: "O. AYDIN",
      number: 70,
      age: 25,
      country: "Türkiye",
      position: "SLK",
      tags: ["yerli", "fenerbahce"]
    },
    {
      id: 117,
      name: "Nelson Semedo",
      shortName: "N. SEMEDO",
      number: 27,
      age: 32,
      country: "Portugal",
      position: "SĞB",
      tags: ["yabanci", "fenerbahce"]
    },
    {
      id: 118,
      name: "Yiğit Efe Demir",
      shortName: "Y.E. DEMİR",
      number: 14,
      age: 22,
      country: "Türkiye",
      position: "STP",
      tags: ["yerli", "fenerbahce"]
    },
    {
      id: 119,
      name: "Diego Carlos",
      shortName: "D. CARLOS",
      number: null,
      age: 33,
      country: "Brazil",
      position: "STP",
      tags: ["yabanci", "fenerbahce"]
    },
    {
      id: 120,
      name: "Levent Mercan",
      shortName: "L. MERCAN",
      number: 22,
      age: 25,
      country: "Türkiye",
      position: "SLB",
      tags: ["yerli", "fenerbahce"]
    },
    {
      id: 121,
      name: "Fred",
      shortName: "FRED",
      number: 7,
      age: 33,
      country: "Brazil",
      position: "OS",
      tags: ["yabanci", "fenerbahce"]
    },
    {
      id: 122,
      name: "Vedat Muriqi",
      shortName: "V. MURIQI",
      number: 19,
      age: 32,
      country: "Kosova",
      position: "SNT",
      tags: ["yabanci", "fenerbahce"]
    },
    {
      id: 123,
      name: "Dominik Livakovic",
      shortName: "D. LIVAKOVIC",
      number: 40,
      age: 31,
      country: "Croatia",
      position: "KL",
      tags: ["yabanci", "fenerbahce"]
    },
    {
      id: 124,
      name: "Ngolo Kante",
      shortName: "N. KANTE",
      number: 91,
      age: 35,
      country: "France",
      position: "DOS",
      tags: ["yabanci", "fenerbahce"]
    },
    {
      id: 125,
      name: "Cengiz Ünder",
      shortName: "C. ÜNDER",
      number: 23,
      age: 29,
      country: "Türkiye",
      position: "SĞK",
      tags: ["yerli", "fenerbahce"]
    },
    {
      id: 126,
      name: "İrfan Can Kahveci",
      shortName: "İ.C. KAHVECİ",
      number: 17,
      age: 31,
      country: "Türkiye",
      position: "SĞK",
      tags: ["yerli", "fenerbahce"]
    },
    {
      id: 127,
      name: "Ognjen Mimovic",
      shortName: "O. MIMOVIC",
      number: 77,
      age: 21,
      country: "Serbia",
      position: "SĞB",
      tags: ["u23yabanci", "fenerbahce"]
    },
    {
      id: 128,
      name: "Rodrigo Becao",
      shortName: "R. BECAO",
      number: 50,
      age: 30,
      country: "Brazil",
      position: "STP",
      tags: ["yabanci", "fenerbahce"]
    },
    {
      id: 129,
      name: "Bartuğ Elmas",
      shortName: "B. ELMAS",
      number: 28,
      age: 23,
      country: "Türkiye",
      position: "DOS",
      tags: ["yerli", "fenerbahce"]
    },
    {
      id: 130,
      name: "İrfan Can Eğribayat",
      shortName: "İ.C. EĞRİBAYAT",
      number: 1,
      age: 28,
      country: "Türkiye",
      position: "KL",
      tags: ["yerli", "fenerbahce"]
    },
    {
      id: 131,
      name: "Amara Diouf",
      shortName: "A. DIOUF",
      number: null,
      age: 18,
      country: "Senegal",
      position: "SLK",
      tags: ["u23yabanci", "fenerbahce"]
    },
    {
      id: 132,
      name: "Tarık Çetin",
      shortName: "T. ÇETİN",
      number: 13,
      age: 29,
      country: "Türkiye",
      position: "KL",
      tags: ["yerli", "fenerbahce"]
    },
    {
      id: 133,
      name: "Omar Fayed",
      shortName: "O. FAYED",
      number: 60,
      age: 23,
      country: "Egypt",
      position: "STP",
      tags: ["u23yabanci", "fenerbahce"]
    },
    {
      id: 134,
      name: "Mert Günok",
      shortName: "M. GÜNOK",
      number: 34,
      age: 37,
      country: "Türkiye",
      position: "KL",
      tags: ["yerli", "fenerbahce"]
    },
    {
      id: 135,
      name: "Abdou Aziz Fall",
      shortName: "A.A. FALL",
      number: null,
      age: 19,
      country: "Senegal",
      position: "OS",
      tags: ["u23yabanci", "fenerbahce"]
    },
    {
      id: 136,
      name: "Mert Hakan Yandaş",
      shortName: "M.H. YANDAŞ",
      number: 8,
      age: 31,
      country: "Türkiye",
      position: "OOS",
      tags: ["yerli", "fenerbahce"]
    },
    {
      id: 137,
      name: "Romelu Lukaku",
      shortName: "R. LUKAKU",
      number: null,
      age: 33,
      country: "Belgium",
      position: "SNT",
      tags: ["yabanci", "fenerbahce"]
    }
];

// ==================== GALATASARAY ====================
const galatasarayPlayers = [
    {
      id: 201,
      name: "Victor Osimhen",
      shortName: "V. OSIMHEN",
      number: 45,
      age: 27,
      country: "Nigeria",
      position: "SNT",
      tags: ["yabanci", "galatasaray"]
    },
    {
      id: 202,
      name: "Barış Alper Yılmaz",
      shortName: "B.A. YILMAZ",
      number: 53,
      age: 26,
      country: "Türkiye",
      position: "SLK",
      tags: ["yerli", "galatasaray"]
    },
    {
      id: 203,
      name: "Gabriel Sara",
      shortName: "G. SARA",
      number: 8,
      age: 27,
      country: "Brazil",
      position: "OS",
      tags: ["yabanci", "galatasaray"]
    },
    {
      id: 204,
      name: "Wilfiried Singo",
      shortName: "W. SINGO",
      number: 90,
      age: 25,
      country: "Ivory Coast",
      position: "STP",
      tags: ["yabanci", "galatasaray"]
    },
    {
      id: 205,
      name: "Lesley Ugochukwu",
      shortName: "L. UGOCHUKWU",
      number: 18,
      age: 22,
      country: "France",
      position: "DOS",
      tags: ["u23yabanci", "galatasaray"]
    },
    {
      id: 206,
      name: "Leroy Sane",
      shortName: "L. SANE",
      number: 10,
      age: 30,
      country: "Germany",
      position: "SĞK",
      tags: ["yabanci", "galatasaray"]
    },
    {
      id: 207,
      name: "Yunus Akgün",
      shortName: "Y. AKGÜN",
      number: 11,
      age: 26,
      country: "Türkiye",
      position: "SĞK",
      tags: ["yerli", "galatasaray"]
    },
    {
      id: 208,
      name: "Davinson Sanchez",
      shortName: "D. SANCHEZ",
      number: 6,
      age: 30,
      country: "Colombia",
      position: "STP",
      tags: ["yabanci", "galatasaray"]
    },
    {
      id: 209,
      name: "Uğurcan Çakır",
      shortName: "U. ÇAKIR",
      number: 1,
      age: 30,
      country: "Türkiye",
      position: "KL",
      tags: ["yerli", "galatasaray"]
    },
    {
      id: 210,
      name: "Roland Sallai",
      shortName: "R. SALLAI",
      number: 7,
      age: 29,
      country: "Hungary",
      position: "SĞB",
      tags: ["yabanci", "galatasaray"]
    },
    {
      id: 211,
      name: "Lucas Torreira",
      shortName: "L. TORREIRA",
      number: 34,
      age: 30,
      country: "Uruguay",
      position: "DOS",
      tags: ["yabanci", "galatasaray"]
    },
    {
      id: 212,
      name: "Ismail Jakobs",
      shortName: "I. JAKOBS",
      number: 4,
      age: 26,
      country: "Senegal",
      position: "SLB",
      tags: ["yabanci", "galatasaray"]
    },
    {
      id: 213,
      name: "Abdülkerim Bardakçı",
      shortName: "A. BARDAKÇI",
      number: 42,
      age: 31,
      country: "Türkiye",
      position: "STP",
      tags: ["yerli", "galatasaray"]
    },
    {
      id: 214,
      name: "Victor Nelsson",
      shortName: "V. NELSSON",
      number: 25,
      age: 27,
      country: "Denmark",
      position: "STP",
      tags: ["yabanci", "galatasaray"]
    },
    {
      id: 215,
      name: "Renato Nhaga",
      shortName: "R. NHAGA",
      number: 74,
      age: 19,
      country: "Guine-Bissau",
      position: "OS",
      tags: ["u23yabanci", "galatasaray"]
    },
    {
      id: 216,
      name: "Eren Elmalı",
      shortName: "E. ELMALI",
      number: 17,
      age: 26,
      country: "Türkiye",
      position: "SLB",
      tags: ["yerli", "galatasaray"]
    },
    {
      id: 217,
      name: "Elias Jelert",
      shortName: "E. JELERT",
      number: 12,
      age: 23,
      country: "Denmark",
      position: "SĞB",
      tags: ["u23yabanci", "galatasaray"]
    },
    {
      id: 218,
      name: "Mario Lemina",
      shortName: "M. LEMINA",
      number: 99,
      age: 32,
      country: "Gabon",
      position: "DOS",
      tags: ["yabanci", "galatasaray"]
    },
    {
      id: 219,
      name: "İlkay Gündoğan",
      shortName: "İ. GÜNDOĞAN",
      number: 20,
      age: 35,
      country: "Germany",
      position: "OS",
      tags: ["yerli", "galatasaray"]
    },
    {
      id: 220,
      name: "Kazımcan Karataş",
      shortName: "K. KARATAŞ",
      number: 88,
      age: 23,
      country: "Türkiye",
      position: "SLB",
      tags: ["yerli", "galatasaray"]
    },
    {
      id: 221,
      name: "Kaan Ayhan",
      shortName: "K. AYHAN",
      number: 23,
      age: 31,
      country: "Türkiye",
      position: "STP",
      tags: ["yerli", "galatasaray"]
    },
    {
      id: 222,
      name: "Metehan Balcı",
      shortName: "M. BALCI",
      number: 3,
      age: 23,
      country: "Türkiye",
      position: "STP",
      tags: ["yerli", "galatasaray"]
    },
    {
      id: 223,
      name: "Jankat Yılmaz",
      shortName: "J. YILMAZ",
      number: 24,
      age: 21,
      country: "Türkiye",
      position: "KL",
      tags: ["yerli", "galatasaray"]
    },
    {
      id: 224,
      name: "Arda Ünyay",
      shortName: "A. ÜNYAY",
      number: 91,
      age: 19,
      country: "Türkiye",
      position: "STP",
      tags: ["yerli", "galatasaray"]
    },
    {
      id: 225,
      name: "Eyüp Aydın",
      shortName: "E. AYDIN",
      number: 5,
      age: 22,
      country: "Türkiye",
      position: "DOS",
      tags: ["yerli", "galatasaray"]
    },
    {
      id: 226,
      name: "Halil Dervişoğlu",
      shortName: "H. DERVİŞOĞLU",
      number: null,
      age: 26,
      country: "Türkiye",
      position: "SNT",
      tags: ["yerli", "galatasaray"]
    },
    {
      id: 227,
      name: "Ali Turap Bülbül",
      shortName: "A.T. BÜLBÜL",
      number: null,
      age: 21,
      country: "Türkiye",
      position: "SĞB",
      tags: ["yerli", "galatasaray"]
    },
    {
      id: 228,
      name: "Can Armando Güner",
      shortName: "C.A. GÜNER",
      number: 27,
      age: 18,
      country: "Argentina",
      position: "SĞK",
      tags: ["yerli", "galatasaray"]
    },
    {
      id: 229,
      name: "Günay Güvenç",
      shortName: "G. GÜVENÇ",
      number: 19,
      age: 35,
      country: "Türkiye",
      position: "KL",
      tags: ["yerli", "galatasaray"]
    }
];

// ==================== BEŞİKTAŞ ====================
const besiktasPlayers = [
    {
      id: 301,
      name: "Orkun Kökçü",
      shortName: "O. KÖKÇÜ",
      number: 10,
      age: 25,
      country: "Türkiye",
      position: "OS",
      tags: ["yerli", "besiktas"]
    },
    {
      id: 302,
      name: "Leandro Trossard",
      shortName: "L. TROSSARD",
      number: 19,
      age: 31,
      country: "Belgium",
      position: "SLK",
      tags: ["yabanci", "besiktas"]
    },
    {
      id: 303,
      name: "Emanuel Agbadou",
      shortName: "E. AGBADOU",
      number: 12,
      age: 29,
      country: "Ivory Coast",
      position: "STP",
      tags: ["yabanci", "besiktas"]
    },
    {
      id: 304,
      name: "Hyeon-Gyu Oh",
      shortName: "H. OH",
      number: 9,
      age: 25,
      country: "South Korea",
      position: "SNT",
      tags: ["yabanci", "besiktas"]
    },
    {
      id: 305,
      name: "Kassoum Ouattara",
      shortName: "K. OUATTARA",
      number: 11,
      age: 21,
      country: "France",
      position: "SLB",
      tags: ["u23yabanci", "besiktas"]
    },
    {
      id: 306,
      name: "Alexander Nübel",
      shortName: "A. NÜBEL",
      number: 1,
      age: 29,
      country: "Germany",
      position: "KL",
      tags: ["yabanci", "besiktas"]
    },
    {
      id: 307,
      name: "Semih Kılıçsoy",
      shortName: "S. KILIÇSOY",
      number: 90,
      age: 20,
      country: "Türkiye",
      position: "SNT",
      tags: ["yerli", "besiktas"]
    },
    {
      id: 308,
      name: "Wilfred Ndidi",
      shortName: "W. NDIDI",
      number: 4,
      age: 29,
      country: "Nigeria",
      position: "DOS",
      tags: ["yabanci", "besiktas"]
    },
    {
      id: 309,
      name: "Junior Olaitan",
      shortName: "J. OLAITAN",
      number: 15,
      age: 24,
      country: "Benin",
      position: "OOS",
      tags: ["u23yabanci", "besiktas"]
    },
    {
      id: 310,
      name: "Emirhan Topçu",
      shortName: "E. TOPÇU",
      number: 53,
      age: 25,
      country: "Türkiye",
      position: "STP",
      tags: ["yerli", "besiktas"]
    },
    {
      id: 311,
      name: "Tiago Djalo",
      shortName: "T. DJALO",
      number: 35,
      age: 26,
      country: "Portugal",
      position: "STP",
      tags: ["yabanci", "besiktas"]
    },
    {
      id: 312,
      name: "Amir Murillo",
      shortName: "A. MURILLO",
      number: 62,
      age: 30,
      country: "Panama",
      position: "SĞB",
      tags: ["yabanci", "besiktas"]
    },
    {
      id: 313,
      name: "Vaclav Cerny",
      shortName: "V. CERNY",
      number: 18,
      age: 28,
      country: "Czechia",
      position: "SĞK",
      tags: ["yabanci", "besiktas"]
    },
    {
      id: 314,
      name: "Mustafa Hekimoğlu",
      shortName: "M. HEKİMOĞLU",
      number: 23,
      age: 19,
      country: "Türkiye",
      position: "SNT",
      tags: ["yerli", "besiktas"]
    },
    {
      id: 315,
      name: "Yasin Özcan",
      shortName: "Y. ÖZCAN",
      number: 58,
      age: 20,
      country: "Türkiye",
      position: "STP",
      tags: ["yerli", "besiktas"]
    },
    {
      id: 316,
      name: "Taylan Bulut",
      shortName: "T. BULUT",
      number: 22,
      age: 20,
      country: "Türkiye",
      position: "SĞB",
      tags: ["yerli", "besiktas"]
    },
    {
      id: 317,
      name: "Rıdvan Yılmaz",
      shortName: "R. YILMAZ",
      number: 33,
      age: 25,
      country: "Türkiye",
      position: "SLB",
      tags: ["yerli", "besiktas"]
    },
    {
      id: 318,
      name: "Moatasem Al-Musrati",
      shortName: "M. AL-MUSRATİ",
      number: null,
      age: 30,
      country: "Libya",
      position: "DOS",
      tags: ["yabanci", "besiktas"]
    },
    {
      id: 319,
      name: "Amir Hadziahmetovic",
      shortName: "A. HADZIAHMETOVİC",
      number: 5,
      age: 29,
      country: "Bosnia",
      position: "DOS",
      tags: ["yabanci", "besiktas"]
    },
    {
      id: 320,
      name: "Milot Rashica",
      shortName: "M. RASHICA",
      number: 7,
      age: 30,
      country: "Kosova",
      position: "SĞK",
      tags: ["yabanci", "besiktas"]
    },
    {
      id: 321,
      name: "Felix Uduokhai",
      shortName: "F. UDUOKHAI",
      number: 14,
      age: 28,
      country: "Germany",
      position: "STP",
      tags: ["yabanci", "besiktas"]
    },
    {
      id: 322,
      name: "Salih Özcan",
      shortName: "S. ÖZCAN",
      number: 6,
      age: 28,
      country: "Türkiye",
      position: "DOS",
      tags: ["yerli", "besiktas"]
    },
    {
      id: 323,
      name: "Kartal Yılmaz",
      shortName: "K. YILMAZ",
      number: 8,
      age: 25,
      country: "Türkiye",
      position: "DOS",
      tags: ["yerli", "besiktas"]
    },
    {
      id: 324,
      name: "Doğan Alemdar",
      shortName: "D. ALEMDAR",
      number: 23,
      age: 23,
      country: "Türkiye",
      position: "KL",
      tags: ["yerli", "besiktas"]
    },
    {
      id: 325,
      name: "Joao Mario",
      shortName: "J. MARIO",
      number: null,
      age: 33,
      country: "Portugal",
      position: "OOS",
      tags: ["yabanci", "besiktas"]
    },
    {
      id: 326,
      name: "İlhan Fakılı",
      shortName: "İ. FAKILI",
      number: 29,
      age: 20,
      country: "Türkiye",
      position: "SLK",
      tags: ["yerli", "besiktas"]
    },
    {
      id: 327,
      name: "Elan Ricardo",
      shortName: "E. RICARDO",
      number: null,
      age: 22,
      country: "Colombia",
      position: "OS",
      tags: ["u23yabanci", "besiktas"]
    },
    {
      id: 328,
      name: "Can Keleş",
      shortName: "C. KELEŞ",
      number: null,
      age: 24,
      country: "Türkiye",
      position: "SĞK",
      tags: ["yerli", "besiktas"]
    },
    {
      id: 329,
      name: "Jean Onana",
      shortName: "J. ONANA",
      number: null,
      age: 26,
      country: "Cameroon",
      position: "DOS",
      tags: ["yabanci", "besiktas"]
    },
    {
      id: 330,
      name: "Dusan Vlahovic",
      shortName: "D. VLAHOVIC",
      number: null,
      age: 26,
      country: "Serbia",
      position: "SNT",
      tags: ["yabanci", "besiktas"]
    },
    
];

// ==================== TRABZONSPOR ====================
const trabzonsporPlayers = [
    {
      id: 401,
      name: "Mohamed Salah",
      shortName: "M. SALAH",
      number: 10,
      age: 34,
      country: "Egypt",
      position: "SĞK",
      tags: ["yabanci", "trabzonspor"]
    },
    {
      id: 402,
      name: "Ernest Muci",
      shortName: "E. MUCI",
      number: 7,
      age: 25,
      country: "Albania",
      position: "OOS",
      tags: ["yabanci", "trabzonspor"]
    },
    {
      id: 403,
      name: "Arseniy Batagov",
      shortName: "A. BATAGOV",
      number: 44,
      age: 24,
      country: "Ukraine",
      position: "STP",
      tags: ["u23yabanci", "trabzonspor"]
    },
    {
      id: 404,
      name: "Wagner Pina",
      shortName: "W. PINA",
      number: 20,
      age: 23,
      country: "Capo Verde",
      position: "SĞB",
      tags: ["u23yabanci", "trabzonspor"]
    },
    {
      id: 405,
      name: "Andre Onana",
      shortName: "A. ONANA",
      number: 24,
      age: 30,
      country: "Cameroon",
      position: "KL",
      tags: ["yabanci", "trabzonspor"]
    },
    {
      id: 406,
      name: "Aral Şimşir",
      shortName: "A. ŞİMŞİR",
      number: 58,
      age: 24,
      country: "Türkiye",
      position: "SĞK",
      tags: ["yerli", "trabzonspor"]
    },
    {
      id: 407,
      name: "Lopes Cabral",
      shortName: "L. CABRAL",
      number: 55,
      age: 23,
      country: "Capo Verde",
      position: "SLB",
      tags: ["u23yabanci", "trabzonspor"]
    },
    {
      id: 408,
      name: "Noah Saviolo",
      shortName: "N. SAVIOLO",
      number: 70,
      age: 22,
      country: "Portugal",
      position: "SLK",
      tags: ["u23yabanci", "trabzonspor"]
    },
    {
      id: 409,
      name: "Chibuike Nwaiwu",
      shortName: "C. NWAIWU",
      number: 27,
      age: 23,
      country: "Nigeria",
      position: "STP",
      tags: ["u23yabanci", "trabzonspor"]
    },
    {
      id: 410,
      name: "Batista Mendy",
      shortName: "B. MENDY",
      number: null,
      age: 26,
      country: "France",
      position: "DOS",
      tags: ["yabanci", "trabzonspor"]
    },
    {
      id: 411,
      name: "Tim Jakob-Folcarelli",
      shortName: "T. FOLCARELLI",
      number: 26,
      age: 26,
      country: "France",
      position: "DOS",
      tags: ["yabanci", "trabzonspor"]
    },
    {
      id: 412,
      name: "Paul Onuachu",
      shortName: "P. ONUACHU",
      number: 30,
      age: 32,
      country: "Nigeria",
      position: "SNT",
      tags: ["yabanci", "trabzonspor"]
    },
    {
      id: 413,
      name: "Benjamin Bouchouari",
      shortName: "B. BOUCHOUARI",
      number: 8,
      age: 24,
      country: "Morocco",
      position: "OS",
      tags: ["yabanci", "trabzonspor"]
    },
    {
      id: 414,
      name: "Mustafa Eskihellaç",
      shortName: "M. ESKİHELLAÇ",
      number: 7,
      age: 29,
      country: "Türkiye",
      position: "SLB",
      tags: ["yerli", "trabzonspor"]
    },
    {
      id: 415,
      name: "Cenk Özkaçar",
      shortName: "C. ÖZKAÇAR",
      number: 39,
      age: 25,
      country: "Türkiye",
      position: "STP",
      tags: ["yerli", "trabzonspor"]
    },
    {
      id: 416,
      name: "Ruslan Malinovskyi",
      shortName: "R. MALINOVSKYİ",
      number: 17,
      age: 33,
      country: "Ukraine",
      position: "OS",
      tags: ["yabanci", "trabzonspor"]
    },
    {
      id: 417,
      name: "Denis Dragus",
      shortName: "D. DRAGUS",
      number: null,
      age: 27,
      country: "Romania",
      position: "SNT",
      tags: ["yabanci", "trabzonspor"]
    },
    {
      id: 418,
      name: "Göktan Gürpüz",
      shortName: "G. GÜRPÜZ",
      number: null,
      age: 23,
      country: "Türkiye",
      position: "OOS",
      tags: ["yerli", "trabzonspor"]
    },
    {
      id: 419,
      name: "Cihan Çanak",
      shortName: "C. ÇANAK",
      number: null,
      age: 21,
      country: "Türkiye",
      position: "SĞK",
      tags: ["yerli", "trabzonspor"]
    },
    {
      id: 420,
      name: "Ozan Tufan",
      shortName: "O. TUFAN",
      number: 11,
      age: 31,
      country: "Türkiye",
      position: "OS",
      tags: ["yerli", "trabzonspor"]
    },
    {
      id: 421,
      name: "John Lundstram",
      shortName: "J. LUNDSTRAM",
      number: null,
      age: 32,
      country: "England",
      position: "DOS",
      tags: ["yabanci", "trabzonspor"]
    },
    {
      id: 422,
      name: "Okay Yokuşlu",
      shortName: "O. YOKUŞLU",
      number: 5,
      age: 32,
      country: "Türkiye",
      position: "DOS",
      tags: ["yerli", "trabzonspor"]
    },
    {
      id: 423,
      name: "Samet Akaydin",
      shortName: "S. AKAYDİN",
      number: 4,
      age: 32,
      country: "Türkiye",
      position: "STP",
      tags: ["yerli", "trabzonspor"]
    },
    {
      id: 424,
      name: "Onuralp Çevikkan",
      shortName: "O. ÇEVİKKAN",
      number: 25,
      age: 20,
      country: "Türkiye",
      position: "KL",
      tags: ["yerli", "trabzonspor"]
    },
    {
      id: 425,
      name: "Rene Mitongo",
      shortName: "R. MITONGO",
      number: 19,
      age: 18,
      country: "Belgium",
      position: "SNT",
      tags: ["u23yabanci", "trabzonspor"]
    },
    {
      id: 426,
      name: "Umut Nayir",
      shortName: "U. NAYİR",
      number: 14,
      age: 33,
      country: "Türkiye",
      position: "SNT",
      tags: ["yerli", "trabzonspor"]
    },
    {
      id: 427,
      name: "Melih Kabasakal",
      shortName: "M. KABASAKAL",
      number: 57,
      age: 30,
      country: "Türkiye",
      position: "DOS",
      tags: ["yerli", "trabzonspor"]
    },
    {
      id: 428,
      name: "Stefan Savic",
      shortName: "S. SAVIC",
      number: 15,
      age: 35,
      country: "Montenegro",
      position: "STP",
      tags: ["yabanci", "trabzonspor"]
    },
    {
      id: 429,
      name: "Metehan Mimaroğlu",
      shortName: "M. MİMAROĞLU",
      number: 9,
      age: 32,
      country: "Türkiye",
      position: "SLK",
      tags: ["yerli", "trabzonspor"]
    }
];

// ==================== TÜM OYUNCULAR ====================
const players = [
  ...fenerbahcePlayers,
  ...galatasarayPlayers,
  ...besiktasPlayers,
  ...trabzonsporPlayers
];

export {
  fenerbahcePlayers,
  galatasarayPlayers,
  besiktasPlayers,
  trabzonsporPlayers,
  players
}