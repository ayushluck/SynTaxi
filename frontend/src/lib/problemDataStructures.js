const LINKED_LIST_DEFINITIONS = {
  javascript: `// Provided by Syntaxi — you can use ListNode directly.
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}`,
  python: `# Provided by Syntaxi — you can use ListNode directly.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next`,
  java: `// Provided by Syntaxi — you can use ListNode directly.
class ListNode {
    int val;
    ListNode next;

    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}`,
};

const RANDOM_LIST_DEFINITIONS = {
  javascript: `// Provided by Syntaxi — you can use Node directly.
class Node {
  constructor(val = 0, next = null, random = null) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
}`,
  python: `# Provided by Syntaxi — you can use Node directly.
class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val = val
        self.next = next
        self.random = random`,
  java: `// Provided by Syntaxi — you can use Node directly.
class Node {
    int val;
    Node next;
    Node random;

    Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}`,
};

const GRAPH_NODE_DEFINITIONS = {
  javascript: `// Provided by Syntaxi — you can use Node directly.
class Node {
  constructor(val = 0, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}`,
  python: `# Provided by Syntaxi — you can use Node directly.
class Node:
    def __init__(self, val=0, neighbors=None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []`,
  java: `// Provided by Syntaxi — you can use Node directly.
class Node {
    public int val;
    public List<Node> neighbors;

    public Node() {
        this(0, new ArrayList<>());
    }

    public Node(int val) {
        this(val, new ArrayList<>());
    }

    public Node(int val, List<Node> neighbors) {
        this.val = val;
        this.neighbors = neighbors;
    }
}`,
};

const TREE_NODE_DEFINITIONS = {
  javascript: `// Provided by Syntaxi — you can use TreeNode directly.
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}`,
  python: `# Provided by Syntaxi — you can use TreeNode directly.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right`,
  java: `// Provided by Syntaxi — you can use TreeNode directly.
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}`,
};

export const DATA_STRUCTURES = {
  listNode: {
    name: "ListNode",
    description: "A node in a singly linked list.",
    definitions: LINKED_LIST_DEFINITIONS,
  },
  randomListNode: {
    name: "Node",
    description: "A linked-list node with next and random pointers.",
    definitions: RANDOM_LIST_DEFINITIONS,
  },
  graphNode: {
    name: "Node",
    description: "A graph node containing a value and a list of neighbors.",
    definitions: GRAPH_NODE_DEFINITIONS,
  },
  treeNode: {
    name: "TreeNode",
    description: "A node in a binary tree with left and right children.",
    definitions: TREE_NODE_DEFINITIONS,
  },
};

const hasDefinition = (code, structureName, language) => {
  if (language === "python") {
    return new RegExp(`class\\s+${structureName}\\s*[:(]`).test(code);
  }

  return new RegExp(`class\\s+${structureName}\\b`).test(code);
};

const getRequiredStructureKeys = (problem) => {
  if (problem.id === "copy-list-with-random-pointer") {
    return ["randomListNode"];
  }

  if (problem.id === "clone-graph") {
    return ["graphNode"];
  }

  if (
    problem.category
      ?.split(/â€¢|•/)
      .some((category) => category.trim().toLowerCase() === "tree")
  ) {
    return ["treeNode"];
  }

  const categories = problem.category
    ?.split(/â€¢|•/)
    .map((category) => category.trim().toLowerCase()) ?? [];

  if (categories.includes("linked list") && !categories.includes("design")) {
    return ["listNode"];
  }

  return [];
};

export const addProblemDataStructures = (problems) =>
  Object.fromEntries(
    Object.entries(problems).map(([id, problem]) => {
      const structureKeys = getRequiredStructureKeys(problem);

      if (structureKeys.length === 0) {
        return [id, problem];
      }

      const starterCode = Object.fromEntries(
        Object.entries(problem.starterCode).map(([language, code]) => {
          const definitions = structureKeys
            .map((key) => DATA_STRUCTURES[key])
            .filter(
              (structure) =>
                structure.definitions[language] &&
                !hasDefinition(code, structure.name, language),
            )
            .map((structure) => structure.definitions[language]);

          return [
            language,
            definitions.length > 0 ? `${definitions.join("\n\n")}\n\n${code}` : code,
          ];
        }),
      );

      return [
        id,
        {
          ...problem,
          dataStructures: structureKeys.map((key) => ({
            key,
            name: DATA_STRUCTURES[key].name,
            description: DATA_STRUCTURES[key].description,
          })),
          starterCode,
        },
      ];
    }),
  );
