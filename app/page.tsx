import { Ban, Castle, Handshake, Hourglass, Shield, Sword } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "In-world rewards only",
    copy: "Power, wealth, status, and appearance are earned through combat, exploration, craft, trade, and genuine companionship—never purchased from a storefront.",
  },
  {
    icon: Hourglass,
    title: "Persistent characters and progression",
    copy: "Characters, equipment, relationships, and accomplishments persist. Persistence preserves your history—not permanent dominance: new content can reshape the meta and move yesterday’s pinnacle gear out of the spotlight.",
  },
  {
    icon: Handshake,
    title: "Solo play and intentional co-op",
    copy: "Adventure alone in a quiet, coherent world or deliberately invite companions. Cooperation is central; exposure to strangers is not compulsory.",
  },
  {
    icon: Castle,
    title: "Authored locations in a coherent world",
    copy: "Towns, wilderness, factions, enemies, and dungeons belong to one authored setting. The world is more than a menu of repeatable activities.",
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
  "No battle passes",
  "No seasonal resets",
  "No forced public hubs",
  "No paid convenience",
  "No disposable content",
  "No storefront-driven clutter",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Witherfate home">
          WITHERFATE
        </a>
        <nav aria-label="Primary navigation">
          <a href="#vision">Vision</a>
          <a href="#experience">Experience</a>
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
            A persistent world where everything that matters comes from playing within it.
          </p>
          <a className="text-link" href="#vision">Read the vision <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="manifesto" id="vision">
        <div className="section-label">Core design</div>
        <div className="manifesto-detail">
          <div className="manifesto-copy">
            <p className="lead">
              A premium action RPG designed to protect game integrity and maximize player immersion.
            </p>
            <p>
              There are no microtransactions, cosmetic storefronts, premium currencies, battle passes,
              seasonal resets, or paid shortcuts. Players purchase the game and its expansions. Once
              inside, real-world money has no authority.
            </p>
            <blockquote>
              “What you earn remains part of your history—even as new discoveries reshape what the world values.”
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
          <div className="section-label">Design principles</div>
          <h2 id="principles-title">Game integrity and player immersion.</h2>
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
          <h2>Persistent solo and cooperative dungeon adventures.</h2>
          <p>
            The core rhythm moves naturally between preparation, discovery, combat, reward,
            relationships, and a world that carries the consequences forward.
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

      <section className="world" id="world">
        <div className="world-copy">
          <div className="section-label">Content and expansion model</div>
          <h2>New dungeons expand the permanent world.</h2>
          <p>
            Major dungeons are Witherfate’s primary unit of storytelling and expansion. Each can
            introduce a place, enemy family, boss, mystery, item ecosystem, and lasting change to
            the land around it.
          </p>
          <p>
            New content creates return moments by adding something compelling—not by erasing what
            players already earned or making them regret when they arrived.
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
            <div><span>Permanent consequence</span><small>More world · more possibility</small></div>
          </div>
        </div>
      </section>

      <section className="economy-section">
        <div className="economy-statement">
          <div className="section-label">Items and economy</div>
          <h2>Free player trade in a protected economy.</h2>
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
              The economy is defended from bots, commercial spam, and real-money trade without turning
              every item into an account-bound object. Its health is supported through durable services,
              commissions, crafting costs, careful control of currency creation, and natural depreciation:
              new discoveries and stronger gear can reshape the meta, moving former pinnacle items out of the spotlight.
            </p>
          </div>
        </div>
      </section>

      <section className="anti-patterns" aria-labelledby="exclusions-title">
        <div className="anti-heading">
          <div className="section-label">Excluded systems</div>
          <h2 id="exclusions-title">No microtransactions, battle passes, or seasonal resets.</h2>
          <p>
            These are not missing features or future plans. Witherfate deliberately rejects the
            systems that turn play into a purchase funnel, a deadline, or a disposable experience.
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

      <section className="closing">
        <div className="closing-mark" aria-hidden="true">W</div>
        <p>Start when you are ready.<br />Leave when you need to.<br />Return to everything you earned.</p>
      </section>

      <footer>
        <span>WITHERFATE</span>
        <span>Design foundation · 2026</span>
        <span>Everything that matters comes from within.</span>
      </footer>
    </main>
  );
}
