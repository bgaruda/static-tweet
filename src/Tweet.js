/* Avatar Component*/

var Avatar = React.createClass({
	//var hash = "this.props.hash";
	//var url = 'https://gravatar.com/avatar';
	render: function () {
		return(
			<img src='https://gravatar.com/avatar' className="avatar" alt="avatar" />
			);
	}
});

/* Message Component*/
var Message = React.createClass({
	render:function(){
		return( <div className='message'>
			This is less than 140 characters.
			</div>);
	}
});

/* NamewithHandle Component*/
var NamewithHandle = React.createClass({
	render:function(){
		return( <span className='name-with-handle'>
			<span className='name'>Your Name</span>
			<span className='handle'>@yourhandle</span>

			</span>);
	}
});

var Time = React.createClass({
	render:function () {
		return(<span className=''>
			3h ago
			</span>);
	}
});

var ReplyButton = React.createClass({
	render: function(){
		return( <i className='fa fa-reply reply-button' />);
	}
});

var RetweetButton = React.createClass({
	render: function(){
		return( <i className='fa fa-retweet retweet-button' />);
	}
});


var LikeButton = React.createClass({
	render: function(){
		return( <i className='fa fa-heart like-button' />);
	}
});


var MoreOptionsButton = React.createClass({
	render: function(){
		return( <i className='fa fa-ellipsis-h more-options-button' />);
	}
});

var testTweet = {
	message: "Something about cats",
	gravatar: "xyz",
	author:{
		name: 'catperson',
		handle: 'IAMA cat Person',
	},
	likes:2,
	retweets: 0,
	timestamp: '2016-07-30 21:24:37'

};


var Tweet = React.createClass({
    render: function() {
        return ( < div className = 'tweet' >
            < Avatar / >
            Tweet < div className = '' >
            < NamewithHandle / >
            < Message />
            <div className='buttons'>
            	<ReplyButton />
            	<RetweetButton />
            	<LikeButton />
            	<MoreOptionsButton />
            </div>
            < /div> < /div>

        );
    }

});