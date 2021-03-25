# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Anvitaa Sekhsaria

Time spent: 4 hours

Link to project: https://glitch.com/edit/#!/chain-efficacious-bearberry?path=README.md%3A7%3A19

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

## Video Walkthrough

Here's a walkthrough of implemented user stories:

- [x] http://g.recordit.co/a7i6U881Nr.gif
- [x] http://g.recordit.co/oXtqWuUK4H.gif
- [x] http://g.recordit.co/lFHLkOaQPz.gif

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   MDN documentation for JavaScript

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   The tutorial was fairly simple. Since I have worked with HTML, CSS and JavaScript before I did not find it particularly challenging.
   However, since I copied a lot of the code from the tutorial, I was not used to the logic, as I had not come up with it myself.
   This made finding the part where I had to insert the timer particularily difficult. I had to try and test out places it in different functions
   and oberve the problems caused. Eventually, I looked into understanding the code better by going through the logic used more deeply.
   I also ended up using the Math.random function which was favoring some numbers over others. I went through the JavaScript documentation to understand how to code
   it better so that it would generate numbers (1-5) with equal probability. I also found out about this program on the day the deadline was due which gave me less time to apply.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   After having worked with these languages, I still have many questions about web development. One would be about the different types of elements that can be added to web applications.
   Second, how are different pages switched between in websites. When are single-page and multi-page applications used.
   How is the functionality of web development tested.
   Additionally, the storage of data in local memory and databases would be interesting to learn about.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   I would add the remaining optional features I did not have time to add. I would have also added a count for won and lost games. Then, I would have stored those counts in the local memory for the user to come back to.
   Upon doing that, I would have also implemented a stats page so that the user could track their progress in memory retention.
   Finally, I would have added more complexity to the memory game itself. Maybe a feature where a rhythm had to be memorized (by clicking the tiles for a specific amount of time to resemble a tune).

## License

    Copyright [ANVITAA SEKHSARIA]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
