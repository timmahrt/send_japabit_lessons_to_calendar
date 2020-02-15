  function getDateForLesson(lessonDateElement) {
      const clickEventText = lessonDateElement.getAttribute("onClick");
      return clickEventText.split("/")[1].split("'")[0];
  }

  function getDetailsForLesson(lessonElement) {
      const time = lessonElement.innerText.substring(0, 5);
      const teacher = lessonElement.innerText.substring(5);
      return [time, teacher];
  }

  function getDatesFromCalendar() {
    let dates = [];
    const upcomingLessons  = document.getElementsByClassName('koma lesson');
    for(let i = 0; i < upcomingLessons.length; i++) {
        let lessonElement = upcomingLessons[i];
        let lessonDateElement = lessonElement.parentElement;

        let dateString = getDateForLesson(lessonDateElement);
        let [time, teacher] = getDetailsForLesson(lessonElement);
        let dateObj = new Date(dateString + ' ' + time);
        dates.push([dateObj, teacher]);
    }

    chrome.runtime.sendMessage({dates: JSON.stringify(dates)});
  }
