import os
import asyncio
import random
import discord
import ctypes
from discord.ext import commands
from discord.errors import HTTPException
from colorama import init, Fore
from discord.ui import View, Button

init(autoreset=True)
ctypes.windll.kernel32.SetConsoleTitleW("LhamaraTool")

def clear(): 
    os.system('cls' if os.name == 'nt' else 'clear')

def status(): 
    print(Fore.BLUE + "LhamaraRaid </> ")

banner = f"""{Fore.GREEN}
    __    __                                        
   / /   / /_  ____ _____ ___  ____ __________ _
  / /   / __ \/ __ `/ __ `__ \/ __ `/ ___/ __ `/
 / /___/ / / / /_/ / / / / / / /_/ / /  / /_/ / 
/_____/_/ /_/\__,_/_/ /_/ /_/\__,_/_/   \__,_/  
{Fore.CYAN} made by zerep
"""

# CONFIGURATION
TOKEN = "MTQ5MzcyMjQ2ODEyMzI3OTQxMg.GOVBkV.PR1yhHR8-FlyHcpUc1-5HXrp9_u-Flb55Xo5Ew"
MESSAGE_COUNT = 50 
messages = [
    "# _ _                       [  ** *PURESKILLS* ** ](https://discord.gg/xUt2eYnFPA) "
    " _ _                       [  ** *YOUTUBE* ** ](https://www.youtube.com/@ZerepBleh) "
    " _ _                       [  ** *GITHUB* ** ](https://github.com/Zereppy) || @here || || @everyone || "
]

intents = discord.Intents.all()
bot = commands.Bot(command_prefix="h", intents=intents)

@bot.event
async def on_ready():
    try:
        await bot.change_presence(
            activity=discord.Activity(type=discord.ActivityType.listening, name="Puresiklls.Security"),
            status=discord.Status.online
        )
        await bot.tree.sync()
        clear()
        print(banner)
        status()
        
        # Terminal Stats Overview with Links
        print(f"{Fore.CYAN}[i] Scanning Server: {len(bot.guilds)} active.")
        for guild in bot.guilds:
            invite_url = "No Perms"
            try:
                # Attempt to get a link for the terminal log
                if guild.me.guild_permissions.create_instant_invite:
                    invite_url = (await guild.text_channels[0].create_invite(max_age=3600)).url
            except:
                pass
            print(f"{Fore.WHITE} -> {guild.name:20} | {invite_url}")
            
        print(f"\n{Fore.GREEN}[+] Lhamara is Ready!")
    except Exception as e:
        print(f"{Fore.RED}[-] Ready error: {e}")

class SpamView(View):
    def __init__(self):
        super().__init__(timeout=None)

    @discord.ui.button(label="DEATH", style=discord.ButtonStyle.danger, emoji="😈")
    async def spam_50(self, interaction: discord.Interaction, button: Button):
        await interaction.response.defer()
        print(f"{Fore.YELLOW}[!] {interaction.user} triggered spam in {interaction.channel.name}")
        
        sent_count = 0
        for i in range(MESSAGE_COUNT):
            try:
                msg = random.choice(messages)
                await interaction.followup.send(msg)
                sent_count += 1
                print(f"{Fore.GREEN}[{sent_count}/{MESSAGE_COUNT}] Sent: {msg[:30]}...")
                await asyncio.sleep(0.07)
                
            except HTTPException as e:
                if e.status == 429:
                    await asyncio.sleep(e.retry_after + 0.5)
                else:
                    break
            except Exception:
                break
        
        print(f"{Fore.GREEN}[+] Task finished.")

@bot.tree.command(name="servers", description="Generate invite links for all servers")
async def servers(interaction: discord.Interaction):
    """Fetches the actual join URL for every server the bot is in."""
    await interaction.response.defer(ephemeral=True)
    
    guild_data = []
    for guild in bot.guilds:
        invite_link = "Unable to generate link"
        try:
            # Search for a channel where we have invite permissions
            channels = [c for c in guild.text_channels if c.permissions_for(guild.me).create_instant_invite]
            if channels:
                invite = await channels[0].create_invite(max_age=86400) # 24 hour link
                invite_link = invite.url
        except:
            pass
        
        guild_data.append(f"**{guild.name}**\nLink: {invite_link}")

    content = "\n\n".join(guild_data) if guild_data else "No servers found."
    
    embed = discord.Embed(
        title="🔗 Active Join Links",
        description=f"Total Servers: **{len(bot.guilds)}**\n\n{content}",
        color=0x00FF00 
    )
    embed.set_footer(text="LhamaraTool • Admin Access")
    
    await interaction.followup.send(embed=embed, ephemeral=True)

@bot.tree.command(name="lhamara", description="RAID THIS CHANNEL")
async def spam_command(interaction: discord.Interaction):
    try:
        channel = interaction.channel
        if isinstance(channel, discord.TextChannel):
            perms = channel.permissions_for(interaction.guild.me)
            if perms.send_messages:
                await interaction.response.send_message("KILL THIS FUCKING CHANNEL", view=SpamView(), ephemeral=True)
                print(f"{Fore.CYAN}[+] /lhamara activated in {channel.name}")
            else:
                await interaction.response.send_message("❌ Missing permissions", ephemeral=True)
        else:
            await interaction.response.send_message("❌ Text channels only", ephemeral=True)
    except Exception as e:
        print(f"{Fore.RED}[-] Command error: {e}")

@bot.event
async def on_disconnect():
    print(f"{Fore.YELLOW}[!] Connection lost, reconnecting...")

if __name__ == "__main__":
    if TOKEN == "YOUR_BOT_TOKEN_HERE":
        print(f"{Fore.RED}[-] ERROR: Provide a valid token.")
    else:
        print(f"{Fore.GREEN}[+] Initializing Lhamara...")
        bot.run(TOKEN)
