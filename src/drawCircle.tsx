import Point from './Point';
import Clock from './Clock';
import { setRangeMax, setRangeMin } from './functions';

function drawAllCircle(clock: Clock, SVG: SVGSVGElement): any {
  
  let divission = 12;
  if (clock.Twentyfour) {
      divission = 24;
  }

  drawCircle(clock.HourOuterRadius, clock.HourOuterThickness, SVG, clock.Color);
  drawCircle(clock.HourInnerRadius, clock.HourInnerThickness, SVG, clock.Color);
  drawCircle(clock.MinuteOuterRadius, clock.MinuteOuterThickness, SVG, clock.Color);
  drawCircle(clock.MinuteInnerRadius, clock.MinuteInnerThickness, SVG, clock.Color);

  // Minutenstriche
  drawLine(60, clock.MinuteThickness, clock.MinuteOuterRadius * 2, clock.MinuteInnerRadius * 2, false, SVG, clock.Color);
  // Stundenstriche
  drawLine(divission, clock.HourThickness, clock.HourOuterRadius * 2, clock.HourInnerRadius * 2, clock.HourOffset, SVG, clock.Color);


  drawNumber(
    clock.TextRadius * 2,
    divission,
    clock.TextSize,
    clock.CCW,
    clock.RoundText,
    clock.Font,
    clock.Numbers,
    SVG,
    clock.Color
  );

  // Logische valuee setzten
  setRangeMax('hir', clock.HourOuterRadius);
  setRangeMin('har', clock.HourInnerRadius);
  setRangeMax('mir', clock.MinuteOuterRadius);
  setRangeMin('mar', clock.MinuteInnerRadius);

  // return ret;
}

function drawCircle(radius: number, thikness: number, SVG: SVGSVGElement, color: string)
{
    const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("r", radius.toString());
    c.setAttribute("stroke-width", thikness.toString());
    c.setAttribute("stroke", color);
    c.setAttribute("cx", "0");
    c.setAttribute("cy", "0");
    c.setAttribute("fill", "transparent");

    SVG.appendChild(c);
}

function drawLine(divission: number, thickness: number, outerDiam: number, innerDiam: number, offset: boolean, SVG: SVGSVGElement, color: string)
{
  let angel: number;
  let pointA;
  let pointI;
  const divAngel = 360 / divission;

  for (let i: number = 0; i < divission; i++) {
      //angel errechnen
      if (offset) {
          angel = divAngel * i + divAngel / 2;
      }
      else {
          angel = divAngel * i;
      }

      pointA = CalcPoint(outerDiam, angel);
      pointI = CalcPoint(innerDiam, angel);

      const l = document.createElementNS("http://www.w3.org/2000/svg", "line");
      l.setAttribute("x1", pointA.x.toString());
      l.setAttribute("y1", pointA.y.toString());
      l.setAttribute("x2", pointI.x.toString());
      l.setAttribute("y2", pointI.y.toString());
      l.setAttribute("stroke", color);
      l.setAttribute("stroke-width", thickness.toString());
      
      SVG.appendChild(l);
  }
}

function CalcPoint(diameter: number, angel: number)
{
    const mit = 0;

    if (angel === 0) {
        angel = 360;
    }

    let x: number = 0;
    let y: number = 0;
    
    const radius = diameter / 2;

    // Grad in radian umrechnen
    const rwinkel = angel * (3.14 / 180);

    //rwinkel = angel * (3.141593 / 180);
    if (angel >= 1 && angel <= 90) {
        x = mit + (Math.sin(rwinkel) * radius);
        y = mit - (Math.cos(rwinkel) * radius);
    }
    else if (angel >= 91 && angel <= 180) {
        x = mit + (Math.sin(rwinkel) * radius);
        y = mit - (Math.cos(rwinkel) * radius);
    }
    else if (angel >= 181 && angel <= 270) {
        x = mit + (Math.sin(rwinkel) * radius);
        y = mit - (Math.cos(rwinkel) * radius);
    }
    else if (angel >= 271 && angel <= 360) {
        x = mit + (Math.sin(rwinkel) * radius);
        y = mit - (Math.cos(rwinkel) * radius);
    }

    return new Point(x, y);
}

function drawNumber(
    diameter: number, 
    division: number,
    fontSize: number,
    left: boolean,
    round: boolean = false,
    font: string,
    numbers: string,
    SVG: SVGSVGElement,
    color: string,
   ){
    let point;
    let angel;
    let divAngel;
    let drawStr = "";
    let j;
    
    let numberList = numbers.split(";");
    let numbersCount = numbers.length;


    divAngel = 360 / division;

    for (j = 0; j < numbersCount; ++j) {
      drawStr = numberList[j];

      if (left === true) {
          angel = 360 - divAngel * j - divAngel;
          if (angel === 0) { angel = 360; }
      }
      else {
          //angel errechnen
          angel = divAngel * j + divAngel;

      }

      //Punk zum Zeichnen ausrechnen
      point = CalcPoint(diameter, angel);

      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

      const fy = point.y + fontSize / 2.8;

      text.setAttribute('x', point.x.toString());
      text.setAttribute('y', fy.toString());
      text.style.fontFamily = font;
      text.setAttribute("font-size", fontSize.toString());
      text.setAttribute("fill", color);
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("alignment-baseline", "center");
      text.textContent = drawStr;
      if (round === true) {
          text.setAttribute("transform", "rotate(" + angel + "," + point.x + "," + point.y + ")");
      }

      SVG.appendChild(text);
    }
}

export { drawAllCircle };
