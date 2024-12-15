export default class Clock {

  // Hour
  public HourOffset: boolean;
  public HourThickness: number;
  public HourOuterRadius: number;
  public HourOuterThickness: number;
  public HourInnerRadius: number;
  public HourInnerThickness: number;

  // Minutes
  public MinuteThickness: number;
  public MinuteOuterRadius: number;
  public MinuteOuterThickness: number;
  public MinuteInnerRadius: number;
  public MinuteInnerThickness: number;

  // Text
  public TextSize: number;
  public TextRadius: number;
  public Font: string;
  public Numbers: string;

  // options
  public DrawHands: boolean;
  public CCW: boolean;
  public RoundText: boolean;
  public Twentyfour: boolean;

  // hour hand
  public HourHandLength: number;
  public HourHandWidth: number;
  public HourHandPointy: boolean;
  public HourHandColor: string;
  public HourHandRadius: number;

  // minute hand
  public MinuteHandLength: number;
  public MinuteHandWidth: number;
  public MinuteHandPointy: boolean;
  public MinuteHandColor: string;
  public MinuteHandRadius: number;

  // second hand
  public SecondHandLength: number;
  public SecondHandWidth: number;
  public SecondHandPointy: boolean;
  public SecondHandColor: string;
  public SecondHandRadius: number;

  // mode 1 = actual time, 2 = value date, 3 = value string
  public Mode: number;

  // time "HH:mm:ss" or "hh:mm" or date
  public ValueString: string;
  public ValueDate: Date;
  public ID: string;

  // style
  public Color: string;
  
  constructor (
    ID_?: string,
    HourOffset_?: boolean,
    HourThickness_?: number,
    HourOuterRadius_?: number,
    HourOuterThickness_?: number,
    HourInnerRadius_?: number,
    HourInnerThickness_?: number,
    MinuteThickness_?: number,
    MinuteOuterRadius_?: number,
    MinuteOuterThickness_?: number,
    MinuteInnerRadius_?: number,
    MinuteInnerThickness_?: number,
    TextSize_?: number,
    TextRadius_?: number,
    Font_?: string,
    Numbers_?: string,
    DrawHands_?: boolean,
    CCW_?: boolean,
    RoundText_?: boolean,
    Twentyfour_?: boolean,
    HourHandLength_?: number,
    HourHandWidth_?: number,
    HourHandPointy_?: boolean,
    HourHandColor_?: string,
    HourHandRadius_?: number,
    MinuteHandLength_?: number,
    MinuteHandWidth_?: number,
    MinuteHandPointy_?: boolean,
    MinuteHandColor_?: string,
    MinuteHandRadius_?: number,
    SecondHandLength_?: number,
    SecondHandWidth_?: number,
    SecondHandPointy_?: boolean,
    SecondHandColor_?: string,
    SecondHandRadius_?: number,
    Mode_?: number,
    ValueString_?: string,
    ValueDate_?: Date,
    Color_?: string,
  )
  {    
    this.HourOffset = HourOffset_ ? HourOffset_ : false;
    this.HourThickness = HourThickness_ ? HourThickness_ : 5;
    this.HourOuterRadius = HourOuterRadius_ ? HourOuterRadius_ : 300;
    this.HourOuterThickness = HourOuterThickness_ ? HourOuterThickness_ : 1;
    this.HourInnerRadius = HourInnerRadius_ ? HourInnerRadius_ : 250;
    this.HourInnerThickness = HourInnerThickness_ ? HourInnerThickness_ : 0;

    this.MinuteThickness = MinuteThickness_ ? MinuteThickness_ : 2;
    this.MinuteOuterRadius = MinuteOuterRadius_ ? MinuteOuterRadius_ : 300;
    this.MinuteOuterThickness = MinuteOuterThickness_ ? MinuteOuterThickness_ : 1;
    this.MinuteInnerRadius = MinuteInnerRadius_ ? MinuteInnerRadius_ : 280;
    this.MinuteInnerThickness = MinuteInnerThickness_ ? MinuteInnerThickness_ : 1;

    this.TextSize = TextSize_ ? TextSize_ : 50;
    this.TextRadius = TextRadius_ ? TextRadius_ : 220;
    this.Font = Font_ ? Font_ : "Arial";
    this.Numbers = Numbers_ ? Numbers_ : "1;2;3;4;5;6;7;8;9;10;11;12";

    this.DrawHands = DrawHands_ ? DrawHands_ : true;
    this.CCW = CCW_ ? CCW_ : false;
    this.RoundText = RoundText_ ? RoundText_ : false;
    this.Twentyfour = Twentyfour_ ? Twentyfour_ : false;

    this.HourHandLength = HourHandLength_ ? HourHandLength_ : 150;
    this.HourHandWidth = HourHandWidth_ ? HourHandWidth_ : 20;
    this.HourHandPointy = HourHandPointy_ ? HourHandPointy_ : true;
    this.HourHandColor = HourHandColor_ ? HourHandColor_ : "#0000ff";
    this.HourHandRadius = HourHandRadius_ ? HourHandRadius_ : 0;

    this.MinuteHandLength = MinuteHandLength_ ? MinuteHandLength_ : 250;
    this.MinuteHandWidth = MinuteHandWidth_ ? MinuteHandWidth_ : 20;
    this.MinuteHandPointy = MinuteHandPointy_ ? MinuteHandPointy_ : true;
    this.MinuteHandColor = MinuteHandColor_ ? MinuteHandColor_ : "#00ff00";
    this.MinuteHandRadius = MinuteHandRadius_ ? MinuteHandRadius_ : 0;

    this.SecondHandLength = SecondHandLength_ ? SecondHandLength_ : 250;
    this.SecondHandWidth = SecondHandWidth_ ? SecondHandWidth_ : 4;
    this.SecondHandPointy = SecondHandPointy_ ? SecondHandPointy_ : false;
    this.SecondHandColor = SecondHandColor_ ? SecondHandColor_ : "#ff0000";
    this.SecondHandRadius = SecondHandRadius_ ? SecondHandRadius_ : 0;

    this.Mode = Mode_ ? Mode_ : 3;
    this.ValueString = ValueString_ ? ValueString_ : "10:10:30";
    this.ValueDate = ValueDate_ ? ValueDate_ : new Date();
    this.ID = ID_ ? ID_ : "AnalogClock1";
    this.Color = Color_ ? Color_ : '#ffffff';
  }
}