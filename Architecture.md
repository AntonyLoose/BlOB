# Architecture

## Game Loop

- Each 10ms we should call each of our services

## Game Object

- A named object with physical attributes
- Must have a `draw` method which creates the object to be rendered to the canvas
- Must have a position (x, y)
- Must have bounds (width, height)
- Must have a "stickyness" attribute, basically how much friction is applied

### Dynamic Objects

- Must have speed (velocity, acceleration)
- Must have a weight
- Must have a rigidity constant
  - This constant will impact the effect of forces on the shape of the object

### Static Objects

## Renderer

- Is responsible for drawing the canvas
- Should only draw items that are within the current display (x, y coordinates)
- using our grid system that the collisions will use we should be able to efficiently
  check what is in the current bounds

## Collisions

- Everything in this game will be rectangular, so we just need simple box collision
- The entire map should be broken up into a grid, we should then have a preprocessing phase
  in which all game objects are assigned a grid position
- When checking for collisions we just need to check npcs and the pc grid locations
- Each tick we will need to update the grid position of pc and npcs
- The collision detector should have a static method `check_collisions(obj: Dynamic_Game_Object): Collision`
  - This method should check the grid tile that `obj` is in, the check for a collision with any objects in the
    tile
  - If there is a collision, a `Collision` instance will be returned, this class should encapsulate the data
    required to handle a collision

## Physics

- Force due to gravity
- Force due to friction
- Acceleration from force
- Deceleration from force

## I/O

- Checking for important key strokes
- WASD to control basic movement
- <Space> to dash
- <Esc> to open menu

## Sound

- Load audio files
- Output audio

## AI

- Path finding
- Basic npc movement

