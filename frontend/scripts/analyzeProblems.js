const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'src', 'data', 'problems.js');
const text = fs.readFileSync(file, 'utf8');
const re = /"(?<id>[^"]+)":\s*\{(?<body>[\s\S]*?)\n\s*\},/g;
const keywordMap = {
    'Linked List': /linked list|ListNode|linked-list|add-two-numbers|reverse-linked-list/i,
    'Binary Search': /binary search|binary-search|search-in-rotated|median-of-two-sorted-arrays|peak-index|find-peak/i,
    'Two Pointers': /two pointers|two-pointer|two-sum|two-sum-ii|reverse-string|container-with-most-water/i,
    'Sliding Window': /sliding window|minimum-window|longest-substring|subarray|window/i,
    'Dynamic Programming': /dynamic programming|\bdp\b|climbing-stairs|house-robber|longest-increasing-subsequence|coin-change/i,
    'Graph': /graph|number-of-islands|clone-graph|course-schedule|topological|\bdfs\b|\bbfs\b/i,
    'Stack': /stack|min-stack|evaluate-reverse-polish|implement-stack|valid-parentheses/i,
    'Queue': /queue|implement-queue|rotting-oranges|rotten/i,
    'Hash Table': /hash|hash table|hash map|two-sum|contains-duplicate|group-anagrams|top-k/i,
    'Heap': /heap|kth-largest|top k|priority queue/i,
    'Math': /math|roman|integer-to-roman|roman-to-integer|atoi/i,
    'Matrix': /matrix|rotate-image|spiral-matrix|game-of-life/i,
    'Backtracking': /backtracking|n-queens|word-search|combination-sum/i,
    'Greedy': /greedy|gas-station|jump|best-time-to-buy-sell-stock/i,
};

const results = [];
let m;
while ((m = re.exec(text)) !== null) {
    const id = m.groups.id;
    const body = m.groups.body;
    const titleMatch = body.match(/title:\s*"([^"]+)"/);
    const title = titleMatch ? titleMatch[1] : "";
    const difficultyMatch = body.match(/difficulty:\s*"([^"]+)"/);
    const difficulty = difficultyMatch ? difficultyMatch[1] : "";
    const categoryMatch = body.match(/category:\s*"([^"]+)"/);
    const category = categoryMatch ? categoryMatch[1] : "";
    const descMatch = body.match(/description:\s*\{([\s\S]*?)\}/);
    let descText = '';
    if (descMatch) {
        const t = descMatch[1].match(/text:\s*"([^"]+)"/);
        descText = t ? t[1] : '';
    }

    const issues = [];
    if (!title) issues.push('missing title');
    if (!difficulty) issues.push('missing difficulty');
    else if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) issues.push('unexpected difficulty: ' + difficulty);
    if (!category) issues.push('missing category');
    if (!descText) issues.push('missing description.text');

    const existingTopics = category ? category.split('•').map(s => s.trim()).filter(Boolean) : [];

    const suggestions = new Set();
    const hay = (title + ' ' + category + ' ' + descText).toLowerCase();
    for (const [topic, pattern] of Object.entries(keywordMap)) {
        if (pattern.test(hay)) suggestions.add(topic);
    }
    // remove existing
    for (const t of existingTopics) if (suggestions.has(t)) suggestions.delete(t);

    results.push({ id, title, difficulty, category, existingTopics, suggestedTopics: Array.from(suggestions).sort(), issues });
}

console.log(JSON.stringify(results, null, 2));
