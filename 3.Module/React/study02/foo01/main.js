var CommentBox = React.createClass({
    render:function(){
        return (
            <Comment/>
        );
    }
});

React.render(
    <CommentBox/>,
    document.getElementById('content')
);