var Center = React.createClass({
    render: function() {
        return(
            <div className="line-big">
                <div className="hidden-l xs3 xm3 xb3">
                </div>
                <div className="xl12 xs9 xm9 xb9 margin-big-bottom">
                    <Bread />
                    <Title />
                    <Article />
                    <Comment url="./data/comment.json" pollInterval={3000} />
                </div>
            </div>
        );
    }
});