YUI().use(
  'aui-scheduler',
  function(Y) {
    var events = [
      {
        content: 'Meeting',
        endDate: new Date(2016, 2, 15, 7),
        meeting: true,
        startDate: new Date(2016, 2, 15, 3)
       
      }
    ];

    var agendaView = new Y.SchedulerAgendaView();
    var dayView = new Y.SchedulerDayView();
    var eventRecorder = new Y.SchedulerEventRecorder();
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
