/**
 * shazo — Pharmacology Reference Data
 * ------------------------------------
 * Each key under SYSTEMS is one body system (e.g. "git", "infection").
 * Each system has a list of "topics" (drug classes). Each topic has:
 *    - id, title, subtitle
 *    - points: an ordered list of teaching points (numbered facts)
 *    - references: the numbered source list cited inline as (1), (2)...
 *
 * TO ADD A NEW SYSTEM LATER:
 *   1. Add a new key to SYSTEMS, e.g. SYSTEMS.infection = { name: "...", icon: "...", topics: [] };
 *   2. Push new topic objects into that system's `topics` array using the same shape as below.
 *
 * TO ADD A NEW DRUG CLASS TO AN EXISTING SYSTEM:
 *   Just push a new topic object into SYSTEMS.git.topics (or any other system).
 *   No other file needs to change — the UI renders everything from this object.
 */

const SYSTEMS = {
  git: {
    name: "الجهاز الهضمي",
    englishName: "Gastrointestinal (GIT) System",
    icon: "GIT",
    topics: [
      {
        id: "ppi",
        title: "Proton Pump Inhibitors (PPIs)",
        subtitle: "3.1 — مثبطات مضخة البروتون",
        points: [
          {
            text: "Drug action: Proton pump inhibitors inhibit gastric acid secretion by blocking the H⁺/K⁺-ATPase (the 'proton pump') of the gastric parietal cell.",
            refs: [1],
          },
          {
            text: "PPIs are the most potent inhibitors of gastric acid secretion. PPIs include omeprazole, lansoprazole, rabeprazole, pantoprazole, esomeprazole, and dexlansoprazole.",
            refs: [2],
          },
          {
            text: "PPIs are used for the treatment of gastric and duodenal ulcers; they are also used in combination with antibacterials for the eradication of Helicobacter pylori (a bacteria that is a common cause of ulcer). PPIs can be used for the treatment of dyspepsia and gastro-oesophageal reflux disease (GERD). They are also used for the prevention and treatment of NSAID-associated ulcers.",
            refs: [1],
          },
          {
            text: "To maximize efficacy, patients should be instructed to take their PPI in the morning, 30 to 60 minutes before breakfast or before their biggest meal of the day. Dexlansoprazole can be taken without regard to meals. Patients with nocturnal symptoms may benefit from taking their PPI before the evening meal.",
            refs: [3],
          },
          {
            text: "Twice-daily PPI use is indicated in those not responding to a standard once-daily course of therapy. If dosed twice daily, the second dose should be administered approximately 10 to 12 hours after the morning dose and before a meal or snack. (For divided dosing, give the evening dose before the evening meal instead of at bedtime.)",
            refs: [3, 4],
          },
          {
            text: "Some PPIs (e.g., omeprazole, esomeprazole and pantoprazole) are available in an IV formulation, which offers an alternative administration route for patients who cannot take an oral PPI.",
            refs: [1, 3],
          },
        ],
        references: [
          "Reference 1",
          "Reference 2",
          "Reference 3",
          "Reference 4",
        ],
      },
    ],
  },

  // Placeholder for future systems — add real content when ready.
  infection: {
    name: "الإنتان",
    englishName: "Infection",
    icon: "INF",
    topics: [],
  },
};

// Ordered list controlling the sidebar sequence.
const SYSTEM_ORDER = ["git", "infection"];
