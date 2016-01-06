var Header = React.createClass({
    // loadCommentsFromServer 是自定义方法，通过this.loadCommentsFromServer 可以调用
    loadCommentsFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    // getInitialState()在组件的生命周期中仅执行一次，设置组件的初始化状态。
    getInitialState: function() {
        // 这里需要初始化所有组件内需要提供的参数（对象形式），如果不需要参数则返回null
        // 这里返回data是因为CommentBox自身的render里，render中有使用到{this.state.data} 
        return {data: []};
    },

    // componentDidMount()是一个在组件被渲染的时候React自动调用的方法
    componentDidMount: function() {
        this.loadCommentsFromServer();
         // BOM: setInterval方法指定某个任务每隔一段时间就执行一次，也就是无限次的定时执行
         // 每一个组件都根据自己的 props 渲染了自己一次。props 是不可变的：它们从父节点传递过来，被父节点“拥有”
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
        
        // 测试，文档载入之后执行的jQuery代码
        $('.icon-navicon').each(function(){
            var e=$(this);
            var target=e.attr("data-target");
            e.click(function(){
                $(target).toggleClass("nav-navicon");
            });
        });
        
    },

    render: function() {
        var data = this.state.data;

        var subLi = function(sub) {
            var subGroup = sub.map(function (s) {
                if(s.sub != null){
                    return(
                        <li>
                            <a className='text-gray' href={s.url}>{s.name}<span className='arrow'></span></a>
                            {subUl(s.sub)}
                        </li>
                    );
                }else{
                    return(
                        <li>
                            <a className='text-gray' href={s.url}>{s.name}</a>
                        </li>
                    );
                }
            });

            return(
                {subGroup}
            );
        };

        var subUl = function(sub, isTop) {
            if(isTop == true){
                return(
                    <ul className='drop-menu'>
                        {subLi(sub)}
                    </ul>
                );
            }else{
                return(
                    <ul>
                        {subLi(sub)}
                    </ul>
                );
            }
        };

        var navs = data.map(function (nav) {
            if(nav.sub != null){
                return(
                    <li>
                        <a className="text-gray" href={nav.url}>{nav.name}<span className='arrow'></span></a>
                        {subUl(nav.sub, true)}
                    </li>
                );
            }else{
                return(
                    <li>
                        <a className="text-gray" href={nav.url}>{nav.name}</a>
                    </li>
                );
            }
        });
        
        return(
            <div className="layout fixed bg bottom-box-shadow">
                <div className="container padding-top padding-bottom">
                    <div className="line">
                        <div className="xs2 xm2 xb2">
                            <button className="button icon-navicon float-right bg-white" data-target="#header-self1"></button>
                            <img className="img-responsive" src="./asset/self/img/logo/logo.png" alt="{$tw[titles]}"/>
                        </div>
                        <div className="xs10 xm10 xb10 padding-top nav-navicon" id="header-self1">
                            <div className="xl12 xs12 xm12 xb9">
                                <ul className="nav nav-menu nav-inline nav-pills">
                                    <li><a className="text-main" href="./index.html">首页</a></li>
                                    {navs}
                                </ul>
                            </div>
                            <div className="hidden-l hidden-s hidden-m xb3">
                                <form id="search_form" method="get" action="post.php">
                                    <div className="input-group padding-little-top">
                                        <input type="text" className="input s_tit" name="keyword" size="30" placeholder="关键词" value=""/>
                                        <span className="addbtn"><button type="submit" className="button bg text-gray">搜索</button></span>
                                    </div>
                                    <input type="hidden" name="mid" value="2" />
                                    <input type="hidden" name="u" value="search-index" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});