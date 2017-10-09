/**
  Define use cases:
  - Supports 2 players per game
  - Setup
  	- Ships cannot go off the board
  	- Ships cannot intersect another ship
  - Missile Firing

  Define core objects:
  - Battleship
  - Player (up to 2 players)
  - Ship

  Analyze relationships between core objects:
  - 

  Investigate actions:
	- Can generate a dynamic grid of size m x n
		- represented by 2-D array
		- need to store actual names of ships as well, to support 
			"SINK", instead of storing 0 or 1 only
			e.g., [[S2, S2, S3, S3, S3, 0, 0, 0]]
	- Ship blocks: S2, S3, S4, S6
		- allShips = [];
		- For ship in allShips:
			- ask where?
			- direction? can go down or right
			- [L, X, Y, D] => [(X,Y)]
				- if D is down,
					for i in 0...L, yield (X, Y + i)
	- Player
		- Score
		- Fire method (miss, hit, sink ship when you hit the entire ship):
			- if M[X,Y] is not null, 
				- S = M[X, Y]
				- M[X,Y] = 0
					- PROBABLY BETTER TO USE A HASH TABLE TO KEEP TRACK OF
						PIECES OF THE SHIP
					- For X,Y in M
						if M[X,Y] === S => 'HIT'
					else "SINK"
			- Otherwise, "MISS"
	- Setup
		- Ships cannot go off the board
		- Ships cannot intersect another ship

**/