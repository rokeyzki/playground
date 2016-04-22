var Comment = React.createClass({
    render: function(){
        var data = [{'title':'标题1', 'content':'内容1'}, {'title':'标题2', 'content':'内容2'}];
        var foo = data.map(function (f) {
            return(
                <div className="foo">
                    <h2>{f.title}</h2>
                    <p>{f.content}</p>
                </div>
            );
        });
        
        return(
            <div className="comment">
                {foo}
            </div>
        );
    }

});