import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">LIfe</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At delectus laudantium voluptatum necessitatibus velit, eos deserunt ab iure. Cupiditate aliquam voluptatum nostrum obcaecati autem iste aliquid aperiam adipisci voluptate voluptatem! kiren Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia nesciunt molestias repellendus necessitatibus esse harum nobis sunt veritatis sequi consequatur voluptatum fugit minima laboriosam, eveniet magni ut dolorem! Alias, consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe repellat asperiores quaerat quas voluptatibus consectetur maiores nemo quod, aut ratione maxime facilis vero sed illo odit? Cumque veritatis quaerat esse!
        Facere quo sit nobis non eveniet explicabo ad velit, laudantium qui! Iure, corporis corrupti sed nemo accusantium ab harum modi ad, debitis maxime, praesentium saepe impedit architecto iste facilis cumque.
        Tempora eum aspernatur enim rem dolore, explicabo molestiae, doloremque harum nisi totam, porro dolorum assumenda sit sunt. Asperiores rem, non quia vel inventore nesciunt incidunt eaque atque minima pariatur facere.
      </p>
    </div>
  );
}
