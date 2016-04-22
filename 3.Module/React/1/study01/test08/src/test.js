        var Comment = React.createClass({
            render: function() {
                return (  
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
            handleSubmit: function(e) {
                // 在事件回调中调用preventDefault()来避免浏览器默认地提交表单
                e.preventDefault();
                var author = this.refs.author.getDOMNode().value.trim();
                var text = this.refs.text.getDOMNode().value.trim();
                if (!text || !author) {
                    return;
                }
                this.props.onCommentSubmit({author: author, text: text});
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
            handleCommentSubmit: function(comment) {
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
            getInitialState: function() {
                return {data: []};
            },
            componentDidMount: function() {
                this.loadCommentsFromServer();
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
            <CommentBox url="./comments.json" pollInterval={2000} />,
            document.getElementById('content')
        );