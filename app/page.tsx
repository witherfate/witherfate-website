import { Castle, Handshake, Hourglass, Shield } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Meaning stays inside the world",
    copy: "Power, wealth, status, and appearance are earned through combat, exploration, craft, trade, and genuine companionship—never purchased from a storefront.",
  },
  {
    icon: Hourglass,
    title: "Progress remembers you",
    copy: "Characters, equipment, relationships, and accomplishments persist. New releases add possibilities without declaring that yesterday’s effort has expired.",
  },
  {
    icon: Handshake,
    title: "Company is chosen",
    copy: "Adventure alone in a quiet, coherent world or deliberately invite companions. Cooperation is central; exposure to strangers is not compulsory.",
  },
  {
    icon: Castle,
    title: "Every place has a history",
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
        <div className="section-label">The promise</div>
        <div className="manifesto-copy">
          <p className="lead">
            Witherfate is designed as an alternative to the machinery surrounding modern online games.
          </p>
          <p>
            There are no microtransactions, cosmetic storefronts, premium currencies, battle passes,
            seasonal resets, or paid shortcuts. Players purchase the game and its expansions. Once
            inside, real-world money has no authority.
          </p>
          <blockquote>
            “Everything of value has an in-world history—and everything worth earning remains meaningful when you return.”
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
      </section>

      <section className="principles-section" aria-labelledby="principles-title">
        <div className="section-intro">
          <div className="section-label">Four foundations</div>
          <h2 id="principles-title">A design philosophy with consequences.</h2>
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
          <div className="section-label">The shape of play</div>
          <h2>Connected adventures,<br />not isolated runs.</h2>
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
                <span className="journey-marker" aria-hidden="true">❧</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="world" id="world">
        <div className="world-copy">
          <div className="section-label">Dungeons at the heart</div>
          <h2>The world grows.<br />It does not reset.</h2>
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
          <div className="section-label">A free, protected economy</div>
          <h2>Trade is gameplay.</h2>
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
              every item into an account-bound object. Its permanence is managed through durable services,
              commissions, crafting costs, and careful control of currency creation—not scheduled destruction.
            </p>
          </div>
        </div>
      </section>

      <section className="anti-patterns">
        <div className="section-label">Designed without</div>
        <div className="anti-grid">
          <span>Microtransactions</span>
          <span>Paid cosmetics</span>
          <span>Battle passes</span>
          <span>Seasonal resets</span>
          <span>Forced public hubs</span>
          <span>Paid convenience</span>
          <span>Disposable content</span>
          <span>Visual storefront clutter</span>
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
