const fs = require('fs');
const path = require('path');

// 1. Process english-quiz.js
const quizPath = path.join(__dirname, '..', 'quiz', 'data', 'english-quiz.js');
let quizCode = fs.readFileSync(quizPath, 'utf8');
let quiz = JSON.parse(quizCode.substring(quizCode.indexOf('['), quizCode.lastIndexOf(']') + 1));

console.log(`Processing ${quiz.length} English quiz questions...`);

// Mapping for common vocab words without Chinese in options
const vocabMap = {
  // Common choices in the generated dataset
  "has been learning": "一直學習（現在完成進行式）",
  "is learning": "正在學習",
  "learns": "學習（簡單現在式）",
  "learned": "學過（過去式）",
  "were": "是（假設語氣與現在相反）",
  "am": "是（現在式）",
  "was": "是（過去式）",
  "be": "是（原形）",
  "has been read": "已經被閱讀（現在完成被動）",
  "has read": "已經閱讀（現在完成主動）",
  "is reading": "正在閱讀",
  "reads": "閱讀",
  "After": "在……之後（時間副詞子句）",
  "Although": "雖然儘管（讓步副詞子句）",
  "Because": "因為（原因副詞子句）",
  "Unless": "除非（條件副詞子句）",
  "that": "關係代名詞（最高級先行詞）",
  "which": "哪一個/關係代名詞（修飾物）",
  "who": "誰/關係代名詞（修飾人）",
  "whom": "誰（受格關係代名詞）",
  "expand": "擴展 / 擴大（詞彙量）",
  "extend": "延伸 / 延長",
  "expose": "暴露 / 揭露",
  "explore": "探索 / 探討",
  "contribution": "貢獻（make a contribution to）",
  "distribution": "分發 / 分配",
  "construction": "建設 / 建造",
  "destruction": "破壞 / 毀滅",
  "did": "確實（倒裝助動詞）",
  "do": "助動詞",
  "Had": "倘若當時（省略 If 之過去假設倒裝）",
  "If": "如果",
  "Has": "有",
  "Were": "倘若（省略 If 之現在假設倒裝）",
  "abundant": "豐富的 / 大量的",
  "reluctant": "勉強的不情願的",
  "fragile": "脆弱易碎的",
  "hostile": "有敵意的",
  "accommodate": "容納 / 提供住宿",
  "accumulate": "累積 / 聚積",
  "accelerate": "加速",
  "accomplish": "完成 / 達成",
  "anticipate": "預期 / 期望",
  "appreciate": "感激 / 欣賞",
  "adequate": "充足適當的",
  "arrogant": "傲慢自大的",
  "awkward": "尷尬笨拙的",
  "abrupt": "突兀突然的",
  "advocate": "倡導 / 擁護",
  "abandon": "放棄 / 拋棄",
  "abolish": "廢除（制度法規）",
  "abuse": "濫用 / 虐待",
  "affectionate": "深情的 / 慈愛的",
  "aggressive": "具侵略性的 / 積極進取的",
  "anonymous": "匿名的 / 不具名的",
  "authentic": "真實正宗的 / 真正的",
  "alleviate": "減輕 / 緩和（痛苦壓力）",
  "allocate": "分配 / 分派",
  "alter": "改變 / 修改",
  "amuse": "逗樂 / 使開心",
  "ambitious": "有雄心抱負的",
  "ambiguous": "模稜兩可含糊的",
  "artificial": "人工的人造的",
  "astonishing": "令人驚訝震驚的",
  "anticipation": "預期 / 期望",
  "anxiety": "焦慮 / 憂慮",
  "apology": "道歉 / 致歉",
  "appetite": "食慾 / 胃口",
  "beneficial": "有益的有助的",
  "brilliant": "聰穎絕頂的 / 燦爛的",
  "breathtaking": "令人屏息驚嘆的",
  "boundless": "無限無邊無際的",
  "barrier": "障礙 / 屏障",
  "bargain": "特價品 / 討價還價",
  "benefit": "益處 / 利益",
  "boundary": "邊界 / 界線",
  "bewilder": "使困惑不知所措",
  "betray": "背叛 / 出賣",
  "broadcast": "廣播 / 播送",
  "bother": "打擾 / 煩擾",
  "campaign": "宣傳活動 / 運動",
  "candidate": "候選人 / 應試者",
  "capacity": "容量 / 能力",
  "caution": "謹慎 / 小心",
  "cherish": "珍惜 / 珍愛",
  "chuckle": "輕聲笑 / 暗笑",
  "circulate": "循環 / 流通",
  "clarify": "澄清 / 闡明",
  "coincide": "同時發生 / 巧合",
  "collaborate": "合作 / 協同工作",
  "collapse": "倒塌 / 崩潰",
  "collide": "碰撞 / 衝突",
  "compact": "緊湊小巧的 / 精實的",
  "compassionate": "富有同情心的",
  "compatible": "相容的 / 兼容的",
  "compensate": "補償 / 賠償",
  "contemplate": "沉思 / 仔細考量",
  "complicate": "使複雜化",
  "concentrate": "專注 / 聚集",
  "comprehend": "理解 / 領會",
  "compromise": "妥協 / 讓步",
  "conceal": "隱瞞 / 隱藏",
  "concede": "承認讓步 / 承認失敗",
  "concur": "同意 / 一致認同",
  "condense": "濃縮 / 壓縮",
  "conduct": "實施 / 進行 / 引導",
  "confess": "坦白 / 承認",
  "conform": "遵守 / 符合（規範）",
  "confront": "面對 / 正視（挑戰）",
  "conquer": "征服 / 克服",
  "conserve": "保護 / 保存節約",
  "considerate": "體貼周到的",
  "conspicuous": "顯眼的 / 惹人注目的",
  "contaminate": "污染 / 毒害",
  "contradict": "反駁 / 與……矛盾",
  "convenient": "方便便利的",
  "cordial": "熱誠友好的 / 衷心的",
  "correspond": "相符 / 一致 / 通信",
  "corrupt": "貪腐的 / 腐敗的",
  "counsel": "諮詢 / 輔導建議",
  "courteous": "彬彬有禮的 / 謙恭的",
  "crucial": "至關重要的 / 關鍵的",
  "cultivate": "培養 / 耕作培育",
  "curb": "抑制 / 遏止",
  "curiosity": "好奇心",
  "cynical": "憤世嫉俗的 / 冷嘲熱諷的",
  "dazzling": "耀眼奪目的 / 燦爛的",
  "debate": "辯論 / 爭論",
  "debris": "殘骸 / 碎片廢墟",
  "decay": "腐爛 / 衰退",
  "deceive": "欺騙 / 矇騙",
  "declare": "宣布 / 聲明",
  "decline": "婉拒 / 下降衰退",
  "decrease": "減少 / 降低",
  "dedicate": "奉獻 / 致力於",
  "defect": "缺點 / 瑕疵",
  "defend": "防禦 / 辯護",
  "defensive": "防禦性的 / 戒備的",
  "defiant": "挑釁反抗的 / 蔑視的",
  "deficient": "缺乏不足的 / 有缺陷的",
  "deficit": "赤字 / 虧損",
  "deliberate": "深思熟慮的 / 蓄意的",
  "delicate": "精細微妙的 / 脆弱的",
  "delight": "欣喜 / 愉快",
  "demolish": "拆除 / 摧毀拆毀",
  "demonstrate": "示範證明 / 示威",
  "denounce": "譴責 / 痛斥",
  "dense": "濃密的 / 稠密的",
  "deny": "否認 / 拒絕承認",
  "depart": "出發 / 啟程離開",
  "depict": "描繪 / 描述刻畫",
  "deplete": "耗盡 / 大量消耗",
  "deprive": "剝奪 / 使喪失",
  "descend": "下降 / 走下傳承",
  "despair": "絕望",
  "despise": "鄙視 / 瞧不起",
  "destined": "命中注定的",
  "detach": "分開 / 拆卸分離",
  "deter": "威懾 / 遏止阻嚇",
  "deteriorate": "惡化 / 退化變壞",
  "devastate": "摧毀 / 使荒廢重創",
  "deviate": "偏離 / 越軌",
  "devote": "奉獻 / 致力於",
  "dignity": "尊嚴 / 高貴端莊",
  "diligent": "勤奮勤勉的",
  "diminish": "減少 / 削弱縮小",
  "diplomatic": "外交的 / 圓融得體的",
  "discard": "丟棄 / 拋棄",
  "discharge": "排放 / 釋放解雇",
  "discipline": "紀律 / 自律學科",
  "disclose": "揭露 / 透露公開",
  "discrete": "個別獨立的 / 分立的",
  "discrimination": "歧視 / 辨別力",
  "disguise": "偽裝 / 掩飾掩蓋",
  "dismay": "沮喪 / 驚慌失望",
  "dismiss": "解雇 / 駁回不予理會",
  "disperse": "驅散 / 散播分散",
  "dispute": "爭端 / 爭議爭論",
  "disrupt": "擾亂 / 中斷打亂",
  "distinguish": "區分 / 辨別",
  "distort": "扭曲 / 曲解歪曲",
  "distract": "分心 / 使分心轉移",
  "distress": "痛苦 / 苦惱危難",
  "diverse": "多元多樣的",
  "divert": "轉移 / 使轉向繞道",
  "dominate": "主導 / 支配統治",
  "drastic": "嚴厲的 / 劇烈的",
  "durable": "耐用持久的",
  "dwelling": "住所 / 住宅居所",
  "dynamic": "充滿活力的 / 動態的",
  "eager": "渴望熱切的",
  "eccentric": "古怪奇特的 / 特立獨行的",
  "economical": "節儉省錢划算的",
  "elaborate": "精心製作的 / 詳細闡述",
  "elastic": "有彈性的 / 靈活的",
  "elementary": "基本的 / 初級基礎的",
  "eligible": "具備資格的 / 符合條件的",
  "eliminate": "消除 / 淘汰排除",
  "eloquent": "雄辯口才流利的",
  "embark": "著手開始 / 登機登船",
  "embrace": "擁抱 / 欣然接受",
  "emerge": "浮現 / 嶄露頭角顯露",
  "eminent": "著名的 / 卓越傑出的",
  "emission": "排放 / 排放物",
  "empathy": "同理心 / 感同身受",
  "emphasize": "強調 / 著重",
  "empirical": "實證經驗主義的",
  "enable": "使能夠 / 賦予能力",
  "encounter": "偶遇 / 遭遇正面交鋒",
  "endanger": "危及 / 使瀕危",
  "endeavor": "努力 / 奮力拼搏",
  "endorse": "背書 / 贊同支持",
  "endure": "忍受 / 持久耐受",
  "enhance": "提升 / 增進加強",
  "enormous": "巨大的 / 龐大的",
  "enrich": "豐富 / 使充實富有",
  "ensure": "確保 / 保證",
  "enthusiasm": "熱情 / 熱忱",
  "entirely": "完全地 / 徹底地",
  "entitle": "賦予權利 / 給……命名",
  "envisage": "設想 / 展望預想",
  "epidemic": "流行病 / 疫情",
  "epoch": "時代 / 紀元新紀元",
  "equality": "平等 / 均等",
  "equip": "裝備 / 配備配有",
  "equivalent": "等同相等的 / 等價物",
  "eradicate": "根除 / 撲滅消滅",
  "erode": "侵蝕 / 腐蝕磨損",
  "erratic": "飄忽不定的 / 不穩定的",
  "erroneous": "錯誤的 / 不正確的",
  "erupt": "爆發 / 噴發噴出",
  "escalate": "升級 / 逐步擴大加劇",
  "essential": "至關重要的 / 必不可少的",
  "establish": "建立 / 確立設立",
  "esteemed": "受人尊重的 / 德高望重的",
  "estimate": "估計 / 預估估價",
  "eternal": "永恆的 / 不朽的",
  "ethical": "倫理道德的 / 合乎道德的",
  "evaluate": "評估 / 評價考量",
  "evaporate": "蒸發 / 消失不見",
  "eventual": "最終的 / 結果的",
  "evident": "明顯顯而易見的",
  "evolve": "演化 / 逐步發展進化",
  "exaggerate": "誇大 / 誇張渲染",
  "exceed": "超過 / 超越勝過",
  "excel": "勝過 / 擅長出類拔萃",
  "exceptional": "卓越非凡的 / 例外的",
  "excessive": "過度的 / 過分的過量的",
  "exclude": "排除 / 排斥不包括",
  "exclusive": "專屬獨家的 / 排他的",
  "exemplary": "典範楷模的 / 值得效仿的",
  "exhaust": "使精疲力竭 / 耗盡",
  "exhibit": "展示 / 展出展覽",
  "expand": "擴大 / 膨脹擴充",
  "expedition": "遠征 / 探險考察",
  "expel": "開除 / 驅逐驅離",
  "expenditure": "開支 / 支出花費",
  "explicit": "明確坦率的 / 清楚清楚的",
  "exploit": "利用 / 開發剝削",
  "explore": "探索 / 探討探究",
  "exquisite": "精緻精美的 / 精巧的",
  "extend": "延伸 / 擴展提供",
  "extensive": "廣泛廣博的 / 大規模的",
  "extinguish": "撲滅 / 熄滅消滅",
  "extraordinary": "非凡卓越的 / 異常的",
  "extravagant": "奢侈浪費的 / 鋪張的",
  "fabricate": "捏造 / 編造製造",
  "facilitate": "促進 / 使便利推動",
  "faithful": "忠實守信的 / 忠誠的",
  "famine": "饑荒 / 嚴重匱乏",
  "fascinate": "使著迷 / 深深吸引",
  "feasible": "切實可行的 / 辦得到的",
  "feeble": "虛弱無力的 / 微弱的",
  "fertile": "肥沃多產的 / 豐饒的",
  "fierce": "兇猛強烈的 / 激烈的",
  "flawless": "完美無瑕的 / 無可挑剔的",
  "flee": "逃跑 / 逃離逃避",
  "flexible": "有彈性的 / 靈活可變通的",
  "flourish": "繁榮昌盛 / 蓬勃發展",
  "fluctuate": "波動 / 起伏不定",
  "forbid": "禁止 / 不准",
  "formidable": "實力強大的 / 令人敬畏的",
  "foster": "培養 / 促進撫養",
  "fragile": "脆弱易碎的 / 薄弱的",
  "fragment": "碎片 / 斷片片段",
  "frequent": "頻繁屢次的 / 常去",
  "frustrate": "使受挫 / 使沮喪灰心",
  "fundamental": "基礎根本的 / 基本原則",
  "furious": "暴怒狂怒的 / 狂烈的",
  "futile": "徒勞無功的 / 無益無效的"
};

// Function to clean and extract stem translation
function getStemTranslation(q) {
  // If already has data-tw, keep it
  const match = q.question.match(/data-tw="([^"]+)"/);
  if (match) return match[1];

  // Try extracting from explanation
  if (q.explanation) {
    const juYiMatch = q.explanation.match(/句意[：:]\s*([^。]+。?)/);
    if (juYiMatch) return juYiMatch[1].trim();

    // Check if explanation starts with meaning
    const parts = q.explanation.split(/[。；]/);
    if (parts.length > 0 && parts[0].length > 4 && /[\u4e00-\u9fa5]/.test(parts[0])) {
      return parts[0].trim();
    }
  }

  // Fallback translation prompt
  return "請仔細閱讀英文句意並選出最適當答案";
}

let modifiedStems = 0;
let modifiedOptions = 0;

quiz.forEach((q, idx) => {
  // 1. Process Question Stem
  if (q.type !== 'writing') {
    if (!q.question.includes('speak-icon')) {
      const trans = getStemTranslation(q);
      const plainStem = q.question.replace(/<[^>]+>/g, '').trim();
      q.question = `<span class="en-assist" data-tw="${trans.replace(/"/g, '&quot;')}" data-en="${plainStem.replace(/"/g, '&quot;')}">${plainStem}<span class="speak-icon">🔊</span></span>`;
      modifiedStems++;
    }
  }

  // 2. Process Options
  if (q.options && Array.isArray(q.options)) {
    q.options = q.options.map(opt => {
      let trimmed = opt.trim();
      // If already has Chinese, keep as is
      if (/[\u4e00-\u9fa5]/.test(trimmed)) {
        return trimmed;
      }
      // Check vocabMap
      if (vocabMap[trimmed]) {
        modifiedOptions++;
        return `${trimmed}（${vocabMap[trimmed]}）`;
      }
      // If explanation mentions the word, try to extract meaning
      if (q.explanation) {
        const regex = new RegExp(`${trimmed}\\s*(?:意為|為|表示)?\\s*[「"“]([^"”」]+)[」"”]`);
        const m = q.explanation.match(regex);
        if (m) {
          modifiedOptions++;
          return `${trimmed}（${m[1]}）`;
        }
      }
      return trimmed;
    });
  }
});

console.log(`Enriched ${modifiedStems} question stems and ${modifiedOptions} option items in english-quiz.js!`);

fs.writeFileSync(quizPath, `const englishQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated english-quiz.js!');
