var Title = React.createClass({
    render: function() {
        var data = {"title":"文章1", "date": "2015-05-02 17:49:50", "views": 11};
        return(
            <div className="panel margin-big-bottom">
                <div className="panel-body bg-white">
                    <div className="text-large text-center font-simsun text-shadow-small font-gradient margin-big-top margin-big-bottom">{data.title}</div>
                    <div className="text-small text-gray text-center margin-bottom">
                        <span className="icon-clock-o margin-right"></span>发布日期：{data.date}
                        <br className="show-l hidden-s hidden-m hidden-b"></br>
                        <span className="icon-eye margin-left margin-right"></span>访问人气：{data.views}
                    </div>
                </div>
            </div>
        );
    }
});