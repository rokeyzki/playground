var Comment = React.createClass({
    
    // render()是React实例化DOM元素的方法
    render: function() {
        return (
            // JSX语法：尖括号'<>'内运行HTML，花括号'{}'内运行JS
            // this.props：每一个组件都根据自己的 props 渲染了自己一次 
            // props 是不可变的：它们从父节点传递过来，被父节点“拥有”
            // 有一个地方需要注意，就是 class 属性需要写成 className ，for 属性需要写成 htmlFor ，这是因为 class 和 for 是 JavaScript 的保留字
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.text}
                {console.log(this.props)}
            </div>
        );
    }
});

var CommentList = React.createClass({
    
    render: function() {
        var commentNodes = this.props.data.map(function (comment) {
            return (
                // 在标签内传入 props
                <Comment author={comment.author} text={comment.text} />
            );
        });

        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

var CommentForm = React.createClass({

    // handleSubmit 是自定义方法，通过this.handleSubmit 可以调用
    handleSubmit: function(e) {
        // 在事件回调中调用preventDefault()来避免浏览器默认地提交表单
        e.preventDefault();
        
        // this.refs.foo 可以获取当前组件的对应子组件（查看ref属性）
        // 在组件上调用getDOMNode()可以获取浏览器的原生DOM元素
        var author = this.refs.author.getDOMNode().value.trim();
        var text = this.refs.text.getDOMNode().value.trim();
        if (!text || !author) {
            alert('表单数据不能为空！');
            return;
        }
        
        this.props.onCommentSubmit({author: author, text: text});
        
        // 将原生DOM元素的值清空
        this.refs.author.getDOMNode().value = '';
        this.refs.text.getDOMNode().value = '';
        return;
    },
    
    render: function() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your name" ref="author" />
                <input type="text" placeholder="Say something..." ref="text" />
                <input type="submit" value="Post" />
            </form>
        );
    }
});

var CommentBox = React.createClass({

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

    // handleCommentSubmit 是自定义方法，通过this.handleCommentSubmit 可以调用
    handleCommentSubmit: function(comment) {
        // 为了实现交互，我们给组件引进了可变的 state。this.state 是组件私有的，可以通过调用 this.setState() 来改变它。当状态更新之后，组件重新渲染自己
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});

        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: comment,
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
        // 这里返回data是因为CommentBox自身的render里，<CommentList>标签有使用到{this.state.data} 
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
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <br/><br/>
                <hr/>
                <br/><br/>
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
});

React.render(
    <CommentBox url="comments.json" pollInterval={3000} />,
    document.getElementById('content')
);