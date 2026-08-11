import {
  Award,
  Ban,
  Castle,
  Clock3,
  CreditCard,
  Handshake,
  RefreshCcw,
  Server,
  Shield,
  ShoppingBag,
  Sword,
  Users,
} from "lucide-react";

const industryFailures = [
  {
    icon: RefreshCcw,
    title: "Progress became disposable",
    copy: "Seasonal resets and temporary progression invalidate the player’s time so the engagement cycle can begin again.",
  },
  {
    icon: ShoppingBag,
    title: "Worlds became storefronts",
    copy: "Cosmetic shops, premium currencies, and purchase prompts turn game worlds into interfaces for selling inventory.",
  },
  {
    icon: CreditCard,
    title: "Friction became a product",
    copy: "Games manufacture inconvenience, then sell power, speed, access, or relief from problems the design created.",
  },
  {
    icon: Clock3,
    title: "Play became obligation",
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
          <a href="#world">World</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <h1 className="sr-only">Witherfate — A World Worth Returning To</h1>
        <div className="hero-art">
          <img
            src="/og.png"
            alt="Witherfate — A World Worth Returning To. An ancient stone arch opens onto an ember-lit darkness."
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
            <h2 id="failure-title">The game industry put monetization ahead of gameplay and player experience.</h2>
            <p>
              It built a repeating commercial loop: reset progress, manufacture urgency, bring
              players back, and sell them more. These systems are not harmless additions around
              the game. They shape its balance, pacing, art direction, social spaces, and respect
              for the player&apos;s time.
            </p>
            <p className="industry-verdict">We are sick of it.</p>
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
