const fs = require('fs');
const path = require('path');

const subjectsDir = path.join(__dirname, '..', 'subjects');

// 1. CHINESE
let ch = fs.readFileSync(path.join(subjectsDir, 'chinese.html'), 'utf8');
ch = ch.replace(
  '<li><a href="#ch-adv2">拾、國寫（作文）高分指南</a></li>',
  '<li><a href="#ch-adv2">拾壹、國寫（作文）高分指南</a></li>'
);
ch = ch.replace(
  '<h2>拾、國寫（作文）高分指南 ✍️</h2>',
  '<h2>拾壹、國寫（作文）高分指南 ✍️</h2>'
);
ch = ch.replace(
  '<li><a href="#ch-selected15">拾壹、108課綱選文（古文十五篇）精粹</a></li>',
  '<li><a href="#ch-selected15">拾貳、108課綱選文（古文十五篇）精粹</a></li>'
);
ch = ch.replace(
  '<h2>拾壹、108課綱推薦選文（古文十五篇）核心考點總整理 📜</h2>',
  '<h2>拾貳、108課綱推薦選文（古文十五篇）核心考點總整理 📜</h2>'
);
ch = ch.replace(
  '<li><a href="#ch-idioms-trap">拾貳、學測高頻成語與望文生義陷阱</a></li>',
  '<li><a href="#ch-idioms-trap">拾參、學測高頻成語與望文生義陷阱</a></li>'
);
ch = ch.replace(
  '<h2>拾貳、大考超高頻易混淆成語與望文生義陷阱 ⚠️</h2>',
  '<h2>拾參、大考超高頻易混淆成語與望文生義陷阱 ⚠️</h2>'
);
ch = ch.replace(
  '<li><a href="#ch-reading-essay">拾參、現代文學閱讀與情意寫作昇華</a></li>',
  '<li><a href="#ch-reading-essay">拾肆、現代文學閱讀與情意寫作昇華</a></li>'
);
ch = ch.replace(
  '<h2>拾參、現代文學閱讀策略與國寫文采昇華 💎</h2>',
  '<h2>拾肆、現代文學閱讀策略與國寫文采昇華 💎</h2>'
);
fs.writeFileSync(path.join(subjectsDir, 'chinese.html'), ch, 'utf8');

// 2. MATH A
// Check math-a.html for ch-adv and ch-adv2
let ma = fs.readFileSync(path.join(subjectsDir, 'math-a.html'), 'utf8');
if (!ma.includes('href="#ch-adv"')) {
  ma = ma.replace(
    /(<li><a href="#ma-crossproduct-vol">)/i,
    '<li><a href="#ch-adv">拾壹、進階探討與滿分秘笈</a></li>\n        <li><a href="#ch-adv2">拾貳、素養題型：跨領域與真實情境</a></li>\n        $1'
  );
}
fs.writeFileSync(path.join(subjectsDir, 'math-a.html'), ma, 'utf8');

// 3. MATH B
let mb = fs.readFileSync(path.join(subjectsDir, 'math-b.html'), 'utf8');
mb = mb.replace(
  '<li><a href="#ch-adv2">拾壹、生活情境與素養導向</a></li>',
  '<li><a href="#ch-adv2">拾貳、生活情境與素養導向</a></li>'
);
mb = mb.replace(
  '<h2>拾壹、生活情境與素養導向 🛒</h2>',
  '<h2>拾貳、生活情境與素養導向 🛒</h2>'
);
mb = mb.replace(
  '<li><a href="#mb-conic-real">拾貳、生活中的圓錐曲線精華</a></li>',
  '<li><a href="#mb-conic-real">拾參、生活中的圓錐曲線精華</a></li>'
);
mb = mb.replace(
  '<h2>拾貳、生活中的圓錐曲線（拋物線・橢圓・雙曲線）🪞</h2>',
  '<h2>拾參、生活中的圓錐曲線（拋物線・橢圓・雙曲線）🪞</h2>'
);
mb = mb.replace(
  '<li><a href="#mb-matrix-life">拾參、轉移矩陣與生活密碼學</a></li>',
  '<li><a href="#mb-matrix-life">拾肆、轉移矩陣與生活密碼學</a></li>'
);
mb = mb.replace(
  '<h2>拾參、轉移矩陣（馬可夫鏈）與矩陣密碼學 🔐</h2>',
  '<h2>拾肆、轉移矩陣（馬可夫鏈）與矩陣密碼學 🔐</h2>'
);
mb = mb.replace(
  '<li><a href="#mb-sphere-earth">拾肆、地球經緯度與球面幾何測量</a></li>',
  '<li><a href="#mb-sphere-earth">拾伍、地球經緯度與球面幾何測量</a></li>'
);
mb = mb.replace(
  '<h2>拾肆、地球經緯度與球面幾何測量 🌐</h2>',
  '<h2>拾伍、地球經緯度與球面幾何測量 🌐</h2>'
);
fs.writeFileSync(path.join(subjectsDir, 'math-b.html'), mb, 'utf8');

// 4. SOCIAL
let so = fs.readFileSync(path.join(subjectsDir, 'social.html'), 'utf8');
so = so.replace(
  '<li><a href="#ch-adv2">拾壹、探究與實作：史料與圖表判讀</a></li>',
  '<li><a href="#ch-adv2">拾貳、探究與實作：史料與圖表判讀</a></li>'
);
so = so.replace(
  '<h2>拾壹、探究與實作：史料與圖表判讀 🔍</h2>',
  '<h2>拾貳、探究與實作：史料與圖表判讀 🔍</h2>'
);
so = so.replace(
  '<li><a href="#so-tw-history">拾貳、臺灣民主轉型與世界冷戰體系</a></li>',
  '<li><a href="#so-tw-history">拾參、臺灣民主轉型與世界冷戰體系</a></li>'
);
so = so.replace(
  '<h2>拾貳、歷史科核心專題：臺灣民主轉型與世界冷戰體系 🏛️</h2>',
  '<h2>拾參、歷史科核心專題：臺灣民主轉型與世界冷戰體系 🏛️</h2>'
);
so = so.replace(
  '<li><a href="#so-geo-climate">拾參、全球氣候機制與空間產業鏈</a></li>',
  '<li><a href="#so-geo-climate">拾肆、全球氣候機制與空間產業鏈</a></li>'
);
so = so.replace(
  '<h2>拾參、地理科系統專題：全球氣候機制與空間產業轉型 🗺️</h2>',
  '<h2>拾肆、地理科系統專題：全球氣候機制與空間產業轉型 🗺️</h2>'
);
so = so.replace(
  '<li><a href="#so-civic-law">拾肆、憲法法庭裁判與民刑法精要</a></li>',
  '<li><a href="#so-civic-law">拾伍、憲法法庭裁判與民刑法精要</a></li>'
);
so = so.replace(
  '<h2>拾肆、公民與社會前線：憲法審查原則與民刑法精要 ⚖️</h2>',
  '<h2>拾伍、公民與社會前線：憲法審查原則與民刑法精要 ⚖️</h2>'
);
fs.writeFileSync(path.join(subjectsDir, 'social.html'), so, 'utf8');

// 5. SCIENCE
let sc = fs.readFileSync(path.join(subjectsDir, 'science.html'), 'utf8');
sc = sc.replace(
  '<li><a href="#ch-adv2">拾玖、科學素養：實驗設計與數據分析</a></li>',
  '<li><a href="#ch-adv2">貳拾、科學素養：實驗設計與數據分析</a></li>'
);
sc = sc.replace(
  '<h2>拾玖、科學素養：實驗設計與數據分析 🧪</h2>',
  '<h2>貳拾、科學素養：實驗設計與數據分析 🧪</h2>'
);
sc = sc.replace(
  '<li><a href="#sci-optics-modern">貳拾、物理：波動光學與近代物理躍遷</a></li>',
  '<li><a href="#sci-optics-modern">貳拾壹、物理：波動光學與近代物理躍遷</a></li>'
);
sc = sc.replace(
  '<h2>貳拾、物理高頻聚焦：波動光學與近代物理躍遷 💡</h2>',
  '<h2>貳拾壹、物理高頻聚焦：波動光學與近代物理躍遷 💡</h2>'
);
sc = sc.replace(
  '<li><a href="#sci-chem-battery">貳拾壹、化學：化學平衡與先進電化學</a></li>',
  '<li><a href="#sci-chem-battery">貳拾貳、化學：化學平衡與先進電化學</a></li>'
);
sc = sc.replace(
  '<h2>貳拾壹、化學深層探索：化學平衡與先進電化學 🔋</h2>',
  '<h2>貳拾貳、化學深層探索：化學平衡與先進電化學 🔋</h2>'
);
sc = sc.replace(
  '<li><a href="#sci-bio-dogma">貳拾貳、生物：中心法則與免疫防線</a></li>',
  '<li><a href="#sci-bio-dogma">貳拾參、生物：中心法則與免疫防線</a></li>'
);
sc = sc.replace(
  '<h2>貳拾貳、生物頂標攻略：分子生物中心法則與專一性免疫 🧬</h2>',
  '<h2>貳拾參、生物頂標攻略：分子生物中心法則與專一性免疫 🧬</h2>'
);
sc = sc.replace(
  '<li><a href="#sci-earth-hr">貳拾參、地科：地震波判讀與恆星演化</a></li>',
  '<li><a href="#sci-earth-hr">貳拾肆、地科：地震波判讀與恆星演化</a></li>'
);
sc = sc.replace(
  '<h2>貳拾參、地球科學精湛解析：地震波判讀與赫羅圖演化 🪐</h2>',
  '<h2>貳拾肆、地球科學精湛解析：地震波判讀與赫羅圖演化 🪐</h2>'
);
fs.writeFileSync(path.join(subjectsDir, 'science.html'), sc, 'utf8');

console.log('Finished updating numbering across all subjects!');
