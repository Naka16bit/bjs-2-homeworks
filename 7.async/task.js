class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error("Параметр не передан");
        }
        if (this.alarmCollection.find(item => item.id === id)) {
            console.error("Будильник с таким id уже существует");
            return
        }
        this.alarmCollection.push({time, callback, id});
    }

    removeClock(id) {
        let i = this.alarmCollection.findIndex(item => item.id === id);
        if (i !== -1) {
            this.alarmCollection.splice(i, 1);
            return true;
        } else {
            return false;
        }
    }

    getCurrentFormattedTime() {
        const currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        let currentFormattedTime = `${hours}:${minutes}`;
        return currentFormattedTime;
    }

    start() {
        let checkClock = (clock) => {
            let currentTime = this.getCurrentFormattedTime();
            if (clock.time === currentTime) {
                clock.callback();
            }
        }
        
        if (this.timerId === null) {
            this.timerId = setInterval (() => this.alarmCollection.forEach(checkClock), 60000);
        }
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach((item) => console.log(`Будильник №${item.id} заведён на ${item.time}`));
    }

    clearAlarms() {
        clearInterval(this.timerId);
        this.alarmCollection = [];
    }
}

function testCase() {
    let phoneAlarm = new AlarmClock();

    phoneAlarm.addClock("17:34", () => console.log("Доброе утро, последний герой!"), 1);
    phoneAlarm.addClock("17:35", () => {console.log("Доброе утро тебе и таким, как ты!"); phoneAlarm.removeClock(2)}, 2);
    phoneAlarm.addClock("17:36", () => {
        console.log("Доброе утро, последний герой!\nЗдравствуй, последний герой."); 
        phoneAlarm.clearAlarms(); 
        phoneAlarm.printAlarms()
    }, 3);
    phoneAlarm.addClock("17:33", () => console.log("Лалала"), 1);

    phoneAlarm.printAlarms();

    phoneAlarm.start();

}

testCase();

