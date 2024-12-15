import { memo, useCallback, useEffect, useMemo, useRef } from "react";
import { setHandsToTime, drawClock } from "./functions";
import Clock from "./Clock";
import { drawHand } from "./drawHands";
import React from "react";

interface IProps {
  Clock?: Clock;
}

const AnalogClock = (props: IProps) => {

  const SVGRef = useRef<SVGSVGElement>(null);

  const clock = useMemo(() => props.Clock ? props.Clock : new Clock(), [props.Clock]);
  
  const settime = useCallback((date: Date) => {
    if (clock.Mode === 1 || clock.Mode === 2) {
      // const dateDEshort = new Intl.DateTimeFormat('de-DE', {timeStyle: 'short'}).format(date);
      const dateDElong = new Intl.DateTimeFormat('de-DE', {timeStyle: 'long'}).format(date);
      // const dateENshort = new Intl.DateTimeFormat('en-US', {timeStyle: 'short'}).format(date);
      // const dateENlong = new Intl.DateTimeFormat('en-US', {timeStyle: 'long'}).format(date);
      
      const h = dateDElong.substring(0, 2);
      const m = dateDElong.substring(3, 5);
      const s = dateDElong.substring(6, 8);

      setHandsToTime(
        clock.ID,
        `${h}:${m}:${s}`, 
        clock.CCW, 
        clock.Twentyfour,
      );
    }
  }, [clock.CCW, clock.ID, clock.Mode, clock.Twentyfour]);

  useEffect(() => {
    const interval = setInterval(() => settime(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, [settime]);

  useEffect	(() => {
    drawClock(clock, SVGRef.current!);
  }, [clock])

  useEffect(() => {
    if (clock.Mode === 2) {
      drawHand("MinuteHand" + clock.ID, clock.MinuteHandLength, clock.MinuteHandWidth, clock.MinuteHandPointy, clock.MinuteHandColor, SVGRef.current!, clock.MinuteHandRadius, clock.DrawHands);
      drawHand("HourHand" + clock.ID, clock.HourHandLength, clock.HourHandWidth, clock.HourHandPointy, clock.HourHandColor, SVGRef.current!, clock.HourHandRadius, clock.DrawHands);
      drawHand("SecondHand" + clock.ID, clock.SecondHandLength, clock.SecondHandWidth, clock.SecondHandPointy, clock.SecondHandColor, SVGRef.current!, clock.SecondHandRadius, clock.DrawHands);

      settime(clock.ValueDate);
    }
  }, [clock, settime]);
  
  useEffect(() => {
    if (clock.Mode === 3) {
      drawHand("MinuteHand" + clock.ID, clock.MinuteHandLength, clock.MinuteHandWidth, clock.MinuteHandPointy, clock.MinuteHandColor, SVGRef.current!, clock.MinuteHandRadius, clock.DrawHands);
      drawHand("HourHand" + clock.ID, clock.HourHandLength, clock.HourHandWidth, clock.HourHandPointy, clock.HourHandColor, SVGRef.current!, clock.HourHandRadius, clock.DrawHands);
      
      let d = clock.ValueString;
      let imp: boolean = false;

      // check if 12h format
      if (d.toUpperCase().includes('M')) {
        imp = true;
      }

      d = imp ? d.substring(0,d.length - 3) : d;
      
      let h: string = "";
      let m: string = "";
      let s: string = "";

      if (d.includes(':')) {
        const t = d.split(":");

        if (t.length === 2) {
          h = t[0];
          m = t[1];
        } else {
          h = t[0];
          m = t[1];
          s = t[2];
        }
      } else {
        h = d.substring(0, 2);
        m = d.substring(3, 5);
        s = d.substring(6, 8);
      }

      const sCheck = parseInt(s, 10);

      let vt = "";
      if (isNaN(sCheck)) {
        vt = `${h}:${m}`;
      } else {
        vt = `${h}:${m}:${s}`;
      }

      if (!isNaN(sCheck)) {
        drawHand("SecondHand" + clock.ID, clock.SecondHandLength, clock.SecondHandWidth, clock.SecondHandPointy, clock.SecondHandColor, SVGRef.current!, clock.SecondHandRadius, clock.DrawHands);
      }

      setHandsToTime(
        clock.ID,
        vt, 
        clock.CCW, 
        clock.Twentyfour,
      );
    }
  }, [clock]);

  useEffect(() => {
    if (clock.Mode === 1) {
      drawHand("MinuteHand" + clock.ID, clock.MinuteHandLength, clock.MinuteHandWidth, clock.MinuteHandPointy, clock.MinuteHandColor, SVGRef.current!, clock.MinuteHandRadius, clock.DrawHands);
      drawHand("HourHand" + clock.ID, clock.HourHandLength, clock.HourHandWidth, clock.HourHandPointy, clock.HourHandColor, SVGRef.current!, clock.HourHandRadius, clock.DrawHands);
      drawHand("SecondHand" + clock.ID, clock.SecondHandLength, clock.SecondHandWidth, clock.SecondHandPointy, clock.SecondHandColor, SVGRef.current!, clock.SecondHandRadius, clock.DrawHands);
    }
  }, [clock.HourHandColor, clock.HourHandLength, clock.HourHandPointy, clock.HourHandRadius, clock.HourHandWidth, clock.ID, clock.MinuteHandColor, clock.MinuteHandLength, clock.MinuteHandPointy, clock.MinuteHandRadius, clock.MinuteHandWidth, clock.Mode, clock.SecondHandColor, clock.SecondHandLength, clock.SecondHandPointy, clock.SecondHandRadius, clock.SecondHandWidth, clock.DrawHands]);

  

  return (
    <div style={{backgroundColor: 'gray'}}>
      <svg ref={SVGRef} id={"svg" + clock.ID} width="100%" height="100%" viewBox="-300 -300 600 600">
        Sorry, your browser does not support inline SVG.
      </svg>
    </div>
  );
}

export default memo(AnalogClock);
