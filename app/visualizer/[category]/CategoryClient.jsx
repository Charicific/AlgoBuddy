"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiChevronRight } from "react-icons/fi";

const DS_THEME = {
  Array: { color: "#7c3aed", bg: "#faf5ff", border: "#e9d5ff" },
  Stack: { color: "#2563eb", bg: "#eff6ff", border: "#bfdbfe" },
  Queue: { color: "#059669", bg: "#f0fdf4", border: "#d1fae5" },
  "Linked List": { color: "#d97706", bg: "#fffbeb", border: "#fde68a" },
  Tree: { color: "#7c3aed", bg: "#faf5ff", border: "#e9d5ff" },
  Graph: { color: "#dc2626", bg: "#fef2f2", border: "#fecaca" },
  HashMap: { color: "#db2777", bg: "#fdf2f8", border: "#fbcfe8" },
  Recursion: { color: "#0f766e", bg: "#f0fdfa", border: "#ccfbf1" },
  "Custom Code": { color: "#6b7280", bg: "#f9fafb", border: "#e5e7eb" },
};

function getTheme(title) {
  return (
    DS_THEME[title] || { color: "#6b7280", bg: "#f9fafb", border: "#e5e7eb" }
  );
}

export default function CategoryClient({ section }) {
  const router = useRouter();
  const theme = getTheme(section.title);
  const count = section.subsections
    ? section.subsections.reduce((a, s) => a + s.items.length, 0)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Header Card */}
      <div
        className="rounded-2xl border p-8 sm:p-10 mb-10 transition-colors duration-300"
        style={{ background: theme.bg, borderColor: theme.border }}
      >
        <button
          onClick={() => router.push("/visualizer")}
          className="inline-flex items-center gap-2 text-[13px] font-bold text-surface-500 dark:text-surface-400
            hover:text-surface-900 dark:hover:text-surface-100 transition-colors duration-200 mb-5"
        >
          <FiArrowLeft className="w-4 h-4" /> Back to all topics
        </button>

        <div className="flex items-center gap-4">
          <div>
            <h1
              className="text-[2rem] sm:text-[2.8rem] font-black leading-[1.1] tracking-tighter text-surface-900 dark:text-white"
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.03em" }}
            >
              {section.title}
            </h1>
            <p className="text-[14px] text-surface-600 dark:text-surface-300 mt-1">
              {count} algorithm{count !== 1 ? "s" : ""} · {section.desc}
            </p>
          </div>
        </div>
      </div>

      {/* Algorithm Subsections */}
      <div className="space-y-8">
        {section.subsections?.map((sub, si) => (
          <motion.div
            key={si}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: si * 0.08 }}
          >
            <h4
              className="text-[13px] font-bold uppercase tracking-wider mb-4 pl-1"
              style={{ color: theme.color }}
            >
              {sub.title}
            </h4>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {sub.items.map((item, ii) => (
                <Link
                  key={ii}
                  href={item.path}
                  className="group/item flex items-center justify-between p-4 rounded-xl border
                    bg-white dark:bg-[#2d2f31] dark:border-[#4b5563] hover:shadow-md transition-all duration-200"
                  style={{ borderColor: theme.border }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-[14px] font-bold"
                      style={{ background: theme.color + "15", color: theme.color }}
                    >
                      {ii + 1}
                    </div>
                    <span className="text-[14px] font-semibold text-surface-900 dark:text-white group-hover/item:text-primary transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <FiChevronRight
                    className="w-4 h-4 group-hover/item:translate-x-1 transition-all duration-200"
                    style={{ color: theme.color + "60" }}
                  />
                </Link>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
