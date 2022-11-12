var error = false;


function calculatedate() {
    let select = document.getElementById("years").value;
    let day = document.getElementById("days").value;
    let Hours = document.getElementById("hours").value;
    let Minutes = document.getElementById("minutes").value;
    let Second = document.getElementById("seconds").value;
    let Mile_Second = document.getElementById("mlsec").value;


    if (select == "") {
        document.getElementById("yearErrId").innerHTML = "*required";
        var error = true;
    } else {
        document.getElementById("yearErrId").innerHTML = "";
    }



    if (day > 31 || day == "") {
        if (day > 31) {
            document.getElementById("numberErrId").innerHTML = "Pic Maximum Number 31";
            var error = true;
        } else {
            document.getElementById("numberErrId").innerHTML = "*required";
            var error = true;
        }

    } else {
        document.getElementById("numberErrId").innerHTML = "";
    }


    if (Hours > 24 || Hours == "") {
        if (Hours > 24) {
            document.getElementById("hoursErrId").innerHTML = "Pic Maximum Hours 24";
            var error = true;
        } else {
            document.getElementById("hoursErrId").innerHTML = "*required";
            var error = true;
        }

    } else {
        document.getElementById("hoursErrId").innerHTML = "";
    }


    if (Minutes > 60 || Minutes == "") {
        if (Minutes > 60) {
            document.getElementById("minutesErrId").innerHTML = "Pic Maximum Minutes 60";
            var error = true;
        } else {
            document.getElementById("minutesErrId").innerHTML = "*required";
            var error = true;
        }

    } else {
        document.getElementById("minutesErrId").innerHTML = "";
    }


    if (Second > 60 || Second == "") {
        if (Second > 60) {
            document.getElementById("secondErrId").innerHTML = "Pic Maximum Second 60";
            var error = true;
        } else {
            document.getElementById("secondErrId").innerHTML = "*required";
            var error = true;
        }

    } else {
        document.getElementById("secondErrId").innerHTML = "";
    }


    if (Mile_Second > 1000 || Mile_Second == "") {
        if (Mile_Second > 100) {
            document.getElementById("mlsceErrId").innerHTML = "Pic Maximum Mil-Second 1000";
            var error = true;
        } else {
            document.getElementById("mlsceErrId").innerHTML = "*required";
            var error = true;
        }

    } else {
        document.getElementById("mlsceErrId").innerHTML = "";
    }


    if (error) {
        return
    } else {
        const calcFormat = select.split("-");
        // console.log(new Date(calcFormat[0], (calcFormat[1] - 1), day, Hours, Minutes, Second, Mile_Second));
        const Tdate = new Date(calcFormat[0], (calcFormat[1] - 1), day, Hours, Minutes, Second, Mile_Second);
        document.getElementById('result').innerHTML = "<p>Number of total Days" + Tdate + "</p>"
    }

}