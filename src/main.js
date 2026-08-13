import './style.css'
import { players } from './players.js'

const app = document.querySelector('#app')

/* =========================================================
   TAKIMLAR
========================================================= */

const teams = {
  besiktas: {
    name: 'Beşiktaş',
    short: 'BJK',
    primary: '#000000',
    secondary: '#ffffff',
    manager: 'Vincenzo Italiano'
  },

  fenerbahce: {
    name: 'Fenerbahçe',
    short: 'FB',
    primary: '#f7d000',
    secondary: '#001f5b',
    manager: 'İsmail Kartal'
  },

  galatasaray: {
    name: 'Galatasaray',
    short: 'GS',
    primary: '#d90027',
    secondary: '#f5c400',
    manager: 'Okan Buruk'
  },

  trabzonspor: {
    name: 'Trabzonspor',
    short: 'TS',
    primary: '#7a1835',
    secondary: '#4aa9d8',
    manager: 'Fatih Tekke'
  }
}


/* =========================================================
   DİZİLİŞLER
========================================================= */

const formations = {

  /* Kaleci: 50,92 sabit — hat düzeni:
     Defans 78 · Ön libero 65 · Orta saha 52 · Ofansif orta 38 · Forvet 17 */

  '4-3-3': [
    [50, 92],
    [10, 78],
    [36, 80],
    [64, 80],
    [90, 78],
    [50, 60],
    [24, 48],
    [76, 48],
    [15, 18],
    [50, 15],
    [85, 18]
  ],

  '4-2-3-1': [
    [50, 92],
    [10, 78],
    [36, 80],
    [64, 80],
    [90, 78],
    [32, 62],
    [68, 62],
    [15, 40],
    [50, 36],
    [85, 40],
    [50, 15]
  ],

  '4-4-2': [
    [50, 92],
    [10, 78],
    [36, 80],
    [64, 80],
    [90, 78],
    [10, 52],
    [36, 54],
    [64, 54],
    [90, 52],
    [32, 20],
    [68, 20]
  ],

  '4-4-2 Elmas': [
    [50, 92],
    [10, 78],
    [36, 80],
    [64, 80],
    [90, 78],
    [50, 62],
    [22, 46],
    [78, 46],
    [50, 32],
    [32, 15],
    [68, 15]
  ],

  '4-1-4-1': [
    [50, 92],
    [10, 78],
    [36, 80],
    [64, 80],
    [90, 78],
    [50, 62],
    [12, 45],
    [37, 42],
    [63, 42],
    [88, 45],
    [50, 16]
  ],

  '4-5-1': [
    [50, 92],
    [10, 78],
    [36, 80],
    [64, 80],
    [90, 78],
    [8, 50],
    [29, 46],
    [50, 48],
    [71, 46],
    [92, 50],
    [50, 16]
  ],

  '4-3-1-2': [
    [50, 92],
    [10, 78],
    [36, 80],
    [64, 80],
    [90, 78],
    [22, 58],
    [50, 60],
    [78, 58],
    [50, 38],
    [32, 16],
    [68, 16]
  ],

  '3-5-2': [
    [50, 92],
    [20, 80],
    [50, 82],
    [80, 80],
    [8, 53],
    [29, 48],
    [50, 50],
    [71, 48],
    [92, 53],
    [35, 16],
    [65, 16]
  ],

  '3-4-3': [
    [50, 92],
    [20, 80],
    [50, 82],
    [80, 80],
    [12, 53],
    [37, 50],
    [63, 50],
    [88, 53],
    [18, 18],
    [50, 15],
    [82, 18]
  ],

  '3-4-2-1': [
    [50, 92],
    [20, 80],
    [50, 82],
    [80, 80],
    [12, 55],
    [37, 52],
    [63, 52],
    [88, 55],
    [32, 33],
    [68, 33],
    [50, 15]
  ],

  '5-3-2': [
    [50, 92],
    [8, 80],
    [28, 78],
    [50, 80],
    [72, 78],
    [92, 80],
    [22, 50],
    [50, 48],
    [78, 50],
    [35, 18],
    [65, 18]
  ],

  '5-4-1': [
    [50, 92],
    [8, 80],
    [28, 78],
    [50, 80],
    [72, 78],
    [92, 80],
    [12, 52],
    [37, 50],
    [63, 50],
    [88, 52],
    [50, 16]
  ]

}


/* =========================================================
   DURUM
========================================================= */

let selectedTeam = 'besiktas'

let selectedMode = 'free'

let selectedFormation = '4-3-3'

let selectedSlot = null

let lineup = Array(11).fill(null)

/*
  10+4 havuzu
*/

let foreignPool = []

let u23Pool = []

let localPool = []

let currentPoolCategory = null

/*
  Kullanıcının eklediği yeni transferler
*/

let customPlayers = []


function resetPools() {

  foreignPool = []

  u23Pool = []

  localPool = []

}


/* =========================================================
   ANA SAYFAYA DÖN
========================================================= */

function bindBrandHome() {

  const brand =
    document.querySelector(
      '#brandHome'
    )

  if (brand) {

    brand.addEventListener(
      'click',
      goHome
    )

  }

}


function goHome() {

  selectedMode = 'free'

  selectedSlot = null

  render()

}


/* =========================================================
   OYUNCU VERİSİ YARDIMCILARI
========================================================= */

function getTeamPlayers() {
  return [...players, ...customPlayers].filter(player =>
    player.tags?.includes(selectedTeam)
  )
}

function isForeign(player) {
  return player.tags?.includes('yabanci') ||
    player.tags?.includes('u23yabanci') ||
    player.tags?.includes('u23-yabanci')
}

function isU23Foreign(player) {
  return player.tags?.includes('u23yabanci') ||
    player.tags?.includes('u23-yabanci')
}

function isLocal(player) {
  return player.tags?.includes('yerli')
}

function isAlreadyInPool(player) {
  return getAllPoolPlayers().some(item => item.id === player.id)
}

/* =========================================================
   YENİ TRANSFER — İSİM KISALTMA
========================================================= */

const TR_UPPER_MAP = {
  i: 'İ',
  ı: 'I',
  ğ: 'Ğ',
  ü: 'Ü',
  ş: 'Ş',
  ö: 'Ö',
  ç: 'Ç'
}

function turkishUpper(text) {

  return text
    .split('')
    .map(char => TR_UPPER_MAP[char] || char.toLocaleUpperCase('tr-TR'))
    .join('')

}

function makeShortName(fullName) {

  const parts =
    fullName.trim().split(/\s+/)

  if (parts.length === 1) {

    return turkishUpper(parts[0])

  }

  const initials =
    parts
      .slice(0, -1)
      .map(part => turkishUpper(part[0]))
      .join('.') + '.'

  return `${initials} ${turkishUpper(parts[parts.length - 1])}`

}

/* =========================================================
   POZİSYON GRUPLARI
========================================================= */

const positionGroups = {

  'KALECİ': [
    'KL'
  ],

  'SAVUNMA': [
    'STP',
    'SĞB',
    'SLB'
  ],

  'ORTA SAHA': [
    'OOS',
    'OS',
    'DOS'
  ],

  'HÜCUM': [
    'SNT',
    'SĞK',
    'SLK'
  ]

}


const positionOptions = [
  { code: 'KL', label: 'Kaleci (KL)' },
  { code: 'STP', label: 'Stoper (STP)' },
  { code: 'SĞB', label: 'Sağ Bek (SĞB)' },
  { code: 'SLB', label: 'Sol Bek (SLB)' },
  { code: 'DOS', label: 'Defansif Orta Saha (DOS)' },
  { code: 'OS', label: 'Orta Saha (OS)' },
  { code: 'OOS', label: 'Ofansif Orta Saha (OOS)' },
  { code: 'SĞK', label: 'Sağ Kanat (SĞK)' },
  { code: 'SLK', label: 'Sol Kanat (SLK)' },
  { code: 'SNT', label: 'Santrafor (SNT)' }
]


const statusOptions = [
  { value: 'yerli', label: 'Yerli' },
  { value: 'yabanci', label: 'Yabancı' },
  { value: 'u23yabanci', label: 'U23 Yabancı' }
]


/* =========================================================
   YARDIMCI FONKSİYONLAR
========================================================= */

function hasTag(player, tag) {

  return (
    player.tags &&
    player.tags.includes(tag)
  )

}


function renderPlayerTags(player) {

  const tags = player.tags || []

  let html = ''

  /*
    U23 yabancı oyuncu hem YBN hem U23 gösterir.
  */

  if (
    tags.includes('yabanci') ||
    tags.includes('u23yabanci') ||
    tags.includes('u23-yabanci')
  ) {

    html += `
      <span class="player-tag tag-ybn">
        YBN
      </span>
    `

  }


  if (
    tags.includes('u23yabanci') ||
    tags.includes('u23-yabanci')
  ) {

    html += `
      <span class="player-tag tag-u23">
        U23
      </span>
    `

  }


  if (tags.includes('yerli')) {

    html += `
      <span class="player-tag tag-yrl">
        YRL
      </span>
    `

  }

  return html
}


function sortPlayers(playerList) {

  return [...playerList].sort(
    (a, b) => {

      const numberA =
        Number(a.number) || 9999

      const numberB =
        Number(b.number) || 9999

      return numberA - numberB

    }
  )

}


/* =========================================================
   OYUNCU KATEGORİSİ
========================================================= */

function getPositionGroup(position) {

  for (const [group, positions] of Object.entries(positionGroups)) {

    if (positions.includes(position)) {

      return group

    }

  }

  return 'DİĞER'
}


function renderPlayerCategory(group, playerList) {

  const sortedPlayers =
    sortPlayers(
      playerList.filter(
        player =>
          getPositionGroup(player.position) === group
      )
    )


  if (!sortedPlayers.length) {

    return ''

  }


  return `

    <div class="player-category">

      <div class="player-category-title">

        <span>
          ${group}
        </span>

        <small>
          ${sortedPlayers.length} oyuncu
        </small>

      </div>


      <div class="player-category-list">

        ${sortedPlayers.map(player => `

          <button
            class="player-option"
            data-player="${player.id}"
          >

            <div>

              <strong>
                ${player.shortName}
              </strong>

              <div class="player-meta">

                <span class="player-position-label">
                  ${player.position || 'Pozisyon yok'}
                </span>

                <div class="player-tags">

                  ${renderPlayerTags(player)}

                </div>

              </div>

            </div>


            <b>
              #${player.number || ''}
            </b>

          </button>

        `).join('')}

      </div>

    </div>

  `
}


/* =========================================================
   10+4 SLOT OYUNCU KARTI
========================================================= */

function renderPoolSlot(player, type, index) {

  if (!player) {

    return `

      <button
        class="pool-slot empty"
        data-pool-type="${type}"
        data-pool-index="${index}"
      >

        <span>+</span>

        <small>
          Oyuncu ekle
        </small>

      </button>

    `

  }


  return `

    <div
      class="pool-slot filled"
    >

      <div class="pool-slot-number">

        ${player.number || '#'}

      </div>


      <div class="pool-slot-player">

        <strong>
          ${player.shortName}
        </strong>

        <span>
          ${player.position || ''}
        </span>

        <div class="player-tags">
          ${renderPlayerTags(player)}
        </div>

      </div>


      <button
        class="remove-pool-player"
        data-remove-type="${type}"
        data-remove-index="${index}"
      >
        ×
      </button>

    </div>

  `

}


/* =========================================================
   10+4 HAVUZU
========================================================= */

function renderPoolScreen() {

  const team = teams[selectedTeam]


  const foreignSlots =
    Array.from(
      { length: 10 },
      (_, index) =>
        foreignPool[index] || null
    )


  const u23Slots =
    Array.from(
      { length: 4 },
      (_, index) =>
        u23Pool[index] || null
    )


  const localSlots =
    localPool


  const foreignCount =
    foreignPool.length


  const u23Count =
    u23Pool.length


  const localCount =
    localPool.length


  const totalCount =
    foreignCount + u23Count + localCount


  const ready =
    totalCount >= 18


  app.innerHTML = `

    <header class="header">

      <div class="brand" id="brandHome">
        TSLXI
      </div>


      <div class="controls">

        <div class="control">

          <label>TAKIM</label>

          <select id="teamSelect">

            <option value="besiktas">
              Beşiktaş
            </option>

            <option value="fenerbahce">
              Fenerbahçe
            </option>

            <option value="galatasaray">
              Galatasaray
            </option>

            <option value="trabzonspor">
              Trabzonspor
            </option>

          </select>

        </div>


        <div class="control">

          <label>KADRO TİPİ</label>

          <select id="modeSelect">

            <option value="free">
              Serbest
            </option>

            <option value="104">
              10+4
            </option>

          </select>

        </div>

      </div>

    </header>


    <main class="pool-main">


      <section class="pool-panel">


        <div class="pool-title">

          <div
            class="team-logo"
            style="
              background:${team.primary};
              color:${team.secondary};
              border-color:${team.secondary};
            "
          >
            ${team.short}
          </div>


          <div>

            <h1>
              ${team.name} — 10+4
            </h1>

            <p>
              Önce kadro havuzunu oluştur
            </p>

          </div>

        </div>


        <div class="pool-summary">

          <div>

            <span>
              YABANCI
            </span>

            <strong>
              ${foreignCount}/10
            </strong>

          </div>


          <div>

            <span>
              U23 YABANCI
            </span>

            <strong>
              ${u23Count}/4
            </strong>

          </div>


          <div>

            <span>
              YERLİ
            </span>

            <strong>
              ${localPool.length}
            </strong>

          </div>

        </div>


        <div class="pool-builder-category">

          <div class="pool-category-header">

            <div>

              <h3>
                YABANCI
              </h3>

              <p>
                En fazla 10 oyuncu
              </p>

            </div>

            <strong>
              ${foreignCount}/10
            </strong>

          </div>


          <div class="pool-slots">

            ${foreignSlots
              .map(
                (player, index) =>
                  renderPoolSlot(
                    player,
                    'foreign',
                    index
                  )
              )
              .join('')}

          </div>

        </div>


        <div class="pool-builder-category">

          <div class="pool-category-header">

            <div>

              <h3>
                U23 YABANCI
              </h3>

              <p>
                En fazla 4 oyuncu
              </p>

            </div>

            <strong>
              ${u23Count}/4
            </strong>

          </div>


          <div class="pool-slots">

            ${u23Slots
              .map(
                (player, index) =>
                  renderPoolSlot(
                    player,
                    'u23',
                    index
                  )
              )
              .join('')}

          </div>

        </div>


        <div class="pool-builder-category">

          <div class="pool-category-header">

            <div>

              <h3>
                YERLİ
              </h3>

              <p>
                İstediğin kadar yerli oyuncu
              </p>

            </div>

            <button
              id="addAllLocalPlayers"
              class="secondary-button small-button"
            >
              Tümünü Ekle
            </button>

            <strong>
              ${localPool.length}
            </strong>

          </div>


          <div class="pool-slots">

            ${localSlots
              .map(
                (player, index) =>
                  renderPoolSlot(
                    player,
                    'local',
                    index
                  )
              )
              .join('')}

            <button
              class="pool-slot empty"
              data-pool-type="local"
              data-pool-index="${localSlots.length}"
            >

              <span>+</span>

              <small>
                Yerli oyuncu ekle
              </small>

            </button>

          </div>

        </div>


        <div class="pool-actions">

          ${
            !ready
              ? `
                <p class="pool-actions-hint">
                  Kadro tamamlanmadı — en az 18 oyuncu gerekli
                  (şu an ${totalCount}/18)
                </p>
              `
              : ''
          }

          <button
            id="continueToLineup"
            class="primary-button"
            ${ready ? '' : 'disabled'}
          >

            İlk 11'i Kur →

          </button>

          ${
            ready
              ? `
                <button
                  id="savePoolImage"
                  class="secondary-button"
                >
                  📸 Havuzu Görsel Olarak Kaydet
                </button>
              `
              : ''
          }

        </div>


      </section>


      <aside class="pool-player-panel">

        <div class="pool-return">

          <span>
            Oyuncu Havuzu
          </span>

          <span>
            ${getTeamPlayers().length} oyuncu
          </span>

        </div>


        <button
          id="openTransferModal"
          class="secondary-button transfer-button"
        >
          + Yeni Transfer Ekle
        </button>


        <p>
          Bir oyuncuya tıklayarak uygun kategoriye ekle.
        </p>


        ${renderPlayerCategory(
          'KALECİ',
          getTeamPlayers()
        )}

        ${renderPlayerCategory(
          'SAVUNMA',
          getTeamPlayers()
        )}

        ${renderPlayerCategory(
          'ORTA SAHA',
          getTeamPlayers()
        )}

        ${renderPlayerCategory(
          'HÜCUM',
          getTeamPlayers()
        )}

      </aside>


    </main>


    ${renderPoolPlayerModal()}

    ${renderTransferModal()}

  `


  bindPoolEvents()

}


/* =========================================================
   OYUNCU SEÇME MODALI
========================================================= */

function renderPoolPlayerModal() {

  return `

    <div
      id="poolPlayerModal"
      class="modal hidden"
    >

      <div class="modal-box">

        <button
          id="closePoolModal"
          class="modal-close"
        >
          ×
        </button>


        <h2>
          Oyuncu Seç
        </h2>


        <p class="modal-description">
          Oyuncu bu kategoriye eklenecek.
        </p>


        <div
          id="poolModalPlayers"
          class="player-list"
        >

        </div>

      </div>

    </div>

  `
}


/* =========================================================
   10+4 OYUNCU SEÇİMİ
========================================================= */

function openPoolPlayerModal(type, index) {

  currentPoolCategory = {
    type,
    index
  }


  const modal =
    document.querySelector('#poolPlayerModal')


  const list =
    document.querySelector('#poolModalPlayers')


  let availablePlayers = []


  if (type === 'foreign') {

    availablePlayers =
      getTeamPlayers().filter(
        player =>
          hasTag(player, 'yabanci') ||
          hasTag(player, 'u23yabanci') ||
          hasTag(player, 'u23-yabanci')
      )

  }


  if (type === 'u23') {

    availablePlayers =
      getTeamPlayers().filter(
        player =>
          hasTag(player, 'u23yabanci') ||
          hasTag(player, 'u23-yabanci')
      )

  }


  if (type === 'local') {

    availablePlayers =
      getTeamPlayers().filter(
        player =>
          hasTag(player, 'yerli')
      )

  }


  /*
    Aynı oyuncu birden fazla yerde kullanılamaz.
  */

  const usedIds = [

    ...foreignPool,

    ...u23Pool,

    ...localPool

  ]
    .filter(Boolean)
    .map(player => player.id)


  availablePlayers =
    availablePlayers.filter(
      player =>
        !usedIds.includes(player.id)
    )


  list.innerHTML = `

    ${renderPlayerCategory(
      'KALECİ',
      availablePlayers
    )}

    ${renderPlayerCategory(
      'SAVUNMA',
      availablePlayers
    )}

    ${renderPlayerCategory(
      'ORTA SAHA',
      availablePlayers
    )}

    ${renderPlayerCategory(
      'HÜCUM',
      availablePlayers
    )}

    ${
      availablePlayers.length === 0
        ? `
          <div class="empty-state">
            Bu kategoriye uygun oyuncu kalmadı.
          </div>
        `
        : ''
    }

  `


  modal.classList.remove('hidden')


  list
    .querySelectorAll('.player-option')
    .forEach(button => {

      button.addEventListener(
        'click',
        () => {

          const id =
            Number(
              button.dataset.player
            )


          const player =
            availablePlayers.find(
              player =>
                player.id === id
            )


          addPlayerToPool(
            player
          )

        }
      )

    })

}


/* =========================================================
   OYUNCUYU HAVUZA EKLE
========================================================= */

function addPlayerToPool(player) {

  if (!player) return

  if (!player.tags?.includes(selectedTeam)) {
    alert('Bu oyuncu seçili takımın kadrosunda değil.')
    return
  }

  if (isAlreadyInPool(player)) {
    alert('Bu oyuncu zaten 10+4 havuzunda.')
    return
  }

  const { type } = currentPoolCategory || {}

  if (type === 'foreign') {
    if (!isForeign(player)) {
      alert('Bu slota sadece yabancı oyuncular veya U23 yabancı oyuncular eklenebilir.')
      return
    }
    if (foreignPool.length >= 10) {
      alert('En fazla 10 yabancı oyuncu seçebilirsin.')
      return
    }
    foreignPool.push(player)
  }

  if (type === 'u23') {
    if (!isU23Foreign(player)) {
      alert('Bu slota sadece U23 yabancı oyuncular eklenebilir.')
      return
    }
    if (u23Pool.length >= 4) {
      alert('En fazla 4 U23 yabancı oyuncu seçebilirsin.')
      return
    }
    u23Pool.push(player)
  }

  if (type === 'local') {
    if (!isLocal(player)) {
      alert('Bu slota sadece yerli oyuncular eklenebilir.')
      return
    }
    localPool.push(player)
  }

  closePoolModal()
  renderPoolScreen()
}


/* =========================================================
   TÜM YERLİLERİ EKLE
========================================================= */

function addAllLocalPlayers() {

  const usedIds = [

    ...foreignPool,

    ...u23Pool,

    ...localPool

  ]
    .filter(Boolean)
    .map(player => player.id)


  const remainingLocals =
    getTeamPlayers()
      .filter(player => hasTag(player, 'yerli'))
      .filter(player => !usedIds.includes(player.id))


  localPool.push(...remainingLocals)

  renderPoolScreen()

}


/* =========================================================
   HAVUZDAN OYUNCU SİL
========================================================= */

function removePoolPlayer(type, index) {

  if (type === 'foreign') {

    foreignPool.splice(index, 1)

  }


  if (type === 'u23') {

    u23Pool.splice(index, 1)

  }


  if (type === 'local') {

    localPool.splice(index, 1)

  }


  renderPoolScreen()

}


/* =========================================================
   MODAL KAPAT
========================================================= */

function closePoolModal() {

  const modal =
    document.querySelector(
      '#poolPlayerModal'
    )


  if (modal) {

    modal.classList.add('hidden')

  }


  currentPoolCategory = null

}


/* =========================================================
   YENİ TRANSFER MODALI
========================================================= */

function renderTransferModal() {

  return `

    <div
      id="transferModal"
      class="modal hidden"
    >

      <div class="modal-box">

        <button
          id="closeTransferModal"
          class="modal-close"
        >
          ×
        </button>


        <h2>
          Yeni Transfer Ekle
        </h2>


        <p class="modal-description">
          ${teams[selectedTeam].name} kadrosuna yeni bir oyuncu ekle.
        </p>


        <form
          id="transferForm"
          class="transfer-form"
        >

          <div class="form-field">

            <label for="transferName">
              Ad Soyad
            </label>

            <input
              type="text"
              id="transferName"
              placeholder="Örn. Ali Yılmaz"
              required
            />

          </div>


          <div class="form-row">

            <div class="form-field">

              <label for="transferNumber">
                Forma Numarası
              </label>

              <input
                type="number"
                id="transferNumber"
                min="1"
                max="99"
                placeholder="Örn. 7"
              />

            </div>


            <div class="form-field">

              <label for="transferAge">
                Yaş
              </label>

              <input
                type="number"
                id="transferAge"
                min="14"
                max="50"
                placeholder="Örn. 24"
              />

            </div>

          </div>


          <div class="form-field">

            <label for="transferCountry">
              Ülke
            </label>

            <input
              type="text"
              id="transferCountry"
              placeholder="Örn. Türkiye"
              required
            />

          </div>


          <div class="form-row">

            <div class="form-field">

              <label for="transferPosition">
                Pozisyon
              </label>

              <select
                id="transferPosition"
                required
              >

                ${positionOptions
                  .map(
                    option => `
                      <option value="${option.code}">
                        ${option.label}
                      </option>
                    `
                  )
                  .join('')}

              </select>

            </div>


            <div class="form-field">

              <label for="transferStatus">
                Durum
              </label>

              <select
                id="transferStatus"
                required
              >

                ${statusOptions
                  .map(
                    option => `
                      <option value="${option.value}">
                        ${option.label}
                      </option>
                    `
                  )
                  .join('')}

              </select>

            </div>

          </div>


          <div class="form-actions">

            <button
              type="submit"
              class="primary-button"
            >
              Transferi Ekle
            </button>

          </div>

        </form>

      </div>

    </div>

  `

}


function openTransferModal() {

  const modal =
    document.querySelector(
      '#transferModal'
    )

  if (modal) {

    modal.classList.remove('hidden')

  }

}


function closeTransferModal() {

  const modal =
    document.querySelector(
      '#transferModal'
    )

  if (modal) {

    modal.classList.add('hidden')

  }

}


function submitTransferForm(event) {

  event.preventDefault()

  const name =
    document
      .querySelector('#transferName')
      .value.trim()

  const number =
    document
      .querySelector('#transferNumber')
      .value

  const age =
    document
      .querySelector('#transferAge')
      .value

  const country =
    document
      .querySelector('#transferCountry')
      .value.trim()

  const position =
    document
      .querySelector('#transferPosition')
      .value

  const status =
    document
      .querySelector('#transferStatus')
      .value


  if (!name || !country) {

    return

  }


  const newPlayer = {
    id: Date.now(),
    name,
    shortName: makeShortName(name),
    number: number ? Number(number) : null,
    age: age ? Number(age) : null,
    country,
    position,
    tags: [status, selectedTeam]
  }


  customPlayers.push(newPlayer)

  closeTransferModal()

  render()

}


function bindTransferModalEvents() {

  const openBtn =
    document.querySelector(
      '#openTransferModal'
    )

  if (openBtn) {

    openBtn.addEventListener(
      'click',
      openTransferModal
    )

  }


  const closeBtn =
    document.querySelector(
      '#closeTransferModal'
    )

  if (closeBtn) {

    closeBtn.addEventListener(
      'click',
      closeTransferModal
    )

  }


  const form =
    document.querySelector(
      '#transferForm'
    )

  if (form) {

    form.addEventListener(
      'submit',
      submitTransferForm
    )

  }

}


/* =========================================================
   HAVUZ EVENTLERİ
========================================================= */

function bindPoolEvents() {

  const addAllLocalBtn =
    document.querySelector(
      '#addAllLocalPlayers'
    )


  if (addAllLocalBtn) {

    addAllLocalBtn.addEventListener(
      'click',
      addAllLocalPlayers
    )

  }


  const teamSelect =
    document.querySelector(
      '#teamSelect'
    )


  const modeSelect =
    document.querySelector(
      '#modeSelect'
    )


  teamSelect.value =
    selectedTeam


  modeSelect.value =
    selectedMode


  teamSelect.addEventListener(
    'change',
    event => {

      selectedTeam =
        event.target.value

      lineup =
        Array(11).fill(null)


      resetPools()

      render()

    }
  )


  modeSelect.addEventListener(
    'change',
    event => {

      selectedMode =
        event.target.value

      lineup =
        Array(11).fill(null)

      render()

    }
  )


  document
    .querySelectorAll('.pool-slot.empty')
    .forEach(slot => {

      slot.addEventListener(
        'click',
        () => {

          openPoolPlayerModal(
            slot.dataset.poolType,
            Number(
              slot.dataset.poolIndex
            )
          )

        }
      )

    })


  document
    .querySelectorAll('.remove-pool-player')
    .forEach(button => {

      button.addEventListener(
        'click',
        event => {

          event.stopPropagation()

          removePoolPlayer(
            button.dataset.removeType,
            Number(
              button.dataset.removeIndex
            )
          )

        }
      )

    })


  document
    .querySelector('#closePoolModal')
    .addEventListener(
      'click',
      closePoolModal
    )


  document
    .querySelector('#continueToLineup')
    .addEventListener(
      'click',
      () => {

        if (
          foreignPool.length !== 10 ||
          u23Pool.length !== 4
        ) {

          return

        }

        selectedMode = '104'

        renderLineup()

      }
    )


  const savePoolBtn =
    document.querySelector(
      '#savePoolImage'
    )


  if (savePoolBtn) {

    savePoolBtn.addEventListener(
      'click',
      savePoolAsImage
    )

  }


  bindTransferModalEvents()

  bindBrandHome()

}


/* =========================================================
   SERBEST MOD / İLK 11
========================================================= */

function renderLineup() {

  const team =
    teams[selectedTeam]

  const positions =
    formations[selectedFormation]


  app.innerHTML = `

    <header class="header">

      <div class="brand" id="brandHome">
        TSLXI
      </div>


      <div class="controls">

        <div class="control">

          <label>TAKIM</label>

          <select id="teamSelect">

            <option value="besiktas">
              Beşiktaş
            </option>

            <option value="fenerbahce">
              Fenerbahçe
            </option>

            <option value="galatasaray">
              Galatasaray
            </option>

            <option value="trabzonspor">
              Trabzonspor
            </option>

          </select>

        </div>


        <div class="control">

          <label>KADRO TİPİ</label>

          <select id="modeSelect">

            <option value="free">
              Serbest
            </option>

            <option value="104">
              10+4
            </option>

          </select>

        </div>


        <div class="control">

          <label>DİZİLİŞ</label>

          <select id="formationSelect">

            ${Object.keys(formations)
              .map(
                formation => `
                  <option
                    value="${formation}"
                    ${
                      formation ===
                      selectedFormation
                        ? 'selected'
                        : ''
                    }
                  >
                    ${formation}
                  </option>
                `
              )
              .join('')}

          </select>

        </div>

      </div>

    </header>


    <main>

      <section class="main-panel">

        <div class="team-header">

          <div
            class="team-logo"
            style="
              background:${team.primary};
              color:${team.secondary};
              border-color:${team.secondary};
            "
          >
            ${team.short}
          </div>


          <div>

            <h1>
              ${team.name}
            </h1>

            <p>
              ${selectedFormation}
            </p>

          </div>

        </div>


        <div
          class="pitch"
          style="
            --team-primary:${team.primary};
            --team-secondary:${team.secondary};
          "
        >

          <div class="half-line"></div>

          <div class="center-circle"></div>

          <div class="penalty penalty-top"></div>

          <div class="penalty penalty-bottom"></div>

          <div class="goal goal-top"></div>

          <div class="goal goal-bottom"></div>


          ${positions.map(
            (position, index) => {

              const player =
                lineup[index]


              return `

                <div
                  class="player-position"
                  data-slot="${index}"
                  style="
                    left:${position[0]}%;
                    top:${position[1]}%;
                  "
                >

                  <div class="player-shirt">

                    ${
                      player
                        ? player.number || '#'
                        : '+'
                    }

                  </div>


                  <span>

                    ${
                      player
                        ? player.shortName
                        : 'Oyuncu seç'
                    }

                  </span>

                </div>

              `

            }
          ).join('')}

        </div>


        <div class="manager">

          <span>
            TEKNİK DİREKTÖR
          </span>

          <strong>
            ${team.manager || 'Belirlenmedi'}
          </strong>

        </div>


        ${
          lineup.every(Boolean)
            ? `
              <div class="save-image-row">
                <button
                  id="saveLineupImage"
                  class="secondary-button"
                >
                  📸 Kadroyu Görsel Olarak Kaydet
                </button>
              </div>
            `
            : ''
        }

      </section>


      <aside class="side-panel">

        <h2>
          ${
            selectedMode === '104'
              ? '10+4 Kadro Havuzu'
              : 'Oyuncu Havuzu'
          }
        </h2>


        <p class="side-description">

          ${
            selectedMode === '104'
              ? `
                ${foreignPool.length}/10 YBN
                ·
                ${u23Pool.length}/4 U23
                ·
                ${localPool.length} YRL
              `
              : 'Geniş kadro'
          }

        </p>


        ${
          selectedMode === '104'
            ? `
              <button
                id="backToPool"
                class="secondary-button"
              >
                ← 10+4 Havuzunu Düzenle
              </button>
            `
            : `
              <button
                id="openTransferModal"
                class="secondary-button transfer-button"
              >
                + Yeni Transfer Ekle
              </button>
            `
        }


        <div class="lineup-player-list">

          ${
            selectedMode === '104'
              ? renderLineupPoolPlayers()
              : renderFreePlayers()
          }

        </div>

      </aside>

    </main>


    ${renderLineupModal()}

    ${renderTransferModal()}

  `


  bindLineupEvents()

}


/* =========================================================
   10+4 İLK 11 OYUNCULARI
========================================================= */

function getAllPoolPlayers() {

  return [
    ...foreignPool,
    ...u23Pool,
    ...localPool
  ]

}


function renderLineupPoolPlayers() {

  const poolPlayers =
    getAllPoolPlayers()


  return `

    <div class="player-category-list">

      ${sortPlayers(poolPlayers)
        .map(
          player => `

            <button
              class="player-option"
              data-player="${player.id}"
            >

              <div>

                <strong>
                  ${player.shortName}
                </strong>

                <div class="player-meta">

                  <span class="player-position-label">
                    ${player.position || ''}
                  </span>

                  <div class="player-tags">

                    ${renderPlayerTags(player)}

                  </div>

                </div>

              </div>


              <b>
                #${player.number || ''}
              </b>

            </button>

          `
        )
        .join('')}

    </div>

  `

}


function renderFreePlayers() {

  const teamPlayers =
    getTeamPlayers()

  return `

    ${renderPlayerCategory(
      'KALECİ',
      teamPlayers
    )}

    ${renderPlayerCategory(
      'SAVUNMA',
      teamPlayers
    )}

    ${renderPlayerCategory(
      'ORTA SAHA',
      teamPlayers
    )}

    ${renderPlayerCategory(
      'HÜCUM',
      teamPlayers
    )}

  `

}


/* =========================================================
   İLK 11 MODALI
========================================================= */

function renderLineupModal() {

  return `

    <div
      id="lineupModal"
      class="modal hidden"
    >

      <div class="modal-box">

        <button
          id="closeLineupModal"
          class="modal-close"
        >
          ×
        </button>


        <h2>
          Oyuncu Ekle
        </h2>


        <p class="modal-description">
          İlk 11'e eklemek istediğin oyuncuyu seç.
        </p>


        <div
          id="lineupModalPlayers"
          class="player-list"
        >

        </div>

      </div>

    </div>

  `

}


/* =========================================================
   İLK 11 EVENTLERİ
========================================================= */

function bindLineupEvents() {

  const teamSelect =
    document.querySelector(
      '#teamSelect'
    )


  const modeSelect =
    document.querySelector(
      '#modeSelect'
    )


  teamSelect.value =
    selectedTeam


  modeSelect.value =
    selectedMode


  teamSelect.addEventListener(
    'change',
    event => {

      selectedTeam =
        event.target.value

      lineup =
        Array(11).fill(null)


      resetPools()

      render()

    }
  )


  modeSelect.addEventListener(
    'change',
    event => {

      selectedMode =
        event.target.value

      if (
        selectedMode === '104' &&
        (
          foreignPool.length < 10 ||
          u23Pool.length < 4
        )
      ) {

        renderPoolScreen()

        return

      }

      render()

    }
  )


  document
    .querySelector('#formationSelect')
    .addEventListener(
      'change',
      event => {

        selectedFormation =
          event.target.value

        renderLineup()

      }
    )


  document
    .querySelectorAll('.player-position')
    .forEach(slot => {

      slot.addEventListener(
        'click',
        () => {

          selectedSlot =
            Number(
              slot.dataset.slot
            )


          openLineupPlayerModal()

        }
      )

    })


  const backToPool =
    document.querySelector(
      '#backToPool'
    )


  if (backToPool) {

    backToPool.addEventListener(
      'click',
      renderPoolScreen
    )

  }


  const closeModal =
    document.querySelector(
      '#closeLineupModal'
    )


  if (closeModal) {

    closeModal.addEventListener(
      'click',
      closeLineupModal
    )

  }


  const saveLineupBtn =
    document.querySelector(
      '#saveLineupImage'
    )


  if (saveLineupBtn) {

    saveLineupBtn.addEventListener(
      'click',
      saveLineupAsImage
    )

  }


  bindTransferModalEvents()

  bindBrandHome()

}


/* =========================================================
   İLK 11 OYUNCU MODALI
========================================================= */

function openLineupPlayerModal() {

  const modal =
    document.querySelector(
      '#lineupModal'
    )


  const list =
    document.querySelector(
      '#lineupModalPlayers'
    )


  let availablePlayers = []


  if (selectedMode === '104') {

    availablePlayers =
      getAllPoolPlayers()

  } else {

    availablePlayers =
      getTeamPlayers()

  }


  /*
    Aynı oyuncu iki kez ilk 11'e koyulamaz.
  */

  const selectedIds =
    lineup
      .filter(Boolean)
      .map(
        player =>
          player.id
      )


  availablePlayers =
    availablePlayers.filter(
      player =>
        !selectedIds.includes(
          player.id
        )
    )


  list.innerHTML = `

    ${renderPlayerCategory(
      'KALECİ',
      availablePlayers
    )}

    ${renderPlayerCategory(
      'SAVUNMA',
      availablePlayers
    )}

    ${renderPlayerCategory(
      'ORTA SAHA',
      availablePlayers
    )}

    ${renderPlayerCategory(
      'HÜCUM',
      availablePlayers
    )}

  `


  modal.classList.remove(
    'hidden'
  )


  list
    .querySelectorAll(
      '.player-option'
    )
    .forEach(button => {

      button.addEventListener(
        'click',
        () => {

          const id =
            Number(
              button.dataset.player
            )


          const player =
            availablePlayers.find(
              player =>
                player.id === id
            )


          lineup[
            selectedSlot
          ] = player


          closeLineupModal()

          renderLineup()

        }
      )

    })

}


function closeLineupModal() {

  const modal =
    document.querySelector(
      '#lineupModal'
    )


  if (modal) {

    modal.classList.add(
      'hidden'
    )

  }


  selectedSlot = null

}


/* =========================================================
   GÖRSEL OLARAK KAYDET
========================================================= */

function downloadCanvas(canvas, filename) {

  canvas.toBlob(blob => {

    if (!blob) {

      return

    }

    const url =
      URL.createObjectURL(blob)

    const link =
      document.createElement('a')

    link.href = url
    link.download = filename

    document.body.appendChild(link)

    link.click()

    document.body.removeChild(link)

    URL.revokeObjectURL(url)

  }, 'image/png')

}


function drawRoundedRect(ctx, x, y, w, h, r) {

  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
  ctx.closePath()

}


function drawCrest(ctx, team, x, y, size) {

  ctx.save()

  ctx.fillStyle = team.primary
  drawRoundedRect(ctx, x, y, size, size, size * 0.28)
  ctx.fill()

  ctx.lineWidth = 3
  ctx.strokeStyle = team.secondary
  drawRoundedRect(ctx, x, y, size, size, size * 0.28)
  ctx.stroke()

  ctx.fillStyle = team.secondary
  ctx.font = `900 ${Math.round(size * 0.32)}px Arial`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(team.short, x + size / 2, y + size / 2 + 1)

  ctx.restore()

}


function saveLineupAsImage() {

  const team =
    teams[selectedTeam]

  const positions =
    formations[selectedFormation]

  const width = 900
  const headerHeight = 170
  const pitchMargin = 50
  const pitchWidth = width - pitchMargin * 2
  const pitchHeight = pitchWidth / 0.68
  const footerHeight = 140

  const height =
    headerHeight + pitchHeight + footerHeight

  const canvas =
    document.createElement('canvas')

  canvas.width = width
  canvas.height = height

  const ctx =
    canvas.getContext('2d')

  /* arka plan */

  ctx.fillStyle = '#0b0c10'
  ctx.fillRect(0, 0, width, height)

  /* başlık */

  drawCrest(ctx, team, 50, 45, 76)

  ctx.textAlign = 'left'
  ctx.textBaseline = 'alphabetic'
  ctx.fillStyle = '#ffffff'
  ctx.font = '900 36px Arial'
  ctx.fillText(team.name, 144, 82)

  ctx.fillStyle = 'rgba(255,255,255,.5)'
  ctx.font = '700 18px Arial'
  ctx.fillText(
    `${selectedFormation}  ·  ${
      selectedMode === '104'
        ? '10+4 Kadro'
        : 'Serbest Kadro'
    }`,
    144,
    112
  )

  /* saha */

  const pitchX = pitchMargin
  const pitchY = headerHeight

  const stripeCount = 11

  for (let i = 0; i < stripeCount; i++) {

    ctx.fillStyle =
      i % 2 === 0 ? '#168344' : '#197f42'

    ctx.fillRect(
      pitchX + (pitchWidth / stripeCount) * i,
      pitchY,
      pitchWidth / stripeCount,
      pitchHeight
    )

  }

  ctx.strokeStyle = 'rgba(255,255,255,.8)'
  ctx.lineWidth = 2
  ctx.strokeRect(pitchX, pitchY, pitchWidth, pitchHeight)

  /* orta çizgi */

  ctx.beginPath()
  ctx.moveTo(pitchX, pitchY + pitchHeight / 2)
  ctx.lineTo(pitchX + pitchWidth, pitchY + pitchHeight / 2)
  ctx.stroke()

  /* orta yuvarlak */

  ctx.beginPath()
  ctx.arc(
    pitchX + pitchWidth / 2,
    pitchY + pitchHeight / 2,
    pitchWidth * 0.125,
    0,
    Math.PI * 2
  )
  ctx.stroke()

  /* ceza sahaları */

  const penaltyW = pitchWidth * 0.46
  const penaltyH = pitchHeight * 0.15
  const penaltyX = pitchX + pitchWidth * 0.27

  ctx.strokeRect(penaltyX, pitchY, penaltyW, penaltyH)
  ctx.strokeRect(
    penaltyX,
    pitchY + pitchHeight - penaltyH,
    penaltyW,
    penaltyH
  )

  /* kaleler */

  const goalW = pitchWidth * 0.22
  const goalH = pitchHeight * 0.04
  const goalX = pitchX + pitchWidth * 0.39

  ctx.strokeRect(goalX, pitchY, goalW, goalH)
  ctx.strokeRect(
    goalX,
    pitchY + pitchHeight - goalH,
    goalW,
    goalH
  )

  /* oyuncular */

  positions.forEach((position, index) => {

    const player = lineup[index]

    const px =
      pitchX + (position[0] / 100) * pitchWidth

    const py =
      pitchY + (position[1] / 100) * pitchHeight

    ctx.beginPath()
    ctx.arc(px, py, 32, 0, Math.PI * 2)
    ctx.fillStyle = team.secondary
    ctx.fill()
    ctx.lineWidth = 3
    ctx.strokeStyle = 'rgba(0,0,0,.35)'
    ctx.stroke()

    ctx.fillStyle = team.primary
    ctx.font = '900 24px Arial'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(
      player ? String(player.number || '#') : '+',
      px,
      py + 1
    )

    ctx.fillStyle = '#ffffff'
    ctx.font = '800 15px Arial'
    ctx.textBaseline = 'alphabetic'
    ctx.shadowColor = 'rgba(0,0,0,.8)'
    ctx.shadowBlur = 4

    ctx.fillText(
      player ? player.shortName : 'Oyuncu seç',
      px,
      py + 54
    )

    ctx.shadowBlur = 0

  })

  /* teknik direktör */

  ctx.textAlign = 'center'
  ctx.fillStyle = 'rgba(255,255,255,.4)'
  ctx.font = '800 13px Arial'
  ctx.fillText(
    'TEKNİK DİREKTÖR',
    width / 2,
    pitchY + pitchHeight + 45
  )

  ctx.fillStyle = '#ffffff'
  ctx.font = '900 24px Arial'
  ctx.fillText(
    team.manager || 'Belirlenmedi',
    width / 2,
    pitchY + pitchHeight + 78
  )

  downloadCanvas(
    canvas,
    `${team.short}-ilk11-${selectedFormation.replace(/\s+/g, '-')}.png`
  )

}


function savePoolAsImage() {

  const team =
    teams[selectedTeam]

  const sections = [
    {
      title: `YABANCI (${foreignPool.length}/10)`,
      list: sortPlayers(foreignPool)
    },
    {
      title: `U23 YABANCI (${u23Pool.length}/4)`,
      list: sortPlayers(u23Pool)
    },
    {
      title: `YERLİ (${localPool.length})`,
      list: sortPlayers(localPool)
    }
  ]

  const width = 720
  const headerHeight = 150
  const rowHeight = 42
  const sectionTitleHeight = 40
  const sectionGap = 34

  let height = headerHeight + 40

  sections.forEach(section => {

    height +=
      sectionTitleHeight +
      section.list.length * rowHeight +
      sectionGap

  })

  const canvas =
    document.createElement('canvas')

  canvas.width = width
  canvas.height = height

  const ctx =
    canvas.getContext('2d')

  ctx.fillStyle = '#0b0c10'
  ctx.fillRect(0, 0, width, height)

  drawCrest(ctx, team, 40, 40, 70)

  ctx.textAlign = 'left'
  ctx.fillStyle = '#ffffff'
  ctx.font = '900 30px Arial'
  ctx.fillText(team.name, 128, 72)

  ctx.fillStyle = 'rgba(255,255,255,.5)'
  ctx.font = '700 16px Arial'
  ctx.fillText('10+4 Kadro Havuzu', 128, 98)

  let y = headerHeight

  sections.forEach(section => {

    ctx.fillStyle = team.secondary
    ctx.font = '900 17px Arial'
    ctx.fillText(section.title, 40, y)

    y += 28

    if (!section.list.length) {

      ctx.fillStyle = 'rgba(255,255,255,.35)'
      ctx.font = '700 13px Arial'
      ctx.fillText('Oyuncu eklenmedi', 40, y + 14)

      y += rowHeight

    }

    section.list.forEach(player => {

      ctx.fillStyle = 'rgba(255,255,255,.05)'
      drawRoundedRect(
        ctx,
        40,
        y - 4,
        width - 80,
        rowHeight - 10,
        8
      )
      ctx.fill()

      ctx.fillStyle = '#ffffff'
      ctx.font = '800 15px Arial'
      ctx.textAlign = 'left'
      ctx.fillText(
        `#${player.number || '-'}  ${player.shortName}`,
        55,
        y + 18
      )

      ctx.fillStyle = 'rgba(255,255,255,.5)'
      ctx.font = '700 13px Arial'
      ctx.textAlign = 'right'
      ctx.fillText(
        player.position || '',
        width - 55,
        y + 18
      )

      ctx.textAlign = 'left'

      y += rowHeight

    })

    y += sectionGap

  })

  downloadCanvas(
    canvas,
    `${team.short}-10-4-havuz.png`
  )

}


/* =========================================================
   ANA RENDER
========================================================= */

function render() {

  /*
    10+4 seçildiğinde önce havuz oluşturulur.
  */

  if (selectedMode === '104') {

    /*
      Eğer 10+4 havuzu henüz tamamlanmadıysa
      doğrudan havuz ekranını göster.
    */

    if (
      foreignPool.length < 10 ||
      u23Pool.length < 4
    ) {

      renderPoolScreen()

      return

    }


    renderLineup()

    return

  }


  /*
    Serbest mod
  */

  renderLineup()

}


render()