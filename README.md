#js-battle
Your mission is to create an arena where two characters battle.  Each character has properties that determine its effectiveness.  

##Character Requirements
* Name
* Attack (The base attack value)
* Defense (The base defense value)
* Health (Starting/Max health)

##Character Stretch
* Attack 1 (An attack that has a 70% chance to launch and does (Attack x1) damage)
* Attack 2 (An attack that has a 25% chance to launch and does (Attack x2)damage)
* Special Attack (An attack that has a 5% chance to launch and is does (Strength x6) damage)
* Last Words (A phrase that is displayed when the fight is over)

##Arena MVP
* Calculate the damage that a particular attack would do using the following formula:
```
damage = 50 * (attack/defense) * effectiveness
```
* Where:
	* attack = an attack value
	* defense = the opponent's defense value
	* effectiveness = the effectiveness of the attack based on the type matchup (see explanation below)

* Attacks can be super effective, neutral, or not very effective depending on the matchup. For example, water would be super effective against fire, but not very effective against grass.
```
Super effective: 2x damage
Neutral: 1x damage
Not very effective: 0.5x damage
```
Here is an example  of effectiveness of each matchup:

```
fire > grass
fire < water
fire = electric
water < grass
water < electric
grass = electric

```

* Any type against itself is not very effective. Also, assume that the relationships between different types are symmetric (if a is super effective against b, then b is not very effective against a).

* Log all events in the console
	* Events are as follows: Characters entering battle, attacks(displaying name, health, attack, last words)
* Invoke the fight function with the two characters as input

	
##Arena Stretch
* Print events to HTML
* Have a turn by turn attack environment 
	* Have buttons that can initiate attacks
* Have images to represent characters and attacks
* Use CSS to have the arena look like a Gameboy (screen, A button, B button, Start, and numpad)
* Use HTML forms to add new characters to the arena

##Reminder
* This is a creative exercise that is meant to be fun!
* Use your imagination but stick to the core principals of the exercise

##Work Flow
* Understand the problem
* Devise a plan
* Carry out the plan
* Look back 

