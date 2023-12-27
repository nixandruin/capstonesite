import React from 'react'; 
import unityLogo from '../../Assets/unityLogo.png'; 

let november = (
    <div id = "outer-div-here">
        <section className = "background-info flex-parent">
            <div className = "flex-child-with-image">
                <h4>A Basic Background on Unity</h4>
                <p>
                    Unity is a <strong>game engine</strong>, originally created in 2005 by Unity Technologies, meant to simpligy game development and create an easy to use engine for everyone. 
                    Unity is used for both 2D and 3D game development, as well as 3D modeling and simulations. 
                    <br/><br/>
                    Unity is object oriented: individual objects, which can be sprites, tilemaps, canvas UI elements, or even empty objects, fill out the Unity Hierarchy.
                    Objects can have properties, like their position and size, as well as components, which can include physics, audio controllers, animations, and custom scripts. 
                    Objects can also be made into Prefabs, which function like classes to create a blueprint of an object that can be used repeatedly. Changes to a prefab affect all instances of it. 
                    <br/><br/>
                    While a lot can be done from the Unity editor, most of the logic in the game is controlled in custom C# scripts, which are responsible for translating user input or game events into chnages in indivudals objects properties and components. 
                    C# is an object-oriented programming language developed by Microsoft as part of the .NET framework and as a general development language to be used across their ecosystem. 
                    Much of the language is inspired by C, but includes classes and bears some resemblance to Java as well. 
                    
                </p>

                <h4>Why Learn Unity?</h4>
                <p>
                    I decided to learn C# and game development with Unity because game development seems like the natural intersection of two of my main interests: coding and storytelling. 
                    One of my ideas for my capstone project is an educational calculus RPG, so I wanted to test run game development before committing to that idea. 
                    I picked Unity over another engine like Unreal or Godot because Unity is well suited to both 3D and 2D development (unlike Unreal which is really designed for 2D only), and because there are a plethora of resources for learning Unity out on the web. 
                    <br/>
                    <br/>
                    Game development is a huge field that includes different platforms, genres, art, music, level design, and langauges. 
                    Like last month, I decided to narrow my focus in order to get the most out of the month. I focused specfically on 2D design for computers, and worked mostly on creating platformers ans simple scrolling games, since that afforded me the greatest chance to become comfortable with the fundamentals of game dev: scripting movement and player/object interactions, building levels with tilemaps, creating character animations, managing a simple UI, and transitioning between scenes using the SceneManager. 
                    Towards the end of the month I focused on learning more RPG/open world concepts like creating a bigger inventory or Questing system. 
                    
                </p>
            </div>
            <img className = 'flex-child-with-image' src = {unityLogo} alt = "unity logo"/>
        </section>

        <section className = "flex-parent learning-resources">
            <div className = "flex-child">
                <h4>Learning</h4>
                <ul>
                    <li>
                        <a href = "https://www.codecademy.com/learn/learn-c-sharp">Codecademy Learn C#</a>: basic C# course covering syntax, variables, loops, functions, arrays, classes, and compilation. 
                    </li>
                    <li>
                        <a href = "https://www.youtube.com/watch?v=XtQMytORBmM&pp=ygUSdW5pdHkgZmxhcHB5IGJpcmQg">Flappy Bird</a>: YouTube tutorial covering the basics of using the Unity editor, asset store, and writing basic scripts. All in all a "first unity experience" tutorial. 
                    </li>
                    <li>
                        <a href = "https://www.youtube.com/playlist?list=PLrnPJCHvNZuCVTz6lvhR81nnaf1a-b67U">2D Platformer Tutorial</a>: YouTube tutorial series covering the creation of a basic platformer. Covers player movement, buidling levels, collecting items, managing scenes, character death and respawing, and implementing sound effects. 
                    </li>
                    <li>
                        <a href = "https://learn.unity.com/">Unity Learn</a>: Unity's official learning website with courses on C# (specifically for unity), and basic 2D and 3D dev. 
                    </li>
                    <li>
                        <a href = "https://docs.unity.com/">Unity Documentation</a>: the good old Unity docs. 
                    </li>
                    <li>
                        <a href = "https://www.youtube.com/playlist?list=PLVBXjbDu7z1-6HeVlF5AhQRHwjNMillDB">How to Fail at Game Dev</a>: hey at least I tried right
                    </li>
                </ul>
            </div>
            <figure className = "flex-child">
                <p>I still LOVE flex box ):)</p>
            </figure>
        </section>

        <section className = "flex-parent learning-showcase">
            <div className = "flex-child">
                <h4>Showcase of Learning</h4>
                <ol>
                    <li><strong>Flappy Bird</strong>: one simple, replayable level of flappybird. The player can press space to navigate the bird between pipes and increase their score. If the player collides with the pipes the game ends and the player can restart.</li>
                    <li><strong>Hopper</strong>: a short, three level platformer. The player can run and jump across the levels, avoid obstacles, and collect fruit. Colliding with an obstacle respawns the player at the beginning of the level. Reaching the flag at the end of each level loads the next scene. Includes animations and audio as well.</li>
                    <li><strong>Portals</strong>: my attempt at designing a very simple platformer from scratch. I found my own free assets, coded the logic for movements and the portal functionality myself.</li>
                </ol>
            </div>
            <div className = "flex-child">
                <iframe title = "Hopper" id='webgl_iframe' frameborder="0" allow="autoplay; fullscreen; vr" allowfullscreen="" allowvr=""
        mozallowfullscreen="true" src="https://play.unity.com/webgl/33d87728-b557-43a5-a1aa-92fc4bf3774f?screenshot=false&embedType=embed"  width="810"
        height="640" onmousewheel="" webkitallowfullscreen="true"></iframe>
            </div>
            <div className  = "flex-child">
                <iframe title = "flappybird" id='webgl_iframe' frameborder="0" allow="autoplay; fullscreen; vr" allowfullscreen="" allowvr=""
        mozallowfullscreen="true" src="https://play.unity.com/webgl/90708b77-6750-4cb8-a35e-f62189aad2f3?screenshot=false&embedType=embed"  width="810"
        height="640" onmousewheel="" webkitallowfullscreen="true"></iframe>
            </div>
        </section>

    </div>
)

export default november; 
