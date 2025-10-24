# Directly configuring the client by editing the configuration file
You can directly configure Velquorin by editing the configuration `config.json` file. 
It is located in the `velquorin` folder, which is located in the root folder of your instance (often `.minecraft`).

## Base structure
Generally, the config file follows this structure:

## Structure
At the top level, the file has two main sections:

```json
{
  "options": "...", // Standalone options
  "module": "..." // Module states, settings, and data
}
```

### Modules
Each module entry looks like this:
```json
"identifier": {
  "enabled": true, // Whether the module is turned on
  "settings": { ... }, // Module settings
  "custom": { ... } // Extra data (not standardized)
}
```

The `custom` section is used by [widgets](/basics/widgets), for example, for storing their position data.

### Settings
A setting is stored as a simple key/value pair.
Values can be booleans, numbers, strings, enums, or colors.

```json
"settingName": "value"
```

## Types
### Animated color
```json
{
  "_type": "AnimatedColor",
  "baseColor": {
    "_type": "Color",
    "red": 255, // 0–255
    "green": 255, // 0–255
    "blue": 255, // 0–255
    "alpha": 255 // 0–255
  },
  "rainbow": false, // Enable rainbow animation
  "hueSpeed": 0.2 // Speed of rainbow animation
}
```

Think of base color as the starting color, and the rainbow speed controlling / basing off it.

### Enum
> [!NOTE]
> Velquorin will try to resolve the constant you're pointing at from the configuration first via the name, and if it fails it will try through the [ordinal](https://docs.oracle.com/javase/tutorial/java/javaOO/enum.html).

```json
{
  "_type": "dev.clemenside.velquorin.Enum",
  "name": "CONST", // Enum constant name
  "ordinal": 0 // Fallback enum position
}
```
