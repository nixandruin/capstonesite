import React from 'react'; 
import networkDeviceConfigNotes from '../../Assets/networkDeviceConfigNotes.pdf';
//need cisco bi bob labels for devices or whatever

let january = (
    <div id = "january">
        <section className = "background-info flex-parent">
            <section className = "flex-child">
                <h4>A Short Introduction to Networking Devices with Cisco</h4>
                <p>
                    Networking devices are an essential part of the backbone of computer communication. Switches forward packets between computers on the same subnet or LAN, and routers forward packets between different networks. Created in the 1990s and 1960s respectively, together these two devices make network communication and the internet itself possible. 
                    <br /><br/>
                    But without proper configuration their functionality is quite limited. In order to design networks on the massive scale we see today, with massive businesses spanning the globe and schools where every teacher and student has a device, network devices need intensive configuration. Even a small home network would be insecure and dysfunctional without a little bit of management. 
                    <br/><br/>
                    Therefore it is extremely beneficial to have knowledge of how to configure these devices, as network administrators are in high demand and such skills can be applied to IT, cybersecurity, troubleshooting, and low level protocol design alike.
                    
                </p>
                <h4>Why Learn Networking Device Configuration?</h4>
                <p>
                    I decided to learn about network device configuration for a few reasons: first, I take Networking at Edison Academy. The class is great, but mostly theoretical. We learn about networking concepts like how switches, routers, vlans, and remote management works, but don't get a chance to 
                    actually configure it all from scratch. I felt like this left a big gap in my knowledge, so I wanted to learn how to do that on my own. 
                    Secondly, network device configuration is a category in Cyber Patriot, and even though it's not what I typically specialize in on our team, I thought learning the basics could make me a better overall competitor. 
                    <br/><br/>
                    I decided to focus specifically on Cisco networking devices because Cisco holds nearly half of the networking devices market, with a large portion of hardware in any given environment likely to be cisco. 
                    I also decided to limit my learning to routers and switches this month as those two devices are by far the most important, and I wanted to go in depth more on switches. 
                </p>
            </section>
        </section>

        <section className = "flex-parent learning-resources">
            <figure className = "flex-child">
                <object data = {networkDeviceConfigNotes} type = 'application/pdf' aria-label = 'web dev notes'/>
            </figure>
            <div className = "flex-child">
                <h4>Learning</h4>
                <ul>
                    <li>
                        <a href = "https://www.netacad.com/courses/networking/ccna-introduction-networks">Cisco Introduction to Networks</a>: an introduction to basic networking concepts like the function of routers and switches, basic configuration, network protocols, and different models like the TCP/IP and OSI models.
                    </li>
                    <li>
                        <a href = "https://www.netacad.com/courses/networking/ccna-switching-routing-wireless-essentials">Cisco Switching, Routing, and Wireless Essentials</a>: a slightly more advanced course moving into specficially switch and a bit of router config. Covers VLANs, best basic security practices, and remote management.
                    </li>
                    <li>
                        <a href = "https://www.youtube.com/watch?v=CDFnzdvDuP8">CCNP Switching: LANs, STP, DTP, Trunking, Security</a>: this course covered intermediate switching concepts like more in depth VLAN creation specifically for voice or wireless, trunking, Spanning Tree protocol, and more secure remote management. 
                    </li>
                    <li>
                        <a href = "https://www.youtube.com/watch?v=b9kgdM_i-mc">Build a Large Network in Packet Tracer</a>: I followed along with this tutorial to create the packet tracer network example. 
                    </li>
                </ul>
            </div>
        </section>

        <section className = "learning-showcase">
        <h4>Showcase of Learning</h4>
        <div className = "flex-parent">
            <figure className = "flex-child">
                <iframe src = "https://youtu.be/yPGWxDJ4zFc" title = "networking video"/> 
                <figcaption>https://youtu.be/yPGWxDJ4zFc</figcaption>
            </figure>
            <iframe className = "flex-child" title = "Networking Slideshow" src="https://docs.google.com/presentation/d/e/2PACX-1vRFuWpDfbpW4ScnV9EVoVm2m5GjtmCbUmp7FirpQt2boTnbA5rkbHXmF4YeCxUcN5ZNolV4w3l5Kll0/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </div>
        </section>
    </div>
);

export default january; 