import { logger } from '../utils/logger.js';

export const botConfig = {
  // =========================
  // BOT PREFIX & IDENTITY
  // =========================
  prefix: "/",
  description: "Titan Bot: Advanced Management & Competitive Integration",

  // =========================
  // BOT PRESENCE & PROFILE
  // =========================
  presence: {
    status: "online", // online, idle, dnd, invisible
    // Note: Bio must be set manually in the Discord Developer Portal
    bio: "The ultimate management tool for competitive servers. Type /help to begin.", 

    activities: [
      {
        name: ",help", 
        type: 2, // 2 = Listening (Matches your image)
        state: "Titan System Active",
        details: "Optimizing Server Management",
        
        // Assets are largely for User RPC, but kept for mapping
        assets: {
          large_text: "Titan Bot",
          large_image: "titan_logo", 
        },
      },
    ],
  },

  // =========================
  // COMMAND BEHAVIOR
  // =========================
  commands: {
    owners: process.env.OWNER_IDS?.split(",") || [],
    defaultCooldown: 3, 
    deleteCommands: false,
    testGuildId: process.env.TEST_GUILD_ID,
  },

  // =========================
  // EMBED COLORS & BRANDING
  // =========================
  embeds: {
    colors: {
      primary: "#336699", 
      success: "#57F287", 
      error: "#ED4245", 
      warning: "#FEE75C", 
      info: "#3498DB", 
      blurple: "#5865F2",
    },
    footer: { text: "Titan Bot", icon: null },
  },

  // =========================
  // FEATURE TOGGLES
  // =========================
  features: {
    economy: true,
    leveling: true,
    moderation: true,
    logging: true,
    welcome: true,
    tickets: true,
    giveaways: true,
    verification: true,
  },
};

// =========================
// VALIDATION LOGIC
// =========================
export function validateConfig(config) {
  const errors = [];
  if (!process.env.DISCORD_TOKEN && !process.env.TOKEN) {
    errors.push("Bot token is required.");
  }
  if (!process.env.CLIENT_ID) {
    errors.push("Client ID is required.");
  }
  return errors;
}

// Validation Check
const configErrors = validateConfig(botConfig);
if (configErrors.length > 0) {
  console.error("❌ Configuration errors:", configErrors.join("\n"));
  if (process.env.NODE_ENV === "production") process.exit(1);
}

export const BotConfig = botConfig; 

export function getColor(path, fallback = "#99AAB5") {
  if (typeof path === "number") return path;
  if (typeof path === "string" && path.startsWith("#")) return parseInt(path.replace("#", ""), 16);
  const result = path.split(".").reduce((obj, key) => (obj && obj[key] !== undefined ? obj[key] : fallback), botConfig.embeds.colors);
  return typeof result === "string" && result.startsWith("#") ? parseInt(result.replace("#", ""), 16) : result;
}

export default botConfig;
