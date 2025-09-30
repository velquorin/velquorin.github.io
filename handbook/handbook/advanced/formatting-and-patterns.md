# Formatting and patterns
## Basic Markdown syntax
| Name          | Syntax                | Result                                                    | Note                                       |
|---------------|-----------------------|-----------------------------------------------------------|--------------------------------------------|
| Bold          | `**text**`            | **Bold text**                                             |                                            |
| Italic        | `*text*`              | *Italic text*                                             |                                            |
| Bold & italic | `***text***`          | ***Bold and italic***                                     |                                            |
| Strikethrough | `~~text~~`            | ~~Strikethrough~~                                         |                                            |
| Underlined    | `__text__`            | Underlined text                                           |                                            |
| Line break    | `A\nB`                | A<br/>B                                                   |                                            |
| Colored       | `{#0066CC:Blue text}` | *(Displayed only in Velquorin, not in standard Markdown)* | Refer to the [Color format](#color-format) |

#### You can combine multiple tags in one, and have multiple tags in one string.

### Color format
Velquorin serialized and accepts colors in the following format:
```
#RGB(A):(rainbow)
```

- `#RGB` → the basic hex RBG color. The `#` is optional.
- `(A)` → the optional alpha channel. If missing, will default to `1`.
- `(rainbow)` → the optional rainbow speed. If present, will animate the color as a rainbow using the specified speed.

## Templating
The concepts described below are provided by the environment, which is passed down to the engine when it's called to process a string. See the [reference below](#per-module-reference).

### Variables
Variables are accessible with a simple `$name` call. They also support nesting: `$name.field`.

### Functions
Functions can be accessed with a simple `$function("String argument", 6.7, true, $variable.field)` call.
A function can have multiple arguments of String, Number (both non-floating and floating), Boolean types.
Additionally, you can chain returns of functions as arguments passed down to other functions.

## Per-module reference
References to the environments of modules using the templating system.

### Coordinates
#### Variables
| Name    | Description      | Type            |
|---------|------------------|-----------------|
| `x`     | The X coordinate | Floating number |
| `y`     | The Y coordinate | Floating number |
| `z`     | The Z coordinate | Floating number |
| `yaw`   | The yaw angle    | Floating number |
| `pitch` | The pitch angle  | Floating number |

#### Functions
| Name | Arguments                                                                                                      | Description                                       | Returns                                                                        |
|------|----------------------------------------------------------------------------------------------------------------|---------------------------------------------------|--------------------------------------------------------------------------------|
| `r`  | `Value` (Floating number): The value to round<br/>`Decimal places` (Number): Amount of decimal places to leave | Rounds the number to the amount of decimal places | Rounded number. Might be non-floating if the `Decimal places` argument is `0`. |


### CPU
#### Variables
| Name      | Description             | Type            |
|-----------|-------------------------|-----------------|
| `process` | CPU load of the process | Floating number |
| `system`  | CPU load of the system  | Floating number |

#### Functions
| Name     | Arguments                                      | Description                                                     | Returns                          |
|----------|------------------------------------------------|-----------------------------------------------------------------|----------------------------------|
| `format` | `Value` (Floating number): The value to format | Formats a floating number ranging from 0 to 1 into a percentage | The formatted percentage string. |


### Memory
#### Variables
| Name    | Description           | Type            |
|---------|-----------------------|-----------------|
| `used`  | Used memory in bytes  | Floating number |
| `max`   | Max memory in bytes   | Floating number |
| `free`  | Free memory in bytes  | Floating number |
| `total` | Total memory in bytes | Floating number |

#### Functions
| Name     | Arguments                                                                                                       | Description                                                                                                                                              | Returns               |
|----------|-----------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|
| `format` | `Decimal places` (Number): Amount of decimal places to leave<br/>`Value` (Floating number): The value to format | Converts the input amount of bytes into a formatted string in the biggest available format (KB, MB or GB) and leaves a selected amount of decimal places | The formatted string. |
