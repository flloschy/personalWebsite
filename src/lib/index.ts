// place files you want to import through the `$lib` alias in this folder.


export const dateToString = (date: Date=new Date) => date.toLocaleDateString()
export const dateToTime = (date: Date=new Date) => date.toLocaleTimeString()

export function getMessage(date: Date=new Date) {
    const hour = date.getHours()

    if (hour > 3 && hour < 6)
        return 'You should really sleep.'
    else if (hour < 12)
        return 'Have a nice morning?'
    else if (hour < 17)
        return 'Hows the day going?'
    else if (hour < 23)
        return 'Had a productive day?'
    else return 'You should sleep.'
}