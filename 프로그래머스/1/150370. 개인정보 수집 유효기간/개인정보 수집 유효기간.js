const DAY_OF_YEAR = 28 * 12 

const parseDay = (year, month, day) => {
    return (year * DAY_OF_YEAR) + (month * 28) + day 
}

function solution(today, terms, privacies) {
    const [todayYear, todayMonth, day] = today.split(".").map(Number)
    const todayOfYear = parseDay(todayYear, todayMonth, day)
    const termsMap = new Map()
    const result = [];
    terms.forEach(term => {
        const [type, termsMonth] = term.split(" ")
        termsMap.set(type, parseInt(termsMonth) * 28)
    })
    
    privacies.forEach((privacy, idx) => {
        const [curPrivacy, type] = privacy.split(" ")
        const [privacyYear, privacyMonth, privacyDay] = curPrivacy.split(".").map(Number)
        
        const curPrivacyDay = parseDay(privacyYear, privacyMonth, privacyDay)
        const typeDay = termsMap.get(type)
        const expirationDay = curPrivacyDay + typeDay - 1
        console.log(expirationDay, todayOfYear)
        if(expirationDay < todayOfYear) {
            result.push(idx + 1)
        }
    })
    return result;
}