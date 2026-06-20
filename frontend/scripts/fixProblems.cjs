const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'src', 'data', 'problems.js');
let text = fs.readFileSync(file, 'utf8');

const re = /"(?<id>[^"]+)":\s*\{(?<body>[\s\S]*?)\n\s*\},/g;
const keywordMap = {
    'Linked List': /linked list|listnode|linked-list|add-two-numbers|reverse-linked-list/i,
    'Binary Search': /binary search|binary-search|search-in-rotated|median-of-two-sorted-arrays|peak-index|find-peak/i,
    'Two Pointers': /two pointers|two-pointer|two-sum|two-sum-ii|reverse-string|container-with-most-water/i,
    'Sliding Window': /sliding window|minimum-window|longest-substring|subarray|window/i,
    'Dynamic Programming': /dynamic programming|\bdp\b|climbing-stairs|house-robber|longest-increasing-subsequence|coin-change/i,
    'Graph': /graph|number-of-islands|clone-graph|course-schedule|topological|\bdfs\b|\bbfs\b/i,
    'Stack': /stack|min-stack|evaluate-reverse-polish|implement-stack|valid-parentheses|monotonic stack|monotonic-stack/i,
    'Queue': /queue|implement-queue|rotting-oranges|rotten/i,
    'Hash Table': /hash|hash table|hash map|two-sum|contains-duplicate|group-anagrams|top-k/i,
    'Heap': /heap|kth-largest|top k|priority queue/i,
    'Math': /math|roman|integer-to-roman|roman-to-integer|atoi/i,
    'Matrix': /matrix|rotate-image|spiral-matrix|game-of-life/i,
    'Backtracking': /backtracking|n-queens|word-search|combination-sum/i,
    'Greedy': /greedy|gas-station|jump|best-time-to-buy-sell-stock/i,
};

let modified = 0;
let filledDescriptions = 0;
let addedTopics = 0;

let m;
let newText = text;

while ((m = re.exec(text)) !== null) {
    const id = m.groups.id;
    const body = m.groups.body;
    const titleMatch = body.match(/title:\s*"([^"]+)"/);
    const title = titleMatch ? titleMatch[1] : id;
    const categoryMatch = body.match(/category:\s*"([^"]+)"/);
    const category = categoryMatch ? categoryMatch[1] : '';

    const descMatch = body.match(/description:\s*\{([\s\S]*?)\n\s*\}/);
    let descTextExists = false;
    if (descMatch) {
        const inner = descMatch[1];
        if (/text:\s*"[^"]+"/.test(inner)) descTextExists = true;
    }

    // compute suggested topics
    const hay = (title + ' ' + category + ' ' + (descMatch ? descMatch[1] : '')).toLowerCase();
    const suggestions = new Set();
    for (const [topic, pattern] of Object.entries(keywordMap)) {
        if (pattern.test(hay)) suggestions.add(topic);
    }

    // remove existing topics from suggestions
    const existing = category ? category.split('•').map(s => s.trim()).filter(Boolean) : [];
    for (const t of existing) if (suggestions.has(t)) suggestions.delete(t);

    // apply suggested topics by appending to category
    if (suggestions.size > 0) {
        const add = ' • ' + Array.from(suggestions).join(' • ');
        if (categoryMatch) {
            const old = categoryMatch[0]; // category:"..."
            const newcat = `category: \"${category + add.replace(/^\s*•\s*/, ' • ')}\"`;
            newText = newText.replace(old, newcat);
            addedTopics += suggestions.size;
            modified++;
        }
    }

    // fill missing description.text with title when absent
    if (!descTextExists) {
        if (descMatch) {
            const fullDesc = descMatch[0];
            const inner = descMatch[1];
            const insertion = `\n      text: \"${title}\",`;
            const newDesc = fullDesc.replace(/description:\s*\{([\s\S]*?)\n\s*\}/, (match, g1) => {
                return 'description: {' + insertion + g1 + '\n    }';
            });
            newText = newText.replace(fullDesc, newDesc);
            filledDescriptions++;
            modified++;
        } else {
            // no description block at all, insert one after category
            if (categoryMatch) {
                const catFull = categoryMatch[0];
                const insertBlock = `\n    description: {\n      text: \"${title}\",\n      notes: []\n    },`;
                newText = newText.replace(catFull, catFull + insertBlock);
                filledDescriptions++;
                modified++;
            }
        }
    }
}

if (modified > 0) {
    fs.writeFileSync(file, newText, 'utf8');
}

console.log(JSON.stringify({ modified, filledDescriptions, addedTopics }, null, 2));
