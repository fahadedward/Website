import HIA from "../assets/videos/HomeIceAdvantage.mp4";
import Bettys from "../assets/videos/Bettys.mp4";
import CT from "../assets/videos/HiddenGems.mp4";
import Jumbled from "../assets/videos/JumbledUp.mp4";
import LG from "../assets/videos/LG.mp4";
import MM from "../assets/videos/MatchMania.mp4";
import PB from "../assets/videos/PathBlitz.mp4";
import Fallsview from "../assets/videos/Pucks.mp4";
import RTN from "../assets/videos/RunTheNumbers.mp4";
import TTime from "../assets/videos/TShirtTime.mp4";
import WS from "../assets/videos/WordSlasher.mp4";
import BabyFood from "../assets/videos/BabyFood.mp4";
import BinSkirmish from "../assets/videos/BinSkirmish.mp4";
import Bugs from "../assets/videos/Bugs.mp4";
import ChaoticCombat from "../assets/videos/ChaoticCombat.mp4";
import CupCracker from "../assets/videos/CupCracker.mp4";
import CutleryChaos from "../assets/videos/CutleryChaos.mp4";
import DesertDanger from "../assets/videos/DesertDanger.mp4";
import Elements from "../assets/videos/Elements.mp4";
import JungleConflict from "../assets/videos/JungleConflict.mp4";
import LivelyLaundry from "../assets/videos/LivelyLaundry.mp4";
import NibblingGoose from "../assets/videos/NibblingGoose.mp4";
import NocturnalNinjas from "../assets/videos/NocturnalNinjas.mp4";
import NoisyNotes from "../assets/videos/NoisyNotes.mp4";
import SealCharge from "../assets/videos/SealCharge.mp4";
import ShacklingShapes from "../assets/videos/ShacklingShapes.mp4";
import SheepShearer from "../assets/videos/SheepShearer.mp4";
import ToiletTerror from "../assets/videos/ToiletTerror.mp4";
import TreasureHoarder from "../assets/videos/TreasureHoarder.mp4";
import TurtleTantrum from "../assets/videos/TurtleTantrum.mp4";
import VacuumVanquish from "../assets/videos/VacuumVanquish.mp4";

export interface ProjectData {
  id: string;
  title: string;
  client: string;
  role: string;
  techStack: string[];
  description: string;
  videoSrc: string;
  objective: string;
  systems: string[];
  challenges: string[];
  playStoreUrl?: string;
}

export const projectsData: ProjectData[] = [
  {
    id: "olg-leafs",
    title: "Home Ice Advantage",
    client: "OLG x Toronto Maple Leafs",
    role: "Gameplay Engineer",
    techStack: ["GameMaker Studio 2", "JavaScript", "Contentful CMS"],
    description: "Curling-style hockey game with direction and power controls for shooting pucks into target zones.",
    videoSrc: HIA,
    objective: "Create an engaging curling-style hockey game for Leafs fans during home games, combining skill-based mechanics with sponsor activation.",
    systems: [
      "Touch-based direction and power control system",
      "Physics simulation for puck trajectory and sliding",
      "Zone-based scoring with point multipliers",
      "Real-time leaderboard integration and session tracking"
    ],
    challenges: [
      "Implemented intuitive touch controls for precise angle and power adjustment",
      "Built physics system for realistic puck sliding and deceleration",
      "Optimized for 10,000+ concurrent users during peak game times with sub-2-second load"
    ]
  },
  {
    id: "bettys-sports",
    title: "Bettys Match-3",
    client: "Bettys x Leafs & Raptors",
    role: "Gameplay Engineer",
    techStack: ["GameMaker Studio 2", "JavaScript", "Contentful CMS"],
    description: "Scratch-off style match-3 game with reveal mechanics and pattern matching.",
    videoSrc: Bettys,
    objective: "Develop a branded scratch-off match-3 game for restaurant partner activation during sports seasons.",
    systems: [
      "Scratch-to-reveal mechanics with touch gesture detection",
      "Pattern matching system for revealed tiles",
      "Instant-win detection algorithm",
      "Prize reveal animation and feedback system"
    ],
    challenges: [
      "Implemented smooth scratch-off mask rendering at 60fps on mobile",
      "Built efficient pattern detection for multiple win conditions",
      "Optimized touch gesture sampling for responsive scratch feel"
    ]
  },
  {
    id: "fanaccess-raptors",
    title: "FanAccess Jumbled",
    client: "FanAccess x Toronto Raptors",
    role: "Gameplay Engineer",
    techStack: ["GameMaker Studio 2", "JavaScript", "Contentful CMS"],
    description: "Daily word puzzle game with CMS integration for fan engagement.",
    videoSrc: Jumbled,
    objective: "Build a daily word puzzle game integrated with Raptors fan rewards program to increase app engagement.",
    systems: [
      "CMS-driven daily puzzle content delivery system",
      "Touch-gesture word formation with drag validation",
      "Integration with FanAccess rewards API",
      "Daily challenge tracking with persistent user progress"
    ],
    challenges: [
      "Built real-time CMS integration for daily puzzle updates without redeployment",
      "Designed responsive touch input for letter selection and word formation",
      "Implemented session management to handle concurrent users during peak times"
    ]
  },
  {
    id: "canadian-tire-raptors",
    title: "Hidden Gems Hunt",
    client: "Canadian Tire x Raptors",
    role: "Gameplay Engineer",
    techStack: ["GameMaker Studio 2", "JavaScript", "Contentful CMS"],
    description: "Minesweeper-style puzzle game with grid-based reveal mechanics.",
    videoSrc: CT,
    objective: "Create a minesweeper-inspired puzzle game for Canadian Tire partner activation during Raptors games.",
    systems: [
      "Grid-based tile reveal system with cascading logic",
      "Adjacent mine counting algorithm",
      "Flag marking mechanics for strategic gameplay",
      "Progressive difficulty with varying grid sizes"
    ],
    challenges: [
      "Implemented efficient flood-fill algorithm for cascading tile reveals",
      "Optimized adjacent cell calculation for large grids at 60fps",
      "Built intuitive touch controls for reveal vs flag marking on mobile"
    ]
  },
  {
    id: "lg-tfc",
    title: "LG Match Predictor",
    client: "LG x Toronto FC",
    role: "Gameplay Engineer",
    techStack: ["GameMaker Studio 2", "JavaScript", "Contentful CMS"],
    description: "Pokemon Go-style game with throw mechanics and multiple game mode machines.",
    videoSrc: LG,
    objective: "Build a Pokemon Go-inspired interactive game with throw mechanics and varied game modes for TFC fan engagement.",
    systems: [
      "Touch-based throw and spin mechanics with trajectory physics",
      "Multiple game mode machines (memory-based, matching, etc.)",
      "Gesture recognition for swipe-to-throw interactions",
      "Mode-switching system with unique mechanics per machine"
    ],
    challenges: [
      "Implemented accurate swipe-to-throw physics with curve ball mechanics",
      "Built modular game mode system supporting diverse mechanics in single codebase",
      "Optimized touch gesture sampling for responsive throw feel at 60fps"
    ]
  },
  {
    id: "match-mania",
    title: "Match Mania",
    client: "Toronto Raptors x Maple Leafs",
    role: "Gameplay Engineer",
    techStack: ["GameMaker Studio 2", "JavaScript", "Contentful CMS"],
    description: "Match-3 puzzle game with swap mechanics and combo chains.",
    videoSrc: MM,
    objective: "Develop a quick-play match-3 game for in-game entertainment during timeouts.",
    systems: [
      "Grid-based match-3 detection with swap mechanics",
      "Cascade system for chain reactions and combos",
      "Time-pressure gameplay with countdown mechanics",
      "Score multiplier system for consecutive matches"
    ],
    challenges: [
      "Optimized match detection algorithm to run at 60fps on mobile devices",
      "Implemented smooth tile animation and cascade physics",
      "Built efficient grid state management for real-time match validation"
    ]
  },
  {
    id: "path-blitz",
    title: "Path Blitz",
    client: "Toronto Raptors x Maple Leafs",
    role: "Gameplay Engineer",
    techStack: ["GameMaker Studio 2", "JavaScript", "Contentful CMS"],
    description: "Endless vertical runner with lane-switching and obstacle avoidance.",
    videoSrc: PB,
    objective: "Create an endless vertical runner game for quick-play halftime entertainment.",
    systems: [
      "Procedural obstacle generation with increasing difficulty",
      "Lane-switching mechanics with touch/swipe controls",
      "Distance-based scoring with multipliers",
      "Progressive speed scaling system"
    ],
    challenges: [
      "Implemented efficient chunk-based level generation for endless scrolling",
      "Optimized collision detection for high-speed vertical movement at 60fps",
      "Built fair difficulty curve balancing challenge and player retention"
    ]
  },
  {
    id: "run-the-numbers",
    title: "Run The Numbers",
    client: "Toronto Raptors x Maple Leafs",
    role: "Gameplay Engineer",
    techStack: ["GameMaker Studio 2", "JavaScript", "Contentful CMS"],
    description: "Math-based puzzle game with time pressure and score multipliers.",
    videoSrc: RTN,
    objective: "Build an educational math game for family-friendly arena entertainment.",
    systems: [
      "Dynamic equation generator with variable difficulty",
      "Combo system rewarding answer streaks",
      "Time-based scoring with pressure mechanics",
      "Progressive difficulty adjustment"
    ],
    challenges: [
      "Designed equation generation algorithm ensuring solvable problems",
      "Implemented fair timer adjustment based on problem complexity",
      "Built input validation preventing accidental incorrect submissions"
    ]
  },
  {
    id: "fallsview-pucks",
    title: "Puck Launcher",
    client: "Fallsview x Leafs & Raptors",
    role: "Gameplay Engineer",
    techStack: ["GameMaker Studio 2", "JavaScript", "Contentful CMS"],
    description: "Mario Party-style memory game with moving items and recall mechanics.",
    videoSrc: Fallsview,
    objective: "Create a memory-based party game for casino partner activation with progressive difficulty.",
    systems: [
      "Sequential item display system with movement animations",
      "Memory recall validation and scoring",
      "Progressive difficulty scaling with more items and faster speeds",
      "Visual feedback system for correct/incorrect answers"
    ],
    challenges: [
      "Implemented smooth item animation sequences at varying speeds",
      "Built fair difficulty progression preventing memory overload",
      "Optimized visual clarity for quick item recognition under time pressure"
    ]
  },
  {
    id: "tshirt-time",
    title: "T-Shirt Time",
    client: "Toronto Raptors x Maple Leafs",
    role: "Gameplay Engineer",
    techStack: ["GameMaker Studio 2", "JavaScript", "Contentful CMS"],
    description: "Reaction-based catching game with escalating spawn rates.",
    videoSrc: TTime,
    objective: "Develop a simple reaction game for quick-play entertainment during game breaks.",
    systems: [
      "Object spawning system with difficulty scaling",
      "Touch-based catching mechanics",
      "Miss penalty system",
      "Score multiplier for consecutive catches"
    ],
    challenges: [
      "Implemented spawn rate balancing to maintain challenge without overwhelming players",
      "Built touch target prediction for fast-moving objects",
      "Optimized object pooling to prevent garbage collection frame drops"
    ]
  },
  {
    id: "word-slasher",
    title: "Word Slasher",
    client: "Toronto Raptors x Maple Leafs",
    role: "Gameplay Engineer",
    techStack: ["GameMaker Studio 2", "JavaScript", "Contentful CMS"],
    description: "Word-slicing mechanic with gesture recognition and combo system.",
    videoSrc: WS,
    objective: "Create a gesture-based word game for interactive halftime entertainment.",
    systems: [
      "Swipe gesture recognition and path tracking",
      "Letter collision detection along swipe path",
      "Word validation against dictionary",
      "Combo system for consecutive valid words"
    ],
    challenges: [
      "Built low-latency gesture sampling to feel responsive at 60fps",
      "Implemented efficient collision testing for swipe vs. letter intersections",
      "Optimized dictionary lookup for real-time word validation"
    ]
  },
  {
    id: "nocturnal-ninjas",
    title: "Nocturnal Ninjas",
    client: "Adknown",
    role: "Game Artist, Designer and Developer",
    techStack: ["Unity", "C#", "Android"],
    description: "Fast-paced arena survival game where players dodge and defeat waves of attacking ninjas while collecting coins to unlock new characters.",
    videoSrc: NocturnalNinjas,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.adknown.nocturnalninjas",
    objective: "Create a mobile hyper-casual arena survival game with wave-based combat for ad-based monetization.",
    systems: [
      "Wave-based enemy spawning with increasing difficulty",
      "Character unlock system with coin collection",
      "Arena-based movement and dodge mechanics",
      "Progressive enemy AI behavior"
    ],
    challenges: [
      "Optimized enemy wave management to maintain 60fps on low-end Android devices",
      "Implemented responsive dodge controls for fast-paced gameplay",
      "Balanced enemy spawn rates for sustained challenge"
    ]
  },
  {
    id: "bin-skirmish",
    title: "Bin Skirmish",
    client: "Adknown",
    role: "Game Artist, Designer and Developer",
    techStack: ["Unity", "C#", "Android"],
    description: "Competitive arcade game where players throw objects into bins while dodging hazards and managing chaotic gameplay conditions.",
    videoSrc: BinSkirmish,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.adknown.binskirmish",
    objective: "Develop a physics-based throwing game optimized for quick mobile play sessions.",
    systems: [
      "Physics-based object throwing mechanics",
      "Target bin detection and scoring",
      "Hazard avoidance system",
      "Progressive chaos and difficulty scaling"
    ],
    challenges: [
      "Implemented intuitive throw physics for mobile touch controls",
      "Optimized physics calculations for multiple simultaneous objects",
      "Balanced difficulty progression for chaotic but fair gameplay"
    ]
  },
  {
    id: "jungle-conflict",
    title: "Jungle Conflict",
    client: "Adknown",
    role: "Game Artist, Designer and Developer",
    techStack: ["Unity", "C#", "Android"],
    description: "Arcade survival game where players control a snake, collect food, and evade aggressive jungle predators in an increasingly chaotic environment.",
    videoSrc: JungleConflict,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.adknown.jungleconflict",
    objective: "Build a snake-style survival game with predator AI for mobile arcade gameplay.",
    systems: [
      "Snake movement and growth mechanics",
      "Food collection and scoring system",
      "Aggressive predator AI with pursuit behavior",
      "Progressive environmental chaos and difficulty"
    ],
    challenges: [
      "Implemented smooth snake segment following for responsive feel",
      "Built predator AI with fair but challenging pursuit patterns",
      "Optimized collision detection for growing snake body at 60fps"
    ]
  },
  {
    id: "chaotic-combat",
    title: "Chaotic Combat",
    client: "Adknown",
    role: "Game Artist, Designer and Developer",
    techStack: ["Unity", "C#", "Android"],
    description: "Arcade arena combat game where players battle waves of enemies, avoid environmental hazards, and unlock new weapons while surviving as long as possible.",
    videoSrc: ChaoticCombat,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.adknown.chaoticcombat",
    objective: "Create a fast-paced arena combat game with weapon progression for mobile.",
    systems: [
      "Wave-based enemy combat system",
      "Weapon unlock and upgrade progression",
      "Environmental hazard avoidance",
      "Survival-based scoring and leaderboards"
    ],
    challenges: [
      "Implemented responsive combat controls for mobile touch input",
      "Optimized enemy AI and hazard systems for sustained gameplay",
      "Balanced weapon progression for long-term engagement"
    ]
  },
  {
    id: "cup-cracker",
    title: "Cup Cracker",
    client: "Adknown",
    role: "Game Artist, Designer and Developer",
    techStack: ["Unity", "C#", "Android"],
    description: "Fast-paced arcade challenge where players smash cups with precise timing while avoiding traps and obstacles.",
    videoSrc: CupCracker,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.adknown.cupcracker",
    objective: "Build a precision timing game with satisfying destruction feedback.",
    systems: [
      "Timing-based smashing mechanics",
      "Trap and obstacle avoidance system",
      "Precision scoring with combo multipliers",
      "Progressive speed and difficulty scaling"
    ],
    challenges: [
      "Implemented frame-independent timing for consistent behavior",
      "Built responsive trap detection and feedback",
      "Optimized particle effects for satisfying destruction visuals"
    ]
  },
  {
    id: "cutlery-chaos",
    title: "Cutlery Chaos",
    client: "Adknown",
    role: "Game Artist, Designer and Developer",
    techStack: ["Unity", "C#", "Android"],
    description: "Fast-paced reflex game where players tap to dodge falling cutlery while dominating the kitchen.",
    videoSrc: CutleryChaos,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.adknown.cutlerychaos",
    objective: "Develop a quick-reflex dodging game with tap controls for mobile.",
    systems: [
      "Tap-based left/right movement controls",
      "Falling cutlery spawning and physics",
      "Collision detection for dodging mechanics",
      "Progressive difficulty with increased spawn rates"
    ],
    challenges: [
      "Implemented responsive tap controls for quick directional changes",
      "Optimized falling object physics for predictable dodging",
      "Balanced spawn rates for challenging but fair gameplay"
    ]
  },
  {
    id: "desert-danger",
    title: "Desert Danger",
    client: "Adknown",
    role: "Game Artist, Designer and Developer",
    techStack: ["Unity", "C#", "Android"],
    description: "Survival runner with obstacle avoidance and resource collection.",
    videoSrc: DesertDanger,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.adknown.desertdanger",
    objective: "Create an endless runner with resource management mechanics.",
    systems: [
      "Procedural obstacle generation system",
      "Resource collection and management",
      "Distance-based difficulty scaling",
      "Power-up spawning with weighted probabilities"
    ],
    challenges: [
      "Implemented efficient chunk-based level generation",
      "Optimized collision detection for fast-moving player",
      "Balanced resource scarcity for engaging gameplay loop"
    ]
  },
  {
    id: "elements",
    title: "Elements",
    client: "Adknown",
    role: "Game Artist, Designer and Developer",
    techStack: ["Unity", "C#", "Android"],
    description: "Match-based elemental puzzle with chain reaction mechanics.",
    videoSrc: Elements,
    objective: "Build a match-puzzle game with elemental interactions for strategic depth.",
    systems: [
      "Grid-based matching with elemental types",
      "Chain reaction system for combos",
      "Special tile mechanics for power moves",
      "Level objectives with move limits"
    ],
    challenges: [
      "Implemented efficient flood-fill algorithm for matches",
      "Optimized chain reaction calculations",
      "Balanced level difficulty and move requirements"
    ]
  },
  {
    id: "treasure-hoarder",
    title: "Treasure Hoarder",
    client: "Adknown",
    role: "Game Artist, Designer and Developer",
    techStack: ["Unity", "C#", "Android"],
    description: "Resource management game with strategic collection and upgrades.",
    videoSrc: TreasureHoarder,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.adknown.treasurehoarder",
    objective: "Design an idle-style collection game with upgrade progression.",
    systems: [
      "Resource generation with upgrade multipliers",
      "Strategic upgrade tree system",
      "Auto-collection mechanics",
      "Prestige system for meta-progression"
    ],
    challenges: [
      "Implemented efficient idle time calculation",
      "Balanced upgrade costs for long-term engagement",
      "Optimized UI updates for real-time value changes"
    ]
  },
  {
    id: "lively-laundry",
    title: "Lively Laundry",
    client: "Adknown",
    role: "Game Artist, Designer and Developer",
    techStack: ["Unity", "C#", "Android"],
    description: "Arcade dodge game where players use a joystick to control a sock, avoid falling laundry, and use shields while collecting coins to unlock animal ears.",
    videoSrc: LivelyLaundry,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.adknown.livelylaundry",
    objective: "Create a dodge-focused game with unlockable cosmetics for casual mobile audience.",
    systems: [
      "Joystick-based sock movement controls",
      "Falling laundry avoidance mechanics",
      "Shield power-up system",
      "Coin collection and cosmetic unlock progression"
    ],
    challenges: [
      "Optimized falling object physics for predictable dodging at 60fps",
      "Implemented responsive joystick controls for mobile",
      "Balanced difficulty with shield mechanics for engaging gameplay"
    ]
  },
  {
    id: "nibbling-goose",
    title: "Nibbling Goose",
    client: "Adknown",
    role: "Game Artist, Designer and Developer",
    techStack: ["Unity", "C#", "Android"],
    description: "Tap-based feeding mechanics with timing and accuracy scoring.",
    videoSrc: NibblingGoose,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.adknown.nibblinggoose",
    objective: "Build a simple tap-timing game with escalating challenge.",
    systems: [
      "Timing-based tap detection with accuracy windows",
      "Feeding animation and response system",
      "Speed progression with difficulty scaling",
      "Miss penalty and recovery mechanics"
    ],
    challenges: [
      "Implemented forgiving timing windows for accessibility",
      "Optimized animation blending for responsive feel",
      "Balanced difficulty increase to avoid frustration"
    ]
  },
  {
    id: "vacuum-vanquish",
    title: "Vacuum Vanquish",
    client: "Adknown",
    role: "Game Artist, Designer and Developer",
    techStack: ["Unity", "C#", "Android"],
    description: "Arcade cleaning chaos game where players control a vacuum to suck up debris, avoid hazards, and clear increasingly difficult rooms.",
    videoSrc: VacuumVanquish,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.adknown.vacuumvanquish",
    objective: "Design a chaotic cleaning game with vacuum mechanics for mobile.",
    systems: [
      "Vacuum suction mechanics with debris collection",
      "Hazard avoidance and room navigation",
      "Progressive room difficulty and chaos",
      "Clear completion and scoring system"
    ],
    challenges: [
      "Implemented responsive vacuum control for mobile touch",
      "Optimized debris physics for smooth suction mechanics",
      "Balanced room difficulty for challenging but fair progression"
    ]
  },
  {
    id: "noisy-notes",
    title: "Noisy Notes",
    client: "Adknown",
    role: "Game Artist, Designer and Developer",
    techStack: ["Unity", "C#", "Android"],
    description: "Music-themed dodge game where players use a joystick to avoid incoming notes, utilize shields, and watch for exploding notes.",
    videoSrc: NoisyNotes,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.adknown.noisynotes",
    objective: "Create a music-themed avoidance game with defensive mechanics.",
    systems: [
      "Joystick-based movement controls",
      "Incoming musical note avoidance system",
      "Shield power-up mechanics",
      "Exploding note hazard detection"
    ],
    challenges: [
      "Implemented smooth joystick controls for dodging",
      "Optimized note spawning patterns for fair difficulty",
      "Designed shield timing mechanics for strategic gameplay"
    ]
  },
  {
    id: "seal-charge",
    title: "Seal Charge",
    client: "Adknown",
    role: "Game Artist, Designer and Developer",
    techStack: ["Unity", "C#", "Android"],
    description: "Underwater survival game where players use a joystick to navigate, eat fish, and avoid sharks and manta rays.",
    videoSrc: SealCharge,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.adknown.sealcharge",
    objective: "Build an underwater survival game with predator avoidance mechanics.",
    systems: [
      "Joystick-based movement controls",
      "Fish eating and scoring system",
      "Predator AI for sharks with hunting behavior",
      "Hazard avoidance with manta rays"
    ],
    challenges: [
      "Implemented smooth joystick controls for underwater movement",
      "Built predator AI with pursuit mechanics",
      "Balanced difficulty between eating fish and avoiding threats"
    ]
  },
  {
    id: "shackling-shapes",
    title: "Shackling Shapes",
    client: "Adknown",
    role: "Game Artist, Designer and Developer",
    techStack: ["Unity", "C#", "Android"],
    description: "Escape room game where players use touch controls to avoid enemies, find keys, and escape while being constantly chased.",
    videoSrc: ShacklingShapes,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.adknown.shacklingshapes",
    objective: "Design an escape room game with chase mechanics and key collection.",
    systems: [
      "Touch-based player movement controls",
      "Enemy avoidance and chase AI",
      "Key collection and escape mechanics",
      "Room generation with exit conditions"
    ],
    challenges: [
      "Implemented smooth touch controls for responsive evasion",
      "Optimized chase AI for constant pursuit pressure",
      "Balanced key placement for challenging but fair escapes"
    ]
  },
  {
    id: "sheep-shearer",
    title: "Shear Shamble",
    client: "Adknown",
    role: "Game Artist, Designer and Developer",
    techStack: ["Unity", "C#", "Android"],
    description: "Timing-based shearing game with swipe gesture recognition.",
    videoSrc: SheepShearer,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.adknown.shearshamble&hl=en_CA",
    objective: "Create a swipe-based timing game with satisfying feedback.",
    systems: [
      "Swipe gesture detection and validation",
      "Timing-based success windows",
      "Multi-directional swipe patterns",
      "Accuracy scoring and combo system"
    ],
    challenges: [
      "Implemented swipe direction detection with tolerance",
      "Optimized gesture sampling for low latency",
      "Balanced timing windows for accessibility"
    ]
  },
  {
    id: "toilet-terror",
    title: "Toilet Terror",
    client: "Adknown",
    role: "Game Artist, Designer and Developer",
    techStack: ["Unity", "C#", "Android"],
    description: "Tower-defense style bathroom protection with upgrade systems.",
    videoSrc: ToiletTerror,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.adknown.toiletterror",
    objective: "Build a comedic tower-defense game with upgrade progression.",
    systems: [
      "Tower placement and upgrade system",
      "Enemy wave spawning with pathfinding",
      "Resource management for upgrades",
      "Multiple tower types with unique abilities"
    ],
    challenges: [
      "Implemented efficient A* pathfinding for enemy waves",
      "Optimized tower attack radius calculations",
      "Balanced tower costs and upgrade progression"
    ]
  },
  {
    id: "bugs",
    title: "Sneaky Spiders",
    client: "Adknown",
    role: "Game Artist, Designer and Developer",
    techStack: ["Unity", "C#", "Android"],
    description: "Tap-accuracy game with hit detection and miss penalty system.",
    videoSrc: Bugs,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.adknown.sneakyspiders",
    objective: "Design a reflex-based tapping game with accuracy mechanics.",
    systems: [
      "Spawn system with random positioning",
      "Hit detection with accuracy grading",
      "Miss penalty and life system",
      "Progressive spawn rate increase"
    ],
    challenges: [
      "Implemented touch-friendly hit zones for mobile",
      "Optimized spawn positioning to avoid overlap",
      "Balanced spawn rate for sustained challenge"
    ]
  },
  {
    id: "turtle-tantrum",
    title: "Turtle Tantrum",
    client: "Adknown",
    role: "Game Artist, Designer and Developer",
    techStack: ["Unity", "C#", "Android"],
    description: "Rescue game where players drag baby turtles to their mothers while dodging carnivores and avoiding explosive bombs.",
    videoSrc: TurtleTantrum,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.adknown.turtletantrum",
    objective: "Create a drag-based rescue game with hazard avoidance for mobile.",
    systems: [
      "Drag-based turtle movement controls",
      "Mother-baby turtle matching system",
      "Carnivore enemy avoidance mechanics",
      "Bomb hazard detection and detonation system"
    ],
    challenges: [
      "Implemented smooth drag controls for precise turtle placement",
      "Optimized enemy pathfinding for carnivore threats",
      "Balanced rescue timing with multiple hazards"
    ]
  },
  {
    id: "baby-food",
    title: "Baby Food Sort",
    client: "Adknown",
    role: "Game Artist, Designer and Developer",
    techStack: ["Unity", "C#", "Android"],
    description: "Speed-sorting game with visual recognition and quick decision-making.",
    videoSrc: BabyFood,
    objective: "Build a fast-paced sorting game with color/shape recognition.",
    systems: [
      "Visual recognition sorting mechanics",
      "Speed-based scoring system",
      "Category validation logic",
      "Progressive speed increase"
    ],
    challenges: [
      "Implemented clear visual feedback for correct/incorrect sorts",
      "Optimized spawn timing to feel challenging but fair",
      "Balanced recognition difficulty with speed requirements"
    ]
  },
  {
    id: "charmed-leprechaun",
    title: "Charmed Leprechaun",
    client: "Adknown",
    role: "Game Artist, Designer and Developer",
    techStack: ["Unity", "C#", "Android"],
    description: "Survival game in the magical world of leprechauns where players use joystick controls to move, attack with a wand to collect gold, avoid mini leprechauns, and gather clovers for the shop.",
    videoSrc: "",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.adknown.charmedleprechaun",
    objective: "Create a magical survival game with combat and collection mechanics for mobile.",
    systems: [
      "Joystick-based leprechaun movement controls",
      "Wand-based attack system for gold collection",
      "Enemy avoidance mechanics with mini leprechauns",
      "Clover collection and shop system"
    ],
    challenges: [
      "Implemented responsive joystick controls for smooth movement",
      "Built wand attack mechanics with gold collection feedback",
      "Optimized enemy AI for challenging but fair survival gameplay"
    ]
  }
];
