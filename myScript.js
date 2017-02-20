
var events = [];

YUI().use(
    'aui-scheduler',
    function(Y) {
		
		var eventRecorder = new Y.SchedulerEventRecorder();
		var dayView = new Y.SchedulerDayView();
		var agendaView = new Y.SchedulerAgendaView();
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
)


bootcards.init( {
  offCanvasBackdrop : true,
  offCanvasHideOnMainClick : true,
  enableTabletPortraitMode : true,
  disableRubberBanding : true,
  disableBreakoutSelector : 'a.no-break-out'
});
