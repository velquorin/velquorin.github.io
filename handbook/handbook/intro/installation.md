# Installation
::: tip Experienced users
If you're somewhat experienced, you likely know how to manage mods and instances in your launcher. Skip if needed.
:::

## Launcher
At this point you probably already have a launcher, however I'll do a quick recap.

> Firstly, if you use the default Minecraft Launcher, please switch to an option below. The default launcher isn't suited for modding, or generally much custom instances. 

Velquorin would work with any launcher, but a couple I recommend are:
- [Modrinth app](https://modrinth.com/app) being the friendly option, with streamlined access to the Modrinth platform and clean UI.
- [Prism](https://prismlauncher.org/) being the more customizable, open option.

> In most cases, [Modrinth app](https://modrinth.com/app) would be sufficient for you, if you don't do heavy modding or rely on other platforms.

### Java
> [!NOTE]
> This is **very** likely to be already managed by your launcher.
> Skip unless you're absolutely sure you need to install it manually.

I recommend [Azul](https://www.azul.com/downloads/?version=java-21-lts&package=jdk#zulu) since I use it personally, but there any many other options, for example: [OpenJDK](https://jdk.java.net/24/), [Adoptium](https://adoptium.net/temurin/releases?version=21&os=any&arch=any), [Casetto](https://docs.aws.amazon.com/corretto/latest/corretto-21-ug/downloads-list.html).
The setup is relatively the same between the vendors, just select the find for your platform and install it. You'd need version **21 or above** to play Minecraft and use Velquorin. Make sure to tick the option to add the installation into your system Path, if you get one.

## Mod or modpack?
Velquorin is distributed in two forms.
- The mod, which is the core, containing main Velquorin features, such as widgets, game tweaks and enhancements and more.
- The modpack, which contains the core, *and* more optimizations, and **quality-of-life** mods.

> If you don't do any customizations yourself, which would replace or clash with the modpack, **the modpack** would be the best option for you.

> [!NOTE]
> Don't forget to install [Fabric API](https://modrinth.com/mod/fabric-api/) if you're going with the standalone mod!

> Further on, this page will cover only the modpack, since it's the intended option.

## Putting it all together
Now, simply import the `.mrpack` modpack in your launcher of choice.

#### Importing the modpack in Modrinth
<p align="center">
    <img align="center" alt="A step-by-step visualisation on how to import a modpack in the Modrinth app." src="/steps/launcher/modrinth-modpack-add.png">
</p>
<p align="center">
  <i>A step-by-step visualisation on how to import a modpack in the Modrinth app.</i>
</p>

- Click the plus icon on the left corner
- Select the "From file" option in the popped up window's source selection
- Click "Import from file" and select the `.mrpack` downloaded

#### Importing the modpack in Prism
<p align="center">
    <img align="center" alt="A step-by-step visualisation on how to import a modpack in Prism launcher." src="/steps/launcher/prism-modpack-add.png">
</p>
<p align="center">
  <i>A step-by-step visualisation on how to import a modpack in Prism launcher.</i>
</p>

- Click the "Add Instance" button in the Top left corner
- Select the "Import" option in the popped up window's source selection
- Click "Browse" and select the `.mrpack` downloaded

**Or, you can simply drag and drop the `.mrpack` file into the launcher to do it quicker.**
