export function convertNumToDate(date) {
    var months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let temp_date = date.split("-");
    return {
        month: months[Number(temp_date[1]) - 1],
        day: temp_date[2],
        year: temp_date[0].slice(2,4)
    };
}
