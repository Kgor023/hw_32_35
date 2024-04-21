const btnStart: HTMLElement | null = document.querySelector(".start");
const btnSave: HTMLElement | null = document.querySelector(".save");
let btnReverse: HTMLElement | null = document.querySelector(".reverse");
const btnClear: HTMLElement | null = document.querySelector(".clear");
const btnClearAll: HTMLElement | null = document.querySelector(".clearAll");
const btnReset: HTMLElement | null = document.querySelector(".reset");
const btnHidden: NodeListOf<HTMLElement> = document.querySelectorAll(".hidden");
const hourBlcok: HTMLElement | null = document.querySelector(".time_h");
const minBlcok: HTMLElement | null = document.querySelector(".time_m");
const secBlcok: HTMLElement | null = document.querySelector(".time_s");
const msBlcok: HTMLElement | null = document.querySelector(".time_ms");
const historyBlock: HTMLElement | null = document.querySelector(".history");

let hour: number = 0;
let min: number = 0;
let sec: number = 0;
let ms: number = 0;
let timer;
if (btnStart && btnSave && btnReverse && btnClear && btnClearAll && btnReset && btnHidden && hourBlcok && minBlcok && secBlcok && msBlcok && historyBlock) {
    btnStart.addEventListener("click", () => {
        if (btnStart.textContent == "START") {
            btnStart.textContent = "STOP";
            if (reverseTimerActive) {
                clearInterval(timer);
                reverseTimer = setInterval(() => {
                    ms--;
                    if (ms == 0 && sec == 0 && min == 0 && hour == 0) {
                        clearInterval(reverseTimer);
                        msBlcok.textContent = "00";
                        for (let i = 0; i < btnHidden.length; i++) {
                            btnHidden[i].style.display = "none";
                        }
                        btnStart.textContent = "START";
                        reverseTimerActive = true;
                    } else if (ms < 1) {
                        ms = 99;
                        sec--;
                        secBlcok.textContent = "0" + sec;
                        msBlcok.textContent = String(ms);
                    }

                    if (ms <= 9) {
                        msBlcok.textContent = "0" + ms;
                    }
                    if (ms <= 99 && ms > 9) {
                        msBlcok.textContent = String(ms);
                    }

                    if (sec == 0 && min == 0 && hour == 0) {
                        secBlcok.textContent = "00";
                    } else if (sec < 1) {
                        sec = 59;
                        min--;
                        minBlcok.textContent = "0" + min;
                        secBlcok.textContent = String(sec);
                    }
                    if (sec <= 9) {
                        secBlcok.textContent = "0" + sec;
                    }
                    if (sec > 9 && sec < 59) {
                        secBlcok.textContent = String(sec);
                    }

                    if (min == 0 && hour == 0) {
                        minBlcok.textContent = "00";
                    } else if (min < 1) {
                        min = 59;
                        hour--;
                        hourBlcok.textContent = "0" + hour;
                        minBlcok.textContent = String(min);
                    }
                    if (min <= 9) {
                        minBlcok.textContent = "0" + min;
                    }
                    if (min > 9 && min < 59) {
                        minBlcok.textContent = String(min);
                    }
                    if (hour <= 9) {
                        hourBlcok.textContent = "0" + hour;
                    }
                    if (hour > 9) {
                        hourBlcok.textContent = String(hour);
                    }
                }, 10);
                reverseTimerActive = false;
            } else {
                clearInterval(reverseTimer);
                timer = setInterval(() => {
                    ms++;
                    if (ms <= 9) {
                        msBlcok.textContent = "0" + ms;
                    }
                    if (ms > 9) {
                        msBlcok.textContent = String(ms);
                    }
                    if (ms > 99) {
                        sec++;
                        ms = 0;
                        secBlcok.textContent = "0" + sec;
                        msBlcok.textContent = "0" + ms;
                    }

                    if (sec <= 9) {
                        secBlcok.textContent = "0" + sec;
                    }
                    if (sec > 9) {
                        secBlcok.textContent = String(sec);
                    }
                    if (sec > 59) {
                        sec = 0;
                        min++;
                        minBlcok.textContent = "0" + min;
                    }

                    if (min <= 9) {
                        minBlcok.textContent = "0" + min;
                    }
                    if (min > 9) {
                        minBlcok.textContent = String(min);
                    }
                    if (min > 59) {
                        min = 0;
                        hour++;
                        hourBlcok.textContent = "0" + String(hour);
                    }

                    if (hour <= 9) {
                        hourBlcok.textContent = "0" + hour;
                    }
                    if (hour > 9) {
                        hourBlcok.textContent = String(hour);
                    }
                }, 10);
                reverseTimerActive = true;
            }
        } else {
            btnStart.textContent = "START";
            clearInterval(timer);
            clearInterval(reverseTimer);
            if (reverseTimerActive) {
                reverseTimerActive = false;
            } else {
                reverseTimerActive = true;
            }
        }
        for (let i = 0; i < btnHidden.length; i++) {
            btnHidden[i].style.display = "block";
        }
    });

    btnReset.addEventListener("click", () => {
        btnStart.textContent = "START";
        clearInterval(timer);
        clearInterval(reverseTimer);
        hour = 0;
        min = 0;
        sec = 0;
        ms = 0;
        hourBlcok.textContent = "00";
        minBlcok.textContent = "00";
        secBlcok.textContent = "00";
        msBlcok.textContent = "00";
        reverseTimerActive = false;
    });

    let ol = document.createElement("ol");
    historyBlock.prepend(ol);

    let count: number = 0;
    btnSave.addEventListener("click", () => {
        let li = document.createElement("li");
        li.innerHTML = `${hourBlcok.textContent}:${minBlcok.textContent}:${secBlcok.textContent}:${msBlcok.textContent}`;
        ol.append(li);
        count++;
        localStorage.setItem(
            `${count}`,
            JSON.stringify(
                `${hourBlcok.textContent}:${minBlcok.textContent}:${secBlcok.textContent}:${msBlcok.textContent}`
            )
        );
    });

    btnClear.addEventListener("click", () => {
        ol.innerHTML = "";
    });

    btnClearAll.addEventListener("click", () => {
        btnStart.textContent = "START";
        clearInterval(timer);
        clearInterval(reverseTimer);
        hour = 0;
        min = 0;
        sec = 0;
        ms = 0;
        hourBlcok.textContent = "00";
        minBlcok.textContent = "00";
        secBlcok.textContent = "00";
        msBlcok.textContent = "00";
        ol.innerHTML = "";
        reverseTimerActive = false;
    });

    let reverseTimer;
    let reverseTimerActive: boolean = false;
    btnReverse.addEventListener("click", () => {
        if (hour == 0 && min == 0 && sec == 0 && ms == 0) {
            reverseTimerActive = false;
        }
        if (btnStart.textContent == "START") {
            if (reverseTimerActive == false) {
                reverseTimerActive = true;
            } else {
                reverseTimerActive = false;
            }
        } else if (reverseTimerActive && btnStart.textContent == "STOP") {
            clearInterval(timer);
            reverseTimer = setInterval(() => {
                ms--;
                if (ms == 0 && sec == 0 && min == 0 && hour == 0) {
                    clearInterval(reverseTimer);
                    msBlcok.textContent = "00";
                    for (let i = 0; i < btnHidden.length; i++) {
                        btnHidden[i].style.display = "none";
                    }
                    btnStart.textContent = "START";
                    reverseTimerActive = false;
                } else if (ms < 1) {
                    ms = 99;
                    sec--;
                    secBlcok.textContent = "0" + String(sec);
                    msBlcok.textContent = String(ms);
                }
                if (ms <= 9) {
                    msBlcok.textContent = "0" + ms;
                }
                if (ms <= 99 && ms > 9) {
                    msBlcok.textContent = String(ms);
                }

                if (sec == 0 && min == 0 && hour == 0) {
                    secBlcok.textContent = "00";
                } else if (sec < 1) {
                    sec = 59;
                    min--;
                    minBlcok.textContent = "0" + String(min);
                    secBlcok.textContent = String(sec);
                }
                if (sec <= 9) {
                    secBlcok.textContent = "0" + String(sec);
                }
                if (sec > 9 && sec < 59) {
                    secBlcok.textContent = String(sec);
                }

                if (min == 0 && hour == 0) {
                    minBlcok.textContent = "00";
                } else if (min < 1) {
                    min = 59;
                    hour--;
                    hourBlcok.textContent = "0" + String(hour);
                    minBlcok.textContent = String(min);
                }
                if (min <= 9) {
                    minBlcok.textContent = "0" + String(min);
                }
                if (min > 9 && min < 59) {
                    minBlcok.textContent = String(min);
                }
                if (hour <= 9) {
                    hourBlcok.textContent = "0" + String(hour);
                }
                if (hour > 9) {
                    hourBlcok.textContent = String(hour);
                }
            }, 10);
            reverseTimerActive = false;
        } else {
            clearInterval(reverseTimer);
            timer = setInterval(() => {
                ms++;
                if (ms <= 9) {
                    msBlcok.textContent = "0" + String(ms);
                }
                if (ms > 9) {
                    msBlcok.textContent = String(ms);
                }
                if (ms > 99) {
                    sec++;
                    ms = 0;
                    secBlcok.textContent = "0" + String(sec);
                    msBlcok.textContent = "0" + String(ms);
                }

                if (sec <= 9) {
                    secBlcok.textContent = "0" + String(sec);
                }
                if (sec > 9) {
                    secBlcok.textContent = String(sec);
                }
                if (sec > 59) {
                    sec = 0;
                    min++;
                    minBlcok.textContent = "0" + String(min);
                }

                if (min <= 9) {
                    minBlcok.textContent = "0" + String(min);
                }
                if (min > 9) {
                    minBlcok.textContent = String(min);
                }
                if (min > 59) {
                    min = 0;
                    hour++;
                    hourBlcok.textContent = "0" + String(hour);
                }

                if (hour <= 9) {
                    hourBlcok.textContent = "0" + String(hour);
                }
                if (hour > 9) {
                    hourBlcok.textContent = String(hour);
                }
            }, 10);
            reverseTimerActive = true;
        }
    });

    window.onbeforeunload = () => {
        localStorage.setItem(
            "timeBrowser",
            JSON.stringify(
                `${hourBlcok.textContent}:${minBlcok.textContent}:${secBlcok.textContent}:${msBlcok.textContent}`
            )
        );
        localStorage.setItem(
            "timeCode",
            JSON.stringify(`${hour}:${min}:${sec}:${ms}`)
        );
        return false;
    };

    window.onload = () => {
        const timeBrowserStr: string | null = localStorage.getItem("timeBrowser");
        const timeCodeStr: string | null = localStorage.getItem("timeCode");
        if (timeBrowserStr && timeCodeStr) {
            const newTimeBrowser: string = JSON.parse(timeBrowserStr);
            const newTimeCode: string = JSON.parse(timeCodeStr);
            let newArrBrowser = newTimeBrowser.split(":");
            let newArrCode = newTimeCode.split(":");
            hourBlcok.textContent = String(newArrBrowser[0]);
            minBlcok.textContent = String(newArrBrowser[1]);
            secBlcok.textContent = String(newArrBrowser[2]);
            msBlcok.textContent = String(newArrBrowser[3]);
            hour = Number(newArrCode[0]);
            min = Number(newArrCode[1]);
            sec = Number(newArrCode[2]);
            ms = Number(newArrCode[3]);
        };
    }
}