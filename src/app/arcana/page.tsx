import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; 



const Arcana = () => {
    return (
        <div className="flex flex-col items-center justify-start overflow-auto">
            <div className=" flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3 ml-14vw mr-14vw  mt-20 ">

<p><b>Would you dare to play this game? What answers can you find? </b> <br /><br />
    
    The revealed tarot cards on the Home page will be arranged in order.
     You can click on each of them and you will be taken to a specific part of the Arcana page, containing information about each of the cards revealed. <br /><br />

<span className='text-red-600'>
Reversed cards are displayed with a red border. 
</span>



   
   <br /><br />



Typically five or ten cards are drawn depending on the tradition, but feel free to draw as many as your intuition indicates.<br /><br />



Find a peaceful place. Ask a question in your head. See what the cards have to tell you.</p><br /><br />
</div>

<h1 className="text-2xl text-center font-bold bg-custom-blue dark:bg-custom-purple text-gray-600 dark:text-white mb-1 p-3 mt-20">
         MAJOR ARCANA
        </h1>


            {/* Section 1 with Card 1 */}
            <div id="section1" className="text-center  pt-20 ">
            <Image src="/Arcana1.jpg" alt="Arcana 1" width={250} height={500} />
            </div>
             {/* Back Button */}
             <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>

            <div className=" flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3 ml-14vw mr-14vw ">
                <p>1. The magician is a figure that represents action; in fact, 
                    the magician is the person who makes his own destiny, who is enterprising, who acts, and who obtains results. <br/><br/>

This is an undoubtedly positive card; in fact, it represents a person who is capable and intelligent, and makes good use of both attributes, and as a result reaches his objectives.<br/><br/>

It stands for: action, capability, enterprise, merit, results. <br/> <br/>

<span className='text-red-600'>
Reversed Card: <br />

</span>
All the negative aspects of acting are exalted; for example, it may mean: acting negatively,<br/> <br/>
 too quickly, and acting without thinking, seeking status, lack of confidence in one&apos;s own <br/> <br/>
 capabilities that are instead effective, misbehaving, obsession with material results while neglecting true values.<br/> <br/>
</p> 
                {/* Rest of the text */}
            </div>

            {/* Section 2 with Card 2 */}
            <div id="section2" className="text-center  pt-20 ">
            <Image src="/Arcana2.jpg" alt="Arcana 1" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3  ml-14vw mr-14vw">
                <p>2. The High Priestess card represents serenity, knowledge, faith and loyalty, values and moral rectitude.<br/> <br/>

It often refers to a female figure who is reliable and sincere.

It is undoubtedly a positive card.<br/> <br/>

<span className='text-red-600'>
Reversed Card: <br />


</span>
 Appear conceited and presumptuous, use information for questionable ends, traps laid by a very intelligent woman.

 </p>
            </div>

            {/* Section 3 with Card 3 */}
            <div id="section3" className="text-center  pt-20 ">
            <Image src="/Arcana3.jpg" alt="Arcana 1" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
                <p>
                3. The Empress indicates stability, strength, and protection.<br/> <br/>

These concepts are clearly symbolized by: the throne, the scepter, and the shield.<br/> <br/>

The Empress represents inner strength, willpower, and authority over things.<br/> <br/>

She can represent a strong outsider who helps us in a specific situation, a support upon which we can rely, a point of stability and strength in our favor.<br/> <br/>

<span className='text-red-600'>
Reversed Card: <br />

</span>
Rigidity in morals and in action, an excess of drastic measures, excessive protective instinct towards another person, struggling to maintain current status.
                </p> <br/> <br/>
            </div>

          
             <div id="section4" className="text-center  pt-20 ">
            <Image src="/Arcana4.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
                <p>
                4. The Emperor in the Tarot symbolizes strength, authority, security, power, wealth, charisma, virility, knowledge, and fortitude.<br/> <br/>

The Emperor wields the utmost earthly power, and at the same time is a wise, intelligent, and often just figure.<br/> <br/>

<span className='text-red-600'>
Reversed Card: <br />

</span>
Rigidity, arrogance, severity, taking drastic means, excessive use of force.


                </p> <br/> <br/>
            </div>
       
            <div id="section5" className="text-center  pt-20 ">
            <Image src="/Arcana5.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
         <p>5. The Hierophant symbolizes sound, selfless advice, the approval of others, well-deserved success, a faithful and loyal person upon which one can rely.<br/> <br/>

         The Hierophant can represent an outsider, a mentor, a figure we respect and can follow as a role model.<br/> <br/>

         <span className='text-red-600'>
Reversed Card: <br />

</span>
Giving too much importance to the approval of others, not making decisions on your own, always following the crowd without having the strength to sustain our true positions.

In some cases, it may also mean excessive moralism.</p> <br/> <br/>
            </div>
       


            <div id="section6" className="text-center  pt-20 ">
            <Image src="/Arcana6.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
              <p>6. The symbolism of the card is obvious: love.<br/> <br/>

Other meanings of the card of The Lovers may be: desire for true love, physical attraction that transforms into spiritual attraction, positive temptations.<br/> <br/>

<span className='text-red-600'>
Reversed Card: <br />

</span>
Too much love can be oppressive, a union that is not positive, separation and break-up, negative temptation, even going as far as infidelity.</p>
            </div>






            <div id="section7" className="text-center  pt-20 ">
            <Image src="/Arcana7.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
              <p>7. The Chariot predicts success in a specific situation.

The success will be clear and powerful, transmitting complete satisfaction and glory. <br/> <br/>

<span className='text-red-600'>
Reversed Card: <br />

</span>
Success is a double-edged sword, and as such success must be managed and guided. <br/> <br/>

A person who cannot drive success, in addition to failing to enjoy it, may risk negative effects. <br/> <br/>

The Chariot reversed may also symbolize excessive boasting of one&apos;s own success with others, thereby generating dislike or envy.</p> <br/> <br/>
            </div>




            <div id="section8" className="text-center  pt-20 ">
            <Image src="/Arcana8.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>8. Justice represents fairness and rectitude, but also a rendering of accounts, a test, passing a test, or virtue. <br/> <br/>

               <span className='text-red-600'>
Reversed Card: <br />

</span>
Upset balance, injustice, excessive severity, unfavorable evaluation.</p>
            </div>


            <div id="section9" className="text-center  pt-20 ">
            <Image src="/Arcana9.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>9. The Hermit is the symbol of wisdom.<br/> <br/>


The symbol for wisdom is either the lantern he holds in his hand - which illuminates the reality of the facts - or the figure of The Hermit himself.<br/> <br/>


The wisdom of The Hermit in the Tarot is also intended as caution, for example, in evaluating where we are going and what we are doing.<br/> <br/>


It also means an inner search and reflecting on the situations indicated by the nearby cards.<br/> <br/>


A desire to discover the truth, seeking the truth.<br/> <br/>


<span className='text-red-600'>
Reversed Card: <br />

</span>
Excessive caution, excessive isolation from others, excessive meditation and too little action, recklessness, poor judgment concerning what one is doing.<br/> <br/>


Not having understood what is actually going on and who can be trusted.</p>
            </div>

            <div id="section10" className="text-center  pt-20 ">
            <Image src="/Arcana10.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>10. This card reminds us of the precariousness of situations destined to evolve and change. <br/> <br/>

The crucial point is that things can evolve for the better, but also worsen. <br/> <br/>

The card refers to conditions of precarious balance. <br/> <br/>

In general, the Wheel of Fortune is more of a positive card than a negative one; in fact, change is always a fruitful opportunity for those who know how to grasp it. <br/> <br/>

<span className='text-red-600'>
Reversed Card: <br />

</span>
Changes for the worse in a situation, bad luck. <br/> <br/>

Slow to exploit change as an opportunity.

</p>
            </div>

            <div id="section11" className="text-center  pt-20 ">
            <Image src="/Arcana11.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
                <p>11. The card symbolizes brute strength (the lion) conquered by intelligence. <br/> <br/>

It therefore reminds us to use our own intelligence to resolve situations, without taking drastic measures, rash solutions, or resorting to brute strength. <br/> <br/>

The card of Strength also indicates success in resolving situations thanks to one&apos;s own inner strength, courage, and astuteness. <br/> <br/>

<span className='text-red-600'>
Reversed Card: <br />

</span>
Poor results due to an excessive use of force or an impulsive reaction, without having reflected first. <br/> <br/>

Lack of time to reflect - overcome by events - and consequential wrong actions.</p>
            </div>

            <div id="section12" className="text-center  pt-20 ">
            <Image src="/Arcana12.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
            <p>12. At first glance, this card seems to transmit a negative situation of immobility, but at a closer look, 
                we understand that it is instead the situation of a person who refuses to struggle uselessly and waits for events to change, 
                totally aware that an unfavorable situation is only temporary. <br/> <br/>

The card symbolizes a sacrifice, an unfavorable position to be tolerated in order to reach an objective. <br/> <br/>

Major efforts are necessary, as are sacrifices, and having to overcome difficult trials. <br/> <br/>

It will be necessary to make the best of a bad situation, in that by reacting instinctively and incorrectly, 
this temporarily difficult situation risks becoming a permanent condition. <br/> <br/>

One must make sacrifices, be clear-headed under difficult conditions, and know how to be patient. <br/> <br/>

Temporary sacrifice, in order to later improve one&apos;s own situation. <br/> <br/>

<span className='text-red-600'>
Reversed Card: <br />

</span>
Negative reactions to temporarily difficult positions. <br/> <br/>

Useless efforts to change a situation that calls for only one course of action: waiting.</p>
            </div>

            <div id="section13" className="text-center  pt-20 ">
            <Image src="/Arcana13.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               
               <p>13. Death symbolizes a phase of the Cycle of Life, a traumatic phase that precedes a new birth. <br/> <br/>

A figure so frightening does not therefore necessarily mean that Death is a card that bears misfortune;
 in fact, its meaning is mainly that of change, of the conclusion of a cycle, and subsequent renewal.<br/> <br/>

Death means the end of the present situation, perhaps in a traumatic way, and the new situation that will follow.<br/> <br/>

Death can also concern the end of a negative cycle.<br/> <br/>

Obviously, this card - when associated with other unfavorable cards - contributes to outlining a not very positive picture.<br/> <br/>

<span className='text-red-600'>
Reversed Card: <br />

</span> 
Bad ending to a situation, misfortune.</p>
            </div>

            <div id="section14" className="text-center  pt-20 ">
            <Image src="/Arcana14.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
             <p>14. The card of Temperance calls for moderation.<br/> <br/>

As in the past, wine was diluted with water; likewise, excesses should be avoided in life.<br/> <br/>

We must seek moderation, self-control, and we must relax.<br/> <br/>

It may also mean: a balanced approach is being taken in a certain situation; the right balance must be maintained.<br/> <br/>

<span className='text-red-600'>
Reversed Card: <br />

</span>
Lack of moderation, excesses.<br/> <br/>

A situation is not being approached with the right balance; the wrong attitude is being manifested.

</p>
            </div>

            <div id="section15" className="text-center  pt-20 ">
            <Image src="/Arcana15.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className=" flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
             <p>15. The Devil is the most negative card of the Tarot. <br/> <br/>

It can symbolize evil or danger. <br/> <br/>

Even immorality, degeneration, malice, and various vices can be associated with this card. <br/> <br/>

<span className='text-red-600'>
Reversed Card: <br />

</span>
Pure evil. <br/> <br/>

In rare cases, it may refer to unbridled passion. <br/> <br/>

In other cases, it may refer to the end of a dangerous situation.</p>
            </div>


            <div id="section16" className="text-center  pt-20 ">
            <Image src="/Arcana16.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
              <p>16. The Tower of the Tarot represents the punishment of arrogance. <br/> <br/>


It is an unfavorable card that announces failure due to one&apos;s own presumption and arrogance. <br/> <br/>


We will face harsh punishment due to our lack of humility.<br/> <br/>

We have stirred up envy and animosity, due to our ostentatious success or our ambition, and someone will see to it that it works against us.<br/> <br/>

The card of The Tower can also be merely a warning: be careful not to boast about your success; 
do not be presumptuous or arrogant with others, otherwise you may be punished harshly.<br/> <br/>

<span className='text-red-600'>
Reversed Card: <br />

</span>
Extreme arrogance, ostentation, or ambition. <br/> <br/>

Extreme animosity from someone who will stop at nothing to put obstacles in your path.<br/> <br/>

Losses.</p>
            </div>


            <div id="section17" className="text-center  pt-20 ">
            <Image src="/Arcana17.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>17. The card of The Star is undoubtedly positive.<br/> <br/>

We must be optimistic because the stars are on our side and shining down on us benevolently.<br/> <br/>

We have the blessing of the heavens and the stars to illuminate our path.<br/> <br/>

An abundance of ideas and favorable circumstances.<br/> <br/>

This card has a positive influence on the cards around it and on the situations they refer to.<br/> <br/>

The Star does not necessarily indicate material success in a specific action, but rather that we will find joy, good spirits, and feel gratified and content.<br/> <br/>

Everything is in place to guarantee our happiness.<br/> <br/>

<span className='text-red-600'>
Reversed Card: <br />

</span> 
A favorable situation that was not grasped, opportunities not exploited.<br/> <br/>

Excessive pessimism even when the situation is not so serious.</p>
            </div>

            <div id="section18" className="text-center  pt-20 ">
            <Image src="/Arcana18.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
                <p>18. The iconography of the card clearly evokes its meaning: there is a sinister and obscure atmosphere brimming with deception.<br/> <br/>

If caution is not taken, mistakes will be made; outside circumstances are unfavorable, tempting, and deceptive.<br/> <br/>

It is however possible to remain unscathed, but only by being astute and skillful.<br/> <br/>

The moon rays conceal the traps and perils of dangerous lands; it will not be simple to find your way and avoid making mistakes.<br/> <br/>

Someone is deceiving you or is speaking behind your back.<br/> <br/>

Unfavorable circumstances, hidden perils, trickery, deceitful people, enemies disguised as friends.<br/> <br/>

<span className='text-red-600'>
Reversed Card: <br />

</span>
You are being deceived. Very dangerous circumstances in the near future.</p>
            </div>


            <div id="section19" className="text-center  pt-20 ">
            <Image src="/Arcana19.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
              <p>19. The sunlight returns to illuminate our path and eliminate the perils of darkness.<br/> <br/>

Now our path is brighter and free from dangers.<br/> <br/>

A period of serenity and happiness awaits.<br/> <br/>

After difficult periods (darkness), everything is taking a turn for the better.<br/> <br/>

Great personal gratification because a positive moment follows less fortunate ones.<br/> <br/>

<span className='text-red-600'>
Reversed Card: <br />

</span>
A negative situation delays a turn for the better.<br/> <br/>

It is difficult to find joy and be light hearted even when faced with positive situations.

</p>
            </div>


            <div id="section20" className="text-center  pt-20 ">
            <Image src="/Arcana20.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>20. Judgement is a card of renewal, evidently a situation is changing.<br/> <br/>

The situation changes because the moment of the rendering of accounts has arrived.<br/> <br/>

One can no longer be idle or postpone matters, because the rendering of the accounts must be faced head on and the relative consequences must be paid.<br/> <br/>

Judgement may also represent the need to free oneself from material obsessions and rediscover the true values that actually make us happy.<br/> <br/>

You will pay for your misdeeds; closure of a situation; judgment.<br/> <br/>

<span className='text-red-600'>
Reversed Card: <br />

</span>
An unfavorable rendering of accounts.<br/> <br/>

Punishment suffered.<br/> <br/>

Misdeeds that are discovered and punished.<br/> <br/>

Someone discovers that you have been at fault.</p>
            </div>
            <div id="section21" className="text-center  pt-20 ">
            <Image src="/Arcana21.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>21. The World is one of the most positive cards of the Tarot; it represents purity and harmony, creation and human knowledge.<br/> <br/>

Objectives will be reached and success will be gained in what you are doing.<br/> <br/>

You will be prolific.<br/> <br/>

You will attain inner serenity.<br/> <br/>

You will learn to feel gratified in your situation and to enjoy what you have.<br/> <br/>

<span className='text-red-600'>
Reversed Card: <br />

</span>
You will achieve success, but not by acting appropriately.<br/> <br/>

There will be some inappropriate behavior, but in spite of this, everything will go well.</p>
            </div>

            <div id="section22" className="text-center  pt-20 ">
            <Image src="/Arcana22.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
                <p>0. The card of The Fool may have a double meaning: both positive and negative.<br/> <br/>

The positive meaning is to encourage us to let ourselves go and live freely.<br/> <br/>

We should free ourselves from the excess of logic, rationality, and do what we like to do best.<br/> <br/>

We then live “as fools”, breaking the rules that others have imposed on us while doing what makes us feel better, 
even if it goes against common sense; the important thing is that for us it is positive and gratifying.<br/> <br/>

Otherwise: creativity and genius (often misunderstood).<br/> <br/>

The negative interpretation of the card, instead, concerns reckless actions, carried out irrationally, “like a fool”.<br/> <br/>

A person who has acted irresponsibly, who needs to start over again. Otherwise: a lack of self-respect; letting oneself be passively led on by events.<br/> <br/>

<span className='text-red-600'>
Reversed Card: <br />

</span>
Irresponsibility, irrationality, obsession, immaturity, lack of logic, acting according to totally mistaken instincts, lack of guidelines.</p>
            </div><br/> <br/><br/> <br/>


            <h1 className="text-2xl text-center font-bold bg-custom-blue dark:bg-custom-purple text-gray-600 dark:text-white mb-1 p-3 mt-20">
            THE SUIT OF WANDS
        </h1>


            <div id="section23" className="text-center  pt-20 ">
            <Image src="/Arcana23.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
            <p>
            Creativity, initiative, power, strength, enterprise. Creation of new things, production of new ideas, profitable deeds. <br /><br />

<span className='text-red-600'>
Reversed Card: <br />

</span>

Making mistakes, failing to reach objectives, decadence.
            </p>
            </div>

            <div id="section24" className="text-center  pt-20 ">
            <Image src="/Arcana24.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>A positive and strong union. Strong collaboration in a project, an alliance. A person to be counted on, supportive.

               <br /><br /> <span className='text-red-600'>
Reversed Card: <br />

</span>

A couple in conflict. Confrontations with people close to us. Ties that are too close, oppressive.</p>
            </div>

            <div id="section25" className="text-center  pt-20 ">
            <Image src="/Arcana25.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>Perfect action. Protection towards us. The three wands form a sort of shield to protect us.

               <br /><br /> <span className='text-red-600'>
Reversed Card: <br />

</span>

Needing protection, support.</p>
            </div>

            <div id="section26" className="text-center  pt-20 ">
            <Image src="/Arcana26.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>Symmetry and harmony in life. Stability regained, relaxation. Small gratifying successes.

               <br /><br /> <span className='text-red-600'>
Reversed Card: <br />

</span>

An unjustified lack of tranquility.</p>
            </div>

            <div id="section27" className="text-center  pt-20 ">
            <Image src="/Arcana27.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>Instability, a tipping of the scales, dynamism.

               <br /><br /> <span className='text-red-600'>
Reversed Card: <br />

</span>

Overly impetuous, a dispute, excessive desire.</p>
            </div>

            <div id="section28" className="text-center  pt-20 ">
            <Image src="/Arcana28.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>Generally positive situation for our course of actions, favorable conditions, a solid base for the future.

               <br /><br /> <span className='text-red-600'>
Reversed Card: <br />

</span>

Certainties at risk, status and security in danger.</p>
            </div>

            <div id="section29" className="text-center  pt-20 ">
            <Image src="/Arcana29.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>A situation changes drastically, unexpected positive surprises.

               <br /><br /> <span className='text-red-600'>
Reversed Card: <br />

</span>

Excess vices or even virtues.</p>
            </div>

            <div id="section30" className="text-center  pt-20 ">
            <Image src="/Arcana30.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
            <p>The card of balance. In spite of our actions the situation remains the same. The situation is positive and tends to remain so.

            <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

A stagnant situation.</p>

 
            </div>

            <div id="section31" className="text-center  pt-20 ">
            <Image src="/Arcana31.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
              <p>A perfectly executed deed (the Wands are the suit of action, and nine is the most perfect number because it is the multiplication of three times three, a number that is already perfect in and of itself). An excellent idea.

              <br /><br /> <span className='text-red-600'>
Reversed Card: <br />

</span>

Envy or jealousy towards us.</p>
            </div>

            <div id="section32" className="text-center  pt-20 ">
            <Image src="/Arcana32.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>Giving all our strength to conclude our actions. Energy and dynamism.

               <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

Excess zeal, excessive restlessness that annoys others.</p>
            </div>

            <div id="section33" className="text-center  pt-20 ">
            <Image src="/Arcana33.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
                <p>Youthful enthusiasm, headstrong yet positive action. A person who is younger than us and positively enthusiastic (possibly a man or a woman).

                <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

Bad news. Errors caused by inexperience. A young rebel.

 </p>
            </div>

            <div id="section34" className="text-center  pt-20 ">
            <Image src="/Arcana34.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>A highly successful action. A person who feels protective towards us, ready to defend us in a concrete fashion. Deserved success.

               <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

Arrogance, threats, conflicts, quarrels.

 </p>
            </div>

            <div id="section35" className="text-center  pt-20 ">
            <Image src="/Arcana35.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>An extraordinary woman, charismatic and of great influence. A woman who is trusted and tolerant, of strong values, altruistic, successful. A person who is ready to help and is sensitive. Likelihood of unexpected assistance, tangible support from outside.

               <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

A person with a secret agenda, a very astute and dangerous woman.

 </p>
            </div>

            <div id="section36" className="text-center  pt-20 ">
            <Image src="/Arcana36.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
              <p>Power acquired through hard work. An upright man, tolerant in spite of his own strength. A man of success, mature and intelligent, sure of himself to the point of not having to flaunt anything.

              <br /><br /> <span className='text-red-600'>
Reversed Card: <br />

</span>

A severe man. Excessively rigid.</p>
            </div>

            <br /><br /> <br /><br />  <h1 className="text-2xl text-center font-bold bg-custom-blue dark:bg-custom-purple text-gray-600 dark:text-white mb-1 p-3 mt-20">
            THE SUIT OF CUPS
        </h1>

            <div id="section37" className="text-center  pt-20 ">
            <Image src="/Arcana37.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>Maximum fertility and joy of living. Enormous satisfactions and strong feelings are on the way.

               <br /><br /> <span className='text-red-600'>
Reversed Card: <br />

</span>

An opportunity wasted, a relationship thrown to the wind, a waste of resources, disappointment.

 </p>
            </div>

            <div id="section38" className="text-center  pt-20 ">
            <Image src="/Arcana38.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
              <p>Union. A close tie with another person. A prolific relationship. Love.

              <br /><br /> <span className='text-red-600'>
Reversed Card: <br />

</span>

A close tie with another person is weakening. A couple in conflict. A relationship is tossed aside.</p>
            </div>

            <div id="section39" className="text-center  pt-20 ">
            <Image src="/Arcana39.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
                <p>A perfect understanding. Profitable and fully gratifying affairs. Total harmony and happiness. The birth of an opportunity.

                <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

New opportunities on the horizon, but it will be difficult to take advantage of them.</p>
            </div>

            <div id="section40" className="text-center  pt-20 ">
            <Image src="/Arcana40.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
              <p>Emotional stability. Positive stability. Pleasure rediscovered in your everyday life.

              <br /><br /> <span className='text-red-600'>
Reversed Card: <br />

</span>

Lack of emotional stability. Ups and downs.</p>
            </div>

            <div id="section41" className="text-center  pt-20 ">
            <Image src="/Arcana41.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
                <p>Good news. New opportunities to be seized, quickly however, because they will not last long.

                <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

Opportunities not acted upon, loss of important opportunities that would finally have led to great personal satisfaction.</p>
            </div>

            <div id="section42" className="text-center  pt-20 ">
            <Image src="/Arcana42.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>The serenity of the past may return. Pleasant memories come to mind, making us reflect on our situation, stimulating our short-term future plans.

               <br /><br /> <span className='text-red-600'>
Reversed Card: <br />

</span>

Painful memories. Not succeeding in eliminating a painful memory from our thoughts.</p>
            </div>

            <div id="section43" className="text-center  pt-20 ">
            <Image src="/Arcana43.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
                <p>What seemed like it would never come, will finally arrive. A magical time.

                <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

Almost a curse, we are never allowed to find happiness.</p>
            </div>

            <div id="section44" className="text-center  pt-20 ">
            <Image src="/Arcana44.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
              <p>An opportunity to reflect on things. A sound foundation for creating something together with another person.

              <br /><br /> <span className='text-red-600'>
Reversed Card: <br />

</span>

A risk of a situation crumbling although it seemed strong and sound.</p>
            </div>

            <div id="section45" className="text-center  pt-20 ">
            <Image src="/Arcana45.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>A moment of utmost personal satisfaction, in terms of both love and career. New and worthwhile opportunities to be seized. Things could not be better.

               <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

Errors in managing a situation that would have been completely favorable. In spite of fairly good results, more could have been attained.</p>
            </div>

            <div id="section46" className="text-center  pt-20 ">
            <Image src="/Arcana46.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
                <p>The ultimate serenity of the soul and willingness to love. Great inner richness that finally generates results and will be appreciated by others ... and by some in a very special way. We are finally attractive thanks to our inner beauty.

                <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

Great potential that is not exploited due only to the fact that we do not believe sufficiently in ourselves and in our charm over others.</p>
            </div>

            <div id="section47" className="text-center  pt-20 ">
            <Image src="/Arcana47.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
              <p>A persistent attraction and fantasies involving a very attractive person who has made an impression on us. An attractive young person.

              <br /><br /> <span className='text-red-600'>
Reversed Card: <br />

</span>

A ruthless person, betrayal in love, infidelity, real intentions are hidden.</p>
            </div>

            <div id="section48" className="text-center  pt-20 ">
            <Image src="/Arcana48.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
                <p>Vitality in love; a renewal or rebirth of love. Rediscovering latent feelings; a desire to meet new and dynamic people.

                <br /><br />   <span className='text-red-600'>
Reversed Card: <br />

</span>

Jealousy, turbulent love, betrayal.</p>
            </div>

            <div id="section49" className="text-center  pt-20 ">
            <Image src="/Arcana49.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>A woman with a strong maternal instinct; a highly intelligent and capable woman. A woman who loves us unselfishly and who always give sound advice. A woman who sacrifices herself for us. A woman who wields great influence over us.

               <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

An oppressive female figure; a rigid woman who restricts us.</p>
            </div>

            <div id="section50" className="text-center  pt-20 ">
            <Image src="/Arcana50.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>A charismatic man, a man who loves us unselfishly and who will always be a true guide.

               <br /><br /> <span className='text-red-600'>
Reversed Card: <br />

</span>

A man who is too severe with us, a man who is overprotective.</p>
            </div>


            <br /><br /> <br /><br />  <h1 className="text-2xl text-center font-bold bg-custom-blue dark:bg-custom-purple text-gray-600 dark:text-white mb-1 p-3 mt-20">
            THE SUIT OF SWORDS
        </h1>

            <div id="section51" className="text-center  pt-20 ">
            <Image src="/Arcana51.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
                <p>Strength and ambition. Fearless, bold. Justice will be served.

                <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

Appearing as presumptuous and arrogant. Taking justice into our own hands.</p>
            </div>

            <div id="section52" className="text-center  pt-20 ">
            <Image src="/Arcana52.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
                <p>A worthy ally who will fight. A loyal person.

                <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

A conflict, duel. Conflicts with a friend.</p>
            </div>

            <div id="section53" className="text-center  pt-20 ">
            <Image src="/Arcana53.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>Break-up of a relationship or partnership. The break-up is not necessarily negative.

               <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

A traumatic detachment, a dramatic break-up.</p>
            </div>

            <div id="section54" className="text-center  pt-20 ">
            <Image src="/Arcana54.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>Solitude and inner conflict. Restrictions, obstacles.

               <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

Abandon. Obsession.</p>
            </div>

            <div id="section55" className="text-center  pt-20 ">
            <Image src="/Arcana55.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
              <p>A serious loss. Anxiety and loss of rationality and tranquility.

              <br /><br /> <span className='text-red-600'>
Reversed Card: <br />

</span>

Strong pain, serious worries, a sensation of having no way out.</p>
            </div>

            <div id="section56" className="text-center  pt-20 ">
            <Image src="/Arcana56.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
                <p>A path, journey, decision. A decision to be taken that gives rise to anxiety and restlessness.

                <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

A wrong choice, a decision taken in haste.</p>
            </div>

            <div id="section57" className="text-center  pt-20 ">
            <Image src="/Arcana57.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
                <p>The end of the old road. A new project that requires much energy, a new and ambitious project.

                <br /><br />   <span className='text-red-600'>
Reversed Card: <br />

</span>

Obstacle, a new risky project.

</p>
            </div>

            <div id="section58" className="text-center  pt-20 ">
            <Image src="/Arcana58.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>A situation that requires much energy. Good results, provided that all our energy is invested in the project.

               <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

Opposition, misunderstandings.</p>
            </div>

            <div id="section59" className="text-center  pt-20 ">
            <Image src="/Arcana59.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
                <p>Positive ambitions, winning drive. Handling oneself deftly to avoid obstacles.

                <br /><br /> <span className='text-red-600'>
Reversed Card: <br />

</span>

Numerous pitfalls, hatred.</p>
            </div>

            <div id="section60" className="text-center  pt-20 ">
            <Image src="/Arcana60.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>The utmost desire to win, to conquer, and to profit at all costs.

               <br /><br /> <span className='text-red-600'>
Reversed Card: <br />

</span>

Profits and advantages from dishonest deeds. Authority earned to the detriment of others.</p>
            </div>

            <div id="section61" className="text-center  pt-20 ">
            <Image src="/Arcana61.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>Satisfaction from misbehavior. Forbidden attraction toward another person. Immoral deeds or those that go against common sense, but highly gratifying for their rarity and the temptation of the forbidden.

               <br /><br /> <span className='text-red-600'>
Reversed Card: <br />

</span>

Bad companions, dangerous companions.</p>
            </div>

            <div id="section62" className="text-center  pt-20 ">
            <Image src="/Arcana62.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
                <p>Positive anger and aggressiveness. A person ready to defend us, even if he or she acts very strongly.

                <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

Aggressiveness. A person aggressive towards us.</p>
            </div>

            <div id="section63" className="text-center  pt-20 ">
            <Image src="/Arcana63.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>A woman to be taken as a role model and whose advice should be heeded if we want to improve our situation. A loyal and combative woman.

               <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

A woman who may be setting a trap for us.</p>
            </div>

            <div id="section64" className="text-center  pt-20 ">
            <Image src="/Arcana64.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
                <p>An important person, a potential ally, a person who stimulates us and motivates us to act.

                <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

A person who can hinder us.</p>
            </div>


            <br /><br /> <br /><br />  <h1 className="text-2xl text-center font-bold bg-custom-blue dark:bg-custom-purple text-gray-600 dark:text-white mb-1 p-3 mt-20">
            THE SUIT OF PENTACLES
        </h1>

            <div id="section65" className="text-center  pt-20 ">
            <Image src="/Arcana65.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
                <p>A realization of desires. Happiness, and even euphoria. An extremely positive card, especially from an economic point of view, but not only.

                <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

Excessive desire for money, greed.

 </p>
            </div>

            <div id="section66" className="text-center  pt-20 ">
            <Image src="/Arcana66.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
                <p>Business dealings. Both the positive and negative sides of money. A good partner for business deals.

                <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

A disturbed personality, opposing tensions, moral doubts.</p>
            </div>

            <div id="section67" className="text-center  pt-20 ">
            <Image src="/Arcana67.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
                <p>A positive card, heralding a happy life; sound business dealings, good situations all around. Excellent overall situation for reaching self-gratification.

                <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

A very positive opportunity not seized. The situation is still positive, but could have been much better.</p>
            </div>

            <div id="section68" className="text-center  pt-20 ">
            <Image src="/Arcana68.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
                <p>Stability in the management of resources. Stability in all aspects of life.

                <br /><br />   <span className='text-red-600'>
Reversed Card: <br />

</span>

A stagnant economic situation, lack of enterprise.</p>
            </div>

            <div id="section69" className="text-center  pt-20 ">
            <Image src="/Arcana69.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>Dynamism. Important achievements, not necessarily material, on the horizon. A happy time when we are appreciated and attractive to others.

               <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

Only material successes.</p>
            </div>

            <div id="section70" className="text-center  pt-20 ">
            <Image src="/Arcana70.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
                <p>Unexpected generosity from others, unexpected gifts, luck and stability, material and general well-being.

                <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

Doubts, a precarious situation.</p>
            </div>

            <div id="section71" className="text-center  pt-20 ">
            <Image src="/Arcana71.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
                <p>Excellent results, an objective attained, we spark positive curiosity and admiration in others.

                <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

We do not realize who admires us.</p>
            </div>

            <div id="section72" className="text-center  pt-20 ">
            <Image src="/Arcana72.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>We gain serenity from a positive situation. We realize that material goods are not so important for our happiness and the happiness of others.

               <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

Feelings against us. A person who is unstable towards us.</p>
            </div>

            <div id="section73" className="text-center  pt-20 ">
            <Image src="/Arcana73.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>Economic security. Our strong points are finally truly recognized and appreciated.

               <br /><br /> <span className='text-red-600'>
Reversed Card: <br />

</span>

Be careful in making a decision. Personal achievements do not bring happiness if obtained through a lack of respect for moral values: they only give rise to resentment and unpleasant observations.</p>
            </div>

            <div id="section74" className="text-center  pt-20 ">
            <Image src="/Arcana74.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>Truly great opportunities, but perhaps we will not be capable of seizing them.

               <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

Be careful! The higher you go, the harder you may fall.</p>
            </div>

            <div id="section75" className="text-center  pt-20 ">
            <Image src="/Arcana75.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>Good news in economic terms. A person who brings us good news.

               <br /><br /> <span className='text-red-600'>
Reversed Card: <br />

</span>

Bad news in economic terms. A person who brings us bad news.</p>
            </div>

            <div id="section76" className="text-center  pt-20 ">
            <Image src="/Arcana76.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
                <p>Success at work. Energy at work. A person who supports our business and is of great help in our personal success.

                <br /><br />   <span className='text-red-600'>
Reversed Card: <br />

</span>

Excessive desire for economic success, a person who works too hard pursuing money. A person who wants our money.</p>
            </div>

            <div id="section77" className="text-center  pt-20 ">
            <Image src="/Arcana77.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3   ml-14vw mr-14vw">
               <p>A generous woman. A rich woman in all senses, especially in her soul. A woman who can definitely help us find happiness.

               <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

A request for help denied, a generous and altruistic female figure.</p>
            </div>

            <div id="section78" className="text-center  pt-20 ">
            <Image src="/Arcana78.jpg" alt="Arcana 4" width={250} height={500} />
            </div>
               {/* Back Button */}
               <div className="mb-10">
                <Link href="/" passHref>
                    <button className="bg-purple-700 dark:bg-blue-900 text-white p-2 rounded hover:bg-purple-500 dark:hover:bg-blue-600 transition-colors">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center  bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-20 p-3   ml-14vw mr-14vw">
                <p>A rich and powerful man. A person with a strong sense of business. A charismatic boss. Possession of something valuable, even if not necessarily material in nature.

                <br /><br />  <span className='text-red-600'>
Reversed Card: <br />

</span>

A corrupt man, false, egoistic, and deceitful in pursuing his own ends.</p>




                <br/> <br/> <br/> <br/>
            </div>






       
        </div>


    );
};

export default Arcana;
