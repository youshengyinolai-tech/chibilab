/* ============================================================
   ここから下、EVENTS と GALLERY の中身を書き換えるだけで
   サイトの表示が更新されます。HTML/CSSは触らなくてOKです。
   ============================================================ */

// ---- イベント情報（新しいものを配列の先頭に追加してください） ----
const EVENTS = [
  {
    date: "2024.03.02",
    title: "入浴剤を作ってみよう!! 水の中でもシャボン玉ができる!?",
    place: "東芝未来科学館",
    body: "小学1〜6年生を対象に、入浴剤づくりと水中シャボン玉の実験ブースを出展しました。",
  },
  {
    date: "2024.02.04",
    title: "科学実験ワークショップ",
    place: "下落合図書館（新宿区立図書館）",
    body: "地域の図書館で、親子向けの科学実験ワークショップを行いました。",
  },
  {
    date: "2023.11.24–25",
    title: "理大祭",
    place: "東京理科大学 神楽坂キャンパス",
    body: "学園祭「理大祭」にブース出展。実験ショーと工作コーナーで来場者を迎えました。",
  },
  {
    date: "2023.11.04",
    title: "サイエンスイベント出展",
    place: "東芝未来科学館",
    body: "東芝未来科学館の館内イベントに出展しました。",
  },
  {
    date: "2023.10.08",
    title: "みらい研究室 科学へのトビラ",
    place: "東京理科大学 神楽坂キャンパス",
    body: "年に数回開催される「みらい研究室」に出展。実験ショーと工作教室を行いました。",
  },
  {
    date: "2016.08.13–14",
    title: "サイエンスリンク",
    place: "日本科学未来館",
    body: "クントの実験や紙コップ工作のブースを出展し、来場者投票の「お客様賞」を受賞しました。",
  },
];

// ---- ギャラリー写真（本番では画像ファイルに差し替えてください） ----
// image: 画像パス（例 "images/event01.jpg"）。空のままなら色付きプレースホルダーが表示されます。
const GALLERY = [
  { image: "images/chibilab-miraiken-2016-03-dryice.jpg", color: "#AB511F", caption: "みらい研究室（2016年3月・堀切地区センター）のドライアイス実験ショー", tilt: -2 },
  { image: "images/chibilab-ridaisai-2016-11-purplecabbage.jpg", color: "#D7862E", caption: "理大祭（2016年11月）の紫キャベツ液を使ったお絵描き実験", tilt: 1.5 },
  { image: "images/chibilab-birthday-2016-10-cake.jpg", color: "#FF0080", caption: "chibi lab. 4周年生誕祭（2016年10月）のお祝いケーキ", tilt: -1 },
  { image: "images/chibilab-natsugasshuku-2016-08-farm.jpg", color: "#AB511F", caption: "夏合宿（2016年8月・栃木県那須町）で訪れた南ヶ丘牧場", tilt: 2 },
  { image: "images/chibilab-sciencelink-2016-08-award.jpg", color: "#D7862E", caption: "サイエンスリンク（2016年8月・日本科学未来館）でお客様賞を受賞した全員集合写真", tilt: -1.5 },
  { image: "images/chibilab-miraiken-2016-06-booth.jpg", color: "#FF0080", caption: "みらい研究室（2016年6月・日本科学未来館）のちびらぼブース", tilt: 2.5 },
  { image: "images/chibilab-shinkan-bbq-2016-05.jpg", color: "#AB511F", caption: "新歓BBQ（2016年5月・二子新地）の新メンバー集合写真", tilt: -2 },
  { image: "images/chibilab-fuyugasshuku-2015-02-fujisan.jpg", color: "#D7862E", caption: "冬合宿（2015年2月・山梨）で見た雄大な富士山", tilt: 1 },
  { image: "images/chibilab-ridaisai-2015-11-group.jpg", color: "#FF0080", caption: "理大祭（2015年11月）2日間の展示を終えての集合写真", tilt: -2.5 },
  { image: "images/chibilab-birthday-2015-10-cake.jpg", color: "#AB511F", caption: "chibi lab. 3周年を祝う誕生日ケーキ（2015年10月）", tilt: 1.5 },
  { image: "images/chibilab-natsugasshuku-2015-08-bbq.jpg", color: "#D7862E", caption: "夏合宿（2015年8月・新潟）2日目のバーベキュー", tilt: -1 },
  { image: "images/chibilab-sciencelink-2015-08-award.jpg", color: "#FF0080", caption: "サイエンスリンク（2015年8月）でお客様賞を受賞した瞬間", tilt: 2 },
  { image: "images/chibilab-miraiken-2015-06-booth.jpg", color: "#AB511F", caption: "みらい研究室（2015年6月・日本科学未来館）の実験ブースが大盛況", tilt: -1.5 },
  { image: "images/chibilab-ichigaya-es-2015-05-benham.jpg", color: "#D7862E", caption: "市ヶ谷小学校サイエンスフェスタ（2015年5月）でベンハムのこま工作", tilt: 2.5 },
  { image: "images/chibilab-sciencelink-2014-03-award.jpg", color: "#FF0080", caption: "サイエンスリンク（2014年3月）でお客様賞を受賞したときの様子", tilt: -2 },
  { image: "images/chibilab-miraiken-2014-06-miraikan.jpg", color: "#AB511F", caption: "日本科学未来館で開催された「みらい研究室」（2014年6月）でのブース出展", tilt: 1 },
  { image: "images/chibilab-ridaisai-2014-11-spectroscope.jpg", color: "#D7862E", caption: "理大祭（2014年11月）の分光器づくりで虹を観察する子どもたち", tilt: -1.5 },
  { image: "images/chibilab-nishishinjuku-es-2014-10-airgun.jpg", color: "#FF0080", caption: "西新宿小学校実験教室（2014年10月）で空気砲の的当てに夢中になる児童", tilt: 2 },
];

/* ============================================================
   ここから下は表示のしくみです。通常は触らなくて大丈夫です。
   ============================================================ */

function renderEvents() {
  const list = document.getElementById("events-list");
  list.innerHTML = EVENTS.map(ev => `
    <article class="event-entry">
      <div class="event-date">${ev.date}</div>
      <div class="event-body">
        <h3>${ev.title}</h3>
        <p>${ev.body}</p>
        <span class="event-location">${ev.place}</span>
      </div>
    </article>
  `).join("");
}

function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  grid.innerHTML = GALLERY.map(g => `
    <div class="photo-card" style="--tilt:${g.tilt || 0}deg">
      ${
        g.image
          ? `<img class="photo-placeholder" src="${g.image}" alt="${g.caption}" style="object-fit:cover;width:100%;">`
          : `<div class="photo-placeholder" style="background:${g.color}">画像を追加</div>`
      }
      <p class="photo-caption">${g.caption}</p>
    </div>
  `).join("");
}

// モバイルメニュー開閉
function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

renderEvents();
renderGallery();
initNavToggle();
