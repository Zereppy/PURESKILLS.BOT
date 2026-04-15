import { logger } from '../utils/logger.js';

export const botConfig = {
  prefix: "x",
  description: "Titan Bot: Advanced Management & Competitive Integration",

  commands: {
    owners: process.env.OWNER_IDS?.split(",") || [],
    defaultCooldown: 3, 
    deleteCommands: false,
    testGuildId: process.env.TEST_GUILD_ID,
  },

  // =========================
  // WELCOME / GOODBYE (FIXED KEYS)
  // =========================
  // Using 'channel' and 'enabled' as standard keys
  welcome: {
    enabled: true,
    channel: process.env.WELCOME_CHANNEL_ID || null, 
    message: "Welcome {user} to **{server}**!",
    useEmbed: true,
    color: "#57F287",
    thumbnail: true
  },
  goodbye: {
    enabled: true,
    channel: process.env.GOODBYE_CHANNEL_ID || null,
    message: "{user} has left the server.",
    useEmbed: true,
    color: "#ED4245"
  },

  embeds: {
    colors: {
      primary: "#336699", 
      success: "#57F287", 
      error: "#ED4245", 
      warning: "#FEE75C", 
      info: "#3498DB",
      gray: "#99AAB5",
    },
    footer: { text: "Titan Bot", icon: null },
  },

  features: {
    welcome: true,
    economy: true,
    moderation: true,
    tickets: true,
    verification: true,
  },
};

// =========================
// VALIDATION & HELPERS
// =========================

export function validateConfig(config) {
  const errors = [];
  if (!process.env.DISCORD_TOKEN && !process.env.TOKEN) errors.push("Missing Bot Token.");
  if (!process.env.CLIENT_ID) errors.push("Missing Client ID.");
  return errors;
}

/**
 * Safely parses messages with placeholders to prevent undefined crashes
 */
export function parsePlaceholders(text, member) {
  if (!text || !member) return text || "";
  return text
    .replace(/{user}/g, member.user.username)
    .replace(/{mention}/g, `<@${member.id}>`)
    .replace(/{server}/g, member.guild.name)
    .replace(/{memberCount}/g, member.guild.memberCount);
}

/**
 * Converts Hex to Integer for Discord Embeds
 */
export function getColor(colorStr) {
  const hex = colorStr?.startsWith("#") ? colorStr : "#99AAB5";
  return parseInt(hex.replace("#", ""), 16);
}

export default botConfig;
