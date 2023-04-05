import { html } from "anchorsjs"

export const Counter=()=>{
    let Page=html/*html*/`
    <div class="counter">
        <button $class="isPositive" class="counter-button" $onclick="increase">Increase ({{count}})</button>
        <button $class="isNegative" class="counter-button" $onclick="decrease">Decrease ({{count}})</button>
    </div>
    `
    Page.states({
        count:0,
        increase(){
            this.count++
        },
        decrease(){
            this.count--
        },
        //class
        isNegative(){
            return this.count<0?"negative":null
        },
        isPositive(){
            return this.count>0?"positive":null
        }
    })
    return Page
}