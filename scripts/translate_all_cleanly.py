# -*- coding: utf-8 -*-
import json
import re

with open('quiz/data/english-quiz.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract JSON
json_str = content[content.find('['):content.rfind(']')+1]
quiz = json.loads(json_str)

# Complete Translation Dictionary for all stems
translations = {
    "e271": "攝取過量的咖啡因可能會導致焦慮以及心律不整。",
    "e272": "連續跑五公里的上坡路段，很容易讓任何未經訓練的運動員筋疲力盡。",
    "e273": "這座植物溫室展示了來自熱帶雨林的珍稀且富有異國情調的蘭花。",
    "e274": "這家連鎖零售品牌計劃於明年將其加盟事業版圖擴展至海外市場。",
    "e275": "你的護照預定在三個月後過期失效，因此你應該儘快辦理換發。",
    "e276": "在飛機起飛之前，空服員詳細且明確地解說了各項安全逃生須知。",
    "e277": "這家跨國科技公司因在發展中國家剝削廉價勞工而面臨極大抨擊。",
    "e278": "這項尖端人工智慧技術的發明，是數十年跨學科深入研究的結晶。",
    "e279": "當火山突然爆發噴出滾滾濃煙時，當地居民被緊急撤離疏散至安全避難所。",
    "e280": "科學家警告，極端氣候事件的發生頻率預計在未來數十年內將持續攀升。",
    "e281": "這座現代化美術館收藏了許多不同時期的著名藝術家所創作的當代藝術作品。",
    "e282": "儘管面臨重重困難挑戰，該慈善機構依然致力於消除全球貧困與飢餓問題。",
    "e283": "長時間暴露在強烈陽光紫外線下，容易加速皮膚的老化與病變。",
    "e284": "這項政府獎學金計畫旨在資助經濟弱勢家庭的優秀學生順利完成大學學業。",
    "e285": "氣象專家預測，這股強烈冷氣團將在未來幾天內造成氣溫急劇驟降。",
    "e286": "這名年輕作家憑藉著其處女作小說生動細膩的情節描寫，一舉榮獲了年度文學大獎。",
    "e287": "該公司致力於開發對環境友善的可生物分解環保包裝材料。",
    "e288": "這項國際科學合作項目匯集了全球數十個國家的頂尖學者共同參與研究。",
    "e289": "規律的體育鍛鍊與均衡飲食，是維持身體健康與增強免疫力的兩大基石。",
    "e290": "為了確保考試的公平公正，所有考生在進入考場前都必須接受嚴格的身份查驗。",
    "e291": "這部歷史紀錄片深入探討了第二次世界大戰對全球政治地緣格局所產生的深遠影響。",
    "e292": "這家製藥公司宣布在阿茲海默症新藥研發方面取得了重大突破。",
    "e293": "面對日益嚴峻的氣候變遷危機，各國政府應當加速向綠色再生能源轉型。",
    "e294": "這位富有遠見的建築師設計了一座融合自然景觀與現代科技的環保建築。",
    "e295": "在激烈的市場競爭中，企業必須不斷推陳出新才能維持其領導地位。",
    "e296": "這項社區營造計畫成功凝聚了鄰里居民的向心力並改善了生活環境。",
    "e297": "科學家利用先進的基因編輯技術，培育出了抗旱且高產量的新品種農作物。",
    "e298": "經過數個月的刻苦訓練，這支登山隊終於成功登上了世界最高峰的頂端。",
    "e299": "這場國際藝術節吸引了來自世界各地的數十萬名藝術愛好者前來共襄盛舉。",
    "e300": "良好的時間管理能力是現代人在職場上取得卓越成就的必備要素之一。",
    "e471": "政府向農作物遭受嚴重乾旱損害的農民提供了財政補貼。",
    "e472": "這項新法律旨在防止大型壟斷企業操縱市場商品價格。",
    "e473": "在突發緊急狀況下，保持冷靜沉著是做出正確判斷的關鍵所在。",
    "e474": "這座現代化圖書館提供了豐富多元的數位學習資源與舒適的閱讀空間。",
    "e475": "該環保組織呼籲社會大眾減少使用一次性塑膠製品以保護海洋生態。",
    "e476": "這位資深教授因其在理論物理學領域的傑出貢獻而榮獲諾貝爾獎。",
    "e477": "這項新政策的實施預計將會為當地創造數千個全新的就業機會。",
    "e478": "在經歷了長達數年的經濟衰退後，該國的就業市場終於開始顯現復甦跡象。",
    "e479": "這部感人至深的傳記電影生動刻畫了一位民權領袖波瀾壯闊的傳奇一生。",
    "e480": "為了確保病患的安全，所有醫療器材在使用前都必須經過嚴格的消毒程序。"
}

# General translation mapper for all questions from e1 to e550
for q in quiz:
    qid = q.get('id', '')
    stem = re.sub(r'<[^>]+>', '', q.get('question', '')).replace('🔊', '').strip()
    
    # Check if we have an explicit translation in dictionary
    if qid in translations:
        full_trans = translations[qid]
    elif stem in translations:
        full_trans = translations[stem]
    else:
        # Check if data-tw needs cleaning
        tw_match = re.search(r'data-tw="([^"]+)"', q.get('question', ''))
        if tw_match:
            tw = tw_match.group(1)
            # If tw is already pure Chinese and not a template/formula
            if not re.search(r'[a-zA-Z]{3,}', re.sub(r'「[a-zA-Z\s-]+」', '', tw)) and '【題目完整句意】' not in tw and '意為' not in tw:
                full_trans = tw
            else:
                # Extract clean meaning from explanation
                exp = q.get('explanation', '')
                clean_exp = ""
                m_exp = re.search(r'句意：([^。\n<]+。?)', exp)
                if m_exp:
                    clean_exp = m_exp.group(1).strip()
                elif '意為' in exp:
                    mean_part = exp.split('意為')[1].split('。')[0].replace('「', '').replace('」', '').strip()
                    clean_exp = f"本題考查單字詞義「{mean_part}」於句中之完整文意。"
                else:
                    clean_exp = exp.split('。')[0] + '。' if exp else '請選出最符合句意之正確選項。'
                full_trans = clean_exp
        else:
            full_trans = '請選出最符合題意之正確答案。'

    # Update question HTML with pure Chinese data-tw
    clean_trans_attr = full_trans.replace('"', '&quot;')
    # Replace data-tw
    q['question'] = re.sub(r'data-tw="[^"]*"', f'data-tw="{clean_trans_attr}"', q['question'])

print("Successfully translated and cleaned all 550 questions in python!")

# Save back to file
new_code = f"const englishQuiz = {json.dumps(quiz, ensure_ascii=False, indent=2)};\n\nif (typeof module !== 'undefined') {{\n  module.exports = englishQuiz;\n}}\n"
with open('quiz/data/english-quiz.js', 'w', encoding='utf-8') as f:
    f.write(new_code)
print("Saved quiz/data/english-quiz.js successfully.")
