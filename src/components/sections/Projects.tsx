import HIA from "../../assets/videos/HomeIceAdvantage.mp4";
import Bettys from "../../assets/videos/Bettys.mp4";
import CT from "../../assets/videos/HiddenGems.mp4";
import Jumbled from "../../assets/videos/JumbledUp.mp4";
import LG from "../../assets/videos/LG.mp4";
import MM from "../../assets/videos/MatchMania.mp4";
import PB from "../../assets/videos/PathBlitz.mp4";
import Fallsview from "../../assets/videos/Pucks.mp4";
import RTN from "../../assets/videos/RunTheNumbers.mp4";
import TTime from "../../assets/videos/TShirtTime.mp4";
import WS from "../../assets/videos/WordSlasher.mp4";
import BabyFood from "../../assets/videos/BabyFood.mp4";
import BinSkirmish from "../../assets/videos/BinSkirmish.mp4";
import Bugs from "../../assets/videos/Bugs.mp4";
import ChaoticCombat from "../../assets/videos/ChaoticCombat.mp4";
import CupCracker from "../../assets/videos/CupCracker.mp4";
import CutleryChaos from "../../assets/videos/CutleryChaos.mp4";
import DesertDanger from "../../assets/videos/DesertDanger.mp4";
import Elements from "../../assets/videos/Elements.mp4";
import JungleConflict from "../../assets/videos/JungleConflict.mp4";
import LivelyLaundry from "../../assets/videos/LivelyLaundry.mp4";
import NibblingGoose from "../../assets/videos/NibblingGoose.mp4";
import NocturnalNinjas from "../../assets/videos/NocturnalNinjas.mp4";
import NoisyNotes from "../../assets/videos/NoisyNotes.mp4";
import SealCharge from "../../assets/videos/SealCharge.mp4";
import ShacklingShapes from "../../assets/videos/ShacklingShapes.mp4";
import SheepShearer from "../../assets/videos/SheepShearer.mp4";
import ToiletTerror from "../../assets/videos/ToiletTerror.mp4";
import TreasureHoarder from "../../assets/videos/TreasureHoarder.mp4";
import TurtleTantrum from "../../assets/videos/TurtleTantrum.mp4";
import VacuumVanquish from "../../assets/videos/VacuumVanquish.mp4";

import ProjectCard from "../ProjectCard";

const gmsSkills = ["GameMaker", "JavaScript", "Contentful"];

const unitySkills = ["Art", "Unity", "C#", "Android"];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-500 to-cyan-300  bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <ProjectCard
            projectId="olg-leafs"
            title="OLG x Leafs"
            description="Curling-style hockey game with direction and power controls for shooting pucks into target zones."
            videoSrc={HIA}
            skills={gmsSkills}
          />
          <ProjectCard
            projectId="bettys-sports"
            title="Bettys x Leafs&Raptors"
            description="Scratch-off style match-3 game with reveal mechanics and pattern matching."
            videoSrc={Bettys}
            skills={gmsSkills}
          />
          <ProjectCard
            projectId="fanaccess-raptors"
            title="FanAccess x Raptors"
            description="Daily word puzzle game with CMS integration for fan engagement."
            videoSrc={Jumbled}
            skills={gmsSkills}
          />
          <ProjectCard
            projectId="canadian-tire-raptors"
            title="Canadian Tire x Raptors"
            description="Minesweeper-style puzzle game with grid-based reveal mechanics."
            videoSrc={CT}
            skills={gmsSkills}
          />
          <ProjectCard
            projectId="lg-tfc"
            title="LG x TFC"
            description="Pokemon Go-style game with throw mechanics and multiple game mode machines."
            videoSrc={LG}
            skills={gmsSkills}
          />
          <ProjectCard
            projectId="match-mania"
            title="Raptors x Leafs"
            description="Match-3 puzzle game with swap mechanics and combo chains."
            videoSrc={MM}
            skills={gmsSkills}
          />
          <ProjectCard
            projectId="path-blitz"
            title="Raptors x Leafs"
            description="Endless vertical runner with lane-switching and obstacle avoidance."
            videoSrc={PB}
            skills={gmsSkills}
          />
          <ProjectCard
            projectId="run-the-numbers"
            title="Raptors x Leafs"
            description="Math-based puzzle game with time pressure and score multipliers."
            videoSrc={RTN}
            skills={gmsSkills}
          />
          <ProjectCard
            projectId="fallsview-pucks"
            title="Fallsview x Leafs&Raptors"
            description="Mario Party-style memory game with moving items and recall mechanics."
            videoSrc={Fallsview}
            skills={gmsSkills}
          />
          <ProjectCard
            projectId="tshirt-time"
            title="Raptors x Leafs"
            description="Reaction-based catching game with escalating spawn rates."
            videoSrc={TTime}
            skills={gmsSkills}
          />
          <ProjectCard
            projectId="word-slasher"
            title="Raptors x Leafs"
            description="Word-slicing mechanic with gesture recognition and combo system."
            videoSrc={WS}
            skills={gmsSkills}
          />
          <ProjectCard
            projectId="nocturnal-ninjas"
            title="Adknown"
            description="Arena survival game where players dodge and defeat waves of attacking ninjas."
            videoSrc={NocturnalNinjas}
            skills={unitySkills}
          />
          <ProjectCard
            projectId="bin-skirmish"
            title="Adknown"
            description="Competitive arcade game where players throw objects into bins while dodging hazards."
            videoSrc={BinSkirmish}
            skills={unitySkills}
          />
          <ProjectCard
            projectId="jungle-conflict"
            title="Adknown"
            description="Arcade survival game where players control a snake and evade jungle predators."
            videoSrc={JungleConflict}
            skills={unitySkills}
          />
          <ProjectCard
            projectId="chaotic-combat"
            title="Adknown"
            description="Arena combat game where players battle waves of enemies and unlock new weapons."
            videoSrc={ChaoticCombat}
            skills={unitySkills}
          />
          <ProjectCard
            projectId="cup-cracker"
            title="Adknown"
            description="Fast-paced arcade challenge where players smash cups with precise timing."
            videoSrc={CupCracker}
            skills={unitySkills}
          />
          <ProjectCard
            projectId="cutlery-chaos"
            title="Adknown"
            description="Fast-paced reflex game where players tap to dodge falling cutlery."
            videoSrc={CutleryChaos}
            skills={unitySkills}
          />
          <ProjectCard
            projectId="desert-danger"
            title="Adknown"
            description="Survival runner with obstacle avoidance and resource collection."
            videoSrc={DesertDanger}
            skills={unitySkills}
          />
          <ProjectCard
            projectId="elements"
            title="Adknown"
            description="Match-based elemental puzzle with chain reaction mechanics."
            videoSrc={Elements}
            skills={unitySkills}
          />
          <ProjectCard
            projectId="treasure-hoarder"
            title="Adknown"
            description="Resource management game with strategic collection and upgrades."
            videoSrc={TreasureHoarder}
            skills={unitySkills}
          />
          <ProjectCard
            projectId="lively-laundry"
            title="Adknown"
            description="Arcade dodge game where players control a sock and avoid falling laundry."
            videoSrc={LivelyLaundry}
            skills={unitySkills}
          />
          <ProjectCard
            projectId="nibbling-goose"
            title="Adknown"
            description="Tap-based feeding mechanics with timing and accuracy scoring."
            videoSrc={NibblingGoose}
            skills={unitySkills}
          />
          <ProjectCard
            projectId="vacuum-vanquish"
            title="Adknown"
            description="Arcade cleaning game where players control a vacuum to clear rooms."
            videoSrc={VacuumVanquish}
            skills={unitySkills}
          />
          <ProjectCard
            projectId="noisy-notes"
            title="Adknown"
            description="Music-themed dodge game where players avoid incoming notes with shields."
            videoSrc={NoisyNotes}
            skills={unitySkills}
          />
          <ProjectCard
            projectId="seal-charge"
            title="Adknown"
            description="Underwater survival game where players eat fish and avoid sharks."
            videoSrc={SealCharge}
            skills={unitySkills}
          />
          <ProjectCard
            projectId="shackling-shapes"
            title="Adknown"
            description="Escape room game where players avoid enemies and find keys to escape."
            videoSrc={ShacklingShapes}
            skills={unitySkills}
          />
          <ProjectCard
            projectId="sheep-shearer"
            title="Adknown"
            description="Timing-based shearing game with swipe gesture recognition."
            videoSrc={SheepShearer}
            skills={unitySkills}
          />
          <ProjectCard
            projectId="toilet-terror"
            title="Adknown"
            description="Tower-defense style bathroom protection with upgrade systems."
            videoSrc={ToiletTerror}
            skills={unitySkills}
          />
          <ProjectCard
            projectId="bugs"
            title="Adknown"
            description="Tap-accuracy game with hit detection and miss penalty system."
            videoSrc={Bugs}
            skills={unitySkills}
          />
          <ProjectCard
            projectId="turtle-tantrum"
            title="Adknown"
            description="Rescue game where players drag baby turtles to safety from carnivores."
            videoSrc={TurtleTantrum}
            skills={unitySkills}
          />
          <ProjectCard
            projectId="baby-food"
            title="Adknown"
            description="Speed-sorting game with visual recognition and quick decision-making."
            videoSrc={BabyFood}
            skills={unitySkills}
          />
          <ProjectCard
            projectId="charmed-leprechaun"
            title="Adknown"
            description="Survival game in the magical world of leprechauns with joystick controls and wand attacks."
            videoSrc=""
            skills={unitySkills}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
