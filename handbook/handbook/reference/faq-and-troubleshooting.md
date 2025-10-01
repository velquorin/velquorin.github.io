# Commonly asked questions and troubleshooting 
## Mod *x* causes Velquorin to crash!
[Please open an issue in the repository](https://github.com/velquorin/client/issues/new),

Including:
- Which mods you were using
- Steps to reproduce the crash (if possible/applicable)
- A crash log (if available)

## Doing *x* causes Velquorin to crash!
[Please open an issue in the repository](https://github.com/velquorin/client/issues/new),

Including:
- What you did before Velquorin crashed
- Steps to reproduce the crash (if possible)
- A crash log (if available)

## What info does Velquorin collect?
Velquorin does not collect or store your personal data at all. However, some features 
such as "Share" might use services that aren't ran or operated by Velquorin that might collect data outside our control

## Is this bannable?
This is very unlikely. Velquorin is not designed to give unfair advantages in gameplay.
As long as you are not combining it with cheats or exploiting bugs, you should not run into issues.

That said, some servers restrict specific mods (for example, Hypixel banned Freelook). Always check your server’s rules before joining.

## "Having shaders on might interfere with the Ambiance module." or Iris compatibility
The Ambiance module allows you to customize the world visual, which can clash with Iris shaders.
Because of that, most Iris shaders would override some of the ambiance module tweaks.

## "Some context actions aren't supported. See wiki for details."
> [!NOTE]
> You're very likely not to notice the effect described below.
> Most of the time this warning appears in edge cases, where the provider for one context feature if unavailable gets replaced with another.
> 
> So you get the full experience, while getting this warning.

This warning means that the client could not load methods for some context actions (for example, copying a file, opening a folder in file explorer).
This **can** *theoretically* be fixed via putting `-Djava.awt.headless=false` in your run parameters, however this does not work most of the time.

## "Some shortcuts are reserved by macOS. Change if needed in system settings."
You're working on macOS, and the OS can reserve some shortcuts as system operations (for example Control+Space, Control+Escape and others).
This can be usually fixed via rebinding the shortcut that interferes with game in "System Preferences".