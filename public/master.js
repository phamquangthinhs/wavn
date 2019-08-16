class Storynew extends React.Component {
	open() {
		$.post('/open', { idOpen: this.props.id }, function(data){
			#...
		});
	}
	render() {
		return(
			<div className="cell small-3">
				<div className="content" onClick={this.open}>
					<img src={this.props.cover} alt=""/>
					<div className="content-overlay"></div>
					<div className="content-text">
						<h2>{this.props.titles}</h2>
						<p>{this.props.descr}</p>
					</div>
				</div>
			</div>
		)
	};
}

class Liststory extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mang: [
			{titles: "3 sai lầm khi đầu tư tài chính", cover: "/img/1.jpg", descr: "Trong tài chính, nếu bạn chỉ đầu tư sai một bước thì bạn sẽ .." },
			{titles: "3 sai lầm khi đầu tư tài chính", cover: "/img/1.jpg", descr: "Trong tài chính, nếu bạn chỉ đầu tư sai một bước thì bạn sẽ .." },
			],
		};
	}
	render() {
		return(
		 <div class="grid-x grid-padding-x">
		 {
		 	this.state.mang.map(function(story, index){
		 		return <Storynew key={index} id={index} cover={story.cover} titles={story.titles} descr= {story.descr}></Storynew>
		 	})
		 }
		 </div>	
		)
	};
}

ReactDOM.render(
	<Liststory />
	, document.getElementById('content-x')
);