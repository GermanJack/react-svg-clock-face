# react-svg-clock-face

usage:
import { Clock, Analogclock } from [package];

add <Analogclock /> will bring a clock face with default parameter

define an object of type Clock and add <Analogcloc [your object]/>

the clock face is painted on a canvas with size 600x600 px.
parameter of type Clock:

| parameter | type | comment | default |
| :--- | :--- | :--- | :--- |
| HourOffset | boolean | if true, the hour strokes are between the numbers | false |
| HourThickness | number | thikness of the hour strokes | 5 |
| HourOuterRadius | number | outer border for the hour strokes | 300 |
| HourOuterThickness | number | thinknes of a circle at the outer boarder | 1 |
| HourInnerRadius | number | inner border for the hour strokes | 250 |
| HourInnerThickness | number | thinknes of a circle at the inner boarder | 0 |
| MinuteThickness | number | thikness of the minute strokes | 2 |
| MinuteOuterRadius | number | outer border for the minutes strokes | 300 |
| MinuteOuterThickness | number | thinknes of a circle at the outer boarder | 1 |
| MinuteInnerRadius | number | inner border for the minutes strokes | 280 |
| MinuteInnerThickness | number | thinknes of a circle at the inner boarder | 1 |
| TextSize | number | just the font size | 50 |
| TextRadius | number | radius of an invisible circle for the center of the text | 220 |
| Font | string | name of the font family; <br>here you can use fonts on the webside imported with @font-face | Arial |
| Numbers | string | semicolon seperated text array to define own characters instaed of numbers | 1;2;3;4;5;6;7;8;9;10;11;12 |
| DrawHands | boolean | if false the hands are not drawn | true |
| CCW | boolean | counter clock wise direction | false |
| RoundText | boolean | paint the numbers vertical of along the circle | false |
| Twentyfour | boolean | paint a 24 hour clock instead a 12 h clock | false |
| HourHandLength | number | length of the hour hand | 150 |
| HourHandWidth | number | thikness of the hour hand | 20 |
| HourHandPointy | boolean | paint a pointy hour hand instaed a rectangle | true |
| HourHandColor | string | color of the hour hand | #0000ff |
| HourHandRadius | number | radius of the edges if the hour hand is a recangle | 0 |
| MinuteHandLength | number | length of the minutes hand | 250 |
| MinuteHandWidth | number | thikness of the minutes hand | 20 |
| MinuteHandPointy | boolean | paint a pointy minutes hand instaed a rectangle | true |
| MinuteHandColor | string | color of the minutes hand | #00ff00 |
| MinuteHandRadius | number | radius of the edges if the minutes hand is a recangle | 0 |
| SecondHandLength | number | length of the second hand | 250 |
| SecondHandWidth | number | thikness of the seconds hand | 4 |
| SecondHandPointy | boolean | paint a pointy seconds hand instaed a rectangle | false |
| SecondHandColor | string | color of the seconds hand | #ff0000 |
| SecondHandRadius | number | radius of the edges if the seconds hand is a recangle | 0 |
| Mode | number | 1 = draw actual time of the client; <br>2 = draw time provided by the parameter ValueDate; <br>3 = draw the time provided by the parameter ValueString | 1 |
| ValueString | string | "HH:MM:SS" or "HH:MM" (no scond hand is drawn) | 10:10:30 |
| ValueDate | Date | just provide new Date() | time at redering |
| ID | string | unique ID; necesary if you want place more than one clocks on a page | AnalogClock1 |
| Color | string | draw color | #ffffff |

