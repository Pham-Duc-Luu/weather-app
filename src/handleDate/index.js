function handleDate(data, languageMode, isfull) {
    const curr = new Date(data);
    let day = curr.getDay();
    let date = curr.getDate();
    let month = curr.getMonth();
    let year = curr.getFullYear();
    let hour = curr.getHours();
    let minute = curr.getMinutes();
    let output = {};

    output.hour = hour;

    output.minute = minute;

    if (languageMode === 'VI') {
        if (isfull) {
            switch (day) {
                case 0:
                    output.day = 'Thứ hai';
                    break;
                case 1:
                    output.day = 'Thứ ba';
                    break;
                case 2:
                    output.day = 'Thứ tư';
                    break;
                case 3:
                    output.day = 'Thứ năm';
                    break;
                case 4:
                    output.day = 'Thứ sáu';
                    break;
                case 5:
                    output.day = 'Thứ bảy';
                    break;
                case 6:
                    output.day = 'Chủ nhật';
                    break;
            }

            output.date = date;

            switch (month) {
                case 0:
                    output.month = 'Tháng 1';
                    break;
                case 1:
                    output.month = 'Tháng 2';
                    break;
                case 2:
                    output.month = 'Tháng 3';
                    break;
                case 3:
                    output.month = 'Tháng 4';
                    break;
                case 4:
                    output.month = 'Tháng 5';
                    break;
                case 5:
                    output.month = 'Tháng 6';
                    break;
                case 6:
                    output.month = 'Tháng 7';
                    break;
                case 7:
                    output.month = 'Tháng 8';
                    break;
                case 8:
                    output.month = 'Tháng 9';
                    break;
                case 9:
                    output.month = 'Tháng 10';
                    break;
                case 10:
                    output.month = 'Tháng 11';
                    break;
                case 11:
                    output.month = 'Tháng 12';
                    break;
            }

            output.year = year;
        } else {
            switch (day) {
                case 0:
                    output.day = 'TH 2';
                    break;
                case 1:
                    output.day = 'TH 3';
                    break;
                case 2:
                    output.day = 'TH 4';
                    break;
                case 3:
                    output.day = 'TH 5';
                    break;
                case 4:
                    output.day = 'TH 6';
                    break;
                case 5:
                    output.day = 'TH 7';
                    break;
                case 6:
                    output.day = 'CN';
                    break;
            }

            output.date = date;

            switch (month) {
                case 0:
                    output.month = 'TH 1';
                    break;
                case 1:
                    output.month = 'TH 2';
                    break;
                case 2:
                    output.month = 'TH 3';
                    break;
                case 3:
                    output.month = 'TH 4';
                    break;
                case 4:
                    output.month = 'TH 5';
                    break;
                case 5:
                    output.month = 'TH 6';
                    break;
                case 6:
                    output.month = 'TH 7';
                    break;
                case 7:
                    output.month = 'TH 8';
                    break;
                case 8:
                    output.month = 'TH 9';
                    break;
                case 9:
                    output.month = 'TH 10';
                    break;
                case 10:
                    output.month = 'TH 11';
                    break;
                case 11:
                    output.month = 'TH 12';
                    break;
            }

            output.year = year;
        }
    } else {
        if (isfull) {
            switch (day) {
                case 0:
                    output.day = 'Monday';
                    break;
                case 1:
                    output.day = 'Tuesday';
                    break;
                case 2:
                    output.day = 'Wednesday';
                    break;
                case 3:
                    output.day = 'Thursday';
                    break;
                case 4:
                    output.day = 'Friday';
                    break;
                case 5:
                    output.day = 'Saturday';
                    break;
                case 6:
                    output.day = 'Sunday';
                    break;
            }

            output.date = date;

            switch (month) {
                case 0:
                    output.month = 'January';
                    break;
                case 1:
                    output.month = 'February';
                    break;
                case 2:
                    output.month = 'March';
                    break;
                case 3:
                    output.month = 'April';
                    break;
                case 4:
                    output.month = 'May';
                    break;
                case 5:
                    output.month = 'June';
                    break;
                case 6:
                    output.month = 'July';
                    break;
                case 7:
                    output.month = 'August';
                    break;
                case 8:
                    output.month = 'September';
                    break;
                case 9:
                    output.month = 'October';
                    break;
                case 10:
                    output.month = 'November';
                    break;
                case 11:
                    output.month = 'December';
                    break;
            }

            output.year = year;
        } else {
            switch (day) {
                case 0:
                    output.day = 'Mon';
                    break;
                case 1:
                    output.day = 'Tue';
                    break;
                case 2:
                    output.day = 'Wed';
                    break;
                case 3:
                    output.day = 'Thu';
                    break;
                case 4:
                    output.day = 'Fri';
                    break;
                case 5:
                    output.day = 'Sat';
                    break;
                case 6:
                    output.day = 'Sun';
                    break;
            }

            output.date = date;

            switch (month) {
                case 0:
                    output.month = 'Jan';
                    break;
                case 1:
                    output.month = 'Feb';
                    break;
                case 2:
                    output.month = 'Mar';
                    break;
                case 3:
                    output.month = 'Apr';
                    break;
                case 4:
                    output.month = 'May';
                    break;
                case 5:
                    output.month = 'Jun';
                    break;
                case 6:
                    output.month = 'Jul';
                    break;
                case 7:
                    output.month = 'Aug';
                    break;
                case 8:
                    output.month = 'Sep';
                    break;
                case 9:
                    output.month = 'Oct';
                    break;
                case 10:
                    output.month = 'Nov';
                    break;
                case 11:
                    output.month = 'Dec';
                    break;
            }

            output.year = year;
        }
    }

    if (output.date < 10) {
    }

    return output;
}

export default handleDate;
