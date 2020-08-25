import { normalizedFile, normalizedDirectory } from "@ndcb/fs-util";

module.exports = [
  {
    fs: {
      "/": {
        content: {
          ".gitignore": "node_modules",
          ".siteignore": "*.py",
          "index.md": "",
          "figure.png": "",
          "figure.py": "",
          "fr-CA": {},
          node_modules: {},
        },
      },
    },
    rulesFilenames: [".gitignore", ".siteignore"],
    cases: [
      {
        directory: normalizedDirectory("/content"),
        considered: [
          normalizedFile("/content/index.md"),
          normalizedFile("/content/figure.png"),
        ],
        ignored: [
          normalizedFile("/content/.gitignore"),
          normalizedFile("/content/.siteignore"),
          normalizedFile("/content/figure.py"),
          normalizedDirectory("/content/node_modules"),
        ],
      },
    ],
  },
];
