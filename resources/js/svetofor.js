$(document).ready(function() {
    let position = "red";

    // находим все классы
    let circle = $(".circle");
    function counter(setCounterOne, setCounterTwo, classIndex0, classIndex1, classIndex2) {
        // выводим счётчик
        let timeoutId = setInterval(function () {
            classIndex0.addClass("circleBGColor1 ");
            classIndex1.html(setCounterOne);
            classIndex1.addClass("circleColor1");
            classIndex1.removeClass("circleBGColor2");

            // очищаем счетчик и добавляем класс(желтый)
            if(setCounterOne <= 3) {
                position= "red_to_yellow"
                classIndex1.addClass("circleBGColor2");
            }

            setCounterOne--;
            // при достижении нуля останавливаем таймер и удаляем клас(желтый и красный)
            if (setCounterOne === 0) {
                position = "green";

                clearInterval(timeoutId);
                classIndex1.removeClass("circleBGColor2 ");
                classIndex0.removeClass("circleBGColor1");
                let timeId = setInterval(function() {
                    // добавляем класс(зелёный)

                    classIndex2.addClass("circleBGColor3");
                    classIndex1.html(setCounterTwo);
                    classIndex1.addClass("circleColor2");

                    // добавляем второй счётчик

                    if(setCounterTwo <= 3) {
                        position = "green_to_yellow";
                        // мигание
                        setTimeout(function() {
                            classIndex1.html("");
                            classIndex1.addClass("circleBGColor2");
                            classIndex2.removeClass("circleBGColor3");
                        }, 500);
                    }
                    if(setCounterTwo === 0) {
                        position = "red";

                        clearInterval(timeId);
                        classIndex1.html("");
                        classIndex1.removeClass("circleColor2");
                    }
                    setCounterTwo--;
                }, 1000);
            }
            if (setCounterTwo === 0){
                clearInterval(timeId);
                classIndex1.removeClass("circleBGColor2 circleColor1");
                classIndex0.removeClass("circleBGColor3");
            }
        }, 1000);


    }

    let totalCounter;

    function sumTimeout(counterOne, counterTwo) {
        let sumCounterOne = counterOne * 1000;
        let sumCounterTwo = counterTwo * 1000;
        totalCounter = (sumCounterOne + sumCounterTwo) + 1000;
        return totalCounter;
    }

    setTimeout(function restartCounter() {
        let addCounterOne = 5;
        let addCounterTwo = 5;
        sumTimeout(addCounterOne, addCounterTwo);
        counter(addCounterOne, addCounterTwo, circle.eq(0), circle.eq(1), circle.eq(2));
        setTimeout(restartCounter, totalCounter);
    }, 100);

    //метод который выдаёт текст зависимости от позиции

    function getText(position){
        switch (position) {
            case "red":
                return "Проезд на красный. Штраф!"
            case "green":
                return "Проезд на зеленый!"
            case "green_to_yellow":
                return "Успели на желтый!"
            case "red_to_yellow":
                return  "Слишком рано начали движение!"

        }
    }

    //добовляет лог в таблицу

    function setLog() {
        console.log(position);
        $('#table').append(`<tr><th scope="row">${getText(position)}</th><td>${position}</td></tr>`);
        console.log("red");
    }

    //событие которое вызывает добовление в таблицу

    $('#start').on('click', function() {
        setLog(position);
    });
});


