
function LikeButton() {
  const [liked, setLiked] = React.useState(false);

  if (liked) {
    return 'You liked this!';
  }

  // return React.createElement(
  //   'button',
  //   {
  //     onClick: () => setLiked(true),
  //   },
  //   'Like'
  // );
  return <button onClick={() => setLiked(true)}>Like</button>;

}
const domContainer = document.getElementById('component-goes-here');
ReactDOM.render(React.createElement(LikeButton), domContainer);


ReactDOM.render(
  React.createElement(LikeButton),
  document.getElementById('component-goes-here-too')
);