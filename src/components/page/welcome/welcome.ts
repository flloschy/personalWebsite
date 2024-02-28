import { dateToString, dateToTime, getMessage } from "$lib";
import { writable } from "svelte/store";

export const time = writable(dateToTime())
export const date = writable(dateToString())
export const text = writable(getMessage())


setInterval(() => {
    time.set(dateToTime())
    date.set(dateToString())
    text.set(getMessage())
}, 1000)