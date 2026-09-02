const fs = require('fs');
const path = require('path');

const enPath = path.join(__dirname, '..', 'subjects', 'english.html');
let html = fs.readFileSync(enPath, 'utf8');

// 1. CH1 (字尾與詞性轉換)
const suffixTable = `
          <h3>四、常見字尾與詞性轉換規律 (Suffixes & Word Families)</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>字尾 (Suffix)</th>
                <th>轉化詞性與意涵</th>
                <th>經典大考衍生字範例</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>-able / -ible</strong></td>
                <td>動詞 $\\rightarrow$ 形容詞（「能夠...的」、「值得...的」）</td>
                <td>• rely $\\rightarrow$ <strong>reliable</strong>（可靠的）<br>• flex $\\rightarrow$ <strong>flexible</strong>（有彈性的、可變通的）<br>• access $\\rightarrow$ <strong>accessible</strong>（可獲取的、易到達的）</td>
              </tr>
              <tr>
                <td><strong>-ify / -ize / -en</strong></td>
                <td>名詞/形容詞 $\\rightarrow$ 動詞（「使變成...」、「化」）</td>
                <td>• simple $\\rightarrow$ <strong>simplify</strong>（簡化）<br>• sharp $\\rightarrow$ <strong>sharpen</strong>（磨利、使敏銳）<br>• memory $\\rightarrow$ <strong>memorize</strong>（記住、熟背）</td>
              </tr>
              <tr>
                <td><strong>-tion / -sion / -ment</strong></td>
                <td>動詞 $\\rightarrow$ 名詞（「動作、狀態、結果」）</td>
                <td>• pollute $\\rightarrow$ <strong>pollution</strong>（污染）<br>• conclude $\\rightarrow$ <strong>conclusion</strong>（結論）<br>• achieve $\\rightarrow$ <strong>achievement</strong>（成就）</td>
              </tr>
              <tr>
                <td><strong>-ness / -ity</strong></td>
                <td>形容詞 $\\rightarrow$ 抽象名詞（「特質、性質」）</td>
                <td>• aware $\\rightarrow$ <strong>awareness</strong>（意識、警覺）<br>• diverse $\\rightarrow$ <strong>diversity</strong>（多樣性）<br>• complex $\\rightarrow$ <strong>complexity</strong>（複雜度）</td>
              </tr>
            </tbody>
          </table>
`;

// 2. CH3 (使役動詞與感官動詞補語)
const causativeTable = `
          <h3>四、使役動詞與感官動詞受詞補語（必考文法陷阱）</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>動詞類別</th>
                <th>代表動詞</th>
                <th>主動受詞補語</th>
                <th>被動受詞補語</th>
                <th>大考代表例句</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>使役動詞</strong></td>
                <td><strong>make, have, let</strong></td>
                <td><strong>原形動詞 (V)</strong></td>
                <td><strong>過去分詞 (p.p.)</strong></td>
                <td>• The coach <strong>made him run</strong> five laps.（主動）<br>• She <strong>had her car repaired</strong> yesterday.（被動：車被修）</td>
              </tr>
              <tr>
                <td><strong>特殊使役</strong></td>
                <td><strong>get</strong></td>
                <td><strong>不定詞 (to V)</strong></td>
                <td><strong>過去分詞 (p.p.)</strong></td>
                <td>• I will <strong>get my brother to help</strong> me.（主動用 to V！）<br>• He <strong>got his tooth pulled</strong> out.（被動用 p.p.）</td>
              </tr>
              <tr>
                <td><strong>感官動詞</strong></td>
                <td><strong>see, hear, watch, notice, feel</strong></td>
                <td><strong>原形動詞 (V)</strong>（全過程）<br><strong>現在分詞 (V-ing)</strong>（進行中）</td>
                <td><strong>過去分詞 (p.p.)</strong></td>
                <td>• I <strong>heard someone calling</strong> my name.（正在叫）<br>• We <strong>watched the thief arrested</strong> by police.（小偷被捕）</td>
              </tr>
            </tbody>
          </table>
`;

// Insert suffixTable inside ch1 before </section>
html = html.replace(/(<section class="content-section" id="ch1">[\s\S]*?)(<\/section>)/i, '$1' + suffixTable + '\n        $2');

// Insert causativeTable inside ch3 before </section>
html = html.replace(/(<section class="content-section" id="ch3">[\s\S]*?)(<\/section>)/i, '$1' + causativeTable + '\n        $2');

fs.writeFileSync(enPath, html, 'utf8');
console.log('english.html successfully deepened ch1 and ch3! New size: ' + Buffer.byteLength(html, 'utf8'));
