// file: js/code-animations.js
// - Typed Java code in hero ".code-screen" blocks
// - Animated Java snippet under the logo title

document.addEventListener("DOMContentLoaded", () => {
  initCodeScreens();
  initLogoCode();
});

// =========================
// 1) Hero code screens
// =========================

function initCodeScreens() {
  const screens = document.querySelectorAll("[data-code-screen]");
  if (!screens.length) return;
  screens.forEach(initTypedCodeScreen);
}

function initTypedCodeScreen(el) {
  const content = el.querySelector(".code-screen-content");
  if (!content) return;

  // ensure we start with a text node + cursor
  const cursor = document.createElement("span");
  cursor.className = "code-screen-cursor";
  const textNode = document.createTextNode("");
  content.appendChild(textNode);
  content.appendChild(cursor);

  const kind = el.getAttribute("data-code-screen") || "default";
  const snippets = getSnippetsFor(kind);

  let index = 0;
  let char = 0;
  let text = snippets[index];
  let deleting = false;
  let pause = 0;

  function tick() {
    if (pause > 0) {
      pause -= 1;
    } else {
      if (!deleting) {
        char++;
        if (char >= text.length) {
          char = text.length;
          deleting = true;
          pause = 40; // small pause at end of snippet
        }
      } else {
        char--;
        if (char <= 0) {
          char = 0;
          deleting = false;
          index = (index + 1) % snippets.length;
          text = snippets[index];
        }
      }
    }

    textNode.nodeValue = text.slice(0, Math.max(0, char));
  }

  // slightly slower than pure typewriter so it’s readable
  setInterval(tick, 26);
}

function getSnippetsFor(kind) {
  const javaOreo = [
    `public final class OreoEssentials extends JavaPlugin {

  private DatabasePool pool;

  @Override
  public void onEnable() {
    this.pool = DatabasePool.mongoOrPostgres(getConfig());
    getLogger().info("OreoEssentials enabled on " +
        Bukkit.getServer().getMotd());
  }

  public CompletableFuture<PlayerProfile> loadProfile(UUID uuid) {
    return CompletableFuture.supplyAsync(() ->
        pool.withConnection(conn -> ProfileDao.findOrCreate(conn, uuid)));
  }
}`,
    `public record Home(
  String name,
  String world,
  double x, double y, double z,
  float yaw, float pitch
) {

  public Location toLocation() {
    final var w = Bukkit.getWorld(world);
    return new Location(w, x, y, z, yaw, pitch);
  }
}`,
    `@EventHandler
public void onPlayerTeleport(PlayerTeleportEvent event) {
  final var player = event.getPlayer();
  crossServerChannel.publishTeleport(
      player.getUniqueId(),
      event.getTo(),
      result -> {
        if (!result.success()) {
          player.sendMessage(Component.text(
              "Teleport failed across the network.")
            .color(NamedTextColor.RED));
        }
      }
  );
}`
  ];

  const javaAfelia = [
    `public sealed interface AfeliumNode
  permits CrystalNode, ConduitNode {

  UUID id();
  Vec3 position();
  double stability();
}`,
    `public record OperatorLoadout(
  String callsign,
  Set<AfeliumImplant> implants,
  PrimaryWeapon primary,
  SecondaryWeapon secondary
) { }`,
    `@Override
public void applyImplant(Operator operator, double deltaSeconds) {
  final var overcharge = operator.afeliumSync() * 0.35;
  operator.modifyTimeScale(1.0 + overcharge);
  operator.addRecoilControl(0.15 * overcharge);
}`
  ];

  switch (kind) {
    case "oreo":
      return javaOreo;
    case "afelia":
      return javaAfelia;
    default:
      return javaOreo.concat(javaAfelia);
  }
}

// =========================
// 2) Logo animated snippet
// =========================

function initLogoCode() {
  const el = document.getElementById("logoCode");
  if (!el) return; // oreoessentials/afelia pages don't have it

  const snippets = [
    "public record PlayerProfile(UUID id, int level) {}",
    "@EventHandler(priority = EventPriority.MONITOR)",
    "CompletableFuture.runAsync(() -> save(player));",
    "record Home(String name, Location loc) {}",
    "public interface CrossServerChannel<T> {}",
    "try (var conn = dataSource.getConnection()) {}"
  ];

  let idx = 0;
  el.textContent = snippets[idx];
  el.classList.add("visible");

  setInterval(() => {
    idx = (idx + 1) % snippets.length;
    el.classList.remove("visible");

    // tiny timeout so the CSS transition re-triggers
    setTimeout(() => {
      el.textContent = snippets[idx];
      el.classList.add("visible");
    }, 160);
  }, 2600);
}