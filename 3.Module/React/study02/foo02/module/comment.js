var Comment = React.createClass({
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
    },

    render: function() {
        var data = this.state.data;

        var comments = data.map(function (comment) {
            return(
                <li>
                    <div className="media media-x">
                        <a className="float-left" href="javascript:;">
                            <img src="./asset/base/css/img/avatar/avatar.png" className="img-responsive img-border radius-circle rotate-hover" alt="avatar" />
                        </a>
                        <div className="media-body">
                            <strong>{comment.author}<small className="padding-left text-gray">({comment.ip}) {comment.date}</small></strong>
                            <span className="text-gray">{comment.content}</span>
                        </div>
                    </div>
                </li>
            );
        });

        var commentsForm = function(){
            return(
                <div className="panel margin-big-bottom">
                    <div className="panel-body bg-white">
                        <form id="ctf_form" action="./" method="post">
                            <div className="form-group">
                                <textarea rows="5" className="input" placeholder="文明上网，理性发言" data-validate="required:必填"  name="content" id="ctf_content"></textarea>
                            </div>
                            <div className="form-button">
                                <div className="float-left">
                                    <input type="text" className="input" size="20" placeholder="游客" data-validate="required:必填" id="ctf_author" name="author" value="游客" />
                                </div>
                                <div className="float-right">
                                    <button className="button" type="submit" id="ctf_submit">发布</button>
                                </div>
                                <div className="clearfix"></div>
                                <div id="ctf_tips"></div>
                                <input type="hidden" name="cid" value="" />
                                <input type="hidden" name="id" value="" />
                            </div>
                        </form>
                    </div>
                </div>
            );
        }

        if(data != '' && data != null && data != undefined){
            return(
                <div>
                    <div className="panel margin-big-bottom">
                        <div className="panel-head"><span className="icon-comments-o text-gray margin-right"></span>评论区</div>
                        <ul className="list-group bg-white">
                            {comments}
                        </ul>
                        <div className="panel-foot">
                            <div className="text-center">
                                <span className="icon-exclamation-circle margin-right"></span><small>共有 <a href="./">11</a> 条评论，<a href="./">查看全部</a></small>
                            </div>
                        </div>
                    </div>
                    {commentsForm()}
                </div>
            );
        }else{
            return(
                <div>
                    <div className="border border-small border-dashed margin-big-bottom">
                        <p className="text-center text-white margin-big-top margin-big-bottom"><span className="icon-comment-o margin-right"></span>暂无评论</p>
                    </div>
                    {commentsForm()}
                </div>
            );
        }
    }
});