var error = false

function calcDate() {
    let d1 = document.getElementById("date1").value;
    let d2 = document.getElementById("date2").value;
    if (d1 == "") {
        document.getElementById("mytextErrId").innerHTML = "*required";
        var error = true;
    } else {
        document.getElementById("mytextErrId").innerHTML = "";
    }
    if (d2 == "") {
        document.getElementById("mydateErrId").innerHTML = "*required";
        var error = true;
    } else {
        document.getElementById("mydateErrId").innerHTML = "";
    }
    if (error) {
        document.getElementById('result').style.display = 'none';
    } else {
        document.getElementById('result').style.display = 'block';
    }

    const dt_date1 = new Date(d1);
    const dt_date2 = new Date(d2);

    const date1_time_stamp = dt_date1.getTime();
    const date2_time_stamp = dt_date2.getTime();
    let calc;

    if (date1_time_stamp > date2_time_stamp) {
        calc = new Date(date1_time_stamp - date2_time_stamp);
    } else {
        calc = new Date(date2_time_stamp - date1_time_stamp);
    }
    const calcFormatTmp = calc.getDate() + '-' + (calc.getMonth() + 1) + '-' + calc.getFullYear();
    const calcFormat = calcFormatTmp.split("-");
    const days_passed = Number(Math.abs(calcFormat[0]) - 1);
    const months_passed = Number(Math.abs(calcFormat[1]) - 1);
    const years_passed = Number(Math.abs(calcFormat[2]) - 1970);

    const yrsTxt = ["year", "years"];
    const mnthsTxt = ["month", "months"];
    const daysTxt = ["day", "days"];

    const total_days = (years_passed * 365) + (months_passed * 30.417) + days_passed;
    const total_secs = total_days * 24 * 60 * 60;
    const total_mins = total_days * 24 * 60;
    const total_hours = total_days * 24;
    const total_weeks = (total_days >= 7) ? total_days / 7 : 0;

    const result = ((years_passed == 1) ? years_passed + ' ' + yrsTxt[0] + ' ' : (years_passed > 1) ?
            years_passed + ' ' + yrsTxt[1] + ' ' : '') +
        ((months_passed == 1) ? months_passed + ' ' + mnthsTxt[0] : (months_passed > 1) ?
            months_passed + ' ' + mnthsTxt[1] + ' ' : '') +
        ((days_passed == 1) ? days_passed + ' ' + daysTxt[0] : (days_passed > 1) ?
            days_passed + ' ' + daysTxt[1] : '');

    console.log(result.trim());
    document.getElementById('result').innerHTML = "<p>Number of total Days" + Math.round(total_days) + "</p>" +
        "<p>Number of total Weeks" + Math.round(total_weeks) + "</p>" +
        "<p>Number of total Hours" + Math.round(total_hours) + "</p>" +
        "<p>Number of total Minites" + Math.round(total_mins) + "</p>" +
        "<p>Number of  total Seconds" + Math.round(total_secs) + "</p>" +
        "<p>Numbers of years" + result.trim() + "</p>"
}