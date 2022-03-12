import React from "react";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Safak</b>
          </span>
          <span className="singlePostDate">1 hr ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit suscipit
          quaerat sed ut est. Deleniti velit cumque minus laboriosam asperiores,
          reiciendis in voluptatem eaque neque ullam consectetur repudiandae
          suscipit id? Ipsam aperiam debitis recusandae cumque? Dicta facilis
          maxime enim sint cumque harum inventore vitae qui repellat, adipisci
          aut nesciunt ratione repudiandae natus ex porro ipsam consequatur
          blanditiis illum hic numquam? Error sint commodi eum itaque obcaecati
          doloribus ipsum? Animi nostrum nobis pariatur maiores, omnis rerum
          vitae sapiente? Voluptates ex laboriosam quos iste quo labore tenetur
          explicabo, velit atque quis suscipit. Suscipit placeat facere
          recusandae enim perferendis dicta autem est dolorum unde dolores
          reiciendis quos asperiores consequatur, deleniti itaque consectetur
          expedita commodi, facilis alias quaerat culpa nostrum cupiditate ipsa?
          Delectus, eaque! Vel expedita illo molestiae velit magnam, omnis
          animi, molestias incidunt qui nostrum fugiat hic minus, officiis
          provident perferendis sunt saepe! Est, necessitatibus. Non officia
          quibusdam facilis tenetur consequatur vero ad. Sunt suscipit deleniti
          voluptas ad officiis facere ullam laudantium nostrum quibusdam quo
          nesciunt nam, laborum illo repellendus modi hic incidunt placeat
          obcaecati aspernatur qui, dolore mollitia dolorem labore? Perferendis,
          numquam?.
        </p>
      </div>
    </div>
  );
}
