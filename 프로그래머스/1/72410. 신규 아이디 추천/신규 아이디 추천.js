function solution(new_id) {
    let lowerCaseId = new_id.toLowerCase();
    lowerCaseId = lowerCaseId.replace(/[^\w\-\_\.]/g, "")
    lowerCaseId = lowerCaseId.replace(/\.{2,}/g, ".")
    lowerCaseId = lowerCaseId.replace(/^\.+|\.+$/g, "")

    if(lowerCaseId === "") lowerCaseId = "a"
    if(lowerCaseId.length >= 16) {
        lowerCaseId = lowerCaseId.slice(0, 15).replace(/\.+$/g, "")
    }
    if(lowerCaseId.length <= 2) {
        while (lowerCaseId.length !== 3) {
            lowerCaseId += lowerCaseId[lowerCaseId.length - 1]
        }
    }
    return lowerCaseId
}