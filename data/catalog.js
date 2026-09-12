// PBS programming drawn from official PBS YouTube channels.
window.PBS_PROGRAMS={
  newsHour:{id:"PBS-NEWSHOUR",title:"PBS NewsHour",year:2026,era:"Current Affairs",collection:"PBS NewsHour · Full Broadcast",runtimeSeconds:3600,videoId:"98_ytqNoUto",cleared:true,watchUrl:"https://www.youtube.com/watch?v=98_ytqNoUto"},
  washingtonWeek:{id:"PBS-WW",title:"Washington Week with The Atlantic",year:2026,era:"Public Affairs",collection:"PBS · Full Episode",runtimeSeconds:1560,videoId:"GwP6-EvQJhE",cleared:true,watchUrl:"https://www.youtube.com/watch?v=GwP6-EvQJhE"},
  apollo:{id:"PBS-AE-APOLLO",title:"The Mission That Redefined Our View of Earth",year:2026,era:"American Experience",collection:"History · Full Documentary",runtimeSeconds:3600,videoId:"APpb4fX8RcY",cleared:true,watchUrl:"https://www.youtube.com/watch?v=APpb4fX8RcY"},
  bonnieClyde:{id:"PBS-AE-BC",title:"The Tragic Romance of Bonnie & Clyde",year:2026,era:"American Experience",collection:"History · Full Documentary",runtimeSeconds:3600,videoId:"fHCWbsRWvPc",cleared:true,watchUrl:"https://www.youtube.com/watch?v=fHCWbsRWvPc"},
  vicePresident:{id:"PBS-AE-VP",title:"The American Vice President",year:2024,era:"American Experience",collection:"Government · Full Documentary",runtimeSeconds:3600,videoId:"I7uXCTZOYMU",cleared:true,watchUrl:"https://www.youtube.com/watch?v=I7uXCTZOYMU"},
  spaceRace:{id:"PBS-AE-SPACE",title:"The Untold Story of the Space Race",year:2026,era:"American Experience",collection:"Science & History · Full Documentary",runtimeSeconds:3600,videoId:"uWmd-6vsdus",cleared:true,watchUrl:"https://www.youtube.com/watch?v=uWmd-6vsdus"},
  atomicBomb:{id:"PBS-NOVA-ATOM",title:"Why the U.S. Hid the Truth About the Atomic Bomb",year:2026,era:"NOVA",collection:"Science & History · Full Documentary",runtimeSeconds:3700,videoId:"Pp8mh8iZTe4",cleared:true,watchUrl:"https://www.youtube.com/watch?v=Pp8mh8iZTe4"},
  clinton:{id:"PBS-AE-CLINTON",title:"Clinton — Episode 1",year:2012,era:"American Experience",collection:"Biography · Full Documentary",runtimeSeconds:6600,videoId:"yQci_Z3DIrw",cleared:true,watchUrl:"https://www.youtube.com/watch?v=yQci_Z3DIrw"},
  flyWithMe:{id:"PBS-AE-FLY",title:"Fly With Me",year:2024,era:"American Experience",collection:"History · Full Documentary",runtimeSeconds:6900,videoId:"AN0BMDkeQrQ",cleared:true,watchUrl:"https://www.youtube.com/watch?v=AN0BMDkeQrQ"},
  poisonSquad:{id:"PBS-AE-POISON",title:"The Poison Squad",year:2020,era:"American Experience",collection:"Public Health · Full Documentary",runtimeSeconds:6600,videoId:"LXAQ_-Em89g",cleared:true,watchUrl:"https://www.youtube.com/watch?v=LXAQ_-Em89g"},
  raceUnderground:{id:"PBS-AE-TRANSIT",title:"The Race Underground",year:2017,era:"American Experience",collection:"Cities & Innovation · Full Documentary",runtimeSeconds:3300,videoId:"BnNw-og3wjM",cleared:true,watchUrl:"https://www.youtube.com/watch?v=BnNw-og3wjM"}
};
window.PBS_INLINE_KEYS=Object.keys(window.PBS_PROGRAMS);
const half=["newsHour","washingtonWeek"],docs=["apollo","bonnieClyde","vicePresident","spaceRace","atomicBomb","clinton","flyWithMe","poisonSquad","raceUnderground"];
window.PBS_DAY_TEMPLATE=[];
for(let minute=0,index=0;minute<1440;index++){
  const publicAffairs=index%4===0;
  const duration=publicAffairs?60:120;
  window.PBS_DAY_TEMPLATE.push({minute:minute,duration:Math.min(duration,1440-minute),choices:publicAffairs?half:docs});
  minute+=duration;
}
window.INFINITY_CHANNEL={id:"PBS",era:"Public media",reset:"12:00 AM viewer local time",feature:"Full documentaries and public-affairs programs"};
