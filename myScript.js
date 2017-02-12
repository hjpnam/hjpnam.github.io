YUI().use(
    'aui-scheduler',
    function(Y) {
    var events = [
        {
        content: 'Review Session',
        endDate: new Date(2017, 2, 13, 5),
        startDate: new Date(2017, 2, 13, 3)
        }
    ];
    var eventRecorder = new Y.SchedulerEventRecorder();
    var agendaView = new Y.SchedulerAgendaView();
    var dayView = new Y.SchedulerDayView();
  
    var monthView = new Y.SchedulerMonthView();
    var weekView = new Y.SchedulerWeekView();
    
    new Y.Scheduler(
      {
        activeView: weekView,
        boundingBox: '#myScheduler',
        date: new Date(),
        eventRecorder: eventRecorder,
        items: events,
        render: true,
        views: [dayView, weekView, monthView, agendaView]
      }
    );
  }
);
