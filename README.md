# Web Development Project 1 - Community Board

Submitted by: Harold Escorcia

This web app: Is a small collage of Computer Science resources that I have used or would recommend to anyone looking to getting into Computer Science. It involves resources to both learn CS theory and practical skills. 

Time spent: 10 hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The app has a cohesive, unique theme for events or resources relevant to a specific community**
  - [X] Header/title describing the theme is displayed
- [X] **At least 10 unique events or resources are displayed in a responsive card format**
  - [X] here are at least 10 cards displayed 
  - [X] The cards should be displayed in an organized format (ex. a grid, or in one line)
  - [X] Each card should include some information about the event or resource


The following **optional** features are implemented:

- [X] Buttons or links to a related resources are on each card component
  - [X] All cards have buttons or links in addition to text
- [X] The site is responsive for both desktop and mobile formats
  - [X] Web app is shown in a mobile format
  - [ ] **Video Walkthrough Special Instructions**: To ease the grading process, please use Chrome Developer Tools' "Toggle Device" button to demonstrate that your web application's responsiveness in both a desktop *and* a mobile format. Detailed instructions can be found below this stretch feature on the project page. 

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

The biggest challenges I faced were:

1. A typo when calling a component function. I forgot add {curly braces} around an argument when calling a component function which lead to me rewriting and meticulously testing other functions and my App component function for no reason. I have to guess that I spent at least 2-3 hours on it. 

2. Deciding on how to add dynamic links in card description text. I actually hadn't planned to add links at all so towards the end I decided to just throw together a component function that returns a <a> element given a link and text. What I actually wanted to do was dynamically add any number of links within a card within the card description. Unfortunately, I don't have enough time to rewrite entire component functions so I settled with only having one link at the bottom of each card. 

## License

    Copyright 2025 Harold J. Escorcia

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    Third-party textbook images are not licensed under Apache 2.0 and remain the property of their copyright holders. 