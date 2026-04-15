import { logger } from '../utils/logger.js';

export const botConfig = {
  // =========================
  // BOT PREFIX & IDENTITY
  // =========================
  prefix: "/",
  description: "Titan Bot: Advanced Management & Competitive Integration",

  // =========================
  // BOT PRESENCE (Mapped to C++ UpdatePresence)
  // =========================
  presence: {
    status: "online",
    // Matches: discordPresence.details = "Listening"
    details: "Listening", 
    // Matches: discordPresence.state = "Spotify"
    state: "Spotify", 

    activities: [
      {
        name: "Spotify", 
        type: 3, // Listening
        state: "Spotify",
        details: "Listening",
        
        // Matches C++ Unix timestamps (10-digit)
        timestamps: {
          start: 1507665886,
          end: 1507665886,
        },

        assets: {
          // Matches: discordPresence.largeImageText
          large_text: "https://media.discordapp.net/attachments/1468666509273600134/1473813254001397912/file_000000001f807209a388e05d3cda4395.png?ex=69e0be4d&is=69df6ccd&hm=0ddb49ba2f379fd99613ea02f5e66414a57151bfd91d639a67c98ba8547f8e53&=&format=webp&quality=lossless&width=1029&height=686",
          // Matches: discordPresence.smallImageText
          small_text: "Rogue - Level 100",
          // Matches: discordPresence.largeImageKey
          large_image: "https://media.discordapp.net/attachments/1468666509273600134/1473813254001397912/file_000000001f807209a388e05d3cda4395.png?ex=69e0be4d&is=69df6ccd&hm=0ddb49ba2f379fd99613ea02f5e66414a57151bfd91d639a67c98ba8547f8e53&=&format=webp&quality=lossless&width=1029&height=686", 
          // From your C++ logic, small_image wasn't explicitly set, but added for consistency
          small_image: "rogue",   
        },

        party: {
          // Matches: discordPresence.partyId
          id: "ae488379-351d-4a4f-ad32-2b9b01c91657",
          // Matches: discordPresence.partySize (1) and partyMax (5)
          size: [1, 5], 
        },

        secrets: {
          // Matches: discordPresence.joinSecret
          join: "MTI4NzM0OjFpMmhuZToxMjMxMjM="
        }
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
  // APPLICATIONS SYSTEM
  // =========================
  applications: {
    defaultQuestions: [
      { question: "What is your name?", required: true },
      { question: "How old are you?", required: true },
      { question: "Why do you want to join?", required: true },
    ],
    statusColors: {
      pending: "#FFA500",
      approved: "#00FF00",
      denied: "#FF0000",
    },
    applicationCooldown: 24, 
    deleteDeniedAfter: 7, 
    deleteApprovedAfter: 30, 
    managerRoles: [],
  },

  // =========================
  // EMBED COLORS & BRANDING
  // =========================
  embeds: {
    colors: {
      primary: "#336699", 
      secondary: "#2F3136", 
      success: "#57F287", 
      error: "#ED4245", 
      warning: "#FEE75C", 
      info: "#3498DB", 
      light: "#FFFFFF",
      dark: "#202225",
      gray: "#99AAB5",
      blurple: "#5865F2",
      green: "#57F287",
      yellow: "#FEE75C",
      fuchsia: "#EB459E",
      red: "#ED4245",
      black: "#000000",
      giveaway: { active: "#57F287", ended: "#ED4245" },
      ticket: { open: "#57F287", claimed: "#FAA61A", closed: "#ED4245", pending: "#99AAB5" },
      economy: "#F1C40F",
      birthday: "#E91E63",
      moderation: "#9B59B6",
      priority: { none: "#95A5A6", low: "#3498db", medium: "#2ecc71", high: "#f1c40f", urgent: "#e74c3c" },
    },
    footer: { text: "Titan Bot", icon: null },
    thumbnail: null,
    author: { name: null, icon: null, url: null },
  },

  // =========================
  // ECONOMY SETTINGS
  // =========================
  economy: {
    currency: { name: "coins", namePlural: "coins", symbol: "$" },
    startingBalance: 0,
    baseBankCapacity: 100000,
    dailyAmount: 100,
    workMin: 10,
    workMax: 100,
    begMin: 5,
    begMax: 50,
    robSuccessRate: 0.4,
    robFailJailTime: 3600000, 
  },

  // =========================
  // TICKET SYSTEM
  // =========================
  tickets: {
    defaultCategory: null,
    supportRoles: [],
    priorities: {
      none: { emoji: "⚪", color: "#95A5A6", label: "None" },
      low: { emoji: "🟢", color: "#2ECC71", label: "Low" },
      medium: { emoji: "🟡", color: "#F1C40F", label: "Medium" },
      high: { emoji: "🔴", color: "#E74C3C", label: "High" },
      urgent: { emoji: "🚨", color: "#E91E63", label: "Urgent" },
    },
    defaultPriority: "none",
    archiveCategory: null,
    logChannel: null,
  },

  // =========================
  // GIVEAWAY SETTINGS
  // =========================
  giveaways: {
    defaultDuration: 86400000, 
    minimumWinners: 1,
    maximumWinners: 10,
    minimumDuration: 300000, 
    maximumDuration: 2592000000, 
    allowedRoles: [],
    bypassRoles: [],
  },

  // =========================
  // VERIFICATION SETTINGS
  // =========================
  verification: {
    defaultMessage: "Click the button below to verify yourself!",
    defaultButtonText: "Verify",
    autoVerify: {
      defaultCriteria: "none",
      defaultAccountAgeDays: 7,
      serverSizeThreshold: 1000,
      minAccountAge: 1,      
      maxAccountAge: 365,      
      sendDMNotification: true,
      criteria: { account_age: "Account age based", server_size: "Small servers", none: "Immediate" }
    },
    verificationCooldown: 5000,  
    maxVerificationAttempts: 3,   
    attemptWindow: 60000,            
    maxCooldownEntries: 10000,
    maxAttemptEntries: 10000,
    cooldownCleanupInterval: 300000, 
    maxAuditMetadataBytes: 4096,
    maxInMemoryAuditEntries: 1000,
    logAllVerifications: true,
    keepAuditTrail: true,
  },

  // =========================
  // WELCOME / GOODBYE MESSAGES
  // =========================
  welcome: {
    defaultWelcomeMessage: "Welcome {user} to {server}!",
    defaultGoodbyeMessage: "{user} has left the server.",
    defaultWelcomeChannel: null,
    defaultGoodbyeChannel: null,
  },

  // =========================
  // COUNTER CHANNELS
  // =========================
  counters: {
    defaults: { name: "{name} Counter", type: "voice", channelName: "{name}-{count}" },
    types: {
      members: { name: "👥 Members", getCount: (guild) => guild.memberCount.toString() },
      bots: { name: "🤖 Bots", getCount: (guild) => guild.members.cache.filter((m) => m.user.bot).size.toString() },
    },
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
    birthday: true,
    counter: true,
    verification: true,
    reactionRoles: true,
    joinToCreate: true,
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

const configErrors = validateConfig(botConfig);
if (configErrors.length > 0) {
  logger.error("Configuration errors:", configErrors.join("\n"));
  if (process.env.NODE_ENV === "production") process.exit(1);
}

// =========================
// EXPORTS (The Fix)
// =========================
export const BotConfig = botConfig; 

export function getColor(path, fallback = "#99AAB5") {
  if (typeof path === "number") return path;
  if (typeof path === "string" && path.startsWith("#")) return parseInt(path.replace("#", ""), 16);
  const result = path.split(".").reduce((obj, key) => (obj && obj[key] !== undefined ? obj[key] : fallback), botConfig.embeds.colors);
  return typeof result === "string" && result.startsWith("#") ? parseInt(result.replace("#", ""), 16) : result;
}

/**
 * C++ Equivalent Implementation for reference/integration
 * This mimics the logic used in your static void UpdatePresence()
 */
export function getPresenceForCPP() {
  const act = botConfig.presence.activities[0];
  return {
    state: act.state,
    details: act.details,
    startTimestamp: act.timestamps.start,
    endTimestamp: act.timestamps.end,
    largeImageKey: act.assets.large_image,
    largeImageText: act.assets.large_text,
    smallImageText: act.assets.small_text,
    partyId: act.party.id,
    partySize: act.party.size[0],
    partyMax: act.party.size[1],
    joinSecret: act.secrets.join
  };
}

export default botConfig;
