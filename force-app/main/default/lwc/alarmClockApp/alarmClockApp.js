import { LightningElement } from 'lwc';
import AlarmClockAssets from '@salesforce/resourceUrl/AlarmClockAssets'
// Example :- import TRAILHEAD_LOGO from '@salesforce/c/resourceUrl/trailhead_logo';
export default class AlarmClockApp extends LightningElement
{
     clockImage = AlarmClockAssets+'/AlarmClockAssets/clock.png'
      ringtone = new Audio (AlarmClockAssets+'/AlarmClockAssets/Clocksound.mp3')
    
     currentTime = ''
     hours=[]
     minutes=[]
     meridiens =['AM','PM']

     hourselected
     minselected
     meridienselected

     alarmTime
     isAlarmset =false
     
     isAlarmTriggered=false

     get isFieldNotSelected()
     {
         return !(this.hourselected && this.minselected && this.meridienselected)
     }

     get shakeImage()
     {
          return this.isAlarmTriggered ?'Shake':''
     }

connectedCallback()
{
     this.currentTimeHandler()
     this.createHourOptions()
     this.createMinuteOptions()
}

currentTimeHandler()
{
     setInterval(()=>{
     
     let dateTime = new Date()
     let hour = dateTime.getHours()
     let min = dateTime.getMinutes()
     let sec = dateTime.getSeconds()
     let ampm = "AM"
     if(hour == 0)
     {
          hour = 12
     }
     else if(hour >=12)
     {
          hour = hour - 12
          ampm = "PM"
     }
     hour = hour<10 ? "0"+hour : hour
     min = min<10 ? "0"+min :min
     sec = sec <10 ? "0"+sec :sec

      this.currentTime = `${hour}:${min}:${sec} ${ampm}`
      if(this.alarmTime === `${hour}:${min} ${ampm}`){
        console.log("Alarm Triggered!!")
        this.isAlarmTriggered =true
        this.ringtone.play()
        this.ringtone.loop =true
      }
    }, 1000)

     
}

createHourOptions()
{
     for(let i = 1; i<=12; i++)
     {
        let val = i<10 ?"0" +i : i  
        this.hours.push(val)
     }
}


createMinuteOptions()
{
     for(let i = 0; i<=59; i++)
     {
        let val = i<10 ?"0" +i : i  
        this.minutes.push(val)
     }
}

optionhandler(event)
{
     const {label,value}=event.detail

     if(label === "Hour(s)")
     {
          this.hourselected = value;
     }
     else if(label==="Minute(s)")
     {
          this.minselected = value;
     }
     else if(label==="AM/PM")
     {
          this.meridienselected =value;
     }
     else
     {

     }

     console.log('OUTPUT hourselected: ',this.hourselected );
     console.log('OUTPUT minselected : ',this.minselected);
     console.log('OUTPUT meridienselected : ',this.meridienselected)


}
setAlarmHandler()
{
     this.alarmTime = `${this.hourselected}:${this.minselected} ${this.meridienselected}`
     this.isAlarmset = true

     console.log('OUTPUT : Alaram set',this.alarmTime);
}

clearAlarmHandler()
{
     this.isAlarmset = false
     this.alarmTime =' '
     this.isAlarmTriggered=false
     this.ringtone.pause()
     const elements = this.template.querySelectorAll('c-clock-dropdown')
     Array.from(elements).forEach(element=>{
          element.reset("")
     })
}
}