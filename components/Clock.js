import { html } from "anchorsjs"

export const Clock=()=>{
    let hour=()=>{
        return twoDigit(new Date().getHours())
    }
    let minute=()=>{
        return twoDigit(new Date().getMinutes())
    }
    let second=()=>{
        return twoDigit(new Date().getSeconds())
    }
    let twoDigit=(arg)=>{
        //1-9 => 01 02 ...
        return arg<10?"0"+arg:arg
    }
    
    //use functions for dynamic nodes
    let Page=html/*html*/`
    <div id="clock">
    <h1>${hour}:${minute}:${second}</h1>
    </div>
    `

    let interval=setInterval(()=>{
        //effect
        Page.update()
    },1000)
    
    //Unmount Lifecycle
    Page.onUnmount(()=>{
        clearInterval(interval)
        console.log("Clock Unmounted")
    })

    return Page;
}
