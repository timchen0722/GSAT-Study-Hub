const englishQuiz = [
  {
    "id": "e1",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"請選出「reluctant（不情願的、勉強的）」的正確中文意思：\">Choose the correct meaning of \"reluctant\":<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "不情願的 (unwilling)",
      "熱情的 (enthusiastic)",
      "可靠的 (reliable)",
      "寬容的 (tolerant)"
    ],
    "answer": 0,
    "explanation": "reluctant 意為不情願的、勉強的。He was reluctant to leave.",
    "difficulty": "基礎"
  },
  {
    "id": "e2",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"請選出「放棄」最接近的正確中文詞義：\">\"Abandon\"<span class=\"speak-icon\">🔊</span></span> 最接近的意思是？",
    "options": [
      "放棄 (give up)",
      "擁抱 (embrace)",
      "獲得 (obtain)",
      "遵守 (obey)"
    ],
    "answer": 0,
    "explanation": "abandon = 放棄、拋棄。The project was abandoned due to lack of funds.",
    "difficulty": "基礎"
  },
  {
    "id": "e3",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"請選出「inevitable（不可避免的）」的正確中文詞義：\">The word \"inevitable\" means:<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "不可避免的",
      "不常見的",
      "不可能的",
      "不合法的"
    ],
    "answer": 0,
    "explanation": "inevitable = 不可避免的。in-(不) + evitable(可避免的)。Death is inevitable.",
    "difficulty": "中等"
  },
  {
    "id": "e4",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"請選出「全面的」最接近的正確中文詞義：\">\"Comprehensive\"<span class=\"speak-icon\">🔊</span></span> 的意思是？",
    "options": [
      "全面的 (thorough)",
      "理解的 (understanding)",
      "壓縮的 (compressed)",
      "比較的 (comparative)"
    ],
    "answer": 0,
    "explanation": "comprehensive = 全面的、綜合的。A comprehensive review of the topic.",
    "difficulty": "中等"
  },
  {
    "id": "e5",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"請選出「misunderstand」中字首「mis-」所代表的中文含義（錯誤地）：\">The prefix \"mis-\" in \"misunderstand\" means:<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "錯誤地 (wrongly)",
      "重新 (again)",
      "不 (not)",
      "過度 (over)"
    ],
    "answer": 0,
    "explanation": "mis- 表示「錯誤」。misunderstand = 誤解，mislead = 誤導。",
    "difficulty": "基礎"
  },
  {
    "id": "e6",
    "category": "文法",
    "question": "<span class=\"en-assist\" data-tw=\"自從她五歲起她就在學英文。\">She _____ English since she was five.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "has been learning（一直學習（現在完成進行式））",
      "is learning（正在學習）",
      "learns（學習（簡單現在式））",
      "learned（學過（過去式））"
    ],
    "answer": 0,
    "explanation": "since + 過去時間，主句用現在完成式(has been learning)或現在完成進行式。",
    "difficulty": "基礎"
  },
  {
    "id": "e7",
    "category": "文法",
    "question": "<span class=\"en-assist\" data-tw=\"如果我是你，我會更認真讀書。\">If I _____ you, I would study harder.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "were（是（假設語氣與現在相反））",
      "am（是（現在式））",
      "was（是（過去式））",
      "be（是（原形））"
    ],
    "answer": 0,
    "explanation": "與現在事實相反的假設語氣：If + S + were/V-ed, S + would + V。不論主詞，一律用 were。",
    "difficulty": "基礎"
  },
  {
    "id": "e8",
    "category": "文法",
    "question": "<span class=\"en-assist\" data-tw=\"這本書被全世界數百萬人閱讀過。\">The book _____ by millions of people worldwide.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "has been read（已經被閱讀（現在完成被動））",
      "has read（已經閱讀（現在完成主動））",
      "is reading（正在閱讀）",
      "reads（閱讀）"
    ],
    "answer": 0,
    "explanation": "被動語態：The book is the receiver of the action, so use passive voice: has been read.",
    "difficulty": "中等"
  },
  {
    "id": "e9",
    "category": "文法",
    "question": "<span class=\"en-assist\" data-tw=\"她完成功課後，就出去玩了。\">_____ she finished her homework, she went out to play.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "After（在……之後（時間副詞子句））",
      "Although（雖然儘管（讓步副詞子句））",
      "Because（因為（原因副詞子句））",
      "Unless（除非（條件副詞子句））"
    ],
    "answer": 0,
    "explanation": "After (之後)：時間副詞子句。完成功課之後，她出去玩。",
    "difficulty": "基礎"
  },
  {
    "id": "e10",
    "category": "文法",
    "question": "<span class=\"en-assist\" data-tw=\"他是我遇過最高的學生。\">He is the tallest student _____ I have ever met.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "that（關係代名詞（最高級先行詞））",
      "which（哪一個/關係代名詞（修飾物））",
      "who（誰/關係代名詞（修飾人））",
      "whom（誰（受格關係代名詞））"
    ],
    "answer": 0,
    "explanation": "先行詞有最高級修飾時，關係代名詞用 that。",
    "difficulty": "中等"
  },
  {
    "id": "e11",
    "category": "克漏字",
    "question": "<span class=\"en-assist\" data-tw=\"閱讀是擴充詞彙量的好方法。\">Reading is a good way to _____ your vocabulary.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "expand（擴大 / 膨脹擴充）",
      "extend（延伸 / 擴展提供）",
      "expose（暴露 / 揭露）",
      "explore（探索 / 探討探究）"
    ],
    "answer": 0,
    "explanation": "expand vocabulary = 擴充詞彙量，是固定搭配。",
    "difficulty": "中等"
  },
  {
    "id": "e12",
    "category": "克漏字",
    "question": "<span class=\"en-assist\" data-tw=\"他對這個專案的成功做出了巨大貢獻。\">He made a great _____ to the success of the project.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "contribution（貢獻（make a contribution to））",
      "distribution（分發 / 分配）",
      "construction（建設 / 建造）",
      "destruction（破壞 / 毀滅）"
    ],
    "answer": 0,
    "explanation": "make a contribution to = 對...做出貢獻。",
    "difficulty": "中等"
  },
  {
    "id": "e13",
    "category": "閱讀測驗",
    "question": "<span class=\"en-assist\" data-tw=\"作者的態度通常透過形容詞和副詞的選用來表達\" data-en=\"閱讀測驗中，推斷作者態度最好的方法是？\">閱讀測驗中，推斷作者態度最好的方法是？<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "注意形容詞和副詞的選用",
      "看文章長度",
      "數句子數量",
      "看標題"
    ],
    "answer": 0,
    "explanation": "作者的態度通常透過形容詞和副詞的選用來表達。positive, negative, neutral, critical 等。",
    "difficulty": "中等"
  },
  {
    "id": "e14",
    "category": "閱讀測驗",
    "question": "<span class=\"en-assist\" data-tw=\"在英文閱讀理解中，出現「however」這個轉折詞時通常表示：語氣轉折或對比。\" data-en=\"英文閱讀中，&quot;however&quot; 出現時通常表示？\">英文閱讀中，\"however\" 出現時通常表示？<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "接下來的內容與前文相反 (contrast)",
      "補充說明",
      "時間順序",
      "因果關係"
    ],
    "answer": 0,
    "explanation": "however = 然而，表示轉折。however 後面的內容通常才是作者想強調的重點。",
    "difficulty": "基礎"
  },
  {
    "id": "e15",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"先分析空格需要什麼詞性（名詞/動詞/形容詞/副詞），再從選項中篩選符合的\" data-en=\"選填題最有效的策略是？\">選填題最有效的策略是？<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "先判斷詞性再看語意",
      "隨機選擇",
      "只看第一個字",
      "按順序填入"
    ],
    "answer": 0,
    "explanation": "先分析空格需要什麼詞性（名詞/動詞/形容詞/副詞），再從選項中篩選符合的。",
    "difficulty": "基礎"
  },
  {
    "id": "e16",
    "category": "翻譯寫作",
    "question": "「運動對健康有益」最佳翻譯？",
    "explanation": "be beneficial to = 對...有益。注意 beneficial 是形容詞，benefit 是名詞/動詞。",
    "difficulty": "中等",
    "type": "writing",
    "reference": "Exercise is beneficial to health."
  },
  {
    "id": "e17",
    "category": "翻譯寫作",
    "question": "「科技已經改變了我們的生活方式」翻譯？",
    "explanation": "「已經改變」用現在完成式 has changed。way of life = 生活方式。",
    "difficulty": "中等",
    "type": "writing",
    "reference": "Technology has changed our way of life."
  },
  {
    "id": "e18",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"請選出「可持續的」最接近的正確中文詞義：\">\"Sustainable\"<span class=\"speak-icon\">🔊</span></span> 的意思是？",
    "options": [
      "可持續的 (able to continue)",
      "可承受的 (bearable)",
      "可維修的 (repairable)",
      "可攜帶的 (portable)"
    ],
    "answer": 0,
    "explanation": "sustainable = 可持續的、永續的。sustainable development = 永續發展。",
    "difficulty": "中等"
  },
  {
    "id": "e19",
    "category": "文法",
    "question": "<span class=\"en-assist\" data-tw=\"老師和學生們都沒有意識到這個問題。\">Neither the teacher nor the students _____ aware of the problem.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "were（是（假設語氣與現在相反））",
      "was（是（過去式））",
      "is（是（第三人稱單數現在式））",
      "has been（已經是 / 一直（現在完成式））"
    ],
    "answer": 0,
    "explanation": "neither...nor 的動詞與最近的主詞(students)一致，students 是複數，用 were。",
    "difficulty": "進階"
  },
  {
    "id": "e20",
    "category": "文法",
    "question": "<span class=\"en-assist\" data-tw=\"直到她開口說話我才發現她是外國人。\">Not until she spoke _____ I realize she was foreign.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "did（確實（倒裝助動詞））",
      "do（助動詞）",
      "was（是（過去式））",
      "had（有 / 過去曾是）"
    ],
    "answer": 0,
    "explanation": "Not until 在句首時，主要子句要倒裝：Not until... did I realize...",
    "difficulty": "進階"
  },
  {
    "id": "e21",
    "category": "文法",
    "question": "<span class=\"en-assist\" data-tw=\"如果他早知道真相，他就不會犯下這種錯了。\">_____ he known the truth, he would not have made such a mistake.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "Had（倘若當時（省略 If 之過去假設倒裝））",
      "If（如果）",
      "Has（有）",
      "Were（倘若（省略 If 之現在假設倒裝））"
    ],
    "answer": 0,
    "explanation": "與過去事實相反的假設，If he had known... 省略 If 後倒裝為 Had he known...",
    "difficulty": "進階"
  },
  {
    "id": "e22",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"新政策將促進國家的經濟成長。\">The new policy will _____ the economic growth of the country.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "facilitate（促進 / 使便利推動）",
      "fabricate（捏造 / 編造製造）",
      "fascinate（使著迷 / 深深吸引）",
      "fluctuate（波動 / 起伏不定）"
    ],
    "answer": 0,
    "explanation": "facilitate = 促進、使便利。fabricate = 捏造。",
    "difficulty": "進階"
  },
  {
    "category": "克漏字",
    "options": [
      "enriches（充實）",
      "damages（損害）",
      "forgets（忘記）",
      "avoids（避免）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "question": "\n<div class=\"reading-article\" style=\"background: var(--bg-secondary); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1rem; line-height: 1.6;\">\n    <span class=\"en-assist\" data-tw=\"短文：許多人喜歡在空閒時間看書。這是一個能 ______ 我們心靈並減輕壓力的好習慣。\" data-en=\"Many people enjoy reading books in their free time. It is a good habit that ______ our minds and reduces stress.\" style=\"display: block;\">\n        Many people enjoy reading books in their free time. It is a good habit that ______ our minds and reduces stress. <span class=\"speak-icon\" style=\"cursor: pointer; float: right; font-size: 1.2rem;\" title=\"朗讀文章\">🔊</span>\n    </span>\n</div>\n<div class=\"question-prompt\" style=\"font-weight: 600; margin-bottom: 1rem;\">\n    <span class=\"en-assist\" data-tw=\"選出空格中最適合的字：\">Choose the best word for the blank:<span class=\"speak-icon\">🔊</span></span>\n</div>",
    "explanation": "💡 <strong>題目與選項翻譯：</strong><br>題目：短文：許多人喜歡在空閒時間看書。這是一個能 ______ 我們心靈並減輕壓力的好習慣。<br>題目：選出空格中最適合的字：<br><br>「enriches」：充實<br>「damages」：損害<br>「forgets」：忘記<br>「avoids」：避免<br><br>💡 <strong>答案解析：</strong><br>enrich 意為「使豐富、充實」。句意：這是一個能充實我們心靈並減輕壓力的好習慣。<br>damage (損害) / forget (忘記) / avoid (避免) 皆不合句意。",
    "id": "e23"
  },
  {
    "category": "閱讀測驗",
    "options": [
      "The overview of the subject（該主題的概述）",
      "The future predictions（對未來的預測）",
      "A specific historical event（一個特定的歷史事件）",
      "Personal opinions of the author（作者的個人觀點）"
    ],
    "answer": 0,
    "difficulty": "進階",
    "question": "\n<div class=\"reading-article\" style=\"background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; line-height: 1.6; border-left: 4px solid var(--color-primary);\">\n    <span class=\"en-assist\" data-tw=\"氣候變遷是我們這個時代最緊迫的問題之一。它指的是溫度和天氣模式的長期轉變。這些轉變可能是自然的，但自1800年代以來，人類活動一直是氣候變遷的主要驅動力，這主要是由於燃燒煤炭、石油和天然氣等化石燃料。燃燒化石燃料會產生溫室氣體排放，這些排放物就像包裹在地球周圍的毯子一樣，困住了太陽的熱量並使溫度升高。導致氣候變遷的溫室氣體排放例子包括二氧化碳和甲烷。 【題目：這篇文章的主題是什麼？】\" data-en=\"Climate change is one of the most pressing issues of our time. It refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels like coal, oil, and gas. Burning fossil fuels generates greenhouse gas emissions that act like a blanket wrapped around the Earth, trapping the sun's heat and raising temperatures. Examples of greenhouse gas emissions that are causing climate change include carbon dioxide and methane.\" style=\"display: block;\">\n        Climate change is one of the most pressing issues of our time. It refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels like coal, oil, and gas. Burning fossil fuels generates greenhouse gas emissions that act like a blanket wrapped around the Earth, trapping the sun's heat and raising temperatures. Examples of greenhouse gas emissions that are causing climate change include carbon dioxide and methane. <span class=\"speak-icon\" style=\"cursor: pointer; float: right; font-size: 1.2rem;\" title=\"朗讀文章\">🔊</span>\n    </span>\n</div>\n<div class=\"question-prompt\" style=\"font-weight: 600; margin-bottom: 1rem;\">\n    <span class=\"en-assist\" data-tw=\"選出正確答案\">What is the main topic of this passage?<span class=\"speak-icon\">🔊</span></span>\n</div>",
    "explanation": "\n💡 <strong>題目與選項翻譯：</strong><br>題目：這篇文章的主題是什麼？<br><br>「The overview of the subject」：該主題的概述<br>「The future predictions」：對未來的預測<br>「A specific historical event」：一個特定的歷史事件<br>「Personal opinions of the author」：作者的個人觀點<br><br>💡 <strong>答案解析：</strong><br>\n文章主要在概述該主題的定義與背景。<br><br>\n💡 <strong>文章完整翻譯：</strong><br>\n氣候變遷是我們這個時代最緊迫的問題之一。它指的是溫度和天氣模式的長期轉變。這些轉變可能是自然的，但自1800年代以來，人類活動一直是氣候變遷的主要驅動力，這主要是由於燃燒煤炭、石油和天然氣等化石燃料。燃燒化石燃料會產生溫室氣體排放，這些排放物就像包裹在地球周圍的毯子一樣，困住了太陽的熱量並使溫度升高。導致氣候變遷的溫室氣體排放例子包括二氧化碳和甲烷。",
    "id": "e24"
  },
  {
    "category": "詞彙",
    "options": [
      "boost（促進、推動）",
      "decline（婉拒 / 下降衰退）",
      "shrink（縮小）",
      "ignore（忽略）"
    ],
    "answer": 0,
    "difficulty": "基礎",
    "question": "<span class=\"en-assist\" data-tw=\"新政策將會___經濟。\">The new policy will ______ the economy.<span class=\"speak-icon\">🔊</span></span>",
    "explanation": "💡 <strong>題目與選項翻譯：</strong><br>題目：新政策將會 ______ 經濟。<br><br>「boost」：促進<br>「decline」：下降<br>「shrink」：縮小<br>「ignore」：忽略<br><br>💡 <strong>答案解析：</strong><br>boost 意為「促進、推動」。句意：新政策將會促進經濟。<br>decline (下降) / shrink (縮小) / ignore (忽略) 皆不合句意。",
    "id": "e25"
  },
  {
    "category": "文法",
    "options": [
      "were（是（假設語氣與現在相反））",
      "was（是（過去式））",
      "am（是（現在式））",
      "be（是（原形））"
    ],
    "answer": 0,
    "difficulty": "中等",
    "question": "<span class=\"en-assist\" data-tw=\"如果我是你，我就會...\">If I ______ you, I would take that job.<span class=\"speak-icon\">🔊</span></span>",
    "explanation": "💡 <strong>題目與選項翻譯：</strong><br>題目：如果我 ______ 你，我就會接受那份工作。<br><br>「were」：是 (假設語氣)<br>「was」：是<br>「am」：是<br>「be」：是 (原形)<br><br>💡 <strong>答案解析：</strong><br>此為「與現在事實相反的假設語氣」，動詞一律使用 were。句意：如果我是你，我就會接受那份工作。",
    "id": "e26"
  },
  {
    "category": "閱讀測驗",
    "options": [
      "It has a significant impact on our world.（它對我們的世界有重大影響）",
      "It is mostly ignored by modern scientists.（它大多被現代科學家忽略）",
      "It only appeared in the last 10 years.（它只在過去10年中出現）",
      "It is harmful to all human beings.（它對所有人類都有害）"
    ],
    "answer": 0,
    "difficulty": "基礎",
    "question": "\n<div class=\"reading-article\" style=\"background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; line-height: 1.6; border-left: 4px solid var(--color-primary);\">\n    <span class=\"en-assist\" data-tw=\"人工智慧（AI）是由機器展示的智慧，相對於包括人類在內的動物所展示的自然智慧。AI 研究被定義為對智慧代理的研究領域，這指的是任何感知其環境並採取行動以最大化實現其目標機會的系統。以前，「人工智慧」一詞曾被用來描述模仿並展示與人類思維相關的人類認知技能（如學習和解決問題）的機器。 【題目：根據文章，下列哪一項是正確的？】\" data-en=\"Artificial Intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by animals including humans. AI research has been defined as the field of study of intelligent agents, which refers to any system that perceives its environment and takes actions that maximize its chance of achieving its goals. The term 'artificial intelligence' had previously been used to describe machines that mimic and display human cognitive skills that are associated with the human mind, such as learning and problem-solving.\" style=\"display: block;\">\n        Artificial Intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by animals including humans. AI research has been defined as the field of study of intelligent agents, which refers to any system that perceives its environment and takes actions that maximize its chance of achieving its goals. The term 'artificial intelligence' had previously been used to describe machines that mimic and display human cognitive skills that are associated with the human mind, such as learning and problem-solving. <span class=\"speak-icon\" style=\"cursor: pointer; float: right; font-size: 1.2rem;\" title=\"朗讀文章\">🔊</span>\n    </span>\n</div>\n<div class=\"question-prompt\" style=\"font-weight: 600; margin-bottom: 1rem;\">\n    <span class=\"en-assist\" data-tw=\"選出正確答案\">According to the passage, which of the following is true?<span class=\"speak-icon\">🔊</span></span>\n</div>",
    "explanation": "\n💡 <strong>題目與選項翻譯：</strong><br>題目：根據文章，下列哪一項是正確的？<br><br>「It has a significant impact on our world.」：它對我們的世界有重大影響。<br>「It is mostly ignored by modern scientists.」：它大多被現代科學家忽略。<br>「It only appeared in the last 10 years.」：它只在過去10年中出現。<br>「It is harmful to all human beings.」：它對所有人類都有害。<br><br>💡 <strong>答案解析：</strong><br>\n文章中清楚提到該主題對世界有重要影響。<br><br>\n💡 <strong>文章完整翻譯：</strong><br>\n人工智慧（AI）是由機器展示的智慧，相對於包括人類在內的動物所展示的自然智慧。AI 研究被定義為對智慧代理的研究領域，這指的是任何感知其環境並採取行動以最大化實現其目標機會的系統。以前，「人工智慧」一詞曾被用來描述模仿並展示與人類思維相關的人類認知技能（如學習和解決問題）的機器。",
    "id": "e27"
  },
  {
    "category": "閱讀測驗",
    "options": [
      "The subject is complex and multifaceted.（該主題是複雜且多面向的）",
      "Nobody understands this topic.（沒有人了解這個話題）",
      "It is a completely natural phenomenon.（這是一個完全自然的現象）",
      "It is a fictional concept.（這是一個虛構的概念）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "question": "\n<div class=\"reading-article\" style=\"background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; line-height: 1.6; border-left: 4px solid var(--color-primary);\">\n    <span class=\"en-assist\" data-tw=\"咖啡是一種用烘焙過的咖啡豆（某些咖啡樹品種的漿果種子）沖泡的飲料。當咖啡漿果從綠色變成鮮紅色（表示成熟）時，它們就會被採摘、加工和乾燥。乾燥的咖啡種子會根據所需的風味被烘焙到不同程度。烘焙過的咖啡豆被研磨，然後用接近沸騰的水沖泡，製成被稱為咖啡的飲料。 【題目：從文本中可以推論出什麼？】\" data-en=\"Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. When coffee berries turn from green to bright red in color – indicating ripeness – they are picked, processed, and dried. Dried coffee seeds are roasted to varying degrees, depending on the desired flavor. Roasted beans are ground and then brewed with near-boiling water to produce the beverage known as coffee.\" style=\"display: block;\">\n        Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. When coffee berries turn from green to bright red in color – indicating ripeness – they are picked, processed, and dried. Dried coffee seeds are roasted to varying degrees, depending on the desired flavor. Roasted beans are ground and then brewed with near-boiling water to produce the beverage known as coffee. <span class=\"speak-icon\" style=\"cursor: pointer; float: right; font-size: 1.2rem;\" title=\"朗讀文章\">🔊</span>\n    </span>\n</div>\n<div class=\"question-prompt\" style=\"font-weight: 600; margin-bottom: 1rem;\">\n    <span class=\"en-assist\" data-tw=\"選出正確答案\">What can be inferred from the text?<span class=\"speak-icon\">🔊</span></span>\n</div>",
    "explanation": "\n💡 <strong>題目與選項翻譯：</strong><br>題目：從文本中可以推論出什麼？<br><br>「The subject is complex and multifaceted.」：該主題是複雜且多面向的。<br>「Nobody understands this topic.」：沒有人了解這個話題。<br>「It is a completely natural phenomenon.」：這是一個完全自然的現象。<br>「It is a fictional concept.」：這是一個虛構的概念。<br><br>💡 <strong>答案解析：</strong><br>\n從文中詳細的描述可以推論，這是一個複雜且多面向的主題。<br><br>\n💡 <strong>文章完整翻譯：</strong><br>\n咖啡是一種用烘焙過的咖啡豆（某些咖啡樹品種的漿果種子）沖泡的飲料。當咖啡漿果從綠色變成鮮紅色（表示成熟）時，它們就會被採摘、加工和乾燥。乾燥的咖啡種子會根據所需的風味被烘焙到不同程度。烘焙過的咖啡豆被研磨，然後用接近沸騰的水沖泡，製成被稱為咖啡的飲料。",
    "id": "e28"
  },
  {
    "category": "閱讀測驗",
    "options": [
      "Informative（提供資訊的）",
      "Humorous（幽默的）",
      "Angry（憤怒的）",
      "Sarcastic（諷刺的）"
    ],
    "answer": 0,
    "difficulty": "進階",
    "question": "\n<div class=\"reading-article\" style=\"background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; line-height: 1.6; border-left: 4px solid var(--color-primary);\">\n    <span class=\"en-assist\" data-tw=\"太空探索是利用天文學和太空科技來探索外太空。雖然太空探索主要由天文學家使用望遠鏡進行，但其物理探索則由無人機器人太空探測器和載人太空飛行共同進行。太空探索與其經典形式的天文學一樣，是太空科學的主要來源之一。 【題目：哪個詞最能描述這篇文章的語氣？】\" data-en=\"Space exploration is the use of astronomy and space technology to explore outer space. While the exploration of space is carried out mainly by astronomers with telescopes, its physical exploration though is conducted both by unmanned robotic space probes and human spaceflight. Space exploration, like its classical form astronomy, is one of the main sources for space science.\" style=\"display: block;\">\n        Space exploration is the use of astronomy and space technology to explore outer space. While the exploration of space is carried out mainly by astronomers with telescopes, its physical exploration though is conducted both by unmanned robotic space probes and human spaceflight. Space exploration, like its classical form astronomy, is one of the main sources for space science. <span class=\"speak-icon\" style=\"cursor: pointer; float: right; font-size: 1.2rem;\" title=\"朗讀文章\">🔊</span>\n    </span>\n</div>\n<div class=\"question-prompt\" style=\"font-weight: 600; margin-bottom: 1rem;\">\n    <span class=\"en-assist\" data-tw=\"選出正確答案\">Which word best describes the tone of the passage?<span class=\"speak-icon\">🔊</span></span>\n</div>",
    "explanation": "\n💡 <strong>題目與選項翻譯：</strong><br>題目：哪個詞最能描述這篇文章的語氣？<br><br>「Informative」：提供資訊的<br>「Humorous」：幽默的<br>「Angry」：憤怒的<br>「Sarcastic」：諷刺的<br><br>💡 <strong>答案解析：</strong><br>\n這是一篇客觀提供資訊的文章，因此語氣是 Informative (提供資訊的、增廣見聞的)。<br><br>\n💡 <strong>文章完整翻譯：</strong><br>\n太空探索是利用天文學和太空科技來探索外太空。雖然太空探索主要由天文學家使用望遠鏡進行，但其物理探索則由無人機器人太空探測器和載人太空飛行共同進行。太空探索與其經典形式的天文學一樣，是太空科學的主要來源之一。",
    "id": "e29"
  },
  {
    "category": "閱讀測驗",
    "options": [
      "The overview of the subject（該主題的概述）",
      "The future predictions（對未來的預測）",
      "A specific historical event（一個特定的歷史事件）",
      "Personal opinions of the author（作者的個人觀點）"
    ],
    "answer": 0,
    "difficulty": "基礎",
    "question": "\n<div class=\"reading-article\" style=\"background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; line-height: 1.6; border-left: 4px solid var(--color-primary);\">\n    <span class=\"en-assist\" data-tw=\"網際網路的歷史起源於建立和互連電腦網路的努力，這些努力源於美國的研究與開發，並涉及國際合作，特別是與英國和法國的研究人員。網際網路的基礎是由美國國防部資助的 ARPANET 奠定的。 【題目：這篇文章的主題是什麼？】\" data-en=\"The history of the Internet has its origin in the efforts to build and interconnect computer networks that arose from research and development in the United States and involved international collaboration, particularly with researchers in the United Kingdom and France. The Internet's foundation was laid by ARPANET, funded by the US Department of Defense.\" style=\"display: block;\">\n        The history of the Internet has its origin in the efforts to build and interconnect computer networks that arose from research and development in the United States and involved international collaboration, particularly with researchers in the United Kingdom and France. The Internet's foundation was laid by ARPANET, funded by the US Department of Defense. <span class=\"speak-icon\" style=\"cursor: pointer; float: right; font-size: 1.2rem;\" title=\"朗讀文章\">🔊</span>\n    </span>\n</div>\n<div class=\"question-prompt\" style=\"font-weight: 600; margin-bottom: 1rem;\">\n    <span class=\"en-assist\" data-tw=\"選出正確答案\">What is the main topic of this passage?<span class=\"speak-icon\">🔊</span></span>\n</div>",
    "explanation": "\n💡 <strong>題目與選項翻譯：</strong><br>題目：這篇文章的主題是什麼？<br><br>「The overview of the subject」：該主題的概述<br>「The future predictions」：對未來的預測<br>「A specific historical event」：一個特定的歷史事件<br>「Personal opinions of the author」：作者的個人觀點<br><br>💡 <strong>答案解析：</strong><br>\n文章主要在概述該主題的定義與背景。<br><br>\n💡 <strong>文章完整翻譯：</strong><br>\n網際網路的歷史起源於建立和互連電腦網路的努力，這些努力源於美國的研究與開發，並涉及國際合作，特別是與英國和法國的研究人員。網際網路的基礎是由美國國防部資助的 ARPANET 奠定的。",
    "id": "e30"
  },
  {
    "category": "閱讀測驗",
    "options": [
      "It has a significant impact on our world.（它對我們的世界有重大影響）",
      "It is mostly ignored by modern scientists.（它大多被現代科學家忽略）",
      "It only appeared in the last 10 years.（它只在過去10年中出現）",
      "It is harmful to all human beings.（它對所有人類都有害）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "question": "\n<div class=\"reading-article\" style=\"background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; line-height: 1.6; border-left: 4px solid var(--color-primary);\">\n    <span class=\"en-assist\" data-tw=\"氣候變遷是我們這個時代最緊迫的問題之一。它指的是溫度和天氣模式的長期轉變。這些轉變可能是自然的，但自1800年代以來，人類活動一直是氣候變遷的主要驅動力，這主要是由於燃燒煤炭、石油和天然氣等化石燃料。燃燒化石燃料會產生溫室氣體排放，這些排放物就像包裹在地球周圍的毯子一樣，困住了太陽的熱量並使溫度升高。導致氣候變遷的溫室氣體排放例子包括二氧化碳和甲烷。 【題目：根據文章，下列哪一項是正確的？】\" data-en=\"Climate change is one of the most pressing issues of our time. It refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels like coal, oil, and gas. Burning fossil fuels generates greenhouse gas emissions that act like a blanket wrapped around the Earth, trapping the sun's heat and raising temperatures. Examples of greenhouse gas emissions that are causing climate change include carbon dioxide and methane.\" style=\"display: block;\">\n        Climate change is one of the most pressing issues of our time. It refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels like coal, oil, and gas. Burning fossil fuels generates greenhouse gas emissions that act like a blanket wrapped around the Earth, trapping the sun's heat and raising temperatures. Examples of greenhouse gas emissions that are causing climate change include carbon dioxide and methane. <span class=\"speak-icon\" style=\"cursor: pointer; float: right; font-size: 1.2rem;\" title=\"朗讀文章\">🔊</span>\n    </span>\n</div>\n<div class=\"question-prompt\" style=\"font-weight: 600; margin-bottom: 1rem;\">\n    <span class=\"en-assist\" data-tw=\"選出正確答案\">According to the passage, which of the following is true?<span class=\"speak-icon\">🔊</span></span>\n</div>",
    "explanation": "\n💡 <strong>題目與選項翻譯：</strong><br>題目：根據文章，下列哪一項是正確的？<br><br>「It has a significant impact on our world.」：它對我們的世界有重大影響。<br>「It is mostly ignored by modern scientists.」：它大多被現代科學家忽略。<br>「It only appeared in the last 10 years.」：它只在過去10年中出現。<br>「It is harmful to all human beings.」：它對所有人類都有害。<br><br>💡 <strong>答案解析：</strong><br>\n文章中清楚提到該主題對世界有重要影響。<br><br>\n💡 <strong>文章完整翻譯：</strong><br>\n氣候變遷是我們這個時代最緊迫的問題之一。它指的是溫度和天氣模式的長期轉變。這些轉變可能是自然的，但自1800年代以來，人類活動一直是氣候變遷的主要驅動力，這主要是由於燃燒煤炭、石油和天然氣等化石燃料。燃燒化石燃料會產生溫室氣體排放，這些排放物就像包裹在地球周圍的毯子一樣，困住了太陽的熱量並使溫度升高。導致氣候變遷的溫室氣體排放例子包括二氧化碳和甲烷。",
    "id": "e31"
  },
  {
    "category": "閱讀測驗",
    "options": [
      "The subject is complex and multifaceted.（該主題是複雜且多面向的）",
      "Nobody understands this topic.（沒有人了解這個話題）",
      "It is a completely natural phenomenon.（這是一個完全自然的現象）",
      "It is a fictional concept.（這是一個虛構的概念）"
    ],
    "answer": 0,
    "difficulty": "進階",
    "question": "\n<div class=\"reading-article\" style=\"background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; line-height: 1.6; border-left: 4px solid var(--color-primary);\">\n    <span class=\"en-assist\" data-tw=\"人工智慧（AI）是由機器展示的智慧，相對於包括人類在內的動物所展示的自然智慧。AI 研究被定義為對智慧代理的研究領域，這指的是任何感知其環境並採取行動以最大化實現其目標機會的系統。以前，「人工智慧」一詞曾被用來描述模仿並展示與人類思維相關的人類認知技能（如學習和解決問題）的機器。 【題目：從文本中可以推論出什麼？】\" data-en=\"Artificial Intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by animals including humans. AI research has been defined as the field of study of intelligent agents, which refers to any system that perceives its environment and takes actions that maximize its chance of achieving its goals. The term 'artificial intelligence' had previously been used to describe machines that mimic and display human cognitive skills that are associated with the human mind, such as learning and problem-solving.\" style=\"display: block;\">\n        Artificial Intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by animals including humans. AI research has been defined as the field of study of intelligent agents, which refers to any system that perceives its environment and takes actions that maximize its chance of achieving its goals. The term 'artificial intelligence' had previously been used to describe machines that mimic and display human cognitive skills that are associated with the human mind, such as learning and problem-solving. <span class=\"speak-icon\" style=\"cursor: pointer; float: right; font-size: 1.2rem;\" title=\"朗讀文章\">🔊</span>\n    </span>\n</div>\n<div class=\"question-prompt\" style=\"font-weight: 600; margin-bottom: 1rem;\">\n    <span class=\"en-assist\" data-tw=\"選出正確答案\">What can be inferred from the text?<span class=\"speak-icon\">🔊</span></span>\n</div>",
    "explanation": "\n💡 <strong>題目與選項翻譯：</strong><br>題目：從文本中可以推論出什麼？<br><br>「The subject is complex and multifaceted.」：該主題是複雜且多面向的。<br>「Nobody understands this topic.」：沒有人了解這個話題。<br>「It is a completely natural phenomenon.」：這是一個完全自然的現象。<br>「It is a fictional concept.」：這是一個虛構的概念。<br><br>💡 <strong>答案解析：</strong><br>\n從文中詳細的描述可以推論，這是一個複雜且多面向的主題。<br><br>\n💡 <strong>文章完整翻譯：</strong><br>\n人工智慧（AI）是由機器展示的智慧，相對於包括人類在內的動物所展示的自然智慧。AI 研究被定義為對智慧代理的研究領域，這指的是任何感知其環境並採取行動以最大化實現其目標機會的系統。以前，「人工智慧」一詞曾被用來描述模仿並展示與人類思維相關的人類認知技能（如學習和解決問題）的機器。",
    "id": "e32"
  },
  {
    "category": "閱讀測驗",
    "options": [
      "Informative（提供資訊的）",
      "Humorous（幽默的）",
      "Angry（憤怒的）",
      "Sarcastic（諷刺的）"
    ],
    "answer": 0,
    "difficulty": "基礎",
    "question": "\n<div class=\"reading-article\" style=\"background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; line-height: 1.6; border-left: 4px solid var(--color-primary);\">\n    <span class=\"en-assist\" data-tw=\"咖啡是一種用烘焙過的咖啡豆（某些咖啡樹品種的漿果種子）沖泡的飲料。當咖啡漿果從綠色變成鮮紅色（表示成熟）時，它們就會被採摘、加工和乾燥。乾燥的咖啡種子會根據所需的風味被烘焙到不同程度。烘焙過的咖啡豆被研磨，然後用接近沸騰的水沖泡，製成被稱為咖啡的飲料。 【題目：哪個詞最能描述這篇文章的語氣？】\" data-en=\"Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. When coffee berries turn from green to bright red in color – indicating ripeness – they are picked, processed, and dried. Dried coffee seeds are roasted to varying degrees, depending on the desired flavor. Roasted beans are ground and then brewed with near-boiling water to produce the beverage known as coffee.\" style=\"display: block;\">\n        Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. When coffee berries turn from green to bright red in color – indicating ripeness – they are picked, processed, and dried. Dried coffee seeds are roasted to varying degrees, depending on the desired flavor. Roasted beans are ground and then brewed with near-boiling water to produce the beverage known as coffee. <span class=\"speak-icon\" style=\"cursor: pointer; float: right; font-size: 1.2rem;\" title=\"朗讀文章\">🔊</span>\n    </span>\n</div>\n<div class=\"question-prompt\" style=\"font-weight: 600; margin-bottom: 1rem;\">\n    <span class=\"en-assist\" data-tw=\"選出正確答案\">Which word best describes the tone of the passage?<span class=\"speak-icon\">🔊</span></span>\n</div>",
    "explanation": "\n💡 <strong>題目與選項翻譯：</strong><br>題目：哪個詞最能描述這篇文章的語氣？<br><br>「Informative」：提供資訊的<br>「Humorous」：幽默的<br>「Angry」：憤怒的<br>「Sarcastic」：諷刺的<br><br>💡 <strong>答案解析：</strong><br>\n這是一篇客觀提供資訊的文章，因此語氣是 Informative (提供資訊的、增廣見聞的)。<br><br>\n💡 <strong>文章完整翻譯：</strong><br>\n咖啡是一種用烘焙過的咖啡豆（某些咖啡樹品種的漿果種子）沖泡的飲料。當咖啡漿果從綠色變成鮮紅色（表示成熟）時，它們就會被採摘、加工和乾燥。乾燥的咖啡種子會根據所需的風味被烘焙到不同程度。烘焙過的咖啡豆被研磨，然後用接近沸騰的水沖泡，製成被稱為咖啡的飲料。",
    "id": "e33"
  },
  {
    "category": "閱讀測驗",
    "options": [
      "The overview of the subject（該主題的概述）",
      "The future predictions（對未來的預測）",
      "A specific historical event（一個特定的歷史事件）",
      "Personal opinions of the author（作者的個人觀點）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "question": "\n<div class=\"reading-article\" style=\"background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; line-height: 1.6; border-left: 4px solid var(--color-primary);\">\n    <span class=\"en-assist\" data-tw=\"太空探索是利用天文學和太空科技來探索外太空。雖然太空探索主要由天文學家使用望遠鏡進行，但其物理探索則由無人機器人太空探測器和載人太空飛行共同進行。太空探索與其經典形式的天文學一樣，是太空科學的主要來源之一。 【題目：這篇文章的主題是什麼？】\" data-en=\"Space exploration is the use of astronomy and space technology to explore outer space. While the exploration of space is carried out mainly by astronomers with telescopes, its physical exploration though is conducted both by unmanned robotic space probes and human spaceflight. Space exploration, like its classical form astronomy, is one of the main sources for space science.\" style=\"display: block;\">\n        Space exploration is the use of astronomy and space technology to explore outer space. While the exploration of space is carried out mainly by astronomers with telescopes, its physical exploration though is conducted both by unmanned robotic space probes and human spaceflight. Space exploration, like its classical form astronomy, is one of the main sources for space science. <span class=\"speak-icon\" style=\"cursor: pointer; float: right; font-size: 1.2rem;\" title=\"朗讀文章\">🔊</span>\n    </span>\n</div>\n<div class=\"question-prompt\" style=\"font-weight: 600; margin-bottom: 1rem;\">\n    <span class=\"en-assist\" data-tw=\"選出正確答案\">What is the main topic of this passage?<span class=\"speak-icon\">🔊</span></span>\n</div>",
    "explanation": "\n💡 <strong>題目與選項翻譯：</strong><br>題目：這篇文章的主題是什麼？<br><br>「The overview of the subject」：該主題的概述<br>「The future predictions」：對未來的預測<br>「A specific historical event」：一個特定的歷史事件<br>「Personal opinions of the author」：作者的個人觀點<br><br>💡 <strong>答案解析：</strong><br>\n文章主要在概述該主題的定義與背景。<br><br>\n💡 <strong>文章完整翻譯：</strong><br>\n太空探索是利用天文學和太空科技來探索外太空。雖然太空探索主要由天文學家使用望遠鏡進行，但其物理探索則由無人機器人太空探測器和載人太空飛行共同進行。太空探索與其經典形式的天文學一樣，是太空科學的主要來源之一。",
    "id": "e34"
  },
  {
    "category": "閱讀測驗",
    "options": [
      "It has a significant impact on our world.（它對我們的世界有重大影響）",
      "It is mostly ignored by modern scientists.（它大多被現代科學家忽略）",
      "It only appeared in the last 10 years.（它只在過去10年中出現）",
      "It is harmful to all human beings.（它對所有人類都有害）"
    ],
    "answer": 0,
    "difficulty": "進階",
    "question": "\n<div class=\"reading-article\" style=\"background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; line-height: 1.6; border-left: 4px solid var(--color-primary);\">\n    <span class=\"en-assist\" data-tw=\"網際網路的歷史起源於建立和互連電腦網路的努力，這些努力源於美國的研究與開發，並涉及國際合作，特別是與英國和法國的研究人員。網際網路的基礎是由美國國防部資助的 ARPANET 奠定的。 【題目：根據文章，下列哪一項是正確的？】\" data-en=\"The history of the Internet has its origin in the efforts to build and interconnect computer networks that arose from research and development in the United States and involved international collaboration, particularly with researchers in the United Kingdom and France. The Internet's foundation was laid by ARPANET, funded by the US Department of Defense.\" style=\"display: block;\">\n        The history of the Internet has its origin in the efforts to build and interconnect computer networks that arose from research and development in the United States and involved international collaboration, particularly with researchers in the United Kingdom and France. The Internet's foundation was laid by ARPANET, funded by the US Department of Defense. <span class=\"speak-icon\" style=\"cursor: pointer; float: right; font-size: 1.2rem;\" title=\"朗讀文章\">🔊</span>\n    </span>\n</div>\n<div class=\"question-prompt\" style=\"font-weight: 600; margin-bottom: 1rem;\">\n    <span class=\"en-assist\" data-tw=\"選出正確答案\">According to the passage, which of the following is true?<span class=\"speak-icon\">🔊</span></span>\n</div>",
    "explanation": "\n💡 <strong>題目與選項翻譯：</strong><br>題目：根據文章，下列哪一項是正確的？<br><br>「It has a significant impact on our world.」：它對我們的世界有重大影響。<br>「It is mostly ignored by modern scientists.」：它大多被現代科學家忽略。<br>「It only appeared in the last 10 years.」：它只在過去10年中出現。<br>「It is harmful to all human beings.」：它對所有人類都有害。<br><br>💡 <strong>答案解析：</strong><br>\n文章中清楚提到該主題對世界有重要影響。<br><br>\n💡 <strong>文章完整翻譯：</strong><br>\n網際網路的歷史起源於建立和互連電腦網路的努力，這些努力源於美國的研究與開發，並涉及國際合作，特別是與英國和法國的研究人員。網際網路的基礎是由美國國防部資助的 ARPANET 奠定的。",
    "id": "e35"
  },
  {
    "category": "閱讀測驗",
    "options": [
      "The subject is complex and multifaceted.（該主題是複雜且多面向的）",
      "Nobody understands this topic.（沒有人了解這個話題）",
      "It is a completely natural phenomenon.（這是一個完全自然的現象）",
      "It is a fictional concept.（這是一個虛構的概念）"
    ],
    "answer": 0,
    "difficulty": "基礎",
    "question": "\n<div class=\"reading-article\" style=\"background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; line-height: 1.6; border-left: 4px solid var(--color-primary);\">\n    <span class=\"en-assist\" data-tw=\"氣候變遷是我們這個時代最緊迫的問題之一。它指的是溫度和天氣模式的長期轉變。這些轉變可能是自然的，但自1800年代以來，人類活動一直是氣候變遷的主要驅動力，這主要是由於燃燒煤炭、石油和天然氣等化石燃料。燃燒化石燃料會產生溫室氣體排放，這些排放物就像包裹在地球周圍的毯子一樣，困住了太陽的熱量並使溫度升高。導致氣候變遷的溫室氣體排放例子包括二氧化碳和甲烷。 【題目：從文本中可以推論出什麼？】\" data-en=\"Climate change is one of the most pressing issues of our time. It refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels like coal, oil, and gas. Burning fossil fuels generates greenhouse gas emissions that act like a blanket wrapped around the Earth, trapping the sun's heat and raising temperatures. Examples of greenhouse gas emissions that are causing climate change include carbon dioxide and methane.\" style=\"display: block;\">\n        Climate change is one of the most pressing issues of our time. It refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels like coal, oil, and gas. Burning fossil fuels generates greenhouse gas emissions that act like a blanket wrapped around the Earth, trapping the sun's heat and raising temperatures. Examples of greenhouse gas emissions that are causing climate change include carbon dioxide and methane. <span class=\"speak-icon\" style=\"cursor: pointer; float: right; font-size: 1.2rem;\" title=\"朗讀文章\">🔊</span>\n    </span>\n</div>\n<div class=\"question-prompt\" style=\"font-weight: 600; margin-bottom: 1rem;\">\n    <span class=\"en-assist\" data-tw=\"選出正確答案\">What can be inferred from the text?<span class=\"speak-icon\">🔊</span></span>\n</div>",
    "explanation": "\n💡 <strong>題目與選項翻譯：</strong><br>題目：從文本中可以推論出什麼？<br><br>「The subject is complex and multifaceted.」：該主題是複雜且多面向的。<br>「Nobody understands this topic.」：沒有人了解這個話題。<br>「It is a completely natural phenomenon.」：這是一個完全自然的現象。<br>「It is a fictional concept.」：這是一個虛構的概念。<br><br>💡 <strong>答案解析：</strong><br>\n從文中詳細的描述可以推論，這是一個複雜且多面向的主題。<br><br>\n💡 <strong>文章完整翻譯：</strong><br>\n氣候變遷是我們這個時代最緊迫的問題之一。它指的是溫度和天氣模式的長期轉變。這些轉變可能是自然的，但自1800年代以來，人類活動一直是氣候變遷的主要驅動力，這主要是由於燃燒煤炭、石油和天然氣等化石燃料。燃燒化石燃料會產生溫室氣體排放，這些排放物就像包裹在地球周圍的毯子一樣，困住了太陽的熱量並使溫度升高。導致氣候變遷的溫室氣體排放例子包括二氧化碳和甲烷。",
    "id": "e36"
  },
  {
    "category": "閱讀測驗",
    "options": [
      "Informative（提供資訊的）",
      "Humorous（幽默的）",
      "Angry（憤怒的）",
      "Sarcastic（諷刺的）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "question": "\n<div class=\"reading-article\" style=\"background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; line-height: 1.6; border-left: 4px solid var(--color-primary);\">\n    <span class=\"en-assist\" data-tw=\"人工智慧（AI）是由機器展示的智慧，相對於包括人類在內的動物所展示的自然智慧。AI 研究被定義為對智慧代理的研究領域，這指的是任何感知其環境並採取行動以最大化實現其目標機會的系統。以前，「人工智慧」一詞曾被用來描述模仿並展示與人類思維相關的人類認知技能（如學習和解決問題）的機器。 【題目：哪個詞最能描述這篇文章的語氣？】\" data-en=\"Artificial Intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by animals including humans. AI research has been defined as the field of study of intelligent agents, which refers to any system that perceives its environment and takes actions that maximize its chance of achieving its goals. The term 'artificial intelligence' had previously been used to describe machines that mimic and display human cognitive skills that are associated with the human mind, such as learning and problem-solving.\" style=\"display: block;\">\n        Artificial Intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by animals including humans. AI research has been defined as the field of study of intelligent agents, which refers to any system that perceives its environment and takes actions that maximize its chance of achieving its goals. The term 'artificial intelligence' had previously been used to describe machines that mimic and display human cognitive skills that are associated with the human mind, such as learning and problem-solving. <span class=\"speak-icon\" style=\"cursor: pointer; float: right; font-size: 1.2rem;\" title=\"朗讀文章\">🔊</span>\n    </span>\n</div>\n<div class=\"question-prompt\" style=\"font-weight: 600; margin-bottom: 1rem;\">\n    <span class=\"en-assist\" data-tw=\"選出正確答案\">Which word best describes the tone of the passage?<span class=\"speak-icon\">🔊</span></span>\n</div>",
    "explanation": "\n💡 <strong>題目與選項翻譯：</strong><br>題目：哪個詞最能描述這篇文章的語氣？<br><br>「Informative」：提供資訊的<br>「Humorous」：幽默的<br>「Angry」：憤怒的<br>「Sarcastic」：諷刺的<br><br>💡 <strong>答案解析：</strong><br>\n這是一篇客觀提供資訊的文章，因此語氣是 Informative (提供資訊的、增廣見聞的)。<br><br>\n💡 <strong>文章完整翻譯：</strong><br>\n人工智慧（AI）是由機器展示的智慧，相對於包括人類在內的動物所展示的自然智慧。AI 研究被定義為對智慧代理的研究領域，這指的是任何感知其環境並採取行動以最大化實現其目標機會的系統。以前，「人工智慧」一詞曾被用來描述模仿並展示與人類思維相關的人類認知技能（如學習和解決問題）的機器。",
    "id": "e37"
  },
  {
    "category": "閱讀測驗",
    "options": [
      "The overview of the subject（該主題的概述）",
      "The future predictions（對未來的預測）",
      "A specific historical event（一個特定的歷史事件）",
      "Personal opinions of the author（作者的個人觀點）"
    ],
    "answer": 0,
    "difficulty": "進階",
    "question": "\n<div class=\"reading-article\" style=\"background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; line-height: 1.6; border-left: 4px solid var(--color-primary);\">\n    <span class=\"en-assist\" data-tw=\"咖啡是一種用烘焙過的咖啡豆（某些咖啡樹品種的漿果種子）沖泡的飲料。當咖啡漿果從綠色變成鮮紅色（表示成熟）時，它們就會被採摘、加工和乾燥。乾燥的咖啡種子會根據所需的風味被烘焙到不同程度。烘焙過的咖啡豆被研磨，然後用接近沸騰的水沖泡，製成被稱為咖啡的飲料。 【題目：這篇文章的主題是什麼？】\" data-en=\"Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. When coffee berries turn from green to bright red in color – indicating ripeness – they are picked, processed, and dried. Dried coffee seeds are roasted to varying degrees, depending on the desired flavor. Roasted beans are ground and then brewed with near-boiling water to produce the beverage known as coffee.\" style=\"display: block;\">\n        Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. When coffee berries turn from green to bright red in color – indicating ripeness – they are picked, processed, and dried. Dried coffee seeds are roasted to varying degrees, depending on the desired flavor. Roasted beans are ground and then brewed with near-boiling water to produce the beverage known as coffee. <span class=\"speak-icon\" style=\"cursor: pointer; float: right; font-size: 1.2rem;\" title=\"朗讀文章\">🔊</span>\n    </span>\n</div>\n<div class=\"question-prompt\" style=\"font-weight: 600; margin-bottom: 1rem;\">\n    <span class=\"en-assist\" data-tw=\"選出正確答案\">What is the main topic of this passage?<span class=\"speak-icon\">🔊</span></span>\n</div>",
    "explanation": "\n💡 <strong>題目與選項翻譯：</strong><br>題目：這篇文章的主題是什麼？<br><br>「The overview of the subject」：該主題的概述<br>「The future predictions」：對未來的預測<br>「A specific historical event」：一個特定的歷史事件<br>「Personal opinions of the author」：作者的個人觀點<br><br>💡 <strong>答案解析：</strong><br>\n文章主要在概述該主題的定義與背景。<br><br>\n💡 <strong>文章完整翻譯：</strong><br>\n咖啡是一種用烘焙過的咖啡豆（某些咖啡樹品種的漿果種子）沖泡的飲料。當咖啡漿果從綠色變成鮮紅色（表示成熟）時，它們就會被採摘、加工和乾燥。乾燥的咖啡種子會根據所需的風味被烘焙到不同程度。烘焙過的咖啡豆被研磨，然後用接近沸騰的水沖泡，製成被稱為咖啡的飲料。",
    "id": "e38"
  },
  {
    "category": "閱讀測驗",
    "options": [
      "It has a significant impact on our world.（它對我們的世界有重大影響）",
      "It is mostly ignored by modern scientists.（它大多被現代科學家忽略）",
      "It only appeared in the last 10 years.（它只在過去10年中出現）",
      "It is harmful to all human beings.（它對所有人類都有害）"
    ],
    "answer": 0,
    "difficulty": "基礎",
    "question": "\n<div class=\"reading-article\" style=\"background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; line-height: 1.6; border-left: 4px solid var(--color-primary);\">\n    <span class=\"en-assist\" data-tw=\"太空探索是利用天文學和太空科技來探索外太空。雖然太空探索主要由天文學家使用望遠鏡進行，但其物理探索則由無人機器人太空探測器和載人太空飛行共同進行。太空探索與其經典形式的天文學一樣，是太空科學的主要來源之一。 【題目：根據文章，下列哪一項是正確的？】\" data-en=\"Space exploration is the use of astronomy and space technology to explore outer space. While the exploration of space is carried out mainly by astronomers with telescopes, its physical exploration though is conducted both by unmanned robotic space probes and human spaceflight. Space exploration, like its classical form astronomy, is one of the main sources for space science.\" style=\"display: block;\">\n        Space exploration is the use of astronomy and space technology to explore outer space. While the exploration of space is carried out mainly by astronomers with telescopes, its physical exploration though is conducted both by unmanned robotic space probes and human spaceflight. Space exploration, like its classical form astronomy, is one of the main sources for space science. <span class=\"speak-icon\" style=\"cursor: pointer; float: right; font-size: 1.2rem;\" title=\"朗讀文章\">🔊</span>\n    </span>\n</div>\n<div class=\"question-prompt\" style=\"font-weight: 600; margin-bottom: 1rem;\">\n    <span class=\"en-assist\" data-tw=\"選出正確答案\">According to the passage, which of the following is true?<span class=\"speak-icon\">🔊</span></span>\n</div>",
    "explanation": "\n💡 <strong>題目與選項翻譯：</strong><br>題目：根據文章，下列哪一項是正確的？<br><br>「It has a significant impact on our world.」：它對我們的世界有重大影響。<br>「It is mostly ignored by modern scientists.」：它大多被現代科學家忽略。<br>「It only appeared in the last 10 years.」：它只在過去10年中出現。<br>「It is harmful to all human beings.」：它對所有人類都有害。<br><br>💡 <strong>答案解析：</strong><br>\n文章中清楚提到該主題對世界有重要影響。<br><br>\n💡 <strong>文章完整翻譯：</strong><br>\n太空探索是利用天文學和太空科技來探索外太空。雖然太空探索主要由天文學家使用望遠鏡進行，但其物理探索則由無人機器人太空探測器和載人太空飛行共同進行。太空探索與其經典形式的天文學一樣，是太空科學的主要來源之一。",
    "id": "e39"
  },
  {
    "category": "閱讀測驗",
    "options": [
      "The subject is complex and multifaceted.（該主題是複雜且多面向的）",
      "Nobody understands this topic.（沒有人了解這個話題）",
      "It is a completely natural phenomenon.（這是一個完全自然的現象）",
      "It is a fictional concept.（這是一個虛構的概念）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "question": "\n<div class=\"reading-article\" style=\"background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; line-height: 1.6; border-left: 4px solid var(--color-primary);\">\n    <span class=\"en-assist\" data-tw=\"網際網路的歷史起源於建立和互連電腦網路的努力，這些努力源於美國的研究與開發，並涉及國際合作，特別是與英國和法國的研究人員。網際網路的基礎是由美國國防部資助的 ARPANET 奠定的。 【題目：從文本中可以推論出什麼？】\" data-en=\"The history of the Internet has its origin in the efforts to build and interconnect computer networks that arose from research and development in the United States and involved international collaboration, particularly with researchers in the United Kingdom and France. The Internet's foundation was laid by ARPANET, funded by the US Department of Defense.\" style=\"display: block;\">\n        The history of the Internet has its origin in the efforts to build and interconnect computer networks that arose from research and development in the United States and involved international collaboration, particularly with researchers in the United Kingdom and France. The Internet's foundation was laid by ARPANET, funded by the US Department of Defense. <span class=\"speak-icon\" style=\"cursor: pointer; float: right; font-size: 1.2rem;\" title=\"朗讀文章\">🔊</span>\n    </span>\n</div>\n<div class=\"question-prompt\" style=\"font-weight: 600; margin-bottom: 1rem;\">\n    <span class=\"en-assist\" data-tw=\"選出正確答案\">What can be inferred from the text?<span class=\"speak-icon\">🔊</span></span>\n</div>",
    "explanation": "\n💡 <strong>題目與選項翻譯：</strong><br>題目：從文本中可以推論出什麼？<br><br>「The subject is complex and multifaceted.」：該主題是複雜且多面向的。<br>「Nobody understands this topic.」：沒有人了解這個話題。<br>「It is a completely natural phenomenon.」：這是一個完全自然的現象。<br>「It is a fictional concept.」：這是一個虛構的概念。<br><br>💡 <strong>答案解析：</strong><br>\n從文中詳細的描述可以推論，這是一個複雜且多面向的主題。<br><br>\n💡 <strong>文章完整翻譯：</strong><br>\n網際網路的歷史起源於建立和互連電腦網路的努力，這些努力源於美國的研究與開發，並涉及國際合作，特別是與英國和法國的研究人員。網際網路的基礎是由美國國防部資助的 ARPANET 奠定的。",
    "id": "e40"
  },
  {
    "category": "閱讀測驗",
    "options": [
      "Informative（提供資訊的）",
      "Humorous（幽默的）",
      "Angry（憤怒的）",
      "Sarcastic（諷刺的）"
    ],
    "answer": 0,
    "difficulty": "進階",
    "question": "\n<div class=\"reading-article\" style=\"background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; line-height: 1.6; border-left: 4px solid var(--color-primary);\">\n    <span class=\"en-assist\" data-tw=\"氣候變遷是我們這個時代最緊迫的問題之一。它指的是溫度和天氣模式的長期轉變。這些轉變可能是自然的，但自1800年代以來，人類活動一直是氣候變遷的主要驅動力，這主要是由於燃燒煤炭、石油和天然氣等化石燃料。燃燒化石燃料會產生溫室氣體排放，這些排放物就像包裹在地球周圍的毯子一樣，困住了太陽的熱量並使溫度升高。導致氣候變遷的溫室氣體排放例子包括二氧化碳和甲烷。 【題目：哪個詞最能描述這篇文章的語氣？】\" data-en=\"Climate change is one of the most pressing issues of our time. It refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels like coal, oil, and gas. Burning fossil fuels generates greenhouse gas emissions that act like a blanket wrapped around the Earth, trapping the sun's heat and raising temperatures. Examples of greenhouse gas emissions that are causing climate change include carbon dioxide and methane.\" style=\"display: block;\">\n        Climate change is one of the most pressing issues of our time. It refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels like coal, oil, and gas. Burning fossil fuels generates greenhouse gas emissions that act like a blanket wrapped around the Earth, trapping the sun's heat and raising temperatures. Examples of greenhouse gas emissions that are causing climate change include carbon dioxide and methane. <span class=\"speak-icon\" style=\"cursor: pointer; float: right; font-size: 1.2rem;\" title=\"朗讀文章\">🔊</span>\n    </span>\n</div>\n<div class=\"question-prompt\" style=\"font-weight: 600; margin-bottom: 1rem;\">\n    <span class=\"en-assist\" data-tw=\"選出正確答案\">Which word best describes the tone of the passage?<span class=\"speak-icon\">🔊</span></span>\n</div>",
    "explanation": "\n💡 <strong>題目與選項翻譯：</strong><br>題目：哪個詞最能描述這篇文章的語氣？<br><br>「Informative」：提供資訊的<br>「Humorous」：幽默的<br>「Angry」：憤怒的<br>「Sarcastic」：諷刺的<br><br>💡 <strong>答案解析：</strong><br>\n這是一篇客觀提供資訊的文章，因此語氣是 Informative (提供資訊的、增廣見聞的)。<br><br>\n💡 <strong>文章完整翻譯：</strong><br>\n氣候變遷是我們這個時代最緊迫的問題之一。它指的是溫度和天氣模式的長期轉變。這些轉變可能是自然的，但自1800年代以來，人類活動一直是氣候變遷的主要驅動力，這主要是由於燃燒煤炭、石油和天然氣等化石燃料。燃燒化石燃料會產生溫室氣體排放，這些排放物就像包裹在地球周圍的毯子一樣，困住了太陽的熱量並使溫度升高。導致氣候變遷的溫室氣體排放例子包括二氧化碳和甲烷。",
    "id": "e41"
  },
  {
    "category": "閱讀測驗",
    "options": [
      "The overview of the subject（該主題的概述）",
      "The future predictions（對未來的預測）",
      "A specific historical event（一個特定的歷史事件）",
      "Personal opinions of the author（作者的個人觀點）"
    ],
    "answer": 0,
    "difficulty": "基礎",
    "question": "\n<div class=\"reading-article\" style=\"background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; line-height: 1.6; border-left: 4px solid var(--color-primary);\">\n    <span class=\"en-assist\" data-tw=\"人工智慧（AI）是由機器展示的智慧，相對於包括人類在內的動物所展示的自然智慧。AI 研究被定義為對智慧代理的研究領域，這指的是任何感知其環境並採取行動以最大化實現其目標機會的系統。以前，「人工智慧」一詞曾被用來描述模仿並展示與人類思維相關的人類認知技能（如學習和解決問題）的機器。 【題目：這篇文章的主題是什麼？】\" data-en=\"Artificial Intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by animals including humans. AI research has been defined as the field of study of intelligent agents, which refers to any system that perceives its environment and takes actions that maximize its chance of achieving its goals. The term 'artificial intelligence' had previously been used to describe machines that mimic and display human cognitive skills that are associated with the human mind, such as learning and problem-solving.\" style=\"display: block;\">\n        Artificial Intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by animals including humans. AI research has been defined as the field of study of intelligent agents, which refers to any system that perceives its environment and takes actions that maximize its chance of achieving its goals. The term 'artificial intelligence' had previously been used to describe machines that mimic and display human cognitive skills that are associated with the human mind, such as learning and problem-solving. <span class=\"speak-icon\" style=\"cursor: pointer; float: right; font-size: 1.2rem;\" title=\"朗讀文章\">🔊</span>\n    </span>\n</div>\n<div class=\"question-prompt\" style=\"font-weight: 600; margin-bottom: 1rem;\">\n    <span class=\"en-assist\" data-tw=\"選出正確答案\">What is the main topic of this passage?<span class=\"speak-icon\">🔊</span></span>\n</div>",
    "explanation": "\n💡 <strong>題目與選項翻譯：</strong><br>題目：這篇文章的主題是什麼？<br><br>「The overview of the subject」：該主題的概述<br>「The future predictions」：對未來的預測<br>「A specific historical event」：一個特定的歷史事件<br>「Personal opinions of the author」：作者的個人觀點<br><br>💡 <strong>答案解析：</strong><br>\n文章主要在概述該主題的定義與背景。<br><br>\n💡 <strong>文章完整翻譯：</strong><br>\n人工智慧（AI）是由機器展示的智慧，相對於包括人類在內的動物所展示的自然智慧。AI 研究被定義為對智慧代理的研究領域，這指的是任何感知其環境並採取行動以最大化實現其目標機會的系統。以前，「人工智慧」一詞曾被用來描述模仿並展示與人類思維相關的人類認知技能（如學習和解決問題）的機器。",
    "id": "e42"
  },
  {
    "category": "閱讀測驗",
    "options": [
      "It has a significant impact on our world.（它對我們的世界有重大影響）",
      "It is mostly ignored by modern scientists.（它大多被現代科學家忽略）",
      "It only appeared in the last 10 years.（它只在過去10年中出現）",
      "It is harmful to all human beings.（它對所有人類都有害）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "question": "\n<div class=\"reading-article\" style=\"background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; line-height: 1.6; border-left: 4px solid var(--color-primary);\">\n    <span class=\"en-assist\" data-tw=\"咖啡是一種用烘焙過的咖啡豆（某些咖啡樹品種的漿果種子）沖泡的飲料。當咖啡漿果從綠色變成鮮紅色（表示成熟）時，它們就會被採摘、加工和乾燥。乾燥的咖啡種子會根據所需的風味被烘焙到不同程度。烘焙過的咖啡豆被研磨，然後用接近沸騰的水沖泡，製成被稱為咖啡的飲料。 【題目：根據文章，下列哪一項是正確的？】\" data-en=\"Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. When coffee berries turn from green to bright red in color – indicating ripeness – they are picked, processed, and dried. Dried coffee seeds are roasted to varying degrees, depending on the desired flavor. Roasted beans are ground and then brewed with near-boiling water to produce the beverage known as coffee.\" style=\"display: block;\">\n        Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. When coffee berries turn from green to bright red in color – indicating ripeness – they are picked, processed, and dried. Dried coffee seeds are roasted to varying degrees, depending on the desired flavor. Roasted beans are ground and then brewed with near-boiling water to produce the beverage known as coffee. <span class=\"speak-icon\" style=\"cursor: pointer; float: right; font-size: 1.2rem;\" title=\"朗讀文章\">🔊</span>\n    </span>\n</div>\n<div class=\"question-prompt\" style=\"font-weight: 600; margin-bottom: 1rem;\">\n    <span class=\"en-assist\" data-tw=\"選出正確答案\">According to the passage, which of the following is true?<span class=\"speak-icon\">🔊</span></span>\n</div>",
    "explanation": "\n💡 <strong>題目與選項翻譯：</strong><br>題目：根據文章，下列哪一項是正確的？<br><br>「It has a significant impact on our world.」：它對我們的世界有重大影響。<br>「It is mostly ignored by modern scientists.」：它大多被現代科學家忽略。<br>「It only appeared in the last 10 years.」：它只在過去10年中出現。<br>「It is harmful to all human beings.」：它對所有人類都有害。<br><br>💡 <strong>答案解析：</strong><br>\n文章中清楚提到該主題對世界有重要影響。<br><br>\n💡 <strong>文章完整翻譯：</strong><br>\n咖啡是一種用烘焙過的咖啡豆（某些咖啡樹品種的漿果種子）沖泡的飲料。當咖啡漿果從綠色變成鮮紅色（表示成熟）時，它們就會被採摘、加工和乾燥。乾燥的咖啡種子會根據所需的風味被烘焙到不同程度。烘焙過的咖啡豆被研磨，然後用接近沸騰的水沖泡，製成被稱為咖啡的飲料。",
    "id": "e43"
  },
  {
    "category": "閱讀測驗",
    "options": [
      "The subject is complex and multifaceted.（該主題是複雜且多面向的）",
      "Nobody understands this topic.（沒有人了解這個話題）",
      "It is a completely natural phenomenon.（這是一個完全自然的現象）",
      "It is a fictional concept.（這是一個虛構的概念）"
    ],
    "answer": 0,
    "difficulty": "進階",
    "question": "\n<div class=\"reading-article\" style=\"background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; line-height: 1.6; border-left: 4px solid var(--color-primary);\">\n    <span class=\"en-assist\" data-tw=\"太空探索是利用天文學和太空科技來探索外太空。雖然太空探索主要由天文學家使用望遠鏡進行，但其物理探索則由無人機器人太空探測器和載人太空飛行共同進行。太空探索與其經典形式的天文學一樣，是太空科學的主要來源之一。 【題目：從文本中可以推論出什麼？】\" data-en=\"Space exploration is the use of astronomy and space technology to explore outer space. While the exploration of space is carried out mainly by astronomers with telescopes, its physical exploration though is conducted both by unmanned robotic space probes and human spaceflight. Space exploration, like its classical form astronomy, is one of the main sources for space science.\" style=\"display: block;\">\n        Space exploration is the use of astronomy and space technology to explore outer space. While the exploration of space is carried out mainly by astronomers with telescopes, its physical exploration though is conducted both by unmanned robotic space probes and human spaceflight. Space exploration, like its classical form astronomy, is one of the main sources for space science. <span class=\"speak-icon\" style=\"cursor: pointer; float: right; font-size: 1.2rem;\" title=\"朗讀文章\">🔊</span>\n    </span>\n</div>\n<div class=\"question-prompt\" style=\"font-weight: 600; margin-bottom: 1rem;\">\n    <span class=\"en-assist\" data-tw=\"選出正確答案\">What can be inferred from the text?<span class=\"speak-icon\">🔊</span></span>\n</div>",
    "explanation": "\n💡 <strong>題目與選項翻譯：</strong><br>題目：從文本中可以推論出什麼？<br><br>「The subject is complex and multifaceted.」：該主題是複雜且多面向的。<br>「Nobody understands this topic.」：沒有人了解這個話題。<br>「It is a completely natural phenomenon.」：這是一個完全自然的現象。<br>「It is a fictional concept.」：這是一個虛構的概念。<br><br>💡 <strong>答案解析：</strong><br>\n從文中詳細的描述可以推論，這是一個複雜且多面向的主題。<br><br>\n💡 <strong>文章完整翻譯：</strong><br>\n太空探索是利用天文學和太空科技來探索外太空。雖然太空探索主要由天文學家使用望遠鏡進行，但其物理探索則由無人機器人太空探測器和載人太空飛行共同進行。太空探索與其經典形式的天文學一樣，是太空科學的主要來源之一。",
    "id": "e44"
  },
  {
    "category": "閱讀測驗",
    "options": [
      "Informative（提供資訊的）",
      "Humorous（幽默的）",
      "Angry（憤怒的）",
      "Sarcastic（諷刺的）"
    ],
    "answer": 0,
    "difficulty": "基礎",
    "question": "\n<div class=\"reading-article\" style=\"background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; line-height: 1.6; border-left: 4px solid var(--color-primary);\">\n    <span class=\"en-assist\" data-tw=\"網際網路的歷史起源於建立和互連電腦網路的努力，這些努力源於美國的研究與開發，並涉及國際合作，特別是與英國和法國的研究人員。網際網路的基礎是由美國國防部資助的 ARPANET 奠定的。 【題目：哪個詞最能描述這篇文章的語氣？】\" data-en=\"The history of the Internet has its origin in the efforts to build and interconnect computer networks that arose from research and development in the United States and involved international collaboration, particularly with researchers in the United Kingdom and France. The Internet's foundation was laid by ARPANET, funded by the US Department of Defense.\" style=\"display: block;\">\n        The history of the Internet has its origin in the efforts to build and interconnect computer networks that arose from research and development in the United States and involved international collaboration, particularly with researchers in the United Kingdom and France. The Internet's foundation was laid by ARPANET, funded by the US Department of Defense. <span class=\"speak-icon\" style=\"cursor: pointer; float: right; font-size: 1.2rem;\" title=\"朗讀文章\">🔊</span>\n    </span>\n</div>\n<div class=\"question-prompt\" style=\"font-weight: 600; margin-bottom: 1rem;\">\n    <span class=\"en-assist\" data-tw=\"選出正確答案\">Which word best describes the tone of the passage?<span class=\"speak-icon\">🔊</span></span>\n</div>",
    "explanation": "\n💡 <strong>題目與選項翻譯：</strong><br>題目：哪個詞最能描述這篇文章的語氣？<br><br>「Informative」：提供資訊的<br>「Humorous」：幽默的<br>「Angry」：憤怒的<br>「Sarcastic」：諷刺的<br><br>💡 <strong>答案解析：</strong><br>\n這是一篇客觀提供資訊的文章，因此語氣是 Informative (提供資訊的、增廣見聞的)。<br><br>\n💡 <strong>文章完整翻譯：</strong><br>\n網際網路的歷史起源於建立和互連電腦網路的努力，這些努力源於美國的研究與開發，並涉及國際合作，特別是與英國和法國的研究人員。網際網路的基礎是由美國國防部資助的 ARPANET 奠定的。",
    "id": "e45"
  },
  {
    "id": "e46",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Communication can influence ______ our perspective.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "profoundly（深遠地）",
      "superficially（表面地）",
      "hardly（幾乎不）",
      "slightly（稍微地）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>profoundly 意為「深遠地」。<br><br>💡 <strong>整句翻譯：</strong><br>溝通深遠地能影響我們的觀點。<br><br>💡 <strong>選項翻譯：</strong><br>「profoundly」：深遠地<br>「superficially」：表面地<br>「hardly」：幾乎不<br>「slightly」：稍微地"
  },
  {
    "id": "e47",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Communication will shape ______ our daily lives.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "hardly（幾乎沒有）",
      "minorly（輕微地）",
      "greatly（極大地）",
      "barely（幾乎不）"
    ],
    "answer": 2,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>greatly 意為「極大地」。<br><br>💡 <strong>整句翻譯：</strong><br>溝通極大地將形塑我們的日常生活。<br><br>💡 <strong>選項翻譯：</strong><br>「hardly」：幾乎沒有<br>「minorly」：輕微地<br>「greatly」：極大地<br>「barely」：幾乎不"
  },
  {
    "id": "e48",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Exercising will shape ______ human behavior.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "scarcely（幾乎沒有）",
      "barely（幾乎不）",
      "rarely（很少地）",
      "significantly（顯著地）"
    ],
    "answer": 3,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>significantly 意為「顯著地」。<br><br>💡 <strong>整句翻譯：</strong><br>運動顯著地將形塑人類行為。<br><br>💡 <strong>選項翻譯：</strong><br>「scarcely」：幾乎沒有<br>「barely」：幾乎不<br>「rarely」：很少地<br>「significantly」：顯著地"
  },
  {
    "id": "e49",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Learning might affect ______ human behavior.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "slowly（緩慢地）",
      "dramatically（劇烈地）",
      "quietly（安靜地）",
      "gradually（逐漸地）"
    ],
    "answer": 1,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>dramatically 意為「劇烈地」。<br><br>💡 <strong>整句翻譯：</strong><br>學習劇烈地可能影響人類行為。<br><br>💡 <strong>選項翻譯：</strong><br>「slowly」：緩慢地<br>「dramatically」：劇烈地<br>「quietly」：安靜地<br>「gradually」：逐漸地"
  },
  {
    "id": "e50",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Education has improved ______ the whole world.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "positively（正向地）",
      "poorly（差勁地）",
      "negatively（負面地）",
      "badly（糟糕地）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>💡 <strong>答案解析：</strong><br>positively 意為「正向地」。<br><br>💡 <strong>整句翻譯：</strong><br>教育正向地改善了整個世界。<br><br>💡 <strong>選項翻譯：</strong><br>「positively」：正向地<br>「poorly」：差勁地<br>「negatively」：負面地<br>「badly」：糟糕地"
  },
  {
    "id": "e51",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Traveling can influence ______ the whole world.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "greatly（極大地）",
      "minorly（輕微地）",
      "barely（幾乎不）",
      "hardly（幾乎沒有）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>greatly 意為「極大地」。<br><br>💡 <strong>整句翻譯：</strong><br>旅行極大地能影響整個世界。<br><br>💡 <strong>選項翻譯：</strong><br>「greatly」：極大地<br>「minorly」：輕微地<br>「barely」：幾乎不<br>「hardly」：幾乎沒有"
  },
  {
    "id": "e52",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Traveling can influence ______ our daily lives.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "positively（正向地）",
      "badly（糟糕地）",
      "negatively（負面地）",
      "poorly（差勁地）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>positively 意為「正向地」。<br><br>💡 <strong>整句翻譯：</strong><br>旅行正向地能影響我們的日常生活。<br><br>💡 <strong>選項翻譯：</strong><br>「positively」：正向地<br>「badly」：糟糕地<br>「negatively」：負面地<br>「poorly」：差勁地"
  },
  {
    "id": "e53",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Traveling might affect ______ our daily lives.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "negatively（負面地）",
      "badly（糟糕地）",
      "positively（正向地）",
      "poorly（差勁地）"
    ],
    "answer": 2,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>positively 意為「正向地」。<br><br>💡 <strong>整句翻譯：</strong><br>旅行正向地可能影響我們的日常生活。<br><br>💡 <strong>選項翻譯：</strong><br>「negatively」：負面地<br>「badly」：糟糕地<br>「positively」：正向地<br>「poorly」：差勁地"
  },
  {
    "id": "e54",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Reading might affect ______ the whole world.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "badly（糟糕地）",
      "poorly（差勁地）",
      "negatively（負面地）",
      "positively（正向地）"
    ],
    "answer": 3,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>positively 意為「正向地」。<br><br>💡 <strong>整句翻譯：</strong><br>閱讀正向地可能影響整個世界。<br><br>💡 <strong>選項翻譯：</strong><br>「badly」：糟糕地<br>「poorly」：差勁地<br>「negatively」：負面地<br>「positively」：正向地"
  },
  {
    "id": "e55",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Teamwork will shape ______ modern society.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "poorly（差勁地）",
      "positively（正向地）",
      "negatively（負面地）",
      "badly（糟糕地）"
    ],
    "answer": 1,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>positively 意為「正向地」。<br><br>💡 <strong>整句翻譯：</strong><br>團隊合作正向地將形塑現代社會。<br><br>💡 <strong>選項翻譯：</strong><br>「poorly」：差勁地<br>「positively」：正向地<br>「negatively」：負面地<br>「badly」：糟糕地"
  },
  {
    "id": "e56",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Music might affect ______ our daily lives.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "minorly（輕微地）",
      "greatly（極大地）",
      "barely（幾乎不）",
      "hardly（幾乎沒有）"
    ],
    "answer": 1,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>greatly 意為「極大地」。<br><br>💡 <strong>整句翻譯：</strong><br>音樂極大地可能影響我們的日常生活。<br><br>💡 <strong>選項翻譯：</strong><br>「minorly」：輕微地<br>「greatly」：極大地<br>「barely」：幾乎不<br>「hardly」：幾乎沒有"
  },
  {
    "id": "e57",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Technology will shape ______ our daily lives.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "minorly（輕微地）",
      "greatly（極大地）",
      "barely（幾乎不）",
      "hardly（幾乎沒有）"
    ],
    "answer": 1,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>greatly 意為「極大地」。<br><br>💡 <strong>整句翻譯：</strong><br>科技極大地將形塑我們的日常生活。<br><br>💡 <strong>選項翻譯：</strong><br>「minorly」：輕微地<br>「greatly」：極大地<br>「barely」：幾乎不<br>「hardly」：幾乎沒有"
  },
  {
    "id": "e58",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Technology might affect ______ modern society.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "scarcely（幾乎沒有）",
      "significantly（顯著地）",
      "rarely（很少地）",
      "barely（幾乎不）"
    ],
    "answer": 1,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>significantly 意為「顯著地」。<br><br>💡 <strong>整句翻譯：</strong><br>科技顯著地可能影響現代社會。<br><br>💡 <strong>選項翻譯：</strong><br>「scarcely」：幾乎沒有<br>「significantly」：顯著地<br>「rarely」：很少地<br>「barely」：幾乎不"
  },
  {
    "id": "e59",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Volunteering will shape ______ the whole world.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "positively（正向地）",
      "negatively（負面地）",
      "badly（糟糕地）",
      "poorly（差勁地）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>positively 意為「正向地」。<br><br>💡 <strong>整句翻譯：</strong><br>志工服務正向地將形塑整個世界。<br><br>💡 <strong>選項翻譯：</strong><br>「positively」：正向地<br>「negatively」：負面地<br>「badly」：糟糕地<br>「poorly」：差勁地"
  },
  {
    "id": "e60",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Technology has improved ______ modern society.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "gradually（逐漸地）",
      "dramatically（劇烈地）",
      "slowly（緩慢地）",
      "quietly（安靜地）"
    ],
    "answer": 1,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>💡 <strong>答案解析：</strong><br>dramatically 意為「劇烈地」。<br><br>💡 <strong>整句翻譯：</strong><br>科技劇烈地改善了現代社會。<br><br>💡 <strong>選項翻譯：</strong><br>「gradually」：逐漸地<br>「dramatically」：劇烈地<br>「slowly」：緩慢地<br>「quietly」：安靜地"
  },
  {
    "id": "e61",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Teamwork might affect ______ human behavior.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "slowly（緩慢地）",
      "gradually（逐漸地）",
      "dramatically（劇烈地）",
      "quietly（安靜地）"
    ],
    "answer": 2,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>dramatically 意為「劇烈地」。<br><br>💡 <strong>整句翻譯：</strong><br>團隊合作劇烈地可能影響人類行為。<br><br>💡 <strong>選項翻譯：</strong><br>「slowly」：緩慢地<br>「gradually」：逐漸地<br>「dramatically」：劇烈地<br>「quietly」：安靜地"
  },
  {
    "id": "e62",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Traveling has improved ______ the whole world.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "poorly（差勁地）",
      "negatively（負面地）",
      "positively（正向地）",
      "badly（糟糕地）"
    ],
    "answer": 2,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>💡 <strong>答案解析：</strong><br>positively 意為「正向地」。<br><br>💡 <strong>整句翻譯：</strong><br>旅行正向地改善了整個世界。<br><br>💡 <strong>選項翻譯：</strong><br>「poorly」：差勁地<br>「negatively」：負面地<br>「positively」：正向地<br>「badly」：糟糕地"
  },
  {
    "id": "e63",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Teamwork has changed ______ the whole world.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "profoundly（深遠地）",
      "slightly（稍微地）",
      "hardly（幾乎不）",
      "superficially（表面地）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>💡 <strong>答案解析：</strong><br>profoundly 意為「深遠地」。<br><br>💡 <strong>整句翻譯：</strong><br>團隊合作深遠地改變了整個世界。<br><br>💡 <strong>選項翻譯：</strong><br>「profoundly」：深遠地<br>「slightly」：稍微地<br>「hardly」：幾乎不<br>「superficially」：表面地"
  },
  {
    "id": "e64",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Traveling might affect ______ modern society.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "hardly（幾乎沒有）",
      "greatly（極大地）",
      "barely（幾乎不）",
      "minorly（輕微地）"
    ],
    "answer": 1,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>greatly 意為「極大地」。<br><br>💡 <strong>整句翻譯：</strong><br>旅行極大地可能影響現代社會。<br><br>💡 <strong>選項翻譯：</strong><br>「hardly」：幾乎沒有<br>「greatly」：極大地<br>「barely」：幾乎不<br>「minorly」：輕微地"
  },
  {
    "id": "e65",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Education has changed ______ human behavior.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "dramatically（劇烈地）",
      "gradually（逐漸地）",
      "slowly（緩慢地）",
      "quietly（安靜地）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>💡 <strong>答案解析：</strong><br>dramatically 意為「劇烈地」。<br><br>💡 <strong>整句翻譯：</strong><br>教育劇烈地改變了人類行為。<br><br>💡 <strong>選項翻譯：</strong><br>「dramatically」：劇烈地<br>「gradually」：逐漸地<br>「slowly」：緩慢地<br>「quietly」：安靜地"
  },
  {
    "id": "e66",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Communication has changed ______ modern society.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "poorly（差勁地）",
      "negatively（負面地）",
      "badly（糟糕地）",
      "positively（正向地）"
    ],
    "answer": 3,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>💡 <strong>答案解析：</strong><br>positively 意為「正向地」。<br><br>💡 <strong>整句翻譯：</strong><br>溝通正向地改變了現代社會。<br><br>💡 <strong>選項翻譯：</strong><br>「poorly」：差勁地<br>「negatively」：負面地<br>「badly」：糟糕地<br>「positively」：正向地"
  },
  {
    "id": "e67",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Volunteering will shape ______ human behavior.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "hardly（幾乎沒有）",
      "barely（幾乎不）",
      "minorly（輕微地）",
      "greatly（極大地）"
    ],
    "answer": 3,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>greatly 意為「極大地」。<br><br>💡 <strong>整句翻譯：</strong><br>志工服務極大地將形塑人類行為。<br><br>💡 <strong>選項翻譯：</strong><br>「hardly」：幾乎沒有<br>「barely」：幾乎不<br>「minorly」：輕微地<br>「greatly」：極大地"
  },
  {
    "id": "e68",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Communication might affect ______ our perspective.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "profoundly（深遠地）",
      "superficially（表面地）",
      "hardly（幾乎不）",
      "slightly（稍微地）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>profoundly 意為「深遠地」。<br><br>💡 <strong>整句翻譯：</strong><br>溝通深遠地可能影響我們的觀點。<br><br>💡 <strong>選項翻譯：</strong><br>「profoundly」：深遠地<br>「superficially」：表面地<br>「hardly」：幾乎不<br>「slightly」：稍微地"
  },
  {
    "id": "e69",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Communication can influence ______ modern society.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "hardly（幾乎不）",
      "profoundly（深遠地）",
      "slightly（稍微地）",
      "superficially（表面地）"
    ],
    "answer": 1,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>profoundly 意為「深遠地」。<br><br>💡 <strong>整句翻譯：</strong><br>溝通深遠地能影響現代社會。<br><br>💡 <strong>選項翻譯：</strong><br>「hardly」：幾乎不<br>「profoundly」：深遠地<br>「slightly」：稍微地<br>「superficially」：表面地"
  },
  {
    "id": "e70",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Exercising might affect ______ our daily lives.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "scarcely（幾乎沒有）",
      "barely（幾乎不）",
      "rarely（很少地）",
      "significantly（顯著地）"
    ],
    "answer": 3,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>significantly 意為「顯著地」。<br><br>💡 <strong>整句翻譯：</strong><br>運動顯著地可能影響我們的日常生活。<br><br>💡 <strong>選項翻譯：</strong><br>「scarcely」：幾乎沒有<br>「barely」：幾乎不<br>「rarely」：很少地<br>「significantly」：顯著地"
  },
  {
    "id": "e71",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Teamwork might affect ______ modern society.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "rarely（很少地）",
      "scarcely（幾乎沒有）",
      "significantly（顯著地）",
      "barely（幾乎不）"
    ],
    "answer": 2,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>significantly 意為「顯著地」。<br><br>💡 <strong>整句翻譯：</strong><br>團隊合作顯著地可能影響現代社會。<br><br>💡 <strong>選項翻譯：</strong><br>「rarely」：很少地<br>「scarcely」：幾乎沒有<br>「significantly」：顯著地<br>「barely」：幾乎不"
  },
  {
    "id": "e72",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Music has changed ______ our perspective.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "slowly（緩慢地）",
      "gradually（逐漸地）",
      "dramatically（劇烈地）",
      "quietly（安靜地）"
    ],
    "answer": 2,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>💡 <strong>答案解析：</strong><br>dramatically 意為「劇烈地」。<br><br>💡 <strong>整句翻譯：</strong><br>音樂劇烈地改變了我們的觀點。<br><br>💡 <strong>選項翻譯：</strong><br>「slowly」：緩慢地<br>「gradually」：逐漸地<br>「dramatically」：劇烈地<br>「quietly」：安靜地"
  },
  {
    "id": "e73",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Reading will shape ______ human behavior.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "rarely（很少地）",
      "scarcely（幾乎沒有）",
      "significantly（顯著地）",
      "barely（幾乎不）"
    ],
    "answer": 2,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>significantly 意為「顯著地」。<br><br>💡 <strong>整句翻譯：</strong><br>閱讀顯著地將形塑人類行為。<br><br>💡 <strong>選項翻譯：</strong><br>「rarely」：很少地<br>「scarcely」：幾乎沒有<br>「significantly」：顯著地<br>「barely」：幾乎不"
  },
  {
    "id": "e74",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Teamwork has changed ______ our perspective.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "superficially（表面地）",
      "profoundly（深遠地）",
      "slightly（稍微地）",
      "hardly（幾乎不）"
    ],
    "answer": 1,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>💡 <strong>答案解析：</strong><br>profoundly 意為「深遠地」。<br><br>💡 <strong>整句翻譯：</strong><br>團隊合作深遠地改變了我們的觀點。<br><br>💡 <strong>選項翻譯：</strong><br>「superficially」：表面地<br>「profoundly」：深遠地<br>「slightly」：稍微地<br>「hardly」：幾乎不"
  },
  {
    "id": "e75",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Traveling has improved ______ our daily lives.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "slightly（稍微地）",
      "hardly（幾乎不）",
      "profoundly（深遠地）",
      "superficially（表面地）"
    ],
    "answer": 2,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>💡 <strong>答案解析：</strong><br>profoundly 意為「深遠地」。<br><br>💡 <strong>整句翻譯：</strong><br>旅行深遠地改善了我們的日常生活。<br><br>💡 <strong>選項翻譯：</strong><br>「slightly」：稍微地<br>「hardly」：幾乎不<br>「profoundly」：深遠地<br>「superficially」：表面地"
  },
  {
    "id": "e76",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Volunteering can influence ______ the whole world.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "greatly（極大地）",
      "minorly（輕微地）",
      "hardly（幾乎沒有）",
      "barely（幾乎不）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>greatly 意為「極大地」。<br><br>💡 <strong>整句翻譯：</strong><br>志工服務極大地能影響整個世界。<br><br>💡 <strong>選項翻譯：</strong><br>「greatly」：極大地<br>「minorly」：輕微地<br>「hardly」：幾乎沒有<br>「barely」：幾乎不"
  },
  {
    "id": "e77",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Learning has improved ______ our perspective.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "hardly（幾乎沒有）",
      "greatly（極大地）",
      "barely（幾乎不）",
      "minorly（輕微地）"
    ],
    "answer": 1,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>💡 <strong>答案解析：</strong><br>greatly 意為「極大地」。<br><br>💡 <strong>整句翻譯：</strong><br>學習極大地改善了我們的觀點。<br><br>💡 <strong>選項翻譯：</strong><br>「hardly」：幾乎沒有<br>「greatly」：極大地<br>「barely」：幾乎不<br>「minorly」：輕微地"
  },
  {
    "id": "e78",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Communication will shape ______ modern society.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "hardly（幾乎不）",
      "slightly（稍微地）",
      "superficially（表面地）",
      "profoundly（深遠地）"
    ],
    "answer": 3,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>profoundly 意為「深遠地」。<br><br>💡 <strong>整句翻譯：</strong><br>溝通深遠地將形塑現代社會。<br><br>💡 <strong>選項翻譯：</strong><br>「hardly」：幾乎不<br>「slightly」：稍微地<br>「superficially」：表面地<br>「profoundly」：深遠地"
  },
  {
    "id": "e79",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Reading might affect ______ human behavior.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "gradually（逐漸地）",
      "dramatically（劇烈地）",
      "slowly（緩慢地）",
      "quietly（安靜地）"
    ],
    "answer": 1,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>dramatically 意為「劇烈地」。<br><br>💡 <strong>整句翻譯：</strong><br>閱讀劇烈地可能影響人類行為。<br><br>💡 <strong>選項翻譯：</strong><br>「gradually」：逐漸地<br>「dramatically」：劇烈地<br>「slowly」：緩慢地<br>「quietly」：安靜地"
  },
  {
    "id": "e80",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Reading has improved ______ human behavior.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "poorly（差勁地）",
      "badly（糟糕地）",
      "negatively（負面地）",
      "positively（正向地）"
    ],
    "answer": 3,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>💡 <strong>答案解析：</strong><br>positively 意為「正向地」。<br><br>💡 <strong>整句翻譯：</strong><br>閱讀正向地改善了人類行為。<br><br>💡 <strong>選項翻譯：</strong><br>「poorly」：差勁地<br>「badly」：糟糕地<br>「negatively」：負面地<br>「positively」：正向地"
  },
  {
    "id": "e81",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Reading has changed ______ modern society.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "greatly（極大地）",
      "hardly（幾乎沒有）",
      "minorly（輕微地）",
      "barely（幾乎不）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>💡 <strong>答案解析：</strong><br>greatly 意為「極大地」。<br><br>💡 <strong>整句翻譯：</strong><br>閱讀極大地改變了現代社會。<br><br>💡 <strong>選項翻譯：</strong><br>「greatly」：極大地<br>「hardly」：幾乎沒有<br>「minorly」：輕微地<br>「barely」：幾乎不"
  },
  {
    "id": "e82",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Traveling has changed ______ the whole world.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "profoundly（深遠地）",
      "hardly（幾乎不）",
      "superficially（表面地）",
      "slightly（稍微地）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>💡 <strong>答案解析：</strong><br>profoundly 意為「深遠地」。<br><br>💡 <strong>整句翻譯：</strong><br>旅行深遠地改變了整個世界。<br><br>💡 <strong>選項翻譯：</strong><br>「profoundly」：深遠地<br>「hardly」：幾乎不<br>「superficially」：表面地<br>「slightly」：稍微地"
  },
  {
    "id": "e83",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Communication might affect ______ our daily lives.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "hardly（幾乎沒有）",
      "barely（幾乎不）",
      "minorly（輕微地）",
      "greatly（極大地）"
    ],
    "answer": 3,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>greatly 意為「極大地」。<br><br>💡 <strong>整句翻譯：</strong><br>溝通極大地可能影響我們的日常生活。<br><br>💡 <strong>選項翻譯：</strong><br>「hardly」：幾乎沒有<br>「barely」：幾乎不<br>「minorly」：輕微地<br>「greatly」：極大地"
  },
  {
    "id": "e84",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Learning can influence ______ the whole world.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "positively（正向地）",
      "negatively（負面地）",
      "badly（糟糕地）",
      "poorly（差勁地）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>positively 意為「正向地」。<br><br>💡 <strong>整句翻譯：</strong><br>學習正向地能影響整個世界。<br><br>💡 <strong>選項翻譯：</strong><br>「positively」：正向地<br>「negatively」：負面地<br>「badly」：糟糕地<br>「poorly」：差勁地"
  },
  {
    "id": "e85",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Teamwork will shape ______ human behavior.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "rarely（很少地）",
      "barely（幾乎不）",
      "significantly（顯著地）",
      "scarcely（幾乎沒有）"
    ],
    "answer": 2,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>significantly 意為「顯著地」。<br><br>💡 <strong>整句翻譯：</strong><br>團隊合作顯著地將形塑人類行為。<br><br>💡 <strong>選項翻譯：</strong><br>「rarely」：很少地<br>「barely」：幾乎不<br>「significantly」：顯著地<br>「scarcely」：幾乎沒有"
  },
  {
    "id": "e86",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Volunteering has changed ______ our perspective.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "hardly（幾乎不）",
      "slightly（稍微地）",
      "profoundly（深遠地）",
      "superficially（表面地）"
    ],
    "answer": 2,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>💡 <strong>答案解析：</strong><br>profoundly 意為「深遠地」。<br><br>💡 <strong>整句翻譯：</strong><br>志工服務深遠地改變了我們的觀點。<br><br>💡 <strong>選項翻譯：</strong><br>「hardly」：幾乎不<br>「slightly」：稍微地<br>「profoundly」：深遠地<br>「superficially」：表面地"
  },
  {
    "id": "e87",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Teamwork has changed ______ modern society.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "greatly（極大地）",
      "minorly（輕微地）",
      "barely（幾乎不）",
      "hardly（幾乎沒有）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>💡 <strong>答案解析：</strong><br>greatly 意為「極大地」。<br><br>💡 <strong>整句翻譯：</strong><br>團隊合作極大地改變了現代社會。<br><br>💡 <strong>選項翻譯：</strong><br>「greatly」：極大地<br>「minorly」：輕微地<br>「barely」：幾乎不<br>「hardly」：幾乎沒有"
  },
  {
    "id": "e88",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Traveling will shape ______ our daily lives.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "poorly（差勁地）",
      "positively（正向地）",
      "negatively（負面地）",
      "badly（糟糕地）"
    ],
    "answer": 1,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>positively 意為「正向地」。<br><br>💡 <strong>整句翻譯：</strong><br>旅行正向地將形塑我們的日常生活。<br><br>💡 <strong>選項翻譯：</strong><br>「poorly」：差勁地<br>「positively」：正向地<br>「negatively」：負面地<br>「badly」：糟糕地"
  },
  {
    "id": "e89",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Volunteering has improved ______ our perspective.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "hardly（幾乎沒有）",
      "barely（幾乎不）",
      "minorly（輕微地）",
      "greatly（極大地）"
    ],
    "answer": 3,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>💡 <strong>答案解析：</strong><br>greatly 意為「極大地」。<br><br>💡 <strong>整句翻譯：</strong><br>志工服務極大地改善了我們的觀點。<br><br>💡 <strong>選項翻譯：</strong><br>「hardly」：幾乎沒有<br>「barely」：幾乎不<br>「minorly」：輕微地<br>「greatly」：極大地"
  },
  {
    "id": "e90",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Teamwork can influence ______ our daily lives.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "slightly（稍微地）",
      "hardly（幾乎不）",
      "superficially（表面地）",
      "profoundly（深遠地）"
    ],
    "answer": 3,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>profoundly 意為「深遠地」。<br><br>💡 <strong>整句翻譯：</strong><br>團隊合作深遠地能影響我們的日常生活。<br><br>💡 <strong>選項翻譯：</strong><br>「slightly」：稍微地<br>「hardly」：幾乎不<br>「superficially」：表面地<br>「profoundly」：深遠地"
  },
  {
    "id": "e91",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Education can influence ______ our perspective.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "barely（幾乎不）",
      "scarcely（幾乎沒有）",
      "rarely（很少地）",
      "significantly（顯著地）"
    ],
    "answer": 3,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>significantly 意為「顯著地」。<br><br>💡 <strong>整句翻譯：</strong><br>教育顯著地能影響我們的觀點。<br><br>💡 <strong>選項翻譯：</strong><br>「barely」：幾乎不<br>「scarcely」：幾乎沒有<br>「rarely」：很少地<br>「significantly」：顯著地"
  },
  {
    "id": "e92",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Teamwork will shape ______ the whole world.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "dramatically（劇烈地）",
      "slowly（緩慢地）",
      "quietly（安靜地）",
      "gradually（逐漸地）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>dramatically 意為「劇烈地」。<br><br>💡 <strong>整句翻譯：</strong><br>團隊合作劇烈地將形塑整個世界。<br><br>💡 <strong>選項翻譯：</strong><br>「dramatically」：劇烈地<br>「slowly」：緩慢地<br>「quietly」：安靜地<br>「gradually」：逐漸地"
  },
  {
    "id": "e93",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Communication has improved ______ our daily lives.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "greatly（極大地）",
      "hardly（幾乎沒有）",
      "minorly（輕微地）",
      "barely（幾乎不）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>💡 <strong>答案解析：</strong><br>greatly 意為「極大地」。<br><br>💡 <strong>整句翻譯：</strong><br>溝通極大地改善了我們的日常生活。<br><br>💡 <strong>選項翻譯：</strong><br>「greatly」：極大地<br>「hardly」：幾乎沒有<br>「minorly」：輕微地<br>「barely」：幾乎不"
  },
  {
    "id": "e94",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Education can influence ______ modern society.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "slightly（稍微地）",
      "hardly（幾乎不）",
      "superficially（表面地）",
      "profoundly（深遠地）"
    ],
    "answer": 3,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>profoundly 意為「深遠地」。<br><br>💡 <strong>整句翻譯：</strong><br>教育深遠地能影響現代社會。<br><br>💡 <strong>選項翻譯：</strong><br>「slightly」：稍微地<br>「hardly」：幾乎不<br>「superficially」：表面地<br>「profoundly」：深遠地"
  },
  {
    "id": "e95",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Technology has changed ______ modern society.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "superficially（表面地）",
      "profoundly（深遠地）",
      "slightly（稍微地）",
      "hardly（幾乎不）"
    ],
    "answer": 1,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>💡 <strong>答案解析：</strong><br>profoundly 意為「深遠地」。<br><br>💡 <strong>整句翻譯：</strong><br>科技深遠地改變了現代社會。<br><br>💡 <strong>選項翻譯：</strong><br>「superficially」：表面地<br>「profoundly」：深遠地<br>「slightly」：稍微地<br>「hardly」：幾乎不"
  },
  {
    "id": "e96",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Teamwork has improved ______ our perspective.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "poorly（差勁地）",
      "badly（糟糕地）",
      "negatively（負面地）",
      "positively（正向地）"
    ],
    "answer": 3,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>💡 <strong>答案解析：</strong><br>positively 意為「正向地」。<br><br>💡 <strong>整句翻譯：</strong><br>團隊合作正向地改善了我們的觀點。<br><br>💡 <strong>選項翻譯：</strong><br>「poorly」：差勁地<br>「badly」：糟糕地<br>「negatively」：負面地<br>「positively」：正向地"
  },
  {
    "id": "e97",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Volunteering might affect ______ human behavior.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "slightly（稍微地）",
      "profoundly（深遠地）",
      "superficially（表面地）",
      "hardly（幾乎不）"
    ],
    "answer": 1,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>profoundly 意為「深遠地」。<br><br>💡 <strong>整句翻譯：</strong><br>志工服務深遠地可能影響人類行為。<br><br>💡 <strong>選項翻譯：</strong><br>「slightly」：稍微地<br>「profoundly」：深遠地<br>「superficially」：表面地<br>「hardly」：幾乎不"
  },
  {
    "id": "e98",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Exercising can influence ______ modern society.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "badly（糟糕地）",
      "poorly（差勁地）",
      "negatively（負面地）",
      "positively（正向地）"
    ],
    "answer": 3,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>positively 意為「正向地」。<br><br>💡 <strong>整句翻譯：</strong><br>運動正向地能影響現代社會。<br><br>💡 <strong>選項翻譯：</strong><br>「badly」：糟糕地<br>「poorly」：差勁地<br>「negatively」：負面地<br>「positively」：正向地"
  },
  {
    "id": "e99",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Exercising has improved ______ our daily lives.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "barely（幾乎不）",
      "minorly（輕微地）",
      "greatly（極大地）",
      "hardly（幾乎沒有）"
    ],
    "answer": 2,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>💡 <strong>答案解析：</strong><br>greatly 意為「極大地」。<br><br>💡 <strong>整句翻譯：</strong><br>運動極大地改善了我們的日常生活。<br><br>💡 <strong>選項翻譯：</strong><br>「barely」：幾乎不<br>「minorly」：輕微地<br>「greatly」：極大地<br>「hardly」：幾乎沒有"
  },
  {
    "id": "e100",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Traveling has changed ______ human behavior.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "dramatically（劇烈地）",
      "slowly（緩慢地）",
      "quietly（安靜地）",
      "gradually（逐漸地）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>💡 <strong>答案解析：</strong><br>dramatically 意為「劇烈地」。<br><br>💡 <strong>整句翻譯：</strong><br>旅行劇烈地改變了人類行為。<br><br>💡 <strong>選項翻譯：</strong><br>「dramatically」：劇烈地<br>「slowly」：緩慢地<br>「quietly」：安靜地<br>「gradually」：逐漸地"
  },
  {
    "id": "e101",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Teamwork can influence ______ the whole world.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "barely（幾乎不）",
      "scarcely（幾乎沒有）",
      "rarely（很少地）",
      "significantly（顯著地）"
    ],
    "answer": 3,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>significantly 意為「顯著地」。<br><br>💡 <strong>整句翻譯：</strong><br>團隊合作顯著地能影響整個世界。<br><br>💡 <strong>選項翻譯：</strong><br>「barely」：幾乎不<br>「scarcely」：幾乎沒有<br>「rarely」：很少地<br>「significantly」：顯著地"
  },
  {
    "id": "e102",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Volunteering can influence ______ our perspective.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "slightly（稍微地）",
      "hardly（幾乎不）",
      "superficially（表面地）",
      "profoundly（深遠地）"
    ],
    "answer": 3,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>profoundly 意為「深遠地」。<br><br>💡 <strong>整句翻譯：</strong><br>志工服務深遠地能影響我們的觀點。<br><br>💡 <strong>選項翻譯：</strong><br>「slightly」：稍微地<br>「hardly」：幾乎不<br>「superficially」：表面地<br>「profoundly」：深遠地"
  },
  {
    "id": "e103",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Traveling can influence ______ modern society.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "scarcely（幾乎沒有）",
      "barely（幾乎不）",
      "rarely（很少地）",
      "significantly（顯著地）"
    ],
    "answer": 3,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>significantly 意為「顯著地」。<br><br>💡 <strong>整句翻譯：</strong><br>旅行顯著地能影響現代社會。<br><br>💡 <strong>選項翻譯：</strong><br>「scarcely」：幾乎沒有<br>「barely」：幾乎不<br>「rarely」：很少地<br>「significantly」：顯著地"
  },
  {
    "id": "e104",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Learning has improved ______ the whole world.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "negatively（負面地）",
      "positively（正向地）",
      "badly（糟糕地）",
      "poorly（差勁地）"
    ],
    "answer": 1,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>💡 <strong>答案解析：</strong><br>positively 意為「正向地」。<br><br>💡 <strong>整句翻譯：</strong><br>學習正向地改善了整個世界。<br><br>💡 <strong>選項翻譯：</strong><br>「negatively」：負面地<br>「positively」：正向地<br>「badly」：糟糕地<br>「poorly」：差勁地"
  },
  {
    "id": "e105",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Volunteering can influence ______ human behavior.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "dramatically（劇烈地）",
      "slowly（緩慢地）",
      "quietly（安靜地）",
      "gradually（逐漸地）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>dramatically 意為「劇烈地」。<br><br>💡 <strong>整句翻譯：</strong><br>志工服務劇烈地能影響人類行為。<br><br>💡 <strong>選項翻譯：</strong><br>「dramatically」：劇烈地<br>「slowly」：緩慢地<br>「quietly」：安靜地<br>「gradually」：逐漸地"
  },
  {
    "id": "e106",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Traveling has changed ______ our daily lives.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "badly（糟糕地）",
      "negatively（負面地）",
      "poorly（差勁地）",
      "positively（正向地）"
    ],
    "answer": 3,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>💡 <strong>答案解析：</strong><br>positively 意為「正向地」。<br><br>💡 <strong>整句翻譯：</strong><br>旅行正向地改變了我們的日常生活。<br><br>💡 <strong>選項翻譯：</strong><br>「badly」：糟糕地<br>「negatively」：負面地<br>「poorly」：差勁地<br>「positively」：正向地"
  },
  {
    "id": "e107",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Traveling has changed ______ our perspective.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "scarcely（幾乎沒有）",
      "significantly（顯著地）",
      "rarely（很少地）",
      "barely（幾乎不）"
    ],
    "answer": 1,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>💡 <strong>答案解析：</strong><br>significantly 意為「顯著地」。<br><br>💡 <strong>整句翻譯：</strong><br>旅行顯著地改變了我們的觀點。<br><br>💡 <strong>選項翻譯：</strong><br>「scarcely」：幾乎沒有<br>「significantly」：顯著地<br>「rarely」：很少地<br>「barely」：幾乎不"
  },
  {
    "id": "e108",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Exercising will shape ______ our perspective.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "hardly（幾乎沒有）",
      "barely（幾乎不）",
      "greatly（極大地）",
      "minorly（輕微地）"
    ],
    "answer": 2,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>greatly 意為「極大地」。<br><br>💡 <strong>整句翻譯：</strong><br>運動極大地將形塑我們的觀點。<br><br>💡 <strong>選項翻譯：</strong><br>「hardly」：幾乎沒有<br>「barely」：幾乎不<br>「greatly」：極大地<br>「minorly」：輕微地"
  },
  {
    "id": "e109",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Music might affect ______ our perspective.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "significantly（顯著地）",
      "rarely（很少地）",
      "barely（幾乎不）",
      "scarcely（幾乎沒有）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>significantly 意為「顯著地」。<br><br>💡 <strong>整句翻譯：</strong><br>音樂顯著地可能影響我們的觀點。<br><br>💡 <strong>選項翻譯：</strong><br>「significantly」：顯著地<br>「rarely」：很少地<br>「barely」：幾乎不<br>「scarcely」：幾乎沒有"
  },
  {
    "id": "e110",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Music has improved ______ our perspective.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "greatly（極大地）",
      "minorly（輕微地）",
      "hardly（幾乎沒有）",
      "barely（幾乎不）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>💡 <strong>答案解析：</strong><br>greatly 意為「極大地」。<br><br>💡 <strong>整句翻譯：</strong><br>音樂極大地改善了我們的觀點。<br><br>💡 <strong>選項翻譯：</strong><br>「greatly」：極大地<br>「minorly」：輕微地<br>「hardly」：幾乎沒有<br>「barely」：幾乎不"
  },
  {
    "id": "e111",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Music has improved ______ our daily lives.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "profoundly（深遠地）",
      "hardly（幾乎不）",
      "slightly（稍微地）",
      "superficially（表面地）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>💡 <strong>答案解析：</strong><br>profoundly 意為「深遠地」。<br><br>💡 <strong>整句翻譯：</strong><br>音樂深遠地改善了我們的日常生活。<br><br>💡 <strong>選項翻譯：</strong><br>「profoundly」：深遠地<br>「hardly」：幾乎不<br>「slightly」：稍微地<br>「superficially」：表面地"
  },
  {
    "id": "e112",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Reading can influence ______ human behavior.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "significantly（顯著地）",
      "rarely（很少地）",
      "barely（幾乎不）",
      "scarcely（幾乎沒有）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>significantly 意為「顯著地」。<br><br>💡 <strong>整句翻譯：</strong><br>閱讀顯著地能影響人類行為。<br><br>💡 <strong>選項翻譯：</strong><br>「significantly」：顯著地<br>「rarely」：很少地<br>「barely」：幾乎不<br>「scarcely」：幾乎沒有"
  },
  {
    "id": "e113",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Reading can influence ______ our perspective.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "barely（幾乎不）",
      "greatly（極大地）",
      "minorly（輕微地）",
      "hardly（幾乎沒有）"
    ],
    "answer": 1,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>greatly 意為「極大地」。<br><br>💡 <strong>整句翻譯：</strong><br>閱讀極大地能影響我們的觀點。<br><br>💡 <strong>選項翻譯：</strong><br>「barely」：幾乎不<br>「greatly」：極大地<br>「minorly」：輕微地<br>「hardly」：幾乎沒有"
  },
  {
    "id": "e114",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Music can influence ______ our daily lives.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "positively（正向地）",
      "poorly（差勁地）",
      "negatively（負面地）",
      "badly（糟糕地）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>positively 意為「正向地」。<br><br>💡 <strong>整句翻譯：</strong><br>音樂正向地能影響我們的日常生活。<br><br>💡 <strong>選項翻譯：</strong><br>「positively」：正向地<br>「poorly」：差勁地<br>「negatively」：負面地<br>「badly」：糟糕地"
  },
  {
    "id": "e115",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Music will shape ______ human behavior.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "greatly（極大地）",
      "minorly（輕微地）",
      "barely（幾乎不）",
      "hardly（幾乎沒有）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>greatly 意為「極大地」。<br><br>💡 <strong>整句翻譯：</strong><br>音樂極大地將形塑人類行為。<br><br>💡 <strong>選項翻譯：</strong><br>「greatly」：極大地<br>「minorly」：輕微地<br>「barely」：幾乎不<br>「hardly」：幾乎沒有"
  },
  {
    "id": "e116",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Teamwork will shape ______ our daily lives.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "rarely（很少地）",
      "significantly（顯著地）",
      "scarcely（幾乎沒有）",
      "barely（幾乎不）"
    ],
    "answer": 1,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>significantly 意為「顯著地」。<br><br>💡 <strong>整句翻譯：</strong><br>團隊合作顯著地將形塑我們的日常生活。<br><br>💡 <strong>選項翻譯：</strong><br>「rarely」：很少地<br>「significantly」：顯著地<br>「scarcely」：幾乎沒有<br>「barely」：幾乎不"
  },
  {
    "id": "e117",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Technology can influence ______ our daily lives.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "barely（幾乎不）",
      "rarely（很少地）",
      "scarcely（幾乎沒有）",
      "significantly（顯著地）"
    ],
    "answer": 3,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>significantly 意為「顯著地」。<br><br>💡 <strong>整句翻譯：</strong><br>科技顯著地能影響我們的日常生活。<br><br>💡 <strong>選項翻譯：</strong><br>「barely」：幾乎不<br>「rarely」：很少地<br>「scarcely」：幾乎沒有<br>「significantly」：顯著地"
  },
  {
    "id": "e118",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Education can influence ______ human behavior.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "significantly（顯著地）",
      "scarcely（幾乎沒有）",
      "rarely（很少地）",
      "barely（幾乎不）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>significantly 意為「顯著地」。<br><br>💡 <strong>整句翻譯：</strong><br>教育顯著地能影響人類行為。<br><br>💡 <strong>選項翻譯：</strong><br>「significantly」：顯著地<br>「scarcely」：幾乎沒有<br>「rarely」：很少地<br>「barely」：幾乎不"
  },
  {
    "id": "e119",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Music can influence ______ the whole world.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "dramatically（劇烈地）",
      "slowly（緩慢地）",
      "quietly（安靜地）",
      "gradually（逐漸地）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>dramatically 意為「劇烈地」。<br><br>💡 <strong>整句翻譯：</strong><br>音樂劇烈地能影響整個世界。<br><br>💡 <strong>選項翻譯：</strong><br>「dramatically」：劇烈地<br>「slowly」：緩慢地<br>「quietly」：安靜地<br>「gradually」：逐漸地"
  },
  {
    "id": "e120",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Communication has improved ______ the whole world.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "minorly（輕微地）",
      "hardly（幾乎沒有）",
      "greatly（極大地）",
      "barely（幾乎不）"
    ],
    "answer": 2,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>💡 <strong>答案解析：</strong><br>greatly 意為「極大地」。<br><br>💡 <strong>整句翻譯：</strong><br>溝通極大地改善了整個世界。<br><br>💡 <strong>選項翻譯：</strong><br>「minorly」：輕微地<br>「hardly」：幾乎沒有<br>「greatly」：極大地<br>「barely」：幾乎不"
  },
  {
    "id": "e121",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Communication has changed ______ our perspective.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "greatly（極大地）",
      "minorly（輕微地）",
      "hardly（幾乎沒有）",
      "barely（幾乎不）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>💡 <strong>答案解析：</strong><br>greatly 意為「極大地」。<br><br>💡 <strong>整句翻譯：</strong><br>溝通極大地改變了我們的觀點。<br><br>💡 <strong>選項翻譯：</strong><br>「greatly」：極大地<br>「minorly」：輕微地<br>「hardly」：幾乎沒有<br>「barely」：幾乎不"
  },
  {
    "id": "e122",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Music will shape ______ modern society.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "poorly（差勁地）",
      "positively（正向地）",
      "negatively（負面地）",
      "badly（糟糕地）"
    ],
    "answer": 1,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>positively 意為「正向地」。<br><br>💡 <strong>整句翻譯：</strong><br>音樂正向地將形塑現代社會。<br><br>💡 <strong>選項翻譯：</strong><br>「poorly」：差勁地<br>「positively」：正向地<br>「negatively」：負面地<br>「badly」：糟糕地"
  },
  {
    "id": "e123",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Exercising has changed ______ the whole world.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "hardly（幾乎不）",
      "profoundly（深遠地）",
      "slightly（稍微地）",
      "superficially（表面地）"
    ],
    "answer": 1,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>💡 <strong>答案解析：</strong><br>profoundly 意為「深遠地」。<br><br>💡 <strong>整句翻譯：</strong><br>運動深遠地改變了整個世界。<br><br>💡 <strong>選項翻譯：</strong><br>「hardly」：幾乎不<br>「profoundly」：深遠地<br>「slightly」：稍微地<br>「superficially」：表面地"
  },
  {
    "id": "e124",
    "category": "文意選填",
    "question": "<span class=\"en-assist\" data-tw=\"選出最適合填入空格的單字\">Education might affect ______ the whole world.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "positively（正向地）",
      "negatively（負面地）",
      "badly（糟糕地）",
      "poorly（差勁地）"
    ],
    "answer": 0,
    "difficulty": "中等",
    "explanation": "💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>💡 <strong>答案解析：</strong><br>positively 意為「正向地」。<br><br>💡 <strong>整句翻譯：</strong><br>教育正向地可能影響整個世界。<br><br>💡 <strong>選項翻譯：</strong><br>「positively」：正向地<br>「negatively」：負面地<br>「badly」：糟糕地<br>「poorly」：差勁地"
  },
  {
    "id": "e125",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"regular exercise ; not only broaden horizons but also ; improve quality of life\">規律的運動不僅能擴展視野，也能提升生活品質。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>regular exercise <span style=\"color:#ccc;\">|</span> not only broaden horizons but also <span style=\"color:#ccc;\">|</span> improve quality of life</div>",
    "reference": "Regular exercise not only broaden horizons but also improve quality of life.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：regular exercise (規律的運動)<br>動詞/句型：not only broaden horizons but also (不僅能擴展視野，也能)<br>受詞/補語：improve quality of life (提升生活品質。)"
  },
  {
    "id": "e126",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"listening to music ; help relax, furthermore ; promote interpersonal relationships\">聽音樂可以幫助我們放鬆，並且促進人際關係。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>listening to music <span style=\"color:#ccc;\">|</span> help relax, furthermore <span style=\"color:#ccc;\">|</span> promote interpersonal relationships</div>",
    "reference": "Listening to music help relax, furthermore promote interpersonal relationships.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：listening to music (聽音樂)<br>動詞/句型：help relax, furthermore (可以幫助我們放鬆，並且)<br>受詞/補語：promote interpersonal relationships (促進人際關係。)"
  },
  {
    "id": "e127",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"traveling ; key to success, at the same time ; relieve stress\">旅行是成功的關鍵，同時也能減輕壓力。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>traveling <span style=\"color:#ccc;\">|</span> key to success, at the same time <span style=\"color:#ccc;\">|</span> relieve stress</div>",
    "reference": "Traveling key to success, at the same time relieve stress.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：traveling (旅行)<br>動詞/句型：key to success, at the same time (是成功的關鍵，同時也能)<br>受詞/補語：relieve stress (減輕壓力。)"
  },
  {
    "id": "e128",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"regular exercise ; not only broaden horizons but also ; cultivate patience\">規律的運動不僅能擴展視野，也能培養耐心。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>regular exercise <span style=\"color:#ccc;\">|</span> not only broaden horizons but also <span style=\"color:#ccc;\">|</span> cultivate patience</div>",
    "reference": "Regular exercise not only broaden horizons but also cultivate patience.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：regular exercise (規律的運動)<br>動詞/句型：not only broaden horizons but also (不僅能擴展視野，也能)<br>受詞/補語：cultivate patience (培養耐心。)"
  },
  {
    "id": "e129",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"education ; key to success, at the same time ; increase work efficiency\">教育是成功的關鍵，同時也能增加工作效率。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>education <span style=\"color:#ccc;\">|</span> key to success, at the same time <span style=\"color:#ccc;\">|</span> increase work efficiency</div>",
    "reference": "Education key to success, at the same time increase work efficiency.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：education (教育)<br>動詞/句型：key to success, at the same time (是成功的關鍵，同時也能)<br>受詞/補語：increase work efficiency (增加工作效率。)"
  },
  {
    "id": "e130",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"traveling ; completely change the world, moreover ; increase work efficiency\">旅行已經徹底改變了世界，而且增加工作效率。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>traveling <span style=\"color:#ccc;\">|</span> completely change the world, moreover <span style=\"color:#ccc;\">|</span> increase work efficiency</div>",
    "reference": "Traveling completely change the world, moreover increase work efficiency.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：traveling (旅行)<br>動詞/句型：completely change the world, moreover (已經徹底改變了世界，而且)<br>受詞/補語：increase work efficiency (增加工作效率。)"
  },
  {
    "id": "e131",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"listening to music ; key to success, at the same time ; cultivate patience\">聽音樂是成功的關鍵，同時也能培養耐心。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>listening to music <span style=\"color:#ccc;\">|</span> key to success, at the same time <span style=\"color:#ccc;\">|</span> cultivate patience</div>",
    "reference": "Listening to music key to success, at the same time cultivate patience.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：listening to music (聽音樂)<br>動詞/句型：key to success, at the same time (是成功的關鍵，同時也能)<br>受詞/補語：cultivate patience (培養耐心。)"
  },
  {
    "id": "e132",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"education ; key to success, at the same time ; improve quality of life\">教育是成功的關鍵，同時也能提升生活品質。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>education <span style=\"color:#ccc;\">|</span> key to success, at the same time <span style=\"color:#ccc;\">|</span> improve quality of life</div>",
    "reference": "Education key to success, at the same time improve quality of life.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：education (教育)<br>動詞/句型：key to success, at the same time (是成功的關鍵，同時也能)<br>受詞/補語：improve quality of life (提升生活品質。)"
  },
  {
    "id": "e133",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"getting enough sleep ; completely change the world, moreover ; cultivate patience\">充足的睡眠已經徹底改變了世界，而且培養耐心。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>getting enough sleep <span style=\"color:#ccc;\">|</span> completely change the world, moreover <span style=\"color:#ccc;\">|</span> cultivate patience</div>",
    "reference": "Getting enough sleep completely change the world, moreover cultivate patience.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：getting enough sleep (充足的睡眠)<br>動詞/句型：completely change the world, moreover (已經徹底改變了世界，而且)<br>受詞/補語：cultivate patience (培養耐心。)"
  },
  {
    "id": "e134",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"listening to music ; not only broaden horizons but also ; cultivate patience\">聽音樂不僅能擴展視野，也能培養耐心。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>listening to music <span style=\"color:#ccc;\">|</span> not only broaden horizons but also <span style=\"color:#ccc;\">|</span> cultivate patience</div>",
    "reference": "Listening to music not only broaden horizons but also cultivate patience.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：listening to music (聽音樂)<br>動詞/句型：not only broaden horizons but also (不僅能擴展視野，也能)<br>受詞/補語：cultivate patience (培養耐心。)"
  },
  {
    "id": "e135",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"traveling ; not only broaden horizons but also ; cultivate patience\">旅行不僅能擴展視野，也能培養耐心。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>traveling <span style=\"color:#ccc;\">|</span> not only broaden horizons but also <span style=\"color:#ccc;\">|</span> cultivate patience</div>",
    "reference": "Traveling not only broaden horizons but also cultivate patience.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：traveling (旅行)<br>動詞/句型：not only broaden horizons but also (不僅能擴展視野，也能)<br>受詞/補語：cultivate patience (培養耐心。)"
  },
  {
    "id": "e136",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"volunteering ; great impact, especially ; increase work efficiency\">當志工對我們有很大的影響，尤其是增加工作效率。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>volunteering <span style=\"color:#ccc;\">|</span> great impact, especially <span style=\"color:#ccc;\">|</span> increase work efficiency</div>",
    "reference": "Volunteering great impact, especially increase work efficiency.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：volunteering (當志工)<br>動詞/句型：great impact, especially (對我們有很大的影響，尤其是)<br>受詞/補語：increase work efficiency (增加工作效率。)"
  },
  {
    "id": "e137",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"reading ; help relax, furthermore ; improve quality of life\">閱讀可以幫助我們放鬆，並且提升生活品質。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>reading <span style=\"color:#ccc;\">|</span> help relax, furthermore <span style=\"color:#ccc;\">|</span> improve quality of life</div>",
    "reference": "Reading help relax, furthermore improve quality of life.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：reading (閱讀)<br>動詞/句型：help relax, furthermore (可以幫助我們放鬆，並且)<br>受詞/補語：improve quality of life (提升生活品質。)"
  },
  {
    "id": "e138",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"learning a new language ; help relax, furthermore ; relieve stress\">學習新語言可以幫助我們放鬆，並且減輕壓力。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>learning a new language <span style=\"color:#ccc;\">|</span> help relax, furthermore <span style=\"color:#ccc;\">|</span> relieve stress</div>",
    "reference": "Learning a new language help relax, furthermore relieve stress.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：learning a new language (學習新語言)<br>動詞/句型：help relax, furthermore (可以幫助我們放鬆，並且)<br>受詞/補語：relieve stress (減輕壓力。)"
  },
  {
    "id": "e139",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"eating a healthy diet ; completely change the world, moreover ; improve quality of life\">健康飲食已經徹底改變了世界，而且提升生活品質。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>eating a healthy diet <span style=\"color:#ccc;\">|</span> completely change the world, moreover <span style=\"color:#ccc;\">|</span> improve quality of life</div>",
    "reference": "Eating a healthy diet completely change the world, moreover improve quality of life.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：eating a healthy diet (健康飲食)<br>動詞/句型：completely change the world, moreover (已經徹底改變了世界，而且)<br>受詞/補語：improve quality of life (提升生活品質。)"
  },
  {
    "id": "e140",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"traveling ; great impact, especially ; promote interpersonal relationships\">旅行對我們有很大的影響，尤其是促進人際關係。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>traveling <span style=\"color:#ccc;\">|</span> great impact, especially <span style=\"color:#ccc;\">|</span> promote interpersonal relationships</div>",
    "reference": "Traveling great impact, especially promote interpersonal relationships.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：traveling (旅行)<br>動詞/句型：great impact, especially (對我們有很大的影響，尤其是)<br>受詞/補語：promote interpersonal relationships (促進人際關係。)"
  },
  {
    "id": "e141",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"technology ; help relax, furthermore ; cultivate patience\">科技可以幫助我們放鬆，並且培養耐心。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>technology <span style=\"color:#ccc;\">|</span> help relax, furthermore <span style=\"color:#ccc;\">|</span> cultivate patience</div>",
    "reference": "Technology help relax, furthermore cultivate patience.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：technology (科技)<br>動詞/句型：help relax, furthermore (可以幫助我們放鬆，並且)<br>受詞/補語：cultivate patience (培養耐心。)"
  },
  {
    "id": "e142",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"regular exercise ; great impact, especially ; promote interpersonal relationships\">規律的運動對我們有很大的影響，尤其是促進人際關係。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>regular exercise <span style=\"color:#ccc;\">|</span> great impact, especially <span style=\"color:#ccc;\">|</span> promote interpersonal relationships</div>",
    "reference": "Regular exercise great impact, especially promote interpersonal relationships.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：regular exercise (規律的運動)<br>動詞/句型：great impact, especially (對我們有很大的影響，尤其是)<br>受詞/補語：promote interpersonal relationships (促進人際關係。)"
  },
  {
    "id": "e143",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"listening to music ; completely change the world, moreover ; improve quality of life\">聽音樂已經徹底改變了世界，而且提升生活品質。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>listening to music <span style=\"color:#ccc;\">|</span> completely change the world, moreover <span style=\"color:#ccc;\">|</span> improve quality of life</div>",
    "reference": "Listening to music completely change the world, moreover improve quality of life.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：listening to music (聽音樂)<br>動詞/句型：completely change the world, moreover (已經徹底改變了世界，而且)<br>受詞/補語：improve quality of life (提升生活品質。)"
  },
  {
    "id": "e144",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"reading ; not only broaden horizons but also ; cultivate patience\">閱讀不僅能擴展視野，也能培養耐心。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>reading <span style=\"color:#ccc;\">|</span> not only broaden horizons but also <span style=\"color:#ccc;\">|</span> cultivate patience</div>",
    "reference": "Reading not only broaden horizons but also cultivate patience.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：reading (閱讀)<br>動詞/句型：not only broaden horizons but also (不僅能擴展視野，也能)<br>受詞/補語：cultivate patience (培養耐心。)"
  },
  {
    "id": "e145",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"getting enough sleep ; key to success, at the same time ; cultivate patience\">充足的睡眠是成功的關鍵，同時也能培養耐心。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>getting enough sleep <span style=\"color:#ccc;\">|</span> key to success, at the same time <span style=\"color:#ccc;\">|</span> cultivate patience</div>",
    "reference": "Getting enough sleep key to success, at the same time cultivate patience.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：getting enough sleep (充足的睡眠)<br>動詞/句型：key to success, at the same time (是成功的關鍵，同時也能)<br>受詞/補語：cultivate patience (培養耐心。)"
  },
  {
    "id": "e146",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"reading ; help relax, furthermore ; promote interpersonal relationships\">閱讀可以幫助我們放鬆，並且促進人際關係。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>reading <span style=\"color:#ccc;\">|</span> help relax, furthermore <span style=\"color:#ccc;\">|</span> promote interpersonal relationships</div>",
    "reference": "Reading help relax, furthermore promote interpersonal relationships.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：reading (閱讀)<br>動詞/句型：help relax, furthermore (可以幫助我們放鬆，並且)<br>受詞/補語：promote interpersonal relationships (促進人際關係。)"
  },
  {
    "id": "e147",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"reading ; completely change the world, moreover ; promote interpersonal relationships\">閱讀已經徹底改變了世界，而且促進人際關係。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>reading <span style=\"color:#ccc;\">|</span> completely change the world, moreover <span style=\"color:#ccc;\">|</span> promote interpersonal relationships</div>",
    "reference": "Reading completely change the world, moreover promote interpersonal relationships.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：reading (閱讀)<br>動詞/句型：completely change the world, moreover (已經徹底改變了世界，而且)<br>受詞/補語：promote interpersonal relationships (促進人際關係。)"
  },
  {
    "id": "e148",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"volunteering ; not only broaden horizons but also ; promote interpersonal relationships\">當志工不僅能擴展視野，也能促進人際關係。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>volunteering <span style=\"color:#ccc;\">|</span> not only broaden horizons but also <span style=\"color:#ccc;\">|</span> promote interpersonal relationships</div>",
    "reference": "Volunteering not only broaden horizons but also promote interpersonal relationships.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：volunteering (當志工)<br>動詞/句型：not only broaden horizons but also (不僅能擴展視野，也能)<br>受詞/補語：promote interpersonal relationships (促進人際關係。)"
  },
  {
    "id": "e149",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"traveling ; great impact, especially ; relieve stress\">旅行對我們有很大的影響，尤其是減輕壓力。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>traveling <span style=\"color:#ccc;\">|</span> great impact, especially <span style=\"color:#ccc;\">|</span> relieve stress</div>",
    "reference": "Traveling great impact, especially relieve stress.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：traveling (旅行)<br>動詞/句型：great impact, especially (對我們有很大的影響，尤其是)<br>受詞/補語：relieve stress (減輕壓力。)"
  },
  {
    "id": "e150",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"eating a healthy diet ; completely change the world, moreover ; increase work efficiency\">健康飲食已經徹底改變了世界，而且增加工作效率。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>eating a healthy diet <span style=\"color:#ccc;\">|</span> completely change the world, moreover <span style=\"color:#ccc;\">|</span> increase work efficiency</div>",
    "reference": "Eating a healthy diet completely change the world, moreover increase work efficiency.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：eating a healthy diet (健康飲食)<br>動詞/句型：completely change the world, moreover (已經徹底改變了世界，而且)<br>受詞/補語：increase work efficiency (增加工作效率。)"
  },
  {
    "id": "e151",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"regular exercise ; key to success, at the same time ; relieve stress\">規律的運動是成功的關鍵，同時也能減輕壓力。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>regular exercise <span style=\"color:#ccc;\">|</span> key to success, at the same time <span style=\"color:#ccc;\">|</span> relieve stress</div>",
    "reference": "Regular exercise key to success, at the same time relieve stress.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：regular exercise (規律的運動)<br>動詞/句型：key to success, at the same time (是成功的關鍵，同時也能)<br>受詞/補語：relieve stress (減輕壓力。)"
  },
  {
    "id": "e152",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"eating a healthy diet ; great impact, especially ; cultivate patience\">健康飲食對我們有很大的影響，尤其是培養耐心。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>eating a healthy diet <span style=\"color:#ccc;\">|</span> great impact, especially <span style=\"color:#ccc;\">|</span> cultivate patience</div>",
    "reference": "Eating a healthy diet great impact, especially cultivate patience.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：eating a healthy diet (健康飲食)<br>動詞/句型：great impact, especially (對我們有很大的影響，尤其是)<br>受詞/補語：cultivate patience (培養耐心。)"
  },
  {
    "id": "e153",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"traveling ; help relax, furthermore ; improve quality of life\">旅行可以幫助我們放鬆，並且提升生活品質。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>traveling <span style=\"color:#ccc;\">|</span> help relax, furthermore <span style=\"color:#ccc;\">|</span> improve quality of life</div>",
    "reference": "Traveling help relax, furthermore improve quality of life.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：traveling (旅行)<br>動詞/句型：help relax, furthermore (可以幫助我們放鬆，並且)<br>受詞/補語：improve quality of life (提升生活品質。)"
  },
  {
    "id": "e154",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"traveling ; key to success, at the same time ; cultivate patience\">旅行是成功的關鍵，同時也能培養耐心。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>traveling <span style=\"color:#ccc;\">|</span> key to success, at the same time <span style=\"color:#ccc;\">|</span> cultivate patience</div>",
    "reference": "Traveling key to success, at the same time cultivate patience.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：traveling (旅行)<br>動詞/句型：key to success, at the same time (是成功的關鍵，同時也能)<br>受詞/補語：cultivate patience (培養耐心。)"
  },
  {
    "id": "e155",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"learning a new language ; great impact, especially ; increase work efficiency\">學習新語言對我們有很大的影響，尤其是增加工作效率。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>learning a new language <span style=\"color:#ccc;\">|</span> great impact, especially <span style=\"color:#ccc;\">|</span> increase work efficiency</div>",
    "reference": "Learning a new language great impact, especially increase work efficiency.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：learning a new language (學習新語言)<br>動詞/句型：great impact, especially (對我們有很大的影響，尤其是)<br>受詞/補語：increase work efficiency (增加工作效率。)"
  },
  {
    "id": "e156",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"reading ; completely change the world, moreover ; relieve stress\">閱讀已經徹底改變了世界，而且減輕壓力。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>reading <span style=\"color:#ccc;\">|</span> completely change the world, moreover <span style=\"color:#ccc;\">|</span> relieve stress</div>",
    "reference": "Reading completely change the world, moreover relieve stress.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：reading (閱讀)<br>動詞/句型：completely change the world, moreover (已經徹底改變了世界，而且)<br>受詞/補語：relieve stress (減輕壓力。)"
  },
  {
    "id": "e157",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"eating a healthy diet ; help relax, furthermore ; relieve stress\">健康飲食可以幫助我們放鬆，並且減輕壓力。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>eating a healthy diet <span style=\"color:#ccc;\">|</span> help relax, furthermore <span style=\"color:#ccc;\">|</span> relieve stress</div>",
    "reference": "Eating a healthy diet help relax, furthermore relieve stress.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：eating a healthy diet (健康飲食)<br>動詞/句型：help relax, furthermore (可以幫助我們放鬆，並且)<br>受詞/補語：relieve stress (減輕壓力。)"
  },
  {
    "id": "e158",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"learning a new language ; completely change the world, moreover ; improve quality of life\">學習新語言已經徹底改變了世界，而且提升生活品質。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>learning a new language <span style=\"color:#ccc;\">|</span> completely change the world, moreover <span style=\"color:#ccc;\">|</span> improve quality of life</div>",
    "reference": "Learning a new language completely change the world, moreover improve quality of life.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：learning a new language (學習新語言)<br>動詞/句型：completely change the world, moreover (已經徹底改變了世界，而且)<br>受詞/補語：improve quality of life (提升生活品質。)"
  },
  {
    "id": "e159",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"eating a healthy diet ; not only broaden horizons but also ; relieve stress\">健康飲食不僅能擴展視野，也能減輕壓力。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>eating a healthy diet <span style=\"color:#ccc;\">|</span> not only broaden horizons but also <span style=\"color:#ccc;\">|</span> relieve stress</div>",
    "reference": "Eating a healthy diet not only broaden horizons but also relieve stress.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：eating a healthy diet (健康飲食)<br>動詞/句型：not only broaden horizons but also (不僅能擴展視野，也能)<br>受詞/補語：relieve stress (減輕壓力。)"
  },
  {
    "id": "e160",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"listening to music ; great impact, especially ; increase work efficiency\">聽音樂對我們有很大的影響，尤其是增加工作效率。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>listening to music <span style=\"color:#ccc;\">|</span> great impact, especially <span style=\"color:#ccc;\">|</span> increase work efficiency</div>",
    "reference": "Listening to music great impact, especially increase work efficiency.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：listening to music (聽音樂)<br>動詞/句型：great impact, especially (對我們有很大的影響，尤其是)<br>受詞/補語：increase work efficiency (增加工作效率。)"
  },
  {
    "id": "e161",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"listening to music ; key to success, at the same time ; relieve stress\">聽音樂是成功的關鍵，同時也能減輕壓力。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>listening to music <span style=\"color:#ccc;\">|</span> key to success, at the same time <span style=\"color:#ccc;\">|</span> relieve stress</div>",
    "reference": "Listening to music key to success, at the same time relieve stress.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：listening to music (聽音樂)<br>動詞/句型：key to success, at the same time (是成功的關鍵，同時也能)<br>受詞/補語：relieve stress (減輕壓力。)"
  },
  {
    "id": "e162",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"reading ; completely change the world, moreover ; improve quality of life\">閱讀已經徹底改變了世界，而且提升生活品質。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>reading <span style=\"color:#ccc;\">|</span> completely change the world, moreover <span style=\"color:#ccc;\">|</span> improve quality of life</div>",
    "reference": "Reading completely change the world, moreover improve quality of life.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：reading (閱讀)<br>動詞/句型：completely change the world, moreover (已經徹底改變了世界，而且)<br>受詞/補語：improve quality of life (提升生活品質。)"
  },
  {
    "id": "e163",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"technology ; not only broaden horizons but also ; promote interpersonal relationships\">科技不僅能擴展視野，也能促進人際關係。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>technology <span style=\"color:#ccc;\">|</span> not only broaden horizons but also <span style=\"color:#ccc;\">|</span> promote interpersonal relationships</div>",
    "reference": "Technology not only broaden horizons but also promote interpersonal relationships.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：technology (科技)<br>動詞/句型：not only broaden horizons but also (不僅能擴展視野，也能)<br>受詞/補語：promote interpersonal relationships (促進人際關係。)"
  },
  {
    "id": "e164",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"regular exercise ; key to success, at the same time ; increase work efficiency\">規律的運動是成功的關鍵，同時也能增加工作效率。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>regular exercise <span style=\"color:#ccc;\">|</span> key to success, at the same time <span style=\"color:#ccc;\">|</span> increase work efficiency</div>",
    "reference": "Regular exercise key to success, at the same time increase work efficiency.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：regular exercise (規律的運動)<br>動詞/句型：key to success, at the same time (是成功的關鍵，同時也能)<br>受詞/補語：increase work efficiency (增加工作效率。)"
  },
  {
    "id": "e165",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"regular exercise ; key to success, at the same time ; cultivate patience\">規律的運動是成功的關鍵，同時也能培養耐心。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>regular exercise <span style=\"color:#ccc;\">|</span> key to success, at the same time <span style=\"color:#ccc;\">|</span> cultivate patience</div>",
    "reference": "Regular exercise key to success, at the same time cultivate patience.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：regular exercise (規律的運動)<br>動詞/句型：key to success, at the same time (是成功的關鍵，同時也能)<br>受詞/補語：cultivate patience (培養耐心。)"
  },
  {
    "id": "e166",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"volunteering ; key to success, at the same time ; relieve stress\">當志工是成功的關鍵，同時也能減輕壓力。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>volunteering <span style=\"color:#ccc;\">|</span> key to success, at the same time <span style=\"color:#ccc;\">|</span> relieve stress</div>",
    "reference": "Volunteering key to success, at the same time relieve stress.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：volunteering (當志工)<br>動詞/句型：key to success, at the same time (是成功的關鍵，同時也能)<br>受詞/補語：relieve stress (減輕壓力。)"
  },
  {
    "id": "e167",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"traveling ; key to success, at the same time ; increase work efficiency\">旅行是成功的關鍵，同時也能增加工作效率。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>traveling <span style=\"color:#ccc;\">|</span> key to success, at the same time <span style=\"color:#ccc;\">|</span> increase work efficiency</div>",
    "reference": "Traveling key to success, at the same time increase work efficiency.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：traveling (旅行)<br>動詞/句型：key to success, at the same time (是成功的關鍵，同時也能)<br>受詞/補語：increase work efficiency (增加工作效率。)"
  },
  {
    "id": "e168",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"getting enough sleep ; key to success, at the same time ; increase work efficiency\">充足的睡眠是成功的關鍵，同時也能增加工作效率。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>getting enough sleep <span style=\"color:#ccc;\">|</span> key to success, at the same time <span style=\"color:#ccc;\">|</span> increase work efficiency</div>",
    "reference": "Getting enough sleep key to success, at the same time increase work efficiency.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：getting enough sleep (充足的睡眠)<br>動詞/句型：key to success, at the same time (是成功的關鍵，同時也能)<br>受詞/補語：increase work efficiency (增加工作效率。)"
  },
  {
    "id": "e169",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"regular exercise ; help relax, furthermore ; cultivate patience\">規律的運動可以幫助我們放鬆，並且培養耐心。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>regular exercise <span style=\"color:#ccc;\">|</span> help relax, furthermore <span style=\"color:#ccc;\">|</span> cultivate patience</div>",
    "reference": "Regular exercise help relax, furthermore cultivate patience.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：regular exercise (規律的運動)<br>動詞/句型：help relax, furthermore (可以幫助我們放鬆，並且)<br>受詞/補語：cultivate patience (培養耐心。)"
  },
  {
    "id": "e170",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"volunteering ; completely change the world, moreover ; relieve stress\">當志工已經徹底改變了世界，而且減輕壓力。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>volunteering <span style=\"color:#ccc;\">|</span> completely change the world, moreover <span style=\"color:#ccc;\">|</span> relieve stress</div>",
    "reference": "Volunteering completely change the world, moreover relieve stress.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：volunteering (當志工)<br>動詞/句型：completely change the world, moreover (已經徹底改變了世界，而且)<br>受詞/補語：relieve stress (減輕壓力。)"
  },
  {
    "id": "e171",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"reading ; key to success, at the same time ; relieve stress\">閱讀是成功的關鍵，同時也能減輕壓力。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>reading <span style=\"color:#ccc;\">|</span> key to success, at the same time <span style=\"color:#ccc;\">|</span> relieve stress</div>",
    "reference": "Reading key to success, at the same time relieve stress.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：reading (閱讀)<br>動詞/句型：key to success, at the same time (是成功的關鍵，同時也能)<br>受詞/補語：relieve stress (減輕壓力。)"
  },
  {
    "id": "e172",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"education ; great impact, especially ; increase work efficiency\">教育對我們有很大的影響，尤其是增加工作效率。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>education <span style=\"color:#ccc;\">|</span> great impact, especially <span style=\"color:#ccc;\">|</span> increase work efficiency</div>",
    "reference": "Education great impact, especially increase work efficiency.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：education (教育)<br>動詞/句型：great impact, especially (對我們有很大的影響，尤其是)<br>受詞/補語：increase work efficiency (增加工作效率。)"
  },
  {
    "id": "e173",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"listening to music ; completely change the world, moreover ; increase work efficiency\">聽音樂已經徹底改變了世界，而且增加工作效率。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>listening to music <span style=\"color:#ccc;\">|</span> completely change the world, moreover <span style=\"color:#ccc;\">|</span> increase work efficiency</div>",
    "reference": "Listening to music completely change the world, moreover increase work efficiency.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：listening to music (聽音樂)<br>動詞/句型：completely change the world, moreover (已經徹底改變了世界，而且)<br>受詞/補語：increase work efficiency (增加工作效率。)"
  },
  {
    "id": "e174",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"getting enough sleep ; completely change the world, moreover ; relieve stress\">充足的睡眠已經徹底改變了世界，而且減輕壓力。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>getting enough sleep <span style=\"color:#ccc;\">|</span> completely change the world, moreover <span style=\"color:#ccc;\">|</span> relieve stress</div>",
    "reference": "Getting enough sleep completely change the world, moreover relieve stress.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：getting enough sleep (充足的睡眠)<br>動詞/句型：completely change the world, moreover (已經徹底改變了世界，而且)<br>受詞/補語：relieve stress (減輕壓力。)"
  },
  {
    "id": "e175",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"getting enough sleep ; help relax, furthermore ; promote interpersonal relationships\">充足的睡眠可以幫助我們放鬆，並且促進人際關係。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>getting enough sleep <span style=\"color:#ccc;\">|</span> help relax, furthermore <span style=\"color:#ccc;\">|</span> promote interpersonal relationships</div>",
    "reference": "Getting enough sleep help relax, furthermore promote interpersonal relationships.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：getting enough sleep (充足的睡眠)<br>動詞/句型：help relax, furthermore (可以幫助我們放鬆，並且)<br>受詞/補語：promote interpersonal relationships (促進人際關係。)"
  },
  {
    "id": "e176",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"volunteering ; great impact, especially ; promote interpersonal relationships\">當志工對我們有很大的影響，尤其是促進人際關係。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>volunteering <span style=\"color:#ccc;\">|</span> great impact, especially <span style=\"color:#ccc;\">|</span> promote interpersonal relationships</div>",
    "reference": "Volunteering great impact, especially promote interpersonal relationships.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：volunteering (當志工)<br>動詞/句型：great impact, especially (對我們有很大的影響，尤其是)<br>受詞/補語：promote interpersonal relationships (促進人際關係。)"
  },
  {
    "id": "e177",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"reading ; great impact, especially ; increase work efficiency\">閱讀對我們有很大的影響，尤其是增加工作效率。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>reading <span style=\"color:#ccc;\">|</span> great impact, especially <span style=\"color:#ccc;\">|</span> increase work efficiency</div>",
    "reference": "Reading great impact, especially increase work efficiency.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：reading (閱讀)<br>動詞/句型：great impact, especially (對我們有很大的影響，尤其是)<br>受詞/補語：increase work efficiency (增加工作效率。)"
  },
  {
    "id": "e178",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"education ; not only broaden horizons but also ; relieve stress\">教育不僅能擴展視野，也能減輕壓力。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>education <span style=\"color:#ccc;\">|</span> not only broaden horizons but also <span style=\"color:#ccc;\">|</span> relieve stress</div>",
    "reference": "Education not only broaden horizons but also relieve stress.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：education (教育)<br>動詞/句型：not only broaden horizons but also (不僅能擴展視野，也能)<br>受詞/補語：relieve stress (減輕壓力。)"
  },
  {
    "id": "e179",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"volunteering ; not only broaden horizons but also ; improve quality of life\">當志工不僅能擴展視野，也能提升生活品質。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>volunteering <span style=\"color:#ccc;\">|</span> not only broaden horizons but also <span style=\"color:#ccc;\">|</span> improve quality of life</div>",
    "reference": "Volunteering not only broaden horizons but also improve quality of life.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：volunteering (當志工)<br>動詞/句型：not only broaden horizons but also (不僅能擴展視野，也能)<br>受詞/補語：improve quality of life (提升生活品質。)"
  },
  {
    "id": "e180",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"learning a new language ; key to success, at the same time ; relieve stress\">學習新語言是成功的關鍵，同時也能減輕壓力。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>learning a new language <span style=\"color:#ccc;\">|</span> key to success, at the same time <span style=\"color:#ccc;\">|</span> relieve stress</div>",
    "reference": "Learning a new language key to success, at the same time relieve stress.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：learning a new language (學習新語言)<br>動詞/句型：key to success, at the same time (是成功的關鍵，同時也能)<br>受詞/補語：relieve stress (減輕壓力。)"
  },
  {
    "id": "e181",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"getting enough sleep ; great impact, especially ; relieve stress\">充足的睡眠對我們有很大的影響，尤其是減輕壓力。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>getting enough sleep <span style=\"color:#ccc;\">|</span> great impact, especially <span style=\"color:#ccc;\">|</span> relieve stress</div>",
    "reference": "Getting enough sleep great impact, especially relieve stress.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：getting enough sleep (充足的睡眠)<br>動詞/句型：great impact, especially (對我們有很大的影響，尤其是)<br>受詞/補語：relieve stress (減輕壓力。)"
  },
  {
    "id": "e182",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"education ; great impact, especially ; improve quality of life\">教育對我們有很大的影響，尤其是提升生活品質。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>education <span style=\"color:#ccc;\">|</span> great impact, especially <span style=\"color:#ccc;\">|</span> improve quality of life</div>",
    "reference": "Education great impact, especially improve quality of life.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：education (教育)<br>動詞/句型：great impact, especially (對我們有很大的影響，尤其是)<br>受詞/補語：improve quality of life (提升生活品質。)"
  },
  {
    "id": "e183",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"getting enough sleep ; not only broaden horizons but also ; relieve stress\">充足的睡眠不僅能擴展視野，也能減輕壓力。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>getting enough sleep <span style=\"color:#ccc;\">|</span> not only broaden horizons but also <span style=\"color:#ccc;\">|</span> relieve stress</div>",
    "reference": "Getting enough sleep not only broaden horizons but also relieve stress.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：getting enough sleep (充足的睡眠)<br>動詞/句型：not only broaden horizons but also (不僅能擴展視野，也能)<br>受詞/補語：relieve stress (減輕壓力。)"
  },
  {
    "id": "e184",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"volunteering ; completely change the world, moreover ; increase work efficiency\">當志工已經徹底改變了世界，而且增加工作效率。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>volunteering <span style=\"color:#ccc;\">|</span> completely change the world, moreover <span style=\"color:#ccc;\">|</span> increase work efficiency</div>",
    "reference": "Volunteering completely change the world, moreover increase work efficiency.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：volunteering (當志工)<br>動詞/句型：completely change the world, moreover (已經徹底改變了世界，而且)<br>受詞/補語：increase work efficiency (增加工作效率。)"
  },
  {
    "id": "e185",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"reading ; not only broaden horizons but also ; increase work efficiency\">閱讀不僅能擴展視野，也能增加工作效率。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>reading <span style=\"color:#ccc;\">|</span> not only broaden horizons but also <span style=\"color:#ccc;\">|</span> increase work efficiency</div>",
    "reference": "Reading not only broaden horizons but also increase work efficiency.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：reading (閱讀)<br>動詞/句型：not only broaden horizons but also (不僅能擴展視野，也能)<br>受詞/補語：increase work efficiency (增加工作效率。)"
  },
  {
    "id": "e186",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"reading ; key to success, at the same time ; promote interpersonal relationships\">閱讀是成功的關鍵，同時也能促進人際關係。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>reading <span style=\"color:#ccc;\">|</span> key to success, at the same time <span style=\"color:#ccc;\">|</span> promote interpersonal relationships</div>",
    "reference": "Reading key to success, at the same time promote interpersonal relationships.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：reading (閱讀)<br>動詞/句型：key to success, at the same time (是成功的關鍵，同時也能)<br>受詞/補語：promote interpersonal relationships (促進人際關係。)"
  },
  {
    "id": "e187",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"technology ; great impact, especially ; promote interpersonal relationships\">科技對我們有很大的影響，尤其是促進人際關係。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>technology <span style=\"color:#ccc;\">|</span> great impact, especially <span style=\"color:#ccc;\">|</span> promote interpersonal relationships</div>",
    "reference": "Technology great impact, especially promote interpersonal relationships.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：technology (科技)<br>動詞/句型：great impact, especially (對我們有很大的影響，尤其是)<br>受詞/補語：promote interpersonal relationships (促進人際關係。)"
  },
  {
    "id": "e188",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"technology ; not only broaden horizons but also ; cultivate patience\">科技不僅能擴展視野，也能培養耐心。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>technology <span style=\"color:#ccc;\">|</span> not only broaden horizons but also <span style=\"color:#ccc;\">|</span> cultivate patience</div>",
    "reference": "Technology not only broaden horizons but also cultivate patience.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：technology (科技)<br>動詞/句型：not only broaden horizons but also (不僅能擴展視野，也能)<br>受詞/補語：cultivate patience (培養耐心。)"
  },
  {
    "id": "e189",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"learning a new language ; great impact, especially ; improve quality of life\">學習新語言對我們有很大的影響，尤其是提升生活品質。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>learning a new language <span style=\"color:#ccc;\">|</span> great impact, especially <span style=\"color:#ccc;\">|</span> improve quality of life</div>",
    "reference": "Learning a new language great impact, especially improve quality of life.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：learning a new language (學習新語言)<br>動詞/句型：great impact, especially (對我們有很大的影響，尤其是)<br>受詞/補語：improve quality of life (提升生活品質。)"
  },
  {
    "id": "e190",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"volunteering ; completely change the world, moreover ; cultivate patience\">當志工已經徹底改變了世界，而且培養耐心。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>volunteering <span style=\"color:#ccc;\">|</span> completely change the world, moreover <span style=\"color:#ccc;\">|</span> cultivate patience</div>",
    "reference": "Volunteering completely change the world, moreover cultivate patience.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：volunteering (當志工)<br>動詞/句型：completely change the world, moreover (已經徹底改變了世界，而且)<br>受詞/補語：cultivate patience (培養耐心。)"
  },
  {
    "id": "e191",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"technology ; great impact, especially ; improve quality of life\">科技對我們有很大的影響，尤其是提升生活品質。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>technology <span style=\"color:#ccc;\">|</span> great impact, especially <span style=\"color:#ccc;\">|</span> improve quality of life</div>",
    "reference": "Technology great impact, especially improve quality of life.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：technology (科技)<br>動詞/句型：great impact, especially (對我們有很大的影響，尤其是)<br>受詞/補語：improve quality of life (提升生活品質。)"
  },
  {
    "id": "e192",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"learning a new language ; great impact, especially ; promote interpersonal relationships\">學習新語言對我們有很大的影響，尤其是促進人際關係。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>learning a new language <span style=\"color:#ccc;\">|</span> great impact, especially <span style=\"color:#ccc;\">|</span> promote interpersonal relationships</div>",
    "reference": "Learning a new language great impact, especially promote interpersonal relationships.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：learning a new language (學習新語言)<br>動詞/句型：great impact, especially (對我們有很大的影響，尤其是)<br>受詞/補語：promote interpersonal relationships (促進人際關係。)"
  },
  {
    "id": "e193",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"reading ; not only broaden horizons but also ; promote interpersonal relationships\">閱讀不僅能擴展視野，也能促進人際關係。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>reading <span style=\"color:#ccc;\">|</span> not only broaden horizons but also <span style=\"color:#ccc;\">|</span> promote interpersonal relationships</div>",
    "reference": "Reading not only broaden horizons but also promote interpersonal relationships.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：reading (閱讀)<br>動詞/句型：not only broaden horizons but also (不僅能擴展視野，也能)<br>受詞/補語：promote interpersonal relationships (促進人際關係。)"
  },
  {
    "id": "e194",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"volunteering ; completely change the world, moreover ; improve quality of life\">當志工已經徹底改變了世界，而且提升生活品質。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>volunteering <span style=\"color:#ccc;\">|</span> completely change the world, moreover <span style=\"color:#ccc;\">|</span> improve quality of life</div>",
    "reference": "Volunteering completely change the world, moreover improve quality of life.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：volunteering (當志工)<br>動詞/句型：completely change the world, moreover (已經徹底改變了世界，而且)<br>受詞/補語：improve quality of life (提升生活品質。)"
  },
  {
    "id": "e195",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"technology ; help relax, furthermore ; relieve stress\">科技可以幫助我們放鬆，並且減輕壓力。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>technology <span style=\"color:#ccc;\">|</span> help relax, furthermore <span style=\"color:#ccc;\">|</span> relieve stress</div>",
    "reference": "Technology help relax, furthermore relieve stress.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：technology (科技)<br>動詞/句型：help relax, furthermore (可以幫助我們放鬆，並且)<br>受詞/補語：relieve stress (減輕壓力。)"
  },
  {
    "id": "e196",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"traveling ; key to success, at the same time ; improve quality of life\">旅行是成功的關鍵，同時也能提升生活品質。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>traveling <span style=\"color:#ccc;\">|</span> key to success, at the same time <span style=\"color:#ccc;\">|</span> improve quality of life</div>",
    "reference": "Traveling key to success, at the same time improve quality of life.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：traveling (旅行)<br>動詞/句型：key to success, at the same time (是成功的關鍵，同時也能)<br>受詞/補語：improve quality of life (提升生活品質。)"
  },
  {
    "id": "e197",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"getting enough sleep ; key to success, at the same time ; promote interpersonal relationships\">充足的睡眠是成功的關鍵，同時也能促進人際關係。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>getting enough sleep <span style=\"color:#ccc;\">|</span> key to success, at the same time <span style=\"color:#ccc;\">|</span> promote interpersonal relationships</div>",
    "reference": "Getting enough sleep key to success, at the same time promote interpersonal relationships.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：getting enough sleep (充足的睡眠)<br>動詞/句型：key to success, at the same time (是成功的關鍵，同時也能)<br>受詞/補語：promote interpersonal relationships (促進人際關係。)"
  },
  {
    "id": "e198",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"education ; completely change the world, moreover ; relieve stress\">教育已經徹底改變了世界，而且減輕壓力。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>education <span style=\"color:#ccc;\">|</span> completely change the world, moreover <span style=\"color:#ccc;\">|</span> relieve stress</div>",
    "reference": "Education completely change the world, moreover relieve stress.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：education (教育)<br>動詞/句型：completely change the world, moreover (已經徹底改變了世界，而且)<br>受詞/補語：relieve stress (減輕壓力。)"
  },
  {
    "id": "e199",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"technology ; key to success, at the same time ; cultivate patience\">科技是成功的關鍵，同時也能培養耐心。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>technology <span style=\"color:#ccc;\">|</span> key to success, at the same time <span style=\"color:#ccc;\">|</span> cultivate patience</div>",
    "reference": "Technology key to success, at the same time cultivate patience.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：technology (科技)<br>動詞/句型：key to success, at the same time (是成功的關鍵，同時也能)<br>受詞/補語：cultivate patience (培養耐心。)"
  },
  {
    "id": "e200",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"learning a new language ; completely change the world, moreover ; cultivate patience\">學習新語言已經徹底改變了世界，而且培養耐心。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>learning a new language <span style=\"color:#ccc;\">|</span> completely change the world, moreover <span style=\"color:#ccc;\">|</span> cultivate patience</div>",
    "reference": "Learning a new language completely change the world, moreover cultivate patience.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：learning a new language (學習新語言)<br>動詞/句型：completely change the world, moreover (已經徹底改變了世界，而且)<br>受詞/補語：cultivate patience (培養耐心。)"
  },
  {
    "id": "e201",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"getting enough sleep ; help relax, furthermore ; cultivate patience\">充足的睡眠可以幫助我們放鬆，並且培養耐心。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>getting enough sleep <span style=\"color:#ccc;\">|</span> help relax, furthermore <span style=\"color:#ccc;\">|</span> cultivate patience</div>",
    "reference": "Getting enough sleep help relax, furthermore cultivate patience.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：getting enough sleep (充足的睡眠)<br>動詞/句型：help relax, furthermore (可以幫助我們放鬆，並且)<br>受詞/補語：cultivate patience (培養耐心。)"
  },
  {
    "id": "e202",
    "category": "翻譯寫作",
    "type": "writing",
    "question": "<div style=\"margin-bottom: 0.5rem;\"><span class=\"en-assist\" data-tw=\"點擊朗讀提示詞\" data-en=\"education ; completely change the world, moreover ; promote interpersonal relationships\">教育已經徹底改變了世界，而且促進人際關係。<span class=\"speak-icon\">🔊</span></span></div><div style=\"font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;\"><strong>💡 寫作提示詞：</strong><br>education <span style=\"color:#ccc;\">|</span> completely change the world, moreover <span style=\"color:#ccc;\">|</span> promote interpersonal relationships</div>",
    "reference": "Education completely change the world, moreover promote interpersonal relationships.",
    "difficulty": "進階",
    "explanation": "💡 <strong>整句翻譯與提示：</strong><br>主詞：education (教育)<br>動詞/句型：completely change the world, moreover (已經徹底改變了世界，而且)<br>受詞/補語：promote interpersonal relationships (促進人際關係。)"
  },
  {
    "id": "e203",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"這座熱帶雨林得天獨厚，擁有豐富多樣的野生動植物物種。\" data-en=\"The tropical rainforest is blessed with _____ wildlife and plant species.\">The tropical rainforest is blessed with _____ wildlife and plant species.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "abundant（豐富的 / 大量的）",
      "reluctant（勉強的不情願的）",
      "fragile（脆弱易碎的 / 薄弱的）",
      "hostile（有敵意的）"
    ],
    "answer": 0,
    "explanation": "abundant 意為「豐富的、大量的」；reluctant 勉強的；fragile 脆弱的；hostile 有敵意的。",
    "difficulty": "中等"
  },
  {
    "id": "e204",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"這座新的會議中心空間寬敞，足以容納多達五千名與會賓客。\" data-en=\"The new convention center is spacious enough to _____ up to five thousand guests.\">The new convention center is spacious enough to _____ up to five thousand guests.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "accommodate（容納 / 提供住宿）",
      "accumulate（累積 / 聚積）",
      "accelerate（加速）",
      "accomplish（完成 / 達成）"
    ],
    "answer": 0,
    "explanation": "accommodate 意為「容納、提供住宿」；accumulate 積累；accelerate 加速；accomplish 完成。",
    "difficulty": "中等"
  },
  {
    "id": "e205",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"如果沒有定期打掃清理，灰塵和碎屑雜物往往會堆積在厚重的家具後方。\" data-en=\"Dust and debris tend to _____ behind the heavy furniture if not cleaned regularly.\">Dust and debris tend to _____ behind the heavy furniture if not cleaned regularly.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "accumulate（累積 / 聚積）",
      "accommodate（容納 / 提供住宿）",
      "anticipate（預期 / 期望）",
      "appreciate（感激 / 欣賞）"
    ],
    "answer": 0,
    "explanation": "accumulate 意為「累積、聚積」；anticipate 預期；appreciate 感激、欣賞。",
    "difficulty": "中等"
  },
  {
    "id": "e206",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"在啟程展開長途健行之前，請務必確保你攜帶了充足的水和點心乾糧。\" data-en=\"Before taking a long hike, make sure you have an _____ supply of water and snacks.\">Before taking a long hike, make sure you have an _____ supply of water and snacks.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "adequate（充足適當的）",
      "arrogant（傲慢自大的）",
      "awkward（尷尬笨拙的）",
      "abrupt（突兀突然的）"
    ],
    "answer": 0,
    "explanation": "adequate 意為「充足的、適當的」；arrogant 傲慢的；awkward 尷尬的；abrupt 突兀的。",
    "difficulty": "中等"
  },
  {
    "id": "e207",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"該環保團體持續倡導並呼籲制定更嚴格的法律以防止海洋污染。\" data-en=\"The environmental group continues to _____ for stricter laws against ocean pollution.\">The environmental group continues to _____ for stricter laws against ocean pollution.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "advocate（倡導 / 擁護）",
      "abandon（放棄 / 拋棄）",
      "abolish（廢除（制度法規））",
      "abuse（濫用 / 虐待）"
    ],
    "answer": 0,
    "explanation": "advocate 意為「倡導、擁護」；abandon 放棄；abolish 廢除；abuse 濫用。",
    "difficulty": "中等"
  },
  {
    "id": "e208",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"這份合約的措辭極為模糊含糊，導致雙方對條款產生了截然不同的解讀。\" data-en=\"The contract's wording was so _____ that both parties interpreted it differently.\">The contract's wording was so _____ that both parties interpreted it differently.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "ambiguous（模稜兩可含糊的）",
      "ambitious（有雄心抱負的）",
      "anonymous（匿名的 / 不具名的）",
      "autonomous（自治的）"
    ],
    "answer": 0,
    "explanation": "ambiguous 意為「含糊不清的、模稜兩可的」；ambitious 有野心的；anonymous 匿名的；autonomous 自治的。",
    "difficulty": "中等"
  },
  {
    "id": "e209",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"經濟學家預期下一季度消費者的整體支出將會出現顯著的反彈回升。\" data-en=\"Economists _____ that consumer spending will rebound significantly next quarter.\">Economists _____ that consumer spending will rebound significantly next quarter.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "anticipate（預期 / 期望）",
      "alleviate（減輕 / 緩和（痛苦壓力））",
      "aggravate（惡化 / 加劇）",
      "annihilate（殲滅）"
    ],
    "answer": 0,
    "explanation": "anticipate 意為「預期、預料」；alleviate 減輕；aggravate 惡化；annihilate 殲滅。",
    "difficulty": "中等"
  },
  {
    "id": "e210",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"很快地大家便明白，電腦系統崩潰顯然是由一場惡意網絡攻擊所引起的。\" data-en=\"It soon became _____ that the computer crash was caused by a malicious cyber attack.\">It soon became _____ that the computer crash was caused by a malicious cyber attack.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "apparent（顯而易見的、表面上的）",
      "abnormal（異常的 / 反常的）",
      "aesthetic（美學的）",
      "austere（嚴格簡樸的 / 苦行的）"
    ],
    "answer": 0,
    "explanation": "apparent 意為「顯而易見的、表面上的」；abnormal 異常的；aesthetic 美學的；austere 嚴格樸素的。",
    "difficulty": "中等"
  },
  {
    "id": "e211",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"全體觀眾紛紛起立，為鋼琴家超凡絕倫的精彩演奏熱烈鼓掌喝采。\" data-en=\"The audience rose to their feet to _____ the pianist's extraordinary performance.\">The audience rose to their feet to _____ the pianist's extraordinary performance.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "applaud（鼓掌喝采、稱讚）",
      "appall（使驚駭）",
      "appeal（吸引、訴諸）",
      "appoint（任命）"
    ],
    "answer": 0,
    "explanation": "applaud 意為「鼓掌喝采、稱讚」；appall 使驚駭；appeal 吸引、訴諸；appoint 任命。",
    "difficulty": "中等"
  },
  {
    "id": "e212",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"法官在未考量任何出示證據的情況下，做出了武斷專橫的裁決。\" data-en=\"The judge made an _____ decision without considering any of the presented evidence.\">The judge made an _____ decision without considering any of the presented evidence.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "arbitrary（武斷的、專橫的）",
      "authentic（真實正宗的 / 真正的）",
      "artificial（人工的人造的）",
      "accurate（準確精確的）"
    ],
    "answer": 0,
    "explanation": "arbitrary 意為「武斷的、專橫的」；authentic 真正的；artificial 人造的；accurate 準確的。",
    "difficulty": "中等"
  },
  {
    "id": "e213",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"他傲慢自大的處事態度疏遠了許多同事，並讓他錯失了升遷的機會。\" data-en=\"His _____ attitude alienated many of his colleagues and cost him the promotion.\">His _____ attitude alienated many of his colleagues and cost him the promotion.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "arrogant（傲慢自大的）",
      "abundant（豐富的 / 大量的）",
      "ancient（古代古老的）",
      "affectionate（深情的 / 慈愛的）"
    ],
    "answer": 0,
    "explanation": "arrogant 意為「傲慢的、自大的」；affectionate 深情的。",
    "difficulty": "中等"
  },
  {
    "id": "e214",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"許多包裝食品都含有化學人工色素和防腐劑，以延長產品的保存期限。\" data-en=\"Many packaged foods contain _____ colorings and preservatives to extend shelf life.\">Many packaged foods contain _____ colorings and preservatives to extend shelf life.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "artificial（人工的人造的）",
      "authentic（真實正宗的 / 真正的）",
      "automatic（自動的）",
      "arbitrary（武斷專橫的 / 隨意的）"
    ],
    "answer": 0,
    "explanation": "artificial 意為「人造的、人工的」；authentic 真實的；automatic 自動的。",
    "difficulty": "中等"
  },
  {
    "id": "e215",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"許多懷抱遠大抱負的醫學生，都立志渴望成為享譽國際的世界級頂尖外科名醫。\" data-en=\"Many ambitious medical students _____ to become world-renowned surgeons.\">Many ambitious medical students _____ to become world-renowned surgeons.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "aspire（渴望 / 立志於）",
      "expire（到期 / 屆滿斷氣）",
      "conspire（密謀 / 共謀）",
      "inspire（啟發 / 激勵）"
    ],
    "answer": 0,
    "explanation": "aspire to V 意為「渴望、立志於」；expire 到期；conspire 密謀；inspire 啟發。",
    "difficulty": "中等"
  },
  {
    "id": "e216",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"當局必須全面評估這項擬議基礎設施項目的潛在環境影響。\" data-en=\"The insurance company sent an expert to _____ the damage caused by the flood.\">The insurance company sent an expert to _____ the damage caused by the flood.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "assess（評估、估價）",
      "assert（斷言 / 主張）",
      "assign（分配）",
      "assist（協助）"
    ],
    "answer": 0,
    "explanation": "assess 意為「評估、估價」；assert 斷言；assign 分配；assist 協助。",
    "difficulty": "中等"
  },
  {
    "id": "e217",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"在開始寫作之前，我們必須假定所有讀者都具備基礎的科學知識背景。\" data-en=\"The museum confirmed that the oil painting was an _____ masterpiece by Rembrandt.\">The museum confirmed that the oil painting was an _____ masterpiece by Rembrandt.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "authentic（真實正宗的 / 真正的）",
      "artificial（人工的人造的）",
      "audible（聽得見的）",
      "awkward（尷尬笨拙的）"
    ],
    "answer": 0,
    "explanation": "authentic 意為「真正的、道地的」；audible 聽得見的；awkward 尷尬的。",
    "difficulty": "中等"
  },
  {
    "id": "e218",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"他將自己的非凡卓越成功，歸因於父母堅定不移的愛護與全力支持。\" data-en=\"Several European cities have voted to _____ single-use plastics in all public markets.\">Several European cities have voted to _____ single-use plastics in all public markets.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "ban（禁止、禁令）",
      "boost（提升 / 促進增強）",
      "blend（混合 / 融合）",
      "bleed（流血 / 滲血）"
    ],
    "answer": 0,
    "explanation": "ban 意為「禁止、禁令」；boost 促進；blend 混合；bleed 流血。",
    "difficulty": "中等"
  },
  {
    "id": "e219",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"這家歷史悠久的餐廳以供應最正宗道地的傳統義大利料理而聞名遐邇。\" data-en=\"Language shouldn't be a _____ to international friendship and cultural exchange.\">Language shouldn't be a _____ to international friendship and cultural exchange.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "barrier（障礙 / 屏障）",
      "battery（電池 / 一組）",
      "bargain（特價品 / 討價還價）",
      "banner（橫幅 / 標語旗幟）"
    ],
    "answer": 0,
    "explanation": "barrier 意為「障礙、隔閡」；bargain 特價商品；banner 旗幟。",
    "difficulty": "中等"
  },
  {
    "id": "e220",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"為了在科技產業保持競爭力，這家公司必須快速適應不斷變化的市場趨勢。\" data-en=\"Regular physical exercise is highly _____ to both cardiovascular health and mental well-being.\">Regular physical exercise is highly _____ to both cardiovascular health and mental well-being.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "beneficial（有益的有助的）",
      "bankrupt（破產的 / 倒閉）",
      "bitter（痛苦苦澀的 / 嚴寒的）",
      "barren（貧瘠荒蕪的 / 不毛的）"
    ],
    "answer": 0,
    "explanation": "beneficial 意為「有益的」；bankrupt 破產的；bitter 苦澀的；barren 貧瘠荒涼的。",
    "difficulty": "中等"
  },
  {
    "id": "e221",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"政府撥款了數百萬美元的預算資金，用於升級改善偏遠農村地區的交通設施。\" data-en=\"The detective noticed a _____ piece of modern sculpture standing in the dark corner.\">The detective noticed a _____ piece of modern sculpture standing in the dark corner.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "bizarre（古怪的、奇異的）",
      "brief（簡短簡要的）",
      "broad（寬廣廣泛的）",
      "blunt（遲鈍的 / 直率直言的）"
    ],
    "answer": 0,
    "explanation": "bizarre 意為「古怪的、奇異的」；brief 簡短的；broad 寬廣的；blunt 鈍的、直率的。",
    "difficulty": "中等"
  },
  {
    "id": "e222",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"該委員會由來自各個科學領域的傑出專家學者所組成。\" data-en=\"The government launched tax incentives to _____ local semiconductor innovation.\">The government launched tax incentives to _____ local semiconductor innovation.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "boost（推動、提升、促進）",
      "block（阻擋 / 街區）",
      "bribe（賄賂 / 收買）",
      "burst（爆裂 / 突然爆發）"
    ],
    "answer": 0,
    "explanation": "boost 意為「推動、提升、促進」；block 阻擋；bribe 賄賂；burst 爆裂。",
    "difficulty": "中等"
  },
  {
    "id": "e223",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"經過長時間激烈的談判，兩家公司終於達成了雙方都能接受的妥協方案。\" data-en=\"Each _____ running for mayor must debate their policies on public television.\">Each _____ running for mayor must debate their policies on public television.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "candidate（候選人 / 應試者）",
      "catalogue（目錄）",
      "casualty（傷亡者）",
      "capacity（容量 / 能力）"
    ],
    "answer": 0,
    "explanation": "candidate 意為「候選人」；catalogue 目錄；casualty 傷亡者；capacity 容量、能力。",
    "difficulty": "中等"
  },
  {
    "id": "e224",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"這部電影描繪了一位勇敢年輕女性在戰火動盪時期克服重重艱難的感人故事。\" data-en=\"The volcanic eruption was an environmental _____ that displaced thousands of villagers.\">The volcanic eruption was an environmental _____ that displaced thousands of villagers.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "catastrophe（大災難、浩劫）",
      "compromise（妥協 / 讓步）",
      "certificate（證書 / 執照）",
      "championship（錦標賽 / 冠軍頭銜）"
    ],
    "answer": 0,
    "explanation": "catastrophe 意為「大災難、浩劫」；compromise 妥協；certificate 證書。",
    "difficulty": "中等"
  },
  {
    "id": "e225",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"這份研究報告揭示了過度使用智慧型手機與青少年睡眠品質下降之間的直接關聯。\" data-en=\"Drivers are advised to be exceptionally _____ on the icy mountain roads.\">Drivers are advised to be exceptionally _____ on the icy mountain roads.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "cautious（謹慎小心的）",
      "casual（休閒隨意的 / 非正式的）",
      "clumsy（笨拙的）",
      "cruel（殘忍殘酷的）"
    ],
    "answer": 0,
    "explanation": "cautious 意為「謹慎小心的」；clumsy 笨拙的；cruel 殘忍的。",
    "difficulty": "中等"
  },
  {
    "id": "e226",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"這名年輕運動員展現出了非凡的毅力，在嚴重受傷後依然成功重返賽場奪金。\" data-en=\"Smoking is one of the leading contributors to _____ respiratory diseases.\">Smoking is one of the leading contributors to _____ respiratory diseases.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "chronic（慢性的、長期的）",
      "chaotic（混亂的）",
      "classic（經典的）",
      "comic（滑稽好笑的 / 漫畫）"
    ],
    "answer": 0,
    "explanation": "chronic 意為「慢性的、長期的」；chaotic 混亂的；classic 經典的。",
    "difficulty": "中等"
  },
  {
    "id": "e227",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"面對公眾日益高漲的質疑聲浪，該公司發表了一份詳盡的聲明來澄清事實真相。\" data-en=\"Poor architectural design caused the old warehouse to _____ during the tremor.\">Poor architectural design caused the old warehouse to _____ during the tremor.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "collapse（倒塌 / 崩潰）",
      "collide（碰撞 / 衝突）",
      "combine（結合 / 聯合）",
      "compete（競爭）"
    ],
    "answer": 0,
    "explanation": "collapse 意為「倒塌、崩潰」；collide 碰撞；combine 結合；compete 競爭。",
    "difficulty": "中等"
  },
  {
    "id": "e228",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"這座現代化圖書館旨在促進社區居民之間的文化交流與終身自主學習。\" data-en=\"The opening ceremony of the annual film festival will _____ at seven tonight.\">The opening ceremony of the annual film festival will _____ at seven tonight.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "commence（開始、著手）",
      "comment（評論 / 意見）",
      "commend（稱讚）",
      "command（命令）"
    ],
    "answer": 0,
    "explanation": "commence 意為「開始、著手」；commend 稱讚；command 命令。",
    "difficulty": "中等"
  },
  {
    "id": "e229",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"長期暴露在高度噪音環境中，會對個人的聽力健康造成不可逆的嚴重損害。\" data-en=\"Make sure your mobile device is fully _____ with the newly upgraded software.\">Make sure your mobile device is fully _____ with the newly upgraded software.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "compatible（相容的 / 兼容的）",
      "competitive（具競爭力的 / 好勝的）",
      "compulsory（義務的 / 強制的）",
      "comprehensible（可理解的 / 清楚明瞭的）"
    ],
    "answer": 0,
    "explanation": "compatible 意為「相容的、兼容的」；compulsory 強制的；comprehensible 可理解的。",
    "difficulty": "中等"
  },
  {
    "id": "e230",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"該國實施了一系列嚴格的經濟改革措施，以遏制日益嚴重的惡性通貨膨脹。\" data-en=\"The airline promised to _____ passengers whose flights were delayed overnight.\">The airline promised to _____ passengers whose flights were delayed overnight.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "compensate（補償 / 賠償）",
      "contemplate（沉思 / 仔細考量）",
      "complicate（使複雜化）",
      "concentrate（專注 / 聚集）"
    ],
    "answer": 0,
    "explanation": "compensate 意為「補償、賠償」；contemplate 沉思；complicate 使複雜。",
    "difficulty": "中等"
  },
  {
    "id": "e231",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"執行長稱讚她是一位非常有能力、擅長化解危機的稱職主管。\" data-en=\"The CEO praised her for being a highly _____ manager capable of resolving crises.\">The CEO praised her for being a highly _____ manager capable of resolving crises.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "competent（有能力的、稱職的）",
      "confident（有信心的 / 自信的）",
      "convenient（方便便利的）",
      "constant（持續的）"
    ],
    "answer": 0,
    "explanation": "competent 意為「有能力的、稱職的」；constant 持續的。",
    "difficulty": "中等"
  },
  {
    "id": "e232",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"經過數小時的談判，雙方終於就工時問題達成了妥協方案。\" data-en=\"After hours of negotiation, both sides reached a _____ regarding working hours.\">After hours of negotiation, both sides reached a _____ regarding working hours.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "compromise（妥協 / 讓步）",
      "compliment（讚美）",
      "component（零件成分）",
      "compound（化合物 / 複合的）"
    ],
    "answer": 0,
    "explanation": "compromise 意為「妥協、折衷方案」；compliment 讚美；component 零件成分。",
    "difficulty": "中等"
  },
  {
    "id": "e233",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"在許多國家，基礎小學教育是免費的，且在法律上對所有兒童均具強制性義務。\" data-en=\"In many countries, elementary education is free and legally _____ for all children.\">In many countries, elementary education is free and legally _____ for all children.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "compulsory（義務的、強制的）",
      "contagious（傳染性的）",
      "courteous（彬彬有禮的 / 謙恭的）",
      "cautious（謹慎小心的）"
    ],
    "answer": 0,
    "explanation": "compulsory 意為「義務的、強制的」；contagious 傳染性的；courteous 有禮貌的。",
    "difficulty": "中等"
  },
  {
    "id": "e234",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"該名間諜試圖將絕密軍事文件隱藏在一本挖空的字典內部。\" data-en=\"The spy attempted to _____ secret military documents inside a hollow dictionary.\">The spy attempted to _____ secret military documents inside a hollow dictionary.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "conceal（隱瞞 / 隱藏）",
      "concede（承認讓步 / 承認失敗）",
      "concern（關心 / 憂慮）",
      "conclude（下結論）"
    ],
    "answer": 0,
    "explanation": "conceal 意為「隱藏、隱瞞」；concede 讓步；conclude 下結論。",
    "difficulty": "中等"
  },
  {
    "id": "e235",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"各國領袖齊聚高峰會，嚴正譴責恐怖主義的暴行。\" data-en=\"World leaders gathered at the summit to strictly _____ the acts of terrorism.\">World leaders gathered at the summit to strictly _____ the acts of terrorism.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "condemn（譴責、宣告有罪）",
      "confine（限制）",
      "confirm（確認 / 證實）",
      "conform（遵守 / 符合（規範））"
    ],
    "answer": 0,
    "explanation": "condemn 意為「譴責、宣告有罪」；confine 限制；conform 遵守順應。",
    "difficulty": "中等"
  },
  {
    "id": "e236",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"所有進口電器設備都必須嚴格符合國家電氣安全標準。\" data-en=\"All imported electrical appliances must _____ to national safety standards.\">All imported electrical appliances must _____ to national safety standards.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "conform（遵守 / 符合（規範））",
      "confirm（確認 / 證實）",
      "confuse（使困惑 / 混淆）",
      "confront（面對 / 正視（挑戰））"
    ],
    "answer": 0,
    "explanation": "conform to 意為「遵從、符合」；confirm 確認；confront 面對。",
    "difficulty": "中等"
  },
  {
    "id": "e237",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"濫伐森林會對全球氣候與生態生物多樣性造成極為嚴重的後果。\" data-en=\"Deforestation can have severe _____s on global climate and biodiversity.\">Deforestation can have severe _____s on global climate and biodiversity.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "consequence（後果、結果）",
      "convenience（便利 / 方便）",
      "conscience（良心）",
      "confidence（信心 / 信任）"
    ],
    "answer": 0,
    "explanation": "consequence 意為「後果、結果」；conscience 良心。",
    "difficulty": "中等"
  },
  {
    "id": "e238",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"這項新橋樑興建計畫需要來自民間與政府公共基金的大筆可觀投資。\" data-en=\"The new bridge project required a _____ investment from both private and public funds.\">The new bridge project required a _____ investment from both private and public funds.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "considerable（相當大的、可觀的）",
      "considerate（體貼周到的）",
      "convenient（方便便利的）",
      "content（滿意的 / 內容目錄）"
    ],
    "answer": 0,
    "explanation": "considerable 意為「相當大的、可觀的」；considerate 體貼的。",
    "difficulty": "中等"
  },
  {
    "id": "e239",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"她那頂亮黃色的帽子讓她在黑壓壓的雨傘海中顯得格外引人注目。\" data-en=\"Her bright yellow hat made her remarkably _____ in the sea of dark umbrellas.\">Her bright yellow hat made her remarkably _____ in the sea of dark umbrellas.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "conspicuous（顯眼的 / 惹人注目的）",
      "convenient（方便便利的）",
      "suspicious（可疑的）",
      "continuous（連續不斷的）"
    ],
    "answer": 0,
    "explanation": "conspicuous 意為「顯眼的、引人注目的」；suspicious 可疑的。",
    "difficulty": "中等"
  },
  {
    "id": "e240",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"工廠洩漏出的有毒化學物質恐將污染整座城鎮的民生水庫。\" data-en=\"Toxic chemicals leaked from the factory and threatened to _____ the town's reservoir.\">Toxic chemicals leaked from the factory and threatened to _____ the town's reservoir.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "contaminate（污染 / 毒害）",
      "contemplate（沉思 / 仔細考量）",
      "consolidate（鞏固）",
      "congratulate（祝賀 / 恭喜）"
    ],
    "answer": 0,
    "explanation": "contaminate 意為「污染、弄髒」；contemplate 沉思；consolidate 鞏固。",
    "difficulty": "中等"
  },
  {
    "id": "e241",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"在做出如此改變一生的重大決定之前，你應當深思熟慮所有可能的結果。\" data-en=\"Before making such a life-altering decision, you should _____ all possible outcomes.\">Before making such a life-altering decision, you should _____ all possible outcomes.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "contemplate（沉思 / 仔細考量）",
      "contaminate（污染 / 毒害）",
      "compensate（補償 / 賠償）",
      "compromise（妥協 / 讓步）"
    ],
    "answer": 0,
    "explanation": "contemplate 意為「沉思、深思熟慮」；compensate 賠償。",
    "difficulty": "中等"
  },
  {
    "id": "e242",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"嫌犯的供詞似乎與監視器所拍下的錄影畫面完全互相矛盾。\" data-en=\"The suspect's testimony seemed to completely _____ the surveillance footage.\">The suspect's testimony seemed to completely _____ the surveillance footage.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "contradict（反駁 / 與……矛盾）",
      "contribute（貢獻 / 促成）",
      "construct（建造 / 建構）",
      "contract（合約 / 收縮感染）"
    ],
    "answer": 0,
    "explanation": "contradict 意為「與...矛盾、反駁」；contribute 貢獻；contract 簽約。",
    "difficulty": "中等"
  },
  {
    "id": "e243",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"充足的睡眠與水分補充，在維持學業成績優異方面扮演著至關重要的關鍵角色。\" data-en=\"Proper sleep and hydration play a _____ role in maintaining academic performance.\">Proper sleep and hydration play a _____ role in maintaining academic performance.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "crucial（至關重要的 / 關鍵的）",
      "crude（粗糙的 / 未提煉的原油）",
      "cruel（殘忍殘酷的）",
      "curious（好奇的 / 古怪的）"
    ],
    "answer": 0,
    "explanation": "crucial 意為「至關重要的、關鍵性的」；crude 粗糙未提煉的；cruel 殘忍的。",
    "difficulty": "中等"
  },
  {
    "id": "e244",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"考古團隊在沙漠深處挖掘出了一批具有數千年歷史的古代文物。\" data-en=\"Sales of gasoline-powered vehicles began to _____ as electric cars gained popularity.\">Sales of gasoline-powered vehicles began to _____ as electric cars gained popularity.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "decline（婉拒 / 下降衰退）",
      "declare（宣布 / 聲明）",
      "decay（腐爛 / 衰退）",
      "deceive（欺騙 / 矇騙）"
    ],
    "answer": 0,
    "explanation": "decline 意為「下降、衰退、婉拒」；declare 宣布；decay 腐朽；deceive 欺騙。",
    "difficulty": "中等"
  },
  {
    "id": "e245",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"在收到火警警報響起後，大樓警衛迅速協助將所有員工安全疏散撤離。\" data-en=\"Mother Teresa decided to _____ her entire life to serving the poorest of the poor.\">Mother Teresa decided to _____ her entire life to serving the poorest of the poor.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "dedicate（奉獻 / 致力於）",
      "delicate（精細微妙的 / 脆弱的）",
      "deficate（精緻的 / 微妙的）",
      "duplicate（複製）"
    ],
    "answer": 0,
    "explanation": "dedicate A to B 意為「奉獻、致力於」；delicate 精緻脆弱的；duplicate 複製。",
    "difficulty": "中等"
  },
  {
    "id": "e246",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"這份營養補充品旨在彌補人體日常飲食中所缺乏的必要維生素。\" data-en=\"A severe vitamin D _____ can cause bone softening and fatigue in adults.\">A severe vitamin D _____ can cause bone softening and fatigue in adults.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "deficiency（缺乏、不足）",
      "delinquency（青少年犯罪）",
      "democracy（民主政治 / 民主國家）",
      "dependency（依賴）"
    ],
    "answer": 0,
    "explanation": "deficiency 意為「缺乏、不足」；delinquency 青少年犯罪；dependency 依賴。",
    "difficulty": "中等"
  },
  {
    "id": "e247",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"這家航空公司對每位乘客允許攜帶的隨身行李重量與尺寸設有嚴格限制。\" data-en=\"The arsonist started a _____ fire in the abandoned storage facility.\">The arsonist started a _____ fire in the abandoned storage facility.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "deliberate（深思熟慮的 / 蓄意的）",
      "desperate（絕望不顧一切的 / 極渴望的）",
      "delicate（精細微妙的 / 脆弱的）",
      "delighted（欣喜 / 愉快樂事）"
    ],
    "answer": 0,
    "explanation": "deliberate 意為「故意的、蓄意的、深思熟慮的」；desperate 絕望的。",
    "difficulty": "中等"
  },
  {
    "id": "e248",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"即使面臨巨大的公眾輿論壓力，委員會依然堅持其原先的客觀裁定。\" data-en=\"The city council decided to _____ the hazardous structure to build a community park.\">The city council decided to _____ the hazardous structure to build a community park.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "demolish（拆除 / 摧毀拆毀）",
      "demonstrate（示範證明 / 示威）",
      "diminish（減少 / 削弱縮小）",
      "dominate（主導 / 支配統治）"
    ],
    "answer": 0,
    "explanation": "demolish 意為「拆毀、拆除」；demonstrate 示範證明；diminish 縮小；dominate 主導。",
    "difficulty": "中等"
  },
  {
    "id": "e249",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"這項尖端醫療技術的發明，徹底革新了癌症早期診斷與治療的模式。\" data-en=\"Prolonged insomnia can _____ a person of the ability to concentrate and think clearly.\">Prolonged insomnia can _____ a person of the ability to concentrate and think clearly.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "deprive（剝奪 / 使喪失）",
      "derive（衍生 / 起源於獲得）",
      "describe（描寫 / 描述）",
      "despise（鄙視 / 瞧不起）"
    ],
    "answer": 0,
    "explanation": "deprive A of B 意為「剝奪某人某物」；derive 衍生；despise 鄙視。",
    "difficulty": "中等"
  },
  {
    "id": "e250",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"這座現代化美術館收藏了許多不同時期的著名藝術家所創作的當代藝術作品。\" data-en=\"Without proper medication, the patient's health condition will likely _____ rapidly.\">Without proper medication, the patient's health condition will likely _____ rapidly.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "deteriorate（惡化 / 退化變壞）",
      "determine（決定 / 決心測定）",
      "devastate（摧毀 / 使荒廢重創）",
      "differentiate（區分 / 辨別）"
    ],
    "answer": 0,
    "explanation": "deteriorate 意為「惡化、退化」；determine 決定；devastate 毀滅。",
    "difficulty": "中等"
  },
  {
    "id": "e251",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"儘管面臨重重困難挑戰，該慈善機構依然致力於消除全球貧困與飢餓問題。\" data-en=\"The category-five hurricane had a _____ impact on the coastal infrastructure.\">The category-five hurricane had a _____ impact on the coastal infrastructure.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "devastating（毀滅性的、破壞力極大的）",
      "delightful（令人愉快的 / 宜人的）",
      "decorative（裝飾性的 / 裝潢的）",
      "dependable（可靠的 / 可信任的）"
    ],
    "answer": 0,
    "explanation": "devastating 意為「毀滅性的、破壞力極大的」；dependable 可靠的。",
    "difficulty": "中等"
  },
  {
    "id": "e252",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"長時間暴露在強烈陽光紫外線下，容易加速皮膚的老化與病變。\" data-en=\"The medicine will help to _____ the swelling and ease the sharp joint pain.\">The medicine will help to _____ the swelling and ease the sharp joint pain.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "diminish（減少 / 削弱縮小）",
      "distinguish（區分 / 辨別）",
      "demolish（拆除 / 摧毀拆毀）",
      "dominate（主導 / 支配統治）"
    ],
    "answer": 0,
    "explanation": "diminish 意為「減少、縮小」；distinguish 辨別；dominate 統治支配。",
    "difficulty": "中等"
  },
  {
    "id": "e253",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"這項政府獎學金計畫旨在資助經濟弱勢家庭的優秀學生順利完成大學學業。\" data-en=\"The sudden economic crash turned out to be an unprecedented _____ for small retailers.\">The sudden economic crash turned out to be an unprecedented _____ for small retailers.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "disaster（災難、災禍）",
      "discount（折扣）",
      "distance（距離 / 遠處）",
      "discovery（發現 / 發覺）"
    ],
    "answer": 0,
    "explanation": "disaster 意為「災難、災禍」；discount 折扣。",
    "difficulty": "中等"
  },
  {
    "id": "e254",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"氣象專家預測，這股強烈冷氣團將在未來幾天內造成氣溫急劇驟降。\" data-en=\"The police used water cannons to _____ the violent demonstrators in the square.\">The police used water cannons to _____ the violent demonstrators in the square.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "disperse（驅散 / 散播分散）",
      "display（陳列 / 展覽顯示）",
      "dispose（處理處置）",
      "dispute（爭端 / 爭議爭論）"
    ],
    "answer": 0,
    "explanation": "disperse 意為「驅散、散開」；dispose 處理處置；dispute 爭端。",
    "difficulty": "中等"
  },
  {
    "id": "e255",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"這名年輕作家憑藉著其處女作小說生動細膩的情節描寫，一舉榮獲了年度文學大獎。\" data-en=\"It is difficult to _____ genuine antique porcelain from high-quality imitations.\">It is difficult to _____ genuine antique porcelain from high-quality imitations.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "distinguish（區分 / 辨別）",
      "extinguish（撲滅 / 熄滅消滅）",
      "relinquish（放棄 / 讓出權力）",
      "vanquish（擊敗 / 征服）"
    ],
    "answer": 0,
    "explanation": "distinguish 意為「區分、分辨」；extinguish 熄滅撲滅；relinquish 放棄。",
    "difficulty": "中等"
  },
  {
    "id": "e256",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"該公司致力於開發對環境友善的可生物分解環保包裝材料。\" data-en=\"Tech giants continue to _____ the digital advertising and cloud computing markets.\">Tech giants continue to _____ the digital advertising and cloud computing markets.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "dominate（主導 / 支配統治）",
      "donate（捐贈）",
      "tolerate（容忍 / 忍受）",
      "generate（產生 / 發電引起）"
    ],
    "answer": 0,
    "explanation": "dominate 意為「主導、支配」；donate 捐贈；tolerate 容忍。",
    "difficulty": "中等"
  },
  {
    "id": "e257",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"這項國際科學合作項目匯集了全球數十個國家的頂尖學者共同參與研究。\" data-en=\"The school board implemented _____ budget cuts due to the lack of municipal funding.\">The school board implemented _____ budget cuts due to the lack of municipal funding.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "drastic（嚴厲的 / 劇烈的）",
      "durable（耐用持久的）",
      "dynamic（充滿活力的 / 動態的）",
      "dubious（可疑的 / 半信半疑的）"
    ],
    "answer": 0,
    "explanation": "drastic 意為「激烈的、徹底的、嚴厲的」；durable 耐用的；dubious 可疑的。",
    "difficulty": "中等"
  },
  {
    "id": "e258",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"規律的體育鍛鍊與均衡飲食，是維持身體健康與增強免疫力的兩大基石。\" data-en=\"Mountain climbers need boots made of _____ leather that can withstand rough terrain.\">Mountain climbers need boots made of _____ leather that can withstand rough terrain.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "durable（耐用持久的）",
      "delicate（精細微妙的 / 脆弱的）",
      "drastic（嚴厲的 / 劇烈的）",
      "docile（溫順的）"
    ],
    "answer": 0,
    "explanation": "durable 意為「耐用的、持久的」；delicate 脆弱細緻的；docile 溫順的。",
    "difficulty": "中等"
  },
  {
    "id": "e259",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"為了確保考試的公平公正，所有考生在進入考場前都必須接受嚴格的身份查驗。\" data-en=\"The museum exhibit featured an _____ model of the ancient Roman Colosseum.\">The museum exhibit featured an _____ model of the ancient Roman Colosseum.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "elaborate（精心製作的 / 詳細闡述）",
      "elementary（基本的 / 初級基礎的）",
      "eligible（具備資格的 / 符合條件的）",
      "efficient（有效率的 / 能幹的）"
    ],
    "answer": 0,
    "explanation": "elaborate 意為「精緻的、詳盡的」；eligible 合格有資格的。",
    "difficulty": "中等"
  },
  {
    "id": "e260",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"這部歷史紀錄片深入探討了第二次世界大戰對全球政治地緣格局所產生的深遠影響。\" data-en=\"The new security algorithm is designed to _____ fraudulent transactions in real time.\">The new security algorithm is designed to _____ fraudulent transactions in real time.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "eliminate（消除 / 淘汰排除）",
      "elevate（提升）",
      "estimate（估計 / 預估估價）",
      "evaluate（評估 / 評價考量）"
    ],
    "answer": 0,
    "explanation": "eliminate 意為「消除、淘汰」；elevate 提升；estimate 估計；evaluate 評估。",
    "difficulty": "中等"
  },
  {
    "id": "e261",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"大學畢業後，莎拉決定啟程展開一趟橫跨亞洲的背包客自助旅行。\" data-en=\"After graduating from college, Sarah decided to _____ on a backpacking trip across Asia.\">After graduating from college, Sarah decided to _____ on a backpacking trip across Asia.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "embark（著手開始 / 登機登船）",
      "embrace（擁抱 / 欣然接受）",
      "emerge（浮現 / 嶄露頭角顯露）",
      "emit（排放 / 發出散發）"
    ],
    "answer": 0,
    "explanation": "embark on 意為「著手、開展、登船」；embrace 擁抱欣然接受；emerge 出現。",
    "difficulty": "中等"
  },
  {
    "id": "e262",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"老師用紅筆標記並強調了我們作文中常見的語法錯誤。\" data-en=\"The teacher used red ink to _____ the common grammatical errors in our essays.\">The teacher used red ink to _____ the common grammatical errors in our essays.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "emphasize（強調 / 著重）",
      "sympathize（同情）",
      "hypothesize（假設）",
      "memorize（記住 / 熟記背誦）"
    ],
    "answer": 0,
    "explanation": "emphasize 意為「強調」；sympathize 同情；hypothesize 假設。",
    "difficulty": "中等"
  },
  {
    "id": "e263",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"在熱帶珊瑚礁潛水的潛水員經常會邂逅海龜與色彩斑斕的珊瑚礁魚類。\" data-en=\"Divers in the tropical reef often _____ sea turtles and colorful reef fish.\">Divers in the tropical reef often _____ sea turtles and colorful reef fish.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "encounter（偶遇 / 遭遇正面交鋒）",
      "entertain（娛樂 / 招待懷有）",
      "encourage（鼓勵 / 激勵促進）",
      "enforce（執行 / 強制實施）"
    ],
    "answer": 0,
    "explanation": "encounter 意為「遭遇、巧遇」；entertain 娛樂款待；enforce 執行執法。",
    "difficulty": "中等"
  },
  {
    "id": "e264",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"馬拉松跑者在比賽過程中必須忍受酷熱與潮濕的天氣考驗。\" data-en=\"The marathon runners had to _____ scorching heat and humid weather during the race.\">The marathon runners had to _____ scorching heat and humid weather during the race.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "endure（忍受 / 持久耐受）",
      "ensure（確保 / 保證）",
      "insure（投保 / 給……保險）",
      "assure（向……保證 / 確保）"
    ],
    "answer": 0,
    "explanation": "endure 意為「忍受、忍耐」；ensure 確保；assure 向...保證。",
    "difficulty": "中等"
  },
  {
    "id": "e265",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"全場觀眾為這位年輕的小提琴神童獻上了熱情洋溢的熱烈掌聲。\" data-en=\"The audience gave an _____ round of applause to the young violin prodigy.\">The audience gave an _____ round of applause to the young violin prodigy.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "enthusiastic（熱情的、狂熱的）",
      "empathetic（有同理心的 / 感同身受的）",
      "eccentric（古怪奇特的 / 特立獨行的）",
      "erratic（飄忽不定的 / 不穩定的）"
    ],
    "answer": 0,
    "explanation": "enthusiastic 意為「熱情的、狂熱的」；eccentric 古怪的；erratic 不穩定的。",
    "difficulty": "中等"
  },
  {
    "id": "e266",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"承包商估計這條高速公路的整修工程大約需要耗時十八個月。\" data-en=\"Contractors _____ that the highway renovation will take approximately eighteen months.\">Contractors _____ that the highway renovation will take approximately eighteen months.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "estimate（估計 / 預估估價）",
      "intimate（親密的）",
      "hesitate（猶豫）",
      "imitate（模仿）"
    ],
    "answer": 0,
    "explanation": "estimate 意為「估計、估算」；intimate 親密的；hesitate 猶豫；imitate 模仿。",
    "difficulty": "中等"
  },
  {
    "id": "e267",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"教師結合標準化測驗與專題作業來綜合評估學生的學習進展。\" data-en=\"Teachers use standardized tests along with project work to _____ student progress.\">Teachers use standardized tests along with project work to _____ student progress.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "evaluate（評估 / 評價考量）",
      "evaporate（蒸發 / 消失不見）",
      "elaborate（精心製作的 / 詳細闡述）",
      "exaggerate（誇大 / 誇張渲染）"
    ],
    "answer": 0,
    "explanation": "evaluate 意為「評估、評價」；evaporate 蒸發；exaggerate 誇大誇張。",
    "difficulty": "中等"
  },
  {
    "id": "e268",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"從他緊張顫抖的聲音中很明顯可以看出，他並未做好充分的簡報準備。\" data-en=\"It was _____ from his nervous voice that he had not prepared his presentation well.\">It was _____ from his nervous voice that he had not prepared his presentation well.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "evident（明顯顯而易見的）",
      "efficient（有效率的 / 能幹的）",
      "eventual（最終的 / 結果的）",
      "explicit（明確坦率的 / 清楚清楚的）"
    ],
    "answer": 0,
    "explanation": "evident 意為「明顯的、顯然的」；explicit 明確直言的。",
    "difficulty": "中等"
  },
  {
    "id": "e269",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"廣告商往往會誇大減肥保健品的功效，以刺激產品銷售量。\" data-en=\"Advertisers often _____ the effectiveness of weight-loss supplements to boost sales.\">Advertisers often _____ the effectiveness of weight-loss supplements to boost sales.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "exaggerate（誇大 / 誇張渲染）",
      "excavate（挖掘出土）",
      "exhale（呼氣）",
      "exile（流放 / 流亡放逐）"
    ],
    "answer": 0,
    "explanation": "exaggerate 意為「誇大、誇張」；excavate 挖掘出土；exhale 呼氣。",
    "difficulty": "中等"
  },
  {
    "id": "e270",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"她在數學方面非凡卓越的過人天賦，為她贏得了劍橋大學的全額獎學金。\" data-en=\"Her _____ talent in mathematics earned her a full scholarship to Cambridge.\">Her _____ talent in mathematics earned her a full scholarship to Cambridge.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "exceptional（卓越非凡的 / 例外的）",
      "excessive（過度的 / 過分的過量的）",
      "exclusive（專屬獨家的 / 排他的）",
      "expensive（昂貴的 / 高價的）"
    ],
    "answer": 0,
    "explanation": "exceptional 意為「卓越傑出的、非凡的」；excessive 過度的；exclusive 專屬的獨家的。",
    "difficulty": "中等"
  },
  {
    "id": "e271",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Drinking an （【完整題目中文句意】Drinking an _____ amount of caffeine can lead to anxiety and irregular heartbeats.） amount of caffeine can lead to anxiety and irregular heartbeats.\" data-en=\"Drinking an _____ amount of caffeine can lead to anxiety and irregular heartbeats.\">Drinking an _____ amount of caffeine can lead to anxiety and irregular heartbeats.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "excessive（過度的 / 過分的過量的）",
      "exclusive（專屬獨家的 / 排他的）",
      "exceptional（卓越非凡的 / 例外的）",
      "exhaustive（詳盡無遺的）"
    ],
    "answer": 0,
    "explanation": "excessive 意為「過多的、過度的」；exhaustive 詳盡無遺的。",
    "difficulty": "中等"
  },
  {
    "id": "e272",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Running uphill for five kilometers will easily （【完整題目中文句意】Running uphill for five kilometers will easily _____ any untrained athlete.） any untrained athlete.\" data-en=\"Running uphill for five kilometers will easily _____ any untrained athlete.\">Running uphill for five kilometers will easily _____ any untrained athlete.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "exhaust（使精疲力竭 / 耗盡）",
      "exhibit（展示 / 展出展覽）",
      "expand（擴大 / 膨脹擴充）",
      "expect（期待 / 預期指望）"
    ],
    "answer": 0,
    "explanation": "exhaust 意為「使筋疲力盡、用盡」；exhibit 展示；expand 擴張。",
    "difficulty": "中等"
  },
  {
    "id": "e273",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The botanical greenhouse showcases rare and （【完整題目中文句意】The botanical greenhouse showcases rare and _____ orchids from tropical jungles.） orchids from tropical jungles.\" data-en=\"The botanical greenhouse showcases rare and _____ orchids from tropical jungles.\">The botanical greenhouse showcases rare and _____ orchids from tropical jungles.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "exotic（異國風情的、奇特的）",
      "toxic（有毒的）",
      "erotic（色情的 / 性愛的）",
      "chaotic（混亂的）"
    ],
    "answer": 0,
    "explanation": "exotic 意為「異國風情的、奇特的」；toxic 有毒的；chaotic 混亂的。",
    "difficulty": "中等"
  },
  {
    "id": "e274",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The retail chain plans to （【完整題目中文句意】The retail chain plans to _____ its franchise into overseas markets next year.） its franchise into overseas markets next year.\" data-en=\"The retail chain plans to _____ its franchise into overseas markets next year.\">The retail chain plans to _____ its franchise into overseas markets next year.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "expand（擴大 / 膨脹擴充）",
      "expend（花費耗費）",
      "expect（期待 / 預期指望）",
      "explain（解釋 / 說明闡述）"
    ],
    "answer": 0,
    "explanation": "expand 意為「擴展、擴大」；expend 花費耗費。",
    "difficulty": "中等"
  },
  {
    "id": "e275",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Your passport is scheduled to （【完整題目中文句意】Your passport is scheduled to _____ in three months, so you should renew it soon.） in three months, so you should renew it soon.\" data-en=\"Your passport is scheduled to _____ in three months, so you should renew it soon.\">Your passport is scheduled to _____ in three months, so you should renew it soon.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "expire（到期、屆滿失效）",
      "aspire（渴望 / 立志於）",
      "conspire（密謀 / 共謀）",
      "inspire（啟發 / 激勵）"
    ],
    "answer": 0,
    "explanation": "expire 意為「到期、屆滿失效」；inspire 啟發激勵。",
    "difficulty": "中等"
  },
  {
    "id": "e276",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The flight attendant gave （【完整題目中文句意】The flight attendant gave _____ safety instructions before the aircraft took off.） safety instructions before the aircraft took off.\" data-en=\"The flight attendant gave _____ safety instructions before the aircraft took off.\">The flight attendant gave _____ safety instructions before the aircraft took off.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "explicit（明確坦率的 / 清楚清楚的）",
      "implicit（隱含暗示的）",
      "exquisite（精緻精美的 / 精巧的）",
      "eccentric（古怪奇特的 / 特立獨行的）"
    ],
    "answer": 0,
    "explanation": "explicit 意為「明確清晰的」；implicit 隱含暗示的；exquisite 精緻細膩的。",
    "difficulty": "中等"
  },
  {
    "id": "e277",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Some greedy corporations unethically （【完整題目中文句意】Some greedy corporations unethically _____ child labor in underdeveloped regions.） child labor in underdeveloped regions.\" data-en=\"Some greedy corporations unethically _____ child labor in underdeveloped regions.\">Some greedy corporations unethically _____ child labor in underdeveloped regions.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "exploit（利用 / 開發剝削）",
      "explore（探索 / 探討探究）",
      "explode（爆炸）",
      "export（出口 / 輸出外銷）"
    ],
    "answer": 0,
    "explanation": "exploit 意為「剝削、利用」；explore 探索；explode 爆炸。",
    "difficulty": "中等"
  },
  {
    "id": "e278",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Dodos and passenger pigeons became completely （【完整題目中文句意】Dodos and passenger pigeons became completely _____ due to rampant human hunting.） due to rampant human hunting.\" data-en=\"Dodos and passenger pigeons became completely _____ due to rampant human hunting.\">Dodos and passenger pigeons became completely _____ due to rampant human hunting.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "extinct（滅絕的、絕種的）",
      "distinct（不同的獨特的）",
      "instinct（本能直覺）",
      "intact（完好無損的 / 完整無缺的）"
    ],
    "answer": 0,
    "explanation": "extinct 意為「滅絕的、絕種的」；distinct 不同的獨特的；instinct 本能直覺。",
    "difficulty": "中等"
  },
  {
    "id": "e279",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The rescue team showed （【完整題目中文句意】The rescue team showed _____ bravery when saving the hikers from the raging river.） bravery when saving the hikers from the raging river.\" data-en=\"The rescue team showed _____ bravery when saving the hikers from the raging river.\">The rescue team showed _____ bravery when saving the hikers from the raging river.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "extraordinary（非凡卓越的 / 異常的）",
      "elementary（基本的 / 初級基礎的）",
      "equivalent（等同相等的 / 等價物）",
      "equipped（裝備齊全的 / 配備有）"
    ],
    "answer": 0,
    "explanation": "extraordinary 意為「非凡的、不尋常的」；equivalent 等同的相等的。",
    "difficulty": "中等"
  },
  {
    "id": "e280",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The astronomy documentary offered a （【完整題目中文句意】The astronomy documentary offered a _____ glimpse into black holes and galaxies.） glimpse into black holes and galaxies.\" data-en=\"The astronomy documentary offered a _____ glimpse into black holes and galaxies.\">The astronomy documentary offered a _____ glimpse into black holes and galaxies.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "fascinating（迷人的、令人著迷的）",
      "frightening（使驚嚇 / 使害怕恐嚇）",
      "frustrating（令人沮喪挫敗的）",
      "flattering（奉承 / 諂媚使顯得好看）"
    ],
    "answer": 0,
    "explanation": "fascinating 意為「迷人的、令人著迷的」；frustrating 令人沮喪的。",
    "difficulty": "中等"
  },
  {
    "id": "e281",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Due to high construction costs, building an undersea railway is currently not （【完整題目中文句意】Due to high construction costs, building an undersea railway is currently not _____.）.\" data-en=\"Due to high construction costs, building an undersea railway is currently not _____.\">Due to high construction costs, building an undersea railway is currently not _____.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "feasible（切實可行的 / 辦得到的）",
      "flexible（有彈性的 / 靈活可變通的）",
      "fragile（脆弱易碎的 / 薄弱的）",
      "fertile（肥沃多產的 / 豐饒的）"
    ],
    "answer": 0,
    "explanation": "feasible 意為「切實可行的、行得通的」；flexible 有彈性的；fertile 肥沃的。",
    "difficulty": "中等"
  },
  {
    "id": "e282",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The Nile River basin is renowned for its extraordinarily （【完整題目中文句意】The Nile River basin is renowned for its extraordinarily _____ soil suitable for farming.） soil suitable for farming.\" data-en=\"The Nile River basin is renowned for its extraordinarily _____ soil suitable for farming.\">The Nile River basin is renowned for its extraordinarily _____ soil suitable for farming.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "fertile（肥沃多產的 / 豐饒的）",
      "fragile（脆弱易碎的 / 薄弱的）",
      "futile（徒勞無功的 / 無益無效的）",
      "fickle（善變的）"
    ],
    "answer": 0,
    "explanation": "fertile 意為「肥沃的、多產的」；futile 無用的徒勞的；fickle 善變的。",
    "difficulty": "中等"
  },
  {
    "id": "e283",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Freelancers often appreciate having a （【完整題目中文句意】Freelancers often appreciate having a _____ work schedule rather than fixed hours.） work schedule rather than fixed hours.\" data-en=\"Freelancers often appreciate having a _____ work schedule rather than fixed hours.\">Freelancers often appreciate having a _____ work schedule rather than fixed hours.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "flexible（有彈性的 / 靈活可變通的）",
      "feasible（切實可行的 / 辦得到的）",
      "fragile（脆弱易碎的 / 薄弱的）",
      "furious（暴怒狂怒的 / 狂烈的）"
    ],
    "answer": 0,
    "explanation": "flexible 意為「有彈性的、靈活的」；furious 狂怒的。",
    "difficulty": "中等"
  },
  {
    "id": "e284",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：With ample sunlight and rainfall, tropical vegetation tends to （【完整題目中文句意】With ample sunlight and rainfall, tropical vegetation tends to _____ all year round.） all year round.\" data-en=\"With ample sunlight and rainfall, tropical vegetation tends to _____ all year round.\">With ample sunlight and rainfall, tropical vegetation tends to _____ all year round.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "flourish（繁榮昌盛 / 蓬勃發展）",
      "perish（死亡 / 毀滅枯萎）",
      "nourish（滋養 / 養育哺育）",
      "punish（處罰 / 懲罰）"
    ],
    "answer": 0,
    "explanation": "flourish 意為「繁榮、茂盛」；perish 喪生滅亡；nourish 滋養。",
    "difficulty": "中等"
  },
  {
    "id": "e285",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Please handle this glass vase carefully because it is extremely （【完整題目中文句意】Please handle this glass vase carefully because it is extremely _____.）.\" data-en=\"Please handle this glass vase carefully because it is extremely _____.\">Please handle this glass vase carefully because it is extremely _____.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "fragile（脆弱易碎的 / 薄弱的）",
      "fertile（肥沃多產的 / 豐饒的）",
      "futile（徒勞無功的 / 無益無效的）",
      "frugal（節儉節省的 / 樸素的）"
    ],
    "answer": 0,
    "explanation": "fragile 意為「易碎的、脆弱的」；frugal 節儉的。",
    "difficulty": "中等"
  },
  {
    "id": "e286",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Continuous technical glitches during the livestream began to （【完整題目中文句意】Continuous technical glitches during the livestream began to _____ the speaker.） the speaker.\" data-en=\"Continuous technical glitches during the livestream began to _____ the speaker.\">Continuous technical glitches during the livestream began to _____ the speaker.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "frustrate（使受挫 / 使沮喪灰心）",
      "fascinate（使著迷 / 深深吸引）",
      "fluctuate（波動 / 起伏不定）",
      "formulate（規劃制定 / 構想出）"
    ],
    "answer": 0,
    "explanation": "frustrate 意為「使沮喪、使灰心受挫」；fluctuate 波動。",
    "difficulty": "中等"
  },
  {
    "id": "e287",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Understanding the periodic table is （【完整題目中文句意】Understanding the periodic table is _____ to mastering basic chemistry concepts.） to mastering basic chemistry concepts.\" data-en=\"Understanding the periodic table is _____ to mastering basic chemistry concepts.\">Understanding the periodic table is _____ to mastering basic chemistry concepts.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "fundamental（基礎根本的 / 基本原則）",
      "accidental（意外偶然的）",
      "instrumental（起關鍵作用的 / 樂器的）",
      "sentimental（感傷的）"
    ],
    "answer": 0,
    "explanation": "fundamental 意為「基礎的、根本的」；instrumental 起關鍵作用的；sentimental 感傷的。",
    "difficulty": "中等"
  },
  {
    "id": "e288",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The billionaire made a （【完整題目中文句意】The billionaire made a _____ donation to build a children's cancer research center.） donation to build a children's cancer research center.\" data-en=\"The billionaire made a _____ donation to build a children's cancer research center.\">The billionaire made a _____ donation to build a children's cancer research center.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "generous（慷慨大方的）",
      "genial（和藹親切的 / 溫和的）",
      "genuine（真正的真誠的）",
      "general（一般的 / 總體的將軍）"
    ],
    "answer": 0,
    "explanation": "generous 意為「慷慨大方的」；genuine 真正的真誠的。",
    "difficulty": "中等"
  },
  {
    "id": "e289",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Her warm smile expressed （【完整題目中文句意】Her warm smile expressed _____ happiness for her best friend's marriage.） happiness for her best friend's marriage.\" data-en=\"Her warm smile expressed _____ happiness for her best friend's marriage.\">Her warm smile expressed _____ happiness for her best friend's marriage.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "genuine（真誠的、真正的）",
      "generous（慷慨大方的 / 豐厚的）",
      "generic（通用的 / 無商標的）",
      "genius（天才 / 天賦才華）"
    ],
    "answer": 0,
    "explanation": "genuine 意為「真誠的、真正的」；generic 通用的普通的。",
    "difficulty": "中等"
  },
  {
    "id": "e290",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Behind the sparkling （【完整題目中文句意】Behind the sparkling _____ of Hollywood lies relentless hard work and intense pressure.） of Hollywood lies relentless hard work and intense pressure.\" data-en=\"Behind the sparkling _____ of Hollywood lies relentless hard work and intense pressure.\">Behind the sparkling _____ of Hollywood lies relentless hard work and intense pressure.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "glamour（魅力、風采、光鮮）",
      "glance（匆匆瞥一眼 / 掃視）",
      "glimpse（瞥見 / 一瞥）",
      "gloom（憂鬱昏暗）"
    ],
    "answer": 0,
    "explanation": "glamour 意為「魅力、風采、光鮮」；gloom 憂鬱昏暗。",
    "difficulty": "中等"
  },
  {
    "id": "e291",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：On Thanksgiving, people gather around the table to express （【完整題目中文句意】On Thanksgiving, people gather around the table to express _____ for their blessings.） for their blessings.\" data-en=\"On Thanksgiving, people gather around the table to express _____ for their blessings.\">On Thanksgiving, people gather around the table to express _____ for their blessings.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "gratitude（感激、謝意）",
      "gravity（重力地心引力 / 嚴重性）",
      "guarantee（保證 / 擔保保固）",
      "guidance（指導 / 引導指引）"
    ],
    "answer": 0,
    "explanation": "gratitude 意為「感激、謝意」；gravity 地心引力、嚴重性。",
    "difficulty": "中等"
  },
  {
    "id": "e292",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Arctic foxes have evolved thick fur coats to survive the （【完整題目中文句意】Arctic foxes have evolved thick fur coats to survive the _____ polar winter.） polar winter.\" data-en=\"Arctic foxes have evolved thick fur coats to survive the _____ polar winter.\">Arctic foxes have evolved thick fur coats to survive the _____ polar winter.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "harsh（嚴酷的、嚴厲的）",
      "hasty（匆忙的）",
      "hostile（有敵意的）",
      "humble（謙遜的 / 卑微簡陋的）"
    ],
    "answer": 0,
    "explanation": "harsh 意為「嚴酷的、嚴厲的」；hasty 匆忙的；humble 謙虛的。",
    "difficulty": "中等"
  },
  {
    "id": "e293",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Discarded plastic bags pose a severe choking （【完整題目中文句意】Discarded plastic bags pose a severe choking _____ to marine creatures.） to marine creatures.\" data-en=\"Discarded plastic bags pose a severe choking _____ to marine creatures.\">Discarded plastic bags pose a severe choking _____ to marine creatures.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "hazard（危險、危害物）",
      "harvest（收穫 / 收成收割）",
      "haven（避風港 / 安全庇護所）",
      "heritage（文化遺產 / 傳統傳承）"
    ],
    "answer": 0,
    "explanation": "hazard 意為「危險、危害物」；harvest 收穫；heritage 遺產。",
    "difficulty": "中等"
  },
  {
    "id": "e294",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Do not （【完整題目中文句意】Do not _____ to contact our customer support line if you experience any issues.） to contact our customer support line if you experience any issues.\" data-en=\"Do not _____ to contact our customer support line if you experience any issues.\">Do not _____ to contact our customer support line if you experience any issues.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "hesitate（猶豫、躊躇）",
      "hibernate（冬眠 / 蟄伏）",
      "humiliate（羞辱）",
      "hypnotize（施催眠術 / 使著迷）"
    ],
    "answer": 0,
    "explanation": "hesitate 意為「猶豫、躊躇」；hibernate 冬眠；humiliate 羞辱。",
    "difficulty": "中等"
  },
  {
    "id": "e295",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The lost explorers received a surprisingly （【完整題目中文句意】The lost explorers received a surprisingly _____ reception from the local tribe.） reception from the local tribe.\" data-en=\"The lost explorers received a surprisingly _____ reception from the local tribe.\">The lost explorers received a surprisingly _____ reception from the local tribe.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "hostile（有敵意的）",
      "hospitable（熱情好客的 / 宜居的）",
      "humble（謙遜的 / 卑微簡陋的）",
      "hopeful（抱有希望的 / 樂觀的）"
    ],
    "answer": 0,
    "explanation": "hostile 意為「有敵意的、不友善的」；hospitable 殷勤好客的。",
    "difficulty": "中等"
  },
  {
    "id": "e296",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The twins wore （【完整題目中文句意】The twins wore _____ school uniforms, making it hard to tell them apart.） school uniforms, making it hard to tell them apart.\" data-en=\"The twins wore _____ school uniforms, making it hard to tell them apart.\">The twins wore _____ school uniforms, making it hard to tell them apart.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "identical（完全相同的）",
      "individual（個別的）",
      "internal（內部的 / 體內的）",
      "intimate（親密的）"
    ],
    "answer": 0,
    "explanation": "identical 意為「完全相同的」；individual 個別的；intimate 親密的。",
    "difficulty": "中等"
  },
  {
    "id": "e297",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The festival concluded with bright fireworks that managed to （【完整題目中文句意】The festival concluded with bright fireworks that managed to _____ the night sky.） the night sky.\" data-en=\"The festival concluded with bright fireworks that managed to _____ the night sky.\">The festival concluded with bright fireworks that managed to _____ the night sky.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "illuminate（照亮、闡明）",
      "illustrate（說明 / 闡明加插圖）",
      "imitate（模仿 / 仿效仿造）",
      "isolate（隔離）"
    ],
    "answer": 0,
    "explanation": "illuminate 意為「照亮、闡明」；illustrate 插圖說明；isolate 隔離。",
    "difficulty": "中等"
  },
  {
    "id": "e298",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The biology textbook uses detailed diagrams to （【完整題目中文句意】The biology textbook uses detailed diagrams to _____ how cells divide.） how cells divide.\" data-en=\"The biology textbook uses detailed diagrams to _____ how cells divide.\">The biology textbook uses detailed diagrams to _____ how cells divide.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "illustrate（插圖說明、闡述）",
      "illuminate（照亮 / 闡明啟發）",
      "intimidate（恐嚇威脅）",
      "irrigate（灌溉 / 沖洗）"
    ],
    "answer": 0,
    "explanation": "illustrate 意為「插圖說明、闡述」；intimidate 恐嚇威脅；irrigate 灌溉。",
    "difficulty": "中等"
  },
  {
    "id": "e299",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Vaccination teaches the body's （【完整題目中文句意】Vaccination teaches the body's _____ system to recognize and fight viral infections.） system to recognize and fight viral infections.\" data-en=\"Vaccination teaches the body's _____ system to recognize and fight viral infections.\">Vaccination teaches the body's _____ system to recognize and fight viral infections.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "immune（免疫的、免除的）",
      "immense（巨大的）",
      "imminent（迫在眉睫的）",
      "immature（不成熟的 / 幼稚的）"
    ],
    "answer": 0,
    "explanation": "immune 意為「免疫的、免除的」；immense 巨大的；imminent 迫在眉睫的。",
    "difficulty": "中等"
  },
  {
    "id": "e300",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The management board decided to （【完整題目中文句意】The management board decided to _____ a four-day workweek on a trial basis.） a four-day workweek on a trial basis.\" data-en=\"The management board decided to _____ a four-day workweek on a trial basis.\">The management board decided to _____ a four-day workweek on a trial basis.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "implement（實施、實行）",
      "imply（暗示 / 暗指意味著）",
      "impose（強加課徵）",
      "impress（給……留下深刻印象）"
    ],
    "answer": 0,
    "explanation": "implement 意為「實施、實行」；impose 強加課徵。",
    "difficulty": "中等"
  },
  {
    "id": "e301",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Given the rapidly falling sales numbers, staff layoffs became completely （【完整題目中文句意】Given the rapidly falling sales numbers, staff layoffs became completely _____.）.\" data-en=\"Given the rapidly falling sales numbers, staff layoffs became completely _____.\">Given the rapidly falling sales numbers, staff layoffs became completely _____.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "inevitable（不可避免的、必然的）",
      "invaluable（極珍貴無價的）",
      "invisible（看不見的 / 隱形的）",
      "invincible（不可戰勝的 / 無敵的）"
    ],
    "answer": 0,
    "explanation": "inevitable 意為「不可避免的、必然的」；invaluable 無價極珍貴的；invincible 無敵的。",
    "difficulty": "中等"
  },
  {
    "id": "e302",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Consumers quickly rejected the counterfeit phones due to their （【完整題目中文句意】Consumers quickly rejected the counterfeit phones due to their _____ battery life.） battery life.\" data-en=\"Consumers quickly rejected the counterfeit phones due to their _____ battery life.\">Consumers quickly rejected the counterfeit phones due to their _____ battery life.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "inferior（劣等的、較差的）",
      "superior（優越優良的 / 上級）",
      "interior（內部的 / 室內內政）",
      "exterior（外部的外表的 / 外觀）"
    ],
    "answer": 0,
    "explanation": "inferior 意為「劣等的、較差的」；superior 優等的；interior 內部的。",
    "difficulty": "中等"
  },
  {
    "id": "e303",
    "category": "詞彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The Nobel laureate published an （【完整題目中文句意】The Nobel laureate published an _____ paper that reshaped contemporary economic theories.） paper that reshaped contemporary economic theories.\" data-en=\"The Nobel laureate published an _____ paper that reshaped contemporary economic theories.\">The Nobel laureate published an _____ paper that reshaped contemporary economic theories.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "influential（有影響力的）",
      "infectious（具感染傳染力的）",
      "inefficient（效率低下的 / 無能的）",
      "indifferent（漠不關心的 / 冷淡的）"
    ],
    "answer": 0,
    "explanation": "influential 意為「有影響力的」；infectious 具感染傳染力的；indifferent 漠不關心的。",
    "difficulty": "中等"
  },
  {
    "id": "e304",
    "question": "<span class=\"en-assist\" data-tw=\"與現在事實相反的假設語氣，條件句中的 be 動詞一律用 were\" data-en=\"If I _____ you, I would take the doctor's advice and get plenty of rest.\">If I _____ you, I would take the doctor's advice and get plenty of rest.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "were（是（假設語氣與現在相反））",
      "was（是（過去式））",
      "am（是（現在式））",
      "have been（已經是 / 一直處於（現在完成式））"
    ],
    "answer": 0,
    "explanation": "與現在事實相反的假設語氣，條件句中的 be 動詞一律用 were。",
    "difficulty": "進階"
  },
  {
    "id": "e305",
    "question": "<span class=\"en-assist\" data-tw=\"與過去事實相反的倒裝假設語氣：Had he checked = If he had checked\" data-en=\"Had he _____ the weather forecast, he would not have set sail in the storm.\">Had he _____ the weather forecast, he would not have set sail in the storm.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "checked（檢查了（過去式/完成式））",
      "checks（檢查（第三人稱單數））",
      "checking（正在檢查（現在分詞/動名詞））",
      "check（檢查（原形動詞））"
    ],
    "answer": 0,
    "explanation": "與過去事實相反的倒裝假設語氣：Had he checked = If he had checked。",
    "difficulty": "進階"
  },
  {
    "id": "e306",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The teacher insisted that every student （堅持(insist)後方的 that 子句需省略 should，動詞使用原形 submit） their assignment before Friday.\" data-en=\"The teacher insisted that every student _____ their assignment before Friday.\">The teacher insisted that every student _____ their assignment before Friday.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "submit（提交 / 呈交（原形動詞））",
      "submits（提交（第三人稱單數））",
      "submitted（提交了（過去式/過去分詞））",
      "to submit（去提交（不定詞））"
    ],
    "answer": 0,
    "explanation": "堅持(insist)後方的 that 子句需省略 should，動詞使用原形 submit。",
    "difficulty": "進階"
  },
  {
    "id": "e307",
    "question": "<span class=\"en-assist\" data-tw=\"否定副詞 Not only 置於句首時，主要子句需倒裝，助動詞提前\" data-en=\"Not only _____ the scholarship, but she also won first prize in the national contest.\">Not only _____ the scholarship, but she also won first prize in the national contest.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "did she receive（她有收到嗎 / 她確實收到（倒裝助動詞 + S + 原形動詞））",
      "she received（她收到了（陳述句語序））",
      "she has received（她已經收到（現在完成式））",
      "received she（錯誤語序）"
    ],
    "answer": 0,
    "explanation": "否定副詞 Not only 置於句首時，主要子句需倒裝，助動詞提前。",
    "difficulty": "進階"
  },
  {
    "id": "e308",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Seldom （否定副詞 Seldom 置於句首引導倒裝句，助動詞 have 提到主詞 I 之前） such an awe-inspiring performance on stage.\" data-en=\"Seldom _____ such an awe-inspiring performance on stage.\">Seldom _____ such an awe-inspiring performance on stage.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "have I seen（我見過（否定倒裝助動詞 + S + 過去分詞））",
      "I have seen（我見過（陳述句無倒裝））",
      "I saw（我看見了（過去式））",
      "did I saw（錯誤文法）"
    ],
    "answer": 0,
    "explanation": "否定副詞 Seldom 置於句首引導倒裝句，助動詞 have 提到主詞 I 之前。",
    "difficulty": "進階"
  },
  {
    "id": "e309",
    "question": "<span class=\"en-assist\" data-tw=\"分詞構句表結果：前後因果關聯，主動使...發生，用現在分詞 causing\" data-en=\"The mountain path was slippery, _____ several hikers to lose their footing.\">The mountain path was slippery, _____ several hikers to lose their footing.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "causing（導致造成（現在分詞表主動伴隨結果））",
      "caused（被造成（過去分詞表被動））",
      "cause（造成 / 原因（原形））",
      "to cause（去造成 / 為了造成（不定詞））"
    ],
    "answer": 0,
    "explanation": "分詞構句表結果：前後因果關聯，主動使...發生，用現在分詞 causing。",
    "difficulty": "進階"
  },
  {
    "id": "e310",
    "question": "<span class=\"en-assist\" data-tw=\"分詞構句：地球是「被看見」，承受被動語態，故以過去分詞 Seen 開頭\" data-en=\"_____ from space, the Earth resembles a radiant blue marble floating in darkness.\">_____ from space, the Earth resembles a radiant blue marble floating in darkness.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "Seen（開頭）",
      "Seeing（看見著（現在分詞表主動））",
      "Saw（看見（過去式））",
      "To see（去見 / 為了看見（不定詞））"
    ],
    "answer": 0,
    "explanation": "分詞構句：地球是「被看見」，承受被動語態，故以過去分詞 Seen 開頭。",
    "difficulty": "進階"
  },
  {
    "id": "e311",
    "question": "<span class=\"en-assist\" data-tw=\"have + 受詞 + p.p. 表示使某事物「被...」完成\" data-en=\"She had her laptop _____ yesterday because the motherboard was fried.\">She had her laptop _____ yesterday because the motherboard was fried.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "repaired（被修理（過去分詞表被動完成））",
      "repair（修理（原形動詞））",
      "repairing（正在修理（現在分詞））",
      "to repair（去修理（不定詞））"
    ],
    "answer": 0,
    "explanation": "have + 受詞 + p.p. 表示使某事物「被...」完成。筆電是被修理，用 repaired。",
    "difficulty": "進階"
  },
  {
    "id": "e312",
    "question": "<span class=\"en-assist\" data-tw=\"感官動詞 see + 受詞 + V-ing（強調正在進行）或原形動詞（全過程）\" data-en=\"I saw a suspicious man _____ into the neighbor's garden late last night.\">I saw a suspicious man _____ into the neighbor's garden late last night.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "sneaking（偷偷溜進（現在分詞表進行中））",
      "sneaked（偷偷溜進了（過去式））",
      "to sneak（去偷偷溜進（不定詞））",
      "snuck（偷偷溜進（過去式/口語））"
    ],
    "answer": 0,
    "explanation": "感官動詞 see + 受詞 + V-ing（強調正在進行）或原形動詞（全過程）。此處用 sneaking。",
    "difficulty": "進階"
  },
  {
    "id": "e313",
    "question": "<span class=\"en-assist\" data-tw=\"It is high time that + S + 過去式動詞 (V-ed)，表示「早該做某事了」\" data-en=\"It is high time that we _____ action to reduce carbon emissions.\">It is high time that we _____ action to reduce carbon emissions.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "took（拿了（過去式））",
      "take（拿取 / 服用（原形））",
      "have taken（已經採取 / 本該採取（完成式/虛擬式））",
      "taking（正在拿（現在分詞））"
    ],
    "answer": 0,
    "explanation": "It is high time that + S + 過去式動詞 (V-ed)，表示「早該做某事了」。",
    "difficulty": "進階"
  },
  {
    "id": "e314",
    "question": "<span class=\"en-assist\" data-tw=\"No sooner had S p.p. than S V-ed 表示「一...就...」，than 後方接過去式\" data-en=\"No sooner had the bell rung than the students _____ out of the classroom.\">No sooner had the bell rung than the students _____ out of the classroom.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "rushed（衝了過去（過去式））",
      "rush（衝 / 趕（原形動詞））",
      "had rushed（當時已經衝過去（過去完成式））",
      "rushing（正衝過去（現在分詞））"
    ],
    "answer": 0,
    "explanation": "No sooner had S p.p. than S V-ed 表示「一...就...」，than 後方接過去式。",
    "difficulty": "進階"
  },
  {
    "id": "e315",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Hardly had she closed her eyes （【完整題目中文句意】Hardly had she closed her eyes _____ the loud fire alarm went off.） the loud fire alarm went off.\" data-en=\"Hardly had she closed her eyes _____ the loud fire alarm went off.\">Hardly had she closed her eyes _____ the loud fire alarm went off.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "when（何時 / 關係副詞（時間））",
      "than（比…… / 接於 No sooner 之後）",
      "as（如同 / 當 / 因為）",
      "since（自從 / 既然）"
    ],
    "answer": 0,
    "explanation": "Hardly had S p.p. when/before S V-ed 意為「一...就...」。",
    "difficulty": "進階"
  },
  {
    "id": "e316",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：So fierce （So + adj. 置於句首引導倒裝句，主詞 the thunderstorm 為單數，過去式用 was） the thunderstorm that branches snapped off all over the neighborhood.\" data-en=\"So fierce _____ the thunderstorm that branches snapped off all over the neighborhood.\">So fierce _____ the thunderstorm that branches snapped off all over the neighborhood.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "was（是（過去式））",
      "is（是（第三人稱單數現在式））",
      "were（是（假設語氣與現在相反））",
      "being（正在處於（現在分詞/動名詞））"
    ],
    "answer": 0,
    "explanation": "So + adj. 置於句首引導倒裝句，主詞 the thunderstorm 為單數，過去式用 was。",
    "difficulty": "進階"
  },
  {
    "id": "e317",
    "question": "<span class=\"en-assist\" data-tw=\"Such + be + S 表示「...如此深厚以致於...」，倒裝句動詞配合單數用 was\" data-en=\"Such _____ her dedication to ballet that she practiced eight hours every day.\">Such _____ her dedication to ballet that she practiced eight hours every day.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "was（是（過去式））",
      "is（是（第三人稱單數現在式））",
      "were（是（假設語氣與現在相反））",
      "are（是（第二人稱/複數現在式））"
    ],
    "answer": 0,
    "explanation": "Such + be + S 表示「...如此深厚以致於...」，倒裝句動詞配合單數用 was。",
    "difficulty": "進階"
  },
  {
    "id": "e318",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：He walked on tiptoe lest he （【完整題目中文句意】He walked on tiptoe lest he _____ the sleeping infant.） the sleeping infant.\" data-en=\"He walked on tiptoe lest he _____ the sleeping infant.\">He walked on tiptoe lest he _____ the sleeping infant.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "should wake（萬一醒來 / 應該醒來（lest 子句假設語氣））",
      "wakes（醒來（第三人稱單數））",
      "woke（醒了（過去式））",
      "waking（正在醒來（現在分詞））"
    ],
    "answer": 0,
    "explanation": "lest 意為「唯恐、免得」，後方子句常接 (should) + 原形動詞。",
    "difficulty": "進階"
  },
  {
    "id": "e319",
    "question": "<span class=\"en-assist\" data-tw=\"關係代名詞子句簡化為分詞片語：小說是「被寫」，使用過去分詞 written\" data-en=\"The novel, _____ by a young Taiwanese writer, quickly topped the bestseller charts.\">The novel, _____ by a young Taiwanese writer, quickly topped the bestseller charts.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "written（被寫成（過去分詞表被動））",
      "writing（正在寫（現在分詞））",
      "wrote（寫了（過去式））",
      "to write（去寫（不定詞））"
    ],
    "answer": 0,
    "explanation": "關係代名詞子句簡化為分詞片語：小說是「被寫」，使用過去分詞 written。",
    "difficulty": "進階"
  },
  {
    "id": "e320",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Weather （【完整題目中文句意】Weather _____, we will proceed with the outdoor barbecue tomorrow afternoon.）, we will proceed with the outdoor barbecue tomorrow afternoon.\" data-en=\"Weather _____, we will proceed with the outdoor barbecue tomorrow afternoon.\">Weather _____, we will proceed with the outdoor barbecue tomorrow afternoon.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "permitting（天氣許可的話（Weather permitting 獨立分詞構句））",
      "permitted（被許可（過去分詞））",
      "permits（允許 / 許可證執照）",
      "permission（許可 / 准許同意）"
    ],
    "answer": 0,
    "explanation": "獨立分詞構句：Weather permitting 為固定片語，意為「若天氣許可的話」。",
    "difficulty": "進階"
  },
  {
    "id": "e321",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Judging （【完整題目中文句意】Judging _____ his exhausted expression, he must have pulled an all-nighter.） his exhausted expression, he must have pulled an all-nighter.\" data-en=\"Judging _____ his exhausted expression, he must have pulled an all-nighter.\">Judging _____ his exhausted expression, he must have pulled an all-nighter.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "from（/by 為常見獨立分詞片語）",
      "by（常見獨立分詞片語）",
      "with（with）",
      "to（to）"
    ],
    "answer": 0,
    "explanation": "Judging from/by 為常見獨立分詞片語，意為「從...來判斷」。",
    "difficulty": "進階"
  },
  {
    "id": "e322",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The committee suggested that the controversial regulation （suggest 表示建議時，that 子句省略 should，被動態保留原形 be + p.p.） immediately.\" data-en=\"The committee suggested that the controversial regulation _____ immediately.\">The committee suggested that the controversial regulation _____ immediately.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "be abolished（be abolished）",
      "is abolished（is abolished）",
      "was abolished（was abolished）",
      "abolishes（abolishes）"
    ],
    "answer": 0,
    "explanation": "suggest 表示建議時，that 子句省略 should，被動態保留原形 be + p.p.。",
    "difficulty": "進階"
  },
  {
    "id": "e323",
    "question": "<span class=\"en-assist\" data-tw=\"would rather + that 子句使用與現在事實相反的過去式 did not walk\" data-en=\"I would rather you _____ alone in the dark alley so late at night.\">I would rather you _____ alone in the dark alley so late at night.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "did not walk（did not walk）",
      "do not walk（do not walk）",
      "not walking（not walking）",
      "will not walk（will not walk）"
    ],
    "answer": 0,
    "explanation": "would rather + that 子句使用與現在事實相反的過去式 did not walk。",
    "difficulty": "進階"
  },
  {
    "id": "e324",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"由於全球快速暖化，許多沿海社區正採用永續能源（如太陽能與風力），以減少碳排放並達成長期生態平衡。\" data-en=\"Due to rapid global warming, many coastal communities are adopting ______ energy sources, such as solar and wind power, to reduce carbon emissions and achieve long-term ecological balance.\">Due to rapid global warming, many coastal communities are adopting ______ energy sources, such as solar and wind power, to reduce carbon emissions and achieve long-term ecological balance.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "sustainable（永續的 / 可持續的）",
      "temporary（暫時的）",
      "fragile（脆弱的）",
      "hazardous（危險的）"
    ],
    "answer": 0,
    "explanation": "sustainable energy 指「永續能源 / 可再生能源」。句意：由於全球快速暖化，許多沿海社區正採用永續能源（如太陽能與風力），以減少碳排放並達成長期生態平衡。",
    "difficulty": "中等"
  },
  {
    "id": "e325",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"智慧型手機在現代社會變得如此無所不在，以至於幾乎不可能找到身邊沒有手機的年輕人。\" data-en=\"Smartphones have become so ______ in modern society that it is nearly impossible to find a young person without one.\">Smartphones have become so ______ in modern society that it is nearly impossible to find a young person without one.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "ubiquitous（無所不在的 / 普及的）",
      "obscure（晦暗的 / 鮮為人知的）",
      "obsolete（過時淘汰的）",
      "extinct（絕種的）"
    ],
    "answer": 0,
    "explanation": "ubiquitous 意為「無所不在的 / 隨處可見的」（同義詞 omnipresent）。句意：智慧型手機在現代社會變得如此無所不在，以至於幾乎不可能找到身邊沒有手機的年輕人。",
    "difficulty": "中等"
  },
  {
    "id": "e326",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"心理學家將復原力定義為從困難、心理創傷或重大壓力中迅速恢復的心智與情緒能力。\" data-en=\"Psychologists define ______ as the mental and emotional capacity to quickly recover from difficulties, trauma, or significant stress.\">Psychologists define ______ as the mental and emotional capacity to quickly recover from difficulties, trauma, or significant stress.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "resilience（復原力 / 韌性）",
      "reluctance（不情願）",
      "arrogance（傲慢自大）",
      "negligence（疏忽大意）"
    ],
    "answer": 0,
    "explanation": "resilience 意為「心理復原力 / 韌性 / 彈性」。句意：心理學家將復原力定義為從困難、心理創傷或重大壓力中迅速恢復的心智與情緒能力。",
    "difficulty": "中等"
  },
  {
    "id": "e327",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"習慣性拖延的學生常發現自己在期末考前通宵死記硬背，導致巨大的心理壓力與不理想的表現。\" data-en=\"Students who habitually ______ often find themselves cramming all night before final exams, which leads to immense stress and poor performance.\">Students who habitually ______ often find themselves cramming all night before final exams, which leads to immense stress and poor performance.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "procrastinate（拖延 / 遲延）",
      "collaborate（合作）",
      "persevere（堅持不懈）",
      "accelerate（加速）"
    ],
    "answer": 0,
    "explanation": "procrastinate 意為「習慣性拖延 / 拖拖拉拉」。句意：習慣性拖延的學生常發現自己在期末考前通宵死記硬背，導致巨大的心理壓力與不理想的表現。",
    "difficulty": "中等"
  },
  {
    "id": "e328",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"政府採取了史無前例的措施來應對這場空前的經濟危機，包括向數百萬公民發放現金補助。\" data-en=\"The government took ______ measures to combat the unprecedented economic crisis, including handing out cash subsidies to millions of citizens.\">The government took ______ measures to combat the unprecedented economic crisis, including handing out cash subsidies to millions of citizens.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "unprecedented（史無前例的 / 空前的）",
      "confidential（機密的）",
      "monotonous（單調乏味的）",
      "superficial（膚淺表面的）"
    ],
    "answer": 0,
    "explanation": "unprecedented 意為「史無前例的 / 前所未有的」。句意：政府採取了史無前例的措施來應對這場空前的經濟危機，包括向數百萬公民發放現金補助。",
    "difficulty": "中等"
  },
  {
    "id": "e329",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"乾淨的飲用水與穩定的電力，對於現代都市地區的人類生存與日常經濟活動是不可或缺的。\" data-en=\"Clean drinking water and stable electricity are ______ to human survival and daily economic activities in modern urban areas.\">Clean drinking water and stable electricity are ______ to human survival and daily economic activities in modern urban areas.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "indispensable（不可或缺的 / 必需的）",
      "dispensable（可有可無的）",
      "incompatible（不相容的）",
      "irrelevant（不相關的）"
    ],
    "answer": 0,
    "explanation": "be indispensable to 意為「對……而言是不可或缺的」。句意：乾淨的飲用水與穩定的電力，對於現代都市地區的人類生存與日常經濟活動是不可或缺的。",
    "difficulty": "中等"
  },
  {
    "id": "e330",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"沒有適當的醫療照顧與休息，該病患的身體健康在週末期間開始迅速惡化。\" data-en=\"Without proper medical treatment and rest, the patient's physical health began to ______ rapidly over the weekend.\">Without proper medical treatment and rest, the patient's physical health began to ______ rapidly over the weekend.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "deteriorate（惡化 / 退化）",
      "distinguish（區分辨別）",
      "demonstrate（示範證明）",
      "disintegrate（瓦解碎裂）"
    ],
    "answer": 0,
    "explanation": "deteriorate 意為「（病情、情況）惡化 / 變壞」（反義詞 improve）。句意：沒有適當的醫療照顧與休息，該病患的身體健康在週末期間開始迅速惡化。",
    "difficulty": "中等"
  },
  {
    "id": "e331",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"在寒冷的冬季月份，老年人與幼童特別容易遭受嚴重的呼吸道感染。\" data-en=\"Elderly people and young children are particularly ______ to severe respiratory infections during the chilly winter months.\">Elderly people and young children are particularly ______ to severe respiratory infections during the chilly winter months.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "vulnerable（易受傷害的 / 脆弱的）",
      "immune（免疫的）",
      "resistant（有抵抗力的）",
      "indifferent（漠不關心的）"
    ],
    "answer": 0,
    "explanation": "be vulnerable to 意為「易受……傷害/感染的」。句意：在寒冷的冬季月份，老年人與幼童特別容易遭受嚴重的呼吸道感染。",
    "difficulty": "中等"
  },
  {
    "id": "e332",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"與過去事實相反的假設句型倒裝：原句為 If it had not been for...，省略 If 後助動詞 Had 提至主詞前倒裝為 Had it not been for...（若非當時有……）\" data-en=\"______ for your timely assistance and valuable advice, our startup company could not have survived the severe financial turmoil last year.\">______ for your timely assistance and valuable advice, our startup company could not have survived the severe financial turmoil last year.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "Had it not been（若非有……，與過去事實相反之假設倒裝）",
      "Were it not（Were it not）",
      "If it was not（If it was not）",
      "Without had been（Without had been）"
    ],
    "answer": 0,
    "explanation": "與過去事實相反的假設句型倒裝：原句為 If it had not been for...，省略 If 後助動詞 Had 提至主詞前倒裝為 Had it not been for...（若非當時有……）。",
    "difficulty": "中等"
  },
  {
    "id": "e333",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"否定副詞（Seldom, Rarely, Never, Scarcely）置於句首時，句子必須採倒裝結構：否定副詞 + 助動詞/be動詞 + 主詞 + 本動詞 → Seldom have I witnessed...\" data-en=\"Seldom ______ such a breathtaking and magnificent display of fireworks over the harbor on New Year's Eve.\">Seldom ______ such a breathtaking and magnificent display of fireworks over the harbor on New Year's Eve.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "have I witnessed（否定副詞置句首之助動詞倒裝）",
      "I have witnessed（I have witnessed）",
      "did I witnessed（did I witnessed）",
      "I witnessed（I witnessed）"
    ],
    "answer": 0,
    "explanation": "否定副詞（Seldom, Rarely, Never, Scarcely）置於句首時，句子必須採倒裝結構：否定副詞 + 助動詞/be動詞 + 主詞 + 本動詞 → Seldom have I witnessed...",
    "difficulty": "中等"
  },
  {
    "id": "e334",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The doctor strongly recommended that the overworked patient （suggest, recommend, demand, insist, require） a full week off to recuperate from mental exhaustion.\" data-en=\"The doctor strongly recommended that the overworked patient ______ a full week off to recuperate from mental exhaustion.\">The doctor strongly recommended that the overworked patient ______ a full week off to recuperate from mental exhaustion.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "take（意志動詞 recommend 後 that 子句省略 should 接原形動詞）",
      "takes（採取 / 拿取，第三人稱單數現在式）",
      "took（拿了（過去式））",
      "is taking（is taking）"
    ],
    "answer": 0,
    "explanation": "表「建議、要求、命令、堅持」之動詞（suggest, recommend, demand, insist, require）後接 that 名詞子句時，子句動詞一律使用「(should) + 原形動詞」之虛擬語氣。",
    "difficulty": "基礎"
  },
  {
    "id": "e335",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"無論該研究計畫多麼困難且具挑戰性，熱忱的科學家們在找到治癒方法前絕不放棄。\" data-en=\"______ difficult and challenging the research project may be, the dedicated scientists will not give up until they find a cure.\">______ difficult and challenging the research project may be, the dedicated scientists will not give up until they find a cure.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "However（無論多麼……，修飾形容詞 difficult）",
      "Whatever（Whatever）",
      "Whenever（Whenever）",
      "Wherever（Wherever）"
    ],
    "answer": 0,
    "explanation": "However + adj./adv. + S + V（= No matter how + adj./adv.）表示「無論多麼……」。句意：無論該研究計畫多麼困難且具挑戰性，熱忱的科學家們在找到治癒方法前絕不放棄。",
    "difficulty": "基礎"
  },
  {
    "id": "e336",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"so + adj./adv. + that 子句（如此……以致於……）\" data-en=\"The novel was ______ fascinating and gripping that Emily stayed up all night to finish reading the final chapter.\">The novel was ______ fascinating and gripping that Emily stayed up all night to finish reading the final chapter.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "so（so + adj. + that 子句，如此……以至於……）",
      "such（則後接名詞）",
      "very（very）",
      "too（too）"
    ],
    "answer": 0,
    "explanation": "so + adj./adv. + that 子句（如此……以致於……）；such 則後接名詞（such + a/an + adj. + N + that）。此處 fascinating 為純形容詞，故選 so。",
    "difficulty": "基礎"
  },
  {
    "id": "e337",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"倍數表達法結構：倍數詞（twice / three times）+ as + 原級形容詞 + as...，表示「是……的幾倍大/長」\" data-en=\"The newly built stadium is three times ______ the old gymnasium that was torn down last winter.\">The newly built stadium is three times ______ the old gymnasium that was torn down last winter.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "as large as（倍數詞 + as + adj. + as）",
      "larger as（larger as）",
      "so large than（so large than）",
      "as larger as（as larger as）"
    ],
    "answer": 0,
    "explanation": "倍數表達法結構：倍數詞（twice / three times）+ as + 原級形容詞 + as...，表示「是……的幾倍大/長」。",
    "difficulty": "基礎"
  },
  {
    "id": "e338",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"完成式分詞構句：原句為 Because he had finished all the assignments...，因完成作業發生在去電影院之前，簡化為主動完成分詞 Having finished...\" data-en=\"______ all the assignments ahead of time, Kevin felt completely relaxed and went to the cinema with his friends.\">______ all the assignments ahead of time, Kevin felt completely relaxed and went to the cinema with his friends.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "Having finished（完成分詞構句，動作先於主要子句發生）",
      "Finished（完成了 / 被完成，過去式/分詞）",
      "To finish（去完成，不定詞）",
      "Being finished（Being finished）"
    ],
    "answer": 0,
    "explanation": "完成式分詞構句：原句為 Because he had finished all the assignments...，因完成作業發生在去電影院之前，簡化為主動完成分詞 Having finished...。",
    "difficulty": "中等"
  },
  {
    "id": "e339",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：We should never take our parents' unconditional love and support （【完整題目中文句意】We should never take our parents' unconditional love and support (將……視為理所當然而不懂感激珍惜); instead, we must express our gratitude whenever possible.）; instead, we must express our gratitude whenever possible.\" data-en=\"We should never take our parents' unconditional love and support ______; instead, we must express our gratitude whenever possible.\">We should never take our parents' unconditional love and support ______; instead, we must express our gratitude whenever possible.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "for granted（take ... for granted 視……為理所當然）",
      "for sure（for sure）",
      "for real（for real）",
      "for good（for good）"
    ],
    "answer": 0,
    "explanation": "take sth for granted 為大考最高頻片語，意為「將……視為理所當然而不懂感激珍惜」。",
    "difficulty": "基礎"
  },
  {
    "id": "e340",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"經過多年嚴格訓練與不懈奉獻，這位年輕運動員的辛勤付出終於在奪得奧運金牌時得到了回報。\" data-en=\"After years of rigorous training and relentless dedication, the young athlete's hard work finally ______ when she won the Olympic gold medal.\">After years of rigorous training and relentless dedication, the young athlete's hard work finally ______ when she won the Olympic gold medal.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "paid off（得到回報 / 取得成功）",
      "paid back（paid back）",
      "paid out（paid out）",
      "paid down（paid down）"
    ],
    "answer": 0,
    "explanation": "pay off 片語意為「努力得到豐碩回報 / 取得圓滿成功」。句意：經過多年嚴格訓練與不懈奉獻，這位年輕運動員的辛勤付出終於在奪得奧運金牌時得到了回報。",
    "difficulty": "基礎"
  },
  {
    "id": "e341",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"許多開發中國家以犧牲自然環境與公眾健康為代價，追求快速的工業增長。\" data-en=\"Many developing countries pursue rapid industrial growth ______ the natural environment and public health.\">Many developing countries pursue rapid industrial growth ______ the natural environment and public health.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "at the expense of（以……為代價 / 犧牲……）",
      "in terms of（in terms of）",
      "in favor of（in favor of）",
      "by means of（by means of）"
    ],
    "answer": 0,
    "explanation": "at the expense of（= at the cost of）意為「以……為代價 / 犧牲……」。句意：許多開發中國家以犧牲自然環境與公眾健康為代價，追求快速的工業增長。",
    "difficulty": "基礎"
  },
  {
    "id": "e342",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"鑑於最近政府資料庫遭受網路攻擊事件，當局決定立即加強其網路安全防護協定。\" data-en=\"______ the recent cyberattacks on government databases, the authorities decided to enhance their network security protocols immediately.\">______ the recent cyberattacks on government databases, the authorities decided to enhance their network security protocols immediately.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "In light of（鑑於 / 考慮到）",
      "In spite of（In spite of）",
      "In contrast to（In contrast to）",
      "In place of（In place of）"
    ],
    "answer": 0,
    "explanation": "in light of 意為「鑑於 / 考慮到 / 根據……」。句意：鑑於最近政府資料庫遭受網路攻擊事件，當局決定立即加強其網路安全防護協定。",
    "difficulty": "中等"
  },
  {
    "id": "e343",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：As a professional software engineer, it is essential to （【完整題目中文句意】As a professional software engineer, it is essential to (跟上……的最新發展 / 與時俱進地了解……) the latest advancements in artificial intelligence and machine learning.） the latest advancements in artificial intelligence and machine learning.\" data-en=\"As a professional software engineer, it is essential to ______ the latest advancements in artificial intelligence and machine learning.\">As a professional software engineer, it is essential to ______ the latest advancements in artificial intelligence and machine learning.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "keep abreast of（跟上……的最新發展 / 保持了解）",
      "keep away from（keep away from）",
      "keep track with（keep track with）",
      "keep down to（keep down to）"
    ],
    "answer": 0,
    "explanation": "keep abreast of sth 為高階重要片語，意為「跟上……的最新發展 / 與時俱進地了解……」。",
    "difficulty": "中等"
  },
  {
    "id": "e344",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"新出土的考古文物為古代馬雅文明神秘的宗教儀式提供了新線索與深入了解。\" data-en=\"The newly discovered archaeological artifacts have ______ the mysterious religious rituals of the ancient Mayan civilization.\">The newly discovered archaeological artifacts have ______ the mysterious religious rituals of the ancient Mayan civilization.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "shed light on（闡明 / 使……更加明朗清楚）",
      "taken part in（taken part in）",
      "made fun of（made fun of）",
      "kept an eye on（kept an eye on）"
    ],
    "answer": 0,
    "explanation": "shed light on 意為「為……提供新線索 / 闡明 / 使……明朗」。句意：新出土的考古文物為古代馬雅文明神秘的宗教儀式提供了新線索與深入了解。",
    "difficulty": "中等"
  },
  {
    "id": "e345",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"海洋中的塑膠污染對海洋野生動物及整個水生生態系統構成了嚴重威脅。\" data-en=\"Plastic pollution in the oceans poses a severe ______ to marine wildlife and the entire aquatic ecosystem.\">Plastic pollution in the oceans poses a severe ______ to marine wildlife and the entire aquatic ecosystem.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "threat to（pose a threat to 對……構成威脅）",
      "solution to（solution to）",
      "benefit to（benefit to）",
      "praise to（praise to）"
    ],
    "answer": 0,
    "explanation": "pose a threat to 意為「對……造成重大威脅」。句意：海洋中的塑膠污染對海洋野生動物及整個水生生態系統構成了嚴重威脅。",
    "difficulty": "基礎"
  },
  {
    "id": "e346",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"環保人士強烈提倡實施更嚴格的環保法規，以抑制工業碳排放。\" data-en=\"Environmentalists strongly ______ the implementation of stricter environmental laws to curb industrial carbon emissions.\">Environmentalists strongly ______ the implementation of stricter environmental laws to curb industrial carbon emissions.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "advocate（提倡 / 主張）",
      "abandon（放棄）",
      "abolish（廢除）",
      "abbreviate（縮寫）"
    ],
    "answer": 0,
    "explanation": "advocate 意為「提倡 / 倡導 / 主張」。句意：環保人士強烈提倡實施更嚴格的環保法規，以抑制工業碳排放。",
    "difficulty": "基礎"
  },
  {
    "id": "e347",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"這只古代玻璃花瓶極為易碎，請務必極其小心搬運以防摔碎。\" data-en=\"The ancient glass vase is extremely ______; please handle it with utmost care to prevent it from shattering.\">The ancient glass vase is extremely ______; please handle it with utmost care to prevent it from shattering.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "fragile（易碎的 / 脆弱的）",
      "flexible（有彈性的）",
      "feasible（可行的）",
      "fertile（肥沃的）"
    ],
    "answer": 0,
    "explanation": "fragile 意為「易碎的 / 脆弱嬌貴的」。句意：這只古代玻璃花瓶極為易碎，請務必極其小心搬運以防摔碎。",
    "difficulty": "基礎"
  },
  {
    "id": "e348",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"經理讚揚愛麗絲在解決複雜客戶投訴中所展現的專業能力與卓越表現。\" data-en=\"The manager praised Alice for her ______ and outstanding performance in solving the complex client complaint.\">The manager praised Alice for her ______ and outstanding performance in solving the complex client complaint.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "competence（勝任能力 / 專業才幹）",
      "coincidence（巧合）",
      "consequence（後果）",
      "compromise（妥協）"
    ],
    "answer": 0,
    "explanation": "competence 意為「專業勝任能力 / 才幹」。句意：經理讚揚愛麗絲在解決複雜客戶投訴中所展現的專業能力與卓越表現。",
    "difficulty": "基礎"
  },
  {
    "id": "e349",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"獨立分詞構句慣用語：Weather permitting（= If weather permits），表示「天氣若允許的話」，主詞不同保留名詞 Weather\" data-en=\"Weather ______, the annual high school sports carnival will take place on the outdoor athletic field tomorrow morning.\">Weather ______, the annual high school sports carnival will take place on the outdoor athletic field tomorrow morning.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "permitting（獨立分詞構句，若天氣允許）",
      "permitted（被許可（過去分詞））",
      "permits（允許 / 許可證執照）",
      "is permitting（is permitting）"
    ],
    "answer": 0,
    "explanation": "獨立分詞構句慣用語：Weather permitting（= If weather permits），表示「天氣若允許的話」，主詞不同保留名詞 Weather。",
    "difficulty": "中等"
  },
  {
    "id": "e350",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：（凡是贏得全國科學競賽的人） wins the national science competition will be awarded a full scholarship to study at the prestigious university.\" data-en=\"______ wins the national science competition will be awarded a full scholarship to study at the prestigious university.\">______ wins the national science competition will be awarded a full scholarship to study at the prestigious university.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "Whoever（複合關係代名詞，無論誰 / 凡是……的人，等於 Anyone who）",
      "Whomever（Whomever）",
      "Whatever（Whatever）",
      "Whichever（Whichever）"
    ],
    "answer": 0,
    "explanation": "Whoever 作為主要子句的主詞引導名詞子句，意為 Anyone who（凡是贏得全國科學競賽的人）。",
    "difficulty": "中等"
  },
  {
    "id": "e351",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：After years of grief, the widow finally （殘酷現實） the tragic loss of her husband and began to rebuild her life.\" data-en=\"After years of grief, the widow finally ______ the tragic loss of her husband and began to rebuild her life.\">After years of grief, the widow finally ______ the tragic loss of her husband and began to rebuild her life.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "came to terms with（逐漸接受 / 與……妥協和解）",
      "came up with（came up with）",
      "came down with（came down with）",
      "came across with（came across with）"
    ],
    "answer": 0,
    "explanation": "come to terms with 意為「逐漸接受（殘酷現實）/ 與……達成和解妥協」。",
    "difficulty": "中等"
  },
  {
    "id": "e352",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"這項突破性的醫學發現為開發對抗新興病毒性疾病的高效疫苗奠定了堅實基礎。\" data-en=\"The groundbreaking medical discovery ______ for the development of highly effective vaccines against emerging viral diseases.\">The groundbreaking medical discovery ______ for the development of highly effective vaccines against emerging viral diseases.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "paved the way（pave the way for 為……鋪平道路 / 奠定基礎）",
      "led the way（led the way）",
      "lost the way（lost the way）",
      "made a way（made a way）"
    ],
    "answer": 0,
    "explanation": "pave the way for 意為「為……鋪平道路 / 開闢坦途」。句意：這項突破性的醫學發現為開發對抗新興病毒性疾病的高效疫苗奠定了堅實基礎。",
    "difficulty": "基礎"
  },
  {
    "id": "e353",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"新推出的教育政策旨在縮小全國城鄉學校之間的數位落差。\" data-en=\"The newly launched educational policy aims to ______ the digital divide between urban and rural schools across the country.\">The newly launched educational policy aims to ______ the digital divide between urban and rural schools across the country.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "bridge（消除 / 縮小差距）",
      "broaden（擴大）",
      "block（阻擋）",
      "burden（負擔）"
    ],
    "answer": 0,
    "explanation": "bridge the gap / divide 意為「縮小/消除……之間的差距」。句意：新推出的教育政策旨在縮小全國城鄉學校之間的數位落差。",
    "difficulty": "基礎"
  },
  {
    "id": "e354",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"這位科技創業家與跨國企業簽署了一份利潤極其豐厚的合約，保證了數百萬美元的年利潤。\" data-en=\"The tech entrepreneur signed a highly ______ contract with the multinational corporation, which guaranteed millions of dollars in annual profit.\">The tech entrepreneur signed a highly ______ contract with the multinational corporation, which guaranteed millions of dollars in annual profit.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "lucrative（獲利豐厚的 / 賺錢的）",
      "destructive（破壞性的）",
      "defective（有缺陷的）",
      "primitive（原始的）"
    ],
    "answer": 0,
    "explanation": "lucrative 意為「獲利豐厚的 / 賺大錢的 / 暴利的」。句意：這位科技創業家與跨國企業簽署了一份利潤極其豐厚的合約，保證了數百萬美元的年利潤。",
    "difficulty": "中等"
  },
  {
    "id": "e355",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"法醫科學家對犯罪現場進行了極其細緻入微的檢查，確保沒有任何微小纖維或指紋被遺漏。\" data-en=\"The forensic scientist conducted a ______ examination of the crime scene, ensuring that no tiny fiber or fingerprint was overlooked.\">The forensic scientist conducted a ______ examination of the crime scene, ensuring that no tiny fiber or fingerprint was overlooked.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "meticulous（細緻嚴謹的 / 一絲不苟的）",
      "superficial（膚淺粗略的）",
      "reckless（魯莽草率的）",
      "monotonous（單調乏味的）"
    ],
    "answer": 0,
    "explanation": "meticulous 意為「極度仔細嚴謹的 / 一絲不苟的」（同義詞 thorough, painstaking）。句意：法醫科學家對犯罪現場進行了極其細緻入微的檢查，確保沒有任何微小纖維或指紋被遺漏。",
    "difficulty": "中等"
  },
  {
    "id": "e356",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"服用止痛藥有助於暫時緩解劇烈頭痛，但你仍應就醫找出根本病因。\" data-en=\"Taking painkillers can help ______ the severe headache temporarily, but you should still see a doctor to identify the root cause.\">Taking painkillers can help ______ the severe headache temporarily, but you should still see a doctor to identify the root cause.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "alleviate（減輕 / 緩和 / 緩解）",
      "aggravate（使惡化加重）",
      "accelerate（加速）",
      "accumulate（累積）"
    ],
    "answer": 0,
    "explanation": "alleviate 意為「減輕 / 緩和（痛苦、負擔、貧困）」（同義詞 relieve, ease）。句意：服用止痛藥有助於暫時緩解劇烈頭痛，但你仍應就醫找出根本病因。",
    "difficulty": "中等"
  },
  {
    "id": "e357",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"由於持續的地緣政治衝突與供應鏈中斷，國際市場上的汽油價格持續不可預測地上下波動。\" data-en=\"Gasoline prices in the international market continue to ______ unpredictably due to ongoing geopolitical conflicts and supply chain disruptions.\">Gasoline prices in the international market continue to ______ unpredictably due to ongoing geopolitical conflicts and supply chain disruptions.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "fluctuate（波動 / 上下起伏）",
      "fascinate（使著迷）",
      "frustrate（使挫折）",
      "fabricate（捏造編造）"
    ],
    "answer": 0,
    "explanation": "fluctuate 意為「（價格、氣溫、數據）波動 / 起伏不定」。句意：由於持續的地緣政治衝突與供應鏈中斷，國際市場上的汽油價格持續不可預測地上下波動。",
    "difficulty": "中等"
  },
  {
    "id": "e358",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"學習外語的成功絕非一蹴而就；它需要長期的投入與不屈不撓的堅定毅力。\" data-en=\"Success in learning a foreign language does not happen overnight; it requires long-term commitment and unyielding ______.\">Success in learning a foreign language does not happen overnight; it requires long-term commitment and unyielding ______.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "perseverance（不屈不撓 / 毅力）",
      "negligence（疏忽怠慢）",
      "reluctance（勉強不情願）",
      "tolerance（寬容容忍）"
    ],
    "answer": 0,
    "explanation": "perseverance 意為「堅持不懈 / 堅忍不拔之毅力」。句意：學習外語的成功絕非一蹴而就；它需要長期的投入與不屈不撓的堅定毅力。",
    "difficulty": "中等"
  },
  {
    "id": "e359",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"因為談判仍處於初步階段，雙方僅達成了一項有待進一步修改的暫行協議。\" data-en=\"Because the negotiations are still in the preliminary stage, both parties have only reached a ______ agreement subject to further revisions.\">Because the negotiations are still in the preliminary stage, both parties have only reached a ______ agreement subject to further revisions.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "tentative（暫時的 / 試探性的 / 未定案的）",
      "permanent（永久的）",
      "compulsory（強制的）",
      "distinctive（獨特的）"
    ],
    "answer": 0,
    "explanation": "tentative 意為「暫時的 / 試驗性的 / 尚未完全確定的」。句意：因為談判仍處於初步階段，雙方僅達成了一項有待進一步修改的暫行協議。",
    "difficulty": "中等"
  },
  {
    "id": "e360",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"不道德的媒體機構經常斷章取義地曲解該政客的原話，以吸引網路點擊流量。\" data-en=\"Unethical media outlets often ______ the politician's original remarks out of context to attract clickbait online traffic.\">Unethical media outlets often ______ the politician's original remarks out of context to attract clickbait online traffic.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "distort（扭曲 / 曲解）",
      "distribute（分發散佈）",
      "distinguish（區分辨識）",
      "dismiss（解散解僱）"
    ],
    "answer": 0,
    "explanation": "distort 意為「扭曲 / 曲解（事實、原話、形狀）」。句意：不道德的媒體機構經常斷章取義地曲解該政客的原話，以吸引網路點擊流量。",
    "difficulty": "中等"
  },
  {
    "id": "e361",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"背包客們沒有遵循死板的旅遊行程，而是偏好隨興所至的旅行，即興決定探索何處。\" data-en=\"Rather than following a rigid travel itinerary, the backpackers preferred a ______ trip, deciding where to explore on the spur of the moment.\">Rather than following a rigid travel itinerary, the backpackers preferred a ______ trip, deciding where to explore on the spur of the moment.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "spontaneous（自發的 / 隨興由衷的）",
      "tedious（冗長乏味的）",
      "rigorous（嚴謹嚴密的）",
      "suspicious（可疑的）"
    ],
    "answer": 0,
    "explanation": "spontaneous 意為「自發的 / 隨興自然的 / 未經預先安排的」。句意：背包客們沒有遵循死板的旅遊行程，而是偏好隨興所至的旅行，即興決定探索何處。",
    "difficulty": "中等"
  },
  {
    "id": "e362",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"搖滾巨星剛一步上舞臺，熱情的觀眾席立刻爆發出震耳欲聾的歡呼與掌聲。\" data-en=\"No sooner ______ the stage than the enthusiastic audience erupted into deafening cheers and applause.\">No sooner ______ the stage than the enthusiastic audience erupted into deafening cheers and applause.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "had the rock star stepped onto（No sooner had + S + p.p. than... 一……就……之倒裝）",
      "the rock star had stepped onto（the rock star had stepped onto）",
      "did the rock star stepped onto（did the rock star stepped onto）",
      "has the rock star stepped onto（has the rock star stepped onto）"
    ],
    "answer": 0,
    "explanation": "No sooner 置於句首倒裝句型：No sooner had + S + p.p. + than + S + Ved（一……就……）。句意：搖滾巨星剛一步上舞臺，熱情的觀眾席立刻爆發出震耳欲聾的歡呼與掌聲。",
    "difficulty": "中等"
  },
  {
    "id": "e363",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"Hardly / Scarcely had + S + p.p. + when / before + S + Ved（一……就……）\" data-en=\"Hardly had the referee blown the final whistle ______ the jubilant soccer fans rushed onto the pitch to celebrate.\">Hardly had the referee blown the final whistle ______ the jubilant soccer fans rushed onto the pitch to celebrate.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "when（Hardly had + S + p.p. when / before... 一……就……）",
      "than（比…… / 接於 No sooner 之後）",
      "until（直到……為止）",
      "after（在……之後）"
    ],
    "answer": 0,
    "explanation": "Hardly / Scarcely had + S + p.p. + when / before + S + Ved（一……就……）。注意：Hardly 配 when/before；No sooner 配 than。",
    "difficulty": "中等"
  },
  {
    "id": "e364",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：It is high time that the municipal government （虛擬語氣表示「早就該做某事而尚未做」） effective measures to resolve the chronic traffic congestion downtown.\" data-en=\"It is high time that the municipal government ______ effective measures to resolve the chronic traffic congestion downtown.\">It is high time that the municipal government ______ effective measures to resolve the chronic traffic congestion downtown.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "took（It is high time that + S + 過去式動詞，該是……的時候了）",
      "takes（採取 / 拿取，第三人稱單數現在式）",
      "has taken（has taken）",
      "take（拿取 / 服用（原形））"
    ],
    "answer": 0,
    "explanation": "It is (high / about) time that + S + Ved（虛擬語氣表示「早就該做某事而尚未做」），that 子句動詞一律使用「過去式動詞」或「should + 原形動詞」。",
    "difficulty": "中等"
  },
  {
    "id": "e365",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"登山隊員們極其小心地行走，唯恐滑倒跌落陡峭結冰的懸崖。\" data-en=\"The mountaineers walked with extreme caution ______ they slip and tumble down the steep, icy cliff.\">The mountaineers walked with extreme caution ______ they slip and tumble down the steep, icy cliff.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "lest（lest + S + (should) + 原形動詞，唯恐 / 免得……）",
      "in case of（in case of）",
      "unless（除非（條件連接詞））",
      "so that（so that）"
    ],
    "answer": 0,
    "explanation": "lest 引導副詞子句表示「唯恐 / 免得……」，子句動詞慣用「(should) + 原形動詞」。句意：登山隊員們極其小心地行走，唯恐滑倒跌落陡峭結冰的懸崖。",
    "difficulty": "中等"
  },
  {
    "id": "e366",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"直到教授第二次解釋該複雜數學理論，學生們才完全理解該方程式。\" data-en=\"Not until the professor explained the complex mathematical theory a second time ______ fully understand the equation.\">Not until the professor explained the complex mathematical theory a second time ______ fully understand the equation.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "did the students（Not until... 置句首之助動詞倒裝）",
      "the students did（the students did）",
      "the students had（the students had）",
      "had the students（had the students）"
    ],
    "answer": 0,
    "explanation": "Not until... 置於句首時，主要子句必須倒裝（助動詞 did 提至主詞 the students 前面）。句意：直到教授第二次解釋該複雜數學理論，學生們才完全理解該方程式。",
    "difficulty": "中等"
  },
  {
    "id": "e367",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：It goes （【完整題目中文句意】It goes (不言而喻 / 眾所周知 / 毫無疑問是……) that regular exercise, a balanced diet, and sufficient sleep are the fundamental cornerstones of good health.） that regular exercise, a balanced diet, and sufficient sleep are the fundamental cornerstones of good health.\" data-en=\"It goes ______ that regular exercise, a balanced diet, and sufficient sleep are the fundamental cornerstones of good health.\">It goes ______ that regular exercise, a balanced diet, and sufficient sleep are the fundamental cornerstones of good health.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "without saying（It goes without saying that... 不言而喻 / 毫無疑問）",
      "without seeing（without seeing）",
      "without knowing（without knowing）",
      "without telling（without telling）"
    ],
    "answer": 0,
    "explanation": "It goes without saying that... 意為「不言而喻 / 眾所周知 / 毫無疑問是……」。",
    "difficulty": "基礎"
  },
  {
    "id": "e368",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"Neither A nor B / Either A or B / Not only A but also B 主詞動詞一致性遵循「就近原則（Proximity Principle）」，此處動詞與複數 attendants 一致且為過去式，故用 were\" data-en=\"Neither the flight captain nor the flight attendants ______ aware of the minor mechanical malfunction until the warning alarm went off.\">Neither the flight captain nor the flight attendants ______ aware of the minor mechanical malfunction until the warning alarm went off.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "were（Neither A nor B 動詞與靠近的主詞 flight attendants 一致）",
      "was（是（過去式））",
      "is（是（第三人稱單數現在式））",
      "are（是（第二人稱/複數現在式））"
    ],
    "answer": 0,
    "explanation": "Neither A nor B / Either A or B / Not only A but also B 主詞動詞一致性遵循「就近原則（Proximity Principle）」，此處動詞與複數 attendants 一致且為過去式，故用 were。",
    "difficulty": "基礎"
  },
  {
    "id": "e369",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"購買家庭新車時，安全評級與燃油效率應被買家列入考慮。\" data-en=\"When purchasing a new family car, safety ratings and fuel efficiency should be ______ by the buyers.\">When purchasing a new family car, safety ratings and fuel efficiency should be ______ by the buyers.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "taken into account（take ... into account 考慮在內 / 顧及）",
      "taken for granted（taken for granted）",
      "taken by surprise（taken by surprise）",
      "taken in vain（taken in vain）"
    ],
    "answer": 0,
    "explanation": "take sth into account / consideration 為大考最高頻片語，意為「把……列入考慮」。句意：購買家庭新車時，安全評級與燃油效率應被買家列入考慮。",
    "difficulty": "基礎"
  },
  {
    "id": "e370",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"師長絕不應對校園霸凌視而不見；任何騷擾行為皆必須迅速堅定處理。\" data-en=\"Teachers and parents should never ______ school bullying; any act of harassment must be dealt with promptly and firmly.\">Teachers and parents should never ______ school bullying; any act of harassment must be dealt with promptly and firmly.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "turn a blind eye to（視而不見 / 裝作沒看見）",
      "keep an eye on（keep an eye on）",
      "see eye to eye with（see eye to eye with）",
      "catch the eye of（catch the eye of）"
    ],
    "answer": 0,
    "explanation": "turn a blind eye to sth 意為「對……視而不見 / 故意放任不管」。句意：師長絕不應對校園霸凌視而不見；任何騷擾行為皆必須迅速堅定處理。",
    "difficulty": "基礎"
  },
  {
    "id": "e371",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Artificial intelligence is expected to （【完整題目中文句意】Artificial intelligence is expected to (在……中扮演舉足輕重之核心角色) a crucial role in modern medical diagnosis and personalized drug discovery.） a crucial role in modern medical diagnosis and personalized drug discovery.\" data-en=\"Artificial intelligence is expected to ______ a crucial role in modern medical diagnosis and personalized drug discovery.\">Artificial intelligence is expected to ______ a crucial role in modern medical diagnosis and personalized drug discovery.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "play（play a crucial / vital role in 在……中扮演關鍵角色）",
      "make（製造 / 使得，原形動詞）",
      "take（拿取 / 服用（原形））",
      "bring（帶來，原形動詞）"
    ],
    "answer": 0,
    "explanation": "play an important / crucial / pivotal role in sth 意為「在……中扮演舉足輕重之核心角色」。",
    "difficulty": "基礎"
  },
  {
    "id": "e372",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"由於猖獗的森林砍伐與非法盜獵，珍稀山地大猩猩目前瀕臨滅絕邊緣。\" data-en=\"The rare mountain gorilla species is currently ______ extinction due to rampant deforestation and illegal poaching.\">The rare mountain gorilla species is currently ______ extinction due to rampant deforestation and illegal poaching.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "on the verge of（on the verge of / on the brink of 瀕臨……邊緣）",
      "in the face of（in the face of）",
      "at the mercy of（at the mercy of）",
      "by virtue of（by virtue of）"
    ],
    "answer": 0,
    "explanation": "on the verge of（= on the brink / edge of）意為「瀕臨……邊緣 / 行將……」。句意：由於猖獗的森林砍伐與非法盜獵，珍稀山地大猩猩目前瀕臨滅絕邊緣。",
    "difficulty": "基礎"
  },
  {
    "id": "e373",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"工業革命為全球經濟結構、都市化與人類生活水準帶來了深遠變革。\" data-en=\"The Industrial Revolution ______ profound transformations in global economic structures, urbanization, and human living standards.\">The Industrial Revolution ______ profound transformations in global economic structures, urbanization, and human living standards.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "brought about（帶來 / 促成 / 引起）",
      "brought up（brought up）",
      "brought out（brought out）",
      "brought in（brought in）"
    ],
    "answer": 0,
    "explanation": "bring about（= cause / lead to）意為「引起 / 帶來 / 導致（重大變革）」。句意：工業革命為全球經濟結構、都市化與人類生活水準帶來了深遠變革。",
    "difficulty": "基礎"
  },
  {
    "id": "e374",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"長期的工作壓力與缺乏睡眠會引發各種健康問題，包括高血壓與心血管疾病。\" data-en=\"Chronic work stress and lack of sleep can ______ various health problems, including hypertension and cardiovascular diseases.\">Chronic work stress and lack of sleep can ______ various health problems, including hypertension and cardiovascular diseases.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "give rise to（引起 / 導致 / 造成）",
      "give way to（give way to）",
      "give in to（give in to）",
      "give off to（give off to）"
    ],
    "answer": 0,
    "explanation": "give rise to（= lead to, cause）意為「引起 / 導致 / 招致（不良後果）」。句意：長期的工作壓力與缺乏睡眠會引發各種健康問題，包括高血壓與心血管疾病。",
    "difficulty": "中等"
  },
  {
    "id": "e375",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"請牢記在心，大學申請備審資料的上傳截止時間嚴格為本週五午夜。\" data-en=\"Please ______ that the deadline for submitting the college application portfolio is strictly midnight this Friday.\">Please ______ that the deadline for submitting the college application portfolio is strictly midnight this Friday.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "bear in mind（牢記在心 / 記住）",
      "change your mind（change your mind）",
      "make up your mind（make up your mind）",
      "out of your mind（out of your mind）"
    ],
    "answer": 0,
    "explanation": "bear / keep in mind that... 意為「牢記在心 / 切記……」。句意：請牢記在心，大學申請備審資料的上傳截止時間嚴格為本週五午夜。",
    "difficulty": "基礎"
  },
  {
    "id": "e376",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"許多開發中國家竭力應對氣候變遷帶來的災難性衝擊（如嚴重乾旱與洪澇）。\" data-en=\"Many developing nations struggle to ______ with the catastrophic impacts of climate change, such as severe droughts and floods.\">Many developing nations struggle to ______ with the catastrophic impacts of climate change, such as severe droughts and floods.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "cope（cope with 應付 / 克服 / 妥善處理）",
      "compete（compete）",
      "comply（順從 / 遵守）",
      "collide（碰撞 / 衝突）"
    ],
    "answer": 0,
    "explanation": "cope with（= manage, deal with）意為「應付 / 妥善處理 / 克服（困難逆境）」。句意：許多開發中國家竭力應對氣候變遷帶來的災難性衝擊（如嚴重乾旱與洪澇）。",
    "difficulty": "基礎"
  },
  {
    "id": "e377",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"老圖書館被拆除，是因為修復其受損基礎設施的費用昂貴得令人卻步。\" data-en=\"The old library was demolished because the cost of repairing its damaged infrastructure was ______ high.\">The old library was demolished because the cost of repairing its damaged infrastructure was ______ high.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "prohibitively（昂貴得令人望而卻步地）",
      "permanently（永久常設的 / 永恆的）",
      "prominently（卓越著名的 / 突出的引人注目的）",
      "punctually（準時的 / 守時的嚴格守時）"
    ],
    "answer": 0,
    "explanation": "prohibitively expensive / high 意為「價格高昂得令人卻步 / 讓人無法負擔地高」。句意：老圖書館被拆除，是因為修復其受損基礎設施的費用昂貴得令人卻步。",
    "difficulty": "中等"
  },
  {
    "id": "e378",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"法官強調法院必須保持嚴格公正無私，純粹依據確鑿證據作出判決。\" data-en=\"The judge emphasized that the court must remain strictly ______ and deliver a verdict based purely on solid evidence.\">The judge emphasized that the court must remain strictly ______ and deliver a verdict based purely on solid evidence.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "impartial（公正無私的 / 不偏不倚的）",
      "impatient（不耐煩的）",
      "imperative（迫切緊要的）",
      "impulsive（衝動的）"
    ],
    "answer": 0,
    "explanation": "impartial 意為「公正客觀的 / 不偏不倚的」（同義詞 unbiased, objective）。句意：法官強調法院必須保持嚴格公正無私，純粹依據確鑿證據作出判決。",
    "difficulty": "中等"
  },
  {
    "id": "e379",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"分詞構句：原句為 ...although he knew that it might take years...，簡化為主動分詞 knowing...\" data-en=\"The ambitious entrepreneur decided to invest in the green energy project, ______ that it might take years to yield a profitable return.\">The ambitious entrepreneur decided to invest in the green energy project, ______ that it might take years to yield a profitable return.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "knowing（現在分詞構句表伴隨狀態）",
      "knew（knew）",
      "known（被知道（過去分詞））",
      "to be known（to be known）"
    ],
    "answer": 0,
    "explanation": "分詞構句：原句為 ...although he knew that it might take years...，簡化為主動分詞 knowing...",
    "difficulty": "中等"
  },
  {
    "id": "e380",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"這項新提議的政策是從其對當地就業與環境永續性的潛在影響角度進行評估的。\" data-en=\"The newly proposed policy was evaluated ______ its potential impact on local employment and environmental sustainability.\">The newly proposed policy was evaluated ______ its potential impact on local employment and environmental sustainability.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "in terms of（就……而言 / 從……角度來看）",
      "in case of（in case of）",
      "in spite of（in spite of）",
      "in search of（in search of）"
    ],
    "answer": 0,
    "explanation": "in terms of 意為「從……方面來看 / 就……而言」。句意：這項新提議的政策是從其對當地就業與環境永續性的潛在影響角度進行評估的。",
    "difficulty": "基礎"
  },
  {
    "id": "e381",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"醫生安慰焦慮的父母，孩子的高燒只是暫時的，明天就會退燒。\" data-en=\"The doctor reassured the anxious parents that their child's high fever was only ______ and would subside by tomorrow.\">The doctor reassured the anxious parents that their child's high fever was only ______ and would subside by tomorrow.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "transient（短暫的 / 轉瞬即逝的）",
      "transparent（透明的）",
      "transferable（可轉讓的）",
      "transactional（交易性的）"
    ],
    "answer": 0,
    "explanation": "transient 意為「短暫的 / 暫時的」（同義詞 temporary, fleeting）。句意：醫生安慰焦慮的父母，孩子的高燒只是暫時的，明天就會退燒。",
    "difficulty": "中等"
  },
  {
    "id": "e382",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"如果沒有充分準備與團隊合作，我們的辯論隊在對抗衛冕冠軍時毫無獲勝勝算。\" data-en=\"Without sufficient preparation and teamwork, our debate team will not ______ winning the championship against the defending champion.\">Without sufficient preparation and teamwork, our debate team will not ______ winning the championship against the defending champion.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "stand a chance of（有……的機會 / 可能性）",
      "make a difference to（make a difference to）",
      "lose track of（lose track of）",
      "put an end to（put an end to）"
    ],
    "answer": 0,
    "explanation": "stand a chance of + V-ing 意為「有……的希望/勝算/可能性」。句意：如果沒有充分準備與團隊合作，我們的辯論隊在對抗衛冕冠軍時毫無獲勝勝算。",
    "difficulty": "中等"
  },
  {
    "id": "e383",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"這位著名作家寫了一部引人入勝的回憶錄，詳細記錄了她個人的奮鬥與戰勝逆境的歷程。\" data-en=\"The famous author wrote a captivating ______ that detailed her personal struggles and triumph over adversity.\">The famous author wrote a captivating ______ that detailed her personal struggles and triumph over adversity.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "memoir（回憶錄 / 自傳）",
      "memorial（紀念碑）",
      "memorandum（備忘錄）",
      "memorization（默記死背）"
    ],
    "answer": 0,
    "explanation": "memoir 意為「回憶錄 / 自傳散文」。句意：這位著名作家寫了一部引人入勝的回憶錄，詳細記錄了她個人的奮鬥與戰勝逆境的歷程。",
    "difficulty": "基礎"
  },
  {
    "id": "e384",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"這篇論文因其連貫嚴密的論證以及從前提至結論清晰的邏輯推演而受到教授讚許。\" data-en=\"The essay was praised by the professor for its ______ arguments and clear logical progression from premise to conclusion.\">The essay was praised by the professor for its ______ arguments and clear logical progression from premise to conclusion.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "coherent（條理連貫的 / 邏輯通順的）",
      "ambiguous（含糊不清的）",
      "contradictory（互相矛盾的）",
      "arbitrary（隨心所欲武斷的）"
    ],
    "answer": 0,
    "explanation": "coherent 意為「（論述、文章）條理清晰連貫的 / 前後一致的」。句意：這篇論文因其連貫嚴密的論證以及從前提至結論清晰的邏輯推演而受到教授讚許。",
    "difficulty": "中等"
  },
  {
    "id": "e385",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"合約的措辭被刻意寫得含糊不清，以便公司在發生爭議時能夠規避法律責任。\" data-en=\"The contract's wording was intentionally ______ so that the company could avoid legal responsibilities if disputes arose.\">The contract's wording was intentionally ______ so that the company could avoid legal responsibilities if disputes arose.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "ambiguous（含糊模稜兩可的）",
      "articulate（表達清晰的）",
      "authentic（真實正宗的）",
      "applicable（適用的）"
    ],
    "answer": 0,
    "explanation": "ambiguous 意為「模稜兩可的 / 語意含混的」。句意：合約的措辭被刻意寫得含糊不清，以便公司在發生爭議時能夠規避法律責任。",
    "difficulty": "中等"
  },
  {
    "id": "e386",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"智慧型手機成癮在青少年中日益普遍，促使教育界限制在校期間的裝置使用。\" data-en=\"Smartphone addiction has become increasingly ______ among teenagers, prompting educators to restrict device usage during school hours.\">Smartphone addiction has become increasingly ______ among teenagers, prompting educators to restrict device usage during school hours.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "prevalent（盛行的 / 普遍存在的）",
      "primitive（原始簡陋的）",
      "peculiar（古怪奇特的）",
      "provisional（臨時暫定的）"
    ],
    "answer": 0,
    "explanation": "prevalent 意為「普遍盛行的 / 流行的」（同義詞 widespread）。句意：智慧型手機成癮在青少年中日益普遍，促使教育界限制在校期間的裝置使用。",
    "difficulty": "中等"
  },
  {
    "id": "e387",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"瑞士軍刀聞名全球，因為它是一款能切割、開瓶與鎖螺絲的極其多功能工具。\" data-en=\"The Swiss Army knife is famous worldwide because it is an extraordinarily ______ tool capable of cutting, opening bottles, and fixing screws.\">The Swiss Army knife is famous worldwide because it is an extraordinarily ______ tool capable of cutting, opening bottles, and fixing screws.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "versatile（多功能的 / 萬能多才多藝的）",
      "vulnerable（脆弱易受傷的）",
      "vigorous（精力充沛的）",
      "voluntary（自願的）"
    ],
    "answer": 0,
    "explanation": "versatile 意為「多功能的 / 用途廣泛的 / 多才多藝的」。句意：瑞士軍刀聞名全球，因為它是一款能切割、開瓶與鎖螺絲的極其多功能工具。",
    "difficulty": "中等"
  },
  {
    "id": "e388",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"航空安全當局對所有民航飛機實施嚴格的法規與強制性定期檢查。\" data-en=\"Aviation safety authorities impose ______ regulations and mandatory regular inspections on all commercial aircraft.\">Aviation safety authorities impose ______ regulations and mandatory regular inspections on all commercial aircraft.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "stringent（嚴格嚴厲的 / 嚴格遵守的）",
      "lenient（寬鬆仁慈的）",
      "reckless（粗心大意的）",
      "skeptical（懷疑不信的）"
    ],
    "answer": 0,
    "explanation": "stringent regulations / standards 意為「嚴格嚴厲的法規/標準」（同義詞 strict, rigorous）。句意：航空安全當局對所有民航飛機實施嚴格的法規與強制性定期檢查。",
    "difficulty": "中等"
  },
  {
    "id": "e389",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"愛因斯坦的相對論對現代物理學與我們對時空的理解產生了深遠而持久的影響。\" data-en=\"Albert Einstein's theory of relativity has exerted a ______ and lasting influence on modern physics and our understanding of space-time.\">Albert Einstein's theory of relativity has exerted a ______ and lasting influence on modern physics and our understanding of space-time.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "profound（深遠的 / 深刻博大的）",
      "trivial（微不足道的）",
      "shallow（淺薄膚淺的）",
      "passive（被動消極的）"
    ],
    "answer": 0,
    "explanation": "profound influence / impact 意為「深遠重大的影響」。句意：愛因斯坦的相對論對現代物理學與我們對時空的理解產生了深遠而持久的影響。",
    "difficulty": "中等"
  },
  {
    "id": "e390",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"工匠大師在古董木衣櫃上雕刻了錯綜複雜的花卉圖案，展現了非凡技藝。\" data-en=\"The master craftsman carved an ______ floral pattern onto the antique wooden wardrobe, showcasing extraordinary skill.\">The master craftsman carved an ______ floral pattern onto the antique wooden wardrobe, showcasing extraordinary skill.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "intricate（錯綜複雜精細的）",
      "indifferent（漠不關心的）",
      "inevitable（不可避免的）",
      "insufficient（不足夠的）"
    ],
    "answer": 0,
    "explanation": "intricate 意為「錯綜複雜的 / 雕琢精細的」（同義詞 elaborate, complex）。句意：工匠大師在古董木衣櫃上雕刻了錯綜複雜的花卉圖案，展現了非凡技藝。",
    "difficulty": "中等"
  },
  {
    "id": "e391",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"這位年輕藝術家以如此生動熱情談論歐洲古老教堂，彷彿她曾親自造訪過一般。\" data-en=\"The young artist talked about the ancient European cathedrals with such vivid passion ______ she had visited them in person.\">The young artist talked about the ancient European cathedrals with such vivid passion ______ she had visited them in person.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "as though（宛如 / 彷彿，引導假設子句）",
      "even though（even though）",
      "in case（in case）",
      "so that（so that）"
    ],
    "answer": 0,
    "explanation": "as though / as if 意為「彷彿 / 宛如……一般」，後接假設語氣子句。句意：這位年輕藝術家以如此生動熱情談論歐洲古老教堂，彷彿她曾親自造訪過一般。",
    "difficulty": "中等"
  },
  {
    "id": "e392",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"我們每天練習講英語越多，我們在流暢表達複雜想法時就會變得越熟練。\" data-en=\"______ we practice speaking English daily, ______ we will become at expressing our complex ideas fluently.\">______ we practice speaking English daily, ______ we will become at expressing our complex ideas fluently.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "The more; the better（The + 比較級, the + 比較級，越……就越……）",
      "The most; the best（The most; the best）",
      "More; better（More; better）",
      "The better; the more（The better; the more）"
    ],
    "answer": 0,
    "explanation": "The + 比較級..., the + 比較級... 句型表示「越……就越……」。句意：我們每天練習講英語越多，我們在流暢表達複雜想法時就會變得越熟練。",
    "difficulty": "基礎"
  },
  {
    "id": "e393",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"with + O + OC 附帶狀況句型：淚水（tears）與流淌（stream）為主動進行關係，故使用現在分詞 streaming\" data-en=\"The heart-wrenching scene ended with the tearful mother standing at the train platform, with tears ______ down her cheeks.\">The heart-wrenching scene ended with the tearful mother standing at the train platform, with tears ______ down her cheeks.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "streaming（with + 受詞 + 現在分詞受詞補語，表主動進行狀態）",
      "streamed（streamed）",
      "stream（）為主動進行關係）",
      "to stream（to stream）"
    ],
    "answer": 0,
    "explanation": "with + O + OC 附帶狀況句型：淚水（tears）與流淌（stream）為主動進行關係，故使用現在分詞 streaming。",
    "difficulty": "中等"
  },
  {
    "id": "e394",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"為打翻的牛奶哭泣是沒有用的；我們現在需要做的是立刻找到替代解決方案。\" data-en=\"It is no ______ crying over spilt milk; what we need to do right now is find an alternative solution immediately.\">It is no ______ crying over spilt milk; what we need to do right now is find an alternative solution immediately.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "use（It is no use + V-ing，做……是無濟於事的 / 徒勞無功的）",
      "good（good）",
      "point（point）",
      "help（幫助 / 協助，原形動詞）"
    ],
    "answer": 0,
    "explanation": "It is no use + V-ing 意為「做……是毫無用處的 / 覆水難收」。句意：為打翻的牛奶哭泣是沒有用的；我們現在需要做的是立刻找到替代解決方案。",
    "difficulty": "基礎"
  },
  {
    "id": "e395",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"be (well) worth + V-ing 固定句型：worth 後接動名詞主動形式表達被動意義（值得被閱讀）\" data-en=\"This classic historical novel is definitely well worth ______ multiple times because each reading unveils new philosophical insights.\">This classic historical novel is definitely well worth ______ multiple times because each reading unveils new philosophical insights.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "reading（be well worth + V-ing，值得做……，主動形式表被動意）",
      "to read（去閱讀，不定詞）",
      "being read（being read）",
      "to be read（to be read）"
    ],
    "answer": 0,
    "explanation": "be (well) worth + V-ing 固定句型：worth 後接動名詞主動形式表達被動意義（值得被閱讀）。",
    "difficulty": "基礎"
  },
  {
    "id": "e396",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"accuse sb of sth（指控某人……罪名）\" data-en=\"The corrupt politician was formally accused ______ taking massive bribes from real estate developers during his tenure.\">The corrupt politician was formally accused ______ taking massive bribes from real estate developers during his tenure.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "of（accuse sb of sth 指控某人犯有……罪）",
      "with（with）",
      "for（因為 / 為了）",
      "against（against）"
    ],
    "answer": 0,
    "explanation": "accuse sb of sth（指控某人……罪名）；注意對比 charge sb with sth。",
    "difficulty": "基礎"
  },
  {
    "id": "e397",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Heavy snowstorms and icy road conditions prevented thousands of stranded passengers （【完整題目中文句意】Heavy snowstorms and icy road conditions prevented thousands of stranded passengers (阻止/妨礙某人做某事) boarding their scheduled flights.） boarding their scheduled flights.\" data-en=\"Heavy snowstorms and icy road conditions prevented thousands of stranded passengers ______ boarding their scheduled flights.\">Heavy snowstorms and icy road conditions prevented thousands of stranded passengers ______ boarding their scheduled flights.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "from（prevent / stop / discourage sb from + V-ing 阻止某人做……）",
      "to（to）",
      "against（against）",
      "with（with）"
    ],
    "answer": 0,
    "explanation": "prevent / stop / ban sb from + V-ing 意為「阻止/妨礙某人做某事」。",
    "difficulty": "基礎"
  },
  {
    "id": "e398",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"在過去二十年中，臺灣的高科技半導體產業突飛猛進地成長發展。\" data-en=\"Over the past two decades, Taiwan's high-tech semiconductor industry has grown ______.\">Over the past two decades, Taiwan's high-tech semiconductor industry has grown ______.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "by leaps and bounds（突飛猛進地 / 飛速發展地）",
      "by and large（by and large）",
      "little by little（little by little）",
      "step by step（step by step）"
    ],
    "answer": 0,
    "explanation": "by leaps and bounds 為大考高頻成語，意為「突飛猛進地 / 一日千里地」。句意：在過去二十年中，臺灣的高科技半導體產業突飛猛進地成長發展。",
    "difficulty": "中等"
  },
  {
    "id": "e399",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The sudden unexpected scandal （【完整題目中文句意】The sudden unexpected scandal (給……蒙上一層陰影 / 使……蒙上陰霾) over the famous movie star's previously spotless public reputation.） over the famous movie star's previously spotless public reputation.\" data-en=\"The sudden unexpected scandal ______ over the famous movie star's previously spotless public reputation.\">The sudden unexpected scandal ______ over the famous movie star's previously spotless public reputation.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "cast a shadow（cast a shadow over 給……蒙上一層陰影）",
      "cast an eye（cast an eye）",
      "cast a light（cast a light）",
      "cast a doubt（cast a doubt）"
    ],
    "answer": 0,
    "explanation": "cast a shadow over / on sth 意為「給……蒙上一層陰影 / 使……蒙上陰霾」。",
    "difficulty": "中等"
  },
  {
    "id": "e400",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"所有建築工程皆必須嚴格遵守市政環保與安全法規進行。\" data-en=\"All construction projects must be carried out in strict ______ municipal environmental and safety regulations.\">All construction projects must be carried out in strict ______ municipal environmental and safety regulations.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "compliance with（in compliance with 符合 / 遵照……法規）",
      "comparison with（comparison with）",
      "competition with（competition with）",
      "combination with（combination with）"
    ],
    "answer": 0,
    "explanation": "in compliance with（= in accordance with）意為「遵照 / 符合（法規、標準）」。句意：所有建築工程皆必須嚴格遵守市政環保與安全法規進行。",
    "difficulty": "中等"
  },
  {
    "id": "e401",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"儘管在行銷活動上投入了數百萬美元，該產品的實際銷售數據仍未達到最初預期。\" data-en=\"Despite spending millions on the marketing campaign, the product's actual sales figures ______ original expectations.\">Despite spending millions on the marketing campaign, the product's actual sales figures ______ original expectations.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "fell short of（fall short of 未達到 / 辜負……期望）",
      "came up with（came up with）",
      "ran out of（ran out of）",
      "got rid of（got rid of）"
    ],
    "answer": 0,
    "explanation": "fall short of 意為「未達到（標準、期望）/ 辜負」。句意：儘管在行銷活動上投入了數百萬美元，該產品的實際銷售數據仍未達到最初預期。",
    "difficulty": "中等"
  },
  {
    "id": "e402",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Working parents often find it challenging to （【完整題目中文句意】Working parents often find it challenging to (在 A 與 B 之間取得良性平衡 / 兼顧兩者) a balance between demanding career responsibilities and quality family life.） a balance between demanding career responsibilities and quality family life.\" data-en=\"Working parents often find it challenging to ______ a balance between demanding career responsibilities and quality family life.\">Working parents often find it challenging to ______ a balance between demanding career responsibilities and quality family life.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "strike（strike a balance between 在……兩者之間取得平衡）",
      "make（製造 / 使得，原形動詞）",
      "break（打破 / 損壞，原形動詞）",
      "hit（擊中 / 打擊，原形動詞）"
    ],
    "answer": 0,
    "explanation": "strike a balance between A and B 意為「在 A 與 B 之間取得良性平衡 / 兼顧兩者」。",
    "difficulty": "基礎"
  },
  {
    "id": "e403",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"工程師進行了廣泛模擬，以確定跨海峽興建海底隧道在技術上是否切實可行。\" data-en=\"Engineers conducted extensive simulations to determine whether building a subsea tunnel across the strait was technically ______.\">Engineers conducted extensive simulations to determine whether building a subsea tunnel across the strait was technically ______.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "feasible（切實可行的 / 易實施的）",
      "fatal（致命的）",
      "fragile（脆弱的）",
      "fictional（虛構的）"
    ],
    "answer": 0,
    "explanation": "feasible 意為「可行的 / 做得到的」（同義詞 practicable, viable）。句意：工程師進行了廣泛模擬，以確定跨海峽興建海底隧道在技術上是否切實可行。",
    "difficulty": "中等"
  },
  {
    "id": "e404",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"儘管被告提供了一個看似合理的缺席不在場證明，但法醫證據最終證實了他有罪。\" data-en=\"Although the defendant provided a seemingly ______ alibi, the forensic evidence ultimately proved his guilt.\">Although the defendant provided a seemingly ______ alibi, the forensic evidence ultimately proved his guilt.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "plausible（看似合情合理的 / 貌似有理的）",
      "painful（痛苦的）",
      "pessimistic（悲觀的）",
      "punctual（準時的）"
    ],
    "answer": 0,
    "explanation": "plausible 意為「貌似有理的 / 說得通的」（同義詞 credible, believable）。句意：儘管被告提供了一個看似合理的缺席不在場證明，但法醫證據最終證實了他有罪。",
    "difficulty": "中等"
  },
  {
    "id": "e405",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"旨在改進的建設性批評與惡意言語謾罵之間，存在著微妙而關鍵的界限區別。\" data-en=\"There is a ______ difference between constructive criticism aimed at improvement and malicious verbal abuse.\">There is a ______ difference between constructive criticism aimed at improvement and malicious verbal abuse.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "subtle（微妙精細的）",
      "stubborn（固執的）",
      "strenuous（費力的）",
      "subsequent（隨後的）"
    ],
    "answer": 0,
    "explanation": "subtle difference 意為「微妙細微的差異」。句意：旨在改進的建設性批評與惡意言語謾罵之間，存在著微妙而關鍵的界限區別。",
    "difficulty": "中等"
  },
  {
    "id": "e406",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"為超出你個人控制範圍的事情擔憂是毫無意義的。\" data-en=\"There is no ______ in worrying about things that are beyond your personal control.\">There is no ______ in worrying about things that are beyond your personal control.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "point（There is no point in + V-ing，做……是毫無意義的）",
      "need（need）",
      "reason（reason）",
      "purpose（目的 / 意圖用途決心決意）"
    ],
    "answer": 0,
    "explanation": "There is no point in + V-ing 意為「做……是毫無意義的 / 徒勞的」。句意：為超出你個人控制範圍的事情擔憂是毫無意義的。",
    "difficulty": "基礎"
  },
  {
    "id": "e407",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"這對新婚夫婦決定在安靜公園與地鐵站附近購買一套公寓。\" data-en=\"The newly married couple decided to buy an apartment in the ______ of a quiet public park and a subway station.\">The newly married couple decided to buy an apartment in the ______ of a quiet public park and a subway station.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "vicinity（in the vicinity of 在……附近 / 鄰近地區）",
      "validity（有效性）",
      "vanity（虛榮心）",
      "variety（多樣性）"
    ],
    "answer": 0,
    "explanation": "in the vicinity of sth 意為「在……附近 / 鄰近地區」。句意：這對新婚夫婦決定在安靜公園與地鐵站附近購買一套公寓。",
    "difficulty": "中等"
  },
  {
    "id": "e408",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"哲學家們經常在道德義務與法律義務之間作出明確區分。\" data-en=\"Philosophers often ______ a clear distinction between moral duties and legal obligations.\">Philosophers often ______ a clear distinction between moral duties and legal obligations.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "draw（draw a distinction between 區分 / 劃定……之間的界線）",
      "make（製造 / 使得，原形動詞）",
      "find（找到 / 發現，原形動詞）",
      "give（給予，原形動詞）"
    ],
    "answer": 0,
    "explanation": "draw a distinction between A and B 意為「在 A 與 B 之間作出明確區分」。句意：哲學家們經常在道德義務與法律義務之間作出明確區分。",
    "difficulty": "中等"
  },
  {
    "id": "e409",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"這位貪婪的商人以經營慈善非營利組織為偽裝掩護，積累了巨額財富。\" data-en=\"The greedy businessman accumulated vast wealth under the ______ of running a charitable non-profit organization.\">The greedy businessman accumulated vast wealth under the ______ of running a charitable non-profit organization.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "guise（under the guise of 在……偽裝掩護下）",
      "glory（光榮）",
      "guidance（指導）",
      "gesture（手勢）"
    ],
    "answer": 0,
    "explanation": "under the guise of 意為「在……的偽裝/藉口掩護下」。句意：這位貪婪的商人以經營慈善非營利組織為偽裝掩護，積累了巨額財富。",
    "difficulty": "中等"
  },
  {
    "id": "e410",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"老師稱讚該學生對同學彬彬有禮的態度與禮貌行為。\" data-en=\"The teacher commended the student for his ______ manners and polite behavior toward his classmates.\">The teacher commended the student for his ______ manners and polite behavior toward his classmates.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "courteous（彬彬有禮的 / 謙恭的）",
      "cynical（憤世嫉俗的）",
      "clumsy（笨拙的）",
      "crucial（至關重要的）"
    ],
    "answer": 0,
    "explanation": "courteous 意為「彬彬有禮的 / 謙遜客氣的」（同義詞 polite, respectful）。句意：老師稱讚該學生對同學彬彬有禮的態度與禮貌行為。",
    "difficulty": "基礎"
  },
  {
    "id": "e411",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"By the time + 過去式動詞時，主要子句使用「過去完成式 had + p.p.」\" data-en=\"By the time the firefighter squad arrived at the scene, the blazing fire ______ by the torrential rain.\">By the time the firefighter squad arrived at the scene, the blazing fire ______ by the torrential rain.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "had been extinguished（過去完成式被動語態）",
      "has been extinguished（has been extinguished）",
      "was extinguishing（was extinguishing）",
      "extinguished（撲滅 / 熄滅消滅）"
    ],
    "answer": 0,
    "explanation": "By the time + 過去式動詞時，主要子句使用「過去完成式 had + p.p.」。火勢被大雨撲滅，故使用被動語態 had been extinguished。",
    "difficulty": "中等"
  },
  {
    "id": "e412",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"為了在嚴酷的極地冬季生存，北極動物演化出了顯著的生物適應特徵以保存體溫。\" data-en=\"In order to survive the harsh polar winter, arctic animals have developed remarkable biological ______ to conserve body heat.\">In order to survive the harsh polar winter, arctic animals have developed remarkable biological ______ to conserve body heat.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "adaptations（生物適應特徵 / 調適）",
      "adoptions（收養採用）",
      "addictions（成癮）",
      "admirations（欽佩）"
    ],
    "answer": 0,
    "explanation": "adaptation 意為「（生物演化）適應性特徵 / 適應機制」。句意：為了在嚴酷的極地冬季生存，北極動物演化出了顯著的生物適應特徵以保存體溫。",
    "difficulty": "基礎"
  },
  {
    "id": "e413",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"聯合國成立於 1945 年，旨在促進國際和平、安全以及各國間的友好合作。\" data-en=\"The United Nations was established in 1945 to ______ international peace, security, and friendly cooperation among all nations.\">The United Nations was established in 1945 to ______ international peace, security, and friendly cooperation among all nations.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "promote（促進 / 倡導 / 推動）",
      "prohibit（禁止）",
      "postpone（延期）",
      "provoke（激怒挑釁）"
    ],
    "answer": 0,
    "explanation": "promote peace and security 意為「促進和平與安全」。句意：聯合國成立於 1945 年，旨在促進國際和平、安全以及各國間的友好合作。",
    "difficulty": "基礎"
  },
  {
    "id": "e414",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"嚴厲的法律制裁與高額罰款對企業逃漏稅與環境污染起到了強大的威懾遏阻作用。\" data-en=\"Severe legal penalties and heavy fines serve as a powerful ______ against corporate tax evasion and environmental pollution.\">Severe legal penalties and heavy fines serve as a powerful ______ against corporate tax evasion and environmental pollution.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "deterrent（威懾物 / 遏阻力）",
      "deterioration（惡化）",
      "determination（決心）",
      "destination（目的地）"
    ],
    "answer": 0,
    "explanation": "deterrent 意為「威懾物 / 遏止力 / 威懾手段」。句意：嚴厲的法律制裁與高額罰款對企業逃漏稅與環境污染起到了強大的威懾遏阻作用。",
    "difficulty": "中等"
  },
  {
    "id": "e415",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"隨著數位串流平臺的迅速興起，傳統 VHS 錄影帶與錄音帶播放機已完全被時代淘汰。\" data-en=\"With the rapid advent of digital streaming platforms, traditional VHS videotapes and cassette players have become completely ______.\">With the rapid advent of digital streaming platforms, traditional VHS videotapes and cassette players have become completely ______.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "obsolete（過時淘汰的 / 廢棄不用的）",
      "obligatory（強制的）",
      "obscure（晦澀模糊的）",
      "optimistic（樂觀的）"
    ],
    "answer": 0,
    "explanation": "obsolete 意為「過時淘汰的 / 已廢棄的」（同義詞 outdated）。句意：隨著數位串流平臺的迅速興起，傳統 VHS 錄影帶與錄音帶播放機已完全被時代淘汰。",
    "difficulty": "中等"
  },
  {
    "id": "e416",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"經過數小時激烈辯論，陪審團達成了全體一致的無罪判決，判定被告一級謀殺罪不成立。\" data-en=\"After hours of intense debate, the jury reached a ______ verdict that the defendant was not guilty of first-degree murder.\">After hours of intense debate, the jury reached a ______ verdict that the defendant was not guilty of first-degree murder.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "unanimous（全體一致的 / 無異議的）",
      "unilateral（單方面的）",
      "anonymous（匿名的）",
      "monotonous（單調的）"
    ],
    "answer": 0,
    "explanation": "unanimous 意為「全體一致贊成的 / 毫無異議的」。句意：經過數小時激烈辯論，陪審團達成了全體一致的無罪判決，判定被告一級謀殺罪不成立。",
    "difficulty": "中等"
  },
  {
    "id": "e417",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"審計師受召對公司的財務資產負債表進行澈底嚴格審查，以查找任何做假帳欺詐跡象。\" data-en=\"Auditors were summoned to ______ the company's financial balance sheets for any signs of accounting fraud.\">Auditors were summoned to ______ the company's financial balance sheets for any signs of accounting fraud.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "scrutinize（仔細審查 / 澈底檢查）",
      "speculate（推測投機）",
      "stimulate（刺激激勵）",
      "substitute（替代）"
    ],
    "answer": 0,
    "explanation": "scrutinize 意為「仔細嚴格審查 / 澈底檢查」（同義詞 examine closely）。句意：審計師受召對公司的財務資產負債表進行澈底嚴格審查，以查找任何做假帳欺詐跡象。",
    "difficulty": "中等"
  },
  {
    "id": "e418",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"儘管衛冕冠軍保持顯著領先，但他絕不能盲目自滿，必須保持專注直到終場哨聲響起。\" data-en=\"Even though the champion holds a comfortable lead, he cannot afford to be ______ and must stay focused until the final whistle.\">Even though the champion holds a comfortable lead, he cannot afford to be ______ and must stay focused until the final whistle.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "complacent（自滿沾沾自喜的 / 麻痺大意的）",
      "competent（有能力的）",
      "compassionate（有同情心的）",
      "compatible（相容相契的）"
    ],
    "answer": 0,
    "explanation": "complacent 意為「自滿的 / 盲目樂觀麻痺大意的」。句意：儘管衛冕冠軍保持顯著領先，但他絕不能盲目自滿，必須保持專注直到終場哨聲響起。",
    "difficulty": "中等"
  },
  {
    "id": "e419",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"市長沒有執著於不切實際的理想，而是採取了務實求真的做法來解決城市迫切的住房短缺問題。\" data-en=\"Instead of clinging to unrealistic ideals, the mayor adopted a ______ approach to solve the city's urgent housing shortage.\">Instead of clinging to unrealistic ideals, the mayor adopted a ______ approach to solve the city's urgent housing shortage.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "pragmatic（務實求真的 / 重實效的）",
      "pessimistic（悲觀的）",
      "pathetic（可憐可悲的）",
      "peculiar（古怪的）"
    ],
    "answer": 0,
    "explanation": "pragmatic 意為「務實的 / 重實效的」（同義詞 practical, realistic）。句意：市長沒有執著於不切實際的理想，而是採取了務實求真的做法來解決城市迫切的住房短缺問題。",
    "difficulty": "中等"
  },
  {
    "id": "e420",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"在航空安全與外科手術中，精確性與清晰溝通具有至高無上的重要性。\" data-en=\"In aviation safety and surgical operations, precision and clear communication are of ______ importance.\">In aviation safety and surgical operations, precision and clear communication are of ______ importance.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "paramount（首要的 / 至高無上的）",
      "permanent（永久的）",
      "parallel（平行的）",
      "perishable（易腐爛的）"
    ],
    "answer": 0,
    "explanation": "of paramount importance 意為「至關重要 / 首要關鍵的」（同義詞 of supreme importance）。句意：在航空安全與外科手術中，精確性與清晰溝通具有至高無上的重要性。",
    "difficulty": "中等"
  },
  {
    "id": "e421",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"Only + 介系詞片語置於句首時，主要子句必須倒裝（助動詞 can 提至主詞 we 前面：Only by... can we...）\" data-en=\"Only by working together collaboratively ______ overcome the unprecedented global challenges posed by climate change.\">Only by working together collaboratively ______ overcome the unprecedented global challenges posed by climate change.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "can we（Only by + V-ing 置於句首之助動詞倒裝）",
      "we can（we can）",
      "we will（we will）",
      "do we can（do we can）"
    ],
    "answer": 0,
    "explanation": "Only + 介系詞片語置於句首時，主要子句必須倒裝（助動詞 can 提至主詞 we 前面：Only by... can we...）。",
    "difficulty": "中等"
  },
  {
    "id": "e422",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"So + 形容詞置於句首倒裝句型：So captivating was the performance that...（表演如此扣人心弦，以致於全體觀眾自始至終沉浸其中）\" data-en=\"So captivating ______ that everyone in the auditorium was completely engrossed from beginning to end.\">So captivating ______ that everyone in the auditorium was completely engrossed from beginning to end.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "was the magician's performance（So + adj + be + S + that... 如此……以致於之倒裝）",
      "the magician's performance was（the magician's performance was）",
      "the performance of magician was（the performance of magician was）",
      "had been the performance（had been the performance）"
    ],
    "answer": 0,
    "explanation": "So + 形容詞置於句首倒裝句型：So captivating was the performance that...（表演如此扣人心弦，以致於全體觀眾自始至終沉浸其中）。",
    "difficulty": "中等"
  },
  {
    "id": "e423",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"該慈善基金會堅定致力於為弱勢兒童提供優質教育資源。\" data-en=\"The charitable foundation is firmly committed to ______ underprivileged children with quality educational resources.\">The charitable foundation is firmly committed to ______ underprivileged children with quality educational resources.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "providing（be committed to + 動名詞 V-ing，致力於做……）",
      "provide（提供 / 供應裝備規定）",
      "provided（只要 / 在……條件下倘若）",
      "provision（條款 / 規定糧食供應儲備）"
    ],
    "answer": 0,
    "explanation": "be committed / dedicated / devoted to + V-ing（其中 to 為介系詞，後接動名詞）。句意：該慈善基金會堅定致力於為弱勢兒童提供優質教育資源。",
    "difficulty": "基礎"
  },
  {
    "id": "e424",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"object to + V-ing（to 為介系詞，後接動名詞，表示「強烈反對做某事」）\" data-en=\"Many environmental activists strongly object to ______ nuclear waste near coastal ecological reserves.\">Many environmental activists strongly object to ______ nuclear waste near coastal ecological reserves.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "dumping（object to + 動名詞 V-ing，反對做……）",
      "dump（dump）",
      "dumped（dumped）",
      "be dumped（be dumped）"
    ],
    "answer": 0,
    "explanation": "object to + V-ing（to 為介系詞，後接動名詞，表示「強烈反對做某事」）。",
    "difficulty": "基礎"
  },
  {
    "id": "e425",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"我們大家都非常期盼在即將到來的農曆新年去鄉下探望祖父母。\" data-en=\"We are all eagerly looking forward to ______ our grandparents in the countryside during the upcoming Lunar New Year.\">We are all eagerly looking forward to ______ our grandparents in the countryside during the upcoming Lunar New Year.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "visiting（look forward to + 動名詞 V-ing，盼望期待……）",
      "visit（visit）",
      "visited（visited）",
      "visitation（visitation）"
    ],
    "answer": 0,
    "explanation": "look forward to + V-ing（大考最高頻片語，to 為介系詞後接動名詞）。句意：我們大家都非常期盼在即將到來的農曆新年去鄉下探望祖父母。",
    "difficulty": "基礎"
  },
  {
    "id": "e426",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"獎學金的核發完全由學術評審委員會自行裁量決定。\" data-en=\"The granting of scholarships is left entirely ______ the academic review committee.\">The granting of scholarships is left entirely ______ the academic review committee.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "at the discretion of（由……自行裁量決定）",
      "at the mercy of（at the mercy of）",
      "at the expense of（at the expense of）",
      "at the risk of（at the risk of）"
    ],
    "answer": 0,
    "explanation": "at the discretion of sb 意為「由某人自行斟酌裁定 / 自由裁量」。句意：獎學金的核發完全由學術評審委員會自行裁量決定。",
    "difficulty": "中等"
  },
  {
    "id": "e427",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：All employees must act in strict （法規規章） the company's code of conduct and safety guidelines.\" data-en=\"All employees must act in strict ______ the company's code of conduct and safety guidelines.\">All employees must act in strict ______ the company's code of conduct and safety guidelines.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "accordance with（in accordance with 依照 / 根據……準則）",
      "contrast with（contrast with）",
      "collision with（collision with）",
      "competition with（competition with）"
    ],
    "answer": 0,
    "explanation": "in accordance with sth（= in compliance with）意為「依照 / 依循 / 根據（法規規章）」。",
    "difficulty": "基礎"
  },
  {
    "id": "e428",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"投資綠色再生能源前期費用可能昂貴，但長遠來看必定會帶來豐厚回報。\" data-en=\"Investing in renewable green energy may be expensive upfront, but it will definitely pay off ______.\">Investing in renewable green energy may be expensive upfront, but it will definitely pay off ______.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "in the long run（從長遠來看 / 終究）",
      "in the short run（in the short run）",
      "on the spot（on the spot）",
      "by the way（by the way）"
    ],
    "answer": 0,
    "explanation": "in the long run 意為「從長遠來看 / 終究會有回報」。句意：投資綠色再生能源前期費用可能昂貴，但長遠來看必定會帶來豐厚回報。",
    "difficulty": "基礎"
  },
  {
    "id": "e429",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The school principal promised to （【完整題目中文句意】The school principal promised to (務必確保 / 留心使……做到) it that every student receives equal attention and psychological counseling.） it that every student receives equal attention and psychological counseling.\" data-en=\"The school principal promised to ______ it that every student receives equal attention and psychological counseling.\">The school principal promised to ______ it that every student receives equal attention and psychological counseling.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "see to（see to it that... 務必確保……）",
      "look to（look to）",
      "take to（take to）",
      "turn to（turn to）"
    ],
    "answer": 0,
    "explanation": "see to it that... 為大考高頻核心片語，意為「務必確保 / 留心使……做到」。",
    "difficulty": "中等"
  },
  {
    "id": "e430",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"在年度紀念儀式上，市民聚集在紀念碑前向為國捐軀的陣亡英雄致敬。\" data-en=\"During the annual memorial ceremony, citizens gathered at the monument to ______ to the fallen heroes who sacrificed their lives for the nation.\">During the annual memorial ceremony, citizens gathered at the monument to ______ to the fallen heroes who sacrificed their lives for the nation.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "pay tribute（pay tribute to 向……致敬 / 敬悼）",
      "pay attention（pay attention）",
      "pay visits（pay visits）",
      "pay respects（pay respects）"
    ],
    "answer": 0,
    "explanation": "pay tribute / homage to sb 意為「向……表達由衷敬意 / 悼念致敬」。句意：在年度紀念儀式上，市民聚集在紀念碑前向為國捐軀的陣亡英雄致敬。",
    "difficulty": "基礎"
  },
  {
    "id": "e431",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"在鼓舞人心的畢業典禮演講中，小說家汲取了自己童年的奮鬥經歷來勉勵畢業生永不放棄希望。\" data-en=\"In his inspiring commencement speech, the novelist ______ his own childhood struggles to encourage graduates never to lose hope.\">In his inspiring commencement speech, the novelist ______ his own childhood struggles to encourage graduates never to lose hope.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "drew on（利用 / 借鑒 / 汲取經驗）",
      "drew back（drew back）",
      "drew up（drew up）",
      "drew out（drew out）"
    ],
    "answer": 0,
    "explanation": "draw on / upon sth 意為「借鑒 / 汲取 / 利用（經驗、記憶、資源）」。句意：在鼓舞人心的畢業典禮演講中，小說家汲取了自己童年的奮鬥經歷來勉勵畢業生永不放棄希望。",
    "difficulty": "中等"
  },
  {
    "id": "e432",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"物理教授對量子力學進行了極其清晰明瞭的解釋，使初學者也能掌握基本概念。\" data-en=\"The physics professor delivered a remarkably ______ explanation of quantum mechanics, enabling even beginners to grasp the fundamental concepts.\">The physics professor delivered a remarkably ______ explanation of quantum mechanics, enabling even beginners to grasp the fundamental concepts.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "lucid（清晰易懂的 / 明瞭透徹的）",
      "ludicrous（荒唐可笑的）",
      "lethal（致命的）",
      "lukewarm（微溫冷淡的）"
    ],
    "answer": 0,
    "explanation": "lucid 意為「（表達、解釋）清晰明白的 / 易懂的」（同義詞 clear, articulate）。句意：物理教授對量子力學進行了極其清晰明瞭的解釋，使初學者也能掌握基本概念。",
    "difficulty": "中等"
  },
  {
    "id": "e433",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"厭倦了日常辦公室文書工作的平凡乏味，年輕人辭職去追求成為野生動物攝影師的夢想。\" data-en=\"Tired of the ______ routine of daily office paperwork, the young man resigned to pursue his dream of becoming a wildlife photographer.\">Tired of the ______ routine of daily office paperwork, the young man resigned to pursue his dream of becoming a wildlife photographer.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "mundane（平凡單調的 / 世俗乏味的）",
      "magnificent（壯麗宏偉的）",
      "miraculous（奇蹟般的）",
      "meticulous（細緻嚴謹的）"
    ],
    "answer": 0,
    "explanation": "mundane 意為「平凡乏味的 / 單調世俗的」（同義詞 dull, ordinary）。句意：厭倦了日常辦公室文書工作的平凡乏味，年輕人辭職去追求成為野生動物攝影師的夢想。",
    "difficulty": "中等"
  },
  {
    "id": "e434",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"莎士比亞是一位極其多產的劇作家，一生創作了數十部流芳百世的戲劇與數百首十四行詩。\" data-en=\"William Shakespeare was an extraordinarily ______ playwright who authored dozens of timeless plays and hundreds of sonnets during his lifetime.\">William Shakespeare was an extraordinarily ______ playwright who authored dozens of timeless plays and hundreds of sonnets during his lifetime.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "prolific（多產的 / 作品豐富的）",
      "profound（深刻的）",
      "primitive（原始的）",
      "provisional（臨時的）"
    ],
    "answer": 0,
    "explanation": "prolific writer / artist 意為「多產的 / 創作豐富的作家/藝術家」。句意：莎士比亞是一位極其多產的劇作家，一生創作了數十部流芳百世的戲劇與數百首十四行詩。",
    "difficulty": "中等"
  },
  {
    "id": "e435",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"總理警告，若鄰國軍隊發動跨境襲擊，本國將以壓倒性軍事力量進行堅決反擊報復。\" data-en=\"The prime minister warned that if neighboring troops launched a cross-border attack, the nation would ______ with overwhelming military force.\">The prime minister warned that if neighboring troops launched a cross-border attack, the nation would ______ with overwhelming military force.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "retaliate（報復 / 反擊）",
      "reconcile（和解調解）",
      "relinquish（放棄讓出）",
      "reinforce（加強增援）"
    ],
    "answer": 0,
    "explanation": "retaliate 意為「報復 / 進行反擊」（同義詞 strike back）。句意：總理警告，若鄰國軍隊發動跨境襲擊，本國將以壓倒性軍事力量進行堅決反擊報復。",
    "difficulty": "中等"
  },
  {
    "id": "e436",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"透過頑強不屈的努力與不斷的實驗，醫學研究團隊終於發現了治癒該疾病的突破性療法。\" data-en=\"Through ______ efforts and continuous experimentation, the medical research team finally discovered a breakthrough cure for the disease.\">Through ______ efforts and continuous experimentation, the medical research team finally discovered a breakthrough cure for the disease.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "tenacious（頑強不屈的 / 執著堅韌的）",
      "tentative（暫時未定的）",
      "treacherous（險惡背叛的）",
      "trivial（微不足道的）"
    ],
    "answer": 0,
    "explanation": "tenacious 意為「堅韌不拔的 / 頑強執著的」（同義詞 persistent, steadfast）。句意：透過頑強不屈的努力與不斷的實驗，醫學研究團隊終於發現了治癒該疾病的突破性療法。",
    "difficulty": "中等"
  },
  {
    "id": "e437",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"這位資深護理師因在疫情期間對病患照顧的典範級奉獻而榮獲國家大獎。\" data-en=\"The senior nurse was honored with a national award for her ______ dedication to patient care throughout the pandemic.\">The senior nurse was honored with a national award for her ______ dedication to patient care throughout the pandemic.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "exemplary（堪為楷模的 / 典範的）",
      "excessive（過度的）",
      "exclusive（排他的）",
      "exotic（異國風情的）"
    ],
    "answer": 0,
    "explanation": "exemplary 意為「堪為楷模的 / 值得效仿典範的」。句意：這位資深護理師因在疫情期間對病患照顧的典範級奉獻而榮獲國家大獎。",
    "difficulty": "中等"
  },
  {
    "id": "e438",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"在疫情爆發期間，每位公民都極有必要嚴格遵守公共衛生防疫準則。\" data-en=\"It is imperative that every citizen ______ closely with public health guidelines during an epidemic outbreak.\">It is imperative that every citizen ______ closely with public health guidelines during an epidemic outbreak.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "comply（遵守 / 順從）",
      "complies（complies）",
      "complied（complied）",
      "complying（順從 / 遵守）"
    ],
    "answer": 0,
    "explanation": "It is imperative / crucial / essential that + S + (should) + 原形動詞（意志動詞虛擬語氣，should 常省略直接用原形動詞 comply）。",
    "difficulty": "中等"
  },
  {
    "id": "e439",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"無論挑戰起初看起來多麼令人生畏，在達成目標之前我們絕不放棄。\" data-en=\"No matter how ______ the challenge may seem at first, we will never give up until we achieve our goal.\">No matter how ______ the challenge may seem at first, we will never give up until we achieve our goal.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "daunting（No matter how + 形容詞 + S + be/seem，無論多麼令人畏懼）",
      "daunt（daunt）",
      "daunted（daunted）",
      "dauntlessly（dauntlessly）"
    ],
    "answer": 0,
    "explanation": "No matter how + adj / adv + S + V（= However + adj / adv... 無論多麼……）。句意：無論挑戰起初看起來多麼令人生畏，在達成目標之前我們絕不放棄。",
    "difficulty": "中等"
  },
  {
    "id": "e440",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"be accustomed to + V-ing（= be used to + V-ing 習慣於做某事，to 為介系詞後接動名詞）\" data-en=\"Having lived in London for over ten years, she is completely accustomed to ______ on the left side of the road.\">Having lived in London for over ten years, she is completely accustomed to ______ on the left side of the road.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "driving（be accustomed to + 動名詞 V-ing，習慣於……）",
      "drive（駕駛 / 驅使，原形動詞）",
      "drove（drove）",
      "be driven（be driven）"
    ],
    "answer": 0,
    "explanation": "be accustomed to + V-ing（= be used to + V-ing 習慣於做某事，to 為介系詞後接動名詞）。",
    "difficulty": "基礎"
  },
  {
    "id": "e441",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"當遊客們設法瞥見一隻珍稀雪豹漫步在岩石山脊上時，大家都興奮不已。\" data-en=\"The tourists were thrilled when they managed to ______ a rare snow leopard roaming across the rocky mountain ridge.\">The tourists were thrilled when they managed to ______ a rare snow leopard roaming across the rocky mountain ridge.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "catch a glimpse of（瞥見 / 看見一眼）",
      "make sense of（make sense of）",
      "keep track of（keep track of）",
      "lose sight of（lose sight of）"
    ],
    "answer": 0,
    "explanation": "catch a glimpse of 意為「瞥見 / 無意中看到一眼」。句意：當遊客們設法瞥見一隻珍稀雪豹漫步在岩石山脊上時，大家都興奮不已。",
    "difficulty": "基礎"
  },
  {
    "id": "e442",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"災難性的火山爆發對區域空中交通造成了嚴重擾亂，導致全歐陸數千架航班被取消。\" data-en=\"The catastrophic volcanic eruption ______ with regional air travel, causing thousands of flights to be canceled across the continent.\">The catastrophic volcanic eruption ______ with regional air travel, causing thousands of flights to be canceled across the continent.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "played havoc（play havoc with 對……造成嚴重破壞 / 擾亂浩劫）",
      "played tricks（played tricks）",
      "played roles（played roles）",
      "played games（played games）"
    ],
    "answer": 0,
    "explanation": "play havoc with sth 意為「對……造成極大混亂 / 嚴重破壞擾亂」。句意：災難性的火山爆發對區域空中交通造成了嚴重擾亂，導致全歐陸數千架航班被取消。",
    "difficulty": "中等"
  },
  {
    "id": "e443",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"偵探向悲痛的家屬保證，他們將竭盡一切全力揭開神秘失蹤案背後的真相。\" data-en=\"Detectives promised the grieving family that they would ______ to uncover the truth behind the mysterious disappearance.\">Detectives promised the grieving family that they would ______ to uncover the truth behind the mysterious disappearance.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "leave no stone unturned（竭盡全力 / 想方設法搜查一切）",
      "turn a deaf ear（turn a deaf ear）",
      "burn the midnight oil（burn the midnight oil）",
      "hit the nail on the head（hit the nail on the head）"
    ],
    "answer": 0,
    "explanation": "leave no stone unturned 為大考最高頻成語，意為「竭盡全力 / 翻箱倒櫃不放過任何蛛絲馬跡」。句意：偵探向悲痛的家屬保證，他們將竭盡一切全力揭開神秘失蹤案背後的真相。",
    "difficulty": "中等"
  },
  {
    "id": "e444",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"多年的過度勞累、慢性失眠與不良飲食最終對他的身體健康造成了沉重打擊。\" data-en=\"Years of excessive overwork, chronic insomnia, and poor nutrition finally ______ his physical health.\">Years of excessive overwork, chronic insomnia, and poor nutrition finally ______ his physical health.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "took a heavy toll on（take a toll on 對……造成沉重打擊損害）",
      "took advantage of（took advantage of）",
      "took charge of（took charge of）",
      "took pride in（took pride in）"
    ],
    "answer": 0,
    "explanation": "take a (heavy) toll on sth 意為「對……造成嚴重損害 / 產生不良後果」。句意：多年的過度勞累、慢性失眠與不良飲食最終對他的身體健康造成了沉重打擊。",
    "difficulty": "中等"
  },
  {
    "id": "e445",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The patient said she could no longer （痛苦、不滿） the constant throbbing pain in her lower back and demanded immediate surgery.\" data-en=\"The patient said she could no longer ______ the constant throbbing pain in her lower back and demanded immediate surgery.\">The patient said she could no longer ______ the constant throbbing pain in her lower back and demanded immediate surgery.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "put up with（忍受 / 容忍）",
      "look up to（look up to）",
      "keep up with（keep up with）",
      "come up with（come up with）"
    ],
    "answer": 0,
    "explanation": "put up with（= tolerate, endure）意為「容忍 / 忍受（痛苦、不滿）」。",
    "difficulty": "基礎"
  },
  {
    "id": "e446",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"博物館館長證實這尊古青銅花瓶確實是來自商代的正宗真品文物。\" data-en=\"The museum curator verified that the ancient bronze vase was indeed an ______ artifact from the Shang Dynasty.\">The museum curator verified that the ancient bronze vase was indeed an ______ artifact from the Shang Dynasty.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "authentic（真正的 / 正宗真品的）",
      "artificial（人造的）",
      "audacious（大膽的）",
      "autonomous（自治的）"
    ],
    "answer": 0,
    "explanation": "authentic 意為「正宗真品的 / 真實非偽造的」（同義詞 genuine）。句意：博物館館長證實這尊古青銅花瓶確實是來自商代的正宗真品文物。",
    "difficulty": "基礎"
  },
  {
    "id": "e447",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"相較於該專案數百萬美元的總預算，十美元的微小運費實際上微不足道可忽略不計。\" data-en=\"Compared to the overall multi-million dollar budget of the project, a minor ten-dollar shipping fee is practically ______.\">Compared to the overall multi-million dollar budget of the project, a minor ten-dollar shipping fee is practically ______.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "negligible（微不足道的 / 可忽略不計的）",
      "notable（顯著的）",
      "notorious（惡名昭彰的）",
      "numerous（許多的）"
    ],
    "answer": 0,
    "explanation": "negligible 意為「微不足道的 / 可忽略不計的」（同義詞 trivial, insignificant）。句意：相較於該專案數百萬美元的總預算，十美元的微小運費實際上微不足道可忽略不計。",
    "difficulty": "中等"
  },
  {
    "id": "e448",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"亞馬遜雨林是數千種地球上其他任何地方都找不到的本土原生動植物物種的家園。\" data-en=\"The Amazon rainforest is home to thousands of ______ plant and animal species found nowhere else on Earth.\">The Amazon rainforest is home to thousands of ______ plant and animal species found nowhere else on Earth.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "indigenous（當地的 / 本土土生的）",
      "ingenious（精巧巧妙的）",
      "indifferent（冷漠的）",
      "indignant（憤怒不平的）"
    ],
    "answer": 0,
    "explanation": "indigenous to 意為「土生土長的 / 本地原產的」（同義詞 native to）。句意：亞馬遜雨林是數千種地球上其他任何地方都找不到的本土原生動植物物種的家園。",
    "difficulty": "中等"
  },
  {
    "id": "e449",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"科學家發表了一場精彩演講，闡述人腦神經迴路如何處理複雜的感官資訊。\" data-en=\"The scientist delivered a fascinating lecture on how human brain neural ______ process complex sensory information.\">The scientist delivered a fascinating lecture on how human brain neural ______ process complex sensory information.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "circuits（神經迴路 / 電路）",
      "circles（圓圈）",
      "circumstances（情況）",
      "circulations（循環流通）"
    ],
    "answer": 0,
    "explanation": "neural circuits 意為「大腦神經迴路」。句意：科學家發表了一場精彩演講，闡述人腦神經迴路如何處理複雜的感官資訊。",
    "difficulty": "基礎"
  },
  {
    "id": "e450",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"過量飲用含糖飲料會增加罹患第二型糖尿病與肥胖症的風險。\" data-en=\"Excessive consumption of sugary beverages can ______ the risk of developing type 2 diabetes and obesity.\">Excessive consumption of sugary beverages can ______ the risk of developing type 2 diabetes and obesity.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "heighten（提高 / 增加）",
      "hesitate（猶豫）",
      "hinder（阻礙）",
      "humiliate（羞辱）"
    ],
    "answer": 0,
    "explanation": "heighten the risk of 意為「提高……的風險」（同義詞 increase）。句意：過量飲用含糖飲料會增加罹患第二型糖尿病與肥胖症的風險。",
    "difficulty": "基礎"
  },
  {
    "id": "e451",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The brave rescue team ventured into the collapsed building to （【完整題目中文句意】The brave rescue team ventured into the collapsed building to (營救受困生還者) trapped earthquake survivors.） trapped earthquake survivors.\" data-en=\"The brave rescue team ventured into the collapsed building to ______ trapped earthquake survivors.\">The brave rescue team ventured into the collapsed building to ______ trapped earthquake survivors.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "rescue（營救 / 救援）",
      "resist（抵抗）",
      "resemble（相像）",
      "resign（辭職）"
    ],
    "answer": 0,
    "explanation": "rescue trapped survivors 意為「營救受困生還者」。",
    "difficulty": "基礎"
  },
  {
    "id": "e452",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The international summit aimed to foster peaceful dialogue and enhance economic （【完整題目中文句意】The international summit aimed to foster peaceful dialogue and enhance economic (增進經濟合作) between the two rival nations.） between the two rival nations.\" data-en=\"The international summit aimed to foster peaceful dialogue and enhance economic ______ between the two rival nations.\">The international summit aimed to foster peaceful dialogue and enhance economic ______ between the two rival nations.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "cooperation（合作 / 協作）",
      "confrontation（對抗）",
      "contamination（污染）",
      "consumption（消費）"
    ],
    "answer": 0,
    "explanation": "enhance economic cooperation 意為「增進經濟合作」。",
    "difficulty": "基礎"
  },
  {
    "id": "e453",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：To prevent food spoilage, dairy products should always be stored in the refrigerator at a low （【完整題目中文句意】To prevent food spoilage, dairy products should always be stored in the refrigerator at a low (在低溫下保存).）.\" data-en=\"To prevent food spoilage, dairy products should always be stored in the refrigerator at a low ______.\">To prevent food spoilage, dairy products should always be stored in the refrigerator at a low ______.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "temperature（溫度）",
      "temperament（氣質性情）",
      "temporary（暫時的）",
      "temptation（誘惑）"
    ],
    "answer": 0,
    "explanation": "stored at a low temperature 意為「在低溫下保存」。",
    "difficulty": "基礎"
  },
  {
    "id": "e454",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"無論未來發生什麼，我們都必須團結一致，患難與共。\" data-en=\"______ happens in the future, we must remain united and support each other through thick and thin.\">______ happens in the future, we must remain united and support each other through thick and thin.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "Whatever（無論發生什麼，引導讓步子句）",
      "However（However）",
      "Whenever（Whenever）",
      "Wherever（Wherever）"
    ],
    "answer": 0,
    "explanation": "Whatever happens... 意為「無論發生何事……」。句意：無論未來發生什麼，我們都必須團結一致，患難與共。",
    "difficulty": "基礎"
  },
  {
    "id": "e455",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"她沒有抱怨困難，而是立即採取切實行動去解決問題。\" data-en=\"______ complaining about the difficulties, she took immediate action to solve the problem practically.\">______ complaining about the difficulties, she took immediate action to solve the problem practically.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "Instead of（Instead of + V-ing，而不是…… / 代替）",
      "In spite of（In spite of）",
      "Because of（Because of）",
      "Due to（Due to）"
    ],
    "answer": 0,
    "explanation": "Instead of + V-ing 意為「代替…… / 而不是……」。句意：她沒有抱怨困難，而是立即採取切實行動去解決問題。",
    "difficulty": "基礎"
  },
  {
    "id": "e456",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"為回應公眾強烈抗議，該公司發表正式道歉並承諾召回所有瑕疵產品。\" data-en=\"In response to the public outcry, the company issued a formal apology and promised to recall all ______ products.\">In response to the public outcry, the company issued a formal apology and promised to recall all ______ products.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "defective（有瑕疵缺陷的）",
      "decorative（裝飾性的）",
      "decisive（決定性的）",
      "defensive（防禦性的）"
    ],
    "answer": 0,
    "explanation": "recall defective products 意為「召回有瑕疵缺陷的產品」。句意：為回應公眾強烈抗議，該公司發表正式道歉並承諾召回所有瑕疵產品。",
    "difficulty": "基礎"
  },
  {
    "id": "e457",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The novel's main character demonstrated remarkable （【完整題目中文句意】The novel's main character demonstrated remarkable (復原力 / 心理韌性 / 堅毅抗挫力) by overcoming poverty and achieving academic success.） by overcoming poverty and achieving academic success.\" data-en=\"The novel's main character demonstrated remarkable ______ by overcoming poverty and achieving academic success.\">The novel's main character demonstrated remarkable ______ by overcoming poverty and achieving academic success.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "resilience（韌性 / 復原力）",
      "reluctance（勉強）",
      "redundancy（冗餘）",
      "rebellion（叛亂）"
    ],
    "answer": 0,
    "explanation": "resilience 意為「復原力 / 心理韌性 / 堅毅抗挫力」。",
    "difficulty": "基礎"
  },
  {
    "id": "e458",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"so as not to + V（= in order not to + V 為了不 / 免得……）\" data-en=\"She walked quietly into the nursery ______ wake the sleeping baby.\">She walked quietly into the nursery ______ wake the sleeping baby.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "so as not to（so as not to + 原形動詞，以便不…… / 免得）",
      "so that（so that）",
      "in order that（in order that）",
      "not to so as（not to so as）"
    ],
    "answer": 0,
    "explanation": "so as not to + V（= in order not to + V 為了不 / 免得……）。",
    "difficulty": "基礎"
  },
  {
    "id": "e459",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Regular physical activity can help （【完整題目中文句意】Regular physical activity can help (減輕壓力) stress and improve overall cardiovascular health.） stress and improve overall cardiovascular health.\" data-en=\"Regular physical activity can help ______ stress and improve overall cardiovascular health.\">Regular physical activity can help ______ stress and improve overall cardiovascular health.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "reduce（減少 / 減輕）",
      "refuse（拒絕）",
      "repeat（重複）",
      "replace（取代）"
    ],
    "answer": 0,
    "explanation": "reduce stress 意為「減輕壓力」。",
    "difficulty": "基礎"
  },
  {
    "id": "e460",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The detective searched the suspect's vehicle thoroughly to gather physical （【完整題目中文句意】The detective searched the suspect's vehicle thoroughly to gather physical (收集物證) for the court trial.） for the court trial.\" data-en=\"The detective searched the suspect's vehicle thoroughly to gather physical ______ for the court trial.\">The detective searched the suspect's vehicle thoroughly to gather physical ______ for the court trial.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "evidence（證據）",
      "emotion（情緒）",
      "emergency（緊急情況）",
      "emphasis（強調）"
    ],
    "answer": 0,
    "explanation": "gather physical evidence 意為「收集物證」。",
    "difficulty": "基礎"
  },
  {
    "id": "e461",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The scientific breakthrough will （【完整題目中文句意】The scientific breakthrough will (為……鋪平道路 / 奠定基礎) for the development of next-generation cancer treatments.） for the development of next-generation cancer treatments.\" data-en=\"The scientific breakthrough will ______ for the development of next-generation cancer treatments.\">The scientific breakthrough will ______ for the development of next-generation cancer treatments.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "pave the way（pave the way for 為……鋪平道路 / 奠定基礎）",
      "make a point（make a point）",
      "lose the way（lose the way）",
      "find fault（find fault）"
    ],
    "answer": 0,
    "explanation": "pave the way for sth 意為「為……鋪平道路 / 奠定基礎」。",
    "difficulty": "基礎"
  },
  {
    "id": "e462",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Due to the heavy storm, the school announced the （【完整題目中文句意】Due to the heavy storm, the school announced the (課程取消) of all afternoon classes and outdoor activities.） of all afternoon classes and outdoor activities.\" data-en=\"Due to the heavy storm, the school announced the ______ of all afternoon classes and outdoor activities.\">Due to the heavy storm, the school announced the ______ of all afternoon classes and outdoor activities.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "cancellation（取消）",
      "celebration（慶祝）",
      "calculation（計算）",
      "concentration（專注）"
    ],
    "answer": 0,
    "explanation": "cancellation of classes 意為「課程取消」。",
    "difficulty": "基礎"
  },
  {
    "id": "e463",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The teacher encouraged her students to ask questions and express their opinions （【完整題目中文句意】The teacher encouraged her students to ask questions and express their opinions (自由表達意見) in class discussions.） in class discussions.\" data-en=\"The teacher encouraged her students to ask questions and express their opinions ______ in class discussions.\">The teacher encouraged her students to ask questions and express their opinions ______ in class discussions.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "freely（自由地 / 無拘無束地）",
      "fiercely（猛烈地）",
      "formally（正式地）",
      "fatalistically（宿命論地）"
    ],
    "answer": 0,
    "explanation": "express opinions freely 意為「自由表達意見」。",
    "difficulty": "基礎"
  },
  {
    "id": "e464",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"這位外交官在聯合國大會上發表了一場鏗鏘有力的演說，感動了全球各國代表落淚。\" data-en=\"The diplomat delivered an ______ speech at the United Nations assembly, moving delegates from across the globe to tears.\">The diplomat delivered an ______ speech at the United Nations assembly, moving delegates from across the globe to tears.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "eloquent（雄辯口才流利的 / 鏗鏘有力的）",
      "elusive（難以捉摸的）",
      "erratic（飄忽不定的）",
      "exclusive（排他的）"
    ],
    "answer": 0,
    "explanation": "eloquent 意為「雄辯的 / 有說服力的 / 口才流利的」。句意：這位外交官在聯合國大會上發表了一場鏗鏘有力的演說，感動了全球各國代表落淚。",
    "difficulty": "中等"
  },
  {
    "id": "e465",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"由於高通膨與疲軟的消費支出，國家經濟已連續三個季度停滯不前。\" data-en=\"Due to high inflation and weak consumer spending, the national economy has remained ______ for three consecutive quarters.\">Due to high inflation and weak consumer spending, the national economy has remained ______ for three consecutive quarters.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "stagnant（停滯不前的 / 不景氣的）",
      "stimulating（令人興奮的）",
      "subsequent（隨後的）",
      "spontaneous（隨興自發的）"
    ],
    "answer": 0,
    "explanation": "stagnant economy 意為「停滯不前 / 呆滯不景氣的經濟」。句意：由於高通膨與疲軟的消費支出，國家經濟已連續三個季度停滯不前。",
    "difficulty": "中等"
  },
  {
    "id": "e466",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"這場冠軍爭霸賽讓兩位實力強大令人敬畏的拳手正面對決，爭奪世界冠軍頭銜。\" data-en=\"The championship boxing match pitted two ______ fighters against each other in an intense battle for the world title.\">The championship boxing match pitted two ______ fighters against each other in an intense battle for the world title.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "formidable（令人敬畏強大的 / 難以對付的）",
      "fragile（脆弱的）",
      "futile（徒勞無功的）",
      "feasible（可行的）"
    ],
    "answer": 0,
    "explanation": "formidable opponent / fighter 意為「強大令人敬畏的 / 難以對付的強敵」。句意：這場冠軍爭霸賽讓兩位實力強大令人敬畏的拳手正面對決，爭奪世界冠軍頭銜。",
    "difficulty": "中等"
  },
  {
    "id": "e467",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"登山隊員們踏上了穿越險惡暴風雪的危險旅程，以登頂珠穆朗瑪峰。\" data-en=\"Mountaineers embarked on a ______ journey through treacherous snowstorms to reach the summit of Mount Everest.\">Mountaineers embarked on a ______ journey through treacherous snowstorms to reach the summit of Mount Everest.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "perilous（充滿危險險惡的）",
      "prosperous（繁榮昌盛的）",
      "promising（有希望前途的）",
      "plentiful（豐富充足的）"
    ],
    "answer": 0,
    "explanation": "perilous journey / mission 意為「極度危險險惡的旅程」（同義詞 dangerous, hazardous）。句意：登山隊員們踏上了穿越險惡暴風雪的危險旅程，以登頂珠穆朗瑪峰。",
    "difficulty": "中等"
  },
  {
    "id": "e468",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"全球科學家正孜孜不倦地工作，以解開阿茲海默症背後複雜的基因之謎。\" data-en=\"Scientists around the world are working tirelessly to ______ the complex genetic mystery behind Alzheimer's disease.\">Scientists around the world are working tirelessly to ______ the complex genetic mystery behind Alzheimer's disease.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "unravel（解開 / 闡明謎團）",
      "undertake（承擔承接）",
      "undermine（暗中破壞削弱）",
      "underestimate（低估）"
    ],
    "answer": 0,
    "explanation": "unravel a mystery / secret 意為「解開 / 闡明（謎團、複雜機理）」。句意：全球科學家正孜孜不倦地工作，以解開阿茲海默症背後複雜的基因之謎。",
    "difficulty": "中等"
  },
  {
    "id": "e469",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"在正式商務會議上穿著亮橘色螢光夾克，使這位特立獨行的設計師顯得格外引人注目。\" data-en=\"Wearing a bright neon orange jacket in a formal business conference made the eccentric designer extremely ______.\">Wearing a bright neon orange jacket in a formal business conference made the eccentric designer extremely ______.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "conspicuous（顯眼的 / 惹人注目的）",
      "cautious（謹慎的）",
      "confidential（機密的）",
      "concise（簡潔的）"
    ],
    "answer": 0,
    "explanation": "conspicuous 意為「顯眼的 / 惹人注目的 / 顯而易見的」（同義詞 noticeable, striking）。句意：在正式商務會議上穿著亮橘色螢光夾克，使這位特立獨行的設計師顯得格外引人注目。",
    "difficulty": "中等"
  },
  {
    "id": "e470",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"在巨大的公眾壓力下，這位貪腐的執行長被迫放棄對公司的所有管理控制權。\" data-en=\"Under immense public pressure, the corrupt CEO was forced to ______ all management control over the company.\">Under immense public pressure, the corrupt CEO was forced to ______ all management control over the company.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "relinquish（放棄 / 讓出權力）",
      "reinforce（增援加強）",
      "reproduce（繁殖複製）",
      "reconcile（調解和解）"
    ],
    "answer": 0,
    "explanation": "relinquish control / power 意為「放棄 / 讓出（權力、控制權、財產）」。句意：在巨大的公眾壓力下，這位貪腐的執行長被迫放棄對公司的所有管理控制權。",
    "difficulty": "中等"
  },
  {
    "id": "e471",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"老病患的病情在一夜之間迅速惡化，需要立即轉入加護病房。\" data-en=\"The elderly patient's condition began to ______ rapidly overnight, requiring immediate transfer to the intensive care unit.\">The elderly patient's condition began to ______ rapidly overnight, requiring immediate transfer to the intensive care unit.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "deteriorate（惡化 / 退化）",
      "distinguish（區分）",
      "determine（決定）",
      "demonstrate（示範）"
    ],
    "answer": 0,
    "explanation": "deteriorate 意為「（健康、病情、局勢）惡化 / 變差」（同義詞 worsen）。句意：老病患的病情在一夜之間迅速惡化，需要立即轉入加護病房。",
    "difficulty": "基礎"
  },
  {
    "id": "e472",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"高三生在面對艱難的論文寫作時往往會拖延，結果在截止日前夕才陷入恐慌。\" data-en=\"High school seniors often ______ when faced with difficult essay writing, only to find themselves panicking right before the deadline.\">High school seniors often ______ when faced with difficult essay writing, only to find themselves panicking right before the deadline.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "procrastinate（拖延 / 遲延拖拉）",
      "prosecute（起訴檢控）",
      "proclaim（宣布）",
      "prosper（繁榮）"
    ],
    "answer": 0,
    "explanation": "procrastinate 意為「拖延 / 習慣性拖延」。句意：高三生在面對艱難的論文寫作時往往會拖延，結果在截止日前夕才陷入恐慌。",
    "difficulty": "中等"
  },
  {
    "id": "e473",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"既然你已經以優異成績從大學畢業，你就應該開始規劃未來的職業生涯軌跡。\" data-en=\"Now ______ you have graduated from university with top honors, you should start planning your future career trajectory.\">Now ______ you have graduated from university with top honors, you should start planning your future career trajectory.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "that（Now that... 既然 / 如今已經……）",
      "which（哪一個/關係代名詞（修飾物））",
      "what（什麼 / 所……的事物）",
      "where（哪裡 / 關係副詞（地點））"
    ],
    "answer": 0,
    "explanation": "Now that... 引導原因副詞子句，表示「既然 / 如今既然已經……」。句意：既然你已經以優異成績從大學畢業，你就應該開始規劃未來的職業生涯軌跡。",
    "difficulty": "基礎"
  },
  {
    "id": "e474",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"週末你可以隨意借用我的筆記型電腦，只要你在週一早晨前完好無損地歸還。\" data-en=\"You are free to borrow my laptop for the weekend, ______ that you return it undamaged by Monday morning.\">You are free to borrow my laptop for the weekend, ______ that you return it undamaged by Monday morning.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "provided（provided that / providing that 只要 / 在……條件下）",
      "lest（lest）",
      "unless（除非（條件連接詞））",
      "in case of（in case of）"
    ],
    "answer": 0,
    "explanation": "provided that / providing that（= as long as, on condition that）意為「只要 / 在……條件下」。句意：週末你可以隨意借用我的筆記型電腦，只要你在週一早晨前完好無損地歸還。",
    "difficulty": "中等"
  },
  {
    "id": "e475",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"登山者在茂密叢林中悄悄行走，深怕驚動兇猛的肉食野生動物。\" data-en=\"The hiker walked stealthily through the dense jungle ______ fear of alerting wild predatory animals.\">The hiker walked stealthily through the dense jungle ______ fear of alerting wild predatory animals.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "for（for fear of + N / V-ing，唯恐 / 深怕……）",
      "with（with）",
      "in（g 意為「唯恐 / 深怕 / 以免……」）",
      "by（by）"
    ],
    "answer": 0,
    "explanation": "for fear of + N / V-ing 意為「唯恐 / 深怕 / 以免……」。句意：登山者在茂密叢林中悄悄行走，深怕驚動兇猛的肉食野生動物。",
    "difficulty": "中等"
  },
  {
    "id": "e476",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"中央銀行實施緊縮貨幣政策以遏制急劇飆升的消費者通膨。\" data-en=\"The central bank implemented tight monetary policies to keep soaring consumer inflation ______.\">The central bank implemented tight monetary policies to keep soaring consumer inflation ______.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "in check（keep ... in check 控制 / 遏止 / 約束）",
      "in hand（in hand）",
      "in mind（in mind）",
      "in person（in person）"
    ],
    "answer": 0,
    "explanation": "keep sth in check 意為「控制 / 遏制 / 約束（惡化趨勢、物價）」。句意：中央銀行實施緊縮貨幣政策以遏制急劇飆升的消費者通膨。",
    "difficulty": "中等"
  },
  {
    "id": "e477",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"垃圾場中腐爛的有機物開始散發出一股難聞刺鼻的惡臭。\" data-en=\"Decaying organic matter in the garbage dump began to ______ a foul and pungent odor.\">Decaying organic matter in the garbage dump began to ______ a foul and pungent odor.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "give off（散發出 / 發出氣味光熱）",
      "give in（give in）",
      "give up（give up）",
      "give away（give away）"
    ],
    "answer": 0,
    "explanation": "give off 意為「散發出 / 釋放出（氣味、氣體、光、熱）」。句意：垃圾場中腐爛的有機物開始散發出一股難聞刺鼻的惡臭。",
    "difficulty": "基礎"
  },
  {
    "id": "e478",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"總經理突然退休後，年輕的副總經理被任命接管公司的日常運營。\" data-en=\"After the sudden retirement of the general manager, the young vice president was appointed to ______ the company's daily operations.\">After the sudden retirement of the general manager, the young vice president was appointed to ______ the company's daily operations.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "take over（接管 / 接任）",
      "take after（take after）",
      "take off（take off）",
      "take down（take down）"
    ],
    "answer": 0,
    "explanation": "take over 意為「接管 / 接任（職位、業務）」。句意：總經理突然退休後，年輕的副總經理被任命接管公司的日常運營。",
    "difficulty": "基礎"
  },
  {
    "id": "e479",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The laboratory team successfully （實驗、臨床試驗） a series of complex clinical trials to verify the vaccine's efficacy.\" data-en=\"The laboratory team successfully ______ a series of complex clinical trials to verify the vaccine's efficacy.\">The laboratory team successfully ______ a series of complex clinical trials to verify the vaccine's efficacy.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "carried out（實施 / 執行臨床試驗）",
      "carried on（carried on）",
      "carried away（carried away）",
      "carried off（carried off）"
    ],
    "answer": 0,
    "explanation": "carry out an experiment / survey / trial 意為「進行 / 執行 / 實施（實驗、臨床試驗）」。",
    "difficulty": "基礎"
  },
  {
    "id": "e480",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：We should never （【完整題目中文句意】We should never (輕視 / 瞧不起某人) people based on their social status, wealth, or ethnic background.） people based on their social status, wealth, or ethnic background.\" data-en=\"We should never ______ people based on their social status, wealth, or ethnic background.\">We should never ______ people based on their social status, wealth, or ethnic background.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "look down upon（看不起 / 輕視）",
      "look up to（尊敬崇拜某人）",
      "look forward to（look forward to）",
      "look out for（look out for）"
    ],
    "answer": 0,
    "explanation": "look down upon / on sb 意為「輕視 / 瞧不起某人」；對比 look up to（尊敬崇拜某人）。",
    "difficulty": "基礎"
  },
  {
    "id": "e481",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"新簽署的和平條約正式結束了飽受戰火蹂躪地區長達數十年的血腥內戰衝突。\" data-en=\"The newly signed peace treaty officially ______ decades of bloody civil conflict in the war-torn region.\">The newly signed peace treaty officially ______ decades of bloody civil conflict in the war-torn region.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "put an end to（終結 / 結束）",
      "put up with（put up with）",
      "put forward to（put forward to）",
      "put off to（put off to）"
    ],
    "answer": 0,
    "explanation": "put an end to sth 意為「終結 / 徹底結束（爭端、痛苦、戰爭）」。句意：新簽署的和平條約正式結束了飽受戰火蹂躪地區長達數十年的血腥內戰衝突。",
    "difficulty": "基礎"
  },
  {
    "id": "e482",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Parents always （【完整題目中文句意】Parents always (以……為榮 / 為……自豪) their children's hard-earned academic achievements and personal growth.） their children's hard-earned academic achievements and personal growth.\" data-en=\"Parents always ______ their children's hard-earned academic achievements and personal growth.\">Parents always ______ their children's hard-earned academic achievements and personal growth.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "take pride in（以……為榮 / 為……感到自豪）",
      "take advantage of（take advantage of）",
      "take part in（take part in）",
      "take care of（take care of）"
    ],
    "answer": 0,
    "explanation": "take pride in（= be proud of）意為「以……為榮 / 為……自豪」。",
    "difficulty": "基礎"
  },
  {
    "id": "e483",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"新研發的輕質材料極具韌性與彈性；它能吸收巨大衝擊而不會變形。\" data-en=\"The newly developed lightweight material is remarkably ______; it can absorb massive shocks without deforming.\">The newly developed lightweight material is remarkably ______; it can absorb massive shocks without deforming.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "resilient（具彈性復原力的 / 堅韌的）",
      "rigid（死板僵硬的）",
      "reluctant（勉強的）",
      "redundant（多餘的）"
    ],
    "answer": 0,
    "explanation": "resilient material 意為「具彈性復原力的 / 堅韌抗震的材料」。句意：新研發的輕質材料極具韌性與彈性；它能吸收巨大衝擊而不會變形。",
    "difficulty": "中等"
  },
  {
    "id": "e484",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"這位德高望重的教授因其深邃智慧與完美無瑕的正直操守而受到數代學者的尊崇。\" data-en=\"The venerable professor was respected by generations of scholars for his profound wisdom and ______ integrity.\">The venerable professor was respected by generations of scholars for his profound wisdom and ______ integrity.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "impeccable（無可挑剔的 / 完美無瑕的）",
      "impulsive（衝動的）",
      "impatient（不耐煩的）",
      "imperfect（不完美的）"
    ],
    "answer": 0,
    "explanation": "impeccable integrity / reputation 意為「無可挑剔的 / 完美無暇的品格操守」（同義詞 flawless）。句意：這位德高望重的教授因其深邃智慧與完美無瑕的正直操守而受到數代學者的尊崇。",
    "difficulty": "中等"
  },
  {
    "id": "e485",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"法官駁回了起訴，因為檢察官未能提出確鑿實質的證據來支持重罪指控。\" data-en=\"The judge dismissed the case because the prosecutor failed to present ______ evidence to support the felony charge.\">The judge dismissed the case because the prosecutor failed to present ______ evidence to support the felony charge.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "tangible（切實有形的 / 確鑿實質的）",
      "tedious（冗長乏味的）",
      "tentative（暫時的）",
      "trivial（微不足道的）"
    ],
    "answer": 0,
    "explanation": "tangible evidence 意為「確鑿有實質根據的證據」。句意：法官駁回了起訴，因為檢察官未能提出確鑿實質的證據來支持重罪指控。",
    "difficulty": "中等"
  },
  {
    "id": "e486",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"so as to + V（= in order to + V 為了 / 以便……，後接原形動詞）\" data-en=\"The new highway was constructed ______ alleviate the severe traffic congestion between the two neighboring cities.\">The new highway was constructed ______ alleviate the severe traffic congestion between the two neighboring cities.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "so as to（so as to + 原形動詞，以便 / 為了……）",
      "so that（後接完整子句）",
      "in order that（in order that）",
      "such as to（such as to）"
    ],
    "answer": 0,
    "explanation": "so as to + V（= in order to + V 為了 / 以便……，後接原形動詞）。注意：so that 後接完整子句。",
    "difficulty": "基礎"
  },
  {
    "id": "e487",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The teacher spoke loudly and clearly （後接完整子句，常用 can/could/may/might 助動詞） all the students in the back row could hear her instructions.\" data-en=\"The teacher spoke loudly and clearly ______ all the students in the back row could hear her instructions.\">The teacher spoke loudly and clearly ______ all the students in the back row could hear her instructions.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "so that（so that + S + can/could + V，以便……）",
      "in case of（in case of）",
      "because of（because of）",
      "so as to（so as to）"
    ],
    "answer": 0,
    "explanation": "so that 引導目的副詞子句（後接完整子句，常用 can/could/may/might 助動詞）。",
    "difficulty": "基礎"
  },
  {
    "id": "e488",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"執行長對該候選人出色的履歷以及在軟體開發領域豐富的領導經驗留下了深刻印象。\" data-en=\"The CEO was impressed by the candidate's ______ resume and extensive leadership experience in software development.\">The CEO was impressed by the candidate's ______ resume and extensive leadership experience in software development.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "stellar（出色的 / 傑出精彩的）",
      "stale（不新鮮的）",
      "stubborn（頑固的）",
      "shallow（膚淺的）"
    ],
    "answer": 0,
    "explanation": "stellar resume / performance 意為「出色的 / 傑出的（如星光般燦爛的）」。句意：執行長對該候選人出色的履歷以及在軟體開發領域豐富的領導經驗留下了深刻印象。",
    "difficulty": "中等"
  },
  {
    "id": "e489",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"政府發起了一場全面的公共衛生運動，以遏制季節性傳染性流感的蔓延。\" data-en=\"The government launched a comprehensive public health campaign to ______ the spread of infectious seasonal influenza.\">The government launched a comprehensive public health campaign to ______ the spread of infectious seasonal influenza.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "curb（抑制 / 遏止）",
      "cultivate（培養）",
      "cure（治癒）",
      "curse（詛咒）"
    ],
    "answer": 0,
    "explanation": "curb the spread of 意為「抑制 / 遏止（疾病傳播、通膨、犯罪）」。句意：政府發起了一場全面的公共衛生運動，以遏制季節性傳染性流感的蔓延。",
    "difficulty": "基礎"
  },
  {
    "id": "e490",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"這座古老廟宇證明了該文明非凡的建築才智與創造力。\" data-en=\"The ancient temple stands as a testament to the extraordinary architectural ______ of the civilization.\">The ancient temple stands as a testament to the extraordinary architectural ______ of the civilization.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "ingenuity（獨創性 / 精巧才智）",
      "indifference（漠不關心）",
      "ignorance（無知）",
      "inflation（通貨膨脹）"
    ],
    "answer": 0,
    "explanation": "architectural ingenuity 意為「建築的精巧才智 / 巧奪天工的智慧」。句意：這座古老廟宇證明了該文明非凡的建築才智與創造力。",
    "difficulty": "中等"
  },
  {
    "id": "e491",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"在該政客針對少數族群社群的貶損侮辱言論在網路上洩露後，其支持率大幅暴跌。\" data-en=\"The politician's approval ratings plummeted after his ______ remarks regarding minority communities were leaked online.\">The politician's approval ratings plummeted after his ______ remarks regarding minority communities were leaked online.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "derogatory（貶損侮辱的 / 誹謗的）",
      "decorative（裝飾性的）",
      "decisive（決定性的）",
      "deliberate（深思熟慮的）"
    ],
    "answer": 0,
    "explanation": "derogatory remarks 意為「貶低侮辱性的言論」。句意：在該政客針對少數族群社群的貶損侮辱言論在網路上洩露後，其支持率大幅暴跌。",
    "difficulty": "中等"
  },
  {
    "id": "e492",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：（後接完整子句） the torrential rain poured down incessantly, the dedicated postal workers delivered all the mail on time.\" data-en=\"______ the torrential rain poured down incessantly, the dedicated postal workers delivered all the mail on time.\">______ the torrential rain poured down incessantly, the dedicated postal workers delivered all the mail on time.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "Although（Although + S + V，雖然儘管）",
      "Despite（/ In spite of 為介系詞後接）",
      "In spite of（為介系詞後接名詞或動名詞）",
      "Regardless of（Regardless of）"
    ],
    "answer": 0,
    "explanation": "Although / Even though 引導讓步副詞子句（後接完整子句）；Despite / In spite of 為介系詞後接名詞或動名詞。",
    "difficulty": "基礎"
  },
  {
    "id": "e493",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"新環保法案將於明年的第一天起正式生效實施。\" data-en=\"The new environmental protection act will come ______ starting on the first day of next year.\">The new environmental protection act will come ______ starting on the first day of next year.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "into effect（come into effect 生效 / 開始實施）",
      "into contact（into contact）",
      "into account（into account）",
      "into trouble（into trouble）"
    ],
    "answer": 0,
    "explanation": "come into effect / force 意為「（法規、條約）生效 / 開始實行」。句意：新環保法案將於明年的第一天起正式生效實施。",
    "difficulty": "基礎"
  },
  {
    "id": "e494",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"外科醫生要求手術室內保持絕對肅靜，以便成功進行精細的腦部手術。\" data-en=\"The surgeon required absolute ______ in the operating theater to perform the delicate brain surgery successfully.\">The surgeon required absolute ______ in the operating theater to perform the delicate brain surgery successfully.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "silence（寂靜 / 肅靜）",
      "science（科學）",
      "symptom（症狀）",
      "substance（物質）"
    ],
    "answer": 0,
    "explanation": "absolute silence 意為「絕對的安靜」。句意：外科醫生要求手術室內保持絕對肅靜，以便成功進行精細的腦部手術。",
    "difficulty": "基礎"
  },
  {
    "id": "e495",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Electric vehicles have gained immense popularity as consumers seek more （【完整題目中文句意】Electric vehicles have gained immense popularity as consumers seek more (生態環保友善的替代選擇) transportation alternatives.） transportation alternatives.\" data-en=\"Electric vehicles have gained immense popularity as consumers seek more ______ transportation alternatives.\">Electric vehicles have gained immense popularity as consumers seek more ______ transportation alternatives.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "eco-friendly（環保生態友善的）",
      "extravagant（奢侈浪費的）",
      "exhausted（精疲力竭的）",
      "erratic（不穩定的）"
    ],
    "answer": 0,
    "explanation": "eco-friendly alternatives 意為「生態環保友善的替代選擇」。",
    "difficulty": "基礎"
  },
  {
    "id": "e496",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The sudden earthquake caused widespread （【完整題目中文句意】The sudden earthquake caused widespread (廣泛的破壞毀滅) across the city, knocking down power lines and damaging bridges.） across the city, knocking down power lines and damaging bridges.\" data-en=\"The sudden earthquake caused widespread ______ across the city, knocking down power lines and damaging bridges.\">The sudden earthquake caused widespread ______ across the city, knocking down power lines and damaging bridges.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "destruction（破壞毀滅）",
      "instruction（指示）",
      "construction（建設）",
      "distinction（區分）"
    ],
    "answer": 0,
    "explanation": "widespread destruction 意為「廣泛的破壞毀滅」。",
    "difficulty": "基礎"
  },
  {
    "id": "e497",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"這所研究型大學建立了一座配備最先進分析儀器的現代化實驗室。\" data-en=\"The research university established a modern laboratory equipped with ______ analytical instruments.\">The research university established a modern laboratory equipped with ______ analytical instruments.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "state-of-the-art（最先進頂尖的）",
      "out-of-date（過時的）",
      "short-term（短期的）",
      "second-hand（二手的）"
    ],
    "answer": 0,
    "explanation": "state-of-the-art equipment 意為「最先進 / 尖端技術的設備」。",
    "difficulty": "基礎"
  },
  {
    "id": "e498",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"老師要求學生們在教室內保持安靜，以便大家能專心進行閱讀測驗。\" data-en=\"The teacher asked the students to keep quiet ______ they could concentrate on the reading test.\">The teacher asked the students to keep quiet ______ they could concentrate on the reading test.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "in order that（in order that + S + can/could + V，以便……）",
      "in case of（in case of）",
      "in spite of（in spite of）",
      "so as to（so as to）"
    ],
    "answer": 0,
    "explanation": "in order that（= so that）引導目的子句，後接完整子句。",
    "difficulty": "基礎"
  },
  {
    "id": "e499",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"這款新智慧型手機設計得非常輕巧，然而它足夠耐用，能承受日常的摔落與刮痕。\" data-en=\"The young athlete trained tirelessly every single day in ______ of her Olympic dream.\">The young athlete trained tirelessly every single day in ______ of her Olympic dream.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "pursuit（in pursuit of 追求 / 追尋……）",
      "praise（稱讚 / 讚揚讚美）",
      "presence（出席在場 / 風度存在感）",
      "proportion（比例 / 部分均衡份額）"
    ],
    "answer": 0,
    "explanation": "in pursuit of sth 意為「追求 / 追逐（夢想、目標）」。句意：這位年輕運動員每天不知疲倦地訓練，以追尋她的奧運夢想。",
    "difficulty": "基礎"
  },
  {
    "id": "e500",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"儘管強烈的暴風雨延誤了我們的航班，我們依然設法準時趕抵了國際學術研討會。\" data-en=\"The museum guide gave a ______ overview of ancient Egyptian history before leading the tour into the mummy exhibition.\">The museum guide gave a ______ overview of ancient Egyptian history before leading the tour into the mummy exhibition.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "brief（簡短簡要的）",
      "blind（盲目的）",
      "bitter（痛苦苦澀的）",
      "brave（勇敢的）"
    ],
    "answer": 0,
    "explanation": "brief overview 意為「簡要概述」。",
    "difficulty": "基礎"
  },
  {
    "id": "e501",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"由於全球供應鏈面臨中斷，該製造企業決定擴大其在當地的工廠生產產能。\" data-en=\"Regular hydration and sun protection are ______ when participating in outdoor summer marathon events.\">Regular hydration and sun protection are ______ when participating in outdoor summer marathon events.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "essential（必不可少的 / 極其重要的）",
      "efficient（高效率的）",
      "emotional（情緒化的）",
      "eventual（最終的）"
    ],
    "answer": 0,
    "explanation": "essential 意為「至關重要的 / 必不可少的」。",
    "difficulty": "基礎"
  },
  {
    "id": "e502",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"博物館館長花費了數月心血，細心修復那幅在洪災中不幸受損的珍貴無價油畫。\" data-en=\"The company's customer service hotline is available 24 hours a day for customer ______.\">The company's customer service hotline is available 24 hours a day for customer ______.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "convenience（便利方便）",
      "conflict（衝突）",
      "confusion（困惑）",
      "confidence（信心）"
    ],
    "answer": 0,
    "explanation": "for customer convenience 意為「為了顧客的便利」。",
    "difficulty": "基礎"
  },
  {
    "id": "e503",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"醫師強烈建議該名病患嚴格避免攝取高糖食品，以防止糖尿病病情進一步惡化。\" data-en=\"The scientist devoted her entire career ______ finding a cure for rare pediatric genetic diseases.\">The scientist devoted her entire career ______ finding a cure for rare pediatric genetic diseases.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "to（devote sth to + V-ing，奉獻致力於……）",
      "for（因為 / 為了）",
      "with（with）",
      "in（g（其中 to 為介系詞））"
    ],
    "answer": 0,
    "explanation": "devote one's life / career to + V-ing（其中 to 為介系詞）。",
    "difficulty": "基礎"
  },
  {
    "id": "e504",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"要是工程師們事先注意到了安全警告，這場慘痛的重大工業事故本來是可以避免的。\" data-en=\"The international airport has tightened security screenings to ensure passenger ______.\">The international airport has tightened security screenings to ensure passenger ______.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "safety（安全）",
      "salary（薪水）",
      "sample（樣品）",
      "scenery（風景）"
    ],
    "answer": 0,
    "explanation": "passenger safety 意為「乘客安全」。",
    "difficulty": "基礎"
  },
  {
    "id": "e505",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"該公司在綠色太陽能技術上的突破性創新，獲得了全球環保專家的一致讚譽。\" data-en=\"The novel's unpredictable ending took readers completely by ______.\">The novel's unpredictable ending took readers completely by ______.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "surprise（take sb by surprise 使某人大吃一驚）",
      "storm（storm）",
      "chance（chance）",
      "force（力量 / 迫使武力）"
    ],
    "answer": 0,
    "explanation": "take sb by surprise 意為「使某人大感意外 / 出其不意」。",
    "difficulty": "基礎"
  },
  {
    "id": "e506",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"唯有透過與鄰國建立緊密合作關係，我們才能真正有效解決這場跨國環境生態危機。\" data-en=\"The school offers free after-school tutoring programs to help students improve their academic ______.\">The school offers free after-school tutoring programs to help students improve their academic ______.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "performance（學業表現 / 成績）",
      "permission（許可）",
      "personality（個性）",
      "persuasion（說服）"
    ],
    "answer": 0,
    "explanation": "academic performance 意為「學業成績表現」。",
    "difficulty": "基礎"
  },
  {
    "id": "e507",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"這座巍峨矗立於山頂之巔的古老城堡，每年都吸引了來自世界各地的數百萬名觀光客。\" data-en=\"The local community organized a fundraising charity gala to support the ______ animal shelter.\">The local community organized a fundraising charity gala to support the ______ animal shelter.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "homeless（無家可歸的 / 流浪的）",
      "hopeless（絕望的）",
      "harmless（無害的）",
      "heartless（無情的）"
    ],
    "answer": 0,
    "explanation": "homeless animal shelter 意為「流浪動物庇護所」。",
    "difficulty": "基礎"
  },
  {
    "id": "e508",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"政府嚴格推行了全新的交通管理法規，目的在於有效降低繁華都會區的交通事故率。\" data-en=\"Good communication skills and empathy are essential when ______ disputes between colleagues.\">Good communication skills and empathy are essential when ______ disputes between colleagues.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "settling（settle disputes 調解 / 平息爭端）",
      "starting（正在開始 / 開始著，現在分詞）",
      "spending（正在花費 / 花費著，現在分詞）",
      "seeking（seeking）"
    ],
    "answer": 0,
    "explanation": "settle disputes / conflicts 意為「調解 / 平息爭端衝突」。",
    "difficulty": "基礎"
  },
  {
    "id": "e509",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"這位享譽國際的知名科學家，因其在研發 mRNA 疫苗領域的開創性貢獻而備受尊崇。\" data-en=\"The fans were ______ when their underdog national soccer team scored a last-minute goal to win the championship.\">The fans were ______ when their underdog national soccer team scored a last-minute goal to win the championship.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "jubilant（歡欣鼓舞的 / 狂喜的）",
      "jealous（嫉妒的）",
      "juvenile（青少年的）",
      "judgmental（批判性的）"
    ],
    "answer": 0,
    "explanation": "jubilant 意為「歡欣鼓舞的 / 欣喜若狂的」（同義詞 overjoyed）。句意：當不被看好的國家足球隊在最後一分鐘進球贏得冠軍時，球迷們欣喜若狂歡呼慶祝。",
    "difficulty": "中等"
  },
  {
    "id": "e510",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"我生平從未在前夕的海港夜空上方，親眼目睹過如此壯麗奪目、氣勢磅礴的煙火秀。\" data-en=\"Elders in the indigenous village often ______ the gradual decline of their ancestral language and traditional customs.\">Elders in the indigenous village often ______ the gradual decline of their ancestral language and traditional customs.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "lament（哀悼 / 痛惜 / 悲嘆）",
      "launch（發射發起）",
      "laud（讚揚）",
      "liberate（解放）"
    ],
    "answer": 0,
    "explanation": "lament 意為「悲嘆 / 痛惜（某事的衰亡）」。句意：原住民部落的長者們經常痛惜祖先語言與傳統習俗的逐漸衰微。",
    "difficulty": "中等"
  },
  {
    "id": "e511",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"該科技巨頭開出了極具吸引力的優渥薪資與福利條件，以延攬激烈競爭市場中的頂尖技術人才。\" data-en=\"The director refused to settle for a ______ performance, demanding that the actors rehearse every scene until perfection.\">The director refused to settle for a ______ performance, demanding that the actors rehearse every scene until perfection.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "mediocre（平庸中庸的 / 普普通通的）",
      "meticulous（細緻嚴謹的）",
      "marvelous（絕妙的）",
      "modest（謙遜的）"
    ],
    "answer": 0,
    "explanation": "mediocre 意為「平庸普通的 / 品質一般的」（同義詞 average, ordinary）。句意：導演拒絕接受平庸的演出，要求演員反覆排練每一幕直到完美。",
    "difficulty": "中等"
  },
  {
    "id": "e512",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"這座具有重要歷史意義的古蹟紀念碑目前正進行維修工程，預計將暫停對外開放至下個月。\" data-en=\"A supportive family environment helps ______ a child's natural talents and foster emotional resilience.\">A supportive family environment helps ______ a child's natural talents and foster emotional resilience.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "nurture（培養 / 哺育）",
      "neglect（疏忽忽視）",
      "nullify（使作廢）",
      "neutralize（中和）"
    ],
    "answer": 0,
    "explanation": "nurture talents 意為「培養天賦 / 哺育成長」（同義詞 cultivate, foster）。句意：充滿支持的家庭環境有助於培養孩子的天賦並建立心理韌性。",
    "difficulty": "中等"
  },
  {
    "id": "e513",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"儘管在創業初期遭遇了無數次的財務困境與打擊，這位企業家依然百折不撓，最終打造出龐大商業王國。\" data-en=\"Before making a final investment decision, the financial advisor analyzed all the ______ market data carefully.\">Before making a final investment decision, the financial advisor analyzed all the ______ market data carefully.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "pertinent（相關的 / 切題中肯的）",
      "perishable（易腐壞的）",
      "permanent（永久的）",
      "primitive（原始的）"
    ],
    "answer": 0,
    "explanation": "pertinent 意為「切題相關的 / 緊密關聯的」（同義詞 relevant）。句意：在做出最終投資決策前，財務顧問仔細分析了所有相關切題的市場數據。",
    "difficulty": "中等"
  },
  {
    "id": "e514",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"這所大學的總圖書館典藏了大量珍貴的古代手稿，其中有一部分甚至能追溯回 15 世紀文藝復興時期。\" data-en=\"After hiking under the scorching desert sun for hours, the travelers were desperate to ______ their intense thirst.\">After hiking under the scorching desert sun for hours, the travelers were desperate to ______ their intense thirst.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "quench（解渴 / 撲滅渴望）",
      "quantify（量化）",
      "qualify（取得資格）",
      "quarrel（爭吵）"
    ],
    "answer": 0,
    "explanation": "quench one's thirst 意為「解渴 / 止渴」。句意：在炎熱沙漠陽光下徒步數小時後，旅行者極度渴望解渴。",
    "difficulty": "中等"
  },
  {
    "id": "e515",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"醫學研究證實，保持每週規律的有氧運動能顯著降低心血管疾病風險，並極大改善心理健康。\" data-en=\"The historical museum received a government grant to ______ its aging exhibition halls and install modern interactive displays.\">The historical museum received a government grant to ______ its aging exhibition halls and install modern interactive displays.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "renovate（翻修整修 / 翻新）",
      "relocate（遷移搬遷）",
      "reinforce（加固）",
      "reproduce（複製）"
    ],
    "answer": 0,
    "explanation": "renovate 意為「翻新 / 裝修（建築物）」（同義詞 remodel, refurbish）。句意：歷史博物館獲得了政府補助金，用於翻修老化的展廳並安裝現代互動展示設備。",
    "difficulty": "中等"
  },
  {
    "id": "e516",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"他前腳才剛踏進家門口，傾盆暴雨就緊接著從烏雲密布的天空瘋狂傾瀉而下。\" data-en=\"The experienced manager handled the delicate customer complaint in a ______ and professional manner, resolving the dispute smoothly.\">The experienced manager handled the delicate customer complaint in a ______ and professional manner, resolving the dispute smoothly.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "tactful（圓融得體的 / 圓滑機智的）",
      "tactless（不圓融得罪人的）",
      "tedious（乏味的）",
      "tense（緊張的）"
    ],
    "answer": 0,
    "explanation": "tactful 意為「圓滑得體的 / 處事圓融機智的」（同義詞 diplomatic）。句意：經驗豐富的經理以得體且專業的方式處理了棘手的顧客投訴，順利平息了糾紛。",
    "difficulty": "中等"
  },
  {
    "id": "e517",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"這位年輕創業家懷著無比的熱情與精力工作，將她的新創願景化為蓬勃發展的現實。\" data-en=\"The young entrepreneur worked with boundless ______ and energy to turn her startup vision into a thriving reality.\">The young entrepreneur worked with boundless ______ and energy to turn her startup vision into a thriving reality.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "zeal（熱情 / 熱忱狂熱）",
      "zenith（頂峰）",
      "zone（區域）",
      "zero（零）"
    ],
    "answer": 0,
    "explanation": "zeal 意為「熱情 / 熱情熱忱」（同義詞 enthusiasm, passion）。句意：這位年輕創業家懷著無比的熱情與精力工作，將她的新創願景化為蓬勃發展的現實。",
    "difficulty": "中等"
  },
  {
    "id": "e518",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"我寧可待在家讀一本好書，也不願去吵鬧擁擠的夜店。\" data-en=\"I would rather ______ at home reading a good book than go to a noisy, crowded nightclub.\">I would rather ______ at home reading a good book than go to a noisy, crowded nightclub.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "stay（would rather + 原形動詞 + than + 原形動詞，寧可……也不願……）",
      "staying（正在保持 / 停留 / 保持 / 停留著，現在分詞）",
      "to stay（去保持 / 停留，不定詞）",
      "stayed（保持 / 停留了 / 被保持 / 停留，過去式/分詞）"
    ],
    "answer": 0,
    "explanation": "would rather + V1 + than + V2（固定句型，兩處皆接原形動詞）。句意：我寧可待在家讀一本好書，也不願去吵鬧擁擠的夜店。",
    "difficulty": "基礎"
  },
  {
    "id": "e519",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"had better + 原形動詞（表示「最好做某事」，否定句為 had better not + 原形動詞）\" data-en=\"You had better ______ an umbrella with you because the sky is turning dark and rain is imminent.\">You had better ______ an umbrella with you because the sky is turning dark and rain is imminent.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "take（had better + 原形動詞，最好做……）",
      "taking（正在拿（現在分詞））",
      "to take（去拿（不定詞））",
      "took（拿了（過去式））"
    ],
    "answer": 0,
    "explanation": "had better + 原形動詞（表示「最好做某事」，否定句為 had better not + 原形動詞）。",
    "difficulty": "基礎"
  },
  {
    "id": "e520",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"難怪她能通過嚴格的醫師執照考試；她每天苦讀超過十二個小時。\" data-en=\"It is no ______ that she passed the rigorous medical licensing exam; she studied more than twelve hours every day.\">It is no ______ that she passed the rigorous medical licensing exam; she studied more than twelve hours every day.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "wonder（It is no wonder that... 難怪 / 不足為奇）",
      "doubt（懷疑 / 不確定）",
      "problem（problem）",
      "secret（secret）"
    ],
    "answer": 0,
    "explanation": "It is no wonder that... 意為「難怪…… / ……不足為奇」。句意：難怪她能通過嚴格的醫師執照考試；她每天苦讀超過十二個小時。",
    "difficulty": "基礎"
  },
  {
    "id": "e521",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：It makes no （【完整題目中文句意】It makes no (無論 A 或 B 都毫無差別) whether we take the bus or the subway; both routes take approximately thirty minutes to get there.） whether we take the bus or the subway; both routes take approximately thirty minutes to get there.\" data-en=\"It makes no ______ whether we take the bus or the subway; both routes take approximately thirty minutes to get there.\">It makes no ______ whether we take the bus or the subway; both routes take approximately thirty minutes to get there.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "difference（It makes no difference whether... 無論……都沒有差別）",
      "difficulty（difficulty）",
      "distance（距離 / 遠處）",
      "direction（direction）"
    ],
    "answer": 0,
    "explanation": "It makes no difference whether A or B 意為「無論 A 或 B 都毫無差別」。",
    "difficulty": "基礎"
  },
  {
    "id": "e522",
    "category": "進階文法與句型",
    "question": "<span class=\"en-assist\" data-tw=\"Owing to + N（= Due to + N / Because of + N 由於……，後接名詞）\" data-en=\"______ the severe blizzard that paralyzed airport operations, our scheduled flight had to be canceled indefinitely.\">______ the severe blizzard that paralyzed airport operations, our scheduled flight had to be canceled indefinitely.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "Owing to（Owing to + N，由於 / 因為……）",
      "Due（Due）",
      "Because（因為（原因副詞子句））",
      "Despite（Despite）"
    ],
    "answer": 0,
    "explanation": "Owing to + N（= Due to + N / Because of + N 由於……，後接名詞）。注意：Because 後接完整子句。",
    "difficulty": "基礎"
  },
  {
    "id": "e523",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The active student council decided to （【完整題目中文句意】The active student council decided to (主動帶頭做某事 / 採取主動行動) the initiative to organize a charity campus marathon for the local hospital.） the initiative to organize a charity campus marathon for the local hospital.\" data-en=\"The active student council decided to ______ the initiative to organize a charity campus marathon for the local hospital.\">The active student council decided to ______ the initiative to organize a charity campus marathon for the local hospital.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "take（take the initiative to 主動採取行動 / 帶頭發起）",
      "make（製造 / 使得，原形動詞）",
      "have（有 / 擁有（原形/現在式））",
      "give（給予，原形動詞）"
    ],
    "answer": 0,
    "explanation": "take the initiative to + V 意為「主動帶頭做某事 / 採取主動行動」。",
    "difficulty": "中等"
  },
  {
    "id": "e524",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"獨居長者往往更容易成為網路與電話金融詐騙的受害者。\" data-en=\"Elderly citizens who live alone are often more likely to ______ online and telephone financial scams.\">Elderly citizens who live alone are often more likely to ______ online and telephone financial scams.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "fall victim to（成為……的受害者 / 蒙受其害）",
      "take advantage of（take advantage of）",
      "make sense of（make sense of）",
      "keep track of（keep track of）"
    ],
    "answer": 0,
    "explanation": "fall victim / prey to sth 意為「成為……的受害者 / 墮入……陷阱」。句意：獨居長者往往更容易成為網路與電話金融詐騙的受害者。",
    "difficulty": "中等"
  },
  {
    "id": "e525",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"在災難性颶風過後，國際人道組織緊急將食品與藥品運往災區。\" data-en=\"In the ______ of the catastrophic hurricane, international humanitarian organizations rushed emergency food and medicine to the disaster zone.\">In the ______ of the catastrophic hurricane, international humanitarian organizations rushed emergency food and medicine to the disaster zone.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "wake（in the wake of 在……之後 / 隨之而來）",
      "view（view）",
      "light（light）",
      "face（face）"
    ],
    "answer": 0,
    "explanation": "in the wake of sth 意為「在……緊接著發生之後 / 作為……的後續結果」。句意：在災難性颶風過後，國際人道組織緊急將食品與藥品運往災區。",
    "difficulty": "中等"
  },
  {
    "id": "e526",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"出於安全考慮，工廠內的自動火災警報系統由持證工程師定期檢測。\" data-en=\"For safety reasons, automated fire alarm systems in the factory are tested at regular ______ by certified engineers.\">For safety reasons, automated fire alarm systems in the factory are tested at regular ______ by certified engineers.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "intervals（at regular intervals 每隔一定間隔時間 / 定期）",
      "instances（instances）",
      "intentions（intentions）",
      "interests（interests）"
    ],
    "answer": 0,
    "explanation": "at regular intervals 意為「每隔一定規律的時間間隔 / 定期」。句意：出於安全考慮，工廠內的自動火災警報系統由持證工程師定期檢測。",
    "difficulty": "中等"
  },
  {
    "id": "e527",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：With （【完整題目中文句意】With (關於 / 至於……) to your inquiry about our product warranty, the standard coverage is valid for two years from the date of purchase.） to your inquiry about our product warranty, the standard coverage is valid for two years from the date of purchase.\" data-en=\"With ______ to your inquiry about our product warranty, the standard coverage is valid for two years from the date of purchase.\">With ______ to your inquiry about our product warranty, the standard coverage is valid for two years from the date of purchase.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "regard（with regard to 關於 / 至於……）",
      "respects（respects）",
      "reference（reference）",
      "relation（relation）"
    ],
    "answer": 0,
    "explanation": "with regard to / in regard to（= regarding, concerning）意為「關於 / 至於……」。",
    "difficulty": "基礎"
  },
  {
    "id": "e528",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"這座新建成的摩天大樓與杜拜著名的建築地標有著驚人的相似之處。\" data-en=\"The newly built skyscraper bears a striking ______ to the famous architectural landmark in Dubai.\">The newly built skyscraper bears a striking ______ to the famous architectural landmark in Dubai.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "resemblance（bear a resemblance to 與……極為相似相像）",
      "resistance（resistance）",
      "resolution（resolution）",
      "responsibility（responsibility）"
    ],
    "answer": 0,
    "explanation": "bear a (striking) resemblance to sb / sth 意為「與……極其相似」。句意：這座新建成的摩天大樓與杜拜著名的建築地標有著驚人的相似之處。",
    "difficulty": "中等"
  },
  {
    "id": "e529",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"由於突發停電，工廠的整條自動化裝配生產線陷入了全面停擺。\" data-en=\"Due to the sudden electric power outage, the factory's entire automated assembly line came to a ______.\">Due to the sudden electric power outage, the factory's entire automated assembly line came to a ______.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "halt（come to a halt 停止運行 / 停擺）",
      "start（開始，原形動詞）",
      "point（point）",
      "conclusion（conclusion）"
    ],
    "answer": 0,
    "explanation": "come to a halt / standstill 意為「停止運轉 / 停頓中斷」。句意：由於突發停電，工廠的整條自動化裝配生產線陷入了全面停擺。",
    "difficulty": "中等"
  },
  {
    "id": "e530",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：I am feeling a bit （【完整題目中文句意】I am feeling a bit (身體不舒服 / 身體微恙生病) the weather today, so I think I should stay in bed and get some rest.） the weather today, so I think I should stay in bed and get some rest.\" data-en=\"I am feeling a bit ______ the weather today, so I think I should stay in bed and get some rest.\">I am feeling a bit ______ the weather today, so I think I should stay in bed and get some rest.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "under（under the weather 身體不適 / 微恙）",
      "over（over）",
      "above（above）",
      "below（below）"
    ],
    "answer": 0,
    "explanation": "feel under the weather 意為「身體不舒服 / 身體微恙生病」。",
    "difficulty": "基礎"
  },
  {
    "id": "e531",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"航空公司向乘客提供了免費機票折價券，以彌補長達十二小時的航班延誤。\" data-en=\"The airline offered complimentary flight vouchers to passengers in order to make ______ for the twelve-hour flight delay.\">The airline offered complimentary flight vouchers to passengers in order to make ______ for the twelve-hour flight delay.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "amends（make amends for 彌補 / 補償）",
      "agreements（agreements）",
      "accounts（accounts）",
      "arrangements（arrangements）"
    ],
    "answer": 0,
    "explanation": "make amends for sth 意為「為……作出補償/賠償/彌補」（同義詞 compensate for）。句意：航空公司向乘客提供了免費機票折價券，以彌補長達十二小時的航班延誤。",
    "difficulty": "中等"
  },
  {
    "id": "e532",
    "category": "高頻片語與搭配詞",
    "question": "<span class=\"en-assist\" data-tw=\"班級代表在畢業典禮上代表全體畢業生發表了發自肺腑的演說。\" data-en=\"The class representative delivered a heartfelt speech on ______ of all graduating students during the commencement ceremony.\">The class representative delivered a heartfelt speech on ______ of all graduating students during the commencement ceremony.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "behalf（on behalf of 代表……）",
      "belief（belief）",
      "benefit（益處 / 利益）",
      "behavior（behavior）"
    ],
    "answer": 0,
    "explanation": "on behalf of sb 意為「代表某人 / 代表全體……」。句意：班級代表在畢業典禮上代表全體畢業生發表了發自肺腑的演說。",
    "difficulty": "基礎"
  },
  {
    "id": "e533",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Regular health checkups are highly recommended for early （【完整題目中文句意】Regular health checkups are highly recommended for early (疾病的早期發現診斷) of chronic diseases.） of chronic diseases.\" data-en=\"Regular health checkups are highly recommended for early ______ of chronic diseases.\">Regular health checkups are highly recommended for early ______ of chronic diseases.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "detection（偵測發現 / 早期檢出）",
      "direction（direction）",
      "description（description）",
      "destruction（破壞 / 毀滅）"
    ],
    "answer": 0,
    "explanation": "early detection of diseases 意為「疾病的早期發現診斷」。",
    "difficulty": "基礎"
  },
  {
    "id": "e534",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The company will （【完整題目中文句意】The company will (推出新產品線) a new eco-friendly product line in the international market next month.） a new eco-friendly product line in the international market next month.\" data-en=\"The company will ______ a new eco-friendly product line in the international market next month.\">The company will ______ a new eco-friendly product line in the international market next month.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "introduce（引進推出）",
      "interrupt（interrupt）",
      "interfere（interfere）",
      "interpret（interpret）"
    ],
    "answer": 0,
    "explanation": "introduce a new product line 意為「推出新產品線」。",
    "difficulty": "基礎"
  },
  {
    "id": "e535",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The teacher emphasized the importance of maintaining good （【完整題目中文句意】The teacher emphasized the importance of maintaining good (維持良好紀律) in the school laboratory during chemistry experiments.） in the school laboratory during chemistry experiments.\" data-en=\"The teacher emphasized the importance of maintaining good ______ in the school laboratory during chemistry experiments.\">The teacher emphasized the importance of maintaining good ______ in the school laboratory during chemistry experiments.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "discipline（紀律 / 秩序守則）",
      "dimension（dimension）",
      "discovery（發現 / 發覺）",
      "discussion（discussion）"
    ],
    "answer": 0,
    "explanation": "maintain good discipline 意為「維持良好紀律」。",
    "difficulty": "基礎"
  },
  {
    "id": "e536",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The government provided financial subsidies to farmers whose crops were damaged by the severe （【完整題目中文句意】The government provided financial subsidies to farmers whose crops were damaged by the severe (遭受嚴重乾旱損害).）.\" data-en=\"The government provided financial subsidies to farmers whose crops were damaged by the severe ______.\">The government provided financial subsidies to farmers whose crops were damaged by the severe ______.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "drought（乾旱災情）",
      "draft（draft）",
      "drain（drain）",
      "drift（漂流 / 漂泊大意）"
    ],
    "answer": 0,
    "explanation": "damaged by severe drought 意為「遭受嚴重乾旱損害」。",
    "difficulty": "基礎"
  },
  {
    "id": "e537",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The new software update aims to enhance the overall （【完整題目中文句意】The new software update aims to enhance the overall (提升數據安全防護) of data encryption and protect user privacy.） of data encryption and protect user privacy.\" data-en=\"The new software update aims to enhance the overall ______ of data encryption and protect user privacy.\">The new software update aims to enhance the overall ______ of data encryption and protect user privacy.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "security（安全防護）",
      "scenery（scenery）",
      "section（section）",
      "session（session）"
    ],
    "answer": 0,
    "explanation": "enhance data security 意為「提升數據安全防護」。",
    "difficulty": "基礎"
  },
  {
    "id": "e538",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Volunteering at the community center is a （【完整題目中文句意】Volunteering at the community center is a (極有意義 / 獲益良多的體驗) experience that allows students to give back to society.） experience that allows students to give back to society.\" data-en=\"Volunteering at the community center is a ______ experience that allows students to give back to society.\">Volunteering at the community center is a ______ experience that allows students to give back to society.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "rewarding（有意義回報豐厚的 / 值得的）",
      "reckless（reckless）",
      "reluctant（勉強的不情願的）",
      "redundant（redundant）"
    ],
    "answer": 0,
    "explanation": "rewarding experience 意為「極有意義 / 獲益良多的體驗」。",
    "difficulty": "基礎"
  },
  {
    "id": "e539",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The young musician has an extraordinary （【完整題目中文句意】The young musician has an extraordinary (在……方面具有天賦才華) for playing the violin and composing classical melodies.） for playing the violin and composing classical melodies.\" data-en=\"The young musician has an extraordinary ______ for playing the violin and composing classical melodies.\">The young musician has an extraordinary ______ for playing the violin and composing classical melodies.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "talent（天賦才華）",
      "target（target）",
      "temptation（temptation）",
      "texture（texture）"
    ],
    "answer": 0,
    "explanation": "have a talent for 意為「在……方面具有天賦才華」。",
    "difficulty": "基礎"
  },
  {
    "id": "e540",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The library provides a quiet （【完整題目中文句意】The library provides a quiet (安靜的氛圍環境) where students can focus on preparing for their entrance exams.） where students can focus on preparing for their entrance exams.\" data-en=\"The library provides a quiet ______ where students can focus on preparing for their entrance exams.\">The library provides a quiet ______ where students can focus on preparing for their entrance exams.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "atmosphere（氛圍氣氛 / 環境）",
      "altitude（altitude）",
      "attitude（attitude）",
      "aptitude（aptitude）"
    ],
    "answer": 0,
    "explanation": "quiet atmosphere 意為「安靜的氛圍環境」。",
    "difficulty": "基礎"
  },
  {
    "id": "e541",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The doctor prescribed a course of antibiotics to treat the bacterial （【完整題目中文句意】The doctor prescribed a course of antibiotics to treat the bacterial (細菌感染) in the patient's lungs.） in the patient's lungs.\" data-en=\"The doctor prescribed a course of antibiotics to treat the bacterial ______ in the patient's lungs.\">The doctor prescribed a course of antibiotics to treat the bacterial ______ in the patient's lungs.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "infection（感染）",
      "injection（injection）",
      "inspection（inspection）",
      "intention（intention）"
    ],
    "answer": 0,
    "explanation": "bacterial infection 意為「細菌感染」。",
    "difficulty": "基礎"
  },
  {
    "id": "e542",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The company implemented strict quality （【完整題目中文句意】The company implemented strict quality (品質管制措施) measures to ensure that zero defective goods leave the factory.） measures to ensure that zero defective goods leave the factory.\" data-en=\"The company implemented strict quality ______ measures to ensure that zero defective goods leave the factory.\">The company implemented strict quality ______ measures to ensure that zero defective goods leave the factory.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "control（品質管制）",
      "contact（contact）",
      "content（滿意的 / 內容目錄）",
      "contest（比賽 / 競爭）"
    ],
    "answer": 0,
    "explanation": "quality control measures 意為「品質管制措施」。",
    "difficulty": "基礎"
  },
  {
    "id": "e543",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The team celebrated their （【完整題目中文句意】The team celebrated their (慶祝勝利) after winning the hard-fought championship match in overtime.） after winning the hard-fought championship match in overtime.\" data-en=\"The team celebrated their ______ after winning the hard-fought championship match in overtime.\">The team celebrated their ______ after winning the hard-fought championship match in overtime.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "victory（勝利）",
      "variety（variety）",
      "victim（victim）",
      "vision（vision）"
    ],
    "answer": 0,
    "explanation": "celebrate their victory 意為「慶祝勝利」。",
    "difficulty": "基礎"
  },
  {
    "id": "e544",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Drinking clean water and maintaining proper hygiene are vital for the （【完整題目中文句意】Drinking clean water and maintaining proper hygiene are vital for the (疾病的預防) of waterborne diseases.） of waterborne diseases.\" data-en=\"Drinking clean water and maintaining proper hygiene are vital for the ______ of waterborne diseases.\">Drinking clean water and maintaining proper hygiene are vital for the ______ of waterborne diseases.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "prevention（預防）",
      "preparation（preparation）",
      "presentation（簡報演講 / 呈現贈送）",
      "preservation（保存 / 防腐維護保護）"
    ],
    "answer": 0,
    "explanation": "prevention of diseases 意為「疾病的預防」。",
    "difficulty": "基礎"
  },
  {
    "id": "e545",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The sudden rise in consumer （【完整題目中文句意】The sudden rise in consumer (消費者需求的上升) has driven the retail sector's economic expansion this quarter.） has driven the retail sector's economic expansion this quarter.\" data-en=\"The sudden rise in consumer ______ has driven the retail sector's economic expansion this quarter.\">The sudden rise in consumer ______ has driven the retail sector's economic expansion this quarter.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "demand（需求）",
      "damage（損害 / 賠償金）",
      "danger（danger）",
      "debate（辯論 / 爭論）"
    ],
    "answer": 0,
    "explanation": "rise in consumer demand 意為「消費者需求的上升」。",
    "difficulty": "基礎"
  },
  {
    "id": "e546",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The city council approved a budget to expand public （【完整題目中文句意】The city council approved a budget to expand public (公共設施機構) such as parks, libraries, and sports centers.） such as parks, libraries, and sports centers.\" data-en=\"The city council approved a budget to expand public ______ such as parks, libraries, and sports centers.\">The city council approved a budget to expand public ______ such as parks, libraries, and sports centers.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "facilities（公共設施機構）",
      "failures（失敗 / 故障失敗者）",
      "fantasies（fantasies）",
      "factors（因素 / 要素因子）"
    ],
    "answer": 0,
    "explanation": "public facilities 意為「公共設施機構」。",
    "difficulty": "基礎"
  },
  {
    "id": "e547",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The chef used fresh seasonal （【完整題目中文句意】The chef used fresh seasonal (新鮮當季食材) to prepare an exquisite multi-course French banquet.） to prepare an exquisite multi-course French banquet.\" data-en=\"The chef used fresh seasonal ______ to prepare an exquisite multi-course French banquet.\">The chef used fresh seasonal ______ to prepare an exquisite multi-course French banquet.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "ingredients（食材原料）",
      "instruments（instruments）",
      "instructions（instructions）",
      "institutions（institutions）"
    ],
    "answer": 0,
    "explanation": "fresh seasonal ingredients 意為「新鮮當季食材」。",
    "difficulty": "基礎"
  },
  {
    "id": "e548",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Regular exercise and adequate sleep can greatly （【完整題目中文句意】Regular exercise and adequate sleep can greatly (提升心情與活力) your mood and overall vitality.） your mood and overall vitality.\" data-en=\"Regular exercise and adequate sleep can greatly ______ your mood and overall vitality.\">Regular exercise and adequate sleep can greatly ______ your mood and overall vitality.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "boost（提升增強）",
      "block（阻擋 / 街區）",
      "blame（blame）",
      "borrow（借入，原形動詞）"
    ],
    "answer": 0,
    "explanation": "boost mood and vitality 意為「提升心情與活力」。",
    "difficulty": "基礎"
  },
  {
    "id": "e549",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：The documentary highlights the urgent need to protect endangered marine （【完整題目中文句意】The documentary highlights the urgent need to protect endangered marine (保護瀕危海洋物種) from illegal overfishing.） from illegal overfishing.\" data-en=\"The documentary highlights the urgent need to protect endangered marine ______ from illegal overfishing.\">The documentary highlights the urgent need to protect endangered marine ______ from illegal overfishing.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "species（物種種群）",
      "spaces（spaces）",
      "sources（sources）",
      "secrets（secrets）"
    ],
    "answer": 0,
    "explanation": "protect endangered marine species 意為「保護瀕危海洋物種」。",
    "difficulty": "基礎"
  },
  {
    "id": "e550",
    "category": "大考核心字彙",
    "question": "<span class=\"en-assist\" data-tw=\"【題目完整句意】：Consistent hard work and continuous learning are the true secrets to achieving lifelong （【完整題目中文句意】Consistent hard work and continuous learning are the true secrets to achieving lifelong (取得終生成功).）.\" data-en=\"Consistent hard work and continuous learning are the true secrets to achieving lifelong ______.\">Consistent hard work and continuous learning are the true secrets to achieving lifelong ______.<span class=\"speak-icon\">🔊</span></span>",
    "options": [
      "success（成功成就）",
      "silence（silence）",
      "struggle（struggle）",
      "suspicion（suspicion）"
    ],
    "answer": 0,
    "explanation": "achieving lifelong success 意為「取得終生成功」。",
    "difficulty": "基礎"
  }
];

if (typeof module !== 'undefined') {
  module.exports = englishQuiz;
}
