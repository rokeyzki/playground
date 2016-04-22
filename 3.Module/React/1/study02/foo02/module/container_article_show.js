var ContainerArticleShow = React.createClass({
    // componentDidMount()是一个在组件被渲染的时候React自动调用的方法
    componentDidMount: function() {
        var anime = this.props.anime;
        $('.container').eq(1).addClass(anime);
    },

    render: function() {
        
        return(
            <div className="container">
                <Banner url="./data/banner_article_show.json" />
                <Center />
            </div>
        );
    }
});