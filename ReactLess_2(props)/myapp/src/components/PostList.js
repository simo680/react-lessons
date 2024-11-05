import Post from "./Post";

function PostList() {
  let data = [
    { id: 1, color: "red", title: "Title 1", text: "text 1" },
    { id: 2, color: "blue", title: "Title 2", text: "text 2" },
    { id: 3, color: "purple", title: "Title 3", text: "text 3" },
    { id: 4, color: "green", title: "Title 4", text: "text 4" },
    { id: 5, color: "red", title: "Title 5", text: "text 5" },
  ];

  return (
    <div className="post_wrapper">
      {data.map((elem) => (
        <Post
          key={elem.id}
          color={elem.color}
          title={elem.title}
          text={elem.text}
        />
      ))}
    </div>
  );
}

export default PostList;
