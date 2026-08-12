import {
  Award,
  Ban,
  Castle,
  Clock3,
  CreditCard,
  Flame,
  Handshake,
  RefreshCcw,
  Server,
  Shield,
  ShoppingBag,
  Skull,
  Snowflake,
  Sword,
  Users,
  Zap,
} from "lucide-react";

const industryFailures = [
  {
    icon: RefreshCcw,
    title: "Seasonal models made progress disposable",
    copy: "Characters, economies, and accomplishments are wiped or invalidated so the engagement and sales cycle can begin again.",
  },
  {
    icon: ShoppingBag,
    title: "Storefronts turned worlds into sales floors",
    copy: "Paid cosmetics sever appearance from achievement while premium currencies and purchase prompts invade the world itself.",
  },
  {
    icon: CreditCard,
    title: "Paid convenience monetized bad design",
    copy: "Games manufacture inconvenience, then sell power, speed, access, or relief from problems the design created.",
  },
  {
    icon: Clock3,
    title: "Battle passes turned play into obligation",
    copy: "Battle passes, daily chores, and expiring rewards replace the desire to play with pressure not to miss out.",
  },
];

const principles = [
  {
    icon: Award,
    title: "Achievement has an in-world explanation",
    copy: "Exceptional equipment, wealth, appearance, and status represent combat, exploration, crafting, trade, or genuine companionship—not a purchase.",
  },
  {
    icon: Shield,
    title: "Real-world money has no authority",
    copy: "Players purchase the game and its expansions. Inside Witherfate there is no premium currency, paid power, paid convenience, or cosmetic storefront.",
  },
  {
    icon: Handshake,
    title: "Multiplayer is intentional, never forced",
    copy: "Adventure alone or invite companions into your world. Groups face stronger enemies and earn more experience and loot, but crowded hubs and forced social exposure are not required.",
  },
  {
    icon: Castle,
    title: "The world is not an activity menu",
    copy: "Towns, wilderness, factions, enemies, and dungeons belong to one authored setting with a history, geography, and consequences.",
  },
];

const journey = [
  ["Prepare", "Return to a town shaped by people, factions, services, and remembered events."],
  ["Gather", "Choose solitude, invite friends, or find a fitting expedition through an in-world recruitment board."],
  ["Venture", "Cross hostile wilderness and enter an authored dungeon with its own ecology, mystery, and dramatic arc."],
  ["Overcome", "Read threats, commit to actions, coordinate naturally, and master encounters through execution and understanding."],
  ["Return changed", "Carry home items, knowledge, wealth, and consequences that become part of your character’s continuing history."],
];

const damageTypes = [
  {
    icon: Sword,
    title: "Physical",
    copy: "Weapons, impacts, wounds, and bleeding.",
  },
  {
    icon: Flame,
    title: "Fire",
    copy: "Flame, burning, and intense heat.",
  },
  {
    icon: Snowflake,
    title: "Cold",
    copy: "Frost, chilling, and freezing.",
  },
  {
    icon: Zap,
    title: "Lightning",
    copy: "Electrical shocks and chaining energy.",
  },
  {
    icon: Skull,
    title: "Wither",
    copy: "Poison, disease, blight, and supernatural decay.",
  },
];

const exclusions = [
  "No microtransactions",
  "No paid cosmetics",
  "No premium currency",
  "No battle passes",
  "No seasonal resets",
  "No paid convenience",
  "No forced public hubs",
  "No fear-of-missing-out rewards",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Witherfate home">
          WITHERFATE
        </a>
        <nav aria-label="Primary navigation">
          <a href="#failure">Industry</a>
          <a href="#vision">Principles</a>
          <a href="#experience">Gameplay</a>
          <a href="#classes">Classes</a>
          <a href="#world">World</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <h1 className="sr-only">Witherfate — The End Is Near</h1>
        <div className="hero-art">
          <img
            src="/og.png"
            alt="Witherfate — The End Is Near. An ancient stone arch opens onto an ember-lit darkness."
          />
        </div>
        <div className="hero-caption">
          <div className="eyebrow">A premium, online-first action RPG</div>
          <p className="hero-copy">
            Fast, loot-driven combat. Intentional cooperation. Authored dark-fantasy dungeons.
            No microtransactions. No seasonal resets. No real-world money inside the game.
          </p>
          <a className="text-link" href="#failure">Why Witherfate <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="industry-section" id="failure" aria-labelledby="failure-title">
        <div className="industry-heading">
          <div className="section-label">The industry failed the game</div>
          <div className="industry-copy">
            <h2 id="failure-title">The game industry prioritized monetization at the cost of gameplay and player experience.</h2>
            <p>
              It built a repeating commercial loop: reset progress, manufacture urgency, bring
              players back, and sell them more. These systems are not harmless additions around
              the game. They shape its balance, pacing, art direction, social spaces, and respect
              for the player&apos;s time.
            </p>
            <p>
              None of it disappeared at once. A cosmetic shop seemed harmless. A battle pass seemed
              optional. A seasonal reset looked like fresh content. Paid convenience looked like
              choice. One compromise at a time, the industry took away earned status, coherent
              worlds, freedom from deadlines, and trust that the game would put players first.
            </p>
            <p className="industry-verdict">Look at what they took from us.</p>
          </div>
        </div>
        <div className="failure-grid">
          {industryFailures.map((failure) => {
            const Icon = failure.icon;
            return (
              <article className="failure" key={failure.title}>
                <Icon aria-hidden="true" strokeWidth={1.3} />
                <h3>{failure.title}</h3>
                <p>{failure.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="manifesto" id="vision">
        <div className="section-label">Witherfate&apos;s refusal</div>
        <div className="manifesto-detail">
          <div className="manifesto-copy">
            <p className="lead">
              A world protected from the real world.
            </p>
            <p>
              Everything of value inside Witherfate must be obtained through activity inside
              Witherfate. Equipment, wealth, appearance, status, and accomplishment require an
              in-world explanation. They can be found, crafted, traded, or gifted by a genuine
              companion—but never created by entering a credit-card number.
            </p>
            <p>
              Players purchase the game and its expansions. The commercial relationship ends at
              the entrance. Inside the world, real-world money has no authority.
            </p>
            <blockquote>
              “Everything that matters must come from playing within the world.”
            </blockquote>
          </div>
          <figure className="section-art manifesto-art">
            <img
              src="/art-reliquary.webp"
              width="1600"
              height="841"
              loading="lazy"
              decoding="async"
              alt="A weathered sword and shield rest against an ancient stone reliquary lit by embers."
            />
          </figure>
        </div>
      </section>

      <section className="principles-section" aria-labelledby="principles-title">
        <div className="section-intro">
          <div className="section-label">Core design commitments</div>
          <h2 id="principles-title">Protect achievement, immersion, cooperation, and the world itself.</h2>
        </div>
        <div className="principles-grid">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <article className="principle" key={principle.title}>
                <div className="principle-heading">
                  <div className="principle-icon" aria-hidden="true">
                    <Icon strokeWidth={1.25} />
                  </div>
                </div>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="experience-heading">
          <div className="section-label">Core gameplay loop</div>
          <h2>Fast combat and authored adventures in a connected world.</h2>
          <p>
            Witherfate combines loot-driven action combat with the richer places, stories, and
            consequences expected from a larger online RPG. It is not a lobby wrapped around a
            list of disconnected dungeon runs.
          </p>
        </div>
        <div className="experience-detail">
          <figure className="section-art">
            <img
              src="/art-expedition.webp"
              width="1600"
              height="841"
              loading="lazy"
              decoding="async"
              alt="Three cloaked adventurers follow a stone road toward a distant ruined fortress."
            />
          </figure>
          <ol className="journey-list">
            {journey.map(([title, copy]) => (
              <li key={title}>
                <span className="journey-marker" aria-hidden="true">
                  <Sword strokeWidth={1.3} />
                </span>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="damage-section" id="damage" aria-labelledby="damage-title">
        <div className="damage-heading">
          <div className="section-label">Combat and itemization</div>
          <h2 id="damage-title">Five clearly defined damage types.</h2>
          <p>
            Every attack belongs to a category players can understand at a glance, and every
            category has a corresponding resistance. The system stays readable as skills,
            enemies, and equipment become more complex.
          </p>
        </div>
        <div className="damage-grid">
          {damageTypes.map((damageType) => {
            const Icon = damageType.icon;
            return (
              <article className={`damage-card damage-${damageType.title.toLowerCase()}`} key={damageType.title}>
                <div className="damage-icon" aria-hidden="true">
                  <Icon strokeWidth={1.25} />
                </div>
                <h3>{damageType.title}</h3>
                <p>{damageType.copy}</p>
              </article>
            );
          })}
        </div>
        <p className="damage-principle">
          Depth comes from how these damage types interact with skills, conditions, enemies, and
          equipment—not from adding another resistance for every new mechanic.
        </p>
      </section>

      <section className="online-play-section" aria-labelledby="online-play-title">
        <div className="online-play-heading">
          <div className="section-label">A multiplayer game at heart</div>
          <h2 id="online-play-title">Designed for groups and secured by authoritative online servers.</h2>
        </div>
        <div className="online-play-grid">
          <article className="online-play-card">
            <Users aria-hidden="true" strokeWidth={1.3} />
            <h3>Groups earn more and face stronger enemies</h3>
            <p>
              Cooperative play is the primary experience. Adding companions increases enemy
              difficulty while providing greater experience and loot rewards. The benefits are
              real, but solo players are never forced into public crowds or anonymous groups.
            </p>
          </article>
          <article className="online-play-card">
            <Server aria-hidden="true" strokeWidth={1.3} />
            <h3>Characters and progression are stored online</h3>
            <p>
              Witherfate is server-authoritative: the server, not a local save file, is the source
              of truth for characters, items, and progression. This makes cheating and item
              manipulation substantially harder while keeping long-term progress protected.
            </p>
          </article>
        </div>
      </section>

      <section className="classes-section" id="classes" aria-labelledby="defiler-title">
        <figure className="class-art">
          <img
            src="/art-defiler.webp"
            width="1024"
            height="1538"
            loading="lazy"
            decoding="async"
            alt="The Defiler, a scarred and exhausted ritual combatant carrying a hooked blade and a corruption-filled iron censer."
          />
        </figure>
        <div className="class-copy">
          <div className="section-label">Classes · First revealed</div>
          <h2 id="defiler-title">The Defiler</h2>
          <p className="class-lead">
            A tormented ritual combatant who weaponizes corruption without escaping its cost.
          </p>
          <p>
            The Defiler&apos;s current direction is a close-to-mid-range party enabler who weakens
            enemies, contaminates the battlefield, and turns the remains of defeated creatures
            into momentum for the group.
          </p>
          <p>
            His abilities are effective because they are terrible. Every desecrated relic and
            profane ritual leaves something behind in him. He continues not because he enjoys the
            power, but because other people still depend on what it can do.
          </p>
          <div className="class-traits" aria-label="Defiler combat identity">
            <span>Physical / Wither damage</span>
            <span>Enemy disruption</span>
            <span>Battlefield corruption</span>
            <span>Party amplification</span>
            <span>Attrition</span>
          </div>
          <div className="class-notes">
            <div>
              <h3>Group role</h3>
              <p>
                Degrade dangerous enemies, control hostile ground, and create openings that make
                the entire party more effective.
              </p>
            </div>
            <div>
              <h3>Character fantasy</h3>
              <p>
                Use powers that visibly damage their wielder. The Defiler survives the corruption;
                he is never untouched by it.
              </p>
            </div>
          </div>
        </div>
        <div className="class-skills" aria-labelledby="defiler-skills-title">
          <div className="class-skills-heading">
            <div className="section-label">Revealed skills</div>
            <h3 id="defiler-skills-title">Defiler skills</h3>
          </div>
          <div className="skill-list">
            <article className="skill-card">
              <span>Wither · Area</span>
              <h4>Blight</h4>
              <p>
                Contaminate an area with concentrated decay, dealing Wither damage over time and
                making the ground increasingly dangerous to enemies that remain within it.
              </p>
            </article>
          </div>
        </div>
        <figure className="class-study">
          <img
            src="/art-defiler-black-anatomy.webp"
            width="1536"
            height="1022"
            loading="lazy"
            decoding="async"
            alt="The Defiler studies a shrouded corrupted creature in an improvised plague-house laboratory beneath a ruined chapel."
          />
          <figcaption>
            <span>Black Anatomy</span>
            <p>
              Defilers study how supernatural corruption changes living matter. The work is
              forbidden, methodical, and personally dangerous—but understanding the corruption is
              the first step toward containing it or forcing it to serve the group.
            </p>
          </figcaption>
        </figure>
      </section>

      <section className="classes-section sorcerer-section" aria-labelledby="sorceress-title">
        <div className="class-copy sorcerer-copy">
          <div className="section-label">Classes · Second revealed</div>
          <h2 id="sorceress-title">The Sorceress</h2>
          <p className="class-lead">
            A master of elemental power whose discipline is measured by what she can contain.
          </p>
          <p>
            The Sorceress is Witherfate&apos;s dedicated ranged caster. Fire destroys and denies
            ground, Cold slows and controls advancing enemies, and Lightning strikes quickly and
            carries through clustered targets.
          </p>
          <p>
            Sorceresses inherit the knowledge of an order that helped ruin the civilization it was
            sworn to protect. Their magic remains necessary, but never harmless. Every spell asks
            a mortal body to command forces it was not built to survive.
          </p>
          <div className="class-traits sorcerer-traits" aria-label="Sorceress combat identity">
            <span>Fire / Cold / Lightning damage</span>
            <span>Ranged spellcasting</span>
            <span>Area damage</span>
            <span>Battlefield control</span>
            <span>Fragile defenses</span>
          </div>
          <div className="class-notes">
            <div>
              <h3>Group role</h3>
              <p>
                Destroy concentrated threats from range and use elemental control to shape where
                enemies can safely move.
              </p>
            </div>
            <div>
              <h3>Character fantasy</h3>
              <p>
                Wield familiar elemental magic with the precision of a lifelong scholar—and bear
                the physical consequences when that control fails.
              </p>
            </div>
          </div>
        </div>
        <figure className="class-art sorcerer-art">
          <img
            src="/art-sorceress.webp"
            width="1023"
            height="1537"
            loading="lazy"
            decoding="async"
            alt="A young brunette Sorceress conjures blue-white lightning in a candlelit library, its charge reflected in her eyes."
          />
        </figure>
        <div className="class-skills sorcerer-skills" aria-labelledby="sorcerer-skills-title">
          <div className="class-skills-heading">
            <div className="section-label">Revealed skills</div>
            <h3 id="sorcerer-skills-title">Sorceress skills</h3>
          </div>
          <div className="skill-list">
            <article className="skill-card">
              <span>Mobility</span>
              <h4>Teleport</h4>
              <p>
                Collapse the space at the Sorceress&apos;s position and reappear instantly at a chosen
                destination. Teleport crosses enemies and hazards, but disciplined use is essential
                when the arrival point may be more dangerous than the place left behind.
              </p>
            </article>
            <article className="skill-card">
              <span>Cold · Area · Control</span>
              <h4>Frost Nova</h4>
              <p>
                Release a ring of violent cold around the Sorceress, damaging nearby enemies and
                freezing the ground to arrest an advance.
              </p>
            </article>
          </div>
        </div>
        <figure className="class-study sorcerer-study teleport-study">
          <img
            src="/art-sorceress-teleport.webp"
            width="1536"
            height="1024"
            loading="lazy"
            decoding="async"
            alt="The Sorceress materializes beyond a broken cathedral bridge as a subtle oval distortion closes around her and a void marks the origin she abandoned."
          />
          <figcaption>
            <span>Teleport</span>
            <p>
              The origin collapses to a temporary void while displaced space ripples outward at
              the destination. Nothing travels between the two points; the distance separating them
              is briefly made irrelevant.
            </p>
          </figcaption>
        </figure>
        <figure className="class-study sorcerer-study">
          <img
            src="/art-sorceress-frost-nova.webp"
            width="1537"
            height="1023"
            loading="lazy"
            decoding="async"
            alt="The Sorceress channels Frost Nova through her staff, erupting the cathedral floor into an expanding ring of ice around advancing revenants."
          />
          <figcaption>
            <span>Frost Nova</span>
            <p>
              Cold is control made physical. Frost Nova turns the ground around the Sorceress into
              a weapon—freezing water, arresting an advance, and creating the moment her companions
              need to reposition or finish what the spell has trapped.
            </p>
          </figcaption>
        </figure>
      </section>

      <section className="classes-section rogue-section" aria-labelledby="rogue-title">
        <figure className="class-art rogue-art">
          <img
            src="/art-rogue.webp"
            width="1023"
            height="1537"
            loading="lazy"
            decoding="async"
            alt="The Rogue stands ready in her hidden den, cloaked and armed with a poisoned dagger, bow, traps, and a compact alchemical poison kit."
          />
        </figure>
        <div className="class-copy">
          <div className="section-label">Classes · Third revealed</div>
          <h2 id="rogue-title">The Rogue</h2>
          <p className="class-lead">
            A thief, hunter, and practiced killer who decides when—and how—a fight begins.
          </p>
          <p>
            The Rogue combines daggers, bows, poison, bleeding, traps, and stealth. She studies a
            battlefield before committing, prepares the ground in her favor, and attacks from the
            position her enemy failed to notice.
          </p>
          <p>
            Her methods are practical rather than honorable. Every hidden wire, stolen key, coated
            blade, and carefully chosen escape route exists to make a fair fight unnecessary.
          </p>
          <div className="class-traits rogue-traits" aria-label="Rogue combat identity">
            <span>Physical / Wither damage</span>
            <span>Daggers / Bows</span>
            <span>Poison / Bleeding</span>
            <span>Traps</span>
            <span>Stealth</span>
          </div>
          <div className="class-notes">
            <div>
              <h3>Group role</h3>
              <p>
                Open encounters on favorable terms, disable priority targets, and punish enemies
                forced through prepared ground.
              </p>
            </div>
            <div>
              <h3>Character fantasy</h3>
              <p>
                Survive through preparation, precision, and nerve. The Rogue does not overpower
                danger—she makes certain it never receives a fair chance.
              </p>
            </div>
          </div>
        </div>
        <div className="class-skills rogue-skills" aria-labelledby="rogue-skills-title">
          <div className="class-skills-heading">
            <div className="section-label">Revealed skills</div>
            <h3 id="rogue-skills-title">Rogue skills</h3>
          </div>
          <div className="skill-list">
            <article className="skill-card">
              <span>Physical / Wither · Bow</span>
              <h4>Poison Arrow</h4>
              <p>
                Fire an arrow coated in concentrated poison. The impact deals Physical damage,
                applies lingering Wither damage, and leaves a small toxic cloud around the target.
              </p>
            </article>
          </div>
        </div>
        <figure className="class-study rogue-study">
          <img
            src="/art-rogue-poison-arrow.webp"
            width="1536"
            height="1024"
            loading="lazy"
            decoding="async"
            alt="The Rogue releases a poisoned arrow from concealment in a rain-soaked forest as a hidden trap waits on the path below."
          />
          <figcaption>
            <span>Poison Arrow</span>
            <p>
              A physical arrow carries a concentrated alchemical poison into its target, dealing
              immediate damage before the venom takes hold. The Rogue attacks from concealment,
              then lets preparation, terrain, and Wither damage finish the encounter on her terms.
            </p>
          </figcaption>
        </figure>
      </section>

      <section className="classes-section berserker-section" aria-labelledby="berserker-title">
        <div className="class-copy berserker-copy">
          <div className="section-label">Classes · Fourth revealed</div>
          <h2 id="berserker-title">The Berserker</h2>
          <p className="class-lead">
            A bloodlusted frontline killer who turns pain, momentum, and physical force into
            relentless aggression.
          </p>
          <p>
            The Berserker is Witherfate&apos;s dedicated aggressive melee class. Heavy armor keeps him
            in the fight while swords, axes, and two-handed weapons deliver committed Physical
            attacks built around impact, Bleeding, stagger, and execution.
          </p>
          <p>
            Fury rewards remaining in combat and continuing the attack when retreat would be
            rational. As it rises, the Berserker becomes faster and more dangerous—but increasingly
            dependent on violence to survive what his own recklessness has begun.
          </p>
          <div className="class-traits berserker-traits" aria-label="Berserker combat identity">
            <span>Physical damage</span>
            <span>Axes / Swords</span>
            <span>Bleeding</span>
            <span>Stagger / Armor break</span>
            <span>Fury</span>
          </div>
          <div className="class-notes">
            <div>
              <h3>Group role</h3>
              <p>
                Break the enemy line, stagger armored threats, and convert sustained aggression
                into pressure that gives more vulnerable companions room to act.
              </p>
            </div>
            <div>
              <h3>Character fantasy</h3>
              <p>
                Become more dangerous as a fight deteriorates. The Berserker does not stop feeling
                pain—he loses the part of himself that cares what it means.
              </p>
            </div>
          </div>
        </div>
        <figure className="class-art berserker-art">
          <img
            src="/art-berserker.webp"
            width="1023"
            height="1537"
            loading="lazy"
            decoding="async"
            alt="The Berserker, a towering plate-armored veteran with a warrior ponytail, blood-red eyes, and two battle-worn axes."
          />
        </figure>
        <div className="class-skills berserker-skills" aria-labelledby="berserker-skills-title">
          <div className="class-skills-heading">
            <div className="section-label">Revealed skills</div>
            <h3 id="berserker-skills-title">Berserker skills</h3>
          </div>
          <div className="skill-list">
            <article className="skill-card">
              <span>Physical · Melee · Stagger</span>
              <h4>Shield Breaker</h4>
              <p>
                Commit overwhelming force against an enemy&apos;s guard, dealing heavy stagger and
                breaking defensive posture. A shattered guard exposes the target to the
                Berserker&apos;s next attack and to every companion ready to exploit the opening.
              </p>
            </article>
            <article className="skill-card">
              <span>Physical · Melee · Bleeding</span>
              <h4>Cleave</h4>
              <p>
                Drive a broad committed strike through the space ahead, dealing heavy Physical
                damage to nearby enemies and applying Bleeding. Positioning and weapon reach
                determine how much of the advancing group the attack can punish.
              </p>
            </article>
          </div>
        </div>
        <figure className="class-study berserker-study shield-breaker-study">
          <img
            src="/art-berserker-shield-breaker.webp"
            width="1536"
            height="1024"
            loading="lazy"
            decoding="async"
            alt="The Berserker tears open an armored formation in a rain-lashed gatehouse, wrenching aside a shield as another strike breaks through the exposed line."
          />
          <figcaption>
            <span>Shield Breaker</span>
            <p>
              Defense is only structure waiting to fail. Shield Breaker overwhelms a guarded
              enemy, destroys its stability, and creates an opening the entire group can punish.
            </p>
          </figcaption>
        </figure>
        <figure className="class-study berserker-study">
          <img
            src="/art-berserker-cleave.webp"
            width="1536"
            height="1024"
            loading="lazy"
            decoding="async"
            alt="The Berserker completes a two-handed Cleave while plague ghouls close around him in a burning, rain-soaked village square."
          />
          <figcaption>
            <span>Cleave</span>
            <p>
              Cleave turns planted footwork and full-body commitment into a single punishing sweep.
              Against a loose swarm, the blade controls the space ahead while Fury rewards the
              Berserker for remaining surrounded.
            </p>
          </figcaption>
        </figure>
      </section>

      <section className="world" id="world">
        <div className="world-copy">
          <div className="section-label">Persistent progression without seasons</div>
          <h2>The world expands. Characters and economies do not reset.</h2>
          <p>
            Major dungeons are the primary unit of storytelling and expansion. Each can introduce
            a place, enemy family, boss, mystery, item ecosystem, and permanent change to the land
            around it.
          </p>
          <p>
            New releases create reasons to return by adding more game—not by erasing characters,
            wiping the economy, or attaching an expiration date to progression. Gear remains owned,
            but its value is not frozen: new discoveries can reshape the meta and move former
            pinnacle items out of the top position.
          </p>
        </div>
        <div className="world-detail">
          <figure className="section-art">
            <img
              src="/art-dungeon.webp"
              width="1600"
              height="841"
              loading="lazy"
              decoding="async"
              alt="A vast ruined underground cathedral descends through ember-lit arches into darkness."
            />
          </figure>
          <div className="world-diagram" aria-label="Permanent expansion model">
            <div><span>Base world</span><small>Characters · towns · wilderness</small></div>
            <i aria-hidden="true" />
            <div><span>New dungeon</span><small>Story · enemies · rewards</small></div>
            <i aria-hidden="true" />
            <div><span>Persistent world</span><small>No character or economy reset</small></div>
          </div>
        </div>
      </section>

      <section className="economy-section">
        <div className="economy-statement">
          <div className="section-label">Items and economy</div>
          <h2>Trading is legitimate gameplay, not a problem to eliminate.</h2>
        </div>
        <div className="economy-detail">
          <figure className="section-art">
            <img
              src="/art-economy.webp"
              width="1600"
              height="841"
              loading="lazy"
              decoding="async"
              alt="An austere merchant guild appraisal table holds scales, ledgers, ingots, coins, and a weathered gauntlet."
            />
          </figure>
          <div className="economy-copy">
            <p>
              Rare equipment can be bought, sold, crafted, gifted, and valued by players. Traders and
              crafters can build genuine expertise and wealth entirely through in-game activity.
            </p>
            <p>
              Restrictions exist to keep outside money out—not to bind every valuable item to an
              account. Bots, gold sellers, commercial spam, and real-money transfers are fought
              aggressively. Listing fees, commissions, crafting costs, services, currency controls,
              and natural item depreciation keep the permanent economy healthy without wiping it.
            </p>
          </div>
        </div>
      </section>

      <section className="commitments-section" aria-labelledby="commitments-title">
        <div className="commitments-heading">
          <div className="section-label">The model serves the game</div>
          <h2 id="commitments-title">The business, art, and interface must protect immersion.</h2>
        </div>
        <div className="commitment-grid">
          <article className="commitment">
            <h3>Expansion-funded development</h3>
            <p>
              Revenue comes from the base game, substantial expansions, and possibly smaller dungeon
              or story packs. Paid content provides more world to experience—never rewards that bypass it.
            </p>
          </article>
          <article className="commitment">
            <h3>Systems that belong in the setting</h3>
            <p>
              Recruitment boards replace forced hubs. Merchant guilds and appraisers support trade.
              Expeditions replace anonymous queues. The interface serves the fiction instead of exposing product machinery.
            </p>
          </article>
          <article className="commitment">
            <h3>Disciplined dark-fantasy art direction</h3>
            <p>
              No novelty costumes, neon effects, oversized ornament, or paid spectacle. Equipment
              looks as though it belongs to the world, and powerful-looking items are earned from it.
            </p>
          </article>
        </div>
      </section>

      <section className="anti-patterns" aria-labelledby="exclusions-title">
        <div className="anti-heading">
          <div className="section-label">Rejected by design</div>
          <h2 id="exclusions-title">These systems will not be part of Witherfate.</h2>
          <p>
            They are not missing features, launch compromises, or ideas waiting for a future roadmap.
            They are the machinery Witherfate exists to oppose.
          </p>
        </div>
        <div className="anti-grid">
          {exclusions.map((item) => (
            <div className="anti-item" key={item}>
              <Ban aria-hidden="true" strokeWidth={1.4} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="audience-section">
        <div className="section-label">Who Witherfate is for</div>
        <div className="audience-copy">
          <h2>For players who still believe online games can put the game first.</h2>
          <p>
            Witherfate is for people who love action RPGs but are alienated by microtransactions,
            cosmetic clutter, real-money trade, commercial spam, forced shared worlds, disposable
            seasons, and restrictions that destroy meaningful exchange between players.
          </p>
          <p>
            The industry treats these compromises as inevitable. Witherfate does not.
          </p>
        </div>
      </section>

      <section className="closing">
        <div className="closing-mark" aria-hidden="true">W</div>
        <p>Inside Witherfate,<br />you are an adventurer—<br />not a customer.</p>
      </section>

      <footer>
        <span>WITHERFATE</span>
        <span>Design foundation · 2026</span>
        <span>Everything that matters comes from within.</span>
      </footer>
    </main>
  );
}
