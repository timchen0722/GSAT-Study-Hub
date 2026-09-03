const fs = require('fs');

let html = fs.readFileSync('subjects/english.html', 'utf8');

// 1. Chapter 12 Collocations table
const collocations = [
  {
    find: `<td><span class="en-assist" data-tw="他將他的卓越成功歸因於勤奮與毅力。">He <em>attributes</em> his remarkable success <em>to</em> hard work and perseverance.<span class="speak-icon">🔊</span></span></td>`,
    replace: `<td><span class="en-assist" data-tw="他將他的卓越成功歸因於勤奮與毅力。">He <em>attributes</em> his remarkable success <em>to</em> hard work and perseverance.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（他將他的卓越成功歸因於勤奮與毅力）</span></td>`
  },
  {
    find: `<td><span class="en-assist" data-tw="溫室氣體的過量排放直接導致了全球氣候變遷。">Excessive emission of greenhouse gases directly <em>contributes to</em> global climate change.<span class="speak-icon">🔊</span></span></td>`,
    replace: `<td><span class="en-assist" data-tw="溫室氣體的過量排放直接導致了全球氣候變遷。">Excessive emission of greenhouse gases directly <em>contributes to</em> global climate change.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（溫室氣體的過量排放直接導致了全球氣候變遷）</span></td>`
  },
  {
    find: `<td><span class="en-assist" data-tw="再生能源目前佔總發電量的近 30%。">Renewable energy currently <em>accounts for</em> nearly 30% of total electricity production.<span class="speak-icon">🔊</span></span></td>`,
    replace: `<td><span class="en-assist" data-tw="再生能源目前佔總發電量的近 30%。">Renewable energy currently <em>accounts for</em> nearly 30% of total electricity production.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（再生能源目前佔總發電量的近 30%）</span></td>`
  },
  {
    find: `<td><span class="en-assist" data-tw="粗心導致事故。/ 事故起因於粗心。">Carelessness <em>results in</em> accidents. / Accidents <em>result from</em> carelessness.<span class="speak-icon">🔊</span></span></td>`,
    replace: `<td><span class="en-assist" data-tw="粗心導致事故。/ 事故起因於粗心。">Carelessness <em>results in</em> accidents. / Accidents <em>result from</em> carelessness.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（粗心導致事故 / 事故起因於粗心）</span></td>`
  },
  {
    find: `<td><span class="en-assist" data-tw="長期睡眠剝奪會使人失去敏銳的心智。">Prolonged sleep deprivation can <em>deprive</em> individuals <em>of</em> their mental sharpness.<span class="speak-icon">🔊</span></span></td>`,
    replace: `<td><span class="en-assist" data-tw="長期睡眠剝奪會使人失去敏銳的心智。">Prolonged sleep deprivation can <em>deprive</em> individuals <em>of</em> their mental sharpness.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（長期睡眠剝奪會使人失去敏銳的心智）</span></td>`
  },
  {
    find: `<td><span class="en-assist" data-tw="所有製造產品都必須嚴格遵守國際安全標準。">All manufactured products must strictly <em>conform to</em> international safety standards.<span class="speak-icon">🔊</span></span></td>`,
    replace: `<td><span class="en-assist" data-tw="所有製造產品都必須嚴格遵守國際安全標準。">All manufactured products must strictly <em>conform to</em> international safety standards.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（所有製造產品都必須嚴格遵守國際安全標準）</span></td>`
  },
  {
    find: `<td><span class="en-assist" data-tw="世界各國政府正竭盡全力應對日益嚴重的通膨。">Governments worldwide are trying their best to <em>cope with</em> rising inflation.<span class="speak-icon">🔊</span></span></td>`,
    replace: `<td><span class="en-assist" data-tw="世界各國政府正竭盡全力應對日益嚴重的通膨。">Governments worldwide are trying their best to <em>cope with</em> rising inflation.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（世界各國政府正竭盡全力應對日益嚴重的通膨）</span></td>`
  },
  {
    find: `<td><span class="en-assist" data-tw="沒有任何東西能真正彌補生命的慘痛損失。">Nothing can truly <em>compensate for</em> the tragic loss of human lives.<span class="speak-icon">🔊</span></span></td>`,
    replace: `<td><span class="en-assist" data-tw="沒有任何東西能真正彌補生命的慘痛損失。">Nothing can truly <em>compensate for</em> the tragic loss of human lives.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（沒有任何東西能真正彌補生命的慘痛損失）</span></td>`
  },
  {
    find: `<td><span class="en-assist" data-tw="我並不完全認同金錢能帶來絕對幸福的觀點。">I do not completely <em>subscribe to</em> the idea that money brings absolute happiness.<span class="speak-icon">🔊</span></span></td>`,
    replace: `<td><span class="en-assist" data-tw="我並不完全認同金錢能帶來絕對幸福的觀點。">I do not completely <em>subscribe to</em> the idea that money brings absolute happiness.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（我並不完全認同金錢能帶來絕對幸福的觀點）</span></td>`
  },
  {
    find: `<td><span class="en-assist" data-tw="大多數心理焦慮往往源自未表達的童年創傷。">Most psychological anxieties often <em>stem from</em> unexpressed childhood trauma.<span class="speak-icon">🔊</span></span></td>`,
    replace: `<td><span class="en-assist" data-tw="大多數心理焦慮往往源自未表達的童年創傷。">Most psychological anxieties often <em>stem from</em> unexpressed childhood trauma.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（大多數心理焦慮往往源自未表達的童年創傷）</span></td>`
  }
];

collocations.forEach(c => {
  html = html.replace(c.find, c.replace);
});

// 2. Chapter 15 Subjunctive table
html = html.replace(
  `<td><span class="en-assist" data-tw="如果我是你，我就會抓住這個難得的機會。">If I <strong>were</strong> you, I <strong>would seize</strong> this rare opportunity.<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="如果我是你，我就會抓住這個難得的機會。">If I <strong>were</strong> you, I <strong>would seize</strong> this rare opportunity.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（如果我是你，我就會抓住這個難得的機會）</span></td>`
);

html = html.replace(
  `<td><span class="en-assist" data-tw="如果他當時聽了醫生的話，他就不會生病了。">If he <strong>had listened</strong> to the doctor, he <strong>would not have fallen</strong> ill.<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="如果他當時聽了醫生的話，他就不會生病了。">If he <strong>had listened</strong> to the doctor, he <strong>would not have fallen</strong> ill.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（如果他當時聽了醫生的話，他就不會生病了）</span></td>`
);

html = html.replace(
  `<td><span class="en-assist" data-tw="即使太陽從西邊升起，我也絕不會改變主意。">If the sun <strong>were to rise</strong> in the west, I would still never change my mind.<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="即使太陽從西邊升起，我也絕不會改變主意。">If the sun <strong>were to rise</strong> in the west, I would still never change my mind.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（即使太陽從西邊升起，我也絕不會改變主意）</span></td>`
);

fs.writeFileSync('subjects/english.html', html, 'utf8');
console.log('Finished updating visible translations in Chapter 12 and 15!');
