var Bread = React.createClass({
    render: function() {
        // 研究如何获得url数值，暂时使用json数值代替
        var data = [{"name":"导航1", "url":"test.html"}, {"name":"导航11", "url":"test.html"}, {"name":"导航111", "url":"test.html"}]
        var breadGroup = data.map(function (bread) {
            if(bread != null){
                return(
                    <li><a href={bread.url}>{bread.name}</a></li>
                );
            }
        });

        return(
            <div className="margin-big-bottom">
                <ul className="bread bg">
                    <li><a href="./index.html"><span className="icon-home margin-right"></span>首页</a></li>
                    {breadGroup}
                    <li>文章1</li>
                </ul>
            </div>
        );
    }
});