# Performance and hardware requirements
::: details Tl;dr
Most PCs that can handle Minecraft (you probably have one) will run Velquorin just fine.\
Use an OpenJDK-based Java distribution for the best experience.\
If you're on an extremely low-end setup (similar to the one described below), consider moving to a Linux-based OS for best performance.
:::

Velquorin, by itself doesn't create much overhead over the game, and doesn't rise the minimal hardware requirements at all.

Theoretically, Minecraft can run on most things that support Java 21 or above and OpenGL 3.0 core profile and GLSL 330.

However, it is recommended to have at least 8GB (or more) of RAM and a recent CPU/GPU pair. 
An OpenJDK-based distribution is recommended with Velquorin. Note that the 32-bit X86 port was deprecated in version 21, and was fully removed it in version 25.

::: warning Might be outdated
Test results below may be outdated and not precisely accurate as of now.
:::

> **Note!** Tests below have been run in a very crowded server environment, using the modpack.

Velquorin has been tested on multiple setups by now, ranging from an ancient, low-end nettop (Intel HD Graphics 630, i3-7300T, 8GB RAM), basic-spec Macbook air M1, and two high-end PCs.

All of them were playable, and most (except the nettop) were pretty smooth (120+ FPS on average with no prevalent jitters or lags, reaching up to 700-900 FPS on high-end setups).\
The nettop, on the other hand, required me to move to a Linux-based OS to continue testing, as Windows was extremely laggy. It has reached around 70-80 FPS with some peaks.
