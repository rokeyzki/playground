var Footer = React.createClass({
	render: function() {
		return(
		    <div className="layout bg-footer">
		        <div className="container bg-inverse padding-large-top padding-bottom">
		            <div className="line-big">
		                <div className="xl12 xs9 xm9 xb9 margin-big-bottom">
		                    <dl className="dl-inline clearfix">
		                        <dt><span className="icon-link margin-right"></span>友情链接：</dt>
		                        <dd>
		                            <ul className="list-inline">
		                                <li><a href="http://oulve.com" target="_blank">欧略工坊</a></li>
		                            </ul>
		                        </dd>
		                        <dt><span className="icon-shield margin-right"></span>技术支持：</dt>
		                        <dd>
		                            <ul className="list-inline">
		                                <li>Powered by <a href="http://oulve.com" target="_blank" title="Oulve Studio 欧略工坊 企业建站首选">欧略工坊</a></li>
		                                <li>页面耗时0.3603秒，内存占用1.03 MB，访问数据库6次</li>
		                            </ul>
		                        </dd>
		                        <dt><span className="icon-bookmark margin-right"></span>版权所有：</dt>
		                        <dd>
		                            <ul className="list-inline">
		                                <li>Copyright &#169; 2015 <a href="http://oulve.com">Oulve Studio</a>.</li>
		                                <li>All Rights Reserved.</li>
		                                <li>京ICP备20121225号</li>
		                            </ul>
		                        </dd>
		                    </dl>
		                </div>

		                <div className="xl12 xs3 xm3 xb3">
		                    <div className="border-small border-left padding-big-left">
		                        <dl>
		                            <dt><span className="icon-phone margin-right"></span>联系方式：</dt>
		                            <dd>
		                                <div className="margin-small-bottom">联系人：林川淇</div>
		                                <div>手机：18559916015</div>
		                            </dd>
		                        </dl>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
        );
    }
});