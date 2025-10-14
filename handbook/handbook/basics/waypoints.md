# Waypoints
Velquorin, alongside all other features, adds waypoints into the game.

Waypoints are named points in the game world. They're saved on per-world (or per-server) basis.

Waypoints, like most other features, are managed as [modules](managing-config). This means that they can be configured 
and toggled via the UI.

You can configure the keybinding that opens the waypoint creation menu (`I` by default) like other settings.

There are a lot of similarities in terms of visuals between [widgets](widgets) and waypoints. This means that you 
can change the way they're scaled, their color (of both text and background), [format](/advanced/formatting-and-patterns) and other miscellaneous variables.

Alongside that, you can configure whether to hide waypoints that are far away from you (and the distance when to start doing so),
and whether to scale waypoints based on distance (by default, waypoints scale down as they get farther away).

Both of the settings described above are on by default.

Alongside that, you can manage waypoins through the waypoints list that you can open in pause menu and the title screen. 
It's identified via a **pin** icon, and is located alongside other client buttons. In it, you can add new waypoints, and edit / remove existing ones. 

Beware, that if you're not in a world, and you're trying to manually create a waypoint, you'll need to specify which world it belongs to.
