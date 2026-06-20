import { useMemo, useState } from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";

import { PROBLEMS } from "../data/problems";
import { ChevronRightIcon, Code2Icon, FilterIcon, SearchIcon, XIcon } from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";

function ProblemsPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  const problems = useMemo(() => Object.values(PROBLEMS), []);

  const topics = useMemo(() => {
    const topicSet = new Set();

    problems.forEach((problem) => {
      problem.category.split("•").forEach((topic) => {
        const trimmedTopic = topic.trim();
        if (trimmedTopic) {
          topicSet.add(trimmedTopic);
        }
      });
    });

    return ["All", ...Array.from(topicSet).sort()];
  }, [problems]);

  const filteredProblems = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    return problems.filter((problem) => {
      const topicMatch =
        selectedTopic === "All" || problem.category.split("•").some((topic) => topic.trim() === selectedTopic);
      const difficultyMatch = selectedDifficulty === "All" || problem.difficulty === selectedDifficulty;
      const searchMatch =
        !normalizedSearchTerm ||
        problem.title.toLowerCase().includes(normalizedSearchTerm) ||
        problem.category.toLowerCase().includes(normalizedSearchTerm) ||
        problem.description.text.toLowerCase().includes(normalizedSearchTerm);

      return topicMatch && difficultyMatch && searchMatch;
    });
  }, [problems, searchTerm, selectedTopic, selectedDifficulty]);

  const easyProblemsCount = problems.filter((p) => p.difficulty === "Easy").length;
  const mediumProblemsCount = problems.filter((p) => p.difficulty === "Medium").length;
  const hardProblemsCount = problems.filter((p) => p.difficulty === "Hard").length;

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedTopic("All");
    setSelectedDifficulty("All");
  };

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Practice Problems</h1>
          <p className="text-base-content/70">
            Sharpen your coding skills with these curated problems
          </p>
        </div>

        <div className="mb-4">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <SearchIcon className="size-4 text-base-content/50" />
            <input
              type="text"
              className="grow"
              placeholder="Search questions by title, topic, or category"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </label>
        </div>

        <div className="mb-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setIsFilterOpen((open) => !open)}
          >
            <FilterIcon className="size-4" />
            {isFilterOpen ? "Hide Filters" : "Filter Problems"}
          </button>

          <div className="text-sm text-base-content/60">
            Showing {filteredProblems.length} of {problems.length} problems
          </div>
        </div>

        {isFilterOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
            <button
              type="button"
              aria-label="Close filters backdrop"
              className="absolute inset-0 bg-black/45 backdrop-blur-sm"
              onClick={() => setIsFilterOpen(false)}
            />

            <div className="relative z-10 w-full max-w-6xl max-h-[85vh] overflow-y-auto rounded-3xl border border-base-300 bg-base-100 shadow-2xl">
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-bold">Filter problems</h2>
                    <p className="text-sm text-base-content/60">
                      Search by topic, title, or category, then narrow by topic and difficulty.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button type="button" className="btn btn-ghost btn-sm" onClick={clearFilters}>
                      <XIcon className="size-4" />
                      Clear filters
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline btn-sm"
                      onClick={() => setIsFilterOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3 className="font-semibold">Topics</h3>
                    <span className="text-xs text-base-content/50">Click a topic to filter it</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((topic) => (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => setSelectedTopic(topic)}
                        className={`btn btn-sm ${selectedTopic === topic ? "btn-primary" : "btn-outline"}`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3 className="font-semibold">Difficulty</h3>
                    <span className="text-xs text-base-content/50">All levels are included by default</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["All", "Easy", "Medium", "Hard"].map((difficulty) => (
                      <button
                        key={difficulty}
                        type="button"
                        onClick={() => setSelectedDifficulty(difficulty)}
                        className={`btn btn-sm ${selectedDifficulty === difficulty ? "btn-secondary" : "btn-outline"
                          }`}
                      >
                        {difficulty}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PROBLEMS LIST */}
        <div className="space-y-4">
          {filteredProblems.map((problem) => (
            <Link
              key={problem.id}
              to={`/problem/${problem.id}`}
              className="card bg-base-100 hover:scale-[1.01] transition-transform"
            >
              <div className="card-body">
                <div className="flex items-center justify-between gap-4">
                  {/* LEFT SIDE */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Code2Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h2 className="text-xl font-bold">{problem.title}</h2>
                          <span className={`badge ${getDifficultyBadgeClass(problem.difficulty)}`}>
                            {problem.difficulty}
                          </span>
                        </div>
                        <p className="text-sm text-base-content/60"> {problem.category}</p>
                      </div>
                    </div>
                    <p className="text-base-content/80 mb-3">{problem.description.text}</p>
                  </div>
                  {/* RIGHT SIDE */}

                  <div className="flex items-center gap-2 text-primary">
                    <span className="font-medium">Solve</span>
                    <ChevronRightIcon className="size-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProblems.length === 0 && (
          <div className="mt-6 card bg-base-100 shadow-sm border border-base-300">
            <div className="card-body text-center py-10">
              <h3 className="text-lg font-semibold">No problems match your filters</h3>
              <p className="text-base-content/60 mb-4">
                Try a different topic, difficulty, or search term.
              </p>
              <div>
                <button type="button" className="btn btn-primary" onClick={clearFilters}>
                  Reset filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STATS FOOTER */}
        <div className="mt-12 card bg-base-100 shadow-lg">
          <div className="card-body">
            <div className="stats stats-vertical lg:stats-horizontal">
              <div className="stat">
                <div className="stat-title">Total Problems</div>
                <div className="stat-value text-primary">{problems.length}</div>
              </div>

              <div className="stat">
                <div className="stat-title">Easy</div>
                <div className="stat-value text-success">{easyProblemsCount}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Medium</div>
                <div className="stat-value text-warning">{mediumProblemsCount}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Hard</div>
                <div className="stat-value text-error">{hardProblemsCount}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProblemsPage;