# Internals
The Velquorin project consists of two modules: `client` being the mod itself and `modpack` being the modpack which contains the **client mod** and other quality-of-life improvements.

::: info Source 
**Work in progress**. This file is a merged version of Internals.md and Versioning.md from the client repository.
It might lag behind the codebase.\
And is currently missing multiple important parts on persistence logic and in-depth ClickGUI logic.\
For up-to-date info, feel free to browse the codebase.
:::

## Client mod (`client` subdirectory)
The client module is built with [Gradle](https://docs.gradle.org/current/userguide/userguide.html) and requires Java 21 or above.
I recommend and personally use the latest version of the [JetBrains runtime](https://github.com/JetBrains/JetBrainsRuntime) for development as it allows you to remove / add methods when hotswapping (add `-XX:+AllowEnhancedClassRedefinition` VM flag to run parameters).

### Architecture
Most of the features provided are either modules - stated units that can be configured and more (see [Modules](#modules)),
or direct injections into the game when the module paradigm is unnecessary.

#### Initialization System
Velquorin is initialized in phases, coordinated by `VelquorinInitializer`.
Variables accessed through accessors in the main class `Velquorin` are proxied through `VelquorinContext` which itself is populated during initialization phases.

#### Event System
Event system is built around a custom lightweight, thread and type safe event bus. Event executors can be registered and unregistered, and additionally they can be prioritized (via integer priority values).
Events can be cancellable.

#### Modules
Module is a stated (can be toggled on/off) unit, that can be [configured](#persistence-configuration-and-database) (via the `Setting<T>` API).
Each module has an identifier, for [persistence](#persistence-configuration-and-database).

Module extends `SettingContainer` to inherit setting management capabilities.

Each module has access to an event system based on the event bus, which handles events only if the module is enabled.

Modules can also be tagged.

All modules are instantiated in `ModulePhase`.

Settings are managed through the `SettingContainer` class, which Module extends.

`Setting<T>` is a setting unit. It supports a multitude of types, from primitives (int, double) to custom ones (Enum types and AnimatedColor).
Settings can also have callbacks and miscellaneous parameters, which can be used by [UI elements](#ui-system) for example.

*See [Localization](#localization) for info on module and setting localization*

#### Persistence (Configuration and Database)
Velquorin uses two different persistence systems: configuration and database.

Configuration is user-entered data, for example module settings, states and custom exported data (widget positions for example).

Database, on the other hand, is used for data that isn't supposed to be modified by the human hand -
for example saved info on compatibility warnings (to not show one warning twice), waypoints that aren't made manually, etc.

#### Compatibility Layer System
Velquorin also has a compatibility system for providing interfaces with other, optional mods.

#### Rendering (Vanilla and NanoVG)
Rendering in Velquorin is done via a hybrid approach of combining Vanilla rendering tools (basic DrawContext, sometimes wrapped around via `Renderer`) and NanoVG calls (wrapped around via `NVGRenderer`) in custom UIs.

The `NVGRenderedScreen` class makes it possible to utilize the Minecraft screen system with the `NVGRenderer` wrapper, used in some custom screens and more notably the ClickGUI.

#### UI System
ClickGUI (may be referred to as "Click UI", "Interface", "UI" across the knowledge base) is a page-based interface, intended for interaction with the client (modules, their settings, other client settings), uses [NanoVG](#rendering-vanilla-and-nanovg) for drawing.

ClickGUI (and other pages/screens utilizing NanoVG) are built based off Elements.

The in-game title screen (the one that greets the player on launch) is also fully remade using NanoVG.

#### Localization
For the most part, Velquorin is localized.

Locale files are JSON resources, and are named using the two-letter language code (i.e. `en.json`, `ru.json`).

*See [conventions](#translations) for translation conventions and guidelines*

#### Utilities
Velquorin has a couple utilities that are used across the codebase.

Some:
- Input system. `InputBinding` representing an input device-agnostic key binding which you can subscribe to. *`Input events` (see `dev.clemenside.velquorin.utility.input` package for a list of event classes and more)* which you can use to subscribe to the event bus.
- Clipboard. `Clipboard` representing a device-agnostic clipboard system, utilizing AWT if available, if not falling back to GLFW/Minecraft methods.

### Conventions
#### Translations
Modules and settings follow a strict naming structure:
- Module name `module.{identifier}.name` and description `module.{identifier}.description`
- Setting name `setting.{module}.{identifier}.name` and description `setting.{module}.{identifier}.description`

Most of the time, when using enums in localized contexts (e.g. enum settings) the values are localized. You can retrieve the key (and get an enum value from a translation value or a key) using the `EnumLocalizationUtils` class, which automatically maps enum constants with translation keys following a structure similar to this: `lowercaseenumname.lowercaseconstant`.
You can also force it to use a custom key with the `@Localized` annotation.

Other localized systems mostly do not follow any strict naming structure. However, it is a good practice to logically group together related keys.
For example this is good:
```json
{
  "copyright.license": "© 2025 Clemenside. Licensed under GPL 3.0.",
  "copyright.affiliation": "Not affiliated with Mojang or Microsoft."
}
```

### Building and Running
To build the project, simply cd into the `client` subdirectory and do `./gradlew build`, or use your IDE's tool for it.

To run the client as a task:
- `./gradlew runClient`. This will not support custom VM parameters

It is better to use the generated launch configurations: `./gradle configureLaunch`.
With it, you **can** modify the VM parameters, which allows you to do much more.

### Debugging
If you're using the JetBrains runtime, you can add new classes, methods and fields when hotswapping.
To do so, add `-XX:+AllowEnhancedClassRedefinition` into your VM flags.

> [!NOTE]
> The next paragraph assumes you're using the IntelliJ Idea layout. If you're using another IDE you can try looking within the gradle cache directly, or via an alternative tool in your IDE.

To hotswap mixins, find the `Gradle: net.fabricmc:sponge-mixin:0.15.5+mixin.0.8.7` (or similar) dependency in `External Libraries` section of the `Project` window tool. Double-click to open it, then right-click on the `.jar`, and do "Copy Path" -> "Absolute Path" on it.
Then, add `-javaagent:*HERE*` to your VM arguments, replacing `*HERE*` with the path you've copied earlier.

## Mod pack (`modpack` subdirectory)
The modpack is compiled via [packwiz](https://github.com/packwiz/packwiz). It's a go tool for managing Minecraft modpacks.
You can install it by following [this](https://packwiz.infra.link/installation/); but in short:
- Install [Go](https://golang.org/dl/)
- Run `go install github.com/packwiz/packwiz@latest`

## Versioning
Velquorin uses a [SemVer-based](https://semver.org/) versioning scheme, with some changes to the suffix.

### Manifest
The `meta.json` file in the root folder is the **manifest**. It contains the semantic version (major, minor, patch) and the codename.

### Format
```
MAJOR.MINOR.PATCH[SUFFIX]
```
- `MAJOR`, `MINOR`, `PATCH` fields are parsed from the manifest

The suffix is generated:
- No suffix on the `main` branch
- `-dev.<commit>` on the `development` branch
    - `1.2.3-dev.a1b2c3d`
- `-<branch>.<commit>.<timestamp>` on any other branch
    - `1.2.3-branch.a1b2c3d.20240601-15`

> `<commit>` is the short (shortened to 7 characters) commit hash

> `<timestamp>` is the build timestamp in `yyyyMMdd-HH` format

A short codename at the end is included at the end of humanly-readable names.
