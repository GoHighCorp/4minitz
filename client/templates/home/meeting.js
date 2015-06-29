var _meeting;   // the parent meeting of this minutes

Template.meeting.created = function () {
    console.log(this);
    _meeting = this.data;
};

Template.meeting.helpers({
    meeting: function() {
        return _meeting;
    },

    minutes: function() {
        var meeting = _meeting;
        var minIDs = meeting.minutes;
        var results = [];
        for (index = 0; index < minIDs.length; ++index) {
            var id = minIDs[index];
            var min = Minutes.findOne(id);
            results.push (min);
        }
        return results;
    }
});

Template.meeting.events({
    "click #btnHideHelp": function () {
        $(".help").hide();  // use jQuery to find and hide class
    }
});